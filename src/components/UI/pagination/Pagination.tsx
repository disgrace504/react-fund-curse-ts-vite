import { memo } from 'react'
import cls from './Pagination.module.scss'

interface IPaginationProps {
  totalPages: number[]
  currentPage: number
  onChangePage: (pageNumber: number) => void
}

export const Pagination = memo(({ totalPages, currentPage, onChangePage }: IPaginationProps) => {
  return (
    <div className={cls.pagesWrapper}>
      {totalPages.map((pageNumber) => (
        <span
          onClick={() => onChangePage(pageNumber)}
          key={pageNumber}
          className={currentPage === pageNumber ? [cls.pages, cls.active].join(' ') : cls.pages}>
          {pageNumber}
        </span>
      ))}
    </div>
  )
})
