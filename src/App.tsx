import { Header } from '@/components/Header'
import { Card } from './shared/ui/Card/Card'

const url = 'https://test-front.framework.team/images/The_ninth_wave.jpeg'

export const App = () => {
  return (
    <>
      <Header />
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
    </>
  )
}
