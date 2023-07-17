import { sharingStateBoxSearch } from '@src/services'
import { useState, useEffect, useRef } from 'react'
import { Subscription } from 'rxjs'

export const useOpenBox = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const subscriptionBoxRef = useRef<Subscription | null>(null)

  useEffect(() => {
    subscriptionBoxRef.current = sharingStateBoxSearch
      .getSubject()
      .subscribe(() => {
        setIsOpen((isOpen) => !isOpen)
      })

    return () => {
      if (subscriptionBoxRef.current) {
        subscriptionBoxRef.current.unsubscribe()
      }
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
