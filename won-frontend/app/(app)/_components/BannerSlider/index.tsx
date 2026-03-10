'use client'

import { useState, useEffect } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { Banner, type BannerProps } from '../Banner'

export function BannerSlider({ items }: { items: BannerProps[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(1)
  const [count] = useState(items.length)
  const [mounted, setMounted] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="flex items-center justify-center w-full relative z-10">
      <div className="w-full md:mx-auto md:max-w-5xl h-94 md:h-116 flex items-center justify-center relative overflow-visible">
        <Carousel
          setApi={setApi}
          className="w-full md:h-132 overflow-visible"
          orientation={mounted && isDesktop ? 'vertical' : 'horizontal'}
        >
          <CarouselContent className="h-94 md:h-138 rounded ml-0 overflow-visible">
            {items.map((item, i) => (
              <CarouselItem
                key={i}
                className="basis-full pl-0 md:px-6 w-full h-94 md:h-138 overflow-visible"
              >
                <Banner {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="hidden md:flex flex-col items-center justify-center gap-4 absolute -right-10  top-1/2 -translate-y-1/2 z-10">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn('h-2.5 w-2.5 rounded-full transition-colors', {
                'border-primary bg-primary': current === index + 1,
                'bg-decorate-white': current !== index + 1
              })}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex md:hidden flex-row items-center justify-center gap-4 absolute -bottom-10 left-1/2 -translate-x-1/2 z-10">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn('h-2.5 w-2.5 rounded-full transition-colors', {
                'border-primary bg-primary': current === index + 1,
                'bg-decorate-white': current !== index + 1
              })}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
