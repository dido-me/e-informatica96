/* eslint-disable @next/next/no-img-element */
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Carousel () {
  const images = ['banner1.png', 'banner2.png', 'banner3.png']

  return (
    <section className='flex justify-center w-full my-10'>
      <Swiper
        navigation
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{
          clickable: true
        }}
        className='w-11/12 '
        autoplay={{ delay: 5000 }}

      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={`/carousel-home/${image}`} alt='banner1' width={1512} height={408} className='object-cover w-full' />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Carousel
