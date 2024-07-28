import { useState } from 'react'
import { MyInput } from '../input/MyInput'
import { MyButton } from '../button/MyButton'
import { IPost } from '../PostItem/PostItem'

interface ICreatePostFormProps {
  posts: IPost[]
  setPosts: (posts: IPost[]) => void
}

export const CreatePostForm = ({ posts, setPosts }: ICreatePostFormProps) => {
  const [newPost, setNewPost] = useState({ title: '', body: '' })

  const addNewPost = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const updatedPosts = [...posts, { ...newPost, id: posts.length }]

    setPosts(updatedPosts)

    setNewPost({ title: '', body: '' })
  }

  return (
    <form>
      <MyInput
        value={newPost.title}
        onChange={(event) => setNewPost({ ...newPost, title: event.target.value })}
        placeholder='Название поста'
        type='text'
      />
      <MyInput
        value={newPost.body}
        onChange={(event) => setNewPost({ ...newPost, body: event.target.value })}
        placeholder='Описание поста'
        type='text'
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}
