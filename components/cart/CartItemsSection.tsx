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
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [checkStep, setCheckStep] = useState(0);

  const totalAmount =
    summary.roomSubtotal +
    summary.experienceSubtotal -
    summary.comboSaving +
    summary.taxesAndFee;

  const handleProceedToCheckout = () => {
    setIsCheckingAvailability(true);
    setCheckStep(0);

    // Animate through steps
    setTimeout(() => setCheckStep(1), 800);
    setTimeout(() => setCheckStep(2), 1600);
    setTimeout(() => setCheckStep(3), 2400);

    // Navigate after all steps complete
    setTimeout(() => {
      setIsCheckingAvailability(false);
      router.push("/checkout");
    }, 3200);
  };

  const checkSteps = [
    "Verifying dates...",
    "Checking room availability...",
    "Confirming prices...",
    "Almost ready!",
  ];

  return (
    <>
      {/* Checking Availability Popup */}
      {isCheckingAvailability && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-[#FFFCF5] rounded-2xl p-8 md:p-10 shadow-2xl max-w-[400px] w-[90%] text-center animate-[fadeScaleIn_0.3s_ease-out]">
            {/* Spinner */}
            <div className="mx-auto mb-6 w-16 h-16 relative">
              <div className="absolute inset-0 rounded-full border-4 border-[#FFE5CC]" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FF6E00] animate-spin" />
            </div>

            {/* Title */}
            <h3 className="font-display text-xl md:text-2xl italic font-semibold text-[#4B3621] mb-2">
              Checking Availability
            </h3>
            <p className="text-sm text-[#4B3621]/60 mb-6">
              Please wait while we verify your booking
            </p>

            {/* Progress Steps */}
            <div className="space-y-3 text-left">
              {checkSteps.map((step, index) => (
                <div
                  key={step}
                  className={`flex items-center gap-3 transition-all duration-300 ${index <= checkStep ? "opacity-100" : "opacity-30"
                    }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${index < checkStep
                      ? "bg-[#34C759]"
                      : index === checkStep
                        ? "bg-[#FF6E00] animate-pulse"
                        : "bg-[#FFE5CC]"
                      }`}
                  >
                    {index < checkStep ? (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-sm text-[#4B3621]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeScaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

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
          onClick={handleProceedToCheckout}
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
    </>
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

  /* ============================================
    State to control DatePicker open status
  ============================================ */
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleEditClick = () => {
    setIsDatePickerOpen((prev) => !prev);
  };

  // Stable default values for adults/children based on item id
  const defaultAdults = ((item.id.charCodeAt(0) + item.id.length) % 10) + 1;
  const defaultChildren = ((item.id.charCodeAt(item.id.length - 1) + item.id.length) % 10) + 1;

  return (
    <div className="bg-white rounded-xl shadow-[0px_0px_4px_rgba(0,0,0,0.1)] p-3 flex flex-col md:flex-row gap-4 cart-item-card h-full">
      {/* Image + Counters Column */}
      <div className="w-full md:w-[278px] shrink-0 flex flex-col">
        {/* Item Image */}
        <div className="relative w-full h-[200px] md:h-[238px] rounded-xl overflow-hidden bg-gray-100 cart-item-image">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center"
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

        {/* Adult & Children Counters */}
        <div>
          {/* Adult Counter */}
          <div className="py-3 flex items-center justify-between">
            <span className="text-sm md:text-base text-[#4B3621]">
              Adult ( 13+ age )
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdate(item.id, { adults: Math.max(0, (item.adults ?? defaultAdults) - 1) })}
                className="w-7 h-7 rounded-full bg-[#FFE5CC] flex items-center justify-center text-[#4B3621] text-lg font-bold hover:bg-[#FFD6B0] transition-colors cursor-pointer"
              >
                −
              </button>
              <span className="text-base md:text-lg text-[#4B3621] w-5 text-center">
                {item.adults ?? defaultAdults}
              </span>
              <button
                onClick={() => onUpdate(item.id, { adults: (item.adults ?? defaultAdults) + 1 })}
                className="w-7 h-7 rounded-full bg-[#FF6E00] flex items-center justify-center text-white text-lg font-bold hover:bg-[#e56200] transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Children Counter */}
          <div className="py-3 flex items-center justify-between">
            <span className="text-sm md:text-base text-[#4B3621]">
              Children ( age 3-12 )
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdate(item.id, { children: Math.max(0, (item.children ?? defaultChildren) - 1) })}
                className="w-7 h-7 rounded-full bg-[#FFE5CC] flex items-center justify-center text-[#4B3621] text-lg font-bold hover:bg-[#FFD6B0] transition-colors cursor-pointer"
              >
                −
              </button>
              <span className="text-base md:text-lg text-[#4B3621] w-5 text-center">
                {item.children ?? defaultChildren}
              </span>
              <button
                onClick={() => onUpdate(item.id, { children: (item.children ?? defaultChildren) + 1 })}
                className="w-7 h-7 rounded-full bg-[#FF6E00] flex items-center justify-center text-white text-lg font-bold hover:bg-[#e56200] transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Item Details */}
      <div className="flex-1 py-2 relative cart-item-details flex flex-col">
        {/* Type & Price Row */}
        <div className="flex justify-between items-start mb-1">
          <span className="text-base md:text-lg text-[#4B3621]">
            {item.type === "room" ? "Rooms Selection" : "Experience"}
          </span>
          <span className="font-display text-xl md:text-2xl italic font-medium text-[#FF6E00]">
            $ {item.price.toLocaleString()}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl italic font-semibold text-[#4B3621] mb-2">
          {item.title}
        </h3>

        {/* Location & Dates */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-2">
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
            <div ref={datePickerWrapperRef} className="w-[180px] cart-datepicker">
              <DatePicker
                value={dateValue}
                onChange={handleDateChange}
                variant="transparent"
                placeholder="Select Dates"
                mode="range"
                size="sm"
                hideIcon={true}
                open={isDatePickerOpen}
                onOpenChange={setIsDatePickerOpen}
              />
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-3">
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
        <div className="flex flex-wrap gap-2 md:gap-4 mt-auto">
          {/* Edit/Customize Button */}
          <button
            onClick={handleEditClick}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#FF6E00] rounded-xl text-white text-sm md:text-lg hover:bg-[#e56200] transition-colors cursor-pointer"
          >
            <PencilIcon />
            <span>Customize</span>
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

      {/* iPad Mini Specific Styles */}
      <style jsx>{`
        /* iPad Mini Portrait (768x1024) - Compact for 2-column grid */
        @media only screen 
          and (min-width: 768px) 
          and (max-width: 768px) 
          and (min-height: 1024px) 
          and (max-height: 1024px) 
          and (orientation: portrait) {
          .cart-item-card {
            flex-direction: column !important;
            padding: 0.5rem !important;
            height: 100% !important;
          }
          
          .cart-item-image {
            width: 100% !important;
            max-width: 100% !important;
            height: 220px !important;
          }
          
          .cart-item-image img {
            object-fit: cover !important;
            object-position: center !important;
          }
          
          .cart-item-details h3 {
            font-size: 0.95rem !important;
            margin-bottom: 0.5rem !important;
            line-height: 1.3 !important;
          }
          
          .cart-item-details span {
            font-size: 0.8rem !important;
          }
          
          .cart-item-details button {
            padding: 0.375rem 0.625rem !important;
            font-size: 0.75rem !important;
          }
          
          .cart-datepicker {
            max-width: 140px !important;
          }
        }
        
        /* iPad Mini Landscape (1024x768) - Very compact for 3-column grid */
        @media only screen 
          and (min-width: 1024px) 
          and (max-width: 1024px) 
          and (min-height: 768px) 
          and (max-height: 768px) 
          and (orientation: landscape) {
          .cart-item-card {
            flex-direction: column !important;
            padding: 0.5rem !important;
            height: 100% !important;
          }
          
          .cart-item-image {
            width: 100% !important;
            max-width: 100% !important;
            height: 200px !important;
          }
          
          .cart-item-image img {
            object-fit: cover !important;
            object-position: center !important;
          }
          
          .cart-item-details h3 {
            font-size: 0.875rem !important;
            margin-bottom: 0.375rem !important;
            line-height: 1.2 !important;
          }
          
          .cart-item-details span {
            font-size: 0.75rem !important;
          }
          
          .cart-item-details button {
            padding: 0.25rem 0.5rem !important;
            font-size: 0.7rem !important;
          }
          
          .cart-datepicker {
            max-width: 120px !important;
          }
        }

        /* iPhone 14 Pro Max Portrait (430x932) */
        @media only screen 
          and (min-width: 430px) 
          and (max-width: 430px) 
          and (min-height: 932px) 
          and (max-height: 932px) 
          and (orientation: portrait) {
          .cart-item-image {
            height: 280px !important;
          }
          
          .cart-item-image img {
            object-fit: cover !important;
            object-position: center !important;
          }
        }
      `}</style>
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
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
    <section className="w-full bg-[#FFFCF5] py-12 md:py-16 cart-items-section">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-20 cart-container">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 cart-layout">
          {/* Left Column - Cart Items */}
          <div className="flex-1 lg:max-w-[800px] cart-items-column">
            {/* Header Row */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl md:text-[32px] italic font-semibold leading-[43px] text-[#4B3621]">
                Selected Experiences
              </h2>
              <span className="text-xl md:text-2xl text-[#4B3621]">
                {mounted ? itemCount : 0} items
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-[rgba(0,0,0,0.4)] mb-8" />

            {/* Cart Items List */}
            <div className="space-y-6 cart-items-grid">
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
            <div className="w-full lg:w-[467px] shrink-0 cart-summary-column">
              <BookingSummaryCard
                summary={bookingSummary}
                itemCount={itemCount}
              />
            </div>
          )}
        </div>
      </div>

      {/* iPad Mini Specific Styles */}
      <style jsx>{`
        /* iPad Mini Portrait (768x1024) - 2 column grid */
        @media only screen 
          and (min-width: 768px) 
          and (max-width: 768px) 
          and (min-height: 1024px) 
          and (max-height: 1024px) 
          and (orientation: portrait) {
          .cart-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            max-width: 100% !important;
          }
          
          .cart-layout {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          
          .cart-items-column {
            max-width: 100% !important;
          }
          
          .cart-items-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          
          .cart-summary-column {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        
        /* iPad Mini Landscape (1024x768) - 3 column grid */
        @media only screen 
          and (min-width: 1024px) 
          and (max-width: 1024px) 
          and (min-height: 768px) 
          and (max-height: 768px) 
          and (orientation: landscape) {
          .cart-container {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            max-width: 100% !important;
          }
          
          .cart-layout {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          
          .cart-items-column {
            max-width: 100% !important;
          }
          
          .cart-items-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.75rem !important;
          }
          
          .cart-summary-column {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CartItemsSection;
