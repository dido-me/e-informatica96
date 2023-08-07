import '@app/globals.css'
import type { ReactNode } from 'react'
import {
  AsideCategories,
  AsideShopping,
  Footer,
  HeaderBanner,
  Navbar,
  WhatsAppChatButton
} from '@app/components'
import { Metadata } from 'next'
import { keywords } from '@src/utilities'
import { getCategories } from '@src/services'
import { ParentCategory } from '@src/models/category'

export const metadata: Metadata = {
  title: {
    template:
      '%s | Informatica 96 | Alquiler y Venta de Server Switch Transceiver Computadora | Importador y Distribuidor',
    default:
      'Informatica 96 | Alquiler y Venta de Server Switch Transceiver Computadora | Importador y Distribuidor'
  },
  description:
    'Computadora Firewall Blade Servidor Storage Switch Cisco DELL EMC Fortinet 3PAR HP IBM Lenovo Huawei Juniper Oracle #Cisco #HP #DELL #Lenovo #Switch #Servidor #Server #AccesPoint #Transceiver Google #Google',
  keywords
}

export default async function RootLayout ({ children }: { children: ReactNode }) {
  const dataCategories: ParentCategory[] = await getCategories()

  return (
    <>
      <HeaderBanner />
      <Navbar categories={dataCategories} />
      {children}
      <AsideCategories categories={dataCategories} />
      <AsideShopping />
      <WhatsAppChatButton />
      <Footer />
    </>
  )
}
