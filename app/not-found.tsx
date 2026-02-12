import Link from "next/link";

/**
 * Custom 404 Not Found Page
 * Displayed when a user navigates to a non-existent route
 */
export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 bg-[#FFFCF5]"
    >
      <div className="text-center max-w-[600px]">
        {/* 404 Number */}
        <h1 className="font-display italic font-bold text-[120px] md:text-[180px] leading-none text-brand-orange/20 select-none">
          404
        </h1>

        {/* Title */}
        <h2 className="font-display italic font-semibold text-[28px] md:text-[36px] leading-[48px] text-brand-brown -mt-8 md:-mt-12 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="font-body font-normal text-base md:text-lg leading-7 text-brand-brown/70 mb-8 max-w-[460px] mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative w-[200px] h-[50px] bg-brand-orange border border-brand-orange rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
            <span className="relative z-10 font-display italic text-lg text-white group-hover:text-brand-orange transition-colors duration-300">
              Go Home
            </span>
          </Link>

          <Link
            href="/contact"
            className="group relative w-[200px] h-[50px] bg-white border border-brand-orange rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover:h-full transition-all duration-300 ease-out" />
            <span className="relative z-10 font-display italic text-lg text-brand-orange group-hover:text-white transition-colors duration-300">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
