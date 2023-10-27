import { useCart } from '@src/hooks'
import { calculateTotalPrice } from '@src/utilities'
import Link from 'next/link'
import React from 'react'

function Card () {
  const { cart } = useCart()

  const totalPrice = calculateTotalPrice(cart)

  return (
    <div className='max-w-sm p-6 bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white text-inf-secondary'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight '>
        Resumen de Compra
      </h5>

      <div className='flex justify-between py-6'>
        <h4 className='font-bold'>Subtotal:</h4>
        <span>{`$${totalPrice}`}</span>
      </div>

      <div className='flex justify-between py-6'>
        <h4 className='font-bold'>Entrega:</h4>
        <div className='flex gap-2 cursor-pointer etiqueta'>
          Entrega en Tienda
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='#0074d9'>
            <circle cx='10' cy='10' r='8' />
            <text x='10' y='10' textAnchor='middle' dy='0.3em' fontSize='14' fill='white'>i</text>
          </svg>
        </div>

        <style>
          {`
          .etiqueta:hover::after {
            content: "Por el momento, solo se entregan en la tienda física o coordinar con el vendedor por whatsapp.";
            display: block;
            position: absolute;
            background-color: #fff;
            border: 1px solid #ccc;
            color: #333;
            padding: 10px;
            z-index: 1;
          }
        `}
        </style>

      </div>

      <div>
        <div className='flex justify-between py-6'>
          <h4 className='font-bold'>Total:</h4>
          <span>{`$${totalPrice}`}</span>
        </div>

        <Link href='/payment' className='inline-block w-full py-3 text-center btn-primary'>
          Pagar
        </Link>

      </div>

    </div>
  )
}

export default Card
