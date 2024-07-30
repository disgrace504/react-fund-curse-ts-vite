import cls from './PostList.module.scss'
import { IPost, PostItem } from '../PostItem/PostItem'
import { memo } from 'react'

interface IPostListProps {
  posts: IPost[]
  title: string
  removePost: (newPost: IPost) => void
}

export const PostList = memo(({ posts, title, removePost }: IPostListProps) => {
  return (
    <div>
      {posts.length !== 0 ? (
        <>
          <h1 className={cls.appTitle}>{title}</h1>
          {posts.map((post) => (
            <PostItem removePost={removePost} key={post.id} post={post} />
          ))}
        </>
      ) : (
        <h2 className={cls.postsNotFound}>Посты не найдены =(</h2>
      )}
    </div>
  )
})
