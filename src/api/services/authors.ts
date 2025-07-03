import type { AxiosResponse } from 'axios'
import { api } from '..'

export type Author = {
  id: number
  name: string
}

export const getAuthors = (): Promise<AxiosResponse<Author[]>> => {
  return api.get('authors')
}
