'use client'

import { sharingStateFiltersModal } from '@src/services'
import React from 'react'
import { LuSettings2 } from 'react-icons/lu'

function ButtonFilters () {
  const openFiltersModal = () => {
    sharingStateFiltersModal.setSubject(true)
  }
  return (
    <button className='btn btn-outline flex gap-2' onClick={openFiltersModal}>
      <LuSettings2 />
      Filtros
    </button>
  )
}

export default ButtonFilters
