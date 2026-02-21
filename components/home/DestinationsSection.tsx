"use client";
import React, { useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * Destination data for the carousel.
 * Card images live in public/images/home/destination/cards/ (e.g. maldives.png, japan.png).
 */
const DESTINATIONS = [
  {
    id: "maldives",
    name: "Maldives",
    listings: 3,
    image: "/images/home/destination/cards/maldives.png",
  },
  {
    id: "dubai",
    name: "Dubai",
    listings: 3,
    image: "/images/home/destination/cards/dubai.png",
  },
  {
    id: "india",
    name: "India",
    listings: 3,
    image: "/images/home/destination/cards/india2.png",
  },
  {
    id: "japan",
    name: "Japan",
    listings: 3,
    image: "/images/home/destination/cards/japan.png",
  },
  {
    id: "south-korea",
    name: "South Korea",
    listings: 3,
    image: "/images/home/destination/cards/south-korea-v2.png",
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
 * Card uses initial-bg.png behind image and text; hover shows hover-bg.png overlay.
 * Card: 418×657px, border-radius 400px 400px 0 300px
 * Image: 418×519px, top 0, border-radius 1000px
 * Overlay: from 316px, expands on hover and shows hover-bg.png
 */
const DestinationCard = ({
  name,
  listings: _listings,
  image,
  onMouseEnter,
  onMouseLeave,
}: {
  name: string;
  listings: number;
  image: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => (
  <Link
    href="/paris"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="shrink-0 relative cursor-pointer group block overflow-hidden transition-all duration-500 ease-in-out lg:hover:shadow-[0px_0px_4px_rgba(255,255,255,0.1)] focus:shadow-[0px_0px_4px_rgba(255,255,255,0.1)] outline-none"
    style={{
      width: "var(--card-width, 418px)",
      height: "var(--card-height, 657px)",
      borderRadius: "var(--card-radius, 400px 400px 0px 300px)",
      clipPath: "inset(0 round var(--card-radius, 400px 400px 0px 300px))", // Ensures hit area matches visual shape
      border: "1px solid #FF8930",
      backgroundImage: "url('/images/home/destination/initial-bg.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    {/* Image container - behind orange on hover; image stays in front only in top area */}
    <div
      className="absolute overflow-hidden"
      style={{
        width: "var(--img-width, 418px)",
        height: "var(--img-height, 519px)",
        left: "calc(50% - var(--img-width, 418px)/2)",
        top: 0,
        borderRadius: "1000px",
        zIndex: 1,
      }}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 ease-in-out"
        style={{ transformOrigin: "top center" }}
        sizes="(max-width: 768px) 280px, 418px"
      />
    </div>

    {/* Orange hover: hover-bg.png in place of white, in front of image in lower band */}
    <div
      className="absolute left-0 w-full h-[15px] lg:group-hover:h-[55%] transition-all duration-500 ease-in-out bg-[#FF8930]"
      style={{
        top: "var(--overlay-top, 316px)",
        zIndex: 0,
      }}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/images/home/destination/hover-bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </div>

    {/* TRAVEL TO */}
    <span
      className="absolute left-1/2 -translate-x-1/2 text-center transition-colors duration-500 ease-in-out lg:group-hover:text-white"
      style={{
        width: "98px",
        top: "var(--label-top, 537px)",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: "var(--label-size, 18px)",
        lineHeight: "22px",
        color: "#4B3621",
        zIndex: 3,
      }}
    >
      TRAVEL TO
    </span>

    {/* Destination name */}
    <h3
      className="absolute left-1/2 -translate-x-1/2 text-center font-display italic transition-colors duration-500 ease-in-out lg:group-hover:text-white"
      style={{
        top: "var(--name-top, 577px)",
        fontWeight: 500,
        fontSize: "var(--name-size, 28px)",
        lineHeight: "var(--name-lh, 37px)",
        color: "#4B3621",
        zIndex: 3,
      }}
    >
      {name}
    </h3>
  </Link>
);

/**
 * DestinationsSection Component
 */
export const DestinationsSection = () => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isManualScrolling = useRef(false);
  const [isHovering, setIsHovering] = React.useState(false);

  // Auto-scroll logic using requestAnimationFrame for maximum smoothness
  React.useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;
    const speed = 0.08; // Increased speed for better visibility

    const step = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isHovering && !isManualScrolling.current && scrollRef.current) {
        // Move at consistent speed regardless of frame rate
        scrollRef.current.scrollLeft += speed * deltaTime;

        // Reset to start for infinite loop
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering]);

  const handleManualScroll = useCallback((offset: number) => {
    if (scrollRef.current) {
      isManualScrolling.current = true;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });

      // Resume auto-scroll after animation completes (approx 500ms)
      setTimeout(() => {
        isManualScrolling.current = false;
      }, 500);
    }
  }, []);

  // Stable callbacks for hover state — passed to each DestinationCard
  const handleCardMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleCardMouseLeave = useCallback(() => setIsHovering(false), []);

  // Duplicate the destinations for a seamless visual loop
  const displayDestinations = useMemo(
    () => [...DESTINATIONS, ...DESTINATIONS],
    [],
  );

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "var(--section-min-height, 761px)",
        backgroundImage: "url('/images/home/destination/destination-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#FFF9F0",
      }}
    >
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-[422px] shrink-0 px-4 pt-10 lg:pl-[80px] lg:pt-[138px]">
            <div
              className="inline-flex items-center justify-center gap-2 w-[204px] h-[30px] rounded-xl mb-[32px] cursor-default bg-[#FF6E00]"
            >
              <PlaneIcon />
              <span className="font-display italic font-medium text-[14px] leading-[19px] text-white">
                DESTINATION LIST
              </span>
            </div>

            <h2 className="font-display italic font-semibold text-2xl lg:text-[28px] leading-[37px] text-brand-brown mb-[18px] max-w-none lg:max-w-[322px]">
              Explore the Beautiful Places Around World
            </h2>

            <p className="font-body font-medium text-base lg:text-[18px] leading-[27px] text-brand-brown mb-8 lg:mb-[52px] max-w-none lg:max-w-[390px]">
              Flexible classes refers to the process of acquiring is knowledge
              free.
            </p>

            <button
              className="w-[300px] h-[50px] bg-white border border-brand-orange rounded-[12px] font-display italic font-normal text-[18px] leading-[24px] text-brand-orange overflow-hidden transition-all duration-300 relative group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed outline-none"
              onClick={() => router.push("/destinations")}
            >
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange lg:group-hover:h-full transition-all duration-300 ease-out" />
              <span className="relative z-10 lg:group-hover:text-white transition-colors duration-300">
                Discover More
              </span>
            </button>
          </div>

          {/* Right Content */}
          <div className="flex-1 pt-8 lg:pt-[52px] overflow-hidden lg:pr-[60px] relative px-4">
            {/* Left Navigation Button */}
            <button
              onClick={() => handleManualScroll(-450)}
              className="absolute left-2 lg:left-0 top-1/2 -translate-y-1/2 z-20 w-[50px] h-[50px] rounded-full bg-white/80 border border-brand-orange text-brand-orange flex items-center justify-center lg:hover:bg-brand-orange lg:hover:text-white transition-all duration-300 shadow-md backdrop-blur-sm outline-none"
              aria-label="Previous slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19L8 12L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={() => handleManualScroll(450)}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-[50px] h-[50px] rounded-full bg-white/80 border border-brand-orange text-brand-orange flex items-center justify-center lg:hover:bg-brand-orange lg:hover:text-white transition-all duration-300 shadow-md backdrop-blur-sm outline-none"
              aria-label="Next slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-hidden pb-8 pr-8 pl-4 lg:pl-[120px] select-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {displayDestinations.map((destination, idx) => (
                <DestinationCard
                  key={`${destination.id}-${idx}`}
                  name={destination.name}
                  listings={destination.listings}
                  image={destination.image}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
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
        :global(:root) {
          --card-width: 280px;
          --card-height: 480px;
          --card-radius: 280px 280px 0px 200px;
          --img-width: 280px;
          --img-height: 360px;
          --overlay-top: 220px;
          --label-top: 380px;
          --label-size: 14px;
          --name-top: 410px;
          --name-size: 20px;
          --name-lh: 28px;
          --section-min-height: 800px;
        }
        @media (min-width: 768px) {
          :global(:root) {
            --card-width: 418px;
            --card-height: 657px;
            --card-radius: 400px 400px 0px 300px;
            --img-width: 418px;
            --img-height: 519px;
            --overlay-top: 316px;
            --label-top: 537px;
            --label-size: 18px;
            --name-top: 577px;
            --name-size: 28px;
            --name-lh: 37px;
            --section-min-height: 761px;
          }
        }
      `}</style>
    </section>
  );
};
