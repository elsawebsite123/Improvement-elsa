import type { MetadataRoute } from 'next'

const siteUrl = 'https://www.elsacoreindustry.pk'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/products/elfer`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/products/fertelsa`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/products/vagoric`,
      lastModified: new Date(),
    },
  ]
}
