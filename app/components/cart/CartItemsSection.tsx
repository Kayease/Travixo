/**
 * CartItemsSection Component
 * 
 * Displays the cart items list with booking summary sidebar.
 * Features room and experience selections with edit/remove actions,
 * and a comprehensive booking summary with pricing breakdown.
 */

import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

/* ============================================
   Type Definitions
============================================ */

interface CartItem {
  id: string;
  type: "room" | "experience";
  title: string;
  image: string;
  location: string;
  dates: string;
  amenities: string[];
  price: number;
  actionLabel: string;
}

interface BookingSummary {
  roomSubtotal: number;
  experienceSubtotal: number;
  comboSaving: number;
  taxesAndFee: number;
}

/* ============================================
   Sample Data
============================================ */

const cartItems: CartItem[] = [
  {
    id: "1",
    type: "room",
    title: "Deluxe Ocean Suite",
    image: "/images/cart/Frame 503.png",
    location: "Amalfi Paims,Italy",
    dates: "Oct 12-18, 2026",
    amenities: ["Private Balcony", "Butler Service", "King Bed"],
    price: 2500,
    actionLabel: "Edit Date",
  },
  {
    id: "2",
    type: "experience",
    title: "Amalfi Coast Private Boat Tour",
    image: "/images/cart/Frame 503.png",
    location: "Amalfi Paims,Italy",
    dates: "Oct 12-18, 2026",
    amenities: ["Private Balcony", "Butler Service", "King Bed"],
    price: 2500,
    actionLabel: "Customize",
  },
];

const bookingSummary: BookingSummary = {
  roomSubtotal: 2500,
  experienceSubtotal: 2500,
  comboSaving: 500,
  taxesAndFee: 500,
};

/* ============================================
   Location Icon Component
============================================ */

const LocationIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
      stroke="#4B3621"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

/* ============================================
   Calendar Icon Component
============================================ */

const CalendarIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z"
      fill="#4B3621"
    />
  </svg>
);

/* ============================================
   Pencil Icon Component
============================================ */

const PencilIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

/* ============================================
   CartItemCard Component
============================================ */

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0px_0px_4px_rgba(0,0,0,0.1)] p-3 flex flex-col md:flex-row gap-4">
      {/* Item Image */}
      <div className="relative w-full md:w-[278px] h-[200px] md:h-[238px] flex-shrink-0 rounded-xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Item Details */}
      <div className="flex-1 py-2 relative">
        {/* Type & Price Row */}
        <div className="flex justify-between items-start mb-2">
          <span className="text-lg text-[#4B3621]">
            {item.type === "room" ? "Rooms Selection" : "Experience"}
          </span>
          <span className="font-display text-2xl italic font-medium text-[#4B3621]">
            $ {item.price.toLocaleString()}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl italic font-semibold text-[#4B3621] mb-4">
          {item.title}
        </h3>

        {/* Location & Dates */}
        <div className="flex flex-wrap gap-4 md:gap-6 mb-4">
          {/* Location */}
          <div className="flex items-center gap-2">
            <LocationIcon />
            <span className="text-lg text-[#4B3621]">{item.location}</span>
          </div>

          {/* Dates */}
          <div className="flex items-center gap-2">
            <CalendarIcon />
            <span className="text-lg text-[#4B3621]">{item.dates}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.amenities.map((amenity, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#FFF7E5] rounded-xl text-lg text-[#4B3621]"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {/* Edit/Customize Button */}
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#FF6E00] rounded-xl text-white text-lg hover:bg-[#e56200] transition-colors">
            <PencilIcon />
            <span>{item.actionLabel}</span>
          </button>

          {/* Remove Button */}
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#FF3B30] rounded-xl text-white text-lg hover:bg-[#e53530] transition-colors">
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ============================================
   BookingSummaryCard Component
============================================ */

interface BookingSummaryCardProps {
  summary: BookingSummary;
  itemCount: number;
}

const BookingSummaryCard: React.FC<BookingSummaryCardProps> = ({
  summary,
  itemCount,
}) => {
  const totalAmount =
    summary.roomSubtotal +
    summary.experienceSubtotal -
    summary.comboSaving +
    summary.taxesAndFee;

  return (
    <div className="bg-[#FFF7E5] rounded-xl p-5 md:p-8 h-fit sticky top-8">
      {/* Title */}
      <h2 className="font-display text-2xl md:text-[32px] italic font-semibold leading-[43px] text-[#4B3621] mb-10">
        Booking Summary
      </h2>

      {/* Pricing Breakdown */}
      <div className="space-y-4">
        {/* Room Subtotal */}
        <div className="flex justify-between items-center">
          <span className="text-xl md:text-2xl text-[#4B3621]">Room Subtotal</span>
          <span className="font-display text-xl md:text-[26px] italic font-semibold text-[#4B3621]">
            ${summary.roomSubtotal.toLocaleString()}.00
          </span>
        </div>

        {/* Experience Subtotal */}
        <div className="flex justify-between items-center">
          <span className="text-xl md:text-2xl text-[#4B3621]">Experience Subtotal</span>
          <span className="font-display text-xl md:text-[26px] italic font-semibold text-[#4B3621]">
            ${summary.experienceSubtotal.toLocaleString()}.00
          </span>
        </div>

        {/* Combo Saving */}
        <div className="flex justify-between items-center">
          <span className="text-xl md:text-2xl text-[#4B3621]">Combo Saving</span>
          <span className="font-display text-xl md:text-[26px] italic font-semibold text-[#34C759]">
            -${summary.comboSaving.toLocaleString()}.00
          </span>
        </div>

        {/* Taxes & Fee */}
        <div className="flex justify-between items-center">
          <span className="text-xl md:text-2xl text-[#4B3621]">Taxes &amp; Fee</span>
          <span className="font-display text-xl md:text-[26px] italic font-semibold text-[#4B3621]">
            ${summary.taxesAndFee.toLocaleString()}.00
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgba(75,54,33,0.4)] my-6" />

      {/* Total Amount */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-xl md:text-[26px] font-medium text-[#4B3621]">
          Total Amount
        </span>
        <span className="font-display text-2xl md:text-[28px] italic font-semibold text-[#4B3621]">
          ${totalAmount.toLocaleString()}.00
        </span>
      </div>

      {/* Proceed to Checkout Button */}
      <Button variant="primary" size="lg" className="w-full">
        Proceed to Checkout
      </Button>

      {/* Terms Text */}
      <p className="text-center text-base text-[#4B3621] mt-6 leading-6">
        by clicking proceed, you agree to our{" "}
        <a href="#" className="underline hover:text-[#FF6E00]">
          Terms of Service
        </a>
        <br />
        and{" "}
        <a href="#" className="underline hover:text-[#FF6E00]">
          Cancellation Policy
        </a>
        .
      </p>
    </div>
  );
};

/* ============================================
   Main CartItemsSection Component
============================================ */

const CartItemsSection: React.FC = () => {
  const itemCount = cartItems.length;

  return (
    <section className="w-full bg-[#FFFCF5] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left Column - Cart Items */}
          <div className="flex-1 lg:max-w-[800px]">
            {/* Header Row */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl md:text-[32px] italic font-semibold leading-[43px] text-[#4B3621]">
                Selected Experiences
              </h2>
              <span className="text-xl md:text-2xl text-[#4B3621]">
                {itemCount} items
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-[rgba(0,0,0,0.4)] mb-8" />

            {/* Cart Items List */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="w-full lg:w-[467px] flex-shrink-0">
            <BookingSummaryCard summary={bookingSummary} itemCount={itemCount} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItemsSection;
