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
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState(4);

  // Map testimonial IDs to Slot Indices
  // Initial state: 1->0, 2->1, 3->2, 4->3 (Active), 5->4
  const [slotMapping, setSlotMapping] = useState<{ [key: number]: number }>({
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTestimonial = TESTIMONIALS_DATA.find((t) => t.id === activeId) || TESTIMONIALS_DATA[3];

  const handleAvatarClick = (clickedId: number) => {
    if (clickedId === activeId) return;

    setSlotMapping(prev => ({
      ...prev,
      [clickedId]: prev[activeId],
      [activeId]: prev[clickedId]
    }));

    setActiveId(clickedId);
  };

  if (!mounted) return null;

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
        style={{ maxWidth: "1440px", width: "100%", height: "575px", flex: "none" }}
      >
        {/* Component 86 Centered */}
        <div
          className="absolute"
          style={{
            maxWidth: "1440px",
            width: "100%",
            height: "500px",
            left: "50%",
            transform: "translateX(-50%)",
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
                className="absolute cursor-pointer transition-all duration-700 ease-in-out"
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
                    className={`object-cover transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-80"
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
      <div className="block xl:hidden w-full px-4 py-8">
        <div className="bg-[#FFF7E5] rounded-xl p-6 min-h-[400px] flex flex-col justify-center items-center mobile-testimonial-container">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-[340px] mobile-testimonial-card">
            <div className="flex gap-1 mb-4">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="font-poppins text-lg text-brand-brown mb-6">
              “{activeTestimonial.text}”
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image
                  src={activeTestimonial.url}
                  alt={activeTestimonial.author.name}
                  fill
                  sizes="50px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-display italic font-semibold text-base text-brand-brown">
                  {activeTestimonial.author.name}
                </div>
                <div className="text-sm text-brand-brown/80">
                  {activeTestimonial.author.role}
                </div>
              </div>
            </div>
          </div>

          {/* Mini avatars for mobile - now using slot mapping for animation */}
          <div className="relative mt-8 mobile-avatars-list">
            {TESTIMONIALS_DATA.map((item) => {
              const currentSlotIndex = slotMapping[item.id];
              const isActive = item.id === activeId;

              return (
                <div
                  key={item.id}
                  onClick={() => handleAvatarClick(item.id)}
                  className={`mobile-avatar-item slot-${currentSlotIndex} ${isActive ? 'active' : ''}`}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-transparent transition-all duration-300 avatar-circle">
                    <Image
                      src={item.url}
                      fill
                      sizes="70px"
                      className="object-cover"
                      alt="avatar"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connection line for landscape */}
          <div className="mobile-connection-line" />
        </div>
      </div>

      <style jsx>{`
        /* Base stability for all mobile/tablet versions */
        .mobile-testimonial-container {
          position: relative;
        }
        
        .mobile-connection-line {
          display: none;
        }

        .mobile-testimonial-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 340px;
          z-index: 5;
        }

        /* Avatar slot animation base */
        .mobile-avatars-list {
          position: relative !important;
          margin-top: 30px !important;
        }

        .mobile-avatar-item {
          position: absolute !important;
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) !important;
          cursor: pointer;
          width: 45px;
          height: 45px;
        }

        .mobile-avatar-item.active .avatar-circle {
          border-color: #FF6E00 !important;
          transform: scale(1.15);
          opacity: 1 !important;
        }

        .mobile-avatar-item:not(.active) {
          opacity: 0.7;
        }

        .mobile-avatar-item:not(.active):hover {
          opacity: 1;
        }

        /* Default vertical slots for small mobile */
        .mobile-avatars-list { height: 70px; width: 100%; display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
        .mobile-avatar-item { position: relative !important; }

        @media (max-height: 500px) and (orientation: landscape) {
          .mobile-testimonial-container {
            flex-direction: row !important;
            justify-content: center !important;
            gap: 60px !important;
            padding: 20px !important;
            min-height: 320px !important;
          }
          .mobile-testimonial-card {
            max-width: 420px !important;
            min-height: 260px;
          }
        }

        /* iPhone 14 Pro Max & iPad Mini Landscape Specialized Layout */
        @media only screen and (min-width: 900px) and (max-width: 1279px) and (orientation: landscape) {
          .mobile-testimonial-container {
            flex-direction: row !important;
            justify-content: space-between !important;
            gap: 20px !important;
            padding-left: 60px !important;
            padding-right: 60px !important;
            align-items: center !important;
          }

          .mobile-connection-line {
            display: block;
            position: absolute;
            left: 232px;
            width: 225px;
            height: 1.5px;
            background-color: #FF6E00;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
          }

          @media (max-width: 950px) {
            .mobile-connection-line { width: 125px !important; }
          }
          
          .mobile-testimonial-card {
            margin: 0 !important;
            width: 480px !important;
            max-width: 500px !important;
            order: 2 !important;
          }

          .mobile-avatars-list {
            order: 1 !important;
            width: 170px !important;
            height: 400px !important;
            margin: 0 !important;
          }

          .mobile-avatar-item { width: 70px !important; height: 70px !important; position: absolute !important; }
          .slot-0 { left: 0; top: 10px; }
          .slot-1 { left: 0; top: 110px; }
          .slot-2 { left: 0; top: 220px; }
          .slot-4 { left: 0; top: 320px; }
          .slot-3 { left: 100px; top: 165px; } 
        }

        /* iPhone 14 Pro Max Portrait */
        @media only screen and (min-width: 420px) and (max-width: 767px) and (orientation: portrait) {
           .mobile-testimonial-container {
             flex-direction: row !important;
             justify-content: center !important;
             gap: 35px !important;
             padding: 20px !important;
             align-items: center !important;
           }
           
           .mobile-avatars-list {
             order: 1 !important; 
             width: 130px !important; 
             height: 310px !important;
             margin: 0 !important;
           }

           .mobile-avatar-item { width: 55px !important; height: 55px !important; position: absolute !important; }
           .slot-0 { left: 0; top: 0; }
           .slot-1 { left: 0; top: 85px; }
           .slot-2 { left: 0; top: 170px; }
           .slot-4 { left: 0; top: 255px; }
           .slot-3 { left: 75px; top: 127px; }

           .mobile-testimonial-card {
             width: 235px !important;
             order: 2 !important;
             margin: 0 !important;
             padding: 14px !important;
             height: 310px !important;
           }
           
           .mobile-testimonial-card p { font-size: 15px !important; line-height: 1.4 !important; }

           .mobile-connection-line {
             display: block;
             position: absolute;
             left: 155px;
             width: 17px;
             height: 1.5px;
             background-color: #FF6E00;
             top: 50%;
             transform: translateY(-50%);
             z-index: 10;
           }
        }

        /* iPad Mini Portrait - Match Landscape side-by-side layout */
        @media only screen and (min-width: 768px) and (max-width: 850px) and (orientation: portrait) {
          .mobile-testimonial-container {
            flex-direction: row !important;
            justify-content: space-between !important;
            gap: 20px !important;
            padding-left: 40px !important;
            padding-right: 40px !important;
            align-items: center !important;
          }

          .mobile-connection-line {
            display: block;
            position: absolute;
            left: 195px;
            width: 100px;
            height: 1.5px;
            background-color: #FF6E00;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
          }
          
          .mobile-testimonial-card {
            margin: 0 !important;
            width: 420px !important;
            max-width: 500px !important;
            order: 2 !important;
          }

          .mobile-avatars-list {
            order: 1 !important; 
            width: 160px !important; 
            height: 380px !important;
            margin: 0 !important;
          }

          .mobile-avatar-item { width: 65px !important; height: 65px !important; position: absolute !important; }
          .slot-0 { left: 0; top: 10px; }
          .slot-1 { left: 0; top: 105px; }
          .slot-2 { left: 0; top: 205px; }
          .slot-4 { left: 0; top: 305px; }
          .slot-3 { left: 95px; top: 157px; } 
        }
      `}</style>
    </section>
  );
};