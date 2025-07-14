import type { FC } from 'react'
import { useMemo } from 'react'
import { Card } from '@/components/ui/Card'
import { usePaintings } from '@/hooks/usePaintings'
import { useStoreSelect } from '@/hooks/useStoreSelect'
import { useFiltersStore } from '@/stores/filtersStore'
import { EmptyResult } from '../EmptyResult/EmptyResult'
import { CardSkeleton } from '../ui/Card/CardSkeleton'
import S from './PaintingsGrid.module.scss'

export const PaintingsGrid: FC = () => {
  const { search, limit } = useStoreSelect(useFiltersStore, ['search', 'limit'])

  const { data, isFetching } = usePaintings()

  const cardSkeletons = useMemo(() =>
    Array.from({ length: limit }, (_, i) => (
      <CardSkeleton key={i} />
    )), [limit])

  if (!isFetching && !data.paintings.length) {
    return (
      <div className="container">
        <EmptyResult search={search} />
      </div>
    )
  }

  const cards = data.paintings.map(p => (
    <Card
      key={p.id}
      {...p}
    />
  ))

  return (
    <div className="container">
      <div className={S.paintings_grid}>
        {isFetching ? cardSkeletons : cards}
      </div>
    </div>
  )
}
