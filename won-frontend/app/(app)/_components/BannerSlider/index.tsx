'use client'

import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { Banner } from '../Banner'

export function BannerSlider({ items }: { items: any[] }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768) // md breakpoint
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-7xl flex items-center h-auto justify-center relative md:px-4">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          orientation={isDesktop ? 'vertical' : 'horizontal'}
        >
          <CarouselContent className="h-full md:h-146 ml-0">
            {items.map((item, i) => (
              <CarouselItem key={i} className="relative basis-full pl-0">
                <div className="relative w-full h-full md:h-146">
                  <Banner {...item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Bolinhas para desktop - lado direito vertical */}
        <div className="hidden md:flex flex-col items-center justify-center gap-4 absolute right-4 top-1/2 -translate-y-1/2 z-10">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn('h-2.5 w-2.5 rounded-full transition-colors', {
                'border-primary bg-primary': current === index + 1,
                ' bg-decorate-white': current !== index + 1
              })}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Bolinhas para tablet/mobile - parte inferior horizontal */}
        <div className="flex md:hidden flex-row items-center justify-center gap-4 absolute -bottom-10 left-1/2 -translate-x-1/2 z-10">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn('h-2.5 w-2.5 rounded-full transition-colors', {
                'border-primary bg-primary': current === index + 1,
                ' bg-decorate-white': current !== index + 1
              })}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
