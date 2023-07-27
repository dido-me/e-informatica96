/* eslint-disable @next/next/no-img-element */
export function PromoCards () {
  return (
    <section className='grid w-11/12 gap-4 m-auto mb-10 grid-cols-auto-fill-37rem'>
      <article className='flex items-center justify-center gap-16 px-4 py-6 text-white bg-green-600 rounded'>
        <img src='/promo-home/img1.png' alt='envios-peru' />
        <main className='flex flex-col gap-3 text-center'>
          <h2 className='text-xl font-bold'>Envíos a todo el Perú</h2>
          <p className='text-sm font-light'>¡Llevamos a cada rincón del Perú! Tu compra, nuestra prioridad</p>
        </main>
      </article>

      <article className='flex items-center justify-center gap-16 px-4 py-6 text-white bg-blue-600 rounded'>
        <img src='/promo-home/img2.png' alt='escudo' />
        <main className='flex flex-col gap-3 overflow-hidden text-center'>
          <h2 className='text-xl font-bold'>Garantía 100% confiable</h2>
          <p className='text-sm font-light'>Tu tranquilidad, nuestra garantía. ¡Confiabilidad total en cada compra!</p>
        </main>
      </article>

    </section>
  )
}
