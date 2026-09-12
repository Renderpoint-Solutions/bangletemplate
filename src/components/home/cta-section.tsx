"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { SiteSettings } from "@/types/site"

export function CtaSection({ settings }: { settings: SiteSettings }) {
  return (
    <section id="orders" className="bg-brown-dark text-cream-light py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 items-center">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[230px] h-[230px] md:w-[280px] md:h-[280px] mx-auto border border-line-dark rounded-full flex flex-col items-center justify-center text-center p-8 relative before:absolute before:inset-2 before:border before:border-dashed before:border-line-dark/50 before:rounded-full"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase mb-2 block relative z-10 text-cream-dark">Wear your</span>
            <span className="font-script text-5xl md:text-6xl text-gold-light mb-2 block relative z-10">Tradition</span>
            <span className="text-[10px] tracking-[0.2em] uppercase block relative z-10 text-cream-dark">Style your aura.</span>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-[11px] tracking-[0.32em] uppercase font-semibold text-tan mb-4">
              Orders & Enquiries
            </div>
            <h2 className="font-cormorant text-display-md font-medium leading-[1.1] mb-6">
              Choose your colours.<br/>Style your aura.
            </h2>
            <p className="text-[#d9c6b7] text-[15px] leading-[1.8] max-w-[520px] mb-8">
              Browse the collection and contact Valayal Aura for orders and enquiries. Let us help you find the perfect match for your style.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {settings.contactPhones.map(phone => (
                <a 
                  key={phone}
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center px-5 py-3 border border-tan/60 text-[13px] tracking-[0.04em] transition-colors hover:bg-cream hover:text-brown-dark"
                >
                  {phone}
                </a>
              ))}
              <a 
                href={`https://wa.me/${settings.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-gold-light bg-gold-light text-brown-dark text-[13px] tracking-[0.04em] font-medium transition-colors hover:bg-cream hover:border-cream"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
