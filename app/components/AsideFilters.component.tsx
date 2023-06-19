'use client'

import { sharingStateFiltersModal } from '@src/services/sharing-state.service'
import { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import GroupCollapse from './GroupCollapse.component'

ReactModal.setAppElement('#__next')
const modalStyles = {
  overlay: {
    zIndex: 50,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  content: {
    width: 'min-content',
    height: 'min-content',
    top: '0',
    left: '0',
    right: 'auto',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0'
  }
}

const subcribe = sharingStateFiltersModal.getSubject()

function AsideFilters () {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const subscription = subcribe.subscribe((value: boolean) => {
      setIsOpen(value)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const closeModal = () => {
    sharingStateFiltersModal.setSubject(false)
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Carrito de compras'
      style={modalStyles}
    >
      <div className='w-screen sm:w-[30rem] h-screen  dark:bg-[#0C1F34] dark:shadow-[#1a2332] bg-zinc-100  justify-between  animate-fade-right pt-5'>
        <GroupCollapse />
      </div>
    </ReactModal>
  )
}

export default AsideFilters
