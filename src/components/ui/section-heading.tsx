import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  className?: string
}

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      {eyebrow && (
        <div className="text-[11px] tracking-[0.32em] uppercase font-semibold text-brown-soft mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="font-cormorant text-display-md font-medium text-brown-dark">
        {title}
      </h2>
      <div className="w-[90px] h-px bg-line mx-auto mt-6" />
    </div>
  )
}
