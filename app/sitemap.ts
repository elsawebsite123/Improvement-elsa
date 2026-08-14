import type { MetadataRoute } from 'next'

const baseUrl = 'https://elsacoreindustry.pk'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/products/elfer`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/products/fertelsa`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/products/vagoric`, changeFrequency: 'weekly', priority: 0.9 },
  ]
}
