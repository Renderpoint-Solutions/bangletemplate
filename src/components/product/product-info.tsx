"use client"

import { useState } from "react"
import { Product } from "@/types/product"
import { SiteSettings } from "@/types/site"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface ProductInfoProps {
  product: Product
  settings: SiteSettings
}

export function ProductInfo({ product, settings }: ProductInfoProps) {
  const [isEnquiring, setIsEnquiring] = useState(false)

  const handleEnquiry = () => {
    setIsEnquiring(true)
    // In a real implementation, this could open a modal or scroll to a form
    // For now, we'll format a WhatsApp message
    const message = encodeURIComponent(`Hi Valayal Aura, I'm interested in the ${product.name} bangle (${product.slug}). Is it available?`)
    window.open(`https://wa.me/${settings.whatsappNumber}?text=${message}`, "_blank")
    setIsEnquiring(false)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="text-[11px] uppercase tracking-[0.3em] font-semibold text-brown-soft mb-3">
        {product.category}
      </div>
      
      <h1 className="font-cormorant text-display-md text-brown-dark font-medium mb-4">
        {product.name}
      </h1>
      
      {/* Badges/Price area */}
      <div className="flex items-center gap-3 mb-8 pb-8 border-b border-line-light">
        {product.availability === 'in-stock' ? (
           <span className="text-xs uppercase tracking-widest text-[#567a5b] font-medium flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-[#567a5b]"></span> In Stock
           </span>
        ) : product.availability === 'made-to-order' ? (
           <span className="text-xs uppercase tracking-widest text-gold font-medium flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Made to Order
           </span>
        ) : (
           <span className="text-xs uppercase tracking-widest text-red-800 font-medium flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-red-800"></span> Sold Out
           </span>
        )}
      </div>

      <div className="font-body text-brown/90 leading-[1.8] text-[15px] mb-10 space-y-4">
        <p>{product.description}</p>
      </div>

      <div className="mb-10">
        <h3 className="text-xs uppercase tracking-widest font-semibold text-brown-dark mb-4">
          Available Colours
        </h3>
        <div className="flex flex-wrap gap-3">
          {product.colors.map(color => (
            <div 
              key={color}
              className="flex items-center gap-2 px-3 py-1.5 border border-line-light rounded-sm bg-cream-light/50"
            >
              <span 
                className="w-3 h-3 rounded-full border border-line-dark shadow-sm"
                style={{ backgroundColor: color.toLowerCase() }}
              />
              <span className="text-sm">{color}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-line-light flex flex-col sm:flex-row gap-4">
        <Button 
          className="w-full sm:flex-1 h-14 text-sm" 
          onClick={handleEnquiry}
          disabled={isEnquiring}
        >
          Enquire About This Piece
        </Button>
        <Button 
          variant="outline" 
          className="w-full sm:flex-1 h-14 text-sm gap-2"
          onClick={handleEnquiry}
        >
          <MessageCircle size={18} />
          WhatsApp Us
        </Button>
      </div>
      
      <div className="mt-6 text-center text-[10px] uppercase tracking-widest text-brown-soft">
        Call us at {settings.contactPhones[0]} for immediate assistance
      </div>
    </div>
  )
}
