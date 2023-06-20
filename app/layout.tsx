import './globals.css'
import type { ReactNode } from 'react'
import { AsideShopping, NavbarDesktop, NavbarMobile, ShoppingButton } from './components'

export const metadata = {
  title:
    'Informartico96 - Venta de Servidores, Computadoras, Laptops, Impresoras, Accesorios y más',
  description:
    'Computadora Firewall Blade Servidor Storage Switch Cisco DELL EMC Fortinet 3PAR HP IBM Lenovo Huawei Juniper Oracle #Cisco #HP #DELL #Lenovo #Switch #Servidor #Server #AccesPoint #Transceiver Google #Google'
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <body className='dark:bg-[#0A101A]' id='__next'>
        <NavbarDesktop />
        {children}
        <ShoppingButton />
        <AsideShopping />
        <NavbarMobile />
      </body>
    </html>
  )
}
