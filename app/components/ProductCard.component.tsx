import { Product } from '@src/models/product'
import { calculateDiscount } from '@src/utilities'
import Image from 'next/image'

function ProductCard ({ product }:{product: Product}) {
  return (
    <article
      key={product.id}
      className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'
    >
      <div className='w-full relative'>
        {
      calculateDiscount(product.regular_price, product.price) > 0 && (
        <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
          {`${calculateDiscount(product.regular_price, product.price)}%`}
        </span>
      )
   }
        <Image
          src={product.images[0].src}
          alt='producto'
          width={225}
          height={146}
          className='w-full h-52 object-cover rounded'
        />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <h2 className='font-bold'>
          {`$${product.price} -`}{' '}
          <span className='font-light line-through'>{`$${product.regular_price}`}</span>
        </h2>
        <p className='text-sm'>{product.name}</p>
      </div>
      <button className='btn btn-outline w-fit flex gap-2 items-center'>
        <span className='text-xs'>Agregar al carrito</span>
      </button>
    </article>
  )
}

export default ProductCard
