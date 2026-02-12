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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://travixo.com";

export const metadata: Metadata = {
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
        <div id="main-content" className="w-full overflow-x-hidden">
          <ToastProvider>
            <WishlistProvider>
              <CartProvider>{children}</CartProvider>
            </WishlistProvider>
          </ToastProvider>
        </div>
      </body>
    </html>
  );
}
