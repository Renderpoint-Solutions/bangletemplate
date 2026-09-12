"use client"

import { Search } from "lucide-react"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-brown-soft" />
      </div>
      <input
        type="text"
        placeholder="Search bangles, colours..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-10 pr-3 py-2 border border-line-dark bg-cream-light text-brown placeholder:text-brown-soft/70 focus:outline-none focus:ring-1 focus:ring-brown transition-colors text-sm"
      />
    </div>
  )
}
