import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from '@/components/Header'
import { PaintingsGrid } from './components/PaintingsGrid'
import { PaintingsPagination } from './components/PaintingsPagination'
import { SearchToolbar } from './components/SearchToolbar'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 60 * 1000 * 5,
      staleTime: 60 * 1000 * 5
    }
  }
})

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <SearchToolbar />
        <PaintingsGrid />
        <PaintingsPagination />
      </QueryClientProvider>
    </>
  )
}
