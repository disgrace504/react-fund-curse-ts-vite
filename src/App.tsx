import cls from './App.module.scss'
import { memo, useCallback, useEffect, useState } from 'react'
import { PostList } from './components/UI/PostList/PostList'
import { CreatePostForm } from './components/UI/CreatePostForm/CreatePostForm'
import { IPost } from './components/UI/PostItem/PostItem'
import { PostsFilter } from './components/UI/PostsFilter/PostsFilter'
import { MyModal } from './components/UI/modal/MyModal'
import { MyButton } from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'
import { getPosts } from './components/API/PostService'
import { Loader } from './components/UI/Loader/Loader'
const postsUrl = import.meta.env.VITE_POSTS_URL

export const App = memo(() => {
  const [posts, setPosts] = useState<IPost[]>([])

  const [filter, setFilter] = useState({ sortBy: '', searchQuery: '' })
  const [modalVisible, setModalVisible] = useState(false)
  const [isPostLoading, setIsPostLoading] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sortBy, filter.searchQuery)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsPostLoading(true)
      const data = await getPosts(postsUrl)
      setPosts(data)
      setIsPostLoading(false)
    }
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
        {isPostLoading ? (
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
