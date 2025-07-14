import type { ApiResponse } from '../api.types'
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
  limit?: number
  signal?: AbortSignal
}

export const getPaintings = (params?: GetPaintingsParams): ApiResponse<Painting[]> => {
  return api.get('paintings', {
    params: {
      _limit: params?.limit,
      _page: params?.page,
      q: params?.search,
      authorId: params?.authorId,
    },
    signal: params?.signal
  })
}
