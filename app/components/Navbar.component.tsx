import { PE as FlagPE } from 'country-flag-icons/react/3x2'

function Navbar () {
  return (
    <nav className='navbar bg-base-100 py-7 px-10 flex justify-between gap-20 '>
      <a className='btn btn-ghost w-72 bg-[url("/bases/logo-black.png")] dark:bg-[url("/bases/logo-white.png")]  bg-no-repeat bg-contain  bg-center' />
      <div className='form-control w-full'>
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
      <div className='flex gap-5 '>
        <button className='btn btn-ghost'>Ofertas</button>
        <button className='btn btn-ghost'>Contáctanos</button>
        <button className='btn btn-ghost'>Regístrate</button>
        <FlagPE title='PE' className='w-6 h-6' />
      </div>
    </nav>
  )
}

export default Navbar
