import { sharingStateBoxSearch } from '@src/services'
import { useState, useEffect } from 'react'

const subcribe = sharingStateBoxSearch.getSubject()
export const useOpenBox = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const subscription = subcribe.subscribe(() => {
      setIsOpen((isOpen) => !isOpen)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const openBoxSearch = () => {
    sharingStateBoxSearch.setSubject(true)
  }

  const closeBoxSearch = () => {
    sharingStateBoxSearch.setSubject(false)
  }

  return { isOpen, openBoxSearch, closeBoxSearch }
}
