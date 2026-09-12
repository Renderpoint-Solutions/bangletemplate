import { Metadata } from "next"
import { getSiteSettings } from "@/lib/repositories/site-repository"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact | Valayal Aura",
  description: "Get in touch with Valayal Aura for orders, enquiries, and style advice.",
}

export default async function ContactPage() {
  const settings = await getSiteSettings()

  return (
    <div className="bg-cream min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <div className="text-[11px] tracking-[0.32em] uppercase font-semibold text-brown-soft mb-8">
          Orders & Enquiries
        </div>
        
        <h1 className="font-cormorant text-display-lg font-medium text-brown-dark mb-6">
          Get in Touch
        </h1>
        
        <p className="text-brown-soft max-w-xl mx-auto leading-relaxed mb-16">
          Whether you need help selecting the perfect colours to match your outfit, or want to place a custom order, we are here to help. Reach out to us directly through WhatsApp or phone.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          
          <div className="bg-cream-light border border-line-light p-10 shadow-card flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center font-cormorant text-2xl text-brown mb-6">
              ✆
            </div>
            <h2 className="font-cormorant text-2xl font-semibold text-brown-dark mb-4">
              Call Us
            </h2>
            <div className="flex flex-col gap-2 mb-8 text-brown">
              {settings.contactPhones.map(phone => (
                <a key={phone} href={`tel:${phone}`} className="hover:text-gold transition-colors">
                  {phone}
                </a>
              ))}
            </div>
            <Button asChild variant="outline" className="mt-auto w-full">
              <a href={`tel:${settings.contactPhones[0]}`}>Call Now</a>
            </Button>
          </div>

          <div className="bg-cream-light border border-line-light p-10 shadow-card flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center font-cormorant text-2xl text-brown mb-6">
              ✉
            </div>
            <h2 className="font-cormorant text-2xl font-semibold text-brown-dark mb-4">
              Message Us
            </h2>
            <div className="flex flex-col gap-2 mb-8 text-brown text-center">
              <p className="text-sm text-brown-soft">
                For quick responses, pictures, and ordering, WhatsApp is preferred.
              </p>
            </div>
            <Button asChild className="mt-auto w-full">
              <a href={`https://wa.me/${settings.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>

        </div>

      </div>
    </div>
  )
}
