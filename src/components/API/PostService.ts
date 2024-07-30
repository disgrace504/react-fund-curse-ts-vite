import axios from 'axios'

export const getPosts = async (url: string, limit = 10, page = 1) => {
  const response = await axios.get(url, {
    params: { _limit: limit, _page: page },
  })
  return response
}
