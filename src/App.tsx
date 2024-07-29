import cls from './App.module.scss'
import { useCallback, useMemo, useState } from 'react'
import { PostList } from './components/UI/PostList/PostList'
import { CreatePostForm } from './components/UI/CreatePostForm/CreatePostForm'
import { IPost } from './components/UI/PostItem/PostItem'
import { PostsFilter } from './components/UI/PostsFilter/PostsFilter'
import { MyModal } from './components/UI/modal/MyModal'
import { MyButton } from './components/UI/button/MyButton'

type SortByKey = keyof IPost

export const App = () => {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 0, title: 'JavaScript 1', body: 'Description' },
    { id: 1, title: 'JavaScript 2', body: 'Description' },
    { id: 2, title: 'JavaScript 3', body: 'Description' },
    { id: 3, title: 'JavaScript 4', body: 'Description' },
  ])

  const [filter, setFilter] = useState({ sortBy: '', searchQuery: '' })
  const [modalVisible, setModalVisible] = useState(false)

  const sortedPosts = useMemo(() => {
    const sortBy = filter.sortBy as SortByKey
    return sortBy
      ? [...posts].sort((a, b) => {
          const aValue = a[sortBy] as string
          const bValue = b[sortBy] as string
          return aValue.localeCompare(bValue)
        })
      : posts
  }, [filter.sortBy, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.searchQuery.toLowerCase()))
  }, [sortedPosts, filter.searchQuery])

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

        <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={'Список постов'} />
      </div>
    </>
  )
}
