import { FC } from 'react'
import cls from './MyButton.module.css'

interface MyButtonProps {
  children: string
}

export const MyButton: FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={cls.myButton}>
      {children}
    </button>
  )
}
