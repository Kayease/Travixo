"use client";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DestinationsHeroSection } from "@/components/destinations/DestinationsHeroSection";
import { DestinationsGridSection } from "@/components/destinations/DestinationsGridSection";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

/**
 * DestinationsPageContent Component
 * Separated to be wrapped in Suspense for search params support
 */
const DestinationsPageContent: React.FC = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  return (
    <main className="relative min-h-screen bg-brand-cream">
      {/* Site Navigation */}
      <Navbar />

      {/* Hero Section - Page Header */}
      <DestinationsHeroSection
        title={searchQuery ? `Search Results for "${searchQuery}"` : "Discover Travixo"}
        subtitle={searchQuery
          ? `Found destinations matching your search request.`
          : "From vast savannas teeming with wildlife to breathtaking landscapes untouched by time, every safari promises adventure."
        }
      />

      {/* Destinations Grid Section */}
      <DestinationsGridSection
        initialCount={6}
        loadMoreCount={3}
        showLoadMore={!searchQuery}
        searchQuery={searchQuery}
      />

      {/* Site Footer */}
      <Footer />
    </main>
  );
};

/**
 * DestinationsPage (View All) Component
 * 
 * Main destinations listing page showcasing all available travel destinations.
 * Features a hero section followed by destinations grid content.
 */
const DestinationsPage: React.FC = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-cream" />}>
      <DestinationsPageContent />
    </Suspense>
  );
};

export default DestinationsPage;
