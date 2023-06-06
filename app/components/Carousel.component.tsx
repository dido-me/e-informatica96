'use client'

import { useState } from 'react'
import Image from 'next/image'

function Carousel () {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ['banner1.png', 'banner2.png', 'banner3.png']

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    )
  }

  const previousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    )
  }

  return (
    <section className='w-full flex justify-center my-10'>
      <div className='carousel w-[95vw] rounded-lg'>
        <div id='slide1' className='carousel-item relative w-full'>
          <Image
            src={`/carousel-home/${images[currentImage]}`}
            alt={images[currentImage]}
            className='w-full'
            width={1512}
            height={408}
            priority
          />
          <div
            className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2
          '
          >
            <button
              className='btn btn-ghost xl:btn-active btn-circle'
              onClick={previousImage}
            >
              ❮
            </button>
            <button
              className='btn btn-ghost xl:btn-active btn-circle'
              onClick={nextImage}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel
