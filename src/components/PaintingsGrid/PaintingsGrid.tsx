import type { FC } from 'react'
import type { Painting } from '@/api/services/paintings'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getPaintings } from '@/api/services/paintings'
import { mapPaintings } from '@/api/services/paintings/paintingsMapper'
import { useAuthors } from '@/hooks/useAuthors'
import { useDebounce } from '@/hooks/useDebounce'
import { useLocations } from '@/hooks/useLocations'
import { useFiltersStore } from '@/stores/filtersStore'
import { Card } from '@/ui/Card'
import { EmptyResult } from '../EmptyResult/EmptyResult'
import S from './PaintingsGrid.module.scss'

export const PaintingsGrid: FC = () => {
  const { data: authors, isFetching: isAuthorsLoading } = useAuthors()
  const { data: locations, isFetching: isLocationsLoading } = useLocations()

  const search = useFiltersStore(state => state.search)
  const limit = useFiltersStore(state => state.limit)
  const setTotalPaintings = useFiltersStore(state => state.setTotalPaintings)
  const page = useFiltersStore(state => state.page)
  const setPage = useFiltersStore(state => state.setPage)
  const setIsLoading = useFiltersStore(state => state.setIsLoading)

  const debouncedSearch = useDebounce(search)
  useEffect(() => {
    setPage(1)
  }, [debouncedSearch])

  const { data, isFetching } = useQuery({
    queryKey: ['paintings', debouncedSearch, page],
    queryFn: async ({ signal }) => {
      const response = await getPaintings({
        search: debouncedSearch,
        limit,
        page,
        signal
      })

      const countPaintings: string | undefined = response.headers['x-total-count']
      if (countPaintings) {
        setTotalPaintings(Number(countPaintings))
      }

      return { ...response, countPaintings: countPaintings ? Number(countPaintings) : null }
    },
    initialData: () => {
      return { data: [] as Painting[], countPaintings: null as number | null }
    },
    initialDataUpdatedAt: 0,
    select: (response) => {
      if (response.countPaintings) {
        setTotalPaintings(response.countPaintings)
      }
      return { paintings: mapPaintings(response.data, authors, locations) }
    },
    enabled: Boolean(authors.length) && Boolean(locations.length)
  })

  const cards = data.paintings.map(p => (
    <Card
      key={p.id}
      {...p}
    />
  ))

  const isLoading = isFetching || isLocationsLoading || isAuthorsLoading

  useEffect(() => {
    setIsLoading(isLoading)
  }, [isLoading])

  if (isLoading) {
    return (
      <div className={S.loading}>Loading...</div>
    )
  }

  return (
    <div className="container">
      {data.paintings.length
        ? (
            <div className={S.paintings_grid}>
              {cards}
            </div>
          )
        : <EmptyResult search={debouncedSearch} />}
    </div>
  )
}
