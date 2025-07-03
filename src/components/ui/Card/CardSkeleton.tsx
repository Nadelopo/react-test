import type { FC } from 'react'
import S from './CardSkeleton.module.scss'

export const CardSkeleton: FC = () => {
  return (
    <div className={S.card_skeleton}></div>
  )
}
