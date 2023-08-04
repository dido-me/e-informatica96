'use client'

import { BiCategory } from 'react-icons/bi'
import { RiCloseCircleFill } from 'react-icons/ri'
import ReactModal from 'react-modal'
import { useOpenCategoriesModal } from '@src/hooks'
import { ParentCategory } from '@src/models/category'
import Link from 'next/link'

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

export function AsideCategories ({
  categories
}: {
  categories: ParentCategory[]
}) {
  const { isOpen, closeModal } = useOpenCategoriesModal()
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Carrito de compras'
      style={modalStyles}
    >
      <div className='w-screen sm:w-[30rem] h-screen  dark:bg-[#0C1F34] dark:shadow-[#1a2332] bg-zinc-100   flex flex-col justify-between  animate-fade-right '>
        <section className='flex justify-between flex-none p-4 text-xl border-b-2 border-zinc-300'>
          <div className='flex items-center gap-3'>
            <BiCategory />
            <span>Categorias</span>
          </div>
          <button className='btn btn-ghost' onClick={closeModal}>
            <RiCloseCircleFill size={25} />
          </button>
        </section>
        <section className='grid grow place-content-center'>
          <ul className='flex flex-col items-center gap-4 '>
            {categories.map((category) => {
              if (category.id === 15) return null
              return (
                <li key={category.id} className='text-xl font-bold'>
                  <Link
                    href={`/categoria/${category.id}`}
                    onClick={closeModal}
                    className='btn btn-ghost hover:bg-inf-tertiary peer'
                  >
                    {category.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </ReactModal>
  )
}
