import { Home } from '../_templates/Home'

import { query } from "../_lib/apollo-client"
import { GET_GAMES_BANNER, type GetGamesBannerResponse } from '@/app/queries/get-games-banner'
import { GET_NEW_RELEASES, type GamesNewReleasesResponse } from '@/app/queries/get-new-releases'


// Banners
const bannerData = await query<GetGamesBannerResponse>({
  query: GET_GAMES_BANNER,
});
const banners = bannerData?.data?.games ?? []


// New Releases
const newReleasesData = await query<GamesNewReleasesResponse>({
  query: GET_NEW_RELEASES,
});

const newReleases = newReleasesData?.data?.games ?? []

const props = {
  banners,
  newReleases
}

const HomePage = async () => {
  console.log({
    newReleases
  });

  return <Home {...props} />
}

export default HomePage
