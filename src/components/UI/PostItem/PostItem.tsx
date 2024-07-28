import cls from './PostItem.module.scss'

export interface IPost {
  id: number
  title: string
  body: string
}

interface IPostItemProps {
  post: IPost
}

export const PostItem = ({ post }: IPostItemProps) => {
  const { id, title, body } = post
  return (
    <div className={cls.post}>
      <div className={cls.postContent}>
        <p className={cls.postTitle}>{id + '. ' + title}</p>
        <div>{body}</div>
      </div>
      <div className='postButtons'>
        <button>Удалить</button>
      </div>
    </div>
  )
}
