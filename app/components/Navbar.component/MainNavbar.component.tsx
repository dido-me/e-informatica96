'use client'

import { useOpenBox, useOpenShoppingCart } from '@src/hooks'
import { LogoInformatica } from '@src/svgs'
import Link from 'next/link'
import { BiSearchAlt } from 'react-icons/bi'
import { MdMenu } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'
import { SearchBox } from '@app/components'
import { ButtonMenu } from './ButtonMenu.component'
import { LinkMenu } from './LinkMenu.component'

export function MainNavbar () {
  const { isOpen: isOpenBoxSearch, openBoxSearch } = useOpenBox()
  const { openModal } = useOpenShoppingCart()

  return (
    <section className='flex flex-col items-center w-11/12 gap-2 my-4 xl:gap-10 text-inf-primary dark:text-white xl:flex-row '>
      <Link
        href='/'
        className={`btn btn-ghost xl:basis-1/4 ${isOpenBoxSearch && 'hidden'}`}
      >
        <LogoInformatica className='w-56 xl:w-72' />
      </Link>
      <div
        className={
          isOpenBoxSearch
            ? 'w-full block basis-1/2'
            : 'hidden  xl:block basis-1/2'
        }
      >
        <SearchBox />
      </div>
      <div className='flex justify-center xl:justify-evenly basis-1/4'>
        <button className='block btn btn-ghost xl:hidden '>
          <MdMenu className='text-3xl' />
        </button>
        <LinkMenu
          Icon={FaUser}
          text='Mi Perfil'
          href='/sign_in'
          className='flex gap-1 xl:gap-3 btn btn-ghost text-start'
        />
        <ButtonMenu
          Icon={HiShoppingCart}
          text='Carrito Compras'
          className='flex gap-1 xl:gap-3 btn btn-ghost text-start '
          onClick={openModal}
        />
        <ButtonMenu
          Icon={BiSearchAlt}
          text='Buscar Producto'
          className='flex gap-1 xl:gap-3 btn btn-ghost text-start xl:hidden'
          onClick={openBoxSearch}
        />
      </div>
    </section>
  )
}
