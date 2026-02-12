import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Arrow Icon (rotated)
 */
const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`-rotate-30 ${className}`}
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

/**
 * CTABannerSection Component
 * Call-to-action banner with traveler image
 * Background: White with cream card
 */
export const CTABannerSection = ({
  title = "Speak to Our Destination Experts at Call",
  subtitle = "Our Customer service team is available 24/7 via chat, email and WhatsApp.",
  buttonText = "Request a quote",
  onButtonClick: _onButtonClick,
}: CTABannerProps) => {
  return (
    <section className="relative w-full py-12 lg:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Container with relative positioning for the image */}
        <div className="relative ml-0">
          {/* Traveler Image - Positioned to overlap */}
          <div className="hidden md:block absolute left-[80px] -top-[135px] w-[232px] h-[334px] z-10">
            <Image
              src="/images/home/cta/cta-banner.png"
              alt="Travel expert"
              fill
              className="object-contain object-bottom"
              sizes="232px"
            />
          </div>


          {/* CTA Card */}
          <div
            className="relative py-10 md:py-12 px-6 md:px-8 lg:px-12 w-full max-w-[1280px] mx-auto"
            style={{
              minHeight: "200px",
              backgroundImage: "url('/images/home/cta/bg.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "12px",
            }}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 pl-0 md:pl-[320px]">
              {/* Content */}
              <div className="flex-1">
                {/* Title */}
                <h2 className="font-display italic font-semibold text-xl md:text-2xl lg:text-[28px] leading-tight lg:leading-[37px] text-brand-brown mb-3">
                  {title}
                </h2>

                {/* Subtitle */}
                <p className="font-body font-normal text-base lg:text-lg leading-relaxed lg:leading-[27px] text-brand-brown max-w-[680px]">
                  {subtitle}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-brand-orange rounded-xl font-display italic text-lg text-brand-orange overflow-hidden transition-all duration-300 relative group cursor-pointer"
              >
                {/* Fill animation from bottom to top */}
                <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover:h-full transition-all duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {buttonText}
                </span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform text-brand-orange group-hover:text-white">
                  <ArrowIcon className="transition-transform duration-300 group-hover:rotate-0" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
