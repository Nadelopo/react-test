import type { Painting } from '@/api/services/paintings'
import { useQuery } from '@tanstack/react-query'
import { getPaintings } from '@/api/services/paintings'
import { mapPaintings } from '@/api/services/paintings/mapPaintings'
import { useFiltersStore } from '@/stores/filtersStore'
import { withInitialData } from '@/utils/queries'
import { useAuthors } from './useAuthors'
import { useLocations } from './useLocations'
import { useStoreSelect } from './useStoreSelect'

export const usePaintings = () => {
  const { data: authors, isFetching: isAuthorsLoading } = useAuthors()
  const { data: locations, isFetching: isLocationsLoading } = useLocations()

  const { search, limit, page } = useStoreSelect(useFiltersStore, ['search', 'limit', 'page'])

  const result = useQuery({
    queryKey: ['paintings', search, page],
    queryFn: async ({ signal }) => {
      const response = await getPaintings({
        search,
        limit,
        page,
        signal
      })

      const countPaintings: string | undefined = response.headers['x-total-count']

      return { ...response, countPaintings: countPaintings ? Number(countPaintings) : 0 }
    },
    ...withInitialData<{ data: Painting[], countPaintings: number }>({
      data: [],
      countPaintings: 0
    }),
    select: response => ({
      paintings: mapPaintings(response.data, authors, locations),
      countPaintings: response.countPaintings
    }),
    enabled: Boolean(authors.length) && Boolean(locations.length)
  })

  const isLoading = result.isFetching || isLocationsLoading || isAuthorsLoading

  return { ...result, isFetching: isLoading }
}
