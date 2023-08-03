import '@app/globals.css'
import { Metadata } from 'next'
import type { ReactNode } from 'react'
import { CookieBanner, GoogleAnalytics } from '@app/components'
import { keywords } from '@src/utilities'

export const metadata: Metadata = {
  title: {
    template: '%s | Informatica 96',
    default:
      'Informatica 96 | Alquiler y Venta de Server Switch Transceiver Computadora | Importador y Distribuidor'
  },
  description:
    'Computadora Firewall Blade Servidor Storage Switch Cisco DELL EMC Fortinet 3PAR HP IBM Lenovo Huawei Juniper Oracle #Cisco #HP #DELL #Lenovo #Switch #Servidor #Server #AccesPoint #Transceiver Google #Google',
  keywords
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <GoogleAnalytics
        GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''}
      />
      <body className='min-h-screen dark:bg-inf-primary' id='__next'>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
