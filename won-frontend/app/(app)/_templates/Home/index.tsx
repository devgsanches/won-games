import { BannerSlider } from '../../_components/BannerSlider'
import { Section } from '../../_components/Section'
import { Showcase } from '../../_components/Showcase'
import type { GetHomeQuery } from '@/app/graphql/generated/home'

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

export function Home({
  banners,
  newReleases,
  upcoming: upcomingGames,
  free: freeGames,
  sections,
  // mostPopularHighlight,
  // mostPopularGames,
  // upcomingHighlight
}: GetHomeQuery) {


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
          title={sections?.newGames?.title ?? 'New Releases'}
          games={newReleases}
          titleColor='black'
          mobileTitleColor='white'
          arrowColor='black'
          hasHighlight
        />
      </Section>

      {/* Most Popular Games */}
      <Section>
        <Showcase
          title={sections?.popularGames?.title ?? 'Popular Games'}
          games={sections?.popularGames?.games ?? []}
          titleColor='white'
          mobileTitleColor='white'
          arrowColor='white'
          hasHighlight
          isMostPopularGames
          bannerTitle='Red Dead is back!'
          bannerSubtitle='Come and discover the new adventures of John Marston'
        />
      </Section>

      <Section>
        <Showcase
          title={sections?.upcomingGames?.title ?? 'Upcoming'}
          titleColor="white"
          games={upcomingGames}
          arrowColor="white"
        />
      </Section>

      <Section>
        <Showcase
          title={sections?.freeGames?.title ?? 'Free'}
          titleColor="white"
          mobileTitleColor='white'
          arrowColor='white'
          games={freeGames}
          hasHighlight
          isFreeGames
          bannerTitle='Are you familiar with the classic CS:GO?'
          bannerSubtitle='Play one of the greatest FPS classics'
        />
      </Section>



      {/* <Section>
        <Showcase
          games={newReleases}
          arrowColor="white"
        />
      </Section> */}
    </div>
  )
}
