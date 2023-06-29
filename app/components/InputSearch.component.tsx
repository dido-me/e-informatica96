'use client'

import algoliasearch from 'algoliasearch/lite'
import {
  Configure,
  Hits,
  InstantSearch,
  SearchBox
} from 'react-instantsearch-hooks-web'
import { BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react'
import Link from 'next/link'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ''
)

function Hit ({ hit }: any) {
  const url = new URL(hit.permalink)
  const pathSegments = url.pathname.split('/')
  const productSlug = pathSegments[pathSegments.length - 2]
  return (
    <Link href={`/producto/${productSlug}`}>
      <div className='p-4 border-b border-gray-200'>{hit.post_title}</div>
    </Link>
  )
}

function InputSearch () {
  const [isFocused, setFocused] = useState(false)
  const [isHovering, setHovering] = useState(false)

  const shouldShowHits = isFocused || isHovering
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName='wp_informatica96posts_product'
    >
      <div className='relative w-full '>
        <SearchBox
          placeholder='Encuentra lo que buscas'
          classNames={{
            root: 'w-full',
            form: 'flex join',
            reset: 'hidden',
            submit: 'btn join-item rounded-r-full',
            input: 'input input-bordered join-item w-full'
          }}
          submitIconComponent={() => <BiSearchAlt size={25} />}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {shouldShowHits && (
          <div
            className='absolute w-full '
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <Configure hitsPerPage={6} />
            <Hits hitComponent={Hit} className='bg-slate-100' />
          </div>
        )}
      </div>
    </InstantSearch>
  )
}

export default InputSearch
