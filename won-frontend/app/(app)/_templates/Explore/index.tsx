'use client'

import { useState, useCallback } from 'react'
import { Search } from 'lucide-react'
import { Container } from '../../_components/Container'
import { ExploreSidebar, FilterValues } from '../../_components/ExploreSidebar'
import { TextField } from '../../_components/TextField'
import { GameCard } from '../../_components/GameCard'
import useMediaQuery from '@mui/material/useMediaQuery'

import games from '../../_components/GameCardSlider/mock'

export function ExploreTemplate() {
  const isMobile = useMediaQuery('(max-width: 768px)')
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

  // TODO: Quando os games tiverem dados reais, filtrar aqui
  // Por enquanto exibe todos os games
  const filteredGames = games

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
            {filteredGames.map((g, i) => (
              <GameCard
                key={i}
                id={g.id}
                imgUrl={g.imgUrl}
                name={g.name}
                price={g.price}
                slug={g.slug}
                developer={g.developer}
                size={isMobile ? 'full' : 'small'}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
