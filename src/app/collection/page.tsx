import { Metadata } from "next"
import { getProducts } from "@/lib/repositories/product-repository"
import { getCategories } from "@/lib/repositories/category-repository"
import { CollectionClient } from "@/components/collection/collection-client"

export const metadata: Metadata = {
  title: "Collection | Valayal Aura",
  description: "Browse our collection of premium glass bangles. Find the perfect colours and designs to style your aura.",
}

export default async function CollectionPage() {
  const [initialProducts, categories] = await Promise.all([
    getProducts({ sort: "featured" }),
    getCategories()
  ])

  // Extract unique colors for the filter sidebar
  const availableColors = Array.from(
    new Set(initialProducts.flatMap(p => p.colors))
  ).sort()

  return (
    <div className="bg-cream min-h-screen">
      <CollectionClient 
        initialProducts={initialProducts} 
        categories={categories}
        availableColors={availableColors}
      />
    </div>
  )
}
