import axios from 'axios'

const API_URL = import.meta.env.VITE_API

if (!API_URL) {
  throw new Error('api url not found')
}

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
})
