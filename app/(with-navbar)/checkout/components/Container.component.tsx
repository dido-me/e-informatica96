'use client'

import { useCart } from '@src/hooks'
import TableCheckOut from './Table.compenent'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Card from './Card.component'

function Container () {
  const [isClient, setIsClient] = useState(false)
  const { cart } = useCart()

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div role='status' className='w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
        </div>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <h1 className='text-2xl font-bold text-center text-gray-400'>
          No hay productos en el carrito
        </h1>
        <Link href='/' className='btn btn-primary'>
          Ir a comprar
        </Link>
      </div>
    )
  }

  return (
    <>
      <section className='w-full xl:w-8/12'>
        <TableCheckOut />
      </section>
      <section className='w-full xl:w-4/12'>
        <Card />
      </section>
    </>
  )
}

export default Container
