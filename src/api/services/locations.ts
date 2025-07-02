import type { AxiosResponse } from 'axios'
import { api } from '..'

export type Location = {
  id: number
  location: string
}

export const getLocations = (): Promise<AxiosResponse<Location[]>> => {
  return api.get('locations')
}
