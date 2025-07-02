import type { AxiosResponse } from 'axios'
import { api } from '..'

export type Paintings = {
  authorId: number
  created: string
  id: number
  imageUrl: string
  locationId: number
  name: string
}

export const getPaintings = (): Promise<AxiosResponse<Paintings[]>> => {
  return api.get('paintings')
}
