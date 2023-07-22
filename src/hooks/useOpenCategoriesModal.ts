import { sharingStateCategoryModal } from '@src/services'
import { useEffect, useRef, useState } from 'react'
import { Subscription } from 'rxjs'

export const useOpenCategoriesModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const subscriptionCategoriesRef = useRef<Subscription | null>(null)

  useEffect(() => {
    subscriptionCategoriesRef.current = sharingStateCategoryModal
      .getSubject()
      .subscribe((data) => {
        setIsOpen(data)
      })

    return () => {
      if (subscriptionCategoriesRef.current) {
        subscriptionCategoriesRef.current.unsubscribe()
      }
    }
  }, [])

  const closeModal = () => {
    sharingStateCategoryModal.setSubject(false)
  }

  const openModal = () => {
    sharingStateCategoryModal.setSubject(true)
  }

  return { isOpen, closeModal, openModal }
}
