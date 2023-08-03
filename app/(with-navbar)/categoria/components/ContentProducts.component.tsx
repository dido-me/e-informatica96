'use client'

import { ProductCard } from '@app/components'
import { useCreateQuery } from '@src/hooks'
import { Product as ProductModel } from '@src/models/product'
import { usePathname, useRouter } from 'next/navigation'

export function ContentProducts ({
  products,
  pages,
  totalProducts
}: {
  products: ProductModel[]
  pages: number
  totalProducts: number
}) {
  const router = useRouter()
  const pathname = usePathname()
  const { createQueryString, searchParams } = useCreateQuery()

  const page = searchParams.get('page') || '1'

  const HandleNext = () => {
    const nextPage = parseInt(page) + 1
    if (nextPage > pages) return
    router.push(pathname + '?' + createQueryString('page', nextPage.toString()))
  }

  const HandlePrev = () => {
    const prevPage = parseInt(page) - 1
    if (prevPage < 1) return
    router.push(pathname + '?' + createQueryString('page', prevPage.toString()))
  }

  if (products.length === 0) {
    return (
      <div className='grid place-items-center grow'>
        <h2 className='text-2xl font-bold text-center'>
          No hay productos para mostrar
        </h2>
      </div>
    )
  }

  return (
    <section className='grow'>
      <header className='flex items-center justify-between mb-5'>
        <div>
          <span>{`Hay ${totalProducts} productos`}</span>
        </div>
        <div className='join'>
          <button className='join-item btn' onClick={HandlePrev} disabled={parseInt(page) <= 1}>«</button>
          <button className='join-item btn'>Página {page}</button>
          <button className='join-item btn' onClick={HandleNext} disabled={parseInt(page) >= pages}>»</button>
        </div>
      </header>
      <main className='grid gap-2 grid-cols-auto-fill-20rem'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </section>
  )
}
