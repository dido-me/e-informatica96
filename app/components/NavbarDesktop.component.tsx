'use client'

import { PE as FlagPE } from 'country-flag-icons/react/3x2'
import Link from 'next/link'

function Navbar () {
  return (
    <nav className='navbar sticky top-0 left-0 z-10 xl:py-7 px-10 flex justify-center xl:justify-between gap-14 dark:bg-[#0C1F34] shadow-sm dark:shadow-[#1a2332] bg-zinc-100 '>
      <Link
        href='/'
        className='btn btn-ghost w-48 xl:w-72 bg-[url("/bases/logo-black.png")] dark:bg-[url("/bases/logo-white.png")]  bg-no-repeat bg-contain  bg-center'
      />
      <div className='form-control w-full hidden xl:block '>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Busca tus productos aquí'
            className='input input-bordered w-full'
          />
          <button className='btn btn-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='xl:flex gap-5 hidden '>
        <button className='btn btn-ghost'>Ofertas</button>
        <Link href='/about' className='btn btn-ghost'>
          Contáctanos
        </Link>
        <button className='btn btn-ghost'>Regístrate</button>
        <FlagPE title='PE' className='w-6 h-6' />
      </div>
    </nav>
  )
}

export default Navbar
