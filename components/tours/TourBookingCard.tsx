"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/context/ToastContext";
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
  defaultDate = "2026-01-17",
}) => {
  const [activeTab, setActiveTab] = useState<"book" | "enquiry">("book");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [isChecking, setIsChecking] = useState(false);

  // Enquiry Form State
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });

  const router = useRouter();
  const { showToast } = useToast();

  const handleAction = async () => {
    if (activeTab === "book") {
      if (adults === 0 && children === 0) {
        showToast("Please select at least one guest.", "warning");
        return;
      }

      setIsChecking(true);
      showToast(
        `Checking availability for ${adults} Adults and ${children} Children on ${selectedDate}...`,
        "info",
      );

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsChecking(false);

      // Randomly simulate availability (70% chance available)
      const isAvailable = Math.random() > 0.3;

      if (isAvailable) {
        showToast("Great news! This experience is available for your selected dates.", "success");
      } else {
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

      router.push("/contact");
    }
  };

  return (
    <aside
      className="bg-[#FFF7E5] rounded-[12px] w-full lg:w-[467px] relative p-6"
      style={{ minHeight: "480px" }}
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
      <div className="flex gap-8 md:gap-20 mb-10 justify-center">
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

      {/* Rows */}
      <div className="space-y-6">
        {activeTab === "book" ? (
          <>
            {/* Date Row */}
            <div className="flex justify-between items-center py-2 border-b border-black/10">
              <label
                className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621]"
              >
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
                  variant="transparent"
                  size="sm"
                  align="right"
                  className="w-auto min-w-[150px]"
                />
              </div>
            </div>
            {/* Adult Row */}
            <div className="flex justify-between items-center py-2 border-b border-black/10">
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
            <div className="flex justify-between items-center py-2 border-b border-black/10">
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
          </>
        ) : (
          <div className="space-y-4 pt-2">
            <p className="font-display italic font-normal text-[16px] leading-[21px] text-[#4B3621]/80 mb-4">
              Have a question before booking? Message us to learn more.
            </p>

            <div className="border-b border-black/10 pb-1">
              <input
                type="text"
                placeholder="Full Name"
                value={enquiryData.name}
                onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                className="w-full bg-transparent border-none font-sans text-[16px] text-[#4B3621] placeholder:text-[#4B3621]/40 focus:outline-none"
              />
            </div>

            <div className="border-b border-black/10 pb-1">
              <input
                type="email"
                placeholder="Email"
                value={enquiryData.email}
                onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                className="w-full bg-transparent border-none font-sans text-[16px] text-[#4B3621] placeholder:text-[#4B3621]/40 focus:outline-none"
              />
            </div>

            <div className="border-b border-black/10 pb-1">
              <input
                type="tel"
                placeholder="Phone"
                value={enquiryData.phone}
                onChange={(e) => setEnquiryData({ ...enquiryData, phone: e.target.value })}
                className="w-full bg-transparent border-none font-sans text-[16px] text-[#4B3621] placeholder:text-[#4B3621]/40 focus:outline-none"
              />
            </div>

            <div className="border-b border-black/10 pb-1">
              <textarea
                placeholder="Your question"
                rows={1}
                value={enquiryData.question}
                onChange={(e) => setEnquiryData({ ...enquiryData, question: e.target.value })}
                className="w-full bg-transparent border-none font-sans text-[16px] text-[#4B3621] placeholder:text-[#4B3621]/40 focus:outline-none resize-none pt-1"
              />
            </div>
          </div>
        )}
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
          <span className="relative z-10 font-display italic font-normal text-[18px] leading-[24px] text-white group-hover:text-[#FF6E00] transition-colors duration-300 flex items-center justify-center gap-2">
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
              activeTab === "book" ? "Check Availability" : "Send Enquiry"
            )}
          </span>
        </button>
      </div>
    </aside>
  );
};

export default TourBookingCard;

