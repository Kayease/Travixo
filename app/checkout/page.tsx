/**
 * Checkout Page
 * 
 * Complete checkout flow for booking tours including:
 * - Progress stepper (Detail, Payment, Confirm)
 * - Travel information form
 * - Payment details with Credit Card/PayPal
 * - Order summary sidebar with price breakdown
 * 
 * Route: /checkout
 */

import React from 'react';
import { CheckoutSection } from '../components/checkout';
import Navbar from '../components/layout/Navbar';

// Metadata for SEO
export const metadata = {
  title: 'Checkout | Travixo - Travel & Tour',
  description: 'Complete your booking securely. Enter your travel information and payment details to confirm your tour reservation.',
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#FFFCF5]">
      <Navbar />
      {/* Checkout Section */}
      <CheckoutSection />
    </main>
  );
}
