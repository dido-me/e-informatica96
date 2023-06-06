import { Carousel, GroupCollapse } from '@app/components'
import Image from 'next/image'

export default function Home () {
  return (
    <main className='relative  '>
      <Carousel />
      <section className='flex'>
        <div className='w-[28rem] h-[85vh] sticky top-[15vh] pt-8   dark:bg-[#0C1F34] dark:shadow-[#1a2332] bg-zinc-100 rounded-tr-lg'>
          <GroupCollapse />
        </div>
        <div className='w-full  px-8 py-6 dark:bg-[#0A101A]  '>
          <div className='w-full grid grid-cols-auto-fill-20rem gap-4'>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
            <article className='dark:bg-[#0C1F34] bg-zinc-100 rounded drop-shadow-md py-5 px-3 flex flex-col items-center gap-6'>
              <div className='w-full relative'>
                <span className='absolute top-0 right-0 mr-3 mt-3 px-2 py-1 rounded bg-[#C18D21] text-slate-50'>
                  20%
                </span>
                <Image
                  src='https://woo.informatica96.com/wp-content/uploads/2023/06/2481.jpg'
                  alt='producto'
                  width={225}
                  height={146}
                  className='w-full h-52 object-cover rounded'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>$ 560.00 - Inc. IGV</h2>
                <p className='text-sm'>
                  DELL DISCO DURO SERVIDOR POWERDGE 8TB SAS 12G 3.5” 044YFV
                </p>
              </div>
              <button className='btn w-fit flex gap-2 items-center'>
                <span className='text-xs'>Agregar al carrito</span>
              </button>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
