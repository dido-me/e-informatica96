import { Product } from '@src/models/product'
import { calculateDiscount } from '@src/utilities'
import Image from 'next/image'
import Link from 'next/link'

function ProductCard ({ product }: { product: Product }) {
  return (
    <article
      key={product.id}
      className='flex flex-col items-center gap-6 px-3 py-5 rounded dark:bg-inf-secondary bg-zinc-100 drop-shadow-md'
    >
      <div className='relative w-full'>
        {calculateDiscount(product.regular_price, product.price) > 0 && (
          <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
            {`${calculateDiscount(product.regular_price, product.price)}%`}
          </span>
        )}
        <Link href={`/producto/${product.slug}`}>
          <Image
            src={product.images[0].src}
            alt='producto'
            width={225}
            height={146}
            className='object-cover w-full rounded h-52'
          />
        </Link>
      </div>
      <div className='flex flex-col w-full gap-4'>
        <span className='flex gap-2'>
          <ins className='font-bold no-underline'>${product.price}</ins>
          <del>${product.regular_price}</del>
        </span>
        <p className='text-sm'>{product.name}</p>
      </div>
      <button className='flex items-center gap-2 btn btn-outline w-fit'>
        <span className='text-xs'>Agregar al carrito</span>
      </button>
    </article>
  )
}

export default ProductCard
