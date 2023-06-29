import { useEffect, useState } from 'react'
import { Observable } from 'rxjs'

export const useOpenComponent = ({ subcribe }:{subcribe: Observable<boolean>}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const subscription = subcribe.subscribe(() => {
      setIsOpen(isOpen => !isOpen)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [subcribe])

  return isOpen
}
