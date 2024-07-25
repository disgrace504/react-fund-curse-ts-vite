import './styles/App.css'
import { useState } from 'react'
import { PostList } from './components/PostList'
import { MyButton } from './components/UI/button/MyButton'

export const App: React.FC = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
    { id: 4, title: 'JavaScript 4', body: 'Description' },
  ])
  return (
    <>
      <div className='App'>
        <form>
          <input placeholder='Название поста' type='text' />
          <input placeholder='Описание поста' type='text' />
          <MyButton>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={'Список постов'} />
      </div>
    </>
  )
}
