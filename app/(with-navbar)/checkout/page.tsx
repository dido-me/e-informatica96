
export default function CheckOutPage () {
  return (
    <main className='flex w-11/12 m-auto mt-10'>
      <div className='flex-1 px-10 pb-10'>
        <div className='w-full card text-primary-content bg-inf-tertiary'>
          <div className='card-body'>
            <h2 className='mb-5 card-title'>
              <span className='px-2 py-1 rounded-full bg-inf-quaternary text-inf-primary'>
                1
              </span>
              <span>Información de Contacto</span>
            </h2>
            <p className='text-xs'>
              Solicitamos únicamente la información esencial para la
              finalización de la compra.
            </p>
            <div className='justify-end card-actions'>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1 border border-inf-quaternary' />
    </main>
  )
}
