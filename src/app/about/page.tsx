import { Metadata } from "next"
import Image from "next/image"
import { getSiteSettings } from "@/lib/repositories/site-repository"

export const metadata: Metadata = {
  title: "About | Valayal Aura",
  description: "Learn about the philosophy behind Valayal Aura glass bangles. Where tradition meets trend.",
}

export default async function AboutPage() {
  const settings = await getSiteSettings()

  return (
    <div className="bg-cream min-h-screen">
      {/* Editorial Header */}
      <section className="py-20 md:py-32 border-b border-line-light relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="text-[11px] tracking-[0.32em] uppercase font-semibold text-brown-soft mb-8">
            Our Story
          </div>
          <h1 className="font-cormorant text-display-lg font-medium text-brown-dark leading-tight mb-8">
            Redefining Everyday Elegance
          </h1>
          <p className="font-body text-lg md:text-xl text-brown-soft max-w-2xl mx-auto leading-relaxed">
            Valayal Aura was born from a simple idea: that tradition should not be confined to special occasions. 
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mr-auto rounded-t-full overflow-hidden shadow-elegant border border-line-dark">
              <Image 
                src={settings.heroImage}
                alt="Valayal Aura aesthetic"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="font-cormorant text-xl leading-relaxed text-brown space-y-6">
              <h2 className="text-display-sm text-brown-dark font-medium mb-8">
                Colour, Tradition & Personal Expression
              </h2>
              <p>
                The gentle clinking of glass bangles is a sound deeply woven into our heritage. It speaks of joy, celebration, and femininity. At Valayal Aura, we capture this essence and blend it with modern aesthetics to create pieces that fit seamlessly into the contemporary wardrobe.
              </p>
              <p>
                We carefully select our colours and designs to ensure there is a bangle for every mood and every style. From the deep, traditional hues worn during festivals to the subtle, pastel tones perfect for an office meeting—our collection is designed to be as versatile as the women who wear them.
              </p>
              <p>
                Our philosophy is not about heavy luxury or impractical adornments. It is about accessible elegance. It is about choosing a colour that matches your aura on any given day, and stepping out with confidence.
              </p>
              
              <div className="pt-8 mt-8 border-t border-line-light">
                <span className="block font-script text-4xl text-gold mb-2">Valayal Aura</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-brown-soft">
                  Shine every day
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
