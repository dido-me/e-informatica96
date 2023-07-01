import { SVG503 } from '@src/svgs'

function PAGE503 () {
  return (
    <main className='grid min-h-screen place-items-center'>
      <div className='flex flex-col items-center gap-8'>
        <SVG503 className='w-[20rem] xl:w-[40rem]' />
        <h3 className='text-center '>
          Estamos en mantenimiento, por ahora puedes contactarme por WhatsApp 😁
        </h3>
        <a
          href={`${process.env.NEXT_PUBLIC_WHATSAPP_LINK}&text=Hola%20Informatica96%20Quiero%20saber%20mas%20sobre%20sus%20productos`}
          target='_blank'
          className='px-2 py-4 font-medium text-center text-white transition-colors duration-200 bg-green-600 rounded hover:bg-green-700'
        >
          Contáctame
        </a>
      </div>
    </main>
  )
}

export default PAGE503
