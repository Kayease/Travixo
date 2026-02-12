"use client";

/**
 * CartItemsSection Component
 *
 * Displays the cart items list with booking summary sidebar.
 * Features room and experience selections with edit/remove actions,
 * and a comprehensive booking summary with pricing breakdown.
 */

import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DatePicker, DateRange } from "../ui/DatePicker";
import { Button } from "../ui/Button"; // If needed for BookingSummaryCard
import { useCart, CartItem } from "@/app/context/CartContext";

interface BookingSummary {
  roomSubtotal: number;
  experienceSubtotal: number;
  comboSaving: number;
  taxesAndFee: number;
}

// ... [Imports]

/* ============================================
   Icon Components
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
   BookingSummaryCard Component
============================================ */

interface BookingSummaryCardProps {
  summary: BookingSummary;
  itemCount: number;
}

const BookingSummaryCard: React.FC<BookingSummaryCardProps> = ({
  summary,
  itemCount: _itemCount,
}) => {
  const router = useRouter();
  const totalAmount =
    summary.roomSubtotal +
    summary.experienceSubtotal -
    summary.comboSaving +
    summary.taxesAndFee;

  return (
    <div className="bg-[#FFF7E5] rounded-xl p-5 md:p-8 h-fit sticky top-8">
      {/* Title */}
      <h2 className="font-display text-2xl md:text-[32px] italic font-semibold leading-[32px] md:leading-[43px] text-[#4B3621] mb-6 md:mb-10">
        Booking Summary
      </h2>

      {/* Pricing Breakdown */}
      <div className="space-y-4">
        {/* Room Subtotal */}
        <div className="flex justify-between items-center">
          <span className="text-base md:text-2xl text-[#4B3621]">
            Room Subtotal
          </span>
          <span className="font-display text-lg md:text-[26px] italic font-semibold text-[#4B3621]">
            ${summary.roomSubtotal.toLocaleString()}.00
          </span>
        </div>

        {/* Experience Subtotal */}
        <div className="flex justify-between items-center">
          <span className="text-base md:text-2xl text-[#4B3621]">
            Experience Subtotal
          </span>
          <span className="font-display text-lg md:text-[26px] italic font-semibold text-[#4B3621]">
            ${summary.experienceSubtotal.toLocaleString()}.00
          </span>
        </div>

        {/* Combo Saving */}
        <div className="flex justify-between items-center">
          <span className="text-base md:text-2xl text-[#4B3621]">
            Combo Saving
          </span>
          <span className="font-display text-lg md:text-[26px] italic font-semibold text-[#34C759]">
            -${summary.comboSaving.toLocaleString()}.00
          </span>
        </div>

        {/* Taxes & Fee */}
        <div className="flex justify-between items-center">
          <span className="text-base md:text-2xl text-[#4B3621]">
            Taxes &amp; Fee
          </span>
          <span className="font-display text-lg md:text-[26px] italic font-semibold text-[#4B3621]">
            ${summary.taxesAndFee.toLocaleString()}.00
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgba(75,54,33,0.4)] my-6" />

      {/* Total Amount */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-lg md:text-[26px] font-medium text-[#4B3621]">
          Total Amount
        </span>
        <span className="font-display text-xl md:text-[28px] italic font-semibold text-[#4B3621]">
          ${totalAmount.toLocaleString()}.00
        </span>
      </div>

      {/* Proceed to Checkout Button */}
      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={() => router.push("/checkout")}
      >
        Proceed to Checkout
      </Button>

      {/* Terms Text */}
      <p className="text-center text-base text-[#4B3621] mt-6 leading-6">
        by clicking proceed, you agree to our{" "}
        <a
          href="/terms"
          className="underline hover:text-[#FF6E00] cursor-pointer"
        >
          Terms of Service
        </a>{" "}
        and our{" "}
        <a
          href="/terms#cancellation"
          className="underline hover:text-[#FF6E00] cursor-pointer"
        >
          Cancellation Policy
        </a>
        .
      </p>
    </div>
  );
};

/* ============================================
   CartItemCard Component
*/

interface CartItemCardProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdate: (id: string, updates: Partial<CartItem>) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  onRemove,
  onUpdate,
}) => {
  // Initialize date state from item.dates
  const [dateValue, setDateValue] = useState<string | DateRange>(() => {
    // If item.dates contains " - ", assume it's a range string
    if (item.dates.includes(" - ")) {
      const [from, to] = item.dates.split(" - ");
      return { from, to };
    }
    return { from: item.dates, to: null };
  });

  const datePickerWrapperRef = React.useRef<HTMLDivElement>(null);

  // Handle date change and update cart item
  const handleDateChange = (newDate: string | DateRange) => {
    setDateValue(newDate);

    let dateString = "";
    if (typeof newDate === "string") {
      dateString = newDate;
    } else {
      if (newDate.from && newDate.to) {
        dateString = `${newDate.from} - ${newDate.to}`;
      } else if (newDate.from) {
        dateString = newDate.from;
      }
    }

    if (dateString) {
      onUpdate(item.id, { dates: dateString });
    }
  };

  const handleEditClick = () => {
    // Find the button inside the DatePicker wrapper and click it to open the calendar
    const button = datePickerWrapperRef.current?.querySelector("button");
    if (button) {
      button.click();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-[0px_0px_4px_rgba(0,0,0,0.1)] p-3 flex flex-col md:flex-row gap-4">
      {/* Item Image */}
      <div className="relative w-full md:w-[278px] h-[200px] md:h-[238px] shrink-0 rounded-xl overflow-hidden bg-gray-100">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 278px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Item Details */}
      <div className="flex-1 py-2 relative">
        {/* Type & Price Row */}
        <div className="flex justify-between items-start mb-2">
          <span className="text-base md:text-lg text-[#4B3621]">
            {item.type === "room" ? "Rooms Selection" : "Experience"}
          </span>
          <span className="font-display text-xl md:text-2xl italic font-medium text-[#4B3621]">
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
            <span className="text-base md:text-lg text-[#4B3621]">
              {item.location}
            </span>
          </div>

          {/* Dates */}
          <div className="flex items-center gap-2 relative">
            <div onClick={handleEditClick} className="cursor-pointer">
              <CalendarIcon />
            </div>
            <div ref={datePickerWrapperRef} className="w-[240px]">
              <DatePicker
                value={dateValue}
                onChange={handleDateChange}
                variant="transparent"
                placeholder="Select Dates"
                mode="range"
              />
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.amenities &&
            item.amenities.map((amenity) => (
              <span
                key={amenity}
                className="px-3 py-1 bg-[#FFF7E5] rounded-xl text-sm md:text-lg text-[#4B3621]"
              >
                {amenity}
              </span>
            ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-4">
          {/* Edit/Customize Button */}
          <button
            onClick={handleEditClick}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#FF6E00] rounded-xl text-white text-sm md:text-lg hover:bg-[#e56200] transition-colors cursor-pointer"
          >
            <PencilIcon />
            <span>{item.actionLabel}</span>
          </button>

          {/* Remove Button */}
          <button
            onClick={() => onRemove(item.id)}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#FF3B30] rounded-xl text-white text-sm md:text-lg hover:bg-[#e53530] transition-colors cursor-pointer"
          >
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ============================================
   BookingSummaryCard Component
   ... [Keep existing implementation logic, just ensure types match]
*/

// ...

/* ============================================
   Main CartItemsSection Component
*/

const CartItemsSection: React.FC = () => {
  const { cartItems, removeFromCart, updateCartItem } = useCart();
  const itemCount = cartItems.length;

  // Helper to calculate duration in days
  const calculateDuration = useCallback((dates: string): number => {
    if (!dates) return 1;
    if (dates.includes(" - ")) {
      const [startStr, endStr] = dates.split(" - ");
      const startDate = new Date(startStr);
      const endDate = new Date(endStr);
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1; // Minimum 1 day
    }
    return 1; // Single date is 1 day
  }, []);

  // Memoize booking summary — recalculates only when cartItems change
  const bookingSummary = useMemo<BookingSummary>(() => {
    const roomSubtotal = cartItems
      .filter((item) => item.type === "room")
      .reduce(
        (sum, item) => sum + item.price * calculateDuration(item.dates),
        0,
      );

    const experienceSubtotal = cartItems
      .filter((item) => item.type === "experience")
      .reduce(
        (sum, item) => sum + item.price * calculateDuration(item.dates),
        0,
      );

    const comboSaving = itemCount > 1 ? 50 : 0; // Example: $50 off if more than 1 item
    const subtotal = roomSubtotal + experienceSubtotal;
    const taxesAndFee = Math.round(subtotal * 0.1); // 10% tax

    return {
      roomSubtotal,
      experienceSubtotal,
      comboSaving,
      taxesAndFee,
    };
  }, [cartItems, itemCount, calculateDuration]);

  return (
    <section className="w-full bg-[#FFFCF5] py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-20">
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
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItemCard
                    key={item.id}
                    item={item}
                    onRemove={removeFromCart}
                    onUpdate={updateCartItem}
                  />
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-xl text-brand-brown/60 italic font-display">
                    Your cart is empty.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          {cartItems.length > 0 && (
            <div className="w-full lg:w-[467px] shrink-0">
              <BookingSummaryCard
                summary={bookingSummary}
                itemCount={itemCount}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartItemsSection;
