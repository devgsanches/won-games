'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Container } from '../../_components/Container'
import { ExploreSidebar, FilterValues } from '../../_components/ExploreSidebar'
import { TextField } from '../../_components/TextField'
import { GameCard } from '../../_components/GameCard'
import useMediaQuery from '@mui/material/useMediaQuery'

import type { Game } from '../../(default)/games/page'
import { ShowMore } from '../../_components/ShowMore'

export function ExploreTemplate({
  games,
  currentPage,
  hasMore,
}: {
  games: Game[]
  currentPage: number
  hasMore: boolean
}) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const pageParam = searchParams.get('page')
  const page = Number(pageParam)

  useEffect(() => {
    if (page <= 0) {
      router.replace('/games?page=1')
    }
  }, [searchParams, router])

  const defaultFilters: FilterValues = {
    price: ['under-50', 'free', 'discount'],
    sortBy: 'high-to-low',
    platforms: ['windows'],
    categories: ['action', 'adventure', 'terror']
  }

  const [filters, setFilters] = useState<FilterValues>(defaultFilters)

  const handleFilterChange = useCallback((newFilters: FilterValues) => {
    setFilters(newFilters)
  }, [])

  const hasGames = games.length > 0 || hasMore

  return (
    <Container>
      <div className="py-20 px-6 md:px-0 flex flex-col md:flex-row w-full gap-4 md:gap-24">
        <ExploreSidebar
          defaultValues={defaultFilters}
          onFilterChange={handleFilterChange}
        />
        <div className="flex-1 flex flex-col gap-5.25">
          <div className="w-73.25 hidden md:block">
            <TextField
              placeholder="What are you looking for?"
              search
              direction="right"
              icon={<Search />}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 gap-x-26">
            {games.map((g) => (
              <GameCard
                key={g.slug}
                cover={g.cover}
                title={g.title}
                developers={g.developers}
                price={g.price}
                slug={g.slug}
                size={isMobile ? 'full' : 'small'}
              />
            ))}
          </div>
          <ShowMore currentPage={currentPage} hasGames={hasGames} />
        </div>
      </div>
    </Container>
  )
}
