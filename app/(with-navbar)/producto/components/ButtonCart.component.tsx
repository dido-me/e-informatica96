'use client'

import { useCart } from '@src/hooks'
import { Product, ProductModelWithQuantity } from '@src/models/product'
import { hasProduct } from '@src/utilities'

export default function ButtonCart ({
  product
}: {
  product: Product | ProductModelWithQuantity
}) {
  const { cart, addProduct, removeProduct } = useCart()

  const hasAddProduct = hasProduct({ cart, product })
  return (
    <button
      className={hasAddProduct ? 'btn btn-error' : 'btn btn-primary'}
      onClick={() =>
        hasAddProduct ? removeProduct(product) : addProduct(product)}
    >
      {hasAddProduct ? 'Quitar del carrito' : 'agregar al carrito'}
    </button>
  )
}
