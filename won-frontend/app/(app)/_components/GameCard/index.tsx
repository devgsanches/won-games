'use client'

import { memo } from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { PriceBadge } from './components/price-badge'
import { useState } from 'react'
import { HeartConfetti } from './components/heart-confetti'
import { Button } from '@/components/ui/button'
import { Ribbon } from '../Ribbon'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useRouter } from 'next/navigation'

import { useCartStore } from '../../_store/cart'

import { cn } from '@/lib/utils'
import type { Game } from '../../(default)/games/page'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export type GameCardProps = {
  size?: 'small' | 'normal' | 'full'
  promotion?: {
    oldPrice: string
    discountPercentage: number
  }
  wishlist?: boolean
  cardNumber?: number
  purchaseDate?: string
  flag?: string
} & Game

export const GameCard = memo(function GameCard({
  size = 'normal',
  promotion,
  wishlist = false,
  cardNumber,
  purchaseDate,
  flag,
  cover,
  title,
  slug,
  developers,
  price,
}: GameCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const { addNewItem } = useCartStore()

  const router = useRouter()

  const cartAddedUrl = '/addedCart.svg'

  function handleClick() {
    router.push(`/game/${slug}`)
  }

  function addedToCart(item: Game) {

    setIsAddedToCart(!isAddedToCart)

    addNewItem(item)
  }

  return (
    <div
      className={`${size === 'small' ? 'w-73' : size === 'normal' ? 'w-91.25' : 'w-full'} relative`}
    >
      {promotion?.discountPercentage && (
        <Ribbon color="secondary" size="small">
          {promotion.discountPercentage}% OFF
        </Ribbon>
      )}
      <div
        className={`${size === 'small' ? 'h-34.25' : 'h-37.75'} w-full relative overflow-hidden cursor-pointer`}
        onClick={handleClick}
      >
        {cover?.url ? (
          <Image
            src={`http://localhost:1337${cover.url}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 292px"
            className="object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-700" />
        )}
      </div>
      <div
        className={`shadow-lg grid grid-cols-[80%_20%] ${price && size === 'normal' ? 'h-22' : ''} ${size !== 'normal' && 'h-24'} bg-white p-4 pt-2.5 pb-2 max-w-full`}
      >
        <div className="flex flex-col justify-between">
          <div>
            <p className={cn('text-black font-semibold ', developers?.length > 1 || price === 0 ? 'line-clamp-1 truncate' : 'line-clamp-2 wrap-break-word')}>
              {title}
            </p>
            <p className="text-xs font-medium text-xlight-gray line-clamp-1 wrap-break-word max-w-[calc(100%-60px)]">
              {developers?.map((developer) => developer.name).join(', ')}
            </p>
          </div>

          {promotion?.oldPrice && (
            <p className="text-discount text-sm line-through font-semibold max-w-[calc(100%-80px)] text-end">
              {promotion.oldPrice}
            </p>
          )}
        </div>
        <div className={cn('flex flex-col items-end justify-between', price > 0 ? 'gap-2' : 'gap-0')}>
          <div className="relative">
            {isFavorited && <HeartConfetti />}

            <Heart
              size={size === 'small' ? 20 : 24}
              className={`
      cursor-pointer
      transition-all
      duration-300
      ease-out
      text-primary
      ${isFavorited ? 'scale-115 fill-primary animate-heart' : 'scale-100'}
      ${wishlist ? 'fill-primary' : ''}
    `}
              onClick={() => setIsFavorited(!isFavorited)}
            />
          </div>

          <div className="flex gap-0.75 items-center h-5.5">
            {price && <PriceBadge price={price} />}
            {price && <Button
              size="icon"
              onClick={() => addedToCart({ cover, title, slug, developers, price })}
              className={`
    h-full rounded-[2px]
    transition-all duration-300
    ${isAddedToCart ? 'bg-secondary scale-100' : 'scale-100'}
    active:scale-95
  `}
            >
              <span
                key={isAddedToCart ? 'added' : 'add'}
                className="flex items-center justify-center animate-cart-pop"
              >
                {isAddedToCart ? (
                  <img
                    src={cartAddedUrl}
                    alt="added to cart"
                    className="w-4.5 h-4.5"
                  />
                ) : (
                  <AddShoppingCartIcon sx={{ fontSize: 16 }} />
                )}
              </span>
            </Button>}
            {!price && <div className="flex items-center justify-center">
              <span className="inline-block bg-linear-to-r from-green-400 via-green-500 to-green-600 text-white text-xs font-semibold px-3 py-px rounded-full shadow-md border tracking-wid select-none uppercase"> Free </span>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
})
