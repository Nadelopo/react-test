import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { Header } from '@/components/Header'
import { getPaintings } from './api/services/paintings'
import { PaintingsList } from './components/Paintings/PaintingsList'
import { Card } from './shared/ui/Card/Card'

const url = 'https://test-front.framework.team/images/The_ninth_wave.jpeg'

export const App = () => {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <Header />
        <PaintingsList />
        <div className="container">
          <div style={{ fontFamily: 'Inter' }}>test</div>
          <Card
            url={url}
            title="cascate di tivoli"
            year="1761"
            location="location"
            author="author"
          />
        </div>
      </QueryClientProvider>
    </>
  )
}
