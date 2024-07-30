import cls from './App.module.scss'
import { memo, useCallback, useEffect, useState } from 'react'
import { PostList } from './components/UI/PostList/PostList'
import { CreatePostForm } from './components/UI/CreatePostForm/CreatePostForm'
import { IPost } from './components/UI/PostItem/PostItem'
import { PostsFilter } from './components/UI/PostsFilter/PostsFilter'
import { MyModal } from './components/UI/modal/MyModal'
import { MyButton } from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'

import { Loader } from './components/UI/Loader/Loader'
import { getPosts } from './components/API/PostService'
import { useFetching } from './hooks/useFetching'

const postsUrl = import.meta.env.VITE_POSTS_URL

export const App = memo(() => {
  const [posts, setPosts] = useState<IPost[]>([])

  const [filter, setFilter] = useState({ sortBy: '', searchQuery: '' })
  const [modalVisible, setModalVisible] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sortBy, filter.searchQuery)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const data = await getPosts(postsUrl)
    setPosts(data)
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const onCreateNewPost = useCallback(
    (newPost: IPost) => {
      setPosts([...posts, { ...newPost, id: posts.length }])
      setModalVisible(false)
    },
    [posts]
  )

  const removePost = useCallback(
    (post: IPost) => {
      setPosts(posts.filter((postItem) => postItem.id !== post.id))
    },
    [posts]
  )

  return (
    <>
      <div className={cls.App}>
        <MyButton buttonClasses={cls.createPostButton} onClick={() => setModalVisible(true)}>
          Создать пост
        </MyButton>
        <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
          <CreatePostForm onCreateNewPost={onCreateNewPost} />
        </MyModal>
        <PostsFilter filter={filter} setFilter={setFilter} />
        {postError && <h1>{`Произошла ошибка ${postError}`}</h1>}
        {isPostsLoading ? (
          <div className={cls.postLoader}>
            <Loader />
          </div>
        ) : (
          <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={'Список постов'} />
        )}
      </div>
    </>
  )
})
