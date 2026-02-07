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

import React from "react";
import { CheckoutSection } from "../components/checkout";
import Navbar from "../components/layout/Navbar";

// Metadata for SEO
export const metadata = {
  title: "Checkout | Travixo - Travel & Tour",
  description:
    "Complete your booking securely. Enter your travel information and payment details to confirm your tour reservation.",
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
        : "/images/checkout/frame-427.png",
  };

  return (
    <main className="min-h-screen bg-[#FFFCF5]">
      <Navbar />
      {/* Checkout Section */}
      <CheckoutSection tourData={tourData} />
    </main>
  );
}
