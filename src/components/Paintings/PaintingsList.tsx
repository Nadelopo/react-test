import type { FC } from 'react'
import type { Painting } from '@/api/services/paintings'
import { useQuery } from '@tanstack/react-query'
import { getPaintings } from '@/api/services/paintings'
import { mapPaintings } from '@/api/services/paintings/paintingsMapper'
import { useAuthors } from '@/hooks/useAuthors'
import { useLocations } from '@/hooks/useLocations'
import { Card } from '@/ui/Card'
import { withInitialData } from '@/utils/queries'
import S from './Paintings.module.scss'

export const PaintingsList: FC = () => {
  const { data: authors } = useAuthors()
  const { data: locations } = useLocations()

  const { data } = useQuery({
    queryKey: ['paintings'],
    queryFn: () => getPaintings(),
    ...withInitialData<Painting[]>([]),
    select: response => mapPaintings(response.data, authors, locations),
    enabled: Boolean(authors.length) && Boolean(locations.length)
  })

  return (
    <div className={`container ${S.paintings}`}>
      {data.map(p => (
        <Card
          key={p.id}
          {...p}
        />
      ))}
    </div>
  )
}
