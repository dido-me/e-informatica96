'use client'

import { useCreateQuery } from '@src/hooks'
import { TagsModel } from '@src/models/tag'
import { useRouter, usePathname } from 'next/navigation'
import { ChangeEvent } from 'react'

export function ListTags ({ tags }: { tags: TagsModel[] }) {
  const router = useRouter()
  const pathname = usePathname()

  const { createQueryString, searchParams } = useCreateQuery()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value === 'all') {
      router.push(pathname + '?' + createQueryString('tag', 'all'))
    } else {
      router.push(pathname + '?' + createQueryString('tag', value))
    }
  }

  return (
    <aside className='hidden dark:text-white text-inf-primary xl:block'>
      <h1 className='p-0 m-0'>Marcas</h1>
      <div className='after:bg-inf-primary before:bg-inf-primary dark:after:bg-white dark:before:bg-white divider' />
      <ul className='flex flex-col gap-4 pl-5 '>
        <li className='flex gap-4'>
          <input
            type='radio'
            id='all'
            value='all'
            name='brandsProducts'
            onChange={handleChange}
            checked={searchParams.get('tag') === null || searchParams.get('tag') === 'all'}
          />
          <label htmlFor='all'>Todo</label>
        </li>
        {tags.map((tag) => {
          if (tag.id === 364) return null
          return (
            <li key={tag.id} className='flex gap-4'>
              <input
                type='radio'
                id={tag.slug}
                value={tag.id.toString()}
                name='brandsProducts'
                onChange={handleChange}
                checked={searchParams.get('tag') === tag.id.toString()}
              />
              <label htmlFor={tag.slug}>{tag.name}</label>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
