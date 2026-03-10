import { useRouter } from 'next/navigation'
import { Button } from '../Button'
import type { GameCardProps } from '../GameCard'
import { GameItem } from '../GameItem'
import Image from 'next/image'
import { useCartStore } from '../../_store/cart'

interface CartListProps {
  items: GameCardProps[]
  total: number
  buyNow?: boolean
  isOpen?: boolean
  onOpenChange: (open: boolean) => void
}

export function CartList({ items, total, buyNow = false, isOpen, onOpenChange }: CartListProps) {
  const router = useRouter()

  function handleBuyNow() {
    onOpenChange(!isOpen)
    router.push('/cart')
  }

  function handleGoBackToStore() {
    onOpenChange(!isOpen)
    router.push('/')
  }


  return (
    <div className={`md:max-w-206 w-full h-full ${buyNow ? 'rounded' : ''} bg-white overflow-hidden`}>
      {items.length > 0 ? (
        <div>
          <div
            className={`${buyNow ? 'max-h-60 bg-white' : 'max-h-80.5 h-full'} overflow-y-auto [&::-webkit-scrollbar]:hidden`}
          >
            {items.map((item, index) => (
              <div className="border-b border-xlight-gray/30" key={index}>
                <div className="p-6 pb-0">
                  <GameItem
                    imgUrl={item.imgUrl}
                    name={item.name}
                    price={item.price ?? 0}
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            className={`flex items-center ${buyNow ? 'justify-between flex-row-reverse' : 'justify-between'} text-xlarge bg-input font-semibold p-6`}
          >
            {!buyNow ? (
              <p className="text-black">Total:</p>
            ) : (
              <div className="h-10 w-32">
                <Button size="md" fullWidth onClick={handleBuyNow}>
                  Buy now
                </Button>
              </div>
            )}
            <p className="text-primary">R$ {total},00</p>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center bg-white p-6 min-w-[280px] md:min-w-[320px]'>
          <div className="w-[150px] h-[120px] relative">
            <Image
              src="/empty.svg"
              alt="Carrinho vazio"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-1 mt-4'>
            <p className='text-primary font-medium'>Your cart is empty</p>
            <p className='text-gray text-sm text-center leading-relaxed'>
              Go back to the store and explore<br className="md:hidden" /> great games and offers.
            </p>
          </div>
          <div className='mt-5'>
            <Button onClick={handleGoBackToStore}>Go back to store</Button>
          </div>
        </div>
      )}
    </div>
  )
}
