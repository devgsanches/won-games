import { ShoppingCartIcon } from 'lucide-react'
import { useCartStore } from '../../_store/cart'
import { useRouter } from 'next/navigation'

export function CartIcon() {
  const { count } = useCartStore()
  const router = useRouter()

  return (
    <div className="relative cursor-pointer hover:text-primary transition-colors duration-300 ease-out group">
      <ShoppingCartIcon strokeWidth={1.7} size={30} aria-label="Cart icon" />
      {!!count && count > 0 && (
        <div className="absolute h-4.5 w-4.5 bg-secondary rounded-full top-0 -right-1.5 flex items-center justify-center text-xs text-white group-hover:bg-primary transition-colors duration-300 ease-out">
          <p className="font-medium">{count}</p>
        </div>
      )}
    </div>
  )
}
