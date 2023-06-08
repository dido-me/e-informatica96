import { FaShoppingCart } from 'react-icons/fa'

function ShoppingButton () {
  return (
    <button className='fixed top-1/2 right-0 z-20 bg-black hover:bg-slate-900 px-5 py-3 flex flex-col gap-4 rounded-md'>
      <div className='flex gap-3 text-white '>
        <span>
          <FaShoppingCart />
        </span>
        <span>0 Item</span>
      </div>
      <span className='text-center w-full bg-slate-50 text-black rounded-md px-4 py-2'>
        $0.00
      </span>
    </button>
  )
}

export default ShoppingButton