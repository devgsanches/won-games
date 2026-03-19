'use client'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '../Container'
import { GameCardSlider } from '../GameCardSlider'
import { Heading } from '../Heading'
import { Highlight } from '../Highlight'
import type { GamesNewReleases } from '@/app/graphql/queries/get-new-releases'

export type ShowcaseProps = {
  games: GamesNewReleases[]
  title: string
  titleColor?: 'white' | 'black'
  mobileTitleColor?: 'white' | 'black'
  arrowColor?: 'white' | 'black'
  arrowColorMobile?: 'white' | 'black'
  hasHighlight?: boolean
  isMostPopularGames?: boolean
  bannerTitle?: string
  bannerSubtitle?: string
  isFreeGames?: boolean
}

export function Showcase({
  games,
  title,
  titleColor = 'white',
  mobileTitleColor = 'white',
  arrowColor = 'black',
  arrowColorMobile = 'white',
  hasHighlight = false,
  isMostPopularGames = false,
  bannerTitle,
  bannerSubtitle,
  isFreeGames = false,
}: ShowcaseProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Container className="mt-12">
      {title && (
        <div className="pl-grid-gutter">
          <Heading
            text={title}
            color={isMobile ? mobileTitleColor : titleColor}
            decorate={{ color: 'secondary', orientation: 'vertical' }}
            size={isMobile ? 'xxlarge' : 'xxxlarge'}
          />
        </div>
      )}
      {games && hasHighlight && <Highlight title={bannerTitle ?? 'School has never been this dangerous'} subtitle={bannerSubtitle ?? 'Master the hallways, face the bullies and make your name'} textDirection={'right'} textButton={'Buy now'} isMostPopularGames={isMostPopularGames} isFreeGames={isFreeGames}/>}

      {games && (
        <div className="pl-grid-gutter">
          <GameCardSlider
            items={games}
            arrowColor={isMobile ? arrowColorMobile : arrowColor}
          />
        </div>
      )}
    </Container>
  )
}
