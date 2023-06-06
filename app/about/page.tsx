import Link from 'next/link'

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
