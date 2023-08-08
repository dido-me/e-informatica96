import { LogoInformatica } from '@src/svgs'
import Link from 'next/link'

export function Footer () {
  return (
    <footer className='bg-white rounded-lg shadow dark:bg-gray-900'>
      <div className='w-full max-w-screen-xl p-4 mx-auto md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Link href='/' className='flex items-center mb-4 sm:mb-0'>
            <LogoInformatica className='h-8 mr-3' />
          </Link>
          <span>
            <a href='mailto:commercejs@informatica96.com'>
              commercejs@informatica96.com
            </a>
          </span>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <Link
                href='/terminos-y-condiciones'
                className='mr-4 hover:underline md:mr-6'
              >
                Políticas de devolución y reembolso
              </Link>
            </li>

            <li>
              <a href='/about' className='hover:underline'>
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023. Desarollado por {' '}
          <a
            href='https://www.instagram.com/dido.concepts/'
            className='hover:underline'
          >
            Dido Concepts
          </a>
        </span>
      </div>
    </footer>
  )
}
