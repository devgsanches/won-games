import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '../Container'
import type { GameCardProps } from '../GameCard'
import { GameCardSlider } from '../GameCardSlider'
import { Heading } from '../Heading'
import { Highlight, type HighlightProps } from '../Highlight'

export interface ShowcaseProps {
  title?: string
  titleColor?: 'white' | 'black'
  mobileTitleColor?: 'white' | 'black'
  gameHighlight?: HighlightProps
  games?: GameCardProps[]
  arrowColor?: 'white' | 'black'
  arrowColorMobile?: 'white' | 'black'
}

export function Showcase({
  title,
  titleColor,
  mobileTitleColor = 'white',
  gameHighlight,
  games,
  arrowColor,
  arrowColorMobile = 'white'
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
      {gameHighlight && <Highlight {...gameHighlight} />}

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
