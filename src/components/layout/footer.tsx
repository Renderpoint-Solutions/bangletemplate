import Link from "next/link";
import { getSiteSettings } from "@/lib/repositories/site-repository";

export default async function Footer() {
  const settings = await getSiteSettings();

  return (
    <footer className="bg-cream py-12 border-t border-line-light mt-auto">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center text-center">
        <p className="font-cormorant text-2xl text-brown mb-3">
          Thank you for supporting small business
        </p>
        
        <div className="flex flex-col items-center gap-1 mb-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-brown-soft">
            {settings.brandName} • Glass Bangles
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
          <Link href="/about" className="text-xs uppercase tracking-widest text-brown hover:text-gold transition-colors">
            About
          </Link>
          <Link href="/collection" className="text-xs uppercase tracking-widest text-brown hover:text-gold transition-colors">
            Collection
          </Link>
          <Link href="/contact" className="text-xs uppercase tracking-widest text-brown hover:text-gold transition-colors">
            Contact
          </Link>
        </nav>

        <div className="text-sm text-brown-soft border-t border-line-light/50 pt-8 w-full max-w-md mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest">Orders & Enquiries</p>
          <div className="flex flex-wrap justify-center gap-4">
            {settings.contactPhones.map((phone) => (
              <a 
                key={phone} 
                href={`tel:${phone}`}
                className="hover:text-brown transition-colors"
              >
                {phone}
              </a>
            ))}
            <a 
              href={`https://wa.me/${settings.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-brown transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
