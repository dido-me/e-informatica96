'use client'
import { CheckOutContext } from '@src/contexts'
import Link from 'next/link'
import { useContext } from 'react'
import { BiUserPin } from 'react-icons/bi'
import { FaShoppingBasket, FaCreditCard, FaFile } from 'react-icons/fa'

export function HeaderCheckout () {
  const { step, changeStep } = useContext(CheckOutContext)
  return (
    <header className='bg-inf-tertiary'>
      <ul className='flex justify-around w-11/12 py-6 m-auto text-xs font-bold text-white'>
        <li className={step === 1 ? 'pb-4 border-b-2' : ''}>
          <Link
            href='/checkout/cart'
            onClick={() => changeStep(1)}
            className='flex items-center gap-2'
          >
            <span>
              <FaShoppingBasket size={20} />
            </span>
            <span className='hidden xl:block'>Carrito de compras</span>
          </Link>
        </li>
        <li
          className={`flex items-center gap-2 ${
            step === 2 && 'pb-4 border-b-2'
          }`}
        >
          <span>
            <BiUserPin size={20} />
          </span>
          <span className='hidden xl:block'>Identificación</span>
        </li>
        <li
          className={`flex items-center gap-2 ${
            step === 3 && 'pb-4 border-b-2'
          }`}
        >
          <span>
            <FaCreditCard size={20} />
          </span>
          <span className='hidden xl:block'>Pago</span>
        </li>
        <li
          className={`flex items-center gap-2 ${
            step === 4 && 'pb-4 border-b-2'
          }`}
        >
          <span>
            <FaFile size={20} />
          </span>
          <span className='hidden xl:block'>Nota de Orden</span>
        </li>
      </ul>
    </header>
  )
}
