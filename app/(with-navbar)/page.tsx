import {
  BrandGroup,
  Carousel,
  GroupDestacadosProducts,
  GroupNewsProducts,
  GroupOfertasProducts,
  PromoCards
} from '@app/components'

export const dynamic = 'force-dynamic'

export const metadata = {
  title:
    'Ecommerce | Informatica 96 | Alquiler y Venta de Server Switch Transceiver Computadora | Importador y Distribuidor'
}

export default async function Home () {
  return (
    <>
      <main className='relative'>
        <Carousel />
        <PromoCards />
        <GroupOfertasProducts />
        <GroupDestacadosProducts />
        <GroupNewsProducts />
        <BrandGroup />
      </main>
    </>
  )
}
