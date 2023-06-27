'use client'
import { Image as ImageProps } from '@src/models/product'
import Image from 'next/image'
import Carousel from 'nuka-carousel'

function CarouselProduct ({
  images,
  nameProduct
}: {
  images: ImageProps[]
  nameProduct: string
}) {
  return (
    <Carousel>
      {images.map((image: ImageProps) => (
        <Image
          key={image.id}
          src={image.src}
          alt={nameProduct}
          width={800}
          height={800}
          className='w-full h-auto object-cover rounded'
          priority
        />
      ))}
    </Carousel>
  )
}

export default CarouselProduct
