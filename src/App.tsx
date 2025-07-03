import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from '@/components/Header'
import { PaintingsGrid } from './components/PaintingsGrid'
import { PaintingsPagination } from './components/PaintingsPagination'
import { SearchToolbar } from './components/SearchToolbar'
import { useFiltersStore } from './stores/filtersStore'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 60 * 1000 * 5,
      staleTime: 60 * 1000 * 5
    }
  }
})

export const App = () => {
  const isLoading = useFiltersStore(state => state.isLoading)
  const totalPaintings = useFiltersStore(state => state.totalPaintings)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <SearchToolbar />
        <PaintingsGrid />
        {(!isLoading && Boolean(totalPaintings)) && <PaintingsPagination />}
      </QueryClientProvider>
    </>
  )
}
