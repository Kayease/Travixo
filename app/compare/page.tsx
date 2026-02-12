/**
 * Compare Page
 * 
 * Allows users to compare different travel experiences side by side.
 * Features a hero section with page title and a comparison table
 * showcasing tours with prices, durations, accommodations, and activities.
 * 
 * Route: /compare
 */

import React from 'react';
import { siteUrl } from '@/app/lib/siteConfig';
import { CompareHeroSection, CompareTableSection } from '@/components/compare';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Metadata for SEO
export const metadata = {
  title: 'Compare Our Experiences | Travixo - Travel & Tour',
  description: 'Compare tours and experiences. Side-by-side details on duration, price, and inclusions to choose your ideal adventure.',
  alternates: {
    canonical: `${siteUrl}/compare`,
  },
};

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <CompareHeroSection />

      {/* Compare Table Section */}
      <CompareTableSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
