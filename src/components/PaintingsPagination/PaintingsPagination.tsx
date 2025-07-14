import type { FC } from 'react'
import { Pagination } from '@/components/ui/Pagination/Pagination'
import { usePaintings } from '@/hooks/usePaintings'
import { useStoreSelect } from '@/hooks/useStoreSelect'
import { useFiltersStore } from '@/stores/filtersStore'
import S from './PaintingsPagination.module.scss'

export const PaintingsPagination: FC = () => {
  const { page, limit, setPage } = useStoreSelect(useFiltersStore, ['page', 'limit', 'setPage'])

  const { data, isFetching } = usePaintings()

  if (isFetching || !data.countPaintings) {
    return null
  }

  return (
    <div className="container">
      <Pagination
        className={S.paintings_pagination}
        currentPage={page}
        pageCount={data.countPaintings}
        pageSize={limit}
        onUpdate={setPage}
      />
    </div>
  )
}
