"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/context/ToastContext";
import { useCart, CartItem } from "@/app/context/CartContext";
import { DatePicker } from "@/components/ui/DatePicker";

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
  /** Item type in cart */
  type?: "room" | "experience";
}

/**
 * TourBookingCard Component
 *
 * Sticky booking card with price, date selection, and guest counters.
 * Matches the design and functionality of the RoomDetail booking widget.
 *
 * @param {TourBookingCardProps} props - Booking data
 * @returns {JSX.Element} The rendered booking card
 */
export const TourBookingCard: React.FC<TourBookingCardProps> = ({
  price,
  currency = "$",
  defaultDate,
  title = "",
  image = "",
  location = "",
  type = "experience",
}) => {
  const [activeTab, setActiveTab] = useState<"book" | "enquiry">("book");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  // Default to today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [selectedDate, setSelectedDate] = useState(defaultDate || getTodayDate());
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  const { addToCart } = useCart();

  // Mock list of fully booked dates (red dates)
  const bookedDates = [
    "2026-02-03",
    "2026-02-14",
    "2026-02-15",
    "2026-02-25",
    "2026-03-05",
    "2026-03-10",
  ];

  // Reset availability when inputs change
  useEffect(() => {
    setIsAvailable(false);
  }, [selectedDate, adults, children]);

  // Enquiry Form State
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });

  const [contentHeight, setContentHeight] = useState<number | string>("auto");
  const [linePositions, setLinePositions] = useState<number[]>([]);
  const [lineOpacities, setLineOpacities] = useState<number[]>([]);

  const bookRef = useRef<HTMLDivElement>(null);
  const enquiryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      const activeRef = activeTab === "book" ? bookRef : enquiryRef;
      if (activeRef.current && containerRef.current) {
        // Measure container height - Only use fixed height on desktop (xl+)
        if (window.innerWidth >= 1280) {
          setContentHeight(activeRef.current.scrollHeight);
        } else {
          setContentHeight("auto");
        }

        // Measure divider positions
        const items = activeRef.current.querySelectorAll('.booking-row');
        const positions = Array.from(items).map(item => {
          const element = item as HTMLElement;
          return element.offsetTop + element.offsetHeight;
        });
        setLinePositions(positions);

        // Set opacities based on number of lines
        const opacities = Array(4).fill(0).map((_, i) => i < positions.length ? 1 : 0);
        setLineOpacities(opacities);
      }
    };

    measure();
    const timer = setTimeout(measure, 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const router = useRouter();
  const { showToast } = useToast();

  const handleAction = async () => {
    if (activeTab === "book") {
      // Robust date validation
      const isInvalidDate = !selectedDate ||
        selectedDate === "Invalid Date" ||
        selectedDate.includes("Invalid") ||
        selectedDate.trim() === "";

      if (isInvalidDate) {
        showToast("Please select a valid date first.", "warning");
        setIsAvailable(false); // Force reset
        return;
      }

      if (adults === 0 && children === 0) {
        showToast("Please select at least one guest.", "warning");
        return;
      }

      if (isAvailable) {
        // Step 2: Book Now
        const cartItem: CartItem = {
          id: `${title}-${Date.now()}`,
          type: type,
          title: title,
          image: image,
          location: location,
          dates: selectedDate,
          amenities: [`${adults} Adults, ${children} Children`],
          price: price * (adults + children),
          actionLabel: "Customize",
        };
        addToCart(cartItem);
        router.push("/cart");
        return;
      }

      // Step 1: Check Availability
      setIsChecking(true);
      showToast(
        `Checking availability for ${selectedDate}...`,
        "info",
      );

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsChecking(false);

      // Simple availability logic: if it's not a "red" date, it's available
      const isActuallyBooked = bookedDates.includes(selectedDate);

      if (!isActuallyBooked) {
        setIsAvailable(true);
        showToast("Great news! This experience is available for your selected dates.", "success");
      } else {
        setIsAvailable(false);
        showToast("Sorry, this experience is fully booked for the selected dates. Please try another date.", "error");
      }
    } else {
      if (!enquiryData.name || !enquiryData.email || !enquiryData.question) {
        showToast("Please fill in all required fields.", "warning");
        return;
      }

      setIsChecking(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsChecking(false);
      showToast(
        `Thank you, ${enquiryData.name}! Your enquiry has been sent. We will contact you soon!`,
        "success",
      );
      // Reset form
      setEnquiryData({
        name: "",
        email: "",
        phone: "",
        question: "",
      });
    }
  };

  return (
    <aside
      className="bg-[#FFF7E5] rounded-[12px] w-full xl:w-[467px] relative p-6"
      style={{ minHeight: "auto" }}
    >
      {/* Price Section */}
      <div className="flex flex-col mb-8">
        <span className="font-display italic font-medium text-[20px] leading-[27px] text-[#4B3621]">
          From
        </span>
        <span className="font-display italic font-medium text-[20px] leading-[27px] text-[#4B3621]">
          {currency}{price} <span className="text-[14px]">/person</span>
        </span>
      </div>

      {/* Tabs Section */}
      <div className="flex gap-12 md:gap-20 mb-10 justify-center">
        <div
          className="relative cursor-pointer"
          onClick={() => setActiveTab("book")}
        >
          <span className="font-display italic font-medium text-[24px] leading-[32px] text-[#4B3621]">
            Book
          </span>
          <div
            className={`absolute -bottom-1 left-[-9px] w-[69px] h-px rounded-[8px] transition-colors duration-300 ${activeTab === "book" ? "bg-[#FF6E00]" : "bg-transparent"
              }`}
          />
        </div>

        <div
          className="relative cursor-pointer"
          onClick={() => setActiveTab("enquiry")}
        >
          <span className="font-display italic font-medium text-[24px] leading-[32px] text-[#4B3621]">
            Enquiry
          </span>
          <div
            className={`absolute -bottom-1 left-[-2px] w-[87px] h-px rounded-[8px] transition-colors duration-300 ${activeTab === "enquiry" ? "bg-[#FF6E00]" : "bg-transparent"
              }`}
          />
        </div>
      </div>

      {/* Enquiry Header Transition */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === "enquiry" ? "max-h-20 opacity-100 mb-4" : "max-h-0 opacity-0 mb-0"
          }`}
      >
        <p className="font-display italic font-normal text-[16px] leading-[21px] text-[#4B3621]/80 px-1">
          Have a question before booking? Message us to learn more.
        </p>
      </div>

      {/* Rows Container */}
      <div
        ref={containerRef}
        className="relative transition-all duration-500 ease-in-out"
        style={{ height: contentHeight === "auto" ? "auto" : `${contentHeight}px` }}
      >
        {/* Animated Shared Dividers */}
        {[0, 1, 2, 3].map((idx) => (
          <div
            key={idx}
            className="absolute left-0 right-0 h-px bg-black/10 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{
              top: `${linePositions[idx] || 0}px`,
              opacity: lineOpacities[idx] ?? 0,
              visibility: (lineOpacities[idx] ?? 0) > 0 ? 'visible' : 'hidden'
            }}
          />
        ))}

        <div
          ref={bookRef}
          className={`w-full transition-all duration-500 ease-in-out ${activeTab === "book"
            ? "opacity-100 translate-x-0 relative z-50"
            : "opacity-0 -translate-y-4 absolute top-0 left-0 pointer-events-none z-0"
            }`}
        >
          {/* Date Row */}
          <div className="flex justify-between items-center pt-2 pb-6 booking-row">
            <label className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621]">
              Date
            </label>
            <div className="flex-1 flex justify-end">
              <DatePicker
                value={selectedDate}
                onChange={(val) => {
                  if (typeof val === "string") {
                    setSelectedDate(val);
                  }
                }}
                bookedDates={bookedDates}
                variant="transparent"
                size="sm"
                align="right"
                className="w-auto min-w-[150px]"
              />
            </div>
          </div>
          {/* Adult Row */}
          <div className="flex justify-between items-center pt-6 pb-6 booking-row">
            <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621]">
              Adult ( 13+ age )
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAdults(Math.max(0, adults - 1))}
                className="w-[24px] h-[24px] rounded-full bg-[#FF6E00]/20 flex items-center justify-center hover:bg-[#FF6E00]/40 transition-colors cursor-pointer"
              >
                <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                  <rect width="10" height="2" rx="1" fill="#4B3621" />
                </svg>
              </button>
              <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621] w-[24px] text-center">
                {adults}
              </span>
              <button
                onClick={() => setAdults(adults + 1)}
                className="w-[24px] h-[24px] rounded-full bg-[#FF6E00] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 0V10M0 5H10" stroke="white" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Children Row */}
          <div className="flex justify-between items-center pt-6 pb-6 booking-row">
            <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621]">
              Children ( age 3-12 )
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="w-[24px] h-[24px] rounded-full bg-[#FF6E00]/20 flex items-center justify-center hover:bg-[#FF6E00]/40 transition-colors cursor-pointer"
              >
                <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                  <rect width="10" height="2" rx="1" fill="#4B3621" />
                </svg>
              </button>
              <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621] w-[24px] text-center">
                {children}
              </span>
              <button
                onClick={() => setChildren(children + 1)}
                className="w-[24px] h-[24px] rounded-full bg-[#FF6E00] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 0V10M0 5H10" stroke="white" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={enquiryRef}
          className={`w-full transition-all duration-500 ease-in-out ${activeTab === "enquiry"
            ? "opacity-100 translate-x-0 relative z-50"
            : "opacity-0 translate-x-10 absolute top-0 left-0 pointer-events-none z-0"
            }`}
        >
          <div className="pt-2 pb-2 booking-row">
            <input
              type="text"
              placeholder="Full Name"
              value={enquiryData.name}
              onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
              className="w-full bg-transparent border-none font-sans text-[16px] text-[#4B3621] placeholder:text-[#4B3621]/40 focus:outline-none"
            />
          </div>

          <div className="pt-4 pb-2 booking-row">
            <input
              type="email"
              placeholder="Email"
              value={enquiryData.email}
              onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
              className="w-full bg-transparent border-none font-sans text-[16px] text-[#4B3621] placeholder:text-[#4B3621]/40 focus:outline-none"
            />
          </div>

          <div className="pt-4 pb-2 booking-row">
            <input
              type="tel"
              placeholder="Phone"
              value={enquiryData.phone}
              onChange={(e) => setEnquiryData({ ...enquiryData, phone: e.target.value })}
              className="w-full bg-transparent border-none font-sans text-[16px] text-[#4B3621] placeholder:text-[#4B3621]/40 focus:outline-none"
            />
          </div>

          <div className="pt-4 pb-1 booking-row">
            <textarea
              placeholder="Your question"
              rows={1}
              value={enquiryData.question}
              onChange={(e) => setEnquiryData({ ...enquiryData, question: e.target.value })}
              className="w-full bg-transparent border-none font-sans text-[16px] text-[#4B3621] placeholder:text-[#4B3621]/40 focus:outline-none resize-none pt-1"
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-8">
        <button
          onClick={handleAction}
          disabled={isChecking}
          className={`w-full h-[50px] bg-[#FF6E00] rounded-[12px] border border-[#FF6E00] overflow-hidden transition-all duration-300 active:scale-95 group relative cursor-pointer ${isChecking ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
          <span className="relative z-0 font-display italic font-normal text-[18px] leading-[24px] text-white group-hover:text-[#FF6E00] transition-colors duration-300 flex items-center justify-center gap-2">
            {isChecking ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {activeTab === "book" ? "Checking..." : "Sending..."}
              </>
            ) : (
              <div className="relative h-6 w-full flex items-center justify-center">
                <span className={`absolute transition-all duration-500 ease-in-out ${activeTab === "book"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
                  }`}>
                  {isAvailable ? "Book Now" : "Check Availability"}
                </span>
                <span className={`absolute transition-all duration-500 ease-in-out ${activeTab === "enquiry"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}>
                  Send Enquiry
                </span>
              </div>
            )}
          </span>
        </button>
      </div>
    </aside>
  );
};

export default TourBookingCard;
