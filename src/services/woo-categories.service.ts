import { authHeader } from '@src/utilities'
import { ParentCategory } from '@src/models/category'

export async function getCategories () {
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
