/**
 * Latest News Page
 *
 * Displays latest travel news, blog posts, and updates in a magazine-style layout.
 * Features hero section, featured article, news grid, and categories.
 *
 * Route: /news
 *
 * Design System:
 * - Primary Background: #FFFCF5 (brand-cream)
 * - Secondary Background: #FFF7E5
 * - Text Color: #3D3834 (brand-brown)
 * - Accent Color: #FF6E00 (brand-orange)
 * - Typography: Playfair Display (headings), Poppins (body)
 */

import React from "react";
import NewsContent from "./NewsContent";

// Metadata for SEO
export const metadata = {
  title: "Latest Travel News & Updates | Travixo",
  description:
    "Stay updated with the latest travel news, tips, destination guides, and industry insights from Travixo.",
  alternates: {
    canonical: "https://travixo.kayease.com/news",
  },
};

/**
 * NewsPage Component
 * Main latest news page layout - Server Component
 */
export default function NewsPage() {
  return <NewsContent />;
}
