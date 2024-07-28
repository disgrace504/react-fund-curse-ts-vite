import cls from './PostList.module.scss'
import { IPost, PostItem } from '../PostItem/PostItem'

interface IPostListProps {
  posts: IPost[]
  title: string
  removePost: (newPost: IPost) => void
}

export const PostList = ({ posts, title, removePost }: IPostListProps) => {
  return (
    <div>
      <h1 className={cls.appTitle}>{title}</h1>
      {posts.map((post, index: number) => (
        <PostItem removePost={removePost} postNumber={index + 1} key={post.id} post={post} />
      ))}
    </div>
  )
}
