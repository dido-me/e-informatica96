'use client'
import { FaShoppingCart } from 'react-icons/fa'
import { RiCloseCircleFill } from 'react-icons/ri'
import ReactModal from 'react-modal'
import { sharingStateShoppingCartModal } from '@src/services'
import { useOpenComponent } from '@src/hooks'

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

const subcribe = sharingStateShoppingCartModal.getSubject()

function AsideShopping () {
  const isOpen = useOpenComponent({ subcribe })

  const closeModal = () => {
    sharingStateShoppingCartModal.setSubject(false)
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Carrito de compras'
      style={modalStyles}
    >
      <div className='w-screen sm:w-[30rem] h-screen  dark:bg-[#0C1F34] dark:shadow-[#1a2332] bg-zinc-100   flex flex-col justify-between  animate-fade-left '>
        <section className='flex justify-between text-xl p-4 flex-none border-b-2 border-zinc-300'>
          <div className='flex gap-3  items-center'>
            <FaShoppingCart />
            <span>0 Item</span>
          </div>
          <button className='btn btn-ghost' onClick={closeModal}>
            <RiCloseCircleFill size={25} />
          </button>
        </section>
        <section className='grow'>Main</section>
        <section className=' flex-none flex justify-center items-center p-6'>
          <button className='btn w-full flex justify-between'>
            <span>Pagar</span>
            <span>$ 0.00</span>
          </button>
        </section>
      </div>
    </ReactModal>
  )
}

export default AsideShopping
