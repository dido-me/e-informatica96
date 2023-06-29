export interface TaxonomiesHierarchical {
  product_cat: { [key: string]: string[] }
}
export interface Taxonomies {
  product_type: string[]
  product_cat: string[]
  product_tag: string[]
}

export interface PostAuthor {
  user_id: number
  display_name: string
  user_url: string
  user_login: string
}

export interface Thumbnail {
  url: string
  width: number
  height: number
}
export interface Images {
  thumbnail: Thumbnail
}

export interface Hit {
  post_id: number
  post_type: string
  post_type_label: string
  post_title: string
  post_excerpt: string
  post_date: number
  post_date_formatted: string
  post_modified: number
  comment_count: number
  menu_order: number
  post_author: PostAuthor
  images: Images
  permalink: string
  post_mime_type: string
  taxonomies: Taxonomies
  taxonomies_hierarchical: TaxonomiesHierarchical
  is_sticky: number
  content: string
  record_index: number
  objectID: string
}
