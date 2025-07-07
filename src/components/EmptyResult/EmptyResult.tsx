import type { FC } from 'react'
import S from './EmptyResult.module.scss'

type EmptyResultProps = {
  search: string
}

export const EmptyResult: FC<EmptyResultProps> = (props) => {
  return (

    <div className={S.empty_result}>
      <div className={S.no_matches}>
        No matches for
        <span className={S.search}>
          {' '}
          {props.search}
        </span>
      </div>
      <div className={S.message}>
        Please try again with a different spelling or keywords.
      </div>
    </div>
  )
}
