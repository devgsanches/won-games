import { create } from 'zustand'
import type { GetNewReleases } from '@/app/graphql/queries/get-new-releases'

type CartStore = {
  items: Omit<GetNewReleases, '__typename' | 'short_description'>[]
  addNewItem: (item: Omit<GetNewReleases, '__typename' | 'short_description'>) => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addNewItem: (item: Omit<GetNewReleases, '__typename' | 'short_description'>) => set((state) => ({ items: [...state.items, item] }))
}))
