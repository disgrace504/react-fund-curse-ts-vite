import { memo } from 'react'
import cls from './MyButton.module.scss'

interface IMyButtonProps {
  buttonClasses?: string
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const MyButton = memo(({ children, onClick, buttonClasses }: IMyButtonProps) => {
  const rootStyles = [cls.myButton]
  if (buttonClasses) {
    rootStyles.push(buttonClasses)
  }

  return (
    <button onClick={onClick} className={rootStyles.join(' ')}>
      {children}
    </button>
  )
})
