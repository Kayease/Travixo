/**
 * Stay Page
 *
 * Showcases accommodation options for travelers.
 * Features a hero section with welcoming title and description.
 *
 * Route: /stay
 */

import React from "react";
import {
  StayHeroSection,
  StayBannerSection,
  SuiteSection,
  StayStatsSection,
  StayTestimonialSection,
  StayCommunitySection,
} from "@/components/stay";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Metadata for SEO
export const metadata = {
  title: "Stay | Travixo - Travel & Tour",
  description:
    "A curated odyssey through the world's most breathtaking sanctuaries, documented with precision and a refined lens.",
};

export default function StayPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <StayHeroSection />

      {/* Banner Image */}
      <StayBannerSection />

      {/* Our Suite Section */}
      <SuiteSection />

      {/* Stats Section */}
      <StayStatsSection />

      {/* Testimonial Section */}
      <StayTestimonialSection />

      {/* Community Section */}
      <StayCommunitySection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
