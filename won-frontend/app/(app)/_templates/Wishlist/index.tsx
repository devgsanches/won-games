'use client'

import { Heading } from '../../_components/Heading'

import { Separator } from '@/components/ui/separator'
import { Showcase } from '../../_components/Showcase'
import mostPopularHighlight from '../../_components/Highlight/mock'
import mostPopularGames from '../../_components/GameCardSlider/mock'
import { EmptyDecorate } from '../../_components/Empty'
import { Container } from '../../_components/Container'
import { GameCard, type GameCardProps } from '../../_components/GameCard'
import useMediaQuery from '@mui/material/useMediaQuery'

export interface WishlistProps {
  games: GameCardProps[]
}

export function Wishlist({ games = [] }: WishlistProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div className="pb-30 mt-20.25 ">
      <Container className={isMobile ? 'px-grid-gutter' : ''}>
        <div>
          <Heading
            text="Wishlist"
            color="white"
            size="xxlarge"
            decorate={{ color: 'secondary', orientation: 'vertical' }}
          />
        </div>

        {games.length === 0 ? (
          <div className="space-y-10">
            <div>
              <EmptyDecorate />
            </div>

            <Separator
              orientation="horizontal"
              className="bg-xxlight-gray/30"
            />

            <Showcase
              gameHighlight={mostPopularHighlight}
              title="You may also like"
              titleColor="white"
              games={mostPopularGames}
              arrowColor="white"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-28 gap-y-6">
            {games.map((game, i) => (
              <GameCard
                key={i}
                {...game}
                size={isMobile ? 'full' : 'small'}
                wishlist
              />
            ))}
          </div>
        )}
        <Separator
          orientation="horizontal"
          className="bg-xxlight-gray/30 mt-28 mb-16"
        />
      </Container>
      <Showcase
        gameHighlight={mostPopularHighlight}
        title="You may also like"
        titleColor="white"
        games={mostPopularGames}
        arrowColor="white"
      />
    </div>
  )
}
