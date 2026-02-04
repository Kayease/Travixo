/**
 * Blog 2 Page
 * 
 * Individual blog post detail page
 * 
 * Route: /blog2
 */

import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Blog2HeroSection, Blog2ContentSection } from '../components/blog2';

// Metadata for SEO
export const metadata = {
  title: 'Blog Post | Travixo - Travel & Tour',
  description: 'Read our latest travel insights and destination guides.',
};

export default function Blog2Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Blog2HeroSection />

      {/* Blog Content Section */}
      <Blog2ContentSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
