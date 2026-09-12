export interface Product {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  category: string
  colors: string[]
  images: string[]
  featured: boolean
  isNew: boolean
  price?: number
  availability: "in-stock" | "made-to-order" | "out-of-stock"
  sortOrder: number
  createdAt: string
}

export type ProductAvailability = Product["availability"]

export interface ProductFilters {
  category?: string
  color?: string
  availability?: ProductAvailability
  search?: string
  sort?: "featured" | "newest" | "name-asc" | "name-desc"
}
