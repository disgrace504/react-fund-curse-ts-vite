import { Post, PostItem } from './PostItem'
import '../styles/App.css'

interface PostListProps {
  posts: Post[]
  title: string
}

export const PostList: React.FC<PostListProps> = ({ posts, title }) => {
  return (
    <div>
      <h1 className='appTitle'>{title}</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
