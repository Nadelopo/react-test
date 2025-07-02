import type { FC } from 'react'
import type { Paintings } from '@/api/services/paintings'
import { useQuery } from '@tanstack/react-query'
import { getPaintings } from '@/api/services/paintings'
import S from './Paintings.module.scss'
import { Card } from '@/shared/ui/Card/Card'

const withInitialData = <T,>(data: T) => {
  const initialData = { data }
  return {
    initialData,
    initialDataUpdatedAt: 0
  }
} 





export const PaintingsList: FC = () => {

  const { data } = useQuery({
    queryKey: ['paintings'],
    queryFn: getPaintings,
    ...withInitialData<Paintings[]>([]),
    select: response => response.data,
  })


  return (
    <div className={S.paintings}>
      {/* {data.map(p => (
        <Card />
      ))} */}
    </div>
  )
}
