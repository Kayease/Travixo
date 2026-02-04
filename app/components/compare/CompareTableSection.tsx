"use client";

import React from "react";
import Image from "next/image";

/**
 * Interface for individual tour comparison data
 */
interface TourData {
  id: string;
  name: string;
  image: string;
  price: string;
  duration: string;
  accommodation: number; // Star rating (1-5)
  meals: string;
  activities: string[];
  difficulty: "EASY" | "MODERATE" | "HARD";
}

/**
 * Star Rating Component
 * Renders filled stars based on rating value
 */
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center gap-2">
      {[...Array(rating)].map((_, index) => (
        <svg
          key={index}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#FF6E00"
          stroke="#FF6E00"
          strokeWidth="1.5"
          className="flex-shrink-0"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
};

/**
 * Activity Item Component
 * Renders a single activity with checkmark icon
 */
const ActivityItem: React.FC<{ activity: string }> = ({ activity }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Success/Check Icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="flex-shrink-0"
      >
        <circle cx="10" cy="10" r="8.75" fill="#FF6E00" />
        <path
          d="M6.5 10L9 12.5L13.5 7.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-medium text-[#4B3621]">{activity}</span>
    </div>
  );
};

/**
 * Difficulty Badge Component
 * Renders colored badge based on difficulty level
 */
const DifficultyBadge: React.FC<{ difficulty: "EASY" | "MODERATE" | "HARD" }> = ({
  difficulty,
}) => {
  const bgColor =
    difficulty === "EASY"
      ? "bg-[#34C759]"
      : difficulty === "MODERATE"
      ? "bg-[#FF6E00]/60"
      : "bg-red-500";

  return (
    <span
      className={`inline-flex items-center justify-center px-2.5 py-1 rounded-xl ${bgColor} text-white text-sm font-medium`}
    >
      {difficulty}
    </span>
  );
};

/**
 * CompareTableSection Component
 * Displays a comparison table of selected tours with details like price,
 * duration, accommodation, meals, activities, and difficulty level
 */
const CompareTableSection: React.FC = () => {
  // Sample tour data for comparison
  const tours: TourData[] = [
    {
      id: "paris",
      name: "Paris",
      image: "/images/compare/Frame 448.png",
      price: "$8,500",
      duration: "10 Days/ 09 Night",
      accommodation: 5,
      meals: "Michelin star Dining & Breakfast",
      activities: ["Husky Sledding Safari", "Private Aurora hunt", "Ice Hotel Overnight"],
      difficulty: "MODERATE",
    },
    {
      id: "indonesia",
      name: "Indonesia",
      image: "/images/compare/Frame 449.png",
      price: "$6,500",
      duration: "07 Days/ 6 Night",
      accommodation: 4,
      meals: "Full Board Gourmet Selection",
      activities: ["Private Yacht Charter", "Positano Wine Tasting", "Lemon Grove Tour"],
      difficulty: "EASY",
    },
    {
      id: "japan",
      name: "Japan",
      image: "/images/compare/Frame 450.png",
      price: "$9,100",
      duration: "12 Days/ 11 Nights",
      accommodation: 4,
      meals: "Authentic Kaiseki & Temple Meals",
      activities: [
        "Private Tea Ceremony",
        "Guided Temple Night Walk",
        "Zen Garden Meditation",
      ],
      difficulty: "EASY",
    },
  ];

  return (
    <section className="w-full bg-[#FFFCF5] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* ============================================
            Header Card - Selected Tours Preview
        ============================================ */}
        <div className="bg-white border border-[#4B3621]/20 rounded-t-xl h-[275px] flex items-start pt-[18px] px-6 lg:px-8 gap-6 lg:gap-10">
          {/* Selected Count */}
          <h3 className="font-display text-[28px] italic font-semibold leading-[30px] text-[#4B3621] whitespace-nowrap shrink-0 mt-[115px]">
            {tours.length} Selected
          </h3>

          {/* Tour Image Cards */}
          <div className="flex gap-3 lg:gap-[13px] flex-1 justify-center">
            {tours.map((tour) => (
              <div key={tour.id} className="flex flex-col items-center">
                {/* Tour Image - Fixed 302px width as per Figma */}
                <div className="relative w-[302px] h-[203px] rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Tour Name - Positioned 12px below image (233px from container top) */}
                <span className="mt-[12px] font-display text-[20px] leading-[30px] italic font-semibold text-[#4B3621]">
                  {tour.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================
            Comparison Table
        ============================================ */}
        <div className="bg-white border border-[#4B3621]/20 border-t-0 rounded-b-xl overflow-hidden">
          {/* ----- Price Row (60px height) ----- */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:h-[60px] border-b border-[#4B3621]/20 rounded-t-xl bg-white">
            <div className="p-4 md:p-6 lg:px-6 lg:py-4 flex items-center">
              <span className="font-display text-xl md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Price
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`price-${tour.id}`}
                className="p-4 md:p-6 lg:px-6 lg:py-4 flex items-center border-t lg:border-t-0"
              >
                <span className="text-lg md:text-[22px] leading-[28px] font-medium text-[#4B3621]">
                  {tour.price} <span className="text-sm uppercase">PP</span>
                </span>
              </div>
            ))}
          </div>

          {/* ----- Duration Row (60px height) ----- */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:h-[60px] border-b border-[#4B3621]/20 bg-white">
            <div className="p-4 md:p-6 lg:px-6 lg:py-4 flex items-center">
              <span className="font-display text-xl md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Duration
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`duration-${tour.id}`}
                className="p-4 md:p-6 lg:px-6 lg:py-4 flex items-center border-t lg:border-t-0"
              >
                <span className="text-lg md:text-[22px] leading-[28px] font-medium text-[#4B3621]">
                  {tour.duration}
                </span>
              </div>
            ))}
          </div>

          {/* ----- Accommodation Row (60px height) ----- */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:h-[60px] border-b border-[#4B3621]/20 bg-white">
            <div className="p-4 md:p-6 lg:px-6 lg:py-4 flex items-center">
              <span className="font-display text-xl md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Accommodation
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`accommodation-${tour.id}`}
                className="p-4 md:p-6 lg:px-6 lg:py-4 flex items-center border-t lg:border-t-0"
              >
                <StarRating rating={tour.accommodation} />
              </div>
            ))}
          </div>

          {/* ----- Included Meals Row (94px height) ----- */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:min-h-[94px] border-b border-[#4B3621]/20 bg-white">
            <div className="p-4 md:p-6 lg:px-6 lg:py-8 flex items-center">
              <span className="font-display text-xl md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Included Meals
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`meals-${tour.id}`}
                className="p-4 md:p-6 lg:px-6 lg:py-8 flex items-center border-t lg:border-t-0"
              >
                <span className="text-lg md:text-[22px] leading-[28px] font-medium text-[#4B3621]">
                  {tour.meals}
                </span>
              </div>
            ))}
          </div>

          {/* ----- Key Activities Row (174px height) ----- */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:min-h-[174px] border-b border-[#4B3621]/20 bg-white">
            <div className="p-4 md:p-6 lg:px-6 lg:py-8 flex items-center">
              <span className="font-display text-xl md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Key Activities
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`activities-${tour.id}`}
                className="p-4 md:p-6 lg:px-6 lg:py-8 flex flex-col gap-3 border-t lg:border-t-0"
              >
                {tour.activities.map((activity, index) => (
                  <ActivityItem key={index} activity={activity} />
                ))}
              </div>
            ))}
          </div>

          {/* ----- Difficulty Row (60px height) ----- */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:h-[60px] border-b border-[#4B3621]/20 bg-white">
            <div className="p-4 md:p-6 lg:px-6 lg:py-4 flex items-center">
              <span className="font-display text-xl md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Difficulty
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`difficulty-${tour.id}`}
                className="p-4 md:p-6 lg:px-6 lg:py-4 flex items-center border-t lg:border-t-0"
              >
                <DifficultyBadge difficulty={tour.difficulty} />
              </div>
            ))}
          </div>

          {/* ----- Book Now Buttons Row (107px height) ----- */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:h-[107px] rounded-b-xl bg-white">
            <div className="p-4 md:p-6 hidden lg:block"></div>
            {tours.map((tour) => (
              <div
                key={`book-${tour.id}`}
                className="p-4 md:p-6 flex items-center justify-center border-t lg:border-t-0"
              >
                <button className="group/btn relative w-full max-w-[233px] h-[45px] bg-[#FF6E00] text-white font-display text-[20px] leading-[27px] italic font-medium rounded-xl overflow-hidden transition-all duration-300">
                  <span className="relative z-10 group-hover/btn:text-[#4B3621] transition-colors duration-300">Book Now</span>
                  {/* Bottom-to-top fill animation */}
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-white transition-all duration-500 ease-out group-hover/btn:h-full"></span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareTableSection;
