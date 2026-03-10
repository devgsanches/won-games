import type { GameCardProps } from '../GameCard'
import { GameItem } from '../GameItem'

interface ProfileOrdersProps {
  items: GameCardProps[]
}

export function ProfileOrders({ items }: ProfileOrdersProps) {
  return (
    <div className="space-y-6">
      {items.map((i) => (
        <div className="border-b border-xlight-gray/30 pb-6 md:p-0" key={i.id}>
          <GameItem
            id={i.id}
            imgUrl={i.imgUrl}
            name={i.name}
            price={i.price ?? 0}
            cardNumber={i.cardNumber ?? 0}
            purchaseDate={i.purchaseDate ?? ''}
            flag={i.flag ?? ''}
          />
        </div>
      ))}
    </div>
  )
}
