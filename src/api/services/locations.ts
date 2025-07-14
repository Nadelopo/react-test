import type { ApiResponse } from './api.types'
import { api } from '..'

export type Location = {
  id: number
  location: string
}

export const getLocations = (): ApiResponse<Location[]> => {
  return api.get('locations')
}
