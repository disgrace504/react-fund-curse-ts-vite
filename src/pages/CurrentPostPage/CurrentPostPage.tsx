import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCommentsById, getPostsById } from '../../API/PostService'
import { useFetching } from '../../hooks/useFetching'
import { Loader } from '../../components/UI/Loader/Loader'
import cls from './CurrentPostPage.module.scss'

const currenPostUrl = import.meta.env.VITE_CURRENT_POST_URL
import { MyButton } from './../../components/UI/button/MyButton'
import { IPost } from '../../components/UI/PostItem/PostItem'

interface IComment {
  id: number
  email: string
  body: string
}

export const CurrentPostPage = () => {
  const { id } = useParams()
  const [currentPost, setCurrentPost] = useState<IPost | null>(null)
  const [comments, setComments] = useState<IComment[]>([])

  const [fetchPostById, isPostLoading] = useFetching(async (id) => {
    const response = await getPostsById(currenPostUrl, id)
    setCurrentPost(response.data)
  })

  const [fetchCommentsById, isCommentsLoading] = useFetching(async (id) => {
    const response = await getCommentsById(currenPostUrl, id)
    setComments(response.data)
  })

  const navigate = useNavigate()

  useEffect(() => {
    fetchPostById(id)
    fetchCommentsById(id)
  }, [])

  const title = currentPost?.title ?? ''
  const body = currentPost?.body ?? ''

  return (
    <div className={cls.pageContent}>
      <h1 className={cls.postPageTitle}>{`Вы открыли страницу поста ${id}.`}</h1>
      {isPostLoading ? (
        <div className={cls.postLoader}>
          <Loader />
        </div>
      ) : (
        <div className={cls.postContent}>
          <p className={cls.postTitle}>{`${id}. ${title}`}</p>
          <div className={cls.postDescription}>{body}</div>
        </div>
      )}

      {isCommentsLoading ? (
        <div className={cls.commentsLoader}>
          <Loader />
        </div>
      ) : (
        <>
          <div className={cls.commentsList}>
            {comments.map((comment) => (
              <div className={cls.commentContent} key={comment.id}>
                <h5 className={cls.commentEmail}>{comment.email}</h5>
                <div className={cls.commentDescription}>{comment.body}</div>
              </div>
            ))}
          </div>
          <MyButton className={cls.backHomeButton} onClick={() => navigate(`/posts`)}>
            Назад
          </MyButton>
        </>
      )}
    </div>
  )
}
