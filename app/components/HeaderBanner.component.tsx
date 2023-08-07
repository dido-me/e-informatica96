import { FaWhatsapp } from 'react-icons/fa'
import { PE as FlagPE } from 'country-flag-icons/react/3x2'
import { formartNumber } from '@src/utilities'

export function HeaderBanner () {
  const numberFormart = formartNumber('974017977')
  return (
    <a
      target='_blank'
      href={`${process.env.NEXT_PUBLIC_WHATSAPP_LINK}&text=Hola%20Informatica96%20Quiero%20saber%20mas%20sobre%20sus%20productos`}
      className='flex justify-center w-full py-4 text-white border-t-2 bg-inf-tertiary border-inf-quaternary'
    >
      <section className='flex flex-wrap items-center justify-center gap-2 sm:gap-8 xl:gap-14 max-w-[90vw]'>
        <ul className='flex items-center justify-center gap-6 px-4 py-1 text-sm font-bold border-2 rounded-md border-inf-quaternary xl:text-2xl grow xl:grow-0'>
          <li>WhatsApp Ventas</li>
          <li>
            <FaWhatsapp className='text-xl xl:text-4xl text-inf-quaternary' />
          </li>
          <li>{numberFormart}</li>
        </ul>
        <h1 className='p-0 m-0 text-xl xl:text-4xl'>
          TE LO LLEVAMOS A TU OFICINA
        </h1>
        <div className='flex gap-4'>
          <FlagPE className='w-8 rounded-lg xl:w-14 ' />
          <div className='flex flex-col text-xs xl:text-sm'>
            <span>Lima</span>
            <span>Peru</span>
          </div>
        </div>
      </section>
    </a>
  )
}
