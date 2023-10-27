'use client'
import { useCart } from '@src/hooks'
import { redirect } from 'next/navigation'
import { Payment } from '@src/models/payment'
import { PaymentsProvider } from '../contexts/payments.contex'
import { LoadingProvider } from '../contexts/loading.contex'
import FormMain from './FormMain.component'

function Container ({ dataPayment }: { dataPayment: Payment[] }) {
  const { cart } = useCart()

  if (cart.length === 0) {
    redirect('/')
  }

  return (
    <PaymentsProvider dataPayment={dataPayment}>
      <LoadingProvider>
        <FormMain />
      </LoadingProvider>
    </PaymentsProvider>
  )
}

export default Container
