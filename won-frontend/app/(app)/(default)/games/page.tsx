import { GET_GAMES } from '@/app/queries/get-games-banner'
import { query } from '../../_lib/apollo-client'
import { ExploreTemplate } from '../../_templates/Explore'
import { notFound } from 'next/navigation'

export const revalidate = 60

export type Game = {
  title: string
  slug: string
  cover: { url: string }
  developers: { name: string }[]
  price: number
}

type GetGamesResponse = {
  games: Game[]
}

async function getGames(): Promise<Game[]> {
  const { data } = await query<GetGamesResponse>({
    query: GET_GAMES,
  })

  if (!data) {
    return notFound()
  }

  return data.games
}

export default async function ExplorePage() {
  const games = await getGames()

  return <ExploreTemplate games={games} />
}
