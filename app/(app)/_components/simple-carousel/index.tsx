'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Slide {
  image: string
  title: string
  subtitle?: string
  priceInCents?: number
  game?: string
}

export function SimpleCarousel({ slides }: { slides: Slide[] }) {
  return (
    <>
      <Swiper slidesPerView={1.3} spaceBetween={24}>
        {slides &&
          slides.map((s, i) => (
            <SwiperSlide
              key={i}
              className="flex items-center justify-center text-center "
            >
              <div className="w-full h-34.25 relative">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover w-full object-top"
                />
              </div>
              <div className="relative h-20.5 px-4 pr-3 pt-2.5 bg-white">
                <div className="flex items-center justify-between">
                  <p className="text-black font-semibold">{s.title}</p>
                  <Heart color="#F231A5" className="size-6" />
                </div>
                <p className="text-gray-light text-start text-xs">
                  {s.subtitle}
                </p>
                <div className="flex justify-end">
                  <Button className="px-2 h-5.5 text-sm text-white bg-green rounded-xs font-semibold">
                    {s.priceInCents &&
                      (s.priceInCents / 100).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}
