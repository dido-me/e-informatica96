'use client'
import { ProductCard } from '@app/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Product } from '@src/models/product'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'

export function ListHorizontalProducts ({ products }: { products: Product[] }) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={40}
      freeMode
      className='w-full h-[36rem]'
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        300: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      }}
    >
      {products.map((product) => (
        <SwiperSlide className='h-full' key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
