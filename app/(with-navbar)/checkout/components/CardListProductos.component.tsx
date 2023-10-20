'use client'

import { useCart } from '@src/hooks'
import { calculateTotalPrice, formatPrice } from '@src/utilities'

export default function CardListProductos () {
  const { cart } = useCart()

  const totalPrice = calculateTotalPrice(cart)

  return (
    <section className='flex flex-col m-6 text-white'>
      <h2 className='mb-10 text-lg font-bold text-center'>Tu Pedido</h2>
      <ul className='flex flex-col gap-3 px-4 text-sm '>
        {
        cart.map((product) => (
          <li className='flex justify-between' key={product.id}>
            <p className='flex gap-2 '>
              <span className='font-bold'>{product.quantity}</span>
              <span className='font-bold'>x</span>
              <span>
                {product.name}
              </span>
            </p>
            <span>{formatPrice(product.price)}</span>
          </li>
        ))
       }
      </ul>

      <div className='divider' />

      <div className='flex justify-between px-4 py-2 text-sm'>
        <span>Total</span>
        <span>{formatPrice(totalPrice)}</span>
      </div>

      <button className='w-full py-2 mt-4 text-sm font-bold uppercase border rounded text-inf-tertiary bg-inf-quaternary border-inf-quaternary hover:bg-yellow-400 hover:border-ybg-yellow-400'>
        Confirmar Pedido
      </button>

    </section>
  )
}
