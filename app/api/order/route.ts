import { ProductModelWithQuantity } from '@src/models/product'
import { authHeader } from '@src/utilities'
import { NextResponse } from 'next/server'

export async function POST (request: Request) {
  const data = await request.json()

  try {
    const dataWoo = {
      payment_method: data.clientPayment,
      set_paid: true,
      billing: {
        first_name: data.clientName,
        last_name: data.clientApellido,
        company: data.clientCompany,
        address_1: data.clientAddress,
        city: data.clientDepartment,
        state: data.clientDistrict,
        country: 'PE',
        email: data.clientEmail,
        phone: data.clientPhone
      },
      line_items: data.cart.map((item: ProductModelWithQuantity) => {
        return {
          product_id: item.id,
          quantity: item.quantity
        }
      })
    }

    const res = await fetch(`${process.env.WOOBASEURL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader
      },
      body: JSON.stringify(dataWoo)
    })

    const resposeWoo = await res.json()

    return NextResponse.json({
      status: 200,
      orderId: resposeWoo.id,
      body: {
        message: 'Orden creada con éxito'
      }
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      status: 400,
      body: {
        message: 'Error al crear la orden'
      }
    })
  }
}
