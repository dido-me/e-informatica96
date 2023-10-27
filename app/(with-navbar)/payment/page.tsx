import { authHeader } from '@src/utilities'
import { Payment as PaymentModel } from '@src/models/payment'
import Container from './components/Container.component'

async function getListPayment () {
  const res = await fetch(`${process.env.WOOBASEURL}/payment_gateways`, {
    headers: {
      Authorization: authHeader
    },
    next: {
      revalidate: 20
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: PaymentModel[] = await res.json()

  const payment = data.filter((item) => item.enabled === true)

  return payment
}

async function Payment () {
  const dataPayment = await getListPayment()

  return (
    <main>
      <Container dataPayment={dataPayment} />
    </main>
  )
}

export default Payment
