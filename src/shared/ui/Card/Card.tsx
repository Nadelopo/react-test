import type { FC } from 'react'
import S from './Card.module.scss'

type CardProps = {
  title: string
  year: string
  author: string
  location: string
  url: string
}

export const Card: FC<CardProps> = (props) => {
  return (
    <div className={S.card}>
      <img src={props.url} alt={props.title} />
      <div className={S.info_wrapper}>
        <div className={S.info}>
          <div className={S.front}>
            <div className={S.heading}>{props.title}</div>
            <div className={S.caption}>{props.year}</div>
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
