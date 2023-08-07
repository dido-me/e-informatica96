export async function PagoCard () {
  return (
    <div
      className='flex flex-col gap-8 px-6 py-8 rounded-lg bg-inf-secondary'
      style={{ boxShadow: 'var(--shadow-elevation-medium)' }}
    >
      <h3 className='flex items-center gap-4 font-bold'>
        <span className='px-2 py-1 rounded-full text-inf-primary bg-inf-quaternary'>
          2
        </span>
        <span className='text-white'>Pago</span>
      </h3>
    </div>
  )
}
