import { sharingStateShoppingCartModal } from '@src/services'
import { useEffect, useState } from 'react'

const subcribe = sharingStateShoppingCartModal.getSubject()
export const useOpenShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const subscription = subcribe.subscribe(() => {
      setIsOpen((isOpen) => !isOpen)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const closeModal = () => {
    sharingStateShoppingCartModal.setSubject(false)
  }

  const openModal = () => {
    sharingStateShoppingCartModal.setSubject(true)
  }

  return { isOpen, closeModal, openModal }
}
