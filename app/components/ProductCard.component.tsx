import { Product } from '@src/models/product'
import { calculateDiscount } from '@src/utilities'
import Image from 'next/image'
import Link from 'next/link'

function ProductCard ({ product }:{product: Product}) {
  return (
    <Link href={`/producto/${product.slug}`}>
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
          <span className='flex gap-2'>
            <ins className='font-bold no-underline'>${product.price}</ins>
            <del>${product.regular_price}</del>
          </span>
          <p className='text-sm'>{product.name}</p>
        </div>
        <button className='btn btn-outline w-fit flex gap-2 items-center'>
          <span className='text-xs'>Agregar al carrito</span>
        </button>
      </article>
    </Link>
  )
}

export default ProductCard
