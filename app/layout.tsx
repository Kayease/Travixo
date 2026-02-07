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
};

import { ToastProvider } from "./context/ToastContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-100 -translate-y-full rounded bg-brand-orange px-4 py-2 text-white transition focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <div id="main-content">
          <ToastProvider>{children}</ToastProvider>
        </div>
      </body>
    </html>
  );
}
