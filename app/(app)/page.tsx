import { Button } from '@/components/ui/button'
import { Carousel } from './_components/carousel-paginate'
import { SimpleCarousel } from './_components/simple-carousel'
import { SimpleUnderline } from './_components/simple-urderline'
import Image from 'next/image'

export default function Home() {
  const slidesReleases = [
    {
      image: '/god-of-war.avif',
      title: 'A fúria dos deuses',
      subtitle: 'Santa Monica Studio',
      priceInCents: 24900
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
      image: '/cyberpunk.jpeg',
      title: 'O futuro é agora',
      subtitle: 'CD Projekt Red',
      priceInCents: 19900
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
    },
    {
      image: '/dark-souls.jpeg',
      title: 'Prepare-se para morrer',
      subtitle: 'FromSoftware',
      priceInCents: 12900
    }
  ]

  const slidesPopular = [
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

  const slidesFree = [
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

  const slidesPromotions = [
    {
      image: '/minecraft.jpg',
      title: 'Explore com seus amigos',
      subtitle: 'Other Ocean',
      priceInCents: 15500
    },
    {
      image: '/cyberpunk.jpeg',
      title: 'O futuro é agora',
      subtitle: 'CD Projekt Red',
      priceInCents: 19900
    },
    {
      image: '/hero.png',
      title: 'Desafie a morte',
      subtitle: 'Other Ocean',
      priceInCents: 21500
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
    },
    {
      image: '/dark-souls.jpeg',
      title: 'Prepare-se para morrer',
      subtitle: 'FromSoftware',
      priceInCents: 12900
    }
  ]

  const slidesPlayNow = [
    {
      image: '/gta-v.jpeg',
      title: 'Crime, ação e liberdade',
      subtitle: 'Rockstar Games',
      priceInCents: 9900
    },
    {
      image: '/assassins-creed.jpg',
      title: 'Entre na história',
      subtitle: 'Ubisoft',
      priceInCents: 17900
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
      image: '/stardew-valley.jpg',
      title: 'Construa sua própria fazenda',
      subtitle: 'ConcernedApe',
      priceInCents: 4500
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
      image: '/dark-souls.jpeg',
      title: 'Prepare-se para morrer',
      subtitle: 'FromSoftware',
      priceInCents: 12900
    }
  ]
  return (
    <div className="h-full">
      {/* Hero */}
      <section>
        <div className="pt-21">
          <Carousel />
        </div>
      </section>

      {/* LANÇAMENTOS */}
      <section className="pl-5.25 pt-8 pr-0 ">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-2.75">
            <SimpleUnderline color="green" position="vertical" />{' '}
            <h2 className="text-2xl font-semibold text-white">Lançamentos</h2>
          </div>
          <div>
            <SimpleCarousel slides={slidesReleases} />
          </div>
        </div>
      </section>

      {/* MAIS POPULARES */}
      <section className="pt-8">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-2.75 px-5.25">
            <SimpleUnderline color="green" position="vertical" />{' '}
            <h2 className="text-2xl font-semibold text-white">
              Mais populares
            </h2>
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
          <SimpleCarousel slides={slidesPopular} />
        </div>
      </section>

      {/* JOGOS GRÁTIS */}
      <section className="pt-8">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-2.75 px-5.25">
            <SimpleUnderline color="green" position="vertical" />{' '}
            <h2 className="text-2xl font-semibold text-white">Jogos Grátis</h2>
          </div>
        </div>
        <div className="p-5.25 pr-0">
          <SimpleCarousel slides={slidesFree} />
        </div>
      </section>

      {/* PROMOÇÕES */}
      <section className="pt-8">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-2.75 px-5.25">
            <SimpleUnderline color="green" position="vertical" />{' '}
            <h2 className="text-2xl font-semibold text-white">Promoções</h2>
          </div>
          <div className="h-57.5 relative">
            <Image
              src="/thumb-2.png"
              alt="Borderlands 3 Banner"
              fill
              className="object-cover"
            />
            <div className="absolute h-57.5 w-full bg-black-native/80 top-0">
              <div className="flex flex-col gap-3 items-start pl-5.5">
                <div>
                  <p className="text-lg font-semibold text-white pt-3.75">
                    Borderlands 3!
                  </p>
                  <span className="text-sm font-light text-white block text-start">
                    Borderlands está de volta com muitas <br />
                    novidades
                  </span>
                </div>
                <div>
                  <Button className="bg-gradient-pink px-3 text-white rounded h-10">
                    Comprar agora
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1 -right-2.5 w-53.25 h-45">
              <Image
                src="/promotion-avatar.png"
                alt="Borderlands 3 Avatar"
                className=""
                fill
              />
            </div>
          </div>
        </div>
        <div className="p-5.25 pr-0">
          <SimpleCarousel slides={slidesPromotions} />
        </div>
      </section>

      {/* JOGUE AGORA */}
      <section className="pt-8 pb-22">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-2.75 px-5.25">
            <SimpleUnderline color="green" position="vertical" />{' '}
            <h2 className="text-2xl font-semibold text-white">Jogue agora</h2>
          </div>
          <div className="h-57.5 relative">
            <Image
              src="/thumb-3.png"
              alt="CS:GO Banner"
              fill
              className="object-cover"
            />
            <div className="absolute h-57.5 w-full bg-black-native/80 top-0">
              <div className="flex flex-col gap-3 items-end pr-5.5">
                <div>
                  <p className="text-lg font-semibold text-white pt-3.75">
                    Já conhece o clássico CS:GO?
                  </p>
                  <span className="text-sm font-light text-white block text-end">
                    Jogue agora um dos maiores <br /> clássicos do FPS
                  </span>
                </div>
                <div>
                  <Button className="bg-gradient-pink px-3 text-white rounded h-10">
                    Comprar agora
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1 left-0 w-41 h-41">
              <Image
                src="/csgo-avatar.png"
                alt="CS:GO Avatar"
                className=""
                fill
              />
            </div>
          </div>
        </div>
        <div className="p-5.25 pr-0">
          <SimpleCarousel slides={slidesPlayNow} />
        </div>
      </section>
    </div>
  )
}
