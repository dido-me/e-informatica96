import { CheckOutProvider } from '@src/contexts'
import { ReactNode } from 'react'
import { HeaderCheckout } from './components'

export default function CheckOutLayout ({ children }: { children: ReactNode }) {
  return (
    <main className='w-full'>
      <CheckOutProvider>
        <HeaderCheckout />
        {children}
      </CheckOutProvider>
    </main>
  )
}
