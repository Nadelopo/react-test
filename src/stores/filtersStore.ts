import { create } from 'zustand'

type FiltersStore = {
  search: string
  setSearch: (value: string) => void
  page: number
  setPage: (value: number) => void
  limit: number
  setLimit: (value: number) => void
  totalPaintings: number
  setTotalPaintings: (value: number) => void
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

export const useFiltersStore = create<FiltersStore>(set => ({
  page: 1,
  setPage: page => set({ page }),
  search: '',
  setSearch: search => set({ search }),
  limit: 6,
  setLimit: limit => set({ limit }),
  totalPaintings: 0,
  setTotalPaintings: totalPaintings => set({ totalPaintings }),
  isLoading: true,
  setIsLoading: isLoading => set({ isLoading })
}))
