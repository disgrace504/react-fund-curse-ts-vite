import { memo } from 'react'

interface IOption {
  value: string
  title: string
}

interface IMySelectProps {
  defaultValue: string
  options: IOption[]
  onChange: (sort: string) => void
  value: string
}

export const MySelect = memo(({ defaultValue, options, onChange, value }: IMySelectProps) => {
  return (
    <div>
      <select onChange={(event) => onChange(event.target.value)} value={value}>
        <option disabled value=''>
          {defaultValue}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  )
})
