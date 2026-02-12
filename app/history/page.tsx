/**
 * History Page
 * 
 * Displays the user's travel history and past bookings including:
 * - Travel stats card with metrics
 * - Curated milestones achievements
 * - Scrapbook gallery of past trips
 * 
 * Route: /history
 */

import React from 'react';
import { HistoryHeroSection, HistoryContentSection } from '@/components/history';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Metadata for SEO
export const metadata = {
  title: 'Your Travel Legacy | Travixo - Travel & Tour',
  description: 'Your travel legacy with Travixo. Relive past journeys and the stories behind our most breathtaking sanctuaries.',
  alternates: {
    canonical: 'https://travixo.kayease.com/history',
  },
};

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HistoryHeroSection />

      {/* History Content: Stats, Milestones & Scrapbook */}
      <HistoryContentSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
