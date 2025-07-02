import type { Location } from '@/api/services/locations'
import { useQuery } from '@tanstack/react-query'
import { getLocations } from '@/api/services/locations'
import { withInitialData } from '@/utils/queries'

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
    ...withInitialData<Location[]>([]),
    select: response => response.data,
    staleTime: Infinity,
    gcTime: Infinity
  })
}
