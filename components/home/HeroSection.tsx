"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DatePicker, DateRange } from "../ui/DatePicker";
import { HERO_IMAGES } from "@/app/constants/data";
import { useToast } from "@/app/context/ToastContext";

/** Pendulum physics constants (damped harmonic motion) */
const PENDULUM_AMPLITUDE = 18; // degrees
const PENDULUM_PERIOD = 1.4; // seconds per full cycle
const PENDULUM_DAMPING = 0.9; // decay rate (higher = stops sooner)
const PENDULUM_OMEGA = (2 * Math.PI) / PENDULUM_PERIOD;
const PENDULUM_MAX_TIME = 7; // stop animation after 7s
const PENDULUM_REST_THRESHOLD = 0.25; // degrees below which we consider "at rest"

/** Homepage hero with search, date picker, and floating image gallery. */
export const HeroSection = () => {
  const [pendulumRotation, setPendulumRotation] = useState(0);
  const pendulumRotationRef = useRef(0); // keep in sync so leave animation starts from current position
  const [isSwinging, setIsSwinging] = useState(false);
  const lastTouchTime = useRef(0);
  const pendulumRef = useRef<HTMLDivElement>(null);
  const swingRAF = useRef<number | null>(null);
  const swingStartTime = useRef<number>(0);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<string | DateRange>("");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const dateIconRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { showToast } = useToast();

  const handleSearch = () => {
    if (!destination.trim()) {
      showToast("Please enter a destination to search", "error");
      return;
    }

    const params = new URLSearchParams();
    if (destination.trim()) params.set("destination", destination.trim());

    if (date) {
      if (typeof date === "string") {
        params.set("date", date);
      } else {
        if (date.from) {
          const toStr = date.to ? date.to : "";
          params.set("date", toStr ? `${date.from} - ${toStr}` : date.from);
        }
      }
    }

    const query = params.toString();
    router.push(query ? `/paris?${query}` : "/paris");
  };

  /** Cancel any running pendulum swing animation */
  const cancelSwing = useCallback(() => {
    if (swingRAF.current != null) {
      cancelAnimationFrame(swingRAF.current);
      swingRAF.current = null;
    }
    setIsSwinging(false);
  }, []);

  /**
   * Handle mouse movement over pendulum area (follow cursor while hovering)
   */
  const handlePendulumMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Ignore mouse events for 500ms after a touch to prevent swing interruption on mobile
    if (performance.now() - lastTouchTime.current < 500) return;
    if (!pendulumRef.current) return;
    cancelSwing();

    const rect = pendulumRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;
    const distance = mouseX - centerX;
    const maxDistance = 150;
    const rotation = Math.max(-15, Math.min(15, (distance / maxDistance) * 15));
    pendulumRotationRef.current = rotation;
    setPendulumRotation(rotation);
  };

  /**
   * On mouse leave: start damped pendulum swing from wherever the cursor was (no glitch).
   * Uses current rotation as initial amplitude so swing starts from the side you hovered.
   */
  const handlePendulumMouseLeave = useCallback(() => {
    cancelSwing();
    let startAngle = pendulumRotationRef.current;
    if (Math.abs(startAngle) < 1) startAngle = PENDULUM_AMPLITUDE; // gentle swing if cursor didn't move
    setIsSwinging(true);
    swingStartTime.current = performance.now();

    const step = (now: number) => {
      const t = (now - swingStartTime.current) / 1000; // seconds
      if (t > PENDULUM_MAX_TIME) {
        setPendulumRotation(0);
        pendulumRotationRef.current = 0;
        setIsSwinging(false);
        swingRAF.current = null;
        return;
      }
      const angle =
        startAngle *
        Math.exp(-PENDULUM_DAMPING * t) *
        Math.cos(PENDULUM_OMEGA * t);
      pendulumRotationRef.current = angle;
      setPendulumRotation(angle);
      if (t > 3 && Math.abs(angle) < PENDULUM_REST_THRESHOLD) {
        setPendulumRotation(0);
        pendulumRotationRef.current = 0;
        setIsSwinging(false);
        swingRAF.current = null;
        return;
      }
      swingRAF.current = requestAnimationFrame(step);
    };
    swingRAF.current = requestAnimationFrame(step);
  }, [cancelSwing]);

  /** On mouse enter: stop swing so hover can control again */
  const handlePendulumMouseEnter = () => {
    if (performance.now() - lastTouchTime.current < 500) return;
    cancelSwing();
  };

  useEffect(() => {
    return () => cancelSwing();
  }, [cancelSwing]);

  return (
    <section
      className="hero-section relative w-full h-screen lg:h-[120vh]"
      style={{
        backgroundColor: "#FFF7E5",
        backgroundImage: "url('/images/home/Desktop43.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Clipped area: pendulum, content, strip. Search bar stays outside so date picker dropdown can overflow. */}
      <div className="absolute inset-0 overflow-hidden">
        {/* ========== Pendulum Discount Badge ========== */}
        <div
          ref={pendulumRef}
          className="hero-pendulum absolute top-0 right-[2%] md:right-[1%] lg:right-[8%] z-50 flex flex-col items-center cursor-pointer"
          onMouseMove={handlePendulumMouseMove}
          onMouseEnter={handlePendulumMouseEnter}
          onMouseLeave={handlePendulumMouseLeave}
          onClick={() => handlePendulumMouseLeave()}
          onTouchStart={() => {
            lastTouchTime.current = performance.now();
            cancelSwing();
          }}
          onTouchEnd={handlePendulumMouseLeave}
        >
          {/* For responsive, position from right. No transition while swinging so physics runs every frame. */}
          <div
            className="absolute top-0 right-[40px] md:right-[50px] lg:right-[60px] flex flex-col items-center cursor-pointer scale-[0.6] origin-top-right md:scale-[0.8] lg:scale-100"
            style={{
              transformOrigin: "top center",
              transform: `rotate(${pendulumRotation}deg)`,
              transition: isSwinging
                ? "none"
                : "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {/* Hanging String Line */}
            <div
              className="w-[2px] h-[90px] md:h-[100px] lg:h-[116px] bg-[#D55C00]"
              aria-hidden="true"
            />
            {/* Badge Circle - 150px diameter */}
            <div
              className="relative w-[120px] h-[120px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] rounded-full flex flex-col items-center justify-center text-white"
              style={{
                backgroundColor: "#FF6E00",
                boxShadow:
                  "0px 0px 20px 2px rgba(255, 110, 0, 0.2), inset 0px 0px 20px 10px rgba(0, 0, 0, 0.25)",
              }}
            >
              <span className="font-display italic font-normal text-[22px] md:text-[24px] lg:text-[28px] leading-[28px] text-white">
                50% off
              </span>
              <span className="font-display italic font-normal text-[14px] md:text-[15px] lg:text-[18px] leading-[28px] text-center text-white mt-1">
                For First
                <br />
                Traveller
              </span>
            </div>
          </div>
        </div>

        {/* ========== Main Content Area ========== */}
        <div className="hero-content relative z-20 px-6 md:px-12 lg:px-20 pt-28 md:pt-32 lg:pt-[110px]">
          {/* Main Heading */}
          <h1
            className="hero-heading font-display italic font-semibold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] leading-[1.34] max-w-[726px] text-brand-brown"
          >
            Let Travixo Guide You to
            <br className="hidden sm:block" /> Your Next Adventure
          </h1>

          {/* Description — hidden in landscape to prevent overlap */}
          <p
            className="hero-description font-body font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] max-w-[795px] mt-6 md:mt-8 text-brand-brown"
          >
            Discover the soul of Africa through iconic wildlife, breathtaking
            landscapes, the Great Migration, and a serene hot air balloon
            journey over the savanna.
          </p>

          {/* CTA Button with bottom-to-top fill animation */}
          <button
            type="button"
            onClick={() => router.push("/destinations")}
            className="hero-cta relative mt-8 md:mt-6 lg:mt-[40px] font-display italic font-medium text-[18px] md:text-[20px] leading-[27px] text-center text-white transition-all duration-300 lg:active:scale-[0.98] focus:outline-none focus:border-[#FF6E00] overflow-hidden group/btn cursor-pointer border border-transparent lg:hover:border-[#FF6E00]"
            style={{
              width: "200px",
              height: "45px",
              backgroundColor: "#FF6E00",
              borderRadius: "12px",
            }}
          >
            {/* Bottom-to-top fill animation overlay */}
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-white lg:group-hover/btn:h-full transition-all duration-300 ease-out" />
            {/* Button text */}
            <span className="relative z-10 lg:group-hover/btn:text-[#FF6E00] transition-colors duration-300">
              Explore More
            </span>
          </button>
        </div>

        {/* ========== Diagonal Image Strip ========== */}
        <div
          className="hero-strip absolute left-1/2 z-10 top-[420px] md:top-[480px] lg:top-[530px]"
          style={{
            width: "200%",
            transform: "translateX(-50%) rotate(-8.6deg)",
            transformOrigin: "center center",
          }}
        >
          <div className="hero-strip-inner flex items-center gap-4 animate-scroll-infinite">
            {/* Render images multiple times for infinite scroll effect */}
            {[...HERO_IMAGES, ...HERO_IMAGES, ...HERO_IMAGES].map(
              (image, index) => (
                <div
                  key={`img-${index}`}
                  className="relative shrink-0 overflow-hidden transition-transform duration-500"
                  style={{
                    width: "272px",
                    height: "363px",
                    borderRadius: "12px",
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="272px"
                    priority={index < 5}
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      {/* End clipped area */}

      {/* ========== Glassmorphism Search Bar (outside clip so date picker dropdown can show) ========== */}
      <div className="hero-search-wrapper absolute bottom-8 md:bottom-10 lg:bottom-[40px] left-1/2 -translate-x-1/2 w-[95%] lg:w-[900px] z-10 px-4 md:px-0 overflow-visible">
        <div
          className="hero-search-bar flex flex-col md:flex-row items-center justify-between h-auto md:h-[100px] p-4 md:p-0 overflow-visible"
          style={{
            width: "100%",
            maxWidth: "900px",
            background: "rgba(255, 255, 255, 0.4)",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(60px)",
            WebkitBackdropFilter: "blur(60px)",
            borderRadius: "12px",
          }}
        >
          {/* Destination Field */}
          <div className="hero-search-field flex items-center gap-3 flex-1 w-full md:w-auto px-4 md:px-6 py-3 md:py-0">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              className="hero-search-icon shrink-0 text-[#4B3621]"
            >
              <path
                d="M14 14.875C15.2426 14.875 16.25 13.8676 16.25 12.625C16.25 11.3824 15.2426 10.375 14 10.375C12.7574 10.375 11.75 11.3824 11.75 12.625C11.75 13.8676 12.7574 14.875 14 14.875Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 3.5C11.5136 3.5 9.12903 4.48772 7.37087 6.24587C5.61272 8.00403 4.625 10.3886 4.625 12.875C4.625 15.0575 5.12125 16.52 6.3125 18L14 26.25L21.6875 18C22.8788 16.52 23.375 15.0575 23.375 12.875C23.375 10.3886 22.3873 8.00403 20.6291 6.24587C18.871 4.48772 16.4864 3.5 14 3.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col">
              <label
                className="hero-search-label font-display italic font-semibold text-[18px] md:text-[22px] leading-[28px] text-brand-brown"
              >
                Destination
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Enter Location"
                className="hero-search-input font-body font-normal text-[16px] md:text-[18px] leading-[28px] bg-transparent !outline-none !focus:outline-none !focus-visible:outline-none !ring-0 !border-none w-full placeholder:text-[#4B3621]/60 text-brand-brown shadow-none"
              />
            </div>
          </div>

          {/* Divider */}
          <div
            className="hero-search-divider hidden md:block w-px h-[70px] bg-brand-brown/20"
          />

          {/* Date Field - overflow-visible so calendar dropdown is not clipped */}
          <div className="hero-search-field flex items-center gap-3 flex-1 w-full md:w-auto px-4 md:px-6 py-3 md:py-0 border-t md:border-t-0 border-[rgba(75,54,33,0.1)] overflow-visible">
            <div
              ref={dateIconRef}
              onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
              className="cursor-pointer"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  stroke="#4B3621"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col w-full overflow-visible">
              <label
                className="hero-search-label font-display italic font-semibold text-[18px] md:text-[22px] leading-[28px] text-brand-brown"
              >
                Date
              </label>
              <DatePicker
                value={date}
                onChange={(newDate) => {
                  setDate(newDate);
                  // Optional: Close on selection if you prefer, though range usually stays open until complete
                  // For range, DatePicker handles internal logic, but we can close it if newDate is complete.
                  // Current DatePicker implementation closes itself on single select.
                  // For range, it closes on second click.
                  // But since we control it, we need to respect DatePicker's internal logic calling onOpenChange(false)
                  // which calls setIsDatePickerOpen(false).
                  // So we just update date here.
                }}
                placeholder="Select date range"
                variant="transparent"
                className="w-full"
                mode="range"
                hideIcon={true}
                open={isDatePickerOpen}
                onOpenChange={setIsDatePickerOpen}
                externalTriggerRef={dateIconRef as React.RefObject<HTMLElement>}
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            type="button"
            onClick={handleSearch}
            className="p-4 md:pr-6 transition-transform lg:hover:scale-110 lg:active:scale-95 cursor-pointer outline-none"
            aria-label="Search"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle
                cx="16.5"
                cy="16.5"
                r="10.5"
                stroke="#4B3621"
                strokeWidth="2"
              />
              <path
                d="M24 24L31.5 31.5"
                stroke="#4B3621"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ========== CSS Animations & Landscape Phone Overrides ========== */}
      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 12s linear infinite;
        }

        /* Landscape phone: orientation landscape AND short viewport */
        @media (orientation: landscape) and (max-height: 500px) {
          .hero-section {
            height: auto;
            min-height: 140vh;
          }
          .hero-pendulum {
            display: none !important;
          }
          .hero-content {
            padding-top: 40px;
            padding-right: 38%;
          }
          .hero-heading {
            font-size: 22px;
            line-height: 1.25;
          }
          .hero-heading br {
            display: none;
          }
          .hero-description {
            display: none;
          }
          .hero-cta {
            margin-top: 18px;
            width: 140px;
            height: 40px;
            font-size: 15px;
          }
          .hero-strip {
            top: 180px;
          }
          .hero-strip-inner {
            gap: 8px;
          }
          .hero-search-wrapper {
            bottom: 35px;
            width: 85%;
          }
          .hero-search-bar {
            flex-direction: row;
            height: 70px;
            padding: 0;
          }
          .hero-search-field {
            padding: 0 8px;
          }
          .hero-search-label {
            display: none;
          }
          .hero-search-input {
            font-size: 12px;
          }
          .hero-search-divider {
            height: 24px;
            display: block;
          }
          .hero-search-icon {
            width: 18px;
            height: 18px;
          }
          .hero-search-bar button {
            padding: 0 12px !important;
          }
          .hero-search-bar button svg {
            width: 24px !important;
            height: 24px !important;
          }
        }

        /* Hide pendulum on narrow phone portrait screens (iPhone) */
        @media (max-width: 500px) and (orientation: portrait) {
          .hero-pendulum {
            display: none !important;
          }
        }

        /* Adjust content spacing for all mobile portrait */
        @media (max-width: 767px) and (orientation: portrait) {
          .hero-content {
            padding-top: 75px !important;
          }
        }
        /* Specific override for large landscape phones (iPhone 14 Pro Max) */
        @media (orientation: landscape) and (max-height: 500px) and (min-width: 900px) {
          .hero-heading {
            font-size: 37px !important;
          }
          .hero-content {
            padding-right: 10% !important;
            max-width: 100% !important;
          }
          .hero-cta {
            margin-top: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
