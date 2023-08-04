import { Product, ProductModelWithQuantity } from '@src/models/product'

type Props = {
  cart: ProductModelWithQuantity[] | Product[]
  product: Product | ProductModelWithQuantity
}

export const hasProduct = ({ product, cart }: Props) => {
  return cart.some((item) => item.id === product.id)
}
