'use client'

import type { BannerProps } from '../../_components/Banner'
import { BannerSlider } from '../../_components/BannerSlider'
import { Container } from '../../_components/Container'
import type { GameCardProps } from '../../_components/GameCard'
import { GameCardSlider } from '../../_components/GameCardSlider'
import { Heading } from '../../_components/Heading'
import { Highlight, type HighlightProps } from '../../_components/Highlight'
import { Section } from '../../_components/Section'
import { Showcase } from '../../_components/Showcase'

export interface HomeProps {
  banners: BannerProps[]
  newReleasesGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
}

export function Home({
  banners,
  newReleasesGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight
}: HomeProps) {
  return (
    <div className="pb-30">
      <Section className="md:pt-24">
        <BannerSlider items={banners} />
      </Section>

      <Section className="md:bg-white-bg relative">
        <div
          className="hidden md:block absolute bg-white-bg h-32 w-full -top-32 z-0"
          style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }}
        ></div>
        <div
          className="hidden md:block absolute bg-white-bg h-32 w-full -bottom-32 z-0"
          style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }}
        ></div>

        <Showcase
          title="New Releases"
          titleColor="black"
          mobileTitleColor="white"
          games={newReleasesGames}
          arrowColor="black"
          arrowColorMobile="white"
        />
      </Section>

      <Section>
        <Showcase
          title="Most Populars"
          titleColor="white"
          gameHighlight={mostPopularHighlight}
          games={newReleasesGames}
          arrowColor="white"
        />
      </Section>

      <Section>
        <Showcase
          title="Upcoming"
          titleColor="white"
          gameHighlight={upcomingHighlight}
          games={upcomingGames}
          arrowColor="white"
        />
      </Section>

      <Section>
        <Showcase
          gameHighlight={upcomingHighlight}
          games={upcomingGames}
          arrowColor="white"
        />
      </Section>
    </div>
  )
}
