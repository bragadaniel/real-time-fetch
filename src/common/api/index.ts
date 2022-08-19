import axios from 'axios'
import { BASE_URL } from 'common/constants'

const api = axios.create({
  baseURL: BASE_URL,
})

export default api
