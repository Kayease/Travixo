/**
 * OrderSummaryCard Component
 *
 * Sidebar card showing order details including tour image,
 * price breakdown, total amount, and pay button.
 *
 * Design specs from Figma:
 * - Card: 440x589px, white background, 1px border, radius 12px
 * - Image: Full width, 246px height
 * - Price labels: Poppins 18px, 400 weight
 * - Price values: Poppins 18px, 600 weight
 * - Total: Poppins 20px, 600 weight
 * - Pay button: 406x45px, #FF6E00, radius 12px
 */

import React from "react";
import Image from "next/image";

interface OrderSummaryCardProps {
  tourImage: string;
  tourName?: string;
  pricePerPerson: number;
  personCount: number;
  taxPercent: number;
  bookingFee: number;
  onPay?: () => void;
}

const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({
  tourImage,
  tourName = "Bangkok Temple Tour",
  pricePerPerson,
  personCount,
  taxPercent,
  bookingFee,
  onPay,
}) => {
  // Calculate totals
  const subtotal = pricePerPerson * personCount;
  const taxAmount = (subtotal * taxPercent) / 100;
  const totalAmount = subtotal + taxAmount + bookingFee;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="bg-white border border-brand-brown/20 rounded-xl overflow-hidden sticky top-4">
      {/* Tour Image */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[246px]">
        <Image
          src={tourImage}
          alt={tourName}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 440px"
        />
      </div>

      {/* Price Breakdown */}
      <div className="p-4 md:p-5 lg:p-6">
        {/* Price per Person */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-body font-normal text-base md:text-lg leading-[30px] text-brand-brown">
            Price per Person
          </span>
          <span className="font-body font-semibold text-base md:text-lg leading-[30px] text-brand-brown">
            {formatCurrency(pricePerPerson)}
          </span>
        </div>

        {/* Person Count */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-body font-normal text-base md:text-lg leading-[30px] text-brand-brown">
            Person
          </span>
          <span className="font-body font-semibold text-base md:text-lg leading-[30px] text-brand-brown">
            {personCount.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Luxury Tax */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-body font-normal text-base md:text-lg leading-[30px] text-brand-brown">
            Luxury Tax ( {taxPercent}% )
          </span>
          <span className="font-body font-semibold text-base md:text-lg leading-[30px] text-brand-brown">
            {formatCurrency(taxAmount)}
          </span>
        </div>

        {/* Booking Fee */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-body font-normal text-base md:text-lg leading-[30px] text-brand-brown">
            Booking Fee
          </span>
          <span className="font-body font-semibold text-base md:text-lg leading-[30px] text-brand-brown">
            {formatCurrency(bookingFee)}
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-brand-brown/20 mb-4" />

        {/* Total Amount */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-body font-semibold text-[20px] leading-[30px] text-brand-brown">
            Total Amount
          </span>
          <span className="font-body font-semibold text-[20px] leading-[30px] text-brand-brown">
            {formatCurrency(totalAmount)}
          </span>
        </div>

        {/* Pay Button */}
        <button
          onClick={onPay}
          className="w-full h-[45px] bg-brand-orange border border-brand-orange rounded-[12px] overflow-hidden transition-all duration-300 relative group cursor-pointer"
        >
          {/* Fill animation from bottom to top */}
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
          <span className="relative z-10 font-display italic font-medium text-[20px] leading-[27px] text-white group-hover:text-brand-orange transition-colors duration-300">
            Pay
          </span>
        </button>

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
  );
};

export default OrderSummaryCard;
