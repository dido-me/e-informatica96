/* eslint-disable @next/next/no-img-element */
'use client'
import { FaShoppingCart } from 'react-icons/fa'
import { RiCloseCircleFill } from 'react-icons/ri'
import ReactModal from 'react-modal'
import { useCart, useOpenShoppingCart } from '@src/hooks'
import Link from 'next/link'
import { calculateTotalPrice, formatPrice } from '@src/utilities'

ReactModal.setAppElement('#__next')

const modalStyles = {
  overlay: {
    zIndex: 50,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  content: {
    width: 'min-content',
    height: 'min-content',
    top: '0',
    right: '0',
    left: 'auto',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0'
  }
}

function AsideShopping () {
  const { isOpen, closeModal } = useOpenShoppingCart()
  const { cart, addProduct, restOneProduct, removeProduct } = useCart()

  const totalPrice = calculateTotalPrice(cart)

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Carrito de compras'
      style={modalStyles}
    >
      <div className='w-screen sm:w-[30rem] h-screen  dark:bg-[#0C1F34] dark:shadow-[#1a2332] bg-zinc-100   flex flex-col justify-between  animate-fade-left '>
        <section className='flex justify-between flex-none p-4 text-xl border-b-2 border-zinc-300'>
          <div className='flex items-center gap-3'>
            <FaShoppingCart />
            <span>{cart.length} Producto(s)</span>
          </div>
          <button className='btn btn-ghost' onClick={closeModal}>
            <RiCloseCircleFill size={25} />
          </button>
        </section>
        <section className='overflow-scroll grow'>
          <ul className='flex flex-col gap-4 mx-4 my-4'>
            {cart.map((product) => (
              <li key={product.id}>
                <article className='flex items-center justify-between gap-2'>
                  <header className='flex flex-col overflow-hidden rounded-lg bg-slate-300 text-inf-primary'>
                    <button
                      className='px-1 py-3 hover:bg-inf-quaternary active:opacity-5'
                      onClick={() => addProduct(product)}
                    >
                      +
                    </button>
                    <span className='px-1 py-3 text-center'>
                      {product.quantity}
                    </span>
                    <button
                      className='px-1 py-3 hover:bg-inf-quaternary active:opacity-5 disabled:opacity-50 disabled:cursor-not-allowed'
                      onClick={() => restOneProduct(product)}
                      disabled={product.quantity === 1}
                    >
                      -
                    </button>
                  </header>
                  <Link
                    href={`/producto/${product.slug}`}
                    onClick={closeModal}
                    className='flex items-center flex-1 gap-2'
                  >
                    <div>
                      <img
                        src={product.images[0].src}
                        alt={product.name}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className='flex flex-col gap-2 text-xs'>
                      <span>{product.name}</span>
                      <span>{formatPrice(product.price)}</span>
                    </div>
                    <div className='flex gap-2 text-xs'>
                      <span>$</span>
                      <span>{parseInt(product.price) * product.quantity}</span>
                    </div>
                  </Link>
                  <footer>
                    <button
                      className='p-0 btn btn-ghost '
                      onClick={() => removeProduct(product)}
                    >
                      <RiCloseCircleFill size={15} />
                    </button>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </section>
        <section className='flex items-center justify-center flex-none p-6 '>
          <Link href='/checkout' onClick={closeModal} className='flex justify-between w-full btn'>
            <span>Pagar</span>
            <span>$ {totalPrice}</span>
          </Link>
        </section>
      </div>
    </ReactModal>
  )
}

export default AsideShopping
