'use client'
import { FaShoppingCart } from 'react-icons/fa'
import { RiCloseCircleFill } from 'react-icons/ri'
import ReactModal from 'react-modal'
import { useOpenShoppingCart } from '@src/hooks'

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
            <span>0 Item</span>
          </div>
          <button className='btn btn-ghost' onClick={closeModal}>
            <RiCloseCircleFill size={25} />
          </button>
        </section>
        <section className='grow'>Main</section>
        <section className='flex items-center justify-center flex-none p-6 '>
          <button className='flex justify-between w-full btn'>
            <span>Pagar</span>
            <span>$ 0.00</span>
          </button>
        </section>
      </div>
    </ReactModal>
  )
}

export default AsideShopping
