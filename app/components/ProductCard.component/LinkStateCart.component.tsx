'use client'

import { useCart } from '@src/hooks'
import { Product } from '@src/models/product'
import { hasProduct } from '@src/utilities'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function LinkStateCart ({ product }: { product: Product }) {
  const [isClient, setIsClient] = useState(false)
  const { cart } = useCart()
  const hasAddProduct = hasProduct({ cart, product })

  useEffect(() => {
    setIsClient(hasAddProduct)
  }, [hasAddProduct])

  const CLASS_ADD =
    'border-[0.1rem] dark:border-white border-inf-primary py-2 w-10/12 rounded-md dark:text-white text-inf-primary text-center hover:bg-inf-quaternary hover:text-inf-primary '

  const CLASS_REMOVE =
    'border-[0.1rem] dark:border-white border-inf-primary py-2 w-10/12 rounded-md dark:text-white text-inf-primary text-center bg-red-500 hover:bg-red-600 hover:text-white '

  return (
    <Link
      href={`/producto/${product.slug}`}
      className={isClient ? CLASS_REMOVE : CLASS_ADD}
    >
      {isClient ? 'Quitar del carrito' : 'Agregar al carrito'}
    </Link>
  )
}
