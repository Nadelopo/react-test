import type { ApiResponse } from './api.types'
import { api } from '..'

export type Author = {
  id: number
  name: string
}

export const getAuthors = (): ApiResponse<Author[]> => {
  return api.get('authors')
}
