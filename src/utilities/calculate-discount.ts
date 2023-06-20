export const calculateDiscount = (
  regularPrice: string,
  descontPrice: string
): number => {
  const newDescontPrice = descontPrice === '' ? 0 : parseInt(descontPrice)
  const newRegularPrice = parseInt(regularPrice)

  return Math.floor(
    ((newRegularPrice - newDescontPrice) / newRegularPrice) * 100
  )
}
