import { query } from '@/app/(app)/_lib/apollo-client'
import { Game } from '@/app/(app)/_templates/Game'
import { GET_GAME_BY_SLUG, type GetGameBySlugResponse } from '@/app/queries/get-game-by-slug'
import { notFound } from 'next/navigation'


type GamePageProps = {
  params: Promise<{ slug: string }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params

  // Game

  const gameData = await query<GetGameBySlugResponse>({
    query: GET_GAME_BY_SLUG,
    variables: { slug },
    context: { fetchOptions: { next: { revalidate: 300 } } },
  })

  if (!gameData?.data?.games?.[0]) {
    return notFound()
  }

  const game = gameData.data.games[0]

  return <Game game={game} />
}
