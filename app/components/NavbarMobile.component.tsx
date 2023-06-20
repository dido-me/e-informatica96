'use client'

import { sharingStateShoppingCartModal } from '@src/services'
import Link from 'next/link'
import { FiMenu, FiSearch, FiHome, FiShoppingCart, FiUser } from 'react-icons/fi'

function NavbarMobile () {
  const openShoppingModal = () => {
    sharingStateShoppingCartModal.setSubject(true)
  }
  return (
    <nav className='fixed z-10 bottom-0 left-0 w-full flex xl:hidden bg-zinc-200 dark:bg-[#0C1F34] drop-shadow-[-12px_-12px_24px_rgba(0,0,0,0.25)] justify-between py-5 '>
      <div className='flex-1 flex justify-center cursor-pointer'>
        <div className='dropdown dropdown-top  '>
          <label tabIndex={0}>
            <FiMenu size={25} />
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Ofertas</a>
            </li>
            <li>
              <Link href='/about'>Contáctanos</Link>
            </li>
            <li>
              <a>Regístrate</a>
            </li>
          </ul>
        </div>
      </div>
      <button className='flex-1 flex justify-center '>
        <FiSearch size={25} />
      </button>
      <Link href='/' className='flex-1 flex justify-center '>
        <FiHome size={25} />
      </Link>
      <button className='flex-1 flex justify-center ' onClick={openShoppingModal}>
        <FiShoppingCart size={25} />
      </button>
      <button className='flex-1 flex justify-center '>
        <FiUser size={25} />
      </button>
    </nav>
  )
}

export default NavbarMobile
