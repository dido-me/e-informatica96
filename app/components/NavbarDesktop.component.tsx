'use client'

import { PE as FlagPE } from 'country-flag-icons/react/3x2'
import Link from 'next/link'
import InputSearch from './InputSearch.component'
import { sharingStateBoxSearch } from '@src/services'
import { useOpenComponent } from '@src/hooks'

const subcribe = sharingStateBoxSearch.getSubject()

function Navbar () {
  const isOpenBoxSearch = useOpenComponent({ subcribe })

  return (
    <nav className='navbar sticky top-0 left-0 z-20 xl:py-7 px-10 flex justify-center xl:justify-between gap-14 dark:bg-[#0C1F34] shadow-sm dark:shadow-[#1a2332] bg-zinc-100 '>
      <Link
        href='/'
        className={`btn btn-ghost w-48 xl:w-72 bg-[url("/bases/logo-black.png")] dark:bg-[url("/bases/logo-white.png")]  bg-no-repeat bg-contain  ${isOpenBoxSearch ? 'hidden' : 'bg-center'}`}
      />
      <div className={`form-control w-full  ${isOpenBoxSearch ? 'xl:block' : 'hidden xl:block'}`}>
        <InputSearch />
      </div>
      <div className='xl:flex gap-5 hidden '>
        <Link href='/about' className='btn btn-ghost'>
          Contáctanos
        </Link>
        <Link href='/sign_in' className='btn btn-ghost'>Mi Cuenta</Link>
        <FlagPE title='PE' className='w-10 h-10' />
      </div>
    </nav>
  )
}

export default Navbar
