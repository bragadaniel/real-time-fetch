import Api from 'common/api'

export const servicePosts = {
  async getAllPosts () {
    const { data } = await Api.get('/posts')
    return data
  },
}
