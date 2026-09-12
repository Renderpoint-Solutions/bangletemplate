"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Collection", href: "/collection" },
    { name: "Orders & Enquiries", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-cream-light/95 backdrop-blur-md border-b border-line-light shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex flex-col items-center group">
            <span className="font-cormorant text-2xl font-semibold uppercase tracking-[0.22em] text-brown-dark group-hover:text-gold transition-colors">
              Valayal Aura
            </span>
            <span className="text-[8px] tracking-[0.28em] uppercase text-brown-soft mt-1.5">
              Glass Bangles
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] tracking-[0.16em] uppercase transition-colors hover:text-brown-dark",
                  pathname === link.href ? "text-brown-dark font-medium" : "text-brown-soft"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brown hover:text-gold transition-colors p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-cream flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-cormorant uppercase tracking-widest text-brown hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
