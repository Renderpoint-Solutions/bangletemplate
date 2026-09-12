"use client"

import { motion } from "framer-motion"

export function BrandStory() {
  return (
    <section className="py-24 bg-cream-light border-t border-line-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-tan/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[11px] tracking-[0.32em] uppercase font-semibold text-brown-soft mb-8">
            The Aura Philosophy
          </div>
          
          <h2 className="font-cormorant text-display-md font-medium text-brown-dark mb-10 leading-tight">
            More than just accessories, they are <br className="hidden sm:block"/> expressions of your personal aura.
          </h2>
          
          <div className="font-cormorant text-xl md:text-2xl leading-relaxed text-brown space-y-6">
            <p>
              At Valayal Aura, we believe that everyday style should be a celebration of colour and tradition. Glass bangles have adorned women for generations, bringing a unique sound and vibrant energy to every movement.
            </p>
            <p>
              Our collections are thoughtfully curated to bridge the gap between timeless heritage and contemporary aesthetics. Whether you seek the deep, rich tones of tradition or the subtle, modern hues for daily wear, you'll find the perfect match to colour your style and let your true aura shine.
            </p>
          </div>
          
          <div className="font-script text-4xl text-gold mt-12">
            Valayal Aura
          </div>
        </motion.div>
      </div>
    </section>
  )
}
