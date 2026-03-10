'use client'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Button } from '../Button'
import { Heading } from '../Heading'

import { CheckIcon, Heart } from 'lucide-react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useState } from 'react'
import { useCartStore } from '../../_store/cart'

export interface GameInfoProps {
  id: string
  imgUrl: string
  name: string
  name: string
  description: string
  price: number
  slug: string
  developer: string
}

export function GameInfo({ id, imgUrl, name, title, description, price, slug, developer }: GameInfoProps) {
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const { addNewItem } = useCartStore()

  function handleAddToCart() {
    setIsAddedToCart(!isAddedToCart)
    addNewItem({ id, imgUrl, name, price, slug, developer })
  }

  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isFavorited, setIsFavorited] = useState(false)
  return (
    <div className="bg-white p-6 md:p-6 relative flex flex-col gap-6.5 md:gap-0 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4.5">
        <div className="flex items-center justify-between">
          <Heading
            text={title}
            color="black"
            size={isMobile ? 'xlarge' : 'xxlarge'}
            decorate={{ color: 'primary', orientation: 'horizontal' }}
          />

          {isMobile && (
            <div className="bg-secondary rounded-[2px] p-1 px-1.5 flex items-center absolute -right-2.5">
              <p className="font-semibold text-white">R$215,00</p>
            </div>
          )}
          {!isMobile && (
            <div>
              <div className="bg-secondary rounded-[2px] p-0.5 px-4 flex items-center">
                <p className="font-semibold text-white text-lg">R$215,00</p>
              </div>
            </div>
          )}
        </div>
        <p className="text-sm font-light text-xlight-gray md:max-w-180 md:text-lg">
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
                sx={{ fontSize: 20 }}
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
