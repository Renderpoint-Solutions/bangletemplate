import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { getProductBySlug, getProducts } from "@/lib/repositories/product-repository"
import { getSiteSettings } from "@/lib/repositories/site-repository"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const product = await getProductBySlug(resolvedParams.slug)
  
  if (!product) {
    return { title: "Product Not Found | Valayal Aura" }
  }
  
  return {
    title: `${product.name} | Valayal Aura Glass Bangles`,
    description: product.shortDescription,
  }
}

// Generate static pages at build time
export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params
  const product = await getProductBySlug(resolvedParams.slug)
  const settings = await getSiteSettings()

  if (!product) {
    notFound()
  }

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <Link 
          href="/collection"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brown-soft hover:text-brown mb-10 transition-colors group"
        >
          <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Collection
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} settings={settings} />
        </div>
      </div>
    </div>
  )
}
