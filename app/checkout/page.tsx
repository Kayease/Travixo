/**
 * Checkout Page
 *
 * Complete checkout flow for booking tours including:
 * - Progress stepper (Detail, Payment, Confirm)
 * - Travel information form
 * - Payment details with Credit Card/UPI
 * - Order summary sidebar with price breakdown
 *
 * Route: /checkout
 */

import React from "react";
import { siteUrl } from "@/app/lib/siteConfig";
import { CheckoutSection } from "@/components/checkout";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Metadata for SEO
export const metadata = {
  title: "Checkout | Travixo - Travel & Tour",
  description:
    "Complete your booking securely. Enter your travel information and payment details to confirm your tour reservation.",
  alternates: {
    canonical: `${siteUrl}/checkout`,
  },
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const tourData = {
    name:
      typeof resolvedParams.name === "string"
        ? resolvedParams.name
        : "Bangkok Temple Tour",
    pricePerPerson:
      typeof resolvedParams.price === "string"
        ? parseFloat(resolvedParams.price.replace(/[^0-9.]/g, ""))
        : 4250,
    image:
      typeof resolvedParams.image === "string"
        ? resolvedParams.image
        : "/images/checkout/success.png",
  };

  return (
    <main className="min-h-screen bg-[#FFFCF5]">
      <Navbar />
      {/* Checkout Section */}
      <CheckoutSection tourData={tourData} />
      {/* Footer */}
      <Footer />
    </main>
  );
}
