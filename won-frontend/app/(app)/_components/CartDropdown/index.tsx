'use client'

import { ShoppingCartIcon } from 'lucide-react'
import { Dropdown } from '../Dropdown'
import { CartList } from '../CartList'
import { useState } from 'react'
import type { GameCardProps } from '../GameCard'
import { useCartStore } from '../../_store/cart'

interface CartDropdownProps {
  items?: GameCardProps[]
}

export function CartDropdown({ items = [] }: CartDropdownProps) {

  const [open, setOpen] = useState(false)


  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      align="end"
      sideOffset={24}
      alignOffset={-12}
      trigger={
        <div className="relative">
          <ShoppingCartIcon
            strokeWidth={1.7}
            size={28}
            className="transition-colors duration-200"
            aria-label="Carrinho de compras"
          />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-2 h-5 w-5 bg-secondary rounded-full flex items-center justify-center text-xs font-medium text-white group-hover:bg-primary transition-colors duration-200">
              {items.length}
            </span>
          )}
        </div>
      }
    >
      <CartList
        items={items}
        total={items.reduce((acc, item) => acc + (item.price ?? 0), 0)}
        buyNow
        isOpen={open}
        onOpenChange={setOpen}
      />
    </Dropdown>
  )
}
