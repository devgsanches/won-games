import { SimpleCarousel } from '../simple-carousel'
import { SimpleUnderline } from '../simple-urderline'

interface Slide {
  image: string
  title: string
  subtitle: string
  priceInCents: number
}

export interface Props {
  slides?: Slide[]
  title?: string
}

const defaultSlides: Slide[] = [
  {
    image: '/hollow-knight.jpg',
    title: 'Aventura em Hallownest',
    subtitle: 'Team Cherry',
    priceInCents: 7500
  },
  {
    image: '/dark-souls.jpeg',
    title: 'Prepare-se para morrer',
    subtitle: 'FromSoftware',
    priceInCents: 12900
  },
  {
    image: '/stardew-valley.jpg',
    title: 'Construa sua própria fazenda',
    subtitle: 'ConcernedApe',
    priceInCents: 4500
  },
  {
    image: '/hero.png',
    title: 'Desafie a morte',
    subtitle: 'Other Ocean',
    priceInCents: 21500
  },
  {
    image: '/minecraft.jpg',
    title: 'Explore com seus amigos',
    subtitle: 'Other Ocean',
    priceInCents: 15500
  },
  {
    image: '/elden-ring.webp',
    title: 'Um mundo brutal e épico',
    subtitle: 'FromSoftware',
    priceInCents: 29900
  },
  {
    image: '/god-of-war.avif',
    title: 'A fúria dos deuses',
    subtitle: 'Santa Monica Studio',
    priceInCents: 24900
  },
  {
    image: '/cyberpunk.jpeg',
    title: 'O futuro é agora',
    subtitle: 'CD Projekt Red',
    priceInCents: 19900
  },
  {
    image: '/red-dead.jpeg',
    title: 'O velho oeste selvagem',
    subtitle: 'Rockstar Games',
    priceInCents: 27900
  },

  {
    image: '/the-witcher.jpg',
    title: 'Cace monstros lendários',
    subtitle: 'CD Projekt Red',
    priceInCents: 15900
  },
  {
    image: '/fifa-25.webp',
    title: 'O jogo mais popular do mundo',
    subtitle: 'EA Sports',
    priceInCents: 18900
  },
  {
    image: '/gta-v.jpeg',
    title: 'Crime, ação e liberdade',
    subtitle: 'Rockstar Games',
    priceInCents: 9900
  },
  {
    image: '/call-of-duty.jpg',
    title: 'Combate intenso',
    subtitle: 'Activision',
    priceInCents: 22900
  },
  {
    image: '/zelda.jpg',
    title: 'Uma jornada lendária',
    subtitle: 'Nintendo',
    priceInCents: 29900
  },
  {
    image: '/assassins-creed.jpg',
    title: 'Entre na história',
    subtitle: 'Ubisoft',
    priceInCents: 17900
  }
]

export function FreeGamesSection({
  slides = defaultSlides,
  title = 'Jogos Grátis'
}: Props) {
  return (
    <section className="pt-8">
      <div className="flex flex-col gap-7">
        <div className="flex items-center gap-2.75 px-5.25">
          <SimpleUnderline color="green" position="vertical" />{' '}
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>
      </div>
      <div className="p-5.25 pr-0">
        <SimpleCarousel slides={slides} />
      </div>
    </section>
  )
}
