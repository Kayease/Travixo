"use client";
import React, { useRef } from "react";
import Image from "next/image";

/**
 * Destination data for the carousel
 */
const DESTINATIONS = [
  {
    id: "maldives",
    name: "Maldives",
    listings: 3,
    image: "/images/home/destination/frame-21.png",
  },
  {
    id: "dubai",
    name: "Dubai",
    listings: 3,
    image: "/images/home/destination/frame-21-1.png",
  },
  {
    id: "india",
    name: "India",
    listings: 3,
    image: "/images/home/destination/frame-21-2.png",
  },
  {
    id: "japan",
    name: "Japan",
    listings: 3,
    image: "/images/home/destination/frame-21-3.png",
  },
  {
    id: "south-korea",
    name: "South Korea",
    listings: 3,
    image: "/images/home/destination/frame-21-4.png",
  },
];

/**
 * Plane Icon for the badge
 */
const PlaneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 2.5L9.16667 10.8333M17.5 2.5L12.5 17.5L9.16667 10.8333M17.5 2.5L2.5 7.5L9.16667 10.8333"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * DestinationCard Component
 * Figma specs: 418x657px card with unique arch shape
 * Image: 418x519px at top:0, border-radius: 1000px
 * Container has curved cutout shape at bottom-left
 * TRAVEL TO: top: 537px, Inter 500 18px/22px
 * Destination name: top: 577px, Playfair Display italic 500 28px/37px
 */
const DestinationCard = ({
  name,
  listings,
  image,
}: {
  name: string;
  listings: number;
  image: string;
}) => (
  <div
    className="shrink-0 relative cursor-pointer group transition-all duration-500 ease-in-out hover:scale-[1.02]"
    style={{
      width: "418px",
      height: "657px",
    }}
    onClick={() => console.log(`Viewing destination: ${name}`)}
  >
    {/* Card Container with curved cutout shape */}
    <div
      className="absolute overflow-hidden"
      style={{
        width: "418px",
        height: "400px",
        left: "0px",
        bottom: "20px",
        borderRadius: "0px 0px 0px 200px",
        zIndex: 30, // Increased z-index
        border: "1px solid #FF6E00",
        borderTop: "none",
      }}
    >
      {/* Smooth Orange Fill Animation from Bottom with Requested Texture */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full bg-brand-orange transition-all duration-500 ease-in-out z-0"
        style={{
          backgroundImage: "url('/images/home/destination/hover-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* TRAVEL TO Label */}
      <span
        className="absolute text-center z-30 transition-colors duration-500 group-hover:text-white"
        style={{
          width: "98px",
          height: "22px",
          left: "calc(50% - 98px/2)",
          top: "117px", // Adjusted based on 400px height (537 - (657 - 400 - 20) = 537 - 237 = 300? No, let's keep absolute positioning relative to parent if possible, or adjust this)
          fontFamily: "'Inter', sans-serif",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "22px",
          color: "#4B3621",
        }}
      >
        TRAVEL TO
      </span>

      {/* Destination Name */}
      <h3
        className="absolute text-center font-display italic z-30 transition-colors duration-500 group-hover:text-white"
        style={{
          left: "0",
          right: "0",
          top: "157px", // Adjusted similarly
          fontWeight: 500,
          fontSize: "28px",
          lineHeight: "37px",
          color: "#4B3621",
        }}
      >
        {name}
      </h3>
    </div>

    {/* Right border extension */}
    <div
      className="absolute"
      style={{
        width: "1px",
        height: "238px", // Connects perfectly to the top of the 400px bottom container
        right: "0px",
        top: "0px",
        background: "#FF6E00",
        zIndex: 20,
      }}
    />

    {/* Left border extension - connects image to bottom container */}
    <div
      className="absolute"
      style={{
        width: "1px",
        height: "238px", // Connects perfectly
        left: "0px",
        top: "0px",
        background: "#FF6E00",
        zIndex: 20,
      }}
    />

    {/* Image Container - Frame 21 */}
    <div
      className="absolute overflow-hidden"
      style={{
        width: "418px",
        height: "519px",
        left: "calc(50% - 418px/2)",
        top: "0px",
        borderRadius: "1000px",
        boxSizing: "border-box",
        border: "1px solid #FF6E00",
        zIndex: 10, // Lower z-index so it doesn't clip the bottom curved content
      }}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{ transformOrigin: "top center" }} // Prevent cutting from top
        sizes="418px"
      />
    </div>

    {/* Listings Badge - restored and positioned */}
    <div
      className="absolute left-1/2 -translate-x-1/2 z-40 bg-[#FF6E00] px-4 py-1.5 rounded-2xl shadow-md transition-transform duration-500 group-hover:translate-y-[-4px]"
      style={{
        top: "428px",
      }}
    >
      <span className="font-display italic font-medium text-[14px] leading-[19px] text-white whitespace-nowrap">
        {listings} Listings
      </span>
    </div>
  </div>
);

/**
 * DestinationsSection Component
 */
export const DestinationsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);

  // Auto-scroll logic using requestAnimationFrame for maximum smoothness
  React.useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;
    const speed = 0.05; // pixels per ms

    const step = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isDragging && !isHovering && scrollRef.current) {
        scrollRef.current.scrollLeft += speed * deltaTime;
        const maxScroll =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScroll - 1) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, isHovering]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Duplicate the destinations for a seamless visual loop
  const displayDestinations = [...DESTINATIONS, ...DESTINATIONS];

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundColor: "#FFF9F0",
        backgroundImage: "url('/images/hero-bg-texture.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "761px",
      }}
    >
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex">
          {/* Left Content */}
          <div className="w-[422px] shrink-0 pl-[80px] pt-[138px]">
            <div
              className="inline-flex items-center justify-center gap-2 w-[204px] h-[30px] rounded-xl mb-[32px] cursor-default"
              style={{ backgroundColor: "#FF6E00" }}
            >
              <PlaneIcon />
              <span className="font-display italic font-medium text-[14px] leading-[19px] text-white">
                DESTINATION LIST
              </span>
            </div>

            <h2 className="font-display italic font-semibold text-[28px] leading-[37px] text-brand-brown mb-[18px] max-w-[322px]">
              Explore the Beautiful Places Around World
            </h2>

            <p className="font-body font-medium text-[18px] leading-[27px] text-brand-brown mb-[52px] max-w-[390px]">
              Flexible classes refers to the process of acquiring is knowledge
              free.
            </p>

            <button
              className="w-[300px] h-[50px] bg-white border border-brand-orange rounded-[12px] font-display italic font-normal text-[18px] leading-[24px] text-brand-orange overflow-hidden transition-all duration-300 relative group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => console.log("Discovering more destinations...")}
            >
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover:h-full transition-all duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Discover More
              </span>
            </button>
          </div>

          {/* Right Content */}
          <div className="flex-1 pt-[52px] overflow-hidden">
            <div
              ref={scrollRef}
              className={`flex gap-8 overflow-x-auto pb-8 pr-8 select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {displayDestinations.map((destination, idx) => (
                <DestinationCard
                  key={`${destination.id}-${idx}`}
                  name={destination.name}
                  listings={destination.listings}
                  image={destination.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
