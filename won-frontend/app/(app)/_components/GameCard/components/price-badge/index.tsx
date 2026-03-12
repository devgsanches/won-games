import { getFormattedCurrency } from "@/lib/format-price"

export interface PriceBadgeProps {
  price: number
}

export function PriceBadge({ price }: PriceBadgeProps) {
  return (
    <div className="bg-secondary rounded-[2px] px-2 py-px h-full">
      <p className="text-sm font-semibold text-white">{getFormattedCurrency(price)}</p>
    </div>
  )
}
