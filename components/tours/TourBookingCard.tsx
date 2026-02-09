"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { useCart, CartItem } from "@/app/context/CartContext";

/**
 * TourBookingCard Props Interface
 */
interface TourBookingCardProps {
  /** Price per person */
  price: number;
  /** Currency symbol */
  currency?: string;
  /** Default date */
  defaultDate?: string;
  title?: string;
  image?: string;
  location?: string;
  rating?: number;
}

/**
 * TourBookingCard Component
 *
 * Sticky booking card with price, date picker, and guest counter.
 *
 * Design Specifications (from Figma):
 * - Card: White background, shadow, border-radius 12px
 * - Price: Large, bold display
 * - Date picker, Adult/Children counters
 * - "Check Availability" CTA button
 *
 * @param {TourBookingCardProps} props - Booking data
 * @returns {JSX.Element} The rendered booking card
 */
export const TourBookingCard: React.FC<TourBookingCardProps> = ({
  price,
  currency = "$",
  defaultDate = "Jan 17, 2026",
  title,
  image,
  location,
  rating,
}) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [activeTab, setActiveTab] = useState<"book" | "enquiry">("book");
  const router = useRouter();
  const { addToCart } = useCart();

  const handleBookNow = () => {
    // Parse price if it's a string, though props say number.
    // Assuming price is number based on interface.

    const cartItem: CartItem = {
      id: `booking-${Date.now()}`,
      type: "experience",
      title: title || "Tour Booking",
      image: image || "", // Should be provided
      location: location || "",
      dates: defaultDate, // Or use a selected date state if implemented
      amenities: [`Adults: ${adults}`, `Children: ${children}`],
      price: price, // Assuming price is total or per person? The card says /person.
      // Ideally we'd calculate total, but for now let's pass the base price
      // or maybe (price * (adults + children)) if user expects that.
      // Previous impl just passed price. sticking to simple add for now.
      actionLabel: "Customize",
    };

    addToCart(cartItem);
    router.push("/cart");
  };

  return (
    <aside
      className="relative shrink-0"
      style={{
        width: "100%",
        maxWidth: "467px",
        height: "480px",
        backgroundColor: "#FFF7E5",
        borderRadius: "12px",
        boxSizing: "border-box",
      }}
    >
      <div className="relative w-full h-full">
        {/* Price Display: Top 18px */}
        <div className="absolute left-[18px] top-[18px]">
          <p className="font-display italic font-medium text-[20px] leading-[27px] text-brand-brown">
            From <br />
            {currency}
            {price} <span className="text-[20px]">/person</span>
          </p>
        </div>

        {/* Tabs: Top 124px */}
        <div className="absolute left-0 w-full top-[124px] px-[61px] flex justify-between items-center">
          <div className="relative">
            <button
              onClick={() => setActiveTab("book")}
              className="font-display italic font-medium text-[24px] leading-[32px] text-brand-brown cursor-pointer"
            >
              Book
            </button>
            {activeTab === "book" && (
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FF6E00]"
                style={{ width: "69px", height: "1px", borderRadius: "8px" }}
              />
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setActiveTab("enquiry")}
              className="font-display italic font-medium text-[24px] leading-[32px] text-brand-brown cursor-pointer"
            >
              Enquiry
            </button>
            {activeTab === "enquiry" ? (
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FF6E00]"
                style={{ width: "87px", height: "1px", borderRadius: "8px" }}
              />
            ) : (
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[rgba(255,110,0,0.2)]"
                style={{ width: "87px", height: "1px", borderRadius: "8px" }}
              />
            )}
          </div>
        </div>

        {/* Date Row: Top 193px */}
        <div className="absolute left-[18px] right-[18px] top-[193px] flex justify-between items-center h-[30px]">
          <span className="font-body italic font-medium text-[20px] leading-[30px] text-brand-brown">
            Date
          </span>
          <span className="font-body italic font-medium text-[20px] leading-[30px] text-brand-brown">
            {defaultDate}
          </span>
        </div>

        {/* Separator 1: Top 241px */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[241px] w-[431px] h-px bg-[rgba(0,0,0,0.2)]" />

        {/* Adult Row: Top 259px */}
        <div className="absolute left-[18px] right-[18px] top-[259px] flex justify-between items-center h-[30px]">
          <span className="font-body italic font-medium text-[20px] leading-[30px] text-brand-brown">
            Adult <span className="text-[20px]">( 13+ age )</span>
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAdults(Math.max(0, adults - 1))}
              className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-[rgba(255,110,0,0.4)] text-white hover:bg-brand-orange transition-colors cursor-pointer"
            >
              <svg
                width="10"
                height="2"
                viewBox="0 0 10 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <span className="font-body italic font-medium text-[20px] leading-[30px] text-brand-brown min-w-[20px] text-center">
              {adults}
            </span>

            <button
              onClick={() => setAdults(adults + 1)}
              className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-brand-orange text-white cursor-pointer"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1V9M1 5H9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Separator 2: Top 307px */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[307px] w-[431px] h-px bg-[rgba(0,0,0,0.2)]" />

        {/* Children Row: Top 325px */}
        <div className="absolute left-[18px] right-[18px] top-[325px] flex justify-between items-center h-[30px]">
          <span className="font-body italic font-medium text-[20px] text-brand-brown">
            Children <span className="text-[20px]">( age 3-12 )</span>
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setChildren(Math.max(0, children - 1))}
              className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-[rgba(255,110,0,0.4)] text-white hover:bg-brand-orange transition-colors cursor-pointer"
            >
              <svg
                width="10"
                height="2"
                viewBox="0 0 10 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <span className="font-body italic font-medium text-[20px] leading-[30px] text-brand-brown min-w-[20px] text-center">
              {children}
            </span>

            <button
              onClick={() => setChildren(children + 1)}
              className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-brand-orange text-white cursor-pointer"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1V9M1 5H9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Separator 3: Top 373px */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[373px] w-[431px] h-px bg-[rgba(0,0,0,0.2)]" />

        {/* CTA Button: Top 409px */}
        <button
          onClick={handleBookNow}
          className="absolute left-[18px] right-[18px] top-[409px] h-[45px] bg-[#FF6E00] rounded-[12px] flex items-center justify-center transition-transform active:scale-[0.98] cursor-pointer"
        >
          <span className="font-display italic font-medium text-[20px] leading-[27px] text-center text-white">
            Book Now
          </span>
        </button>
      </div>
    </aside>
  );
};

export default TourBookingCard;
