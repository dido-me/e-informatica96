import { Product } from '@src/models/product'
import { getProductBySlug } from '@src/services'
import { NextResponse } from 'next/server'

export async function GET (req: Request) {
  const product: Product = await getProductBySlug({
    slug: 'hpe-hp-disco-duro-sas-1tb-7-2k-3-5-6g-653947-001'
  })

  return NextResponse.json(product)
}
