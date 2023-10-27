'use client'
import { useCart } from '@src/hooks'

function TableCheckOut () {
  const { cart, addProduct, restOneProduct, removeProduct } = useCart()

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              <span className='sr-only'>Image</span>
            </th>
            <th scope='col' className='px-6 py-3'>
              Producto
            </th>
            <th scope='col' className='px-6 py-3'>
              Cantidad
            </th>
            <th scope='col' className='px-6 py-3'>
              Precio
            </th>
            <th scope='col' className='px-6 py-3'>
              Acción
            </th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((product) => (
              <tr key={product.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td className=' w-[48rem] xl:w-32 xl:p-4'>
                  <img
                    src={product.images[0].src}
                    alt='Apple Watch'
                  />
                </td>
                <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  {product.name}
                </td>
                <td className='px-6 py-4'>
                  <div className='flex items-center space-x-3'>
                    <button
                      className='inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-white disabled:opacity-50'
                      type='button'
                      onClick={() => restOneProduct(product)}
                      disabled={product.quantity === 1}
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
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M1 1h16'
                        />
                      </svg>
                    </button>
                    <div>
                      <span>{product.quantity}</span>
                    </div>
                    <button
                      className='inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                      type='button'
                      onClick={() => addProduct(product)}
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
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 1v16M1 9h16'
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  {`$${parseInt(product.price) * product.quantity}`}
                </td>
                <td className='px-6 py-4'>
                  <button
                    onClick={() => removeProduct(product)}
                    className='font-medium text-red-600 dark:text-red-500 hover:underline'
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableCheckOut
