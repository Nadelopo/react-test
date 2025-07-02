import type { Author } from '@/api/services/authors'
import { useQuery } from '@tanstack/react-query'
import { getAuthors } from '@/api/services/authors'
import { withInitialData } from '@/utils/queries'

export const useAuthors = () => {
  return useQuery({
    queryKey: ['authors'],
    queryFn: getAuthors,
    ...withInitialData<Author[]>([]),
    select: response => response.data,
    staleTime: 60 * 1000 * 60,
    gcTime: 60 * 1000 * 60
  })
}
