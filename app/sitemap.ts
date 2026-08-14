import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elsacoreindustry.pk'
  const routes = ['', '/products/elfer', '/products/fertelsa', '/products/vagoric']
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: 'monthly', priority: route ? 0.8 : 1 }))
}
