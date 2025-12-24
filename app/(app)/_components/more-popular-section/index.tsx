import { Button } from '@/components/ui/button'
import { SimpleCarousel } from '../simple-carousel'
import { SimpleUnderline } from '../simple-urderline'
import Image from 'next/image'

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
    image: '/hollow-knight.jpg',
    title: 'Aventura em Hallownest',
    subtitle: 'Team Cherry',
    priceInCents: 7500
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
    image: '/stardew-valley.jpg',
    title: 'Construa sua própria fazenda',
    subtitle: 'ConcernedApe',
    priceInCents: 4500
  },

  {
    image: '/assassins-creed.jpg',
    title: 'Entre na história',
    subtitle: 'Ubisoft',
    priceInCents: 17900
  },
  {
    image: '/dark-souls.jpeg',
    title: 'Prepare-se para morrer',
    subtitle: 'FromSoftware',
    priceInCents: 12900
  }
]

export function MorePopularSection({
  slides = defaultSlides,
  title = 'Mais populares'
}: Props) {
  return (
    <section className="pt-8">
      <div className="flex flex-col gap-7">
        <div className="flex items-center gap-2.75 px-5.25">
          <SimpleUnderline color="green" position="vertical" />{' '}
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>
        <div className="h-57.5 relative">
          <Image
            src="/thumb.png"
            alt="Read Dead Banner"
            fill
            className="object-cover"
          />
          <div className="absolute h-57.5 w-full bg-black-native/80 top-0">
            <div className="flex flex-col gap-3 items-end pr-5.5">
              <div>
                <p className="text-lg font-semibold text-white pt-3.75">
                  Read Dead está de de volta!
                </p>
                <span className="text-sm font-light text-white block text-end">
                  Venha conhecer as novas aventuras <br /> de John Marston
                </span>
              </div>
              <div>
                <Button className="bg-gradient-pink px-3 text-white rounded h-10">
                  Comprar agora
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-1 left-0 w-33.75 h-39.25">
            <Image src="/svg.png" alt="Read Dead Avatar" className="" fill />
          </div>
        </div>
      </div>
      <div className="p-5.25 pr-0">
        <SimpleCarousel slides={slides} />
      </div>
    </section>
  )
}
