import Link from "next/link"
import { Product } from "@/types/product"
import { ProductCard } from "@/components/collection/product-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"

interface FeaturedCollectionProps {
  products: Product[]
}

export function FeaturedCollection({ products }: FeaturedCollectionProps) {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          eyebrow="Glass Bangle Collection"
          title="Colour Your Style"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mt-12 mb-16">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              priority={index < 2} // Prioritize loading first two images
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/collection">View Full Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
