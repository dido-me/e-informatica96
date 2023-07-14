'use client'

import { Hit } from '@src/models/hit'
import Link from 'next/link'
import { HtmlHTMLAttributes } from 'react'
import { Highlight, useHits } from 'react-instantsearch-hooks-web'

export function HitCustom (props: HtmlHTMLAttributes<HTMLUListElement>) {
  const { hits } = useHits<Hit>()
  const formartCategorys = (arr: string[]) => arr.join(', ')
  const extractSlugProduct = (permalink: string) => {
    const url = new URL(permalink)
    const pathSegments = url.pathname.split('/')
    const productSlug = pathSegments[pathSegments.length - 2]
    return productSlug
  }

  return (
    <ul {...props}>
      {hits.length > 0
        ? (
            hits.map((hit: Hit) => (
              <li key={hit.objectID}>
                <Link
                  href={`/producto/${extractSlugProduct(hit.permalink)}`}
                  className='flex flex-col gap-1 py-4 border-b-2 border-white last:border-b-0'
                >
                  <Highlight attribute='post_title' hit={hit} className='text-xl' />
                  <span className='text-sm opacity-60'>
                    {`Categoría(s): ${formartCategorys(
                  hit.taxonomies?.product_cat
                )}`}
                  </span>
                </Link>
              </li>
            ))
          )
        : (
          <li>
            <span>No se encontraron resultados 🙁</span>
          </li>
          )}
    </ul>
  )
}
