'use client'

import { ReactNode, createContext, useState } from 'react'

type CheckOutContextType = {
  step: number
  changeStep: (step: number) => void
}

export const CheckOutContext = createContext<CheckOutContextType >({} as CheckOutContextType)

export function CheckOutProvider ({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1)

  const changeStep = (step: number) => {
    setStep(step)
  }

  return (
    <CheckOutContext.Provider value={{ step, changeStep }}>
      {children}
    </CheckOutContext.Provider>
  )
}
