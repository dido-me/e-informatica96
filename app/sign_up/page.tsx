import Link from 'next/link'

function SIGNUP () {
  return (
    <main className='grid w-full min-h-screen place-items-center'>
      <div className='flex flex-col items-center gap-6 px-5 py-10 rounded' style={{ boxShadow: 'var(--shadow-elevation-medium)' }}>
        <Link
          href='/'
          className={'btn btn-ghost w-48 xl:w-72 bg-[url("/bases/logo-black.png")] dark:bg-[url("/bases/logo-white.png")]  bg-no-repeat bg-contain '}
        />
        <h3>Crea una cuenta con aqui</h3>
        <form className='flex flex-col gap-2'>
          <input type='email' placeholder='Correo' className='w-full max-w-xs input input-bordered' />
          <input type='password' placeholder='Contraseña' className='w-full max-w-xs input input-bordered' />
          <button type='submit'>Registrarse</button>
        </form>
        <div className='divider'>O</div>
        <button>Registrarse con Google</button>
        <div className='divider' />
        <span>¿Ya tines una cuenta? <Link href='/sign_in'>Inicia sesión</Link></span>
      </div>
    </main>
  )
}

export default SIGNUP
