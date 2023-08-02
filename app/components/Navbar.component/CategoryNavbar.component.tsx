import { ParentCategory } from '@src/models/category'
import Link from 'next/link'

export function CategoryNavbar ({ categories }: {categories: ParentCategory[]}) {
  return (
    <ul className='flex-wrap justify-between hidden w-full py-4 dark:text-white text-inf-primary xl:flex'>
      {categories.map((category) => {
        if (category.id === 15) return null
        return (
          <li
            key={category.id}
            className='relative flex flex-col justify-center border-r-2 border-white grow last:border-r-0 '
          >
            <Link href={`/categoria/${category.id}`} className='btn btn-ghost hover:bg-inf-tertiary peer'>
              {category.name}
            </Link>
            <div className='z-10 hidden hover:block peer-hover:block'>
              <ul className='absolute  w-full py-4 bg-white dark:bg-[#001f3d] rounded-b-lg shadow-lg'>
                {category.childrens.map((subCategory) => (
                  <li key={subCategory.id} className='px-4 py-2 '>
                    <Link href={`/categoria/${category.id}?childrenCategory=${subCategory.id}`} className='block w-full hover:text-inf-quaternary'>{subCategory.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
