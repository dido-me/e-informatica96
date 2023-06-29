import { getProductById } from '@src/services'
import { ProductCard } from '@app/components'

async function RelatedProductCard ({ idProduct }: {idProduct: number}) {
  const product = await getProductById({ idProduct })
  return (
    <ProductCard product={product} />
  )
}

export default RelatedProductCard
