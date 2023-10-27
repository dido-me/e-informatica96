import { FormEvent, useContext } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Card from './Card.component'
import FormComprador from './FormComprador.component'
import { useCart } from '@src/hooks'
import { LoadingContext } from '../contexts/loading.contex'

export default function FormMain () {
  const { cart, resetProducts } = useCart()
  const MySwal = withReactContent(Swal)

  const { setLoading } = useContext(LoadingContext)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const {
      clientName,
      clientApellido,
      clientEmail,
      clientPhone,
      clientAddress,
      clientDistrict,
      clientDepartment,
      clientCompany,
      clientPayment
    } = e.target as HTMLFormElement

    const res = await fetch('/api/order', {
      method: 'POST',
      body: JSON.stringify({
        clientName: clientName.value,
        clientApellido: clientApellido.value,
        clientEmail: clientEmail.value,
        clientPhone: clientPhone.value,
        clientAddress: clientAddress.value,
        clientDistrict: clientDistrict.value,
        clientDepartment: clientDepartment.value,
        clientCompany: clientCompany.value,
        clientPayment: clientPayment.value,
        cart
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()

    if (data.status === 200) {
      MySwal.fire({
        title: 'El pedido se realizo con exito',
        text: `El numero de seguimiento es: #${data.orderId}, igual se le envio un correo con la informacion.`,
        icon: 'success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }).then(() => {
        resetProducts()
      })
    } else {
      MySwal.fire({
        title: 'Error',
        text: data.body.message,
        icon: 'error',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
  }
  return (
    <form
      className='flex flex-col w-11/12 gap-8 m-auto my-10 xl:flex-row'
      onSubmit={onSubmit}
    >
      <section className='w-full xl:w-8/12'>
        <FormComprador />
      </section>
      <section className='w-full xl:w-4/12'>
        <Card />
      </section>
    </form>
  )
}
