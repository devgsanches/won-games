export interface PriceBadgeProps {
  price: number
}

export function PriceBadge({ price }: PriceBadgeProps) {
  return (
    <div className="bg-secondary rounded-[2px] px-2 py-px h-full">
      <p className="text-sm font-semibold text-white">R${price},00</p>
    </div>
  )
}
