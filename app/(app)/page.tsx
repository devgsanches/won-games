import { HeroSection } from './_components/hero-section'
import { ReleasesSection } from './_components/releases-section'
import { MorePopularSection } from './_components/more-popular-section'
import { FreeGamesSection } from './_components/free-games-section'
import { PromotionsSection } from './_components/promotions-section'
import { PlayNowSection } from './_components/play-now-section'

export default function Home() {
  return (
    <div className="h-full">
      {/* Hero */}
      <HeroSection />

      {/* LANÇAMENTOS */}
      <ReleasesSection />

      {/* MAIS POPULARES */}
      <MorePopularSection />

      {/* JOGOS GRÁTIS */}
      <FreeGamesSection />

      {/* PROMOÇÕES */}
      <PromotionsSection />

      {/* JOGUE AGORA */}
      <PlayNowSection />
    </div>
  )
}
