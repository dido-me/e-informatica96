import { getProduct } from '@src/services'
import { CarouselProduct, RelatedProductCard } from '@app/producto/components'

async function Product ({ params }: { params: { slug: string } }) {
  const product = await getProduct({ slug: params.slug })

  if (!product) {
    return <div>Producto no encontrado</div>
  }

  return (
    <main className='flex flex-col items-center'>
      <div className='flex gap-10  w-[70vw]'>
        <section className='w-[50%]'>
          <CarouselProduct images={product.images} nameProduct={product.slug} />
        </section>
        <section className='flex flex-col gap-4 py-10 w-[50%]'>
          <h2>{product.name}</h2>
          <span>{product.slug}</span>
          <span className='flex items-center gap-2 py-6'>
            <ins className='font-bold no-underline text-4xl'>
              ${product.price}
            </ins>
            <del>${product.regular_price}</del>
          </span>
          <button className='btn btn-primary'>Agregar al carrito</button>
          <div className='divider' />
          <div className='flex items-center gap-10 '>
            <h4>Categoria(s)</h4>
            <ul className='flex gap-4 text-sm text-center'>
              {product.categories.map((category) => (
                <li
                  key={category.id}
                  className='border-solid border-2 border-zinc-500 px-2 py-1 rounded'
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center gap-10'>
            <h4>Marca(s)</h4>
            <ul className='flex gap-4 text-sm text-center'>
              {product.tags.map((marca) => (
                <li
                  key={marca.id}
                  className='border-solid border-2 border-zinc-500 px-2 py-1 rounded'
                >
                  {marca.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <div className='divider' />
      <section className='w-[70vw] py-10'>
        <h1>Descripción</h1>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </section>
      <div className='divider' />
      <section className='w-[70vw] py-10'>
        <h1>Productos relacionados</h1>
        <div className='w-full grid grid-cols-auto-fill-20rem gap-4'>
          {product.related_ids.map(id => (
            <RelatedProductCard idProduct={id} key={id} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Product
