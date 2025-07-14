import type { FC, HTMLAttributes, InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import CrossIcon from '@/assets/icons/cross_icon.svg?react'
import SearchIcon from '@/assets/icons/search_icon.svg?react'
import S from './Search.module.scss'

type SearchProps = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
  onClear?: () => void
}

export const Search: FC<SearchProps> = ({ containerProps, onClear, ...props }) => {
  const id = props.id ?? crypto.randomUUID()
  return (
    <div
      {...containerProps}
      className={clsx(S.search, containerProps?.className)}
    >
      <SearchIcon className={S.saerch_icon} />
      <input
        {...props}
        id={id}

      />
      {
        Boolean(props.value)
        && (
          <CrossIcon
            className={S.cross_icon}
            onClick={onClear}
          />
        )
      }
    </div>
  )
}
