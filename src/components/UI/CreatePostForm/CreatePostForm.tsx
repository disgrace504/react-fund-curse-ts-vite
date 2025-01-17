import { memo, useState } from 'react'
import { MyInput } from '../input/MyInput'
import { MyButton } from '../button/MyButton'
import { IPost } from '../PostItem/PostItem'

interface ICreatePostFormProps {
  onCreateNewPost: (newPost: IPost) => void
}

export const CreatePostForm = memo(({ onCreateNewPost }: ICreatePostFormProps) => {
  const [newPost, setNewPost] = useState({ title: '', body: '' })

  const onAddNewPost = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    onCreateNewPost(newPost)

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
      <MyButton onClick={onAddNewPost}>Создать пост</MyButton>
    </form>
  )
})
