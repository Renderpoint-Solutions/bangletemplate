import { Product, ProductFilters } from "@/types/product"
import { products } from "@/data/products"

// In a real CMS implementation (e.g., Sanity), these would be GROQ queries
// fetching from the Sanity client. For now, they use local mock data.

export async function getProducts(filters?: ProductFilters): Promise<Product[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  let result = [...products]

  if (filters) {
    if (filters.category && filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category)
    }
    
    if (filters.color) {
      result = result.filter((p) => p.colors.some(c => c.toLowerCase() === filters.color?.toLowerCase()))
    }

    if (filters.availability) {
      result = result.filter((p) => p.availability === filters.availability)
    }

    if (filters.search) {
      const query = filters.search.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.colors.some(c => c.toLowerCase().includes(query))
      )
    }

    if (filters.sort) {
      switch (filters.sort) {
        case "newest":
          result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          break
        case "name-asc":
          result.sort((a, b) => a.name.localeCompare(b.name))
          break
        case "name-desc":
          result.sort((a, b) => b.name.localeCompare(a.name))
          break
        case "featured":
        default:
          result.sort((a, b) => {
            if (a.featured === b.featured) return a.sortOrder - b.sortOrder
            return a.featured ? -1 : 1
          })
          break
      }
    }
  }

  return result
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 50))
  return products.find((p) => p.slug === slug) || null
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 50))
  return products.filter((p) => p.featured).sort((a, b) => a.sortOrder - b.sortOrder)
}
