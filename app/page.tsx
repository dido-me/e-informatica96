import {
  AsideFilters,
  ButtonFilters,
  Carousel,
  GroupCollapse,
  Pagination,
  ProductCard
} from '@app/components'
import { ParentCategory } from '@src/models/category'
import { Product } from '@src/models/product'
import { getCategorys, getProducts } from '@src/services'

export default async function Home ({
  searchParams: { p = '1' }
}: {
  searchParams: { p: string }
}) {
  const categories: ParentCategory[] = await getCategorys()
  const { products, pages } = await getProducts({ page: p })

  return (
    <>
      <AsideFilters categories={categories} />
      <main className='relative'>
        <Carousel />
        <section className='flex flex-col xl:flex-row'>
          <div className=' hidden xl:block w-[28rem] h-[85vh] sticky top-[15vh] pt-4   dark:bg-[#0C1F34] dark:shadow-[#1a2332] bg-zinc-100 rounded-tr-lg'>
            <GroupCollapse categories={categories} />
          </div>
          <div className='block sticky top-16 z-10 xl:hidden dark:bg-[#0C1F34] dark:shadow-[#1a2332] bg-zinc-100 px-10 py-6'>
            <ButtonFilters />
          </div>
          <div className='w-full  px-8 pt-8 xl:pt-0  pb-24 dark:bg-[#0A101A]  '>
            <div className='w-full grid grid-cols-auto-fill-20rem gap-4'>
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
