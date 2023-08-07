/* eslint-disable @next/next/no-img-element */
'use client'

import { HiOutlinePlusSm, HiOutlineMinusSm } from 'react-icons/hi'
import { IoCloseCircle } from 'react-icons/io5'

import { useCart } from '@src/hooks'
import { useContext, useEffect, useState } from 'react'
import { ProductModelWithQuantity } from '@src/models/product'
import Link from 'next/link'
import { CheckOutContext } from '@src/contexts'

export default function CheckOutCartPage () {
  const [products, setProducts] = useState<ProductModelWithQuantity[]>([])
  const { cart, addProduct, restOneProduct, removeProduct } = useCart()
  const { changeStep } = useContext(CheckOutContext)

  const totalPrices = products.reduce(
    (acc, product) => acc + parseInt(product.price) * product.quantity,
    0
  )

  useEffect(() => {
    setProducts(cart)

    changeStep(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])

  return (
    <section className='flex flex-col w-11/12 gap-6 m-auto my-10 xl:flex-row '>
      <div className='relative w-full overflow-x-auto xl:w-8/12' id='cartPrint'>
        <table className='w-full text-sm text-left uppercase text-inf-primary dark:text-white'>
          <thead className='border-b-2'>
            <tr>
              <th scope='col' className='px-6 py-3 '>
                Producto
              </th>
              <th scope='col' className='hidden px-6 py-3 xl:table-cell'>
                Cantidad
              </th>
              <th scope='col' className='hidden px-6 py-3 xl:table-cell'>
                Precio
              </th>
              <th scope='col' className='hidden px-6 py-3 xl:table-cell' />
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th
                  scope='row'
                  className='relative flex justify-between gap-4 px-6 py-4 font-medium xl:justify-start whitespace-nowrap'
                >
                  <img
                    src={product.images[0].src}
                    alt={product.name}
                    className='object-contain w-24 h-24'
                  />
                  <div className='flex flex-col gap-4'>
                    <h3 className='font-bold'>{product.name}</h3>
                    <p>SKU: {product.sku}</p>
                    <section className='flex justify-between w-full xl:hidden'>
                      <div className='flex items-center gap-2'>
                        <button
                          className='text-inf-quaternary hover:bg-inf-secondary disabled:opacity-50 disabled:cursor-not-allowed'
                          onClick={() => restOneProduct(product)}
                          disabled={product.quantity === 1}
                        >
                          <HiOutlineMinusSm size={25} />
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          onClick={() => addProduct(product)}
                          className='text-inf-quaternary hover:bg-inf-secondary'
                        >
                          <HiOutlinePlusSm size={25} />
                        </button>
                      </div>
                      <div className='flex flex-col items-end gap-2'>
                        <p className='flex flex-col items-end text-slate-400'>
                          <span>${product.price}</span>
                          <span className='text-[0.6rem]'>c/u</span>
                        </p>
                        <p>
                          {`$${parseInt(product.price) * product.quantity}`}
                        </p>
                      </div>
                    </section>
                  </div>
                  <button
                    className='absolute top-0 right-0 block mt-3 text-red-400 hover:text-red-700 xl:hidden'
                    onClick={() => removeProduct(product)}
                  >
                    <IoCloseCircle size={20} />
                  </button>
                </th>
                <td className='hidden px-6 py-4 xl:table-cell'>
                  <div className='flex items-center justify-center gap-2 font-extrabold'>
                    <button
                      className='text-inf-quaternary hover:bg-inf-secondary disabled:opacity-50 disabled:cursor-not-allowed'
                      onClick={() => restOneProduct(product)}
                      disabled={product.quantity === 1}
                    >
                      <HiOutlineMinusSm size={25} />
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => addProduct(product)}
                      className='text-inf-quaternary hover:bg-inf-secondary'
                    >
                      <HiOutlinePlusSm size={25} />
                    </button>
                  </div>
                </td>
                <td className='hidden px-6 py-4 xl:table-cell'>
                  <div className='flex flex-col gap-2'>
                    <span>
                      {`$${parseInt(product.price) * product.quantity}`}
                    </span>
                    <span className='text-xs text-slate-400'>{`$${product.price} x c/u`}</span>
                  </div>
                </td>
                <td className='hidden px-6 py-4 xl:table-cell'>
                  <button
                    className='text-red-400 hover:text-red-700'
                    onClick={() => removeProduct(product)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='w-full xl:w-4/12'>
        <h3 className='py-3 font-bold text-center text-white uppercase '>
          Resumen de Compra
        </h3>
        <div className='flex justify-between py-5 border-t-2'>
          <span>SubTotal:</span>
          <span>${totalPrices}</span>
        </div>
        <div className='flex justify-between py-5 border-t-2'>
          <span>Total:</span>
          <span>${totalPrices}</span>
        </div>
        <div className='flex flex-col gap-4'>
          <Link
            href='/checkout/payment'
            onClick={() => changeStep(2)}
            className='w-full text-white btn'
          >
            Finalizar Compra
          </Link>
          <button className='w-full btn btn-info'>Imprimir</button>
        </div>
      </div>
    </section>
  )
}
