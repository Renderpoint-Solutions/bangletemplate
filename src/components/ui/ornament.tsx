import { cn } from "@/lib/utils"

export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("text-gold tracking-[0.2em] text-xl mb-6 font-cormorant", className)}>
      ❧ ─── ✦ ─── ❧
    </div>
  )
}
