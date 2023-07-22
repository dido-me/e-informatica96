import { sharingStateShoppingCartModal } from '@src/services'
import { useEffect, useRef, useState } from 'react'
import { Subscription } from 'rxjs'

export const useOpenShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const subscriptionShopRef = useRef<Subscription | null>(null)

  useEffect(() => {
    subscriptionShopRef.current = sharingStateShoppingCartModal
      .getSubject()
      .subscribe((data) => {
        setIsOpen(data)
      })

    return () => {
      if (subscriptionShopRef.current) {
        subscriptionShopRef.current.unsubscribe()
      }
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
