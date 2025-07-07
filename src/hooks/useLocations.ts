import type { Location } from '@/api/services/locations'
import { useQuery } from '@tanstack/react-query'
import { getLocations } from '@/api/services/locations'
import { withInitialData } from '@/utils/queries'

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
    ...withInitialData<{ data: Location[] }>({ data: [] }),
    select: response => response.data,
    staleTime: 60 * 1000 * 60,
    gcTime: 60 * 1000 * 60
  })
}
