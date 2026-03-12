'use client'

import {
  GameAbout
} from '@/app/(app)/_components/GameAbout'
import {
  GameGallery
} from '@/app/(app)/_components/GameGallery'
import { GameInfo } from '@/app/(app)/_components/GameInfo'
import {
  GameDetails
} from '@/app/(app)/_components/GameDetails'
import { Separator } from '@/components/ui/separator'
import { type GetGameBySlug } from '@/app/queries/get-game-by-slug'

export interface GameProps {
  game: GetGameBySlug
}

export function Game({
  game
}: GameProps) {

  const gameInfo = {
    cover: game.cover.url,
    title: game.title,
    description: game.description,
    price: game.price,
    slug: game.slug,
    developers: game.developers,
  }

  const gameGallery = game.gallery && game.gallery.map((gallery) => ({
    url: `${gallery.url}`,
    label: game.title ?? '',
  }))

  const gameAbout = {
    shortDescription: game.short_description,
    description: game.description,
    cover: game.gallery?.[4]?.url ?? '',
  }

  const gameDetails = {
    developer: game.developers,
    categories: game.categories,
    rating: game.rating,
    releaseDate: game.release_date,
    platforms: game.platforms.map((platform) => platform.name),
  }


  return (
    <div className="bg-main-bg">
      {/* Hero/Cover */}
      <div className="bg-black h-130 relative">
        <div
          className="h-full bg-cover bg-right md:bg-top bg-no-repeat"
          style={{ backgroundImage: `url(http://localhost:1337${game.cover.url})` }}
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
          <GameGallery images={gameGallery || []} />
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
