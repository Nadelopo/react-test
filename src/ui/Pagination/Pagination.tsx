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
    let items: (number | null)[] = []
    if (pageCount <= pageSize) {
      items = [1]
    }
    else if (countPages <= 4) {
      items = arrayRange(1, countPages + 1)
    }
    else if (currentPage < 4) {
      items = [1, 2, 3, 4, dots, countPages]
    }
    else if (countPages - currentPage > 3) {
      items = [1, dots, currentPage - 1, currentPage, currentPage + 1, dots, countPages]
    }
    else {
      items = [1, dots, countPages - 3, countPages - 2, countPages - 1, countPages]
    }
    return items
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
