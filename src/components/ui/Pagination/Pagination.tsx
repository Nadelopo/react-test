import type { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import { useMemo } from 'react'
import ArrowIcon from '@/assets/icons/arrow_icon.svg?react'
import { arrayRange } from '@/utils/arrayRange'
import S from './Pagination.module.scss'

type PaginationProps = HTMLAttributes<HTMLDivElement> & {
  currentPage: number
  pageSize: number
  pageCount: number
  onUpdate?: (value: number) => void
}

const dots = null

export const Pagination: FC<PaginationProps> = ({ currentPage, pageCount, pageSize, className, onUpdate: onPageUpdate, ...props }) => {
  const countPages = Math.ceil(pageCount / pageSize)

  const paginationItems = useMemo(() => {
    const prefPages = 3
    const slots = 5

    if (countPages <= slots) {
      return arrayRange(1, countPages + 1)
    }

    const isStartPosition = currentPage - 1 < prefPages
    if (isStartPosition) {
      return [...arrayRange(1, 4), dots, countPages]
    }

    const isMiddlePosition = currentPage - 1 <= countPages - (prefPages + 1)
    if (isMiddlePosition) {
      const minPage = currentPage
      const maxPage = currentPage + 1
      return [1, dots, ...arrayRange(minPage, maxPage), dots, countPages]
    }

    return [1, dots, ...arrayRange(countPages - (2), countPages + 1)]
  }, [currentPage, pageCount, pageSize])

  return (
    <div
      {...props}
      className={clsx(S.pagination, className)}
    >
      <button
        onClick={() => onPageUpdate?.(currentPage - 1)}
        className={clsx([S.arrow, S.arrow_left])}
        disabled={currentPage <= 1}
      >
        <ArrowIcon />
      </button>
      {
        paginationItems.map((item, index) => (
          <button
            key={index}
            className={clsx({
              [S.dots]: item === null,
              [S.active]: currentPage === item
            })}
            onClick={() => item !== null && onPageUpdate?.(item)}
            tabIndex={item === null ? -1 : 0}
          >
            {item ?? '...'}
          </button>
        ))
      }
      <button
        onClick={() => onPageUpdate?.(currentPage + 1)}
        className={clsx([S.arrow, S.arrow_right])}
        disabled={currentPage >= countPages}
      >
        <ArrowIcon />
      </button>

    </div>
  )
}
