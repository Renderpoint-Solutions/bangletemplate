import { Category } from "@/types/category"
import { categories } from "@/data/categories"

export async function getCategories(): Promise<Category[]> {
  await new Promise((resolve) => setTimeout(resolve, 50))
  return [...categories].sort((a, b) => a.sortOrder - b.sortOrder)
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  await new Promise((resolve) => setTimeout(resolve, 50))
  return categories.find((c) => c.slug === slug) || null
}
