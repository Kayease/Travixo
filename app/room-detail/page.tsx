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
} from "../components/room-detail";
import { Navbar } from "../components/layout/Navbar";

// Metadata for SEO
export const metadata = {
  title: "Serenity Suite | Travixo - Travel & Tour",
  description:
    "Experience luxury and comfort in our Serenity Suite with breathtaking mountain views.",
};

export default function RoomDetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <RoomDetailHeroSection />

      {/* Content Section */}
      <RoomDetailContentSection />

      {/* Customer Reviews */}
      <CustomerReviewsSection />

      {/* New Favorite Rooms */}
      <NewFavoriteSection />
    </main>
  );
}
