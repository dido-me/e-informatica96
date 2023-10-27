import { useContext, useState } from 'react'
import { PaymentsContext } from '../contexts/payments.contex'

function ListMetPayment () {
  const listPayment = useContext(PaymentsContext)

  const [option, setOption] = useState('')

  return (
    <div className='flex flex-col gap-4 py-6'>
      <h4>Metodo de pago:</h4>
      <div className='flex flex-col gap-4'>
        {listPayment.map((item) => (
          <div
            className='flex flex-col items-start justify-start gap-2'
            key={item.id}
          >
            <div className='flex gap-4'>
              <input
                type='radio'
                name='clientPayment'
                id={item.id}
                value={item.id}
                checked={option === item.id}
                onChange={(e) => setOption(e.target.value)}
                required
              />
              <label htmlFor={item.id}>{item.title}</label>
            </div>
            <p className={`px-2 py-4 bg-yellow-600 ${option === item.id ? 'block' : 'hidden'}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListMetPayment
