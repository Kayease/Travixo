"use client";
import React from "react";
import Image from "next/image";

/**
 * Review Interface
 */
interface Review {
  id: string | number;
  author: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
  images?: string[];
}

/**
 * ReviewSummary Interface
 */
interface ReviewSummary {
  overall: number;
  totalReviews: number;
  categories: {
    name: string;
    rating: number;
  }[];
}

/**
 * TourReviewsSection Props Interface
 */
interface TourReviewsSectionProps {
  /** Review summary with ratings */
  summary: ReviewSummary;
  /** Array of individual reviews */
  reviews: Review[];
}

/**
 * StarRating Component
 * Renders star rating display
 */
const StarRating: React.FC<{ rating: number; size?: "sm" | "md" }> = ({
  rating,
  size = "md",
}) => {
  const starSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={starSize}
          viewBox="0 0 20 20"
          fill={star <= rating ? "#FF6E00" : "#E5E7EB"}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

/**
 * TourReviewsSection Component
 * 
 * Displays customer reviews with summary and individual reviews.
 * 
 * Design Specifications (from Figma):
 * - Title: Playfair Display, italic, 600 weight, 24px
 * - Review summary card with category ratings
 * - Individual review cards with avatar, rating, comment
 * - "Write Review" CTA button
 * 
 * @param {TourReviewsSectionProps} props - Reviews data
 * @returns {JSX.Element} The rendered reviews section
 */
export const TourReviewsSection: React.FC<TourReviewsSectionProps> = ({
  summary,
  reviews,
}) => {
  return (
    <section className="w-full py-6 border-t border-gray-200" aria-labelledby="reviews-title">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2
          id="reviews-title"
          className="font-display italic font-semibold text-xl md:text-[24px] leading-[32px] text-brand-brown"
        >
          Customer reviews
        </h2>
        <button
          className="font-display italic font-medium text-sm md:text-base text-white px-5 py-2 transition-all duration-300 hover:opacity-90 active:scale-95"
          style={{
            backgroundColor: "#FF6E00",
            borderRadius: "8px",
          }}
        >
          Write Review
        </button>
      </div>

      {/* Review Summary Card */}
      <div
        className="relative w-full max-w-[769px] h-[132px] mb-8 hidden md:block"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(75, 54, 33, 0.4)",
          borderRadius: "12px",
          boxSizing: "border-box",
        }}
      >
        {/* Left Rating Section */}
        <div className="absolute left-[32px] top-[36px] flex items-center gap-2">
          {/* Star Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="#FF6E00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <span className="font-poppins font-semibold text-[20px] leading-[30px] text-brand-brown">
            {summary.overall}/5
          </span>
        </div>

        <div className="absolute left-[32px] top-[75px]">
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-brand-brown">
            {summary.totalReviews} review{summary.totalReviews !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Vertical Divider */}
        <div
          className="absolute left-[160px] top-[1px] w-[130px] h-[1px] bg-[rgba(75,54,33,0.4)]"
          style={{ transform: "rotate(90deg)", transformOrigin: "0 0" }}
        />

        {/* Right Summary Section */}

        {/* Title */}
        <div className="absolute left-[192px] top-[12px]">
          <span className="font-display italic font-medium text-[16px] leading-[21px] text-brand-brown">
            Review summary
          </span>
        </div>

        {/* Categories Grid */}

        {/* Guide - Top Left of Grid */}
        <div className="absolute left-[192px] top-[48px]">
          <span className="font-poppins font-normal text-[14px] leading-[21px] text-brand-brown">Guide</span>
        </div>
        <div className="absolute left-[404px] top-[45px]">
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-brand-brown">4.2/5</span>
        </div>
        {/* Bar */}
        <div className="absolute left-[192px] top-[69px] w-[248px] h-[2px] rounded-[8px] bg-[rgba(75,54,33,0.4)]">
          <div className="h-full bg-[#FF6E00] rounded-[12px]" style={{ width: "80%" /* 4.2/5 */ }}></div>
        </div>


        {/* Service - Top Right of Grid */}
        <div className="absolute left-[482px] top-[48px]">
          <span className="font-poppins font-normal text-[14px] leading-[21px] text-brand-brown">Service</span>
        </div>
        <div className="absolute left-[694px] top-[45px]">
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-brand-brown">4.2/5</span>
        </div>
        {/* Bar */}
        <div className="absolute left-[482px] top-[69px] w-[248px] h-[2px] rounded-[8px] bg-[rgba(75,54,33,0.4)]">
          <div className="h-full bg-[#FF6E00] rounded-[12px]" style={{ width: "84%" }}></div>
        </div>

        {/* Transportation - Bottom Left of Grid */}
        <div className="absolute left-[192px] top-[86px]">
          <span className="font-poppins font-normal text-[14px] leading-[21px] text-brand-brown">Transportation</span>
        </div>
        <div className="absolute left-[404px] top-[83px]">
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-brand-brown">4.2/5</span>
        </div>
        {/* Bar */}
        <div className="absolute left-[192px] top-[107px] w-[248px] h-[2px] rounded-[8px] bg-[rgba(75,54,33,0.4)]">
          <div className="h-full bg-[#FF6E00] rounded-[12px]" style={{ width: "84%" }}></div>
        </div>

        {/* Organization - Bottom Right of Grid */}
        <div className="absolute left-[482px] top-[86px]">
          <span className="font-poppins font-normal text-[14px] leading-[21px] text-brand-brown">Organization</span>
        </div>
        <div className="absolute left-[694px] top-[83px]">
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-brand-brown">4.2/5</span>
        </div>
        {/* Bar */}
        <div className="absolute left-[482px] top-[107px] w-[248px] h-[2px] rounded-[8px] bg-[rgba(75,54,33,0.4)]">
          <div className="h-full bg-[#FF6E00] rounded-[12px]" style={{ width: "84%" }}></div>
        </div>

      </div>

      {/* Mobile Fallback for Summary (Simple list) */}
      <div className="md:hidden mb-8 p-4 border border-brand-brown/10 rounded-xl bg-white">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-display italic font-semibold text-xl text-brand-brown">Review summary</span>
          <span className="font-body text-sm text-brand-brown/60">({summary.totalReviews} reviews)</span>
        </div>
        <div className="space-y-4">
          {summary.categories.map((cat, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-sm text-brand-brown">
                <span>{cat.name}</span>
                <span>{cat.rating}/5</span>
              </div>
              <div className="w-full h-1 bg-brand-brown/10 rounded-full overflow-hidden">
                <div className="h-full bg-brand-orange" style={{ width: `${(cat.rating / 5) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="pb-6 border-b border-gray-100 last:border-0">
            {/* Review Header */}
            <div className="flex items-center gap-3 mb-3">
              {/* Avatar */}
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                {review.avatar ? (
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium">
                    {review.author.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <p className="font-display italic font-medium text-base text-brand-brown">
                  {review.author}
                </p>
                <p className="font-body text-xs text-brand-brown/60">
                  On {review.date}
                </p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="mb-3">
              <StarRating rating={review.rating} size="sm" />
            </div>

            {/* Review Comment */}
            <p className="font-body text-sm text-brand-brown/80 leading-relaxed mb-3">
              {review.comment}
            </p>

            {/* Review Images */}
            {review.images && review.images.length > 0 && (
              <div className="flex gap-2">
                {review.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative w-16 h-16 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`Review image ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourReviewsSection;
