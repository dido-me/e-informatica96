export interface Collection {
  href: string
}

export interface Links {
  self: Collection[]
  collection: Collection[]
}

export interface ChildrenCategory {
  id: number
  name: string
  slug: string
  parent: number
  description: string
  display: string
  image: null
  menu_order: number
  count: number
  _links: Links
}

export interface ParentCategory {
  id: number
  name: string
  slug: string
  parent: number
  description: string
  display: string
  image: null
  menu_order: number
  count: number
  _links: Links
  childrens: ChildrenCategory[]
}
