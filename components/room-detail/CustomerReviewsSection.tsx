"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ReviewModal } from "../ui/ReviewModal";
import { Button } from "../ui/Button";

/**
 * Interface for rating category data
 */
interface RatingCategory {
  name: string;
  rating: number;
  maxRating: number;
}

/**
 * Interface for review data
 */
interface ReviewData {
  id: string;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
  images: string[];
}

/**
 * RatingBar Component
 * Displays a rating category with progress bar
 */
const RatingBar: React.FC<{ category: RatingCategory }> = ({ category }) => {
  const percentage = (category.rating / category.maxRating) * 100;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-sm font-normal text-[#4B3621]">
          {category.name}
        </span>
        <span className="text-base font-normal text-[#4B3621]">
          {category.rating}/{category.maxRating}
        </span>
      </div>
      {/* Progress Bar */}
      <div className="relative w-full h-[2px] bg-[#4B3621]/40 rounded-lg overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#FF6E00] rounded-lg"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

/**
 * StarRating Component
 * Renders filled stars based on rating
 */
const StarRating: React.FC<{ rating: number; size?: number }> = ({
  rating,
  size = 24,
}) => {
  return (
    <div className="flex items-center gap-2">
      {[...Array(rating)].map((_, index) => (
        <svg
          key={index}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#FF6E00"
          stroke="#FF6E00"
          strokeWidth="1.5"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
};

/**
 * ReviewCard Component
 * Displays a single customer review
 */
const ReviewCard: React.FC<{ review: ReviewData }> = ({ review }) => {
  return (
    <div className="py-6">
      {/* Author Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
          <Image
            src={review.avatar}
            alt={review.author}
            fill
            className="object-cover"
            sizes="50px"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-display text-base italic font-medium text-[#4B3621]">
            {review.author}
          </span>
          <span className="text-xs font-normal text-[#4B3621]">
            {review.date}
          </span>
        </div>
      </div>

      {/* Star Rating */}
      <div className="mb-3">
        <StarRating rating={review.rating} />
      </div>

      {/* Review Comment */}
      <p className="text-xs font-normal leading-[18px] text-[#4B3621] mb-4">
        {review.comment}
      </p>

      {/* Review Images */}
      {review.images.length > 0 && (
        <div className="flex gap-4 flex-wrap">
          {review.images.map((image, index) => (
            <div
              key={index}
              className="relative w-[180px] aspect-4/3 rounded-xl overflow-hidden"
            >
              <Image
                src={image}
                alt={`Review image ${index + 1}`}
                fill
                className="object-contain"
                sizes="180px"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * CustomerReviewsSection Component
 *
 * Displays customer reviews with summary ratings, individual reviews,
 * and a button to write new reviews.
 */
const CustomerReviewsSection: React.FC = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleOpenReviewModal = () => setIsReviewModalOpen(true);
  const handleCloseReviewModal = () => setIsReviewModalOpen(false);

  const handleSubmitReview = (data: any) => {
    console.log("Room Review Submitted:", data);
    // In a real app, you would send this to your backend
  };

  // Rating categories
  const ratingCategories: RatingCategory[] = [
    { name: "Hotel", rating: 4.2, maxRating: 5 },
    { name: "Food", rating: 4.2, maxRating: 5 },
    { name: "Room", rating: 4.2, maxRating: 5 },
    { name: "Service", rating: 4.2, maxRating: 5 },
  ];

  // Sample review data
  const reviews: ReviewData[] = [
    {
      id: "1",
      author: "Ammy Virk",
      avatar: "/images/room_detail/cards/avatar.png",
      date: "On October 31, 2025",
      rating: 4,
      comment:
        "I dont know how to improve the tour,Because it was great professional run funny great day hover dam and Grand Canyon, brilliant enough time to do everything not rushed .great tour",
      images: [
        "/images/room_detail/cards/review-1.png",
        "/images/room_detail/cards/review-2.png",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#FFFCF5] py-12 md:py-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-20">
        {/* ============================================
            Header - Title & Write Review Button
        ============================================ */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8 max-w-[769px]">
          <h2 className="font-display text-xl md:text-[28px] italic font-semibold leading-[30px] md:leading-[37px] text-[#4B3621]">
            Customer reviews
          </h2>

          {/* Spacer */}
          <div className="hidden sm:block flex-1" />

          <Button
            onClick={handleOpenReviewModal}
            variant="primary"
            size="sm"
            className="md:text-base px-5 py-2 !rounded-[8px]"
          >
            Write Review
          </Button>
        </div>

        {/* Review Modal */}
        {isReviewModalOpen && (
          <ReviewModal
            isOpen={isReviewModalOpen}
            onClose={handleCloseReviewModal}
            onSubmit={handleSubmitReview}
            title="Room Review"
            subTitle="Share your experience for this room"
          />
        )}

        {/* ============================================
            Review Summary Card
        ============================================ */}
        <div className="bg-white border border-[#4B3621]/40 rounded-xl p-5 md:p-6 mb-8 max-w-[769px]">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Overall Rating */}
            <div className="flex flex-col items-center justify-center pr-0 md:pr-6 md:border-r border-[#4B3621]/40">
              <div className="flex items-center gap-2 mb-2">
                {/* Star Icon (outline) */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF6E00"
                  strokeWidth="1.5"
                >
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                <span className="text-xl font-semibold text-[#4B3621]">
                  4.2/5
                </span>
              </div>
              <span className="text-base font-normal text-[#4B3621]">
                312 review
              </span>
            </div>

            {/* Rating Categories */}
            <div className="flex-1">
              <h3 className="font-display text-base italic font-medium text-[#4B3621] mb-4">
                Review summary
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {ratingCategories.map((category) => (
                  <RatingBar key={category.name} category={category} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================
            Individual Reviews
        ============================================ */}
        <div className="max-w-[769px]">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
