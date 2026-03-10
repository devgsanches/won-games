import { GameAbout } from '@/app/(app)/_components/GameAbout'
import { GameGallery } from '@/app/(app)/_components/GameGallery'
import { GameInfo } from '@/app/(app)/_components/GameInfo'
import { mockItems } from '@/app/(app)/_components/GameGallery/mock'
import { GameDetails } from '@/app/(app)/_components/GameDetails'
import { Separator } from '@/components/ui/separator'
import { Game } from '@/app/(app)/_templates/Game'

type GamePageProps = {
  params: Promise<{ slug: string }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params

  // I can create a server action that receives the slug and returns the game, and fill the props below with the game data

  const props = {
    gameCoverUrl:
      'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
    gameInfo: {
      id: '1',
      imgUrl:
        'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
      title: 'Cyberpunk 2077',
      slug: 'cyberpunk-2077',
      developer: 'CD Projekt Red',
      description:
        'Cyberpunk 2077 is an action-adventure game set in a future world where technology and the human body are fused. The game is developed by CD Projekt Red and released in 2020.',
      price: 215
    },
    gameGallery: mockItems,
    gameAbout: {
      shortDescription:
        'Now is the time to eliminate Handsome Jack. Gather your friends to run wildly through the world collecting millions of items.',
      description: `<div class="description">
        <a href="https://www.gog.com/game/cyberpunk_2077_ultimate_edition">
          <img src="https://items.gog.com/not_a_cp_pl/ENG_1540X400_bundle_banner_cyberpunk_phantom_liberty.png" alt="Cyberpunk 2077 Ultimate Edition">
        </a>
        <br><hr>
        <img src="https://items.gog.com/not_a_cp/addon_en.png" alt="Addon">
        <hr><br>
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <video muted loop preload="auto" autoplay style="margin: auto; display: block; width: 100%">
            <source src="https://items.gog.com/not_a_cp_pl/CP77_GOG_01_EN_v2.webm" type="video/webm">
          </video>
          <video muted loop preload="auto" autoplay style="margin: auto; display: block; width: 100%">
            <source src="https://items.gog.com/not_a_cp_pl/CP77_GOG_03_EN.webm" type="video/webm">
          </video>
          <video muted loop preload="auto" autoplay style="margin: auto; display: block; width: 100%">
            <source src="https://items.gog.com/not_a_cp_pl/CP77_GOG_04_EN.webm" type="video/webm">
          </video>
        </div>
        <br><hr>
        <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
        <img src="https://items.gog.com/not_a_cp/awards/Prev_Awards_CP_AwardSection.png" alt="Awards">
        </div>
        <hr>
        <p style="margin-top: 2rem;">* Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams is available in English only.</p>
        <p class="description__copyrights">
          CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their respective owners.
        </p>
      </div>`
    },
    gameDetails: {
      developer: ['Gearbox Software'],
      categories: ['Action', 'RPG'],
      publishers: ['2K Games'],
      rating: 'BR18',
      releaseDate: '2019-09-13',
      platforms: ['windows', 'macos', 'linux']
    }
  }

  return <Game {...props} />
}
