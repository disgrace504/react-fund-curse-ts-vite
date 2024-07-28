import { MyButton } from '../button/MyButton'
import cls from './PostItem.module.scss'

export interface IPost {
  id?: number
  title: string
  body: string
}

interface IPostItemProps {
  post: IPost
  postNumber: number
  removePost: (newPost: IPost) => void
}

export const PostItem = ({ post, postNumber, removePost }: IPostItemProps) => {
  const { title, body } = post
  return (
    <div className={cls.post}>
      <div className={cls.postContent}>
        <p className={cls.postTitle}>{`${postNumber}. ${title}`}</p>
        <div>{body}</div>
      </div>
      <div className='postButton'>
        <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
      </div>
    </div>
  )
}
