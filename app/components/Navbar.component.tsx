'use client'

import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'
import { LogoInformatica } from '@src/svgs'
import { BiSearchAlt } from 'react-icons/bi'
import { SearchBox } from './SearchBox.component'
import { useOpenBox, useOpenShoppingCart } from '@src/hooks'

export function Navbar () {
  const { isOpen: isOpenBoxSearch, openBoxSearch } = useOpenBox()
  const { openModal } = useOpenShoppingCart()

  return (
    <nav className='sticky top-0 z-10 flex flex-col items-center w-full bg-white dark:bg-[#001f3d] '>
      <section className='flex flex-col items-center w-11/12 gap-2 my-6 xl:gap-10 text-inf-primary dark:text-white xl:flex-row '>
        <Link
          href='/'
          className={`btn btn-ghost xl:basis-1/4 ${
            isOpenBoxSearch && 'hidden'
          }`}
        >
          <LogoInformatica className='w-56 xl:w-72' />
        </Link>
        <div
          className={
            isOpenBoxSearch
              ? ' w-full block basis-1/2'
              : 'hidden  xl:block basis-1/2'
          }
        >
          <SearchBox />
        </div>
        <div className='flex justify-center xl:justify-evenly basis-1/4'>
          <Link
            href='/acount'
            className='flex gap-1 xl:gap-3 btn btn-ghost text-start '
          >
            <FaUser className='text-xl xl:text-4xl' />
            <div className='flex flex-col '>
              <span>Mi</span>
              <span>Perfil</span>
            </div>
          </Link>
          <button
            className='flex gap-1 xl:gap-3 btn btn-ghost text-start'
            onClick={openModal}
          >
            <HiShoppingCart className='text-xl xl:text-4xl' />
            <div className='flex flex-col '>
              <span>Carrito</span>
              <span>Compras</span>
            </div>
          </button>
          <button
            className='flex gap-1 xl:gap-3 btn btn-ghost text-start xl:hidden'
            onClick={openBoxSearch}
          >
            <BiSearchAlt className='text-xl xl:text-4xl' />
            <div className='flex flex-col '>
              <span>Busca</span>
              <span>Producto</span>
            </div>
          </button>
        </div>
      </section>
      <section>down</section>
    </nav>
  )
}
