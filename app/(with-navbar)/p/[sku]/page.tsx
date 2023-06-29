import { getProductBySKU } from '@src/services'
import { redirect } from 'next/navigation'

type Props = {
    params: { sku: string }
  }

async function ProductBySKU ({ params }: Props) {
  const product = await getProductBySKU({ sku: params.sku })

  if (!product) return redirect('/404')

  redirect(`/producto/${product.slug}`)
}

export default ProductBySKU
