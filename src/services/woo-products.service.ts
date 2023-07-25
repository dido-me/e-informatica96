
import { Product } from '@src/models/product'
import { authHeader } from '@src/utilities'

export async function getProducts ({ page }:{page:string}) {
  try {
    const response = await fetch(
      `${process.env.WOOBASEURL}/products?per_page=16&page=${page}`,
      {
        headers: {
          Authorization: authHeader
        },
        next: {
          revalidate: 20
        }
      }
    )

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`)
      return {
        products: [] as Product[],
        pages: 0
      }
    }

    const totalPages = response.headers.get('x-wp-totalpages')
    const data = await response.json()

    // Provicional para la version 1.0 beta
    const filteredProducts = data.filter((product: Product) =>
      !product.categories.some(category => category.id === 287)
    )

    return {
      products: filteredProducts as Product[],
      pages: parseInt(totalPages as string)
    }
  } catch (error) {
    console.error(error)

    return {
      products: [] as Product[],
      pages: -1
    }
  }
}

export async function getProductBySlug ({ slug }:{slug:string}) {
  try {
    const response = await fetch(
      `${process.env.WOOBASEURL}/products?slug=${slug}`,
      {
        headers: {
          Authorization: authHeader
        },
        next: {
          revalidate: 20
        }
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return data[0] as Product
  } catch (error) {
    console.error(error)
    return {} as Product
  }
}

export async function getProductById ({ idProduct }:{idProduct:number}) {
  try {
    const response = await fetch(
      `${process.env.WOOBASEURL}/products/${idProduct}`,
      {
        headers: {
          Authorization: authHeader
        },
        next: {
          revalidate: 20
        }
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return data as Product
  } catch (error) {
    console.error(error)
    return {} as Product
  }
}

export async function getProductBySKU ({ sku }:{sku:string}) {
  try {
    const response = await fetch(
      `${process.env.WOOBASEURL}/products?sku=${sku}`,
      {
        headers: {
          Authorization: authHeader
        },
        next: {
          revalidate: 20
        }
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return data[0] as Product
  } catch (error) {
    console.error(error)
    return {} as Product
  }
}
