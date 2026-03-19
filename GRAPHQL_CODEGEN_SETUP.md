# Setup do GraphQL Code Generator

Documentação do setup de geração de tipos GraphQL para uso com Apollo Client no projeto won-games.

---

## Pré-requisitos

1. **Strapi (ou backend GraphQL)** rodando em `http://localhost:1337`
2. **pnpm** instalado

---

## Pacotes (won-frontend)

```json
{
  "devDependencies": {
    "@graphql-codegen/cli": "^5.0.2",
    "@graphql-codegen/near-operation-file-preset": "^5.0.0",
    "@graphql-codegen/typed-document-node": "^5.0.2",
    "@graphql-codegen/typescript": "^4.0.7",
    "@graphql-codegen/typescript-operations": "^4.4.3",
    "fs-extra": "^11.3.0"
  }
}
```

> ⚠️ Use `@graphql-codegen/near-operation-file-preset@^5.0.0` — a versão `^5.0.2` não existe no npm.

---

## Scripts (scripts/)

| Arquivo | Função |
|---------|--------|
| `fetch-schema.js` | Baixa o schema via introspection de `GRAPHQL_SCHEMA_URL` (default: `http://localhost:1337/graphql`) para `schema-temp.gql` |
| `convertToNonNull.js` | Converte listas de tipos nomeados para non-null (`[Developer]` → `[Developer!]!`), gerando `schema.gql` e removendo `schema-temp.gql` |

Também necessários para o fluxo de conversão do schema:
- `fs-extra` — usado pelo `convertToNonNull.js`
- `graphql` — já em dependencies

---

## Script

```json
{
  "scripts": {
    "types:generate": "node scripts/fetch-schema.js && node scripts/convertToNonNull.js && graphql-codegen"
  }
}
```

O comando executa em sequência:
1. **fetch-schema.js** — baixa o schema do Strapi para `schema-temp.gql`
2. **convertToNonNull.js** — converte listas de relações para non-null (`[Developer]` → `[Developer!]!`), remove `null` dos itens
3. **graphql-codegen** — gera os tipos usando o schema convertido (`schema.gql`)

Execute na pasta `won-frontend`:

```bash
pnpm run types:generate
```

---

## Scripts de pré-processamento

Antes do codegen, dois scripts são executados:

| Script                | Função                                                                 |
|-----------------------|------------------------------------------------------------------------|
| `scripts/fetch-schema.js` | Baixa o schema via introspecção do Strapi e salva em `schema-temp.gql` |
| `scripts/convertToNonNull.js` | Converte `[Type]` → `[Type!]!` (remove null dos itens em listas de relações) |

Dependência adicional: `fs-extra` (devDependency).

---

## Estrutura de pastas

```
won-frontend/
├── scripts/
│   ├── fetch-schema.js
│   └── convertToNonNull.js
├── codegen.ts
└── app/
    └── graphql/
        ├── fragments/         # Fragments GraphQL reutilizáveis
        │   ├── game.ts
        │   └── highlight.ts
        ├── queries/           # Queries GraphQL (gql do Apollo)
        │   └── games.ts
        └── generated/         # Tipos gerados automaticamente
            ├── globalTypes.ts # Tipos do schema
            └── games.ts       # Um arquivo por query
```

---

## Configuração (codegen.ts)

O arquivo `codegen.ts` na raiz do `won-frontend` está configurado para:

1. **Schema**: `./schema.gql` (gerado pelos scripts, com listas convertidas para non-null)
2. **Documents**: arquivos em `app/graphql/queries/**/*.ts` e `app/graphql/fragments/**/*.ts` que usam `gql` do Apollo (os fragments precisam estar nos documents para serem resolvidos quando usados nas queries)
3. **Output**:
   - `globalTypes.ts` — tipos base do schema
   - Um arquivo `.ts` por query em `generated/`, com:
     - `XxxQuery` / `XxxMutation` — tipos da operação
     - `XxxQueryVariables` / `XxxMutationVariables` — tipos das variáveis
     - `XxxDocument` — `TypedDocumentNode` para uso com Apollo

---

## Como criar e usar fragments

Fragmentos permitem reutilizar campos em várias queries. Eles precisam estar em `app/graphql/fragments/` para o codegen resolvê-los.

1. Crie um fragment em `app/graphql/fragments/`, por exemplo `game.ts`:

```ts
import { gql } from "@apollo/client";

export const GameFragment = gql`
  fragment GameFragment on Game {
    title
    cover { url }
    developers { name }
    slug
    price
    release_date
  }
`;
```

2. Use o fragment na query importando e interpolando:

```ts
import { gql } from "@apollo/client";
import { GameFragment } from "../fragments/game";

export const GET_GAMES = gql`
  query GetGames($limit: Int!) {
    games(pagination: { limit: $limit }, sort: ["updatedAt:desc"]) {
      ...GameFragment
    }
  }
  ${GameFragment}
`;
```

3. Execute `pnpm run types:generate` — o codegen carrega queries e fragments, resolvendo as referências.

---

## Como criar uma nova query

1. Crie um arquivo em `app/graphql/queries/`, por exemplo `meus-jogos.ts`:

```ts
import { gql } from "@apollo/client";

export const GET_MEUS_JOGOS = gql`
  query GetMeusJogos($userId: ID!) {
    meusJogos(userId: $userId) {
      title
      slug
      price
    }
  }
`;
```

2. Execute a geração:

```bash
cd won-frontend && pnpm run types:generate
```

3. Será gerado `app/graphql/generated/meus-jogos.ts` com:
   - `GetMeusJogosQuery`
   - `GetMeusJogosQueryVariables`
   - `GetMeusJogosDocument`

4. Use no código:

```ts
import {
  GetMeusJogosDocument,
  type GetMeusJogosQuery,
} from "@/app/graphql/generated/meus-jogos";

const { data } = await client.query({
  query: GetMeusJogosDocument,
  variables: { userId: "123" },
});

// data é tipado como GetMeusJogosQuery
```

---

## Fluxo completo: Query + Página tipada (exemplo Game)

> 📋 **Guia rápido:** para uma versão resumida, veja [GRAPHQL_QUERY_PAGE.md](./GRAPHQL_QUERY_PAGE.md).

Sempre que criar uma query para uma página, siga estes passos para ter tudo tipado. Exemplo com a página do jogo.

### Resumo — o que fazer/exportar

| O quê | Onde | Para quê |
|-------|------|----------|
| `GetXxxDocument` | Importar do `generated/nome.ts` | Passar em `query: GetXxxDocument` na chamada Apollo |
| `GetXxxQuery` | Importar como tipo | Tipar `query<GetXxxQuery>({...})` |
| `MeuItem` | **Exportar** da página | Tipo do item único para o template e componentes filhos |
| `NonNullable<GetXxxQuery['campo'][number]>` | Usar na definição do tipo | Extrair o tipo de um item da lista retornada pela query |

### 1. Criar a query

Arquivo: `app/graphql/queries/game-by-slug.ts`

```ts
import { gql } from "@apollo/client"

export const GET_GAME_BY_SLUG = gql`
  query GetGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      title
      short_description
      description
      cover { url }
      developers { name }
      platforms { name }
      categories { name }
      price
      gallery { url }
      rating
      release_date
    }
  }
`
```

### 2. Gerar os tipos

```bash
pnpm run types:generate
```

Isso cria `app/graphql/generated/game-by-slug.ts` com:
- `GetGameBySlugQuery` — tipo da resposta
- `GetGameBySlugQueryVariables` — tipo das variáveis
- `GetGameBySlugDocument` — query tipada para o Apollo

### 3. Na página: o que importar e exportar

Arquivo: `app/(app)/(game-layout)/game/[slug]/page.tsx`

```ts
import { query } from '@/app/(app)/_lib/apollo-client'
import { Game } from '@/app/(app)/_templates/Game'
import { GetGameBySlugDocument } from '@/app/graphql/generated/game-by-slug'
import type { GetGameBySlugQuery } from '@/app/graphql/generated/game-by-slug'
import { notFound } from 'next/navigation'

export type GameBySlug = NonNullable<
  import('@/app/graphql/generated/game-by-slug').GetGameBySlugQuery['games'][number]
>

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params

  const { data, error } = await query<GetGameBySlugQuery>({
    query: GetGameBySlugDocument,
    variables: { slug },
    context: { fetchOptions: { next: { revalidate: 300 } } },
  })

  if (error) {
    console.error('[GamePage] Erro ao buscar jogo:', error.message)
  }

  const game = data?.games?.[0]
  if (!game) return notFound()

  return <Game {...game} />
}
```

### 4. No template: receber o tipo exportado

Arquivo: `app/(app)/_templates/Game/index.tsx`

```ts
import type { GameBySlug } from '../../(game-layout)/game/[slug]/page'

export function Game(game: GameBySlug) {
  // game está tipado: title, cover, developers, etc.
  return (
    <GameInfo
      title={game.title}
      description={game.short_description}
      price={game.price}
      developers={game.developers}
      cover={game.cover?.url}
    />
  )
}
```

### Checklist rápido

| Passo | O que fazer |
|-------|-------------|
| 1 | Criar `queries/nome-da-query.ts` com `gql` |
| 2 | Rodar `pnpm run types:generate` |
| 3 | Na página: importar `GetXxxDocument` e `GetXxxQuery` |
| 4 | Exportar tipo do item: `export type MeuTipo = NonNullable<GetXxxQuery['campo'][number]>` |
| 5 | Usar `GetXxxDocument` na chamada e tipar com `GetXxxQuery` |
| 6 | No template: importar o tipo exportado da página |

---

## Nome dos arquivos gerados

O preset `near-operation-file` usa o **nome do arquivo de origem** para o arquivo gerado:

- `queries/games.ts` → `generated/games.ts`
- `queries/meus-jogos.ts` → `generated/meus-jogos.ts`

---

## Problemas comuns

### Preset não encontrado

```
Unable to find preset matching 'near-operation-file'
```

- Instale: `pnpm add -D @graphql-codegen/near-operation-file-preset@^5.0.0`
- Não use `^5.0.2` (versão inexistente)

### Schema inacessível

- Verifique se o Strapi está rodando em `http://localhost:1337`
- Teste: `curl http://localhost:1337/graphql`

### Lockfile desatualizado

```bash
pnpm install --no-frozen-lockfile
```

### Unknown fragment "XxxFragment"

```
Error: Unknown fragment "GameFragment" at .../queries/games.ts:7:10
```

Isso ocorre quando um fragment é usado em uma query mas não está configurado nos **documents** do codegen. Certifique-se de que `app/graphql/fragments/**/*.ts` está incluído em `documents` no `codegen.ts`:

```ts
documents: [
  'app/graphql/queries/**/*.ts',
  'app/graphql/fragments/**/*.ts',
],
```

---

## Referências

- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
- [Near Operation File Preset](https://the-guild.dev/graphql/codegen/plugins/presets/near-operation-file-preset)
- [TypedDocumentNode (Apollo)](https://www.apollographql.com/docs/react/development-testing/static-typing/#setting-up-typescript-with-apollo-client)
