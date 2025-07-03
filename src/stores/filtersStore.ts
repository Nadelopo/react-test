import { create } from 'zustand'

type FiltersStore = {
  search: string
  setSearch: (value: string) => void
  page: number
  setPage: (value: number) => void
}

export const useFiltersStore = create<FiltersStore>(set => ({
  page: 1,
  setPage: page => set({ page }),
  search: '',
  setSearch: search => set({ search }),
}))
