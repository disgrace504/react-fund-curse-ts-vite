import { memo } from 'react'
import { MyInput } from '../input/MyInput'
import { MySelect } from '../select/MySelect'
import cls from './PostsFilter.module.scss'

interface IPostsFilterProps {
  filter: {
    sortBy: string
    searchQuery: string
  }
  setFilter: (filter: { sortBy: string; searchQuery: string }) => void
}

export const PostsFilter = memo(({ filter, setFilter }: IPostsFilterProps) => {
  const { sortBy, searchQuery } = filter
  return (
    <div>
      <hr className={cls.separatorLine} />
      <MyInput
        type='text'
        placeholder='Поиск...'
        value={searchQuery}
        onChange={(event) => setFilter({ ...filter, searchQuery: event.target.value })}
      />
      <MySelect
        onChange={(selectedSort) => setFilter({ ...filter, sortBy: selectedSort })}
        value={sortBy}
        options={[
          { value: 'title', title: 'По названию' },
          { value: 'body', title: 'По описанию' },
        ]}
        defaultValue='Сортировка'
      />
    </div>
  )
})
