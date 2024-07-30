import cls from './App.module.scss'
import { memo, useCallback, useState } from 'react'
import { PostList } from './components/UI/PostList/PostList'
import { CreatePostForm } from './components/UI/CreatePostForm/CreatePostForm'
import { IPost } from './components/UI/PostItem/PostItem'
import { PostsFilter } from './components/UI/PostsFilter/PostsFilter'
import { MyModal } from './components/UI/modal/MyModal'
import { MyButton } from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'

export const App = memo(() => {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 0, title: 'JavaScript 1', body: 'Description' },
    { id: 1, title: 'JavaScript 2', body: 'Description' },
    { id: 2, title: 'JavaScript 3', body: 'Description' },
    { id: 3, title: 'JavaScript 4', body: 'Description' },
  ])

  const [filter, setFilter] = useState({ sortBy: '', searchQuery: '' })
  const [modalVisible, setModalVisible] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sortBy, filter.searchQuery)

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
})
