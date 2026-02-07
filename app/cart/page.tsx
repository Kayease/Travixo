/**
 * Cart Page
 * 
 * Displays the user's travel selection and cart items.
 * Features a hero section with welcoming title and description.
 * 
 * Route: /cart
 */

import React from 'react';
import { CartHeroSection, CartItemsSection } from '@/components/cart';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Metadata for SEO
export const metadata = {
  title: 'Your Travel Selection | Travixo - Travel & Tour',
  description: 'A curated odyssey through the world\'s most breathtaking sanctuaries, documented with precision and a refined lens.',
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <CartHeroSection />

      {/* Cart Items & Booking Summary Section */}
      <CartItemsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
