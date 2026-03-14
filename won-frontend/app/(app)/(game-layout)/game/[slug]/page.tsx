import { query } from '@/app/(app)/_lib/apollo-client'
import { Game } from '@/app/(app)/_templates/Game'
import type { GetGameBySlugQuery } from '@/app/graphql/generated/game-by-slug'
import { notFound } from 'next/navigation'
import { GetGameBySlugDocument } from '@/app/graphql/generated/game-by-slug'

export type GameBySlug = NonNullable<
  import('@/app/graphql/generated/game-by-slug').GetGameBySlugQuery['games'][number]
>

type GamePageProps = {
  params: Promise<{ slug: string }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params

  const { data, error } = await query<GetGameBySlugQuery>({
    query: GetGameBySlugDocument,
    variables: { slug: slug },
    context: { fetchOptions: { next: { revalidate: 300 } } },
  })

  if (error) {
    console.error('[GamePage] Erro ao buscar jogo:', error.message)
  }

  const game = data?.games?.[0]

  if (!game) {
    return notFound()
  }
  return <Game {...game} />
}
