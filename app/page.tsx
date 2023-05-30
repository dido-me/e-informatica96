import Image from 'next/image'

export default function Home () {
  return (
    <main>
      <section className='w-full flex justify-center'>
        <div className='carousel w-[95vw] rounded-lg'>
          <div id='slide1' className='carousel-item relative w-full'>
            <Image
              src='/carousel-home/slide1.png'
              alt='Slide1'
              width={1120}
              height={400}
              style={{ objectFit: 'contain', width: '100vw' }}
            />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide4' className='btn btn-circle'>
                ❮
              </a>
              <a href='#slide2' className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
          <div id='slide2' className='carousel-item relative w-full'>
            <Image
              src='/carousel-home/slide2.png'
              alt='Slide2'
              width={1120}
              height={400}
              style={{ objectFit: 'cover', width: '100vw' }}
            />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide1' className='btn btn-circle '>
                ❮
              </a>
              <a href='#slide3' className='btn btn-circle '>
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
      <h1>Hola</h1>
    </main>
  )
}
