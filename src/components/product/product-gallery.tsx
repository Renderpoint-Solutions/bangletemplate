"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Fallback if only 1 image exists, repeat it for the sake of the gallery UI demonstration
  const displayImages = images.length > 1 ? images : [images[0], images[0], images[0]]

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-[4/5] md:aspect-[3/4] w-full bg-cream-light border border-line-light overflow-hidden shadow-elegant">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={displayImages[activeIndex]}
              alt={`${productName} - View ${activeIndex + 1}`}
              fill
              priority
              className="object-contain p-4"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {displayImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative aspect-square border overflow-hidden transition-colors bg-cream-light",
                activeIndex === index ? "border-brown" : "border-line-light hover:border-brown/50"
              )}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
