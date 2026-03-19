'use client'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Button } from '../Button'
import { Heading } from '../Heading'

import { CheckIcon, Heart } from 'lucide-react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useState } from 'react'
import { useCartStore } from '../../_store/cart'
import { getFormattedCurrency } from '@/lib/format-price'
import { cn } from '@/lib/utils'
export interface GameInfoProps {
  cover: string
  title: string
  description: string
  price: number
  developers: Array<{ name: string }>
}

export function GameInfo({ cover, title, description, price, developers }: GameInfoProps) {
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const { addNewItem } = useCartStore()

  function handleAddToCart() {
    setIsAddedToCart(!isAddedToCart)
    addNewItem({ cover: { url: cover }, title, price, developers })
  }

  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isFavorited, setIsFavorited] = useState(false)
  return (
    <div className="bg-white p-6 md:p-6 relative flex flex-col gap-6.5 md:gap-0 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4.5">
        <div className="flex items-center justify-between">
          <div className={cn('', isMobile ? 'max-w-76' : '')}>
            <Heading
              text={title}
              color="black"
              size={isMobile ? 'xlarge' : 'xxlarge'}
              decorate={{ color: 'primary', orientation: 'horizontal' }}
            />
          </div>

          {isMobile && (
            <div className="bg-secondary rounded-[2px] p-1 px-1.5 flex items-center absolute -right-2.5">
              <p className="font-semibold text-white">
                {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
            </div>
          )}
          {!isMobile && (
            <div>
              <div className="bg-secondary rounded-[2px] p-0.5 px-4 flex items-center">
                <p className="font-semibold text-white text-lg">
                  {getFormattedCurrency(price)}
                </p>
              </div>
            </div>
          )}
        </div>
        <p className="text-sm font-light text-xlight-gray md:max-w-180 md:text-lg line-clamp-6">
          {description}
        </p>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:justify-start gap-4.5 md:gap-2">
        {!isAddedToCart ? (
          <Button
            size="lg"
            className="group md:max-w-46"
            icon={
              <AddShoppingCartIcon
                sx={{ fontSize: 20 }}
                className="group-hover:bg-primary transition-all duration-300 ease-out"
              />
            }
            onClick={handleAddToCart}
          >
            {' '}
            Add to cart
          </Button>
        ) : (
          <Button
            size="lg"
            className="group md:max-w-46"
            icon={
              <CheckIcon
                style={{ fontSize: '20px' }}
                className="group-hover:bg-primary transition-all duration-300 ease-out"
              />
            }
          >
            Added to cart
          </Button>
        )}
        <Button
          size="lg"
          variant="wishList"
          icon={<Heart strokeWidth={2} />}
          isFavorited={isFavorited}
          onClick={() => setIsFavorited(!isFavorited)}
        >
          Wishlist
        </Button>
      </div>
    </div>
  )
}
