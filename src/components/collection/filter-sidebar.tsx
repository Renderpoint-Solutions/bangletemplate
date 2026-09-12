"use client"

import { ProductFilters } from "@/types/product"
import { cn } from "@/lib/utils"

interface FilterSidebarProps {
  filters: ProductFilters
  onFilterChange: (filters: Partial<ProductFilters>) => void
  colors: string[]
  className?: string
}

export function FilterSidebar({ filters, onFilterChange, colors, className }: FilterSidebarProps) {
  const activeColor = filters.color || ""
  const activeSort = filters.sort || "featured"

  return (
    <aside className={cn("w-full md:w-64 flex-shrink-0 space-y-10", className)}>
      
      {/* Sort Options */}
      <div>
        <h3 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-brown-dark mb-4 border-b border-line-light pb-2">
          Sort By
        </h3>
        <div className="space-y-3">
          {[
            { value: "featured", label: "Featured" },
            { value: "newest", label: "Newest Arrivals" },
            { value: "name-asc", label: "Name (A-Z)" },
            { value: "name-desc", label: "Name (Z-A)" }
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
              <div className={cn(
                "w-4 h-4 rounded-full border flex items-center justify-center transition-colors",
                activeSort === option.value ? "border-brown bg-brown" : "border-line-dark group-hover:border-brown"
              )}>
                {activeSort === option.value && <div className="w-1.5 h-1.5 bg-cream-light rounded-full" />}
              </div>
              <span className={cn(
                "text-sm transition-colors",
                activeSort === option.value ? "text-brown-dark font-medium" : "text-brown hover:text-brown-dark"
              )}>
                {option.label}
              </span>
              <input 
                type="radio" 
                name="sort" 
                value={option.value} 
                checked={activeSort === option.value}
                onChange={() => onFilterChange({ sort: option.value as any })}
                className="sr-only" 
              />
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-brown-dark mb-4 border-b border-line-light pb-2">
          Color
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterChange({ color: undefined })}
            className={cn(
              "px-3 py-1.5 text-xs border transition-colors",
              !activeColor
                ? "border-brown bg-brown text-cream-light"
                : "border-line-dark text-brown hover:border-brown"
            )}
          >
            All Colors
          </button>
          
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onFilterChange({ color })}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-xs border transition-colors",
                activeColor === color
                  ? "border-brown bg-brown text-cream-light"
                  : "border-line-dark text-brown hover:border-brown"
              )}
            >
              <span 
                className="w-2.5 h-2.5 rounded-full border border-white/20 shadow-sm" 
                style={{ backgroundColor: color.toLowerCase() }} 
              />
              {color}
            </button>
          ))}
        </div>
      </div>

    </aside>
  )
}
