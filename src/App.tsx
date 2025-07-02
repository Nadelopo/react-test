import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from '@/components/Header'
import { PaintingsList } from './components/Paintings/PaintingsList'

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
        <PaintingsList />

      </QueryClientProvider>
    </>
  )
}
