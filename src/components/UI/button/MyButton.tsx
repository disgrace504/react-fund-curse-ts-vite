import cls from './MyButton.module.scss'

interface IMyButtonProps {
  children: string
}

export const MyButton = ({ children, ...props }: IMyButtonProps) => {
  return (
    <button {...props} className={cls.myButton}>
      {children}
    </button>
  )
}
