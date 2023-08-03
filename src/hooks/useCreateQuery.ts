import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function useCreateQuery () {
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())

      if (name === 'page') {
        params.set(name, value)
        return params.toString()
      }
      params.delete('page')
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  return { createQueryString, searchParams }
}
