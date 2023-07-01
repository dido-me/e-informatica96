import { SVG404 } from '@src/svgs'
import Link from 'next/link'

export default function NotFound () {
  return (
    <main className='grid min-h-screen place-items-center'>
      <div className='flex flex-col items-center gap-8'>
        <SVG404 className='w-[20rem] xl:w-[40rem]' />
        <Link href='/' className='w-max btn btn-primary'>
          Volver a la pagina principal
        </Link>
      </div>
    </main>
  )
}
