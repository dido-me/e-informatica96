import {
  Carousel,
  Pagination,
  ProductCard
} from '@app/components'
import { Product } from '@src/models/product'
import { getProducts } from '@src/services'
import { redirect } from 'next/navigation'

export const metadata = {
  title:
    'Ecommerce | Informatica 96 | Alquiler y Venta de Server Switch Transceiver Computadora | Importador y Distribuidor'
}

export default async function Home ({
  searchParams: { p = '1' }
}: {
  searchParams: { p: string }
}) {
  const { products, pages } = await getProducts({ page: p })

  if (products.length === 0) redirect('/')

  return (
    <>
      <main className='relative'>
        <Carousel />
        <section className='flex flex-col xl:flex-row'>
          <div className='w-full  px-8 pt-8 xl:pt-0  pb-36 dark:bg-[#0A101A]  '>
            <div className='grid w-full gap-4 grid-cols-auto-fill-20rem'>
              {products.map((product: Product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
            <Pagination pages={pages} p={p} />
          </div>
        </section>
      </main>
    </>
  )
}
