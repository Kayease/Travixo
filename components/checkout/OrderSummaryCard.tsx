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
      <div className="p-4 md:p-[17px]">
        {/* Price per Person */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-body font-normal text-[18px] leading-[30px] text-brand-brown">
            Price per Person
          </span>
          <span className="font-body font-semibold text-[18px] leading-[30px] text-brand-brown">
            {formatCurrency(pricePerPerson)}
          </span>
        </div>

        {/* Person Count */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-body font-normal text-[18px] leading-[30px] text-brand-brown">
            Person
          </span>
          <span className="font-body font-semibold text-[18px] leading-[30px] text-brand-brown">
            {personCount.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Luxury Tax */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-body font-normal text-[18px] leading-[30px] text-brand-brown">
            Luxury Tax ( {taxPercent}% )
          </span>
          <span className="font-body font-semibold text-[18px] leading-[30px] text-brand-brown">
            {formatCurrency(taxAmount)}
          </span>
        </div>

        {/* Booking Fee */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-body font-normal text-[18px] leading-[30px] text-brand-brown">
            Booking Fee
          </span>
          <span className="font-body font-semibold text-[18px] leading-[30px] text-brand-brown">
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
      </div>
    </div>
  );
};

export default OrderSummaryCard;
