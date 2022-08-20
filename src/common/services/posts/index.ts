import useSWR from 'swr'
import Api from 'common/api'

const POSTS_URI = '/posts'

export const servicePosts = {
  getAllPosts () {
    const { data, error } = useSWR(POSTS_URI, async url => {
      const response = await Api.get(url)
      return response.data
    })
    return { data, error }
  },
}
