export interface CollectionProduct {
  href: string
}

export interface Category {
  id: number
  name: string
  slug: string
}

export interface Dimensions {
  length: string
  width: string
  height: string
}

export interface Image {
  id: number
  date_created: Date
  date_created_gmt: Date
  date_modified: Date
  date_modified_gmt: Date
  src: string
  name: string
  alt: string
}

export interface MetaDatum {
  id: number
  key: string
  value: string
}

export interface Links {
  self: CollectionProduct[]
  collection: CollectionProduct[]
}

export interface Downloads {
    id: string
    key: string
    file: string
}

export interface Product {
  id: number
  name: string
  slug: string
  permalink: string
  date_created: Date
  date_created_gmt: Date
  date_modified: Date
  date_modified_gmt: Date
  type: string
  status: string
  featured: boolean
  catalog_visibility: string
  description: string
  short_description: string
  sku: string
  price: string
  regular_price: string
  sale_price: string
  date_on_sale_from: null
  date_on_sale_from_gmt: null
  date_on_sale_to: null
  date_on_sale_to_gmt: null
  on_sale: boolean
  purchasable: boolean
  total_sales: number
  virtual: boolean
  downloadable: boolean
  downloads: Downloads[]
  download_limit: number
  download_expiry: number
  external_url: string
  button_text: string
  tax_status: string
  tax_class: string
  manage_stock: boolean
  stock_quantity: null
  backorders: string
  backorders_allowed: boolean
  backordered: boolean
  low_stock_amount: null
  sold_individually: boolean
  weight: string
  dimensions: Dimensions
  shipping_required: boolean
  shipping_taxable: boolean
  shipping_class: string
  shipping_class_id: number
  reviews_allowed: boolean
  average_rating: string
  rating_count: number
  upsell_ids: any[]
  cross_sell_ids: any[]
  parent_id: number
  purchase_note: string
  categories: Category[]
  tags: Category[]
  images: Image[]
  attributes: any[]
  default_attributes: any[]
  variations: any[]
  grouped_products: any[]
  menu_order: number
  price_html: string
  related_ids: number[]
  meta_data: MetaDatum[]
  stock_status: string
  has_options: boolean
  _links: Links
}

export interface ProductModelWithQuantity extends Product {
  quantity: number
}
