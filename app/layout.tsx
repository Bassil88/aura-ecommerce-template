import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import LenisProvider from "./providers/LenisProvider";
import { CartProvider } from "./providers/CartProvider";
import { businessConfig as siteConfig } from "@/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.company.name} | ${siteConfig.company.brandName} ${siteConfig.company.tagline.de}`,
  description: siteConfig.seo.description.de,

  metadataBase: new URL(siteConfig.baseUrl),

  alternates: {
    languages: {
      "de-DE": `${siteConfig.baseUrl}/de`,
      "en-US": `${siteConfig.baseUrl}/en`,
    },
  },

  openGraph: {
    title: `${siteConfig.company.name} | ${siteConfig.company.tagline.de}`,
    description: siteConfig.seo.description.de,
    url: siteConfig.baseUrl,
    siteName: siteConfig.seo.openGraph.siteName,
    locale: siteConfig.seo.openGraph.locale.de,
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: siteConfig.assets.favicon16, sizes: "16x16", type: "image/png" },
      { url: siteConfig.assets.favicon32, sizes: "32x32", type: "image/png" },
    ],
    apple: siteConfig.assets.appleTouchIcon,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <filter id="glass-distortion">
              <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap in="SourceGraphic" in2="blurred" scale="18" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.company.name,
              url: siteConfig.baseUrl,
              logo: `${siteConfig.baseUrl}${siteConfig.assets.logo}`,
              image: `${siteConfig.baseUrl}${siteConfig.assets.logo}`,
              description: siteConfig.company.description.de,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.contact.phone,
                contactType: "customer support",
                areaServed: siteConfig.address.countryCode,
                availableLanguage: siteConfig.locales,
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                postalCode: siteConfig.address.postalCode,
                addressCountry: siteConfig.address.countryCode,
              },
            }),
          }}
        />

        <main className="flex-1">
          <CartProvider>
            <LenisProvider>{children}</LenisProvider>
          </CartProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
