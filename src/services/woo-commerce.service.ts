import { ParentCategory } from '@src/models/category'
import { Product } from '@src/models/product'

const authHeader =
  'Basic ' + btoa(process.env.WOOUSERAPIKEY + ':' + process.env.WOOPASSAPIKEY)

export async function getCategorys () {
  try {
    const response = await fetch(
      `${process.env.WOOBASEURL}/products/categories?parent=0&per_page=100`,
      {
        headers: {
          Authorization: authHeader
        },
        next: {
          revalidate: 20
        }
      }
    )

    const data = await response.json()

    const allCategorys = await Promise.all(
      data.map(async (parent: ParentCategory) => {
        const res = await fetch(
          `${process.env.WOOBASEURL}/products/categories?parent=${parent.id}&per_page=100`,
          {
            headers: {
              Authorization: authHeader
            },
            next: {
              revalidate: 20
            }
          }
        )

        const childrens = await res.json()

        return {
          ...parent,
          childrens
        }
      })
    )

    return allCategorys
  } catch (err) {
    console.error(err)
    return [] as ParentCategory[]
  }
}

export async function getProducts ({ page }:{page:string}) {
  try {
    const response = await fetch(
      `${process.env.WOOBASEURL}/products?per_page=18&page=${page}`,
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

    const totalPages = response.headers.get('x-wp-totalpages')

    const data = await response.json()

    return {
      products: data as Product[],
      pages: parseInt(totalPages as string)
    }
  } catch (error) {
    console.error(error)
    return {
      products: [] as Product[],
      pages: 0
    }
  }
}
