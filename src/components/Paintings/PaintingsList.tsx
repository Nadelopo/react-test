import type { FC } from 'react'
import type { Painting } from '@/api/services/paintings'
import { useQuery } from '@tanstack/react-query'
import { getPaintings } from '@/api/services/paintings'
import { mapPaintings } from '@/api/services/paintings/paintingsMapper'
import { useAuthors } from '@/hooks/useAuthors'
import { useDebounce } from '@/hooks/useDebounce'
import { useLocations } from '@/hooks/useLocations'
import { useFiltersStore } from '@/stores/filtersStore'
import { Card } from '@/ui/Card'
import { withInitialData } from '@/utils/queries'
import S from './PaintingsList.module.scss'

export const PaintingsList: FC = () => {
  const { data: authors } = useAuthors()
  const { data: locations } = useLocations()

  const search = useFiltersStore(state => state.search)

  const debouncedSearch = useDebounce(search)

  const { data } = useQuery({
    queryKey: ['paintings', debouncedSearch],
    queryFn: () => getPaintings({
      search: debouncedSearch
    }),
    ...withInitialData<Painting[]>([]),
    select: response => mapPaintings(response.data, authors, locations),
    enabled: Boolean(authors.length) && Boolean(locations.length)
  })

  return (
    <div className={`container ${S.paintings}`}>

      {data.length
        ? data.map(p => (
            <Card
              key={p.id}
              {...p}
            />
          ))
        : (
            <div>
              No matches for
              <span>
                {` ${debouncedSearch}`}
              </span>
            </div>
          )}
    </div>
  )
}
