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
    <article className={S.card}>
      <img
        src={props.url}
        alt={props.name}
        onContextMenu={e => e.preventDefault()}
        loading="lazy"
      />
      <div className={S.info_wrapper}>
        <div className={S.info}>
          <div className={S.front}>
            <h2 className={S.heading}>{props.name}</h2>
            <h3 className={S.caption}>{props.created}</h3>
          </div>
          <div className={S.back}>
            <h2 className={S.heading}>{props.author}</h2>
            <h3 className={S.caption}>{props.location}</h3>
          </div>
        </div>
      </div>
    </article>
  )
}
