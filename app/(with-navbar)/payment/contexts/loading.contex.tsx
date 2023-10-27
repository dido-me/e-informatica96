
import { ReactNode, createContext, useState } from 'react'

interface LoadingContextProps {
    loading: boolean
    setLoading: (loading: boolean) => void
    }

export const LoadingContext = createContext<LoadingContextProps>({} as LoadingContextProps)

export function LoadingProvider ({ children }:{children: ReactNode}) {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}
