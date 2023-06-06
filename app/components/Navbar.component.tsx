import { PE as FlagPE } from 'country-flag-icons/react/3x2'
import Link from 'next/link'
import {
  FiMenu,
  FiSearch,
  FiHome,
  FiShoppingCart,
  FiUser
} from 'react-icons/fi'

function Navbar () {
  return (
    <>
      {/* Desktop */}
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
      {/* Mobile */}
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
        <button className='flex-1 flex justify-center '>
          <FiShoppingCart size={25} />
        </button>
        <button className='flex-1 flex justify-center '>
          <FiUser size={25} />
        </button>
      </nav>
    </>
  )
}

export default Navbar
