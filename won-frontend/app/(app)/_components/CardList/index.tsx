import type { Card } from '../CardOption'
import Image from 'next/image'

interface CardListProps {
  cards: Card[]
}

export function CardList({ cards }: CardListProps) {
  return (
    <div className="flex flex-col gap-2.5">
      {cards.map((c) => (
        <div className="w-full p-4 bg-input flex items-center gap-3" key={c.id}>
          <Image src={`${c.flag}`} alt={c.flag} width={38} height={24} />
          <p className="text-black">{c.cardNumber}</p>
        </div>
      ))}
    </div>
  )
}
