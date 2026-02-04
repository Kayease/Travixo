"use client";
import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { DestinationsHeroSection } from "../components/destinations/DestinationsHeroSection";
import { DestinationsGridSection } from "../components/destinations/DestinationsGridSection";

/**
 * DestinationsPage (View All) Component
 * 
 * Main destinations listing page showcasing all available travel destinations.
 * Features a hero section followed by destinations grid content.
 * 
 * Page Structure:
 * 1. Navbar - Site navigation
 * 2. DestinationsHeroSection - Page header with title and subtitle
 * 3. DestinationsGridSection - Grid of destination cards
 * 4. Footer - Site footer
 * 
 * @returns {JSX.Element} The complete destinations page
 */
const DestinationsPage: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-brand-cream">
      {/* Site Navigation */}
      <Navbar />

      {/* Hero Section - Page Header */}
      <DestinationsHeroSection 
        title="Discover the Taravixo"
        subtitle="From vast savannas teeming with wildlife to breathtaking landscapes untouched by time, every safari promises adventure."
      />

      {/* Destinations Grid Section */}
      <DestinationsGridSection 
        initialCount={6}
        loadMoreCount={3}
        showLoadMore={true}
      />

      {/* Site Footer */}
      <Footer />
    </main>
  );
};

export default DestinationsPage;
