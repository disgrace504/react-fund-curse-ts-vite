import cls from './MyButton.module.scss'

interface IMyButtonProps {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const MyButton = ({ children, onClick }: IMyButtonProps) => {
  return (
    <button onClick={onClick} className={cls.myButton}>
      {children}
    </button>
  )
}
