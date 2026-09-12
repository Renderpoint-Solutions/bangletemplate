import { getSiteSettings } from "@/lib/repositories/site-repository"
import { getFeaturedProducts } from "@/lib/repositories/product-repository"
import { HeroSection } from "@/components/home/hero-section"
import { BrandValues } from "@/components/home/brand-values"
import { FeaturedCollection } from "@/components/home/featured-collection"
import { BrandStory } from "@/components/home/brand-story"
import { CtaSection } from "@/components/home/cta-section"

export default async function Home() {
  const settings = await getSiteSettings()
  // Get 4 featured products for the home page
  const featuredProducts = (await getFeaturedProducts()).slice(0, 4)

  return (
    <>
      <HeroSection settings={settings} />
      <BrandValues />
      <FeaturedCollection products={featuredProducts} />
      <BrandStory />
      <CtaSection settings={settings} />
    </>
  )
}
