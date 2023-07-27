import { Product } from '@src/models/product'
import { calculateDiscount } from '@src/utilities'
import Image from 'next/image'
import Link from 'next/link'

function ProductCard ({ product }: { product: Product }) {
  return (
    <article className='border-[0.1rem] border-gray-400 py-6 px-8 rounded-lg flex flex-col justify-end h-full  relative'>
      <main className='flex flex-col items-start gap-4 dark:text-white text-inf-primary'>
        <span className='absolute top-0 left-0 px-2 py-1 mt-4 ml-10 font-bold rounded-lg bg-inf-quaternary text-inf-primary'>
          {`-${calculateDiscount(product.regular_price, product.price)}%`}
        </span>
        <Image
          src={product.images[0].src}
          alt={product.slug}
          className='object-contain w-full h-48'
          width={225}
          height={146}
        />
        <p>{product.name}</p>
        <p className='flex gap-4 text-lg '>
          <span className='font-bold text-[#E24031]'>{`US$ ${product.sale_price}`}</span>
          <span className='text-[#A3A3A3] line-through'>{`US$ ${product.regular_price}`}</span>
        </p>
      </main>
      <div className='after:bg-gray-400 before:bg-gray-400 divider' />
      <footer className='flex flex-col gap-6 '>
        <div className='flex flex-wrap gap-2'>
          <span className='bg-[#F9B60C] text-[#513E0D] px-6 py-1 rounded-md'>
            Envio Gratis
          </span>
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className='bg-[#46CCF6] text-[#005F7D] px-6 py-1 rounded-md'
            >
              {tag.name}
            </span>
          ))}
          {product.categories.map((category, index) => (
            <span
              key={index}
              className='bg-[#8A38C9] text-[#E6C6FF] px-6 py-1 rounded-md'
            >
              {category.name}
            </span>
          ))}
        </div>
        <div className='flex items-center justify-center'>
          <Link href={`/producto/${product.slug}`} className='border-[0.1rem] dark:border-white border-inf-primary py-2 w-10/12 rounded-md dark:text-white text-inf-primary text-center '>
            Agregar al carrito
          </Link>
        </div>
      </footer>
    </article>
  )
}

export default ProductCard
