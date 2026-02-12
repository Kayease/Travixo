"use client";

import { useEffect } from "react";

/**
 * Global Error Boundary
 * Catches runtime errors and displays a user-friendly fallback UI
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, log errors to an error reporting service
  }, [error]);

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 bg-[#FFFCF5]"
    >
      <div className="text-center max-w-[600px]">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-orange/10 flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF6E00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="font-display italic font-semibold text-[28px] md:text-[36px] leading-[48px] text-brand-brown mb-4">
          Something Went Wrong
        </h2>

        {/* Description */}
        <p className="font-body font-normal text-base md:text-lg leading-7 text-brand-brown/70 mb-8 max-w-[460px] mx-auto">
          We encountered an unexpected error. Please try again, or contact our
          support team if the problem persists.
        </p>

        {/* Action Button */}
        <button
          type="button"
          onClick={reset}
          className="group relative w-[200px] h-[50px] bg-brand-orange border border-brand-orange rounded-xl overflow-hidden transition-all duration-300 cursor-pointer mx-auto flex items-center justify-center"
        >
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
          <span className="relative z-10 font-display italic text-lg text-white group-hover:text-brand-orange transition-colors duration-300">
            Try Again
          </span>
        </button>
      </div>
    </main>
  );
}
