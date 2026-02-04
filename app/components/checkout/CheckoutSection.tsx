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

'use client';

import React, { useState } from 'react';
import CheckoutProgressBar from './CheckoutProgressBar';
import TravelInformationForm from './TravelInformationForm';
import PaymentDetailsForm from './PaymentDetailsForm';
import OrderSummaryCard from './OrderSummaryCard';

interface CheckoutSectionProps {
  tourData?: {
    image: string;
    name: string;
    pricePerPerson: number;
  };
}

const CheckoutSection: React.FC<CheckoutSectionProps> = ({
  tourData = {
    image: '/images/checkout/Frame 427.png',
    name: 'Bangkok Temple Tour',
    pricePerPerson: 4250,
  },
}) => {
  // Current step state
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(3);

  // Travel information form state
  const [travelInfo, setTravelInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    passportNumber: '',
  });

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  // Card details state
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Handle travel info change
  const handleTravelInfoChange = (field: string, value: string) => {
    setTravelInfo((prev) => ({ ...prev, [field]: value }));
  };

  // Handle card data change
  const handleCardChange = (field: string, value: string) => {
    setCardData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle payment
  const handlePay = () => {
    console.log('Processing payment...', { travelInfo, paymentMethod, cardData });
    // Implement payment logic
    setCurrentStep(3);
  };

  return (
    <section className="relative w-full bg-[#FFFCF5] py-8 md:py-12 lg:py-16">
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
          <div className="w-full lg:w-[440px] lg:flex-shrink-0">
            <OrderSummaryCard
              tourImage={tourData.image}
              tourName={tourData.name}
              pricePerPerson={tourData.pricePerPerson}
              personCount={5}
              taxPercent={18}
              bookingFee={125}
              onPay={handlePay}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
