import '@app/globals.css'
import type { ReactNode } from 'react'
import {
  AsideShopping,
  NavbarDesktop,
  NavbarMobile,
  ShoppingButton,
  WhatsAppChatButton
} from '@app/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template:
      '%s | Informatica 96 | Alquiler y Venta de Server Switch Transceiver Computadora | Importador y Distribuidor',
    default:
      'Informatica 96 | Alquiler y Venta de Server Switch Transceiver Computadora | Importador y Distribuidor'
  },
  description:
    'Computadora Firewall Blade Servidor Storage Switch Cisco DELL EMC Fortinet 3PAR HP IBM Lenovo Huawei Juniper Oracle #Cisco #HP #DELL #Lenovo #Switch #Servidor #Server #AccesPoint #Transceiver Google #Google',
  keywords: ['Computadora', 'Servidor', 'Switch', 'Transceiver', 'Cisco']
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarDesktop />
      {children}
      <ShoppingButton />
      <AsideShopping />
      <NavbarMobile />
      <WhatsAppChatButton />
    </>
  )
}
