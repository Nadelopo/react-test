import type { AxiosResponse } from 'axios'
import { api } from '../..'

export type Painting = {
  authorId: number
  created: string
  id: number
  imageUrl: string
  locationId: number
  name: string
}

type GetPaintingsParams = {
  search?: string
  page?: number
  authorId?: number
}

export const getPaintings = (params?: GetPaintingsParams): Promise<AxiosResponse<Painting[]>> => {
  return api.get('paintings', {
    params: {
      _q: params?.search,
      _page: params?.page,
      authorId: params?.authorId
    }
  })
}
