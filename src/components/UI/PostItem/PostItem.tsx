import { memo, useCallback } from 'react'
import { MyButton } from '../button/MyButton'
import cls from './PostItem.module.scss'

export interface IPost {
  id?: number
  title: string
  body: string
}

interface IPostItemProps {
  post: IPost
  posts: IPost[]
  postNumber: number
  removePost: (newPost: IPost) => void
}

export const PostItem = memo(({ posts, post, postNumber, removePost }: IPostItemProps) => {
  const { title, body } = post
  const onRemovePost = useCallback(() => {
    removePost(post)
  }, [posts])
  return (
    <div className={cls.post}>
      <div className={cls.postContent}>
        <p className={cls.postTitle}>{`${postNumber}. ${title}`}</p>
        <div>{body}</div>
      </div>

      <MyButton onClick={onRemovePost}>Удалить</MyButton>
    </div>
  )
})
