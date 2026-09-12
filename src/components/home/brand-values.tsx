"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"

export function BrandValues() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="about" className="bg-cream-light border-y border-line-light py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          eyebrow="Beautiful Bangles For Every You"
          title="Find Your Aura"
        />

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mt-12"
        >
          {/* Card 1 */}
          <motion.article variants={item} className="bg-cream border border-line-dark p-10 md:p-12 text-center shadow-card transition-transform hover:-translate-y-1 duration-300">
            <div className="w-[76px] h-[76px] mx-auto border border-line rounded-full flex items-center justify-center font-cormorant text-3xl text-brown mb-6">
              ◌
            </div>
            <h3 className="font-cormorant text-3xl font-semibold text-brown-dark mb-4">
              Trendy & Modern Bangles
            </h3>
            <p className="text-brown-soft text-[15px] leading-relaxed max-w-[340px] mx-auto">
              Contemporary designs that match your style and elevate your everyday look with subtle elegance.
            </p>
          </motion.article>

          {/* Card 2 */}
          <motion.article variants={item} className="bg-cream border border-line-dark p-10 md:p-12 text-center shadow-card transition-transform hover:-translate-y-1 duration-300">
            <div className="w-[76px] h-[76px] mx-auto border border-line rounded-full flex items-center justify-center font-cormorant text-3xl text-brown mb-6">
              ✦
            </div>
            <h3 className="font-cormorant text-3xl font-semibold text-brown-dark mb-4">
              Colours For Every Style
            </h3>
            <p className="text-brown-soft text-[15px] leading-relaxed max-w-[340px] mx-auto">
              Endless colours and unique designs crafted for every mood, occasion, and personal expression.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
