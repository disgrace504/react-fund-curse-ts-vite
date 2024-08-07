import { memo, useCallback, useEffect, useRef, useState } from 'react'
import cls from './Posts.module.scss'
import { usePosts } from '../../hooks/usePosts'
import { IPost } from '../../components/UI/PostItem/PostItem'
import { getPageCount, getPagesArray } from '../../utils/pages'
import { getPosts } from '../../API/PostService'
import { useFetching } from '../../hooks/useFetching'
import { MyButton } from '../../components/UI/button/MyButton'
import { MyModal } from '../../components/UI/modal/MyModal'
import { CreatePostForm } from '../../components/UI/CreatePostForm/CreatePostForm'
import { PostsFilter } from '../../components/UI/PostsFilter/PostsFilter'
import { Loader } from '../../components/UI/Loader/Loader'
import { PostList } from '../../components/UI/PostList/PostList'
import { Pagination } from '../../components/UI/pagination/Pagination'
import { useObserver } from '../../hooks/useObserver'

const postsUrl = import.meta.env.VITE_POSTS_URL
import { MySelect } from './../../components/UI/select/MySelect'

export const Posts = memo(() => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [filter, setFilter] = useState({ sortBy: '', searchQuery: '' })
  const [modalVisible, setModalVisible] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [postsLimit, setPostsLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const observedElement = useRef<HTMLDivElement | null>(null)

  const sortedAndSearchedPosts = usePosts(posts, filter.sortBy, filter.searchQuery)

  const pagesArray = getPagesArray(totalPages)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (postsLimit: number, page: number) => {
    const response = await getPosts(postsUrl, postsLimit, page)
    setPosts([...posts, ...response.data])

    const totalPostsCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalPostsCount, postsLimit))
  })

  useObserver({
    ref: observedElement,
    canLoad: currentPage < totalPages,
    isLoading: isPostsLoading,
    callback: () => {
      setCurrentPage(currentPage + 1)
    },
  })

  useEffect(() => {
    fetchPosts(postsLimit, currentPage)
  }, [currentPage, postsLimit])

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
      fetchPosts(postsLimit, pageNumber)
    },
    [fetchPosts, postsLimit]
  )

  return (
    <>
      <MyButton className={cls.createPostButton} onClick={() => setModalVisible(true)}>
        Создать пост
      </MyButton>
      <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <CreatePostForm onCreateNewPost={onCreateNewPost} />
      </MyModal>
      <PostsFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={String(postsLimit)}
        onChange={(limit) => setPostsLimit(+limit)}
        defaultValue='Кол-во элементов на странице'
        options={[
          { value: '5', title: '5' },
          { value: '10', title: '10' },
          { value: '25', title: '25' },
          { value: `-1`, title: 'Показать все' },
        ]}></MySelect>
      {postError && <h1>{`Произошла ошибка ${postError}`}</h1>}

      <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={'Список постов'} />

      {!isPostsLoading && <div ref={observedElement} className={cls.observedElement}></div>}

      {isPostsLoading && (
        <div className={cls.postLoader}>
          <Loader />
        </div>
      )}

      {!isPostsLoading && <Pagination totalPages={pagesArray} currentPage={currentPage} onChangePage={onChangePage} />}
    </>
  )
})
