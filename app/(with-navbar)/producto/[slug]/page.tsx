import { getProductBySlug } from '@src/services'
import { CarouselProduct, RelatedProductCard } from '@app/(with-navbar)/producto/components'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug({ slug: params.slug })

  if (!product) {
    return {
      title: 'No Encontrado',
      description: 'No Encontrado'
    }
  }

  return {
    title: product.name,
    description: product.description,
    twitter: {
      card: 'summary_large_image'
    },
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.map((image) => ({
        url: image.src,
        width: 300
      })),
      authors: ['Informatica96']
    }
  }
}

async function ProductBySlug ({ params }: Props) {
  const product = await getProductBySlug({ slug: params.slug })

  if (!product) {
    if (!product) return redirect('/404')
  }
  const productUrl = `${process.env.NEXT_PUBLIC_DOMAIN || ''}/producto/${product.slug}`
  const whatsappMessage = encodeURIComponent(
    'Hola Informatica96 Quiero saber mas sobre sus productos. Puedes ver el producto aquí: '
  )
  const whatsappUrl = `${process.env.NEXT_PUBLIC_WHATSAPP_LINK}&text=${whatsappMessage}${productUrl}`

  return (
    <main className='flex flex-col items-center pb-10 xl:pb-0'>
      <div className='flex gap-10  w-[70vw] flex-col  xl:flex-row '>
        <section className='w-full xl:w-[50%]'>
          <CarouselProduct images={product.images} nameProduct={product.slug} />
        </section>
        <section className='flex flex-col gap-4 py-10  w-full xl:w-[50%]'>
          <h2>{product.name}</h2>
          <span>{product.slug}</span>
          <span className='flex items-center gap-2 py-6'>
            <ins className='text-4xl font-bold no-underline'>
              ${product.price}
            </ins>
            <del>${product.regular_price}</del>
          </span>
          <button className='btn btn-primary'>Agregar al carrito</button>
          <a
            href={whatsappUrl}
            className='px-2 py-4 font-medium text-center text-white transition-colors duration-200 bg-green-600 rounded hover:bg-green-700'
            target='_blank'
          >
            Consultar por WhatsApp
          </a>
          <div className='divider' />
          <div className='flex flex-col items-center gap-10 xl:flex-row '>
            <h4>Categoria(s)</h4>
            <ul className='flex gap-4 text-sm text-center'>
              {product.categories.map((category) => (
                <li
                  key={category.id}
                  className='px-2 py-1 border-2 border-solid rounded border-zinc-500'
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col items-center gap-10 xl:flex-row'>
            <h4>Marca(s)</h4>
            <ul className='flex gap-4 text-sm text-center'>
              {product.tags.map((marca) => (
                <li
                  key={marca.id}
                  className='px-2 py-1 border-2 border-solid rounded border-zinc-500'
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
        <div className='grid w-full gap-4 grid-cols-auto-fill-20rem'>
          {product.related_ids.map((id) => (
            <RelatedProductCard idProduct={id} key={id} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductBySlug
