"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";


/**
 * Star Icon (Tabler Star)
 */
const StarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L14.4 9.2H22L16 13.9L18.4 21L12 16.3L5.6 21L8 13.9L2 9.2H9.6L12 2Z"
      fill="#FF6E00"
      stroke="#FF6E00"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Quote Icon
 */
const QuoteIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 87 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M87 0V22C87 30.4 85.4 37.8 82.2 44.2C79 50.6 74.6 55.8 69 59.8C63.4 63.8 57 66 49.8 66V49.6C55.4 49.6 60 47.4 63.6 43C67.2 38.6 69 33.2 69 26.8H49.8V0H87ZM37.2 0V22C37.2 30.4 35.6 37.8 32.4 44.2C29.2 50.6 24.8 55.8 19.2 59.8C13.6 63.8 7.2 66 0 66V49.6C5.6 49.6 10.2 47.4 13.8 43C17.4 38.6 19.2 33.2 19.2 26.8H0V0H37.2Z"
      fill="#000000"
    />
  </svg>
);

// Define the 5 fixed slots positions
const SLOTS = [
  { id: 'slot-1', left: 147, top: 83 },  // Top Left
  { id: 'slot-2', left: 265, top: 317 }, // Bottom Left
  { id: 'slot-3', left: 482, top: 74 },  // Top Right
  { id: 'slot-4', left: 458, top: 227 }, // ACTIVE SLOT (Middle Right - Jimmy's original spot)
  { id: 'slot-5', left: 315, top: 159 }, // Middle Left
];

const ACTIVE_SLOT_INDEX = 3; // Index in SLOTS array for the active position (slot-4)

/**
 * Data
 */
const TESTIMONIALS_DATA = [
  {
    id: 1, // Sarah
    url: "/images/room/cards/testimonial-1.png",
    rating: 5,
    text: "My trip to the Maldives was absolutely breathtaking! The support from the Travixo team made everything so easy.",
    author: { name: "Sarah Johnson", role: "Photographer" },
  },
  {
    id: 2, // Marcus
    url: "/images/room/cards/testimonial-2.png",
    rating: 5,
    text: "Highly recommend Travixo for anyone looking for unique adventures. The prices are unbeatable and the customer service is top-notch!",
    author: { name: "Marcus Miller", role: "Adventure Guide" },
  },
  {
    id: 3, // Elena
    url: "/images/room/cards/testimonial-3.png",
    rating: 4,
    text: "Working as a digital nomad, I need reliable booking services. Travixo has never let me down.",
    author: { name: "Elena Grace", role: "Blogger" },
  },
  {
    id: 4, // Jimmy (Default Active)
    url: "/images/room/cards/testimonial-4.png",
    rating: 4,
    text: "I had an amazing experience with Travixo! The website is easy to use, prices are competitive, and everything went perfectly on my trip",
    author: { name: "Jimmy Jostar", role: "Traveler" },
  },
  {
    id: 5, // David
    url: "/images/room/cards/testimonial-5.png",
    rating: 5,
    text: "The most seamless travel booking I've ever experienced. From flights to accommodation, everything was perfectly organized.",
    author: { name: "David Chen", role: "Business Consultant" },
  },
];

export const TestimonialSection = () => {
  const [activeId, setActiveId] = React.useState(4);

  // Map testimonial IDs to Slot Indices
  // Initial state: 1->0, 2->1, 3->2, 4->3 (Active), 5->4
  const [slotMapping, setSlotMapping] = useState<{ [key: number]: number }>({
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
  });

  const activeTestimonial = TESTIMONIALS_DATA.find((t) => t.id === activeId) || TESTIMONIALS_DATA[3];

  const handleAvatarClick = (clickedId: number) => {
    if (clickedId === activeId) return;

    // Find current slot of clicked item
    const clickedSlotIndex = slotMapping[clickedId];

    // Find current slot of active item (should be ACTIVE_SLOT_INDEX which is 3)
    const activeSlotIndex = ACTIVE_SLOT_INDEX;

    // Slot 4 (Middle Left) acts as the "Buffer" or "Previous Active" position
    const BUFFER_SLOT_INDEX = 4;

    // Find the item currently in the buffer slot
    const bufferId = Number(Object.keys(slotMapping).find(key => slotMapping[Number(key)] === BUFFER_SLOT_INDEX));

    if (clickedSlotIndex === BUFFER_SLOT_INDEX) {
      // If clicking the item already in the buffer, just swap it with active
      setSlotMapping(prev => ({
        ...prev,
        [clickedId]: activeSlotIndex,
        [activeId]: BUFFER_SLOT_INDEX
      }));
    } else {
      // 3-way rotation for more dynamic animation
      // 1. Clicked item moves to Active Slot (becomes main)
      // 2. Active item moves to Buffer Slot (steps aside)
      // 3. Buffer item moves to Clicked Slot (fills the empty spot)
      setSlotMapping(prev => ({
        ...prev,
        [clickedId]: activeSlotIndex,
        [activeId]: BUFFER_SLOT_INDEX,
        [bufferId]: clickedSlotIndex,
      }));
    }

    setActiveId(clickedId);
  };

  return (
    <section
      className="relative w-full overflow-hidden flex justify-center items-center"
      style={{
        width: "100%",
        backgroundColor: "#FFFCF5",
        minHeight: "575px",
      }}
    >
      {/* Frame 479 Container - Fixed 1440px width context for desktop */}
      <div
        className="relative hidden xl:block mx-auto"
        style={{ width: "1440px", height: "575px", flex: "none" }}
      >
        {/* Component 86 Centered */}
        <div
          className="absolute"
          style={{
            width: "1440px",
            height: "500px",
            left: "calc(50% - 1440px/2)",
            top: "calc(50% - 500px/2 + 0.5px)",
            backgroundColor: "#FFFCF5",
          }}
        >
          {/* Rectangle 76 (Background Cream) */}
          <div
            className="absolute rounded-xl"
            style={{
              width: "1227px",
              height: "475px",
              left: "calc(50% - 1227px/2 - 0.5px)",
              top: "calc(50% - 475px/2 + 0.5px)",
              backgroundColor: "#FFF7E5",
            }}
          />

          {/* Static Connection Line - Always connected to the Active Slot */}
          {/* Active Slot (Index 3): left 458, top 227. Width 100. Right Edge: 558. Top Center+50: 277. */}
          {/* Line 28: left 557.98px. Matches. */}
          <div
            className="absolute"
            style={{
              height: "0px",
              borderTop: "1px solid #FF6E00",
              left: "558px", // 458 + 100
              top: "277px",  // 227 + 50
              width: "131px", // Connects to card at 689px. 689 - 558 = 131.
              transformOrigin: "left center",
              zIndex: 5,
            }}
          />

          {/* Avatars */}
          {TESTIMONIALS_DATA.map((item) => {
            const currentSlotIndex = slotMapping[item.id];
            const slot = SLOTS[currentSlotIndex];
            const isActive = item.id === activeId;

            return (
              <div
                key={item.id}
                onClick={() => handleAvatarClick(item.id)}
                className="absolute cursor-pointer transition-all duration-150 ease-in-out"
                style={{
                  width: "100px",
                  height: "100px",
                  left: slot.left + "px",
                  top: slot.top + "px",
                  borderRadius: "1000px",
                  backgroundColor: "transparent",
                  zIndex: isActive ? 20 : 10,
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={item.url}
                    alt={item.author.name}
                    fill
                    sizes="100px"
                    className={`object-cover transition-opacity duration-100 ${isActive ? "opacity-100" : "opacity-80"
                      }`}
                  />
                </div>
              </div>
            );
          })}

          {/* Fixed Card (Frame 478) */}
          <div
            className="absolute bg-white transition-all duration-100"
            style={{
              width: "610px",
              height: "416px",
              left: "689px",
              top: "calc(50% - 416px/2)",
              borderRadius: "12px",
              boxShadow: "0px 0px 4px rgba(0,0,0,0.05)",
              zIndex: 15,
            }}
          >
            <div className="absolute" style={{ right: "60px", top: "40px" }}>
              <QuoteIcon />
            </div>

            {/* Stars */}
            <div
              className="absolute flex items-center gap-2"
              style={{ left: "80px", top: "100px", width: "120px", height: "24px" }}
            >
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>

            {/* Text */}
            <p
              className="absolute font-poppins font-medium text-[22px] leading-[33px] text-[#4B3621]"
              style={{ width: "458px", height: "132px", left: "80px", top: "141px" }}
            >
              “{activeTestimonial.text}”
            </p>

            {/* Bottom Profile Info */}
            <div
              className="absolute rounded-full overflow-hidden"
              style={{ width: "60px", height: "60px", left: "60px", top: "310px", borderRadius: "1000px" }}
            >
              <Image
                src={activeTestimonial.url}
                alt={activeTestimonial.author.name}
                fill
                sizes="60px"
                className="object-cover"
              />
            </div>

            <div
              className="absolute font-display italic font-semibold text-[18px] leading-[24px] text-[#4B3621]"
              style={{ width: "300px", height: "24px", left: "132px", top: "314px" }}
            >
              {activeTestimonial.author.name}
            </div>

            <div
              className="absolute font-poppins font-normal text-[14px] leading-[21px] text-[#4B3621]"
              style={{ width: "200px", height: "21px", left: "132px", top: "346px" }}
            >
              {activeTestimonial.author.role}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fallback - Simplified */}
      <div className="block xl:hidden w-full px-4 py-8 bg-[#FFFCF5]">
        <div className="bg-[#FFF7E5] rounded-xl p-6 min-h-[400px] flex flex-col justify-center items-center w-full max-w-[400px] mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 w-full mb-6">
            <div className="flex gap-1 mb-4">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="font-poppins text-lg leading-relaxed text-[#4B3621] mb-6">
              “{activeTestimonial.text}”
            </p>
            <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shrink-0">
                <Image
                  src={activeTestimonial.url}
                  alt={activeTestimonial.author.name}
                  fill
                  sizes="50px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-display italic font-semibold text-lg text-[#4B3621]">
                  {activeTestimonial.author.name}
                </div>
                <div className="text-sm font-medium text-[#4B3621]/60">
                  {activeTestimonial.author.role}
                </div>
              </div>
            </div>
          </div>

          {/* Mini avatars for mobile */}
          <div className="flex gap-3 flex-wrap justify-center">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative w-12 h-12 rounded-full overflow-hidden border-2 cursor-pointer transition-all duration-200 ${activeId === item.id
                  ? 'border-[#FF6E00] scale-110 shadow-sm'
                  : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
              >
                <Image
                  src={item.url}
                  fill
                  sizes="(max-width: 768px) 48px, 100vw"
                  className="object-cover"
                  alt={item.author.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;