import axios from 'axios'
import { API_URL } from '@/constants/api.constants.'

if (!API_URL) {
  throw new Error('api url not found')
}

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
})
