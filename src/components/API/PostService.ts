import axios from 'axios'

export const getPosts = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}
