/**
 * Room Page
 *
 * Showcases room and accommodation details.
 * Features a hero section with creative image layout
 * highlighting the style and comfort of the rooms.
 *
 * Route: /room
 */

import React from "react";
import {
  RoomHeroSection,
  RoomGridSection,
  FavoriteRoomSection,
  RoomTestimonialSection,
} from "../components/room";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

// Metadata for SEO
export const metadata = {
  title: "Our Rooms | Travixo - Travel & Tour",
  description:
    "Whether you choose a cozy Classic or a spacious Suite, our rooms are made to help you relax and feel at home.",
};

export default function RoomPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <RoomHeroSection />

      {/* Room Cards Grid */}
      <RoomGridSection />

      {/* Favorite Room Feature */}
      <FavoriteRoomSection />

      {/* Testimonial Section */}
      <RoomTestimonialSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
