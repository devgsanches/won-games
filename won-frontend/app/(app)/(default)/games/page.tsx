import { GetGamesDocument } from '@/app/graphql/generated/games'
import { query } from '../../_lib/apollo-client'
import { ExploreTemplate } from '../../_templates/Explore'
import { notFound } from 'next/navigation'
import { z } from 'zod'

export const revalidate = 60

export type Game = NonNullable<
  import('@/app/graphql/generated/games').GetGamesQuery['games'][number]
>

const GAMES_PER_PAGE = 6

const pageSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

async function getGames(page: number): Promise<Game[]> {
  const { data } = await query({
    query: GetGamesDocument,
    variables: {
      limit: 6,
      start: (page - 1) * GAMES_PER_PAGE,
    },
  })

  if (!data) {
    return notFound()
  }

  return data.games
}

type PageProps = {
  searchParams: Promise<{ page?: string }>
}

export default async function ExplorePage({ searchParams }: PageProps) {
  const { page: pageParam } = await searchParams

  const result = pageSchema.safeParse(pageParam)

  const page = result.success ? result.data : 1
  const games = await getGames(page)

  return (
    <ExploreTemplate
      games={games}
      currentPage={page}
      hasMore={games.length === GAMES_PER_PAGE}
    />
  )
}
