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
    "@graphql-codegen/typescript-operations": "^4.4.3"
  }
}
```

> ⚠️ Use `@graphql-codegen/near-operation-file-preset@^5.0.0` — a versão `^5.0.2` não existe no npm.

---

## Script

```json
{
  "scripts": {
    "types:generate": "graphql-codegen"
  }
}
```

Execute na pasta `won-frontend`:

```bash
pnpm run types:generate
```

---

## Estrutura de pastas

```
won-frontend/
├── codegen.ts
└── app/
    └── graphql/
        ├── queries/           # Queries GraphQL (gql do Apollo)
        │   └── games.ts
        └── generated/         # Tipos gerados automaticamente
            ├── globalTypes.ts # Tipos do schema
            └── games.ts       # Um arquivo por query
```

---

## Configuração (codegen.ts)

O arquivo `codegen.ts` na raiz do `won-frontend` está configurado para:

1. **Schema**: `http://localhost:1337/graphql` (Strapi)
2. **Documents**: arquivos em `app/graphql/queries/**/*.ts` que usam `gql` do Apollo
3. **Output**:
   - `globalTypes.ts` — tipos base do schema
   - Um arquivo `.ts` por query em `generated/`, com:
     - `XxxQuery` / `XxxMutation` — tipos da operação
     - `XxxQueryVariables` / `XxxMutationVariables` — tipos das variáveis
     - `XxxDocument` — `TypedDocumentNode` para uso com Apollo

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

---

## Referências

- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
- [Near Operation File Preset](https://the-guild.dev/graphql/codegen/plugins/presets/near-operation-file-preset)
- [TypedDocumentNode (Apollo)](https://www.apollographql.com/docs/react/development-testing/static-typing/#setting-up-typescript-with-apollo-client)
