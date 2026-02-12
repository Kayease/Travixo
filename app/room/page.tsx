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
import dynamic from "next/dynamic";
import { siteUrl } from "@/app/lib/siteConfig";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RoomHeroSection } from "@/components/room";

const RoomGridSection = dynamic(
  () => import("@/components/room/RoomGridSection"),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" /> }
);
const FavoriteRoomSection = dynamic(
  () => import("@/components/room/FavoriteRoomSection"),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" /> }
);
const RoomTestimonialSection = dynamic(
  () =>
    import("@/components/home/TestimonialSection").then(
      (mod) => mod.TestimonialSection
    ),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" /> }
);

// Metadata for SEO
export const metadata = {
  title: "Our Rooms | Travixo - Travel & Tour",
  description:
    "Whether you choose a cozy Classic or a spacious Suite, our rooms are made to help you relax and feel at home.",
  alternates: {
    canonical: `${siteUrl}/room`,
  },
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
