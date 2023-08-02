'use client'

import { TagsModel } from '@src/models/tag'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { ChangeEvent, useCallback } from 'react'

export function ListTags ({ tags }: { tags: TagsModel[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value === 'all') {
      router.push(pathname + '?' + createQueryString('tag', 'all'))
    } else {
      router.push(pathname + '?' + createQueryString('tag', value))
    }
  }

  return (
    <aside className='text-white'>
      <h1 className='p-0 m-0'>Marcas</h1>
      <div className='after:bg-white before:bg-white divider' />
      <ul className='flex flex-col gap-4 pl-5 text-white'>
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
                value={tag.slug}
                name='brandsProducts'
                onChange={handleChange}
                checked={searchParams.get('tag') === tag.slug}
              />
              <label htmlFor={tag.slug}>{tag.name}</label>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
