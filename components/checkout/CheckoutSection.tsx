/**
 * CheckoutSection Component
 *
 * Main checkout section combining all checkout form components:
 * progress bar, travel information, payment details, and order summary.
 *
 * Design specs from Figma:
 * - Background: #FFFCF5
 * - Two-column layout: Form (left) + Order Summary (right)
 * - Max width: 1440px
 */

"use client";

import React, { useState } from "react";
import CheckoutProgressBar from "./CheckoutProgressBar";
import TravelInformationForm from "./TravelInformationForm";
import PaymentDetailsForm from "./PaymentDetailsForm";
import OrderSummaryCard from "./OrderSummaryCard";
import { useSearchParams, useRouter } from "next/navigation";
import { Toast } from "../ui/Toast";

interface CheckoutSectionProps {
  tourData?: {
    image: string;
    name: string;
    pricePerPerson: number;
  };
}

const CheckoutSection: React.FC<CheckoutSectionProps> = ({
  tourData: initialTourData,
}) => {
  const searchParams = useSearchParams();

  // Prioritize search params, fallback to props, then default
  const tourData = {
    name:
      searchParams.get("name") ||
      initialTourData?.name ||
      "Bangkok Temple Tour",
    pricePerPerson: searchParams.get("price")
      ? parseFloat(searchParams.get("price")!.replace(/[^0-9.]/g, ""))
      : initialTourData?.pricePerPerson || 4250,
    image:
      searchParams.get("image") ||
      initialTourData?.image ||
      "/images/checkout/success.png",
  };
  // Current step state
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(3);

  // Travel information form state
  const [travelInfo, setTravelInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passportNumber: "",
  });

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");

  // Card details state
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Handle travel info change
  const handleTravelInfoChange = (field: string, value: string) => {
    setTravelInfo((prev) => ({ ...prev, [field]: value }));
  };

  // Handle card data change
  const handleCardChange = (field: string, value: string) => {
    setCardData((prev) => ({ ...prev, [field]: value }));
  };

  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ message: "", type: "success" as "success" | "error" });

  // Handle payment
  // Handle payment
  const handlePay = () => {
    // 1. Validate Travel Information
    const isTravelInfoValid = Object.values(travelInfo).every(val => val.trim() !== "");
    if (!isTravelInfoValid) {
      setToastMessage({ message: "Please fill in all Travel Information fields.", type: "error" });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    // 2. Validate Payment Details (if card method)
    if (paymentMethod === "card") {
      const isCardDataValid = Object.values(cardData).every(val => val.trim() !== "");
      if (!isCardDataValid) {
        setToastMessage({ message: "Please fill in all Payment Details.", type: "error" });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        return;
      }
    }

    console.log("Processing payment...", {
      travelInfo,
      paymentMethod,
      cardData,
    });

    // Show success toast
    setToastMessage({ message: "Payment successful! Redirecting to home...", type: "success" });
    setShowToast(true);

    // Redirect after delay
    setTimeout(() => {
      router.push("/");
    }, 2000);

    // Implement payment logic
    setCurrentStep(3);
  };

  return (
    <section className="relative w-full bg-[#FFFCF5] py-8 md:py-12 lg:py-16">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-5 z-50 animate-slide-up">
          <Toast
            message={toastMessage.message}
            type={toastMessage.type}
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Progress Bar */}
        <div className="mb-8 md:mb-12">
          <CheckoutProgressBar currentStep={currentStep} />
        </div>

        {/* Main Content: Form + Summary */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column: Forms */}
          <div className="flex-1 w-full lg:max-w-[812px]">
            {/* Travel Information Form */}
            <TravelInformationForm
              formData={travelInfo}
              onChange={handleTravelInfoChange}
            />

            {/* Payment Details Form */}
            <PaymentDetailsForm
              paymentMethod={paymentMethod}
              onPaymentMethodChange={setPaymentMethod}
              cardData={cardData}
              onCardChange={handleCardChange}
            />
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[440px] lg:shrink-0">
            <OrderSummaryCard
              tourImage={tourData.image}
              tourName={tourData.name}
              pricePerPerson={tourData.pricePerPerson}
              personCount={5}
              taxPercent={18}
              bookingFee={125}
              onPay={handlePay}
            />
            {/* Security Badges */}
            <div className="flex items-center justify-center gap-2 md:gap-4 mt-5 flex-wrap">
              {/* Norton Secured */}
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="8"
                    width="16"
                    height="12"
                    rx="2"
                    stroke="rgba(75,54,33,0.6)"
                    strokeWidth="1"
                  />
                  <path
                    d="M8 8V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8"
                    stroke="rgba(75,54,33,0.6)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="12"
                    cy="14"
                    r="1.5"
                    stroke="rgba(75,54,33,0.6)"
                    strokeWidth="1"
                  />
                </svg>
                <span className="font-body font-medium text-xs md:text-sm leading-7 text-brand-brown/60 uppercase tracking-wide">
                  Norton Secured
                </span>
              </div>

              {/* PCI Compliant */}
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="8"
                    width="16"
                    height="12"
                    rx="2"
                    stroke="rgba(75,54,33,0.6)"
                    strokeWidth="1"
                  />
                  <path
                    d="M8 8V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8"
                    stroke="rgba(75,54,33,0.6)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="12"
                    cy="14"
                    r="1.5"
                    stroke="rgba(75,54,33,0.6)"
                    strokeWidth="1"
                  />
                </svg>
                <span className="font-body font-medium text-xs md:text-sm leading-7 text-brand-brown/60 uppercase tracking-wide">
                  PCI Compliant
                </span>
              </div>

              {/* Truste */}
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="rgba(75,54,33,0.6)"
                    strokeWidth="1"
                  />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="rgba(75,54,33,0.6)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-body font-medium text-xs md:text-sm leading-7 text-brand-brown/60 uppercase tracking-wide">
                  Truste
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
