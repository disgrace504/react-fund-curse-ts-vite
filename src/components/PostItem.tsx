import '../styles/App.css'

export interface Post {
  id: number
  title: string
  body: string
}

interface PostItemProps {
  post: Post
}

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className='post'>
      <div className='postContent'>
        <strong>{post.id + '. ' + post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className='postButtons'>
        <button>Удалить</button>
      </div>
    </div>
  )
}
