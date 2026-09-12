import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Italianno } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italianno",
});

export const metadata: Metadata = {
  title: "Valayal Aura | Glass Bangles",
  description: "Valayal Aura — glass bangles where tradition meets trend. Add colour to your style and shine every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${dmSans.variable} ${italianno.variable} font-body antialiased bg-cream text-brown`}>
        <div className="relative min-h-screen flex flex-col mx-2 my-2 border border-line-dark">
          {/* Decorative Corner Borders */}
          <div className="absolute top-2 left-2 w-10 h-10 border-t border-l border-line pointer-events-none z-10" />
          <div className="absolute bottom-2 right-2 w-10 h-10 border-b border-r border-line pointer-events-none z-10" />
          
          <Header />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
