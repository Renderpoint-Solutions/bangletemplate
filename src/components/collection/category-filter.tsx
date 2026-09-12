"use client"

import { Category } from "@/types/category"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (slug: string) => void
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onCategoryChange("all")}
        className={cn(
          "px-4 py-1.5 text-xs uppercase tracking-widest border transition-colors",
          activeCategory === "all" || !activeCategory
            ? "border-brown bg-brown text-cream-light font-medium"
            : "border-line-dark text-brown hover:border-brown hover:bg-cream-light"
        )}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.slug)}
          className={cn(
            "px-4 py-1.5 text-xs uppercase tracking-widest border transition-colors",
            activeCategory === category.slug
              ? "border-brown bg-brown text-cream-light font-medium"
              : "border-line-dark text-brown hover:border-brown hover:bg-cream-light"
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}
