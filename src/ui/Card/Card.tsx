import type { FC } from 'react'
import S from './Card.module.scss'

export type CardProps = {
  name: string
  created: string
  author: string
  location: string
  url: string
}

export const Card: FC<CardProps> = (props) => {
  return (
    <div className={S.card}>
      <img
        src={props.url}
        alt={props.name}
        onTouchStart={e => e.preventDefault()}
        onContextMenu={e => e.preventDefault()}
      />
      <div className={S.info_wrapper}>
        <div className={S.info}>
          <div className={S.front}>
            <div className={S.heading}>{props.name}</div>
            <div className={S.caption}>{props.created}</div>
          </div>
          <div className={S.back}>
            <div className={S.heading}>{props.author}</div>
            <div className={S.caption}>{props.location}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
