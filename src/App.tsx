import './styles/App.scss'
import { useState } from 'react'
import { PostList } from './components/UI/PostList/PostList'
import { CreatePostForm } from './components/UI/CreatePostForm/CreatePostForm'
import { IPost } from './components/UI/PostItem/PostItem'

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 0, title: 'JavaScript 1', body: 'Description' },
    { id: 1, title: 'JavaScript 2', body: 'Description' },
    { id: 2, title: 'JavaScript 3', body: 'Description' },
    { id: 3, title: 'JavaScript 4', body: 'Description' },
  ])

  const createNewPost = (newPost: IPost) => {
    setPosts([...posts, { ...newPost, id: posts.length }])
  }

  const removePost = (post: IPost) => {
    setPosts(posts.filter((postItem) => postItem.id !== post.id))
  }

  return (
    <>
      <div className='App'>
        <CreatePostForm createNewPost={createNewPost} />
        <PostList removePost={removePost} posts={posts} title={'Список постов'} />
      </div>
    </>
  )
}
