/* eslint-disable @next/next/no-img-element */
'use client'

import { useCart } from '@src/hooks'

export default function CheckOutCartPage () {
  const { cart } = useCart()
  return (
    <section className='flex w-11/12 m-auto mt-10'>
      <div className='w-8/12'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Image</span>
                </th>
                <th scope='col' className='px-6 py-3'>
                  Product
                </th>
                <th scope='col' className='px-6 py-3'>
                  Qty
                </th>
                <th scope='col' className='px-6 py-3'>
                  Price
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>

              {
                cart.map((product) => (
                  <tr key={product.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <td className='w-32 p-4'>
                      <img
                        src={product.images[0].src}
                        alt={product.name}
                      />
                    </td>
                    <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                      {product.name}
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center space-x-3'>
                        <button
                          className='inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                          type='button'
                        >
                          <span className='sr-only'>Quantity button</span>
                          <svg
                            className='w-3 h-3'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 18 2'
                          >
                            <path
                              stroke='currentColor'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-width='2'
                              d='M1 1h16'
                            />
                          </svg>
                        </button>
                        <div>
                          <input
                            type='number'
                            id='first_product'
                            className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='1'
                            value={product.quantity}
                            required
                          />
                        </div>
                        <button
                          className='inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                          type='button'
                        >
                          <span className='sr-only'>Quantity button</span>
                          <svg
                            className='w-3 h-3'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 18 18'
                          >
                            <path
                              stroke='currentColor'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-width='2'
                              d='M9 1v16M1 9h16'
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className='flex items-center justify-center px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                      <span>$</span>
                      <span>{parseInt(product.price) * product.quantity}</span>
                    </td>
                    <td className='px-6 py-4'>
                      <a
                        href='#'
                        className='font-medium text-red-600 dark:text-red-500 hover:underline'
                      >
                        Eliminar
                      </a>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-4/12'>resumen</div>
    </section>
  )
}
