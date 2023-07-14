'use client'
import { BsWhatsapp } from 'react-icons/bs'

function WhatsAppChatButton () {
  return (
    <a
      className='fixed p-2 text-white transition-colors duration-200 bg-green-600 rounded-full shadow-lg bottom-4 left-4 hover:bg-green-700'
      aria-label='Contactar por WhatsApp'
      target='_blank'
      href={`${process.env.NEXT_PUBLIC_WHATSAPP_LINK}&text=Hola%20Informatica96%20Quiero%20saber%20mas%20sobre%20sus%20productos`}
    >
      <BsWhatsapp size={40} />
    </a>
  )
}

export default WhatsAppChatButton
