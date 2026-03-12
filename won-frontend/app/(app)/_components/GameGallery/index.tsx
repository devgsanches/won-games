'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import useMediaQuery from '@mui/material/useMediaQuery'

export type GalleryImageProps = {
  url: string
  label: string
}

export type GameGalleryProps = {
  images: GalleryImageProps[]
}

export function GameGallery({ images }: GameGalleryProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null)
  const [modalSwiper, setModalSwiper] = useState<SwiperType | null>(null)
  const [isThumbBeginning, setIsThumbBeginning] = useState(true)
  const [isThumbEnd, setIsThumbEnd] = useState(false)
  const [isModalBeginning, setIsModalBeginning] = useState(true)
  const [isModalEnd, setIsModalEnd] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    if (thumbSwiper) {
      const updateNavigation = () => {
        setIsThumbBeginning(thumbSwiper.isBeginning)
        setIsThumbEnd(thumbSwiper.isEnd)
      }

      updateNavigation()
      thumbSwiper.on('slideChange', updateNavigation)
      thumbSwiper.on('reachBeginning', updateNavigation)
      thumbSwiper.on('reachEnd', updateNavigation)

      return () => {
        thumbSwiper.off('slideChange', updateNavigation)
        thumbSwiper.off('reachBeginning', updateNavigation)
        thumbSwiper.off('reachEnd', updateNavigation)
      }
    }
  }, [thumbSwiper])

  useEffect(() => {
    if (modalSwiper) {
      const updateNavigation = () => {
        setIsModalBeginning(modalSwiper.isBeginning)
        setIsModalEnd(modalSwiper.isEnd)
      }

      updateNavigation()
      modalSwiper.on('slideChange', updateNavigation)
      modalSwiper.on('reachBeginning', updateNavigation)
      modalSwiper.on('reachEnd', updateNavigation)

      return () => {
        modalSwiper.off('slideChange', updateNavigation)
        modalSwiper.off('reachBeginning', updateNavigation)
        modalSwiper.off('reachEnd', updateNavigation)
      }
    }
  }, [modalSwiper])

  const handleImageClick = (index: number) => {
    setIsOpen(true)

    setTimeout(() => {
      modalSwiper?.slideTo(index, 0)
    }, 0)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      {!isMobile && (
        <div className="overflow-hidden lg:overflow-visible">
          <div className="relative">
            <Swiper
              onSwiper={setThumbSwiper}
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={4}
              resistance={true}
              resistanceRatio={0}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 8
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 12
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 16
                }
              }}
            >
              {images?.map((image, index) => (
                <SwiperSlide key={`thumb-${index}`}>
                  <div
                    role="button"
                    tabIndex={0}
                    className="relative aspect-video cursor-pointer overflow-hidden"
                    onClick={() => handleImageClick(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleImageClick(index)
                      }
                    }}
                  >
                    <Image
                      src={`http://localhost:1337${image.url}`}
                      alt={`Thumb - ${image.label}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className={cn(
                'absolute -left-10 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer w-10 h-10 hidden lg:flex items-center justify-center transition-opacity',
                isThumbBeginning && 'invisible'
              )}
              onClick={() => thumbSwiper?.slidePrev()}
              disabled={isThumbBeginning}
              aria-label="previous image"
            >
              <ChevronLeft className="size-6" />
            </button>

            <button
              className={cn(
                'absolute -right-10 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer w-10 h-10 hidden lg:flex items-center justify-center transition-opacity',
                isThumbEnd && 'invisible'
              )}
              onClick={() => thumbSwiper?.slideNext()}
              disabled={isThumbEnd}
              aria-label="next image"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          <div
            className={cn(
              'fixed inset-0 bg-black/70 flex justify-center items-center z-50 transition-opacity duration-300',
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
            aria-hidden={!isOpen}
            onClick={handleCloseModal}
          >
            <button
              className="absolute top-0 right-0 text-white p-4 cursor-pointer hover:opacity-80 transition-opacity z-60"
              aria-label="close modal"
              onClick={handleCloseModal}
            >
              <X className="size-10" />
            </button>

            <div
              className="relative w-full max-w-[min(120rem,100%)] max-h-320 px-4 lg:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                onSwiper={setModalSwiper}
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
              >
                {images?.map((image, index) => (
                  <SwiperSlide key={`gallery-${index}`}>
                    <div className="relative w-full aspect-video">
                      <Image
                        src={`http://localhost:1337${image.url}`}
                        alt={image.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                className={cn(
                  'absolute left-4 lg:-left-4 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer w-10 h-10 flex items-center justify-center transition-opacity',
                  isModalBeginning && 'invisible'
                )}
                onClick={() => modalSwiper?.slidePrev()}
                disabled={isModalBeginning}
                aria-label="previous image"
              >
                <ChevronLeft className="size-8" />
              </button>

              <button
                className={cn(
                  'absolute right-4 lg:-right-4 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer w-10 h-10 flex items-center justify-center transition-opacity',
                  isModalEnd && 'invisible'
                )}
                onClick={() => modalSwiper?.slideNext()}
                disabled={isModalEnd}
                aria-label="next image"
              >
                <ChevronRight className="size-8" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
