import type { FC } from 'react'
import { useRef, useState } from 'react'
import { Search } from '@/components/ui/Search'
import { useStoreSelect } from '@/hooks/useStoreSelect'
import { useFiltersStore } from '@/stores/filtersStore'
import { debounce } from '@/utils/debounce'
import S from './SearchToolbar.module.scss'

export const SearchToolbar: FC = () => {
  const { search, setSearch } = useStoreSelect(useFiltersStore, ['search', 'setSearch'])
  const [text, setText] = useState(search)

  const debouncedSetSearch = useRef(
    debounce((val: string) => setSearch(val))
  ).current

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setText(target.value)
    debouncedSetSearch(target.value)
  }

  return (
    <div className="container">
      <div className={S.search_toolbar}>
        <Search
          placeholder="title"
          containerProps={{ className: S.search }}
          value={text}
          onInput={handleInput}
          onClear={() => {
            setSearch('')
            setText('')
          }}
        />
      </div>
    </div>
  )
}
