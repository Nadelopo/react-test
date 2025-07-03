import type { FC } from 'react'
import type { Painting } from '@/api/services/paintings'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getPaintings } from '@/api/services/paintings'
import { mapPaintings } from '@/api/services/paintings/paintingsMapper'
import { Card } from '@/components/ui/Card'
import { useAuthors } from '@/hooks/useAuthors'
import { useLocations } from '@/hooks/useLocations'
import { useFiltersStore } from '@/stores/filtersStore'
import { EmptyResult } from '../EmptyResult/EmptyResult'
import { CardSkeleton } from '../ui/Card/CardSkeleton'
import S from './PaintingsGrid.module.scss'

export const PaintingsGrid: FC = () => {
  const { data: authors, isFetching: isAuthorsLoading } = useAuthors()
  const { data: locations, isFetching: isLocationsLoading } = useLocations()

  const search = useFiltersStore(state => state.search)
  const limit = useFiltersStore(state => state.limit)
  const setTotalPaintings = useFiltersStore(state => state.setTotalPaintings)
  const page = useFiltersStore(state => state.page)

  const { data, isFetching } = useQuery({
    queryKey: ['paintings', search, page],
    queryFn: async ({ signal }) => {
      const response = await getPaintings({
        search,
        limit,
        page,
        signal
      })

      const countPaintings: string | undefined = response.headers['x-total-count']

      return { ...response, countPaintings: countPaintings ? Number(countPaintings) : null }
    },
    initialData: () => ({
      data: [] as Painting[],
      countPaintings: null as number | null
    }),
    initialDataUpdatedAt: 0,
    select: response => ({
      paintings: mapPaintings(response.data, authors, locations),
      countPaintings: response.countPaintings
    }),
    enabled: Boolean(authors.length) && Boolean(locations.length)
  })

  useEffect(() => {
    if (data.countPaintings !== null) {
      setTotalPaintings(data.countPaintings)
    }
  }, [data])

  const setIsLoading = useFiltersStore(state => state.setIsLoading)
  const isLoading = isFetching || isLocationsLoading || isAuthorsLoading
  useEffect(() => setIsLoading(isLoading), [isLoading])

  if (!isLoading && !data.paintings.length) {
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
  const cardSkeletons = Array.from({ length: limit }).fill(null).map((_, i) => (
    <CardSkeleton key={i} />
  ))

  return (
    <div className="container">
      <div className={S.paintings_grid}>
        {isLoading ? cardSkeletons : cards}
      </div>
    </div>
  )
}
