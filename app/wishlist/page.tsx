/**
 * Wishlist Page
 *
 * Displays the user's saved/favorited tours and destinations.
 * Features a hero section, banner image, sidebar with collections,
 * and a grid of wishlist items with filtering capabilities.
 *
 * Route: /wishlist
 */

import React from "react";
import { siteUrl } from "@/app/lib/siteConfig";
import {
  WishlistHeroSection,
  WishlistBannerSection,
  WishlistContentSection,
} from "@/components/wishlist";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Metadata for SEO
export const metadata = {
  title: "My Wishlist | Travixo - Travel & Tour",
  description:
    "Your curated sanctuary of dream escapes and luxury journeys across the globe. View and manage your saved travel destinations.",
  alternates: {
    canonical: `${siteUrl}/wishlist`,
  },
};

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <WishlistHeroSection />

      {/* Scenic Banner Image */}
      <WishlistBannerSection />

      {/* Wishlist Content with Sidebar & Cards Grid */}
      <WishlistContentSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
