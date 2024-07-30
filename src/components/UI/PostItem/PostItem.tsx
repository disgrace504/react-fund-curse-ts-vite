import { memo, useCallback } from 'react'
import { MyButton } from '../button/MyButton'
import cls from './PostItem.module.scss'

export interface IPost {
  id: number
  title: string
  body: string
}

interface IPostItemProps {
  post: IPost
  removePost: (newPost: IPost) => void
}

export const PostItem = memo(({ post, removePost }: IPostItemProps) => {
  const { id, title, body } = post
  const onRemovePost = useCallback(() => {
    removePost(post)
  }, [post, removePost])
  return (
    <div className={cls.post}>
      <div className={cls.postContent}>
        <p className={cls.postTitle}>{`${id}. ${title}`}</p>
        <div>{body}</div>
      </div>

      <MyButton onClick={onRemovePost}>Удалить</MyButton>
    </div>
  )
})
