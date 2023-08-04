import { ReactNode } from 'react'
import { BiUserPin } from 'react-icons/bi'
import { FaShoppingBasket, FaCreditCard, FaFile } from 'react-icons/fa'

export default function CheckOutLayout ({ children }: { children: ReactNode }) {
  return (
    <main className='w-full'>
      <header className='bg-inf-tertiary'>
        <ul className='flex justify-around w-11/12 py-6 m-auto text-xs font-bold text-white'>
          <li className='flex items-center gap-2'>
            <span>
              <FaShoppingBasket size={20} />
            </span>
            <span className='hidden xl:block'>Carrito de compras</span>
          </li>
          <li className='flex items-center gap-2'>
            <span>
              <BiUserPin size={20} />
            </span>
            <span className='hidden xl:block'>Identificación</span>
          </li>
          <li className='flex items-center gap-2'>
            <span>
              <FaCreditCard size={20} />
            </span>
            <span className='hidden xl:block'>Pago</span>
          </li>
          <li className='flex items-center gap-2'>
            <span>
              <FaFile size={20} />
            </span>
            <span className='hidden xl:block'>Nota de Orden</span>
          </li>
        </ul>
      </header>
      {children}
    </main>
  )
}
