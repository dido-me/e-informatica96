export const formartNumber = (number: string) => number.replace(/(\d{3})(?=\d)/g, '$1 ')
