import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import SearchOverlay from "@/components/layout/SearchOverlay";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chitralnuts.pk"),
  title: {
    default: "Chitral Natural Nuts | Premium Nuts & Dry Fruits from Pakistan",
    template: "%s | Chitral Natural Nuts",
  },
  description: "Buy premium quality almonds, walnuts, pistachios, Chilgoza pine nuts, dried apricots, and organic mountain honey sourced directly from Chitral, Pakistan. 100% natural, no preservatives. Fast delivery across Pakistan.",
  keywords: ["Chitral nuts", "premium almonds Pakistan", "Chilgoza pine nuts buy online", "organic honey Pakistan", "dry fruits online Pakistan", "walnuts Chitral", "Chitral Natural Nuts"],
  authors: [{ name: "Chitral Natural Nuts", url: "https://chitralnuts.pk" }],
  creator: "Chitral Natural Nuts",
  publisher: "Chitral Natural Nuts",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://chitralnuts.pk",
    siteName: "Chitral Natural Nuts",
    title: "Chitral Natural Nuts | Premium Nuts & Dry Fruits from Pakistan",
    description: "Premium quality nuts and dry fruits sourced directly from the mountains of Chitral. 100% natural, fresh, and delivered across Pakistan.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Chitral Natural Nuts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chitral Natural Nuts | Premium Quality from the Mountains",
    description: "Premium nuts & dry fruits from Chitral, Pakistan. Direct from mountain farmers to your door.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: "your-google-verification-code" },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://chitralnuts.pk/#organization",
      "name": "Chitral Natural Nuts",
      "url": "https://chitralnuts.pk",
      "logo": "https://chitralnuts.pk/logo.svg",
      "description": "Premium quality nuts and dry fruits from Chitral, Pakistan",
      "address": { "@type": "PostalAddress", "addressLocality": "Chitral", "addressRegion": "Khyber Pakhtunkhwa", "addressCountry": "PK" },
      "contactPoint": [{ "@type": "ContactPoint", "telephone": "+92-xxx-xxxxxxx", "contactType": "customer service", "availableLanguage": ["English", "Urdu"], "contactOption": "TollFree" }],
      "sameAs": ["https://facebook.com/chitralnuts", "https://instagram.com/chitralnuts"],
    },
    {
      "@type": "WebSite",
      "@id": "https://chitralnuts.pk/#website",
      "url": "https://chitralnuts.pk",
      "name": "Chitral Natural Nuts",
      "publisher": { "@id": "https://chitralnuts.pk/#organization" },
      "potentialAction": { "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://chitralnuts.pk/shop?search={search_term_string}" }, "query-input": "required name=search_term_string" },
    },
    {
      "@type": "Store",
      "@id": "https://chitralnuts.pk/#store",
      "name": "Chitral Natural Nuts",
      "image": "https://chitralnuts.pk/og-image.jpg",
      "priceRange": "Rs. 800 - Rs. 5000",
      "currenciesAccepted": "PKR",
      "paymentAccepted": "Cash, Credit Card, Easypaisa, JazzCash, Bank Transfer",
      "address": { "@type": "PostalAddress", "addressLocality": "Chitral", "addressCountry": "PK" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CartDrawer />
        <SearchOverlay />
        <WhatsAppFloat />
        <Toaster position="top-right" toastOptions={{ duration: 3000, style: { borderRadius: "4px", fontSize: "14px" } }} />
      </body>
    </html>
  );
}
