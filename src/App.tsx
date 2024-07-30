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
import { getPageCount, getPagesArray } from './utils/pages'
import { Pagination } from './components/UI/pagination/Pagination'

const postsUrl = import.meta.env.VITE_POSTS_URL

export const App = memo(() => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [filter, setFilter] = useState({ sortBy: '', searchQuery: '' })
  const [modalVisible, setModalVisible] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [postsLimit, setPostsLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const sortedAndSearchedPosts = usePosts(posts, filter.sortBy, filter.searchQuery)

  const pagesArray = getPagesArray(totalPages)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (postsLimit, page) => {
    const response = await getPosts(postsUrl, (postsLimit = 10), page)
    setPosts(response.data)
    const totalPostsCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalPostsCount, postsLimit))
  })

  useEffect(() => {
    fetchPosts(postsLimit, currentPage)
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

  const onChangePage = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber)
      fetchPosts(pageNumber)
    },
    [fetchPosts]
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
        {!isPostsLoading && (
          <Pagination totalPages={pagesArray} currentPage={currentPage} onChangePage={onChangePage} />
        )}
      </div>
    </>
  )
})
