import { Payment } from '@src/models/payment'
import { ReactNode, createContext } from 'react'

export const PaymentsContext = createContext<Payment[]>([])

export function PaymentsProvider ({ children, dataPayment }:{children: ReactNode, dataPayment: Payment[]}) {
  return (
    <PaymentsContext.Provider value={dataPayment}>
      {children}
    </PaymentsContext.Provider>
  )
}
