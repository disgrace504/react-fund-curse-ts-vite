import { useMemo } from 'react'
import { IPost } from '../components/UI/PostItem/PostItem'

type SortByKey = keyof IPost

export const useSortedPosts = (posts: IPost[], sort: string) => {
  const sortedPosts = useMemo(() => {
    const sortBy = sort as SortByKey
    return sortBy
      ? [...posts].sort((a, b) => {
          const aValue = a[sortBy] as string
          const bValue = b[sortBy] as string
          return aValue.localeCompare(bValue)
        })
      : posts
  }, [sort, posts])

  return sortedPosts
}

export const usePosts = (posts: IPost[], sort: string, searchQuery: string) => {
  const sortedPosts = useSortedPosts(posts, sort)

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [sortedPosts, searchQuery])

  return sortedAndSearchedPosts
}
