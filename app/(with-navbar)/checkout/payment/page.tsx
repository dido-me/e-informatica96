'use client'
import { CheckOutContext } from '@src/contexts'
import { useContext, useEffect } from 'react'
import { IdentCard, PagoCard } from './components'

export default function CheckOutPaymentPage () {
  const { changeStep } = useContext(CheckOutContext)

  useEffect(() => {
    changeStep(2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className='flex flex-col w-11/12 m-auto my-10 xl:flex-row'>
      <section className='flex flex-col w-full gap-8 px-4 py-4 xl:w-7/12'>
        <IdentCard />
        <PagoCard />
        <div className='border'>Orden Nota</div>
      </section>
      <section className='w-full px-2 py-4 border xl:w-5/12'>2</section>
    </main>
  )
}
