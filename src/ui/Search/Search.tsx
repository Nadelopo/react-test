import type { FC, HTMLAttributes, InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import SearchIcon from '@/assets/icons/search_icon.svg?react'
import S from './Search.module.scss'

type SearchProps = InputHTMLAttributes<HTMLInputElement> & {
  containerAttrs?: HTMLAttributes<HTMLDivElement>
}

export const Search: FC<SearchProps> = ({ containerAttrs, ...props }) => {
  // const id = props.id ?? crypto.randomUUID()
  const id = Math.random().toString()
  return (
    <div
      {...containerAttrs}
      className={clsx(S.search, containerAttrs?.className)}
    >
      <SearchIcon className={S.saerch_icon} />
      <input
        {...props}
        id={id}
      />
    </div>
  )
}
