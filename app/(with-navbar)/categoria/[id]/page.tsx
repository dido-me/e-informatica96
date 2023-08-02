import { ParentCategory } from '@src/models/category'
import { TagsModel } from '@src/models/tag'
import { getCategoriesByID, getTags } from '@src/services'
import Link from 'next/link'
import { ListTags } from '../components'

type Props = {
  params: { id: string }
  searchParams: {
    childrenCategory: string | undefined
    tag: string | undefined
  }
}

export default async function CategoriasById ({ params, searchParams }: Props) {
  const { id } = params

  const { childrenCategory, tag } = searchParams

  const categoria: ParentCategory = await getCategoriesByID(id)

  const tags: TagsModel[] = await getTags()

  const CLASS_NO_ACTIVE = 'px-4 py-1 border-[0.1rem] rounded-md border-inf-primary text-inf-primary hover:bg-inf-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-inf-primary'

  const CLASS_ACTIVE = 'px-4 py-1 border-[0.1rem] rounded-md border-white bg-white text-inf-primary'

  return (
    <main className='w-11/12 m-auto'>
      <div className='text-sm breadcrumbs'>
        <ul>
          <li>
            <Link href='/'>Inicio</Link>
          </li>
          <li>
            <a>{categoria.name}</a>
          </li>
          <li>Todo</li>
        </ul>
      </div>

      <section className='flex flex-wrap gap-6 mt-8'>
        {categoria.childrens.map((child) => (
          <Link
            href={`/categoria/${id}?childrenCategory=${child.id}&tag=all`}
            key={child.id}
            className={childrenCategory === child.id.toString() ? CLASS_ACTIVE : CLASS_NO_ACTIVE}
          >
            {child.name}
          </Link>
        ))}
      </section>

      <section className='flex gap-6 mt-8'>
        <ListTags tags={tags} />
        <main>
          <h1>{tag}</h1>
          <h1>{childrenCategory}</h1>
        </main>
      </section>
    </main>
  )
}
