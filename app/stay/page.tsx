/**
 * Stay Page
 *
 * Showcases accommodation options for travelers.
 * Features a hero section with welcoming title and description.
 *
 * Route: /stay
 */

import React from "react";
import dynamic from "next/dynamic";
import { StayHeroSection } from "@/components/stay";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const StayBannerSection = dynamic(
  () => import("@/components/stay/StayBannerSection"),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" /> }
);
const SuiteSection = dynamic(
  () => import("@/components/stay/SuiteSection"),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" /> }
);
const StayStatsSection = dynamic(
  () => import("@/components/stay/StayStatsSection"),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" /> }
);
const TestimonialSection = dynamic(
  () => import("@/components/stay/StayTestimonialSection"),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" /> }
);
const StayCommunitySection = dynamic(
  () => import("@/components/stay/StayCommunitySection"),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" /> }
);

// Metadata for SEO
export const metadata = {
  title: "Stay | Travixo - Travel & Tour",
  description:
    "Find your perfect stay. Browse handpicked accommodations for every journey, from safari lodges to city retreats.",
  alternates: {
    canonical: "https://travixo.kayease.com/stay",
  },
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
      <TestimonialSection />

      {/* Community Section */}
      <StayCommunitySection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
