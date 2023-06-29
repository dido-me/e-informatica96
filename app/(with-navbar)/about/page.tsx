import Link from 'next/link'

export const metadata = {
  title:
    'Nosotros'
}

function page () {
  return (
    <div>
      Hola
      <Link href='/'>
        Home
      </Link>
    </div>
  )
}

export default page
