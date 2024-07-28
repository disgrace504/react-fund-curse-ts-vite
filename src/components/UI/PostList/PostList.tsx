import cls from './PostList.module.scss'
import { IPost, PostItem } from '../PostItem/PostItem'

interface IPostListProps {
  posts: IPost[]
  title: string
}

export const PostList = ({ posts, title }: IPostListProps) => {
  return (
    <div>
      <h1 className={cls.appTitle}>{title}</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
