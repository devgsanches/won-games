import { Home, type HomeProps } from '../_templates/Home'
import banners from '../_components/BannerSlider/mock'

import newReleasesGames from '../_components/GameCardSlider/mock'

import mostPopularHighlight from '../_components/Highlight/mock'

import mostPopularGames from '../_components/GameCardSlider/mock'

import upcomingGames from '../_components/GameCardSlider/mock'

import upcomingHighlight from '../_components/Highlight/mock'

const props: HomeProps = {
  banners,
  newReleasesGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight
}

const HomePage = () => {
  return <Home {...props} />
}

export default HomePage
