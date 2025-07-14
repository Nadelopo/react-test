import type { Author } from '@/api/services/authors'
import type { Location } from '@/api/services/locations'
import type { Painting } from '@/api/services/paintings'
import type { CardProps } from '@/components/ui/Card/Card'
import { API_URL } from '@/constants/api.constants.'

export const mapPaintings = (
  paintings: Painting[],
  authors: Author[],
  locations: Location[]
): (CardProps & { id: number })[] => {
  return paintings.map((p) => {
    const author = authors.find(a => p.authorId === a.id)?.name ?? ''
    const location = locations.find(a => p.locationId === a.id)?.location ?? ''

    return {
      id: p.id,
      author,
      location,
      name: p.name,
      url: API_URL + p.imageUrl,
      created: p.created
    }
  })
}
