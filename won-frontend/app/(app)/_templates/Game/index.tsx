import {
  GameAbout,
  type GameAboutProps
} from '@/app/(app)/_components/GameAbout'
import {
  GameGallery,
  type GalleryImageProps,
  type GameGalleryProps
} from '@/app/(app)/_components/GameGallery'
import { GameInfo, type GameInfoProps } from '@/app/(app)/_components/GameInfo'
import { mockItems } from '@/app/(app)/_components/GameGallery/mock'
import {
  GameDetails,
  type GameDetailsProps
} from '@/app/(app)/_components/GameDetails'
import { Separator } from '@/components/ui/separator'

export interface GameProps {
  gameCoverUrl: string
  gameInfo: GameInfoProps
  gameGallery: GalleryImageProps[]
  gameAbout: GameAboutProps
  gameDetails: GameDetailsProps
}

export async function Game({
  gameInfo,
  gameCoverUrl,
  gameDetails,
  gameGallery,
  gameAbout
}: GameProps) {
  return (
    <div className="bg-main-bg">
      {/* Hero/Cover */}
      <div className="bg-black h-130 relative">
        <div
          className="h-full bg-cover bg-right md:bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${gameCoverUrl})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="h-full relative">
          <div
            className="absolute bg-main-bg h-32 w-full -top-32 z-0"
            style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }}
          ></div>
        </div>
      </div>

      {/* GameInfo - puxado para cima com margin negativa */}
      <div className="px-6 w-full max-w-grid-container mx-auto pl-grid-gutter space-y-10 md:space-y-18.25 pb-20">
        <div className="relative -mt-50 md:-mt-38">
          <GameInfo {...gameInfo} />
        </div>
        <div>
          <GameGallery items={gameGallery} />
        </div>
        <div>
          <GameAbout {...gameAbout} />
        </div>
        <div>
          <GameDetails {...gameDetails} />
        </div>
        <div className="hidden md:flex">
          <Separator orientation="horizontal" className="bg-xxlight-gray/30" />
        </div>
        <div>{/* 2 showcases > apenas tablet/desktop*/}</div>
      </div>
    </div>
  )
}
