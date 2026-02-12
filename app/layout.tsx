import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

/**
 * Playfair Display Font Configuration
 * Used for headings and display text when .font-display class is applied
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

/**
 * Poppins Font Configuration
 * Default font for all text (body, paragraphs, headings by default)
 */
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://travixo.kayease.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Travixo - Travel & Tour",
  description: "Your Safari Hub: News, Tips, and Inspiration",
  openGraph: {
    title: "Travixo - Travel & Tour",
    description: "Your Safari Hub: News, Tips, and Inspiration",
    url: siteUrl,
    siteName: "Travixo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travixo - Travel & Tour",
    description: "Your Safari Hub: News, Tips, and Inspiration",
  },
  icons: {
    icon: "/images/favicon/faviconFinal.png",
  },
};

import { ToastProvider } from "./context/ToastContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased overflow-x-hidden max-w-[100vw]`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:bg-brand-orange focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:text-lg focus:font-display focus:italic focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div id="main-content" className="w-full overflow-x-hidden">
          <ToastProvider>
            <WishlistProvider>
              <CartProvider>{children}</CartProvider>
            </WishlistProvider>
          </ToastProvider>
        </div>
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Travixo",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description:
                "Premium travel and tour booking platform offering curated destinations, tours, and stays worldwide.",
              sameAs: [
                "https://facebook.com/travixo",
                "https://twitter.com/travixo",
                "https://instagram.com/travixo",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                availableLanguage: "English",
              },
            }),
          }}
        />
        {/* WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Travixo",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/destinations?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
