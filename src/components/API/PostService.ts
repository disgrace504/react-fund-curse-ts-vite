import axios from 'axios'

export const getPosts = async (postsUrl: string) => {
  try {
    const response = await axios.get(postsUrl)
    return response.data
  } catch (error) {
    console.log('Ошибка ответа сервера: ', error)
  }
}
