import { getProductsDestacado, getProductsNews, getProductsOferta } from '@src/services'
import { ListHorizontalProducts } from './ListHorizontalProducts.component'
import Link from 'next/link'

export async function GroupOfertasProducts () {
  const { products } = await getProductsOferta()

  return (
    <section className='flex flex-col w-11/12 gap-6 m-auto'>
      <div className='flex items-center justify-between gap-4 dark:text-white text-inf-primary '>
        <h1 className='p-0 m-0 text-xl xl:text-4xl '>Super Ofertas</h1>
        <div className='grow'>
          <span className='block w-full border-[0.1rem] dark:border-white border-inf-primary' />
        </div>
        <Link
          href='/categoria/285'
          className='px-4 py-1 text-xs border-2 xl:text-lg dark:border-white border-inf-primary rounded-xl'
        >
          ver mas
        </Link>
      </div>
      <ListHorizontalProducts products={products} />
    </section>
  )
}

export async function GroupDestacadosProducts () {
  const { products } = await getProductsDestacado()
  return (
    <section className='flex flex-col w-11/12 gap-6 m-auto mt-10'>
      <div className='flex items-center justify-between gap-4 dark:text-white text-inf-primary '>
        <h1 className='p-0 m-0 text-xl xl:text-4xl '>Productos Destacados</h1>
        <div className='grow'>
          <span className='block w-full border-[0.1rem] dark:border-white border-inf-primary' />
        </div>
        <Link
          href='/categoria/285'
          className='px-4 py-1 text-xs border-2 xl:text-lg dark:border-white border-inf-primary rounded-xl'
        >
          ver mas
        </Link>
      </div>
      <ListHorizontalProducts products={products} />
    </section>
  )
}

export async function GroupNewsProducts () {
  const { products } = await getProductsNews()
  return (
    <section className='flex flex-col w-11/12 gap-6 m-auto mt-10'>
      <div className='flex items-center justify-between gap-4 dark:text-white text-inf-primary '>
        <h1 className='p-0 m-0 text-xl xl:text-4xl '>Productos recién lanzados</h1>
        <div className='grow'>
          <span className='block w-full border-[0.1rem] dark:border-white border-inf-primary' />
        </div>
        <Link
          href='/categoria/285'
          className='px-4 py-1 text-xs border-2 xl:text-lg dark:border-white border-inf-primary rounded-xl'
        >
          ver mas
        </Link>
      </div>
      <ListHorizontalProducts products={products} />
    </section>
  )
}
