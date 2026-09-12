"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Product } from "@/types/product"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  className?: string
  priority?: boolean
}

export function ProductCard({ product, className, priority = false }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={cn("group flex flex-col", className)}
    >
      <Link href={`/collection/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-cream-light border border-line-light shadow-sm mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-brown text-cream-light text-[9px] uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
          {product.availability === "out-of-stock" && (
            <span className="bg-line text-white text-[9px] uppercase tracking-widest px-2 py-1">
              Sold Out
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-col flex-grow">
        <div className="text-[10px] uppercase tracking-[0.2em] text-brown-soft mb-1.5">
          {product.category}
        </div>
        <Link href={`/collection/${product.slug}`} className="font-cormorant text-xl text-brown-dark hover:text-gold transition-colors mb-2">
          {product.name}
        </Link>
        <div className="text-sm text-brown-soft line-clamp-2 mb-4 flex-grow">
          {product.shortDescription}
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-line-light/50">
          <div className="flex items-center gap-1.5">
             {/* Simple color dots representation based on text color names */}
             {product.colors.slice(0, 3).map(color => (
               <span 
                 key={color} 
                 className="w-3 h-3 rounded-full border border-line-dark shadow-sm"
                 style={{ backgroundColor: color.toLowerCase() }}
                 title={color}
               />
             ))}
             {product.colors.length > 3 && (
               <span className="text-[10px] text-brown-soft ml-1">+{product.colors.length - 3}</span>
             )}
          </div>
          <Link 
            href={`/collection/${product.slug}`}
            className="text-[10px] uppercase tracking-widest text-brown font-semibold hover:text-gold transition-colors group-hover:underline underline-offset-4"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
