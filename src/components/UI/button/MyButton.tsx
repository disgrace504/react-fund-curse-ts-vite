import { memo } from 'react'
import cls from './MyButton.module.scss'

interface IMyButtonProps {
  className?: string
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const MyButton = memo(({ children, onClick, className }: IMyButtonProps) => {
  const rootStyles = [cls.myButton]
  if (className) {
    rootStyles.push(className)
  }

  return (
    <button onClick={onClick} className={rootStyles.join(' ')}>
      {children}
    </button>
  )
})
