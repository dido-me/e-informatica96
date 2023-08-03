import { ParentCategory } from '@src/models/category'
import { TagsModel } from '@src/models/tag'
import {
  getCategoriesByID,
  getProductsByCategory,
  getTags
} from '@src/services'
import Link from 'next/link'
import { ContentProducts, ListTags } from '../components'
import { redirect } from 'next/navigation'

type Props = {
  params: { id: string }
  searchParams: {
    childrenCategory: string | undefined
    tag: string | undefined
    page: string | undefined
  }
}

export default async function CategoriasById ({ params, searchParams }: Props) {
  const { id } = params

  const { childrenCategory, tag, page } = searchParams

  const { products, pages, totalProducts } = await getProductsByCategory({
    category: id,
    childrenCategory,
    tag,
    page: page || '1'
  })

  const categoria: ParentCategory = await getCategoriesByID(id)
  if (categoria.id === null || categoria.id === undefined) {
    return (
      redirect('/404')
    )
  }

  const tags: TagsModel[] = await getTags()

  const CLASS_NO_ACTIVE =
    'px-4 py-1 border-[0.1rem] rounded-md border-inf-primary text-inf-primary hover:bg-inf-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-inf-primary'

  const CLASS_ACTIVE =
    'px-4 py-1 border-[0.1rem] rounded-md border-white bg-white text-inf-primary'

  return (
    <main className='w-11/12 m-auto'>
      <div className='text-sm breadcrumbs'>
        <ul>
          <li>
            <Link href='/'>Inicio</Link>
          </li>
          <li>
            <Link href={`/categoria/${categoria.id}`}>{categoria.name}</Link>
          </li>
          {childrenCategory && (
            <li>
              <Link
                href={`/categoria/${id}?childrenCategory=${childrenCategory}&tag=all`}
              >
                {
                  categoria.childrens.find(
                    (child) => child.id.toString() === childrenCategory
                  )?.name
                }
              </Link>
            </li>
          )}
        </ul>
      </div>

      <section className='flex flex-wrap gap-6 mt-8'>
        {categoria.childrens.map((child) => (
          <Link
            href={`/categoria/${id}?childrenCategory=${child.id}`}
            key={child.id}
            className={
              childrenCategory === child.id.toString()
                ? CLASS_ACTIVE
                : CLASS_NO_ACTIVE
            }
          >
            {child.name}
          </Link>
        ))}
      </section>

      <section className='flex gap-10 mt-8'>
        <ListTags tags={tags} />
        <ContentProducts products={products} pages={pages} totalProducts={totalProducts} />
      </section>
    </main>
  )
}
