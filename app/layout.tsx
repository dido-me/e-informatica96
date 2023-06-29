import '@app/globals.css'
import { Metadata } from 'next'
import type { ReactNode } from 'react'
import { CookieBanner, GoogleAnalytics } from '@app/components'

export const metadata: Metadata = {
  title: {
    template: '%s | Informatica 96',
    default:
      'Informatica 96 | Alquiler y Venta de Server Switch Transceiver Computadora | Importador y Distribuidor'
  },
  description:
    'Computadora Firewall Blade Servidor Storage Switch Cisco DELL EMC Fortinet 3PAR HP IBM Lenovo Huawei Juniper Oracle #Cisco #HP #DELL #Lenovo #Switch #Servidor #Server #AccesPoint #Transceiver Google #Google',
  keywords: ['Computadora', 'Servidor', 'Switch', 'Transceiver', 'Cisco']
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='es' id='__next'>
      <GoogleAnalytics
        GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''}
      />
      <body className='dark:bg-[#0A101A] min-h-screen'>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
