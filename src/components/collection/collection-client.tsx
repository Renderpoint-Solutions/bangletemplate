"use client"

import { useState, useEffect, useTransition } from "react"
import { Product, ProductFilters } from "@/types/product"
import { Category } from "@/types/category"
import { getProducts } from "@/lib/repositories/product-repository"
import { ProductCard } from "@/components/collection/product-card"
import { CategoryFilter } from "@/components/collection/category-filter"
import { SearchBar } from "@/components/collection/search-bar"
import { FilterSidebar } from "@/components/collection/filter-sidebar"
import { SectionHeading } from "@/components/ui/section-heading"
import { SlidersHorizontal } from "lucide-react"

interface CollectionClientProps {
  initialProducts: Product[]
  categories: Category[]
  availableColors: string[]
}

export function CollectionClient({ initialProducts, categories, availableColors }: CollectionClientProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [filters, setFilters] = useState<ProductFilters>({ sort: "featured" })
  const [isPending, startTransition] = useTransition()
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  // Update products when filters change
  useEffect(() => {
    startTransition(async () => {
      const filteredProducts = await getProducts(filters)
      setProducts(filteredProducts)
    })
  }, [filters])

  const handleFilterChange = (newFilters: Partial<ProductFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  return (
    <div className="container mx-auto px-6 max-w-7xl py-12">
      <SectionHeading 
        eyebrow="Glass Bangle Collection"
        title="Find Your Aura"
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <CategoryFilter 
          categories={categories}
          activeCategory={filters.category || "all"}
          onCategoryChange={(cat) => handleFilterChange({ category: cat === "all" ? undefined : cat })}
        />
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <SearchBar 
            value={filters.search || ""}
            onChange={(search) => handleFilterChange({ search: search || undefined })}
          />
          <button 
            className="md:hidden p-2 border border-line-dark rounded flex items-center justify-center text-brown"
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          >
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className={`md:block ${mobileFilterOpen ? 'block mb-8' : 'hidden'}`}>
           <FilterSidebar 
            filters={filters}
            onFilterChange={handleFilterChange}
            colors={availableColors}
          />
        </div>

        <div className="flex-grow">
          {isPending ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-50">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-cream-light border border-line-light">
              <p className="font-cormorant text-2xl text-brown mb-2">No products found</p>
              <p className="text-brown-soft text-sm">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => setFilters({ sort: "featured" })}
                className="mt-6 text-xs uppercase tracking-widest text-brown underline underline-offset-4 hover:text-gold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
