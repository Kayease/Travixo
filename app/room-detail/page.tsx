/**
 * Room Detail Page
 *
 * Displays detailed information about a specific room.
 * Features a hero section with room image and description.
 *
 * Route: /room-detail
 */

import React from "react";
import {
  RoomDetailHeroSection,
  RoomDetailContentSection,
  CustomerReviewsSection,
  NewFavoriteSection,
} from "@/components/room-detail";
import { Navbar } from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";

// Metadata for SEO
export const metadata = {
  title: "Serenity Suite | Travixo - Travel & Tour",
  description:
    "Experience luxury and comfort in our Serenity Suite with breathtaking mountain views.",
  alternates: {
    canonical: "https://travixo.kayease.com/room-detail",
  },
};

export default function RoomDetailPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HotelRoom JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HotelRoom",
            name: "Serenity Suite",
            description:
              "Experience luxury and comfort in our Serenity Suite with breathtaking mountain views.",
            url: "https://travixo.kayease.com/room-detail",
            image: "https://travixo.kayease.com/images/room/room-hero.png",
            occupancy: {
              "@type": "QuantitativeValue",
              value: 2,
            },
            containedInPlace: {
              "@type": "LodgingBusiness",
              name: "Travixo",
              url: "https://travixo.kayease.com",
              image: "https://travixo.kayease.com/logo.png",
            },
          }),
        }}
      />

      <Navbar />
      {/* Hero Section */}
      <RoomDetailHeroSection />

      {/* Content Section */}
      <RoomDetailContentSection />

      {/* Customer Reviews */}
      <CustomerReviewsSection />

      {/* New Favorite Rooms */}
      <NewFavoriteSection />
      <Footer />
    </main>
  );
}
