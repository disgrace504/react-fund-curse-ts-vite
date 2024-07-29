import { memo } from 'react'
import cls from './MyInput.module.scss'

interface IMyInputProps {
  type: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const MyInput = memo(({ type, placeholder, onChange, value }: IMyInputProps) => {
  return <input value={value} onChange={onChange} type={type} placeholder={placeholder} className={cls.myInput} />
})
