/**
 * Portfolio Page
 * 
 * Displays the company's global footprint and portfolio of destinations.
 * Features hero, banner, expeditions, impact stories, discovery, and CTA.
 * 
 * Route: /portfolio
 */

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  PortfolioHeroSection,
  PortfolioBannerSection,
  SignatureExpeditionsSection,
  ImpactStoriesSection,
  VoiceOfDiscoverySection,
  PortfolioCTASection
} from '@/components/portfolio';

// Metadata for SEO
export const metadata = {
  title: 'Our Global Footprint | Travixo - Travel & Tour',
  description: 'A curated odyssey through the world\'s most breathtaking sanctuaries, documented with precision and a refined lens.',
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <PortfolioHeroSection />

        {/* Scenic Banner Image */}
        <PortfolioBannerSection />

        {/* Signature Expeditions Section */}
        <SignatureExpeditionsSection />

        {/* Impact Stories Section */}
        <ImpactStoriesSection />

        {/* Voice of Discovery Section */}
        <VoiceOfDiscoverySection />

        {/* CTA Section */}
        <PortfolioCTASection />
      </main>
      <Footer />
    </>
  );
}
