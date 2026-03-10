import { create } from 'zustand'
import type { GameCardProps } from '../_components/GameCard'

type CartStore = {
  items: GameCardProps[]
  addNewItem: (item: GameCardProps) => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addNewItem: (item: GameCardProps) => set((state) => ({ items: [...state.items, item] }))
}))
