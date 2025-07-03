import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from '@/components/Header'
import { PaintingsGrid } from './components/Paintings/PaintingsGrid'
import { SearchToolbar } from './components/SearchToolbar/SearchToolbar'

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 60 * 1000 * 5,
        staleTime: 60 * 1000 * 5
      }
    }
  })

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <SearchToolbar />
        <PaintingsGrid />
      </QueryClientProvider>
    </>
  )
}
