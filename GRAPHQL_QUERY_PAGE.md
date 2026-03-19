# Query + Página tipada — Guia rápido

Quando criar uma query para uma página, siga estes passos.

---

## 1. Criar a query

`app/graphql/queries/nome-da-query.ts`:

```ts
import { gql } from '@apollo/client'

export const GET_ALGO = gql`
  query GetAlgo($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      title
      price
      # ... campos
    }
  }
`
```

## 2. Gerar tipos

```bash
pnpm run types:generate
```

## 3. Na página

```ts
import { query } from '@/app/(app)/_lib/apollo-client'
import { GetAlgoDocument } from '@/app/graphql/generated/nome-da-query'
import type { GetAlgoQuery } from '@/app/graphql/generated/nome-da-query'

// Exportar para o template usar
export type MeuItem = NonNullable<
  import('@/app/graphql/generated/nome-da-query').GetAlgoQuery['games'][number]
>

export default async function MinhaPage({ params }) {
  const { slug } = await params

  const { data, error } = await query<GetAlgoQuery>({
    query: GetAlgoDocument,
    variables: { slug },
  })

  if (error) console.error('[MinhaPage]', error.message)

  const item = data?.games?.[0]
  if (!item) return notFound()

  return <MeuTemplate {...item} />
}
```

## 4. No template

```ts
import type { MeuItem } from '../minha-page'

export function MeuTemplate(item: MeuItem) {
  // item totalmente tipado
}
```

---

## Resumo

| O quê | Para quê |
|-------|----------|
| `GetXxxDocument` | Passar em `query:` |
| `GetXxxQuery` | Tipar `query<GetXxxQuery>({...})` |
| `MeuItem` | Tipo do item único — **exportar** da página, importar no template |
| `NonNullable<GetXxxQuery['campo'][number]>` | Definir o tipo `MeuItem` |
