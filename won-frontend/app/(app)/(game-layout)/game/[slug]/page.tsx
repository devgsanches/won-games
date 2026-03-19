import { query } from '@/app/(app)/_lib/apollo-client'
import { Game } from '@/app/(app)/_templates/Game'
import type { GetGameBySlugQuery } from '@/app/graphql/generated/game-by-slug'
import { notFound } from 'next/navigation'
import { GetGameBySlugDocument } from '@/app/graphql/generated/game-by-slug'


type GamePageProps = {
  params: Promise<{ slug: string }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params

  const slugReplaced = slug.replace(/-/g, '_')

  console.log({ slugReplaced });


  const { data, error } = await query<GetGameBySlugQuery>({
    query: GetGameBySlugDocument,
    variables: { slug: slugReplaced },
    context: { fetchOptions: { next: { revalidate: 300 } } },
  })

  if (error) {
    console.error('[GamePage] Erro ao buscar jogo:', error.message)
  }

  const game = data?.games?.[0]

  console.log({ game });


  if (!game) {
    return notFound()
  }
  return <Game {...game} />
}
