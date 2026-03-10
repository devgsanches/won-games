import { Plus, ShoppingCartIcon } from 'lucide-react'
import { CardOption, Card } from '../CardOption'
import { Heading } from '../Heading'
import { Button } from '../Button'

const cards: Card[] = [
  { id: '1', flag: 'master-card', cardNumber: '**** **** **** 4325' },
  { id: '2', flag: 'visa', cardNumber: '**** **** **** 1234' }
]

export function PaymentOptions() {
  return (
    <div className="flex flex-col justify-between bg-white h-full">
      <div className="p-4">
        <Heading
          text="Payment"
          color="black"
          size="xlarge"
          decorate={{ color: 'primary', orientation: 'horizontal' }}
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <div className="mt-10.5">
            <CardOption cards={cards} />
          </div>
          {/* Add new card */}
          <div className="p-4 bg-input flex items-center gap-3 text-black mt-2 cursor-pointer hover:bg-input/80">
            <Plus />
            <p>Add new card</p>
          </div>
        </div>
      </div>
      <div />
      {/* Footer */}
      <div className="p-4 bg-input flex items-center justify-between">
        <div className="w-1/2 flex justify-center">
          <Button variant="wishList" fullWidth>
            <p>Buy more</p>
          </Button>
        </div>
        <div className="w-1/2 flex justify-centers">
          <Button fullWidth>
            <p className="flex items-center gap-2.5">
              <ShoppingCartIcon
                strokeWidth={1.7}
                size={30}
                aria-label="Cart icon"
              />
              Finish order
            </p>
          </Button>
        </div>
      </div>
    </div>
  )
}
