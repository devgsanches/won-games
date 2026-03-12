import type { GamesNewReleases } from '@/app/queries/get-new-releases'
import type { BannerProps } from '../../_components/Banner'
import { BannerSlider } from '../../_components/BannerSlider'
import type { GameCardProps } from '../../_components/GameCard'
import { Section } from '../../_components/Section'
import { Showcase } from '../../_components/Showcase'

export interface GameCardResponse {
  cover: {
    url: string
  }
  title: string
  slug: string
  developers: {
    name: string
  }[]
}

export interface HomeProps {
  banners: BannerProps[]
  newReleases: GamesNewReleases[]
  // mostPopularHighlight: HighlightProps
  // mostPopularGames: GameCardProps[]
  // upcomingGames: GameCardProps[]
  // upcomingHighlight: HighlightProps
}

export function Home({
  banners,
  newReleases,
  // mostPopularHighlight,
  // mostPopularGames,
  // upcomingGames,
  // upcomingHighlight
}: HomeProps) {


  /* Apollo ClientSide Render

  const { loadingGamesBanner, errorGamesBanner, gamesBanner } = useGetGamesBanner()

  onst { loading, error, newReleases } = useGetReleasesBanner() */


  return (
    <div className="pb-30" >
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
          games={newReleases}
          titleColor='black'
          mobileTitleColor='white'
          arrowColor='black'
        />
      </Section>

      <Section>
        <Showcase
          title="Most Populars"
          titleColor="white"
          mobileTitleColor='white'
          arrowColor='white'
          games={[]}
        />
      </Section>

      {/* <Section>
        <Showcase
          title="Upcoming"
          titleColor="white"
          gameHighlight={upcomingHighlight}
          games={newReleases}
          arrowColor="white"
        />
      </Section>

      <Section>
        <Showcase
          gameHighlight={upcomingHighlight}
          games={newReleases}
          arrowColor="white"
        />
      </Section> */}
    </div>
  )
}
