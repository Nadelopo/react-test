import type { Author } from '@/api/services/authors'
import type { Location } from '@/api/services/locations'
import type { Painting } from '@/api/services/paintings'
import type { CardProps } from '@/ui/Card/Card'

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
      url: import.meta.env.VITE_API + p.imageUrl,
      created: p.created
    }
  })
}
