'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'
import { Button } from '@/components/ui/button'

export function Carousel() {
  const slides = [
    {
      image: '/fifa-25.webp',
      title: 'O jogo mais popular do mundo',
      game: 'FIFA 25'
    },
    {
      image: '/the-witcher.jpg',
      title: 'Cace monstros lendários',
      game: 'The Witcher'
    },
    {
      image: '/hero.png',
      title: 'Desafie a morte',
      game: 'Crashlands'
    },
    {
      image: '/minecraft.jpg',
      title: 'Explore com seus amigos',
      game: 'Minecraft'
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
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center text-center text-lg bg-gray-800"
          >
            <Image
              src={s.image}
              alt="Slide 1"
              width={1920}
              height={1080}
              className="object-cover w-full h-57.75"
            />

            <div className="relative h-36 px-5.5 pt-4.25 bg-gray-4">
              <div className="text-white flex flex-col items-start">
                <p className="text-xl font-semibold">{s.title}</p>
                <p className="text-sm">
                  {`Jogue a nova temporada de `}
                  <span className="text-pink font-bold">{s.game}</span>
                </p>
              </div>
              <div className="flex justify-start">
                <Button className="bg-gradient-pink h-10 w-36.75 rounded text-white mt-2.5">
                  Comprar agora
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
