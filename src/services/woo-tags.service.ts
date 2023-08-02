import { authHeader } from '@src/utilities'

export async function getTags () {
  try {
    const response = await fetch(
          `${process.env.WOOBASEURL}/products/tags?per_page=100`,
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

    return data
  } catch (err) {
    console.error(err)
    return []
  }
}
