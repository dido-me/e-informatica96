'use client'
import { HitCustom } from './HitCustom.component'
import algoliasearch from 'algoliasearch/lite'
import { HiOutlineSearch } from 'react-icons/hi'
import {
  Configure,
  InstantSearch,
  SearchBox as SearchBoxAlgolia
} from 'react-instantsearch-hooks-web'
import { SearchBoxClassNames } from 'react-instantsearch-hooks-web/dist/es/ui/SearchBox'
import { useEffect, useState } from 'react'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ''
)

const searchBoxAlgoliaCustomClassNames: Partial<SearchBoxClassNames> = {
  root: 'w-full ',
  form: 'w-full flex  relative',
  input: 'w-full text-black input rounded-r-none bg-[#F6F7F8]',
  submit: 'btn bg-inf-secondary  rounded-l-none',
  loadingIndicator: 'absolute top-0 left-0',
  reset: 'hidden'
}

const searchIcon = () => <HiOutlineSearch size={25} className='text-white' />

export function SearchBox () {
  const [isFocused, setFocused] = useState(false)
  const [isHovering, setHovering] = useState(false)
  const [isLoaded, setLoaded] = useState(true)

  const shouldShowHits = isFocused || isHovering

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(false)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  return isLoaded
    ? (
      <div className='w-full h-10 rounded-md animate-pulse bg-slate-700 ' />
      )
    : (
      <div className='relative'>
        <InstantSearch
          searchClient={searchClient}
          indexName='wp_informatica96posts_product'
        >
          <Configure hitsPerPage={5} />
          <SearchBoxAlgolia
            classNames={searchBoxAlgoliaCustomClassNames}
            submitIconComponent={searchIcon}
            placeholder='Buscar en la tienda ...'
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          {shouldShowHits && (
            <HitCustom
              className='absolute w-full px-4 py-2 mt-2 rounded-xl bg-[#F6F7F8] dark:bg-inf-secondary peer-focus:visible '
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onClick={() => {
                setFocused(false)
                setHovering(false)
              }}
            />
          )}
        </InstantSearch>
      </div>
      )
}
