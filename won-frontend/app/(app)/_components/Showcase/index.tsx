'use client'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '../Container'
import { GameCardSlider } from '../GameCardSlider'
import { Heading } from '../Heading'
import { Highlight } from '../Highlight'
import type { GamesNewReleases } from '@/app/graphql/queries/get-new-releases'

export type ShowcaseProps = {
  games: GamesNewReleases[]
  title?: string
  titleColor?: 'white' | 'black'
  mobileTitleColor?: 'white' | 'black'
  arrowColor?: 'white' | 'black'
  arrowColorMobile?: 'white' | 'black'
}

export function Showcase({
  games,
  title = 'New Releases',
  titleColor = 'white',
  mobileTitleColor = 'white',
  arrowColor = 'black',
  arrowColorMobile = 'white',
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
      {games && <Highlight title={games[0]?.title ?? ''} subtitle={games[0]?.short_description ?? ''} textDirection={'right'} textButton={'Buy now'} />}

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
