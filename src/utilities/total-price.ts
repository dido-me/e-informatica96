import { ProductModelWithQuantity } from '@src/models/product'

export function calculateTotalPrice (cart: ProductModelWithQuantity[]) {
  const totalPrice = cart.reduce((acc, product) => {
    return acc + parseInt(product.price) * product.quantity
  }, 0)

  return totalPrice
}

export function formatPrice (price: string | number): string {
  let processedPrice = price

  if (typeof price === 'string') {
    if (price.includes(',') && price.includes('.')) {
      processedPrice = price.replace(/,/g, '')
    } else if (price.includes(',') && !price.includes('.')) {
      processedPrice = price.replace(',', '.')
    }
  }

  const numberPrice = parseFloat(String(processedPrice))

  if (isNaN(numberPrice)) {
    return String(price)
  }

  return `$${numberPrice.toFixed(2)}`
}
