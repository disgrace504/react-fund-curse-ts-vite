import './styles/App.scss'
import { useState } from 'react'
import { PostList } from './components/UI/PostList/PostList'
import { CreatePostForm } from './components/UI/CreatePostForm/CreatePostForm'

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 0, title: 'JavaScript 1', body: 'Description' },
    { id: 1, title: 'JavaScript 2', body: 'Description' },
    { id: 2, title: 'JavaScript 3', body: 'Description' },
    { id: 3, title: 'JavaScript 4', body: 'Description' },
  ])

  return (
    <>
      <div className='App'>
        <CreatePostForm setPosts={setPosts} posts={posts} />
        <PostList posts={posts} title={'Список постов'} />
      </div>
    </>
  )
}
