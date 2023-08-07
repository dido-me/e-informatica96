/* eslint-disable new-cap */
'use client'
import { useCart } from '@src/hooks'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export function PrintButton () {
  const { cart } = useCart()

  const UUIDProform = crypto.randomUUID()

  const totalPrices = cart.reduce(
    (acc, product) => acc + parseInt(product.price) * product.quantity,
    0
  )

  const productsPDF = cart.map((product) => [
    product.name,
    product.price,
    product.quantity,
    parseInt(product.price) * product.quantity
  ])

  const generatePDF = () => {
    const doc = new jsPDF()

    autoTable(doc, {
      head: [['Producto', 'Precio', 'Cantidad', 'Total']],
      body: productsPDF,
      foot: [['', '', 'Total', `$${totalPrices}`]]
    })

    doc.save(`proforma-${UUIDProform}.pdf`)
  }

  return (
    <button className='w-full btn btn-info' onClick={generatePDF}>
      Imprimir Cotización
    </button>
  )
}
