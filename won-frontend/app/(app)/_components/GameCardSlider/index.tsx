'use client'

import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GameCard, type GameCardProps } from '../GameCard'

import 'swiper/css'
import 'swiper/css/navigation'

export function GameCardSlider({
  items,
  arrowColor = 'black'
}: {
  items: GameCardProps[]
  arrowColor?: 'black' | 'white'
}) {
  const [swiper, setSwiper] = React.useState<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = React.useState(true)
  const [isEnd, setIsEnd] = React.useState(false)

  React.useEffect(() => {
    if (swiper) {
      const updateNavigation = () => {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
      }

      updateNavigation()
      swiper.on('slideChange', updateNavigation)
      swiper.on('reachBeginning', updateNavigation)
      swiper.on('reachEnd', updateNavigation)

      return () => {
        swiper.off('slideChange', updateNavigation)
        swiper.off('reachBeginning', updateNavigation)
        swiper.off('reachEnd', updateNavigation)
      }
    }
  }, [swiper])

  return (
    <div className="mx-auto w-full px-4 md:px-6 lg:px-0 max-w-grid-container">
      <div className="relative">
        <div className="swiper-overflow-visible -mx-4 md:-mx-6 lg:mx-0">
          <Swiper
            onSwiper={setSwiper}
            modules={[Navigation]}
            spaceBetween={8}
            slidesPerView={1.28}
            breakpoints={{
              468: {
                slidesPerView: 2,
                spaceBetween: 8
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 16
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16
              }
            }}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <GameCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'md:text-black absolute left-2 md:left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-50 rounded-full size-8 bg-background/80 backdrop-blur-sm',
            isBeginning && 'opacity-50 cursor-not-allowed'
          )}
          onClick={() => swiper?.slidePrev()}
          disabled={isBeginning}
        >
          <ChevronLeft
            className={`size-7 ${arrowColor === 'white' ? 'text-white' : 'text-black'}`}
          />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'md:text-black absolute right-2 md:right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-50 rounded-full size-8 bg-background/80 backdrop-blur-sm',
            isEnd && 'opacity-50 cursor-not-allowed'
          )}
          onClick={() => swiper?.slideNext()}
          disabled={isEnd}
        >
          <ChevronRight
            className={`size-7 ${arrowColor === 'white' ? 'text-white' : 'text-black'}`}
          />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  )
}
