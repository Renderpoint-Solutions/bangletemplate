"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Ornament } from "@/components/ui/ornament"
import { SiteSettings } from "@/types/site"

export function HeroSection({ settings }: { settings: SiteSettings }) {
  return (
    <section className="container mx-auto px-6 max-w-7xl min-h-[calc(100vh-100px)] py-16 flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center w-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <Ornament />
          <div className="text-[11px] tracking-[0.32em] uppercase font-semibold text-brown-soft mb-4">
            {settings.tagline}
          </div>
          <h1 className="font-cormorant text-display-xl font-medium text-brown-dark mb-8 leading-none">
            Valayal<em className="block font-script text-[1.05em] font-normal text-brown-soft ml-2 mt-2 leading-none">Aura</em>
          </h1>
          
          <div className="inline-block mb-6 px-7 py-2.5 border border-brown bg-brown text-cream-light font-cormorant text-lg tracking-[0.16em] uppercase">
            Glass Bangles
          </div>

          <p className="font-cormorant text-[22px] leading-[1.35] text-brown max-w-[520px] whitespace-pre-line mb-8">
            {settings.heroDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/collection">View Collection</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Make an Enquiry</Link>
            </Button>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="order-1 md:order-2 relative min-h-[450px] md:min-h-[600px] flex items-center justify-center"
        >
          {/* Decorative Circle */}
          <div className="absolute w-[90%] md:w-[85%] aspect-square border border-line-dark rounded-full z-0" />
          
          {/* Main Image */}
          <div className="relative z-10 w-[88%] md:w-[80%] aspect-[4/5] rounded-[48%_48%_8px_8px] overflow-hidden shadow-elegant border border-line-dark">
            <Image 
              src={settings.heroImage}
              alt="Valayal Aura Collection"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[75%_center]"
              priority
            />
          </div>

          {/* Floating Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute right-0 bottom-[10%] z-20 bg-cream-light/95 backdrop-blur-md border border-line-dark p-6 max-w-[240px] shadow-elegant"
          >
            <span className="text-[9px] tracking-[0.2em] uppercase text-brown-soft block mb-1.5">
              Valayal Aura
            </span>
            <p className="font-cormorant text-xl text-brown leading-snug">
              Colour, tradition & everyday style.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
