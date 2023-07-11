'use client'

import { PE as FlagPE } from 'country-flag-icons/react/3x2'
import Link from 'next/link'
import InputSearch from './InputSearch.component'
import { sharingStateBoxSearch } from '@src/services'
import { useOpenComponent } from '@src/hooks'
import { FaUser, FaWhatsapp } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'
import { formartNumber } from '@src/utilities'
import { LogoInformatica } from '@src/svgs'
import { BiSearchAlt } from 'react-icons/bi'

const subcribe = sharingStateBoxSearch.getSubject()

function Navbar () {
  const isOpenBoxSearch = useOpenComponent({ subcribe })

  const numberFormart = formartNumber('954310073')

  return (
    <header>
      <a
        target='_blank'
        href={`${process.env.NEXT_PUBLIC_WHATSAPP_LINK}&text=Hola%20Informatica96%20Quiero%20saber%20mas%20sobre%20sus%20productos`}
        className='flex justify-center w-full bg-[#003D7A] py-4 border-t-2 border-[#C9DF43] text-white'
      >
        <section className='flex flex-wrap items-center justify-center gap-2 sm:gap-8 xl:gap-14 max-w-[90vw]'>
          <ul className='flex gap-6 border-2 border-[#C9DF43] py-1 px-4 rounded-md items-center justify-center text-sm xl:text-2xl font-bold grow xl:grow-0'>
            <li>WhatsApp Ventas</li>
            <li>
              <FaWhatsapp className='xl:text-4xl  text-xl text-[#C9DF43]' />
            </li>
            <li>{numberFormart}</li>
          </ul>
          <h1 className='p-0 m-0 text-xl xl:text-4xl'>
            TE LO LLEVAMOS A TU OFICINA
          </h1>
          <div className='flex gap-4'>
            <FlagPE className='w-8 rounded-lg xl:w-14 ' />
            <div className='flex flex-col text-xs xl:text-sm'>
              <span>Lima</span>
              <span>Peru</span>
            </div>
          </div>
        </section>
      </a>
      <nav className='sticky top-0 flex flex-col items-center w-full'>
        <section className='flex items-center w-11/12 gap-2 xl:gap-10 my-6 text-[#003D7A] dark:text-white  xl:flex-row flex-col  '>
          <Link href='/' className='btn btn-ghost xl:basis-1/4 '>
            <LogoInformatica className='w-56 xl:w-72' />
          </Link>
          <div className='hidden basis-1/2 xl:block'>
            <input type='text' className='w-full' />
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
            <button className='flex gap-1 xl:gap-3 btn btn-ghost text-start'>
              <HiShoppingCart className='text-xl xl:text-4xl' />
              <div className='flex flex-col '>
                <span>Carrito</span>
                <span>Compras</span>
              </div>
            </button>
            <button className='flex gap-1 xl:gap-3 btn btn-ghost text-start xl:hidden'>
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
    </header>
  )
}

export default Navbar
