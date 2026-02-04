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
        className="p-5 mb-6"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Overall Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="#FF6E00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-display italic font-semibold text-xl text-brand-brown">
                {summary.overall}/5
              </span>
            </div>
            <span className="font-body text-sm text-brand-brown/60">
              {summary.totalReviews} review{summary.totalReviews !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Category Ratings */}
          <div className="flex-1 grid grid-cols-2 gap-3">
            {summary.categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="font-body text-sm text-brand-brown/70">
                  {category.name}
                </span>
                <span className="font-body text-sm text-brand-brown">
                  {category.rating}/5
                </span>
              </div>
            ))}
          </div>
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
