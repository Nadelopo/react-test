import type { FC } from 'react'
import { useRef } from 'react'
import S from './EmptyResult.module.scss'

type EmptyResultProps = {
  search: string
}

export const EmptyResult: FC<EmptyResultProps> = (props) => {
  const staticSearch = useRef(props.search)
  return (

    <div className={S.empty_result}>
      <div className={S.no_matches}>
        No matches for
        <span className={S.search}>
          {' '}
          {staticSearch.current}
        </span>
      </div>
      <div className={S.message}>
        Please try again with a different spelling or keywords.
      </div>
    </div>
  )
}
