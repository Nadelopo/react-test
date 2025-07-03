import type { FC } from 'react'
import { Pagination } from '@/components/ui/Pagination/Pagination'
import { useFiltersStore } from '@/stores/filtersStore'
import S from './PaintingsPagination.module.scss'

export const PaintingsPagination: FC = () => {
  const page = useFiltersStore(state => state.page)
  const setPage = useFiltersStore(state => state.setPage)
  const limit = useFiltersStore(state => state.limit)
  const totalPaintings = useFiltersStore(state => state.totalPaintings)

  return (
    <div className="container">
      <Pagination
        className={S.paintings_pagination}
        currentPage={page}
        pageCount={totalPaintings}
        pageSize={limit}
        onUpdate={value => setPage(value)}
      />
    </div>
  )
}
