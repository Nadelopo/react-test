import type { FC } from 'react'
import { Search } from '@/components/ui/Search/Search'
import { useFiltersStore } from '@/stores/filtersStore'
import S from './SearchToolbar.module.scss'

export const SearchToolbar: FC = () => {
  const search = useFiltersStore(state => state.search)
  const setSearch = useFiltersStore(state => state.setSearch)

  return (
    <div className="container">
      <div className={S.search_toolbar}>
        <Search
          placeholder="title"
          containerAttrs={{ className: S.search }}
          value={search}
          onInput={e => setSearch((e.target as HTMLInputElement).value)}
          onClear={() => setSearch('')}
        />
      </div>
    </div>
  )
}
