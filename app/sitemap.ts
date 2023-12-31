import { getProducts } from '@src/services'
import { MetadataRoute } from 'next'

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {
  const { pages } = await getProducts({ page: '1' })

  const allUrls: MetadataRoute.Sitemap = []

  for (let i = 1; i <= pages; i++) {
    const { products } = await getProducts({ page: i.toString() })

    for (const product of products) {
      allUrls.push({
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/producto/${product.slug}`,
        lastModified: new Date(product.date_modified).toISOString()
      })
    }
  }

  return [
    {
      url: process.env.NEXT_PUBLIC_DOMAIN || '',
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/terminos-y-condiciones`,
      lastModified: new Date()
    },
    ...allUrls
  ]
}
