"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex items-center gap-1 md:gap-2">
      {[...Array(rating)].map((_, index) => (
        <svg
          key={index}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#FF6E00"
          stroke="#FF6E00"
          strokeWidth="1.5"
          className="shrink-0 w-3 h-3 md:w-6 md:h-6"
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
        className="shrink-0 w-3 h-3 md:w-5 md:h-5"
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
      <span className="text-[10px] md:text-lg font-medium text-[#4B3621]">{activity}</span>
    </div>
  );
};

/**
 * Difficulty Badge Component
 * Renders colored badge based on difficulty level
 */
const DifficultyBadge: React.FC<{
  difficulty: "EASY" | "MODERATE" | "HARD";
}> = ({ difficulty }) => {
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
import { useRouter } from "next/navigation";
import { useCart, CartItem } from "@/app/context/CartContext";

// ... existing imports ...

// ... existing code ...

const CompareTableSection: React.FC = () => {
  const router = useRouter();
  const { addToCart } = useCart();

  // Sample tour data for comparison
  const tours: TourData[] = [
    {
      id: "paris",
      name: "Paris",
      image: "/images/compare/cards/compare-1.png",
      price: "$8,500",
      duration: "10 Days/ 09 Night",
      accommodation: 5,
      meals: "Michelin star Dining & Breakfast",
      activities: [
        "Husky Sledding Safari",
        "Private Aurora hunt",
        "Ice Hotel Overnight",
      ],
      difficulty: "MODERATE",
    },
    {
      id: "indonesia",
      name: "Indonesia",
      image: "/images/compare/cards/compare-2.png",
      price: "$6,500",
      duration: "07 Days/ 6 Night",
      accommodation: 4,
      meals: "Full Board Gourmet Selection",
      activities: [
        "Private Yacht Charter",
        "Positano Wine Tasting",
        "Lemon Grove Tour",
      ],
      difficulty: "EASY",
    },
    {
      id: "japan",
      name: "Japan",
      image: "/images/compare/cards/compare-3.png",
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

  const handleBookNow = (tour: TourData) => {
    // Parse price - remove $ and commas
    const priceValue = parseInt(tour.price.replace(/[^0-9]/g, "")) || 0;

    const cartItem: CartItem = {
      id: `${tour.id}-${Date.now()}`,
      type: "experience",
      title: tour.name,
      image: tour.image,
      location: tour.name, // Using name as location/title proxy
      dates: new Date().toISOString().split("T")[0],
      amenities: [tour.duration, tour.meals, tour.difficulty],
      price: priceValue,
      actionLabel: "Customize",
    };

    addToCart(cartItem);
  };

  return (
    <section className="w-full bg-[#FFFCF5] py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-20">
        {/* ============================================
            Header Card - Selected Tours Preview
        ============================================ */}
        <div className="bg-white border border-[#4B3621]/20 rounded-xl h-auto lg:h-[275px] grid grid-cols-3 lg:grid-cols-[200px_1fr_1fr_1fr] mb-8 overflow-hidden">
          {/* Selected Count Column */}
          <div className="col-span-3 lg:col-span-1 p-4 md:p-6 lg:p-8 flex items-start justify-center lg:justify-start">
            <h3 className="font-display text-[24px] md:text-[28px] italic font-semibold leading-[30px] text-[#4B3621] whitespace-nowrap lg:mt-[107px]">
              {tours.length} Selected
            </h3>
          </div>

          {/* Tour Image Columns */}
          {tours.map((tour) => (
            <div key={tour.id} className="p-2 md:p-4 flex flex-col items-center border-t lg:border-t-0">
              {/* Tour Image - Max width 302px as per Figma design */}
              <div className="relative w-full max-w-[302px] aspect-[4/3] lg:h-[203px] rounded-lg overflow-hidden shrink-0">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  sizes="(max-width: 768px) 33vw, 302px"
                  className="object-cover"
                />
              </div>
              {/* Tour Name - Positioned 12px below image */}
              <span className="mt-2 lg:mt-[12px] font-display text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[30px] italic font-semibold text-[#4B3621] text-center">
                {tour.name}
              </span>
            </div>
          ))}
        </div>

        {/* ============================================
            Comparison Table
        ============================================ */}
        <div className="bg-white border border-[#4B3621]/20 rounded-xl overflow-hidden">
          {/* ----- Price Row (60px height) ----- */}
          <div className="grid grid-cols-3 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:h-[60px] border-b border-[#4B3621]/20 bg-white">
            <div className="col-span-3 lg:col-span-1 p-2 md:p-6 lg:px-6 lg:py-4 flex items-center justify-center lg:justify-start bg-gray-50 lg:bg-transparent">
              <span className="font-display text-lg md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Price
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`price-${tour.id}`}
                className="p-2 md:p-6 lg:px-6 lg:py-4 flex items-center justify-center border-t lg:border-t-0"
              >
                <span className="text-[14px] md:text-[22px] leading-[20px] md:leading-[28px] font-medium text-[#4B3621] text-center">
                  {tour.price} <span className="block lg:inline text-[10px] lg:text-sm uppercase">PP</span>
                </span>
              </div>
            ))}
          </div>

          {/* ----- Duration Row (60px height) ----- */}
          <div className="grid grid-cols-3 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:h-[60px] border-b border-[#4B3621]/20 bg-white">
            <div className="col-span-3 lg:col-span-1 p-2 md:p-6 lg:px-6 lg:py-4 flex items-center justify-center lg:justify-start bg-gray-50 lg:bg-transparent">
              <span className="font-display text-lg md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Duration
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`duration-${tour.id}`}
                className="p-2 md:p-6 lg:px-6 lg:py-4 flex items-center justify-center border-t lg:border-t-0"
              >
                <span className="text-[12px] md:text-[22px] leading-[18px] md:leading-[28px] font-medium text-[#4B3621] text-center">
                  {tour.duration}
                </span>
              </div>
            ))}
          </div>

          {/* ----- Accommodation Row (60px height) ----- */}
          <div className="grid grid-cols-3 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:h-[60px] border-b border-[#4B3621]/20 bg-white">
            <div className="col-span-3 lg:col-span-1 p-2 md:p-6 lg:px-6 lg:py-4 flex items-center justify-center lg:justify-start bg-gray-50 lg:bg-transparent">
              <span className="font-display text-lg md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Accommodation
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`accommodation-${tour.id}`}
                className="p-2 md:p-6 lg:px-6 lg:py-4 flex items-center justify-center border-t lg:border-t-0 scale-75 lg:scale-100"
              >
                <StarRating rating={tour.accommodation} />
              </div>
            ))}
          </div>

          {/* ----- Included Meals Row (94px height) ----- */}
          <div className="grid grid-cols-3 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:min-h-[94px] border-b border-[#4B3621]/20 bg-white">
            <div className="col-span-3 lg:col-span-1 p-2 md:p-6 lg:px-6 lg:py-8 flex items-center justify-center lg:justify-start bg-gray-50 lg:bg-transparent">
              <span className="font-display text-lg md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Included Meals
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`meals-${tour.id}`}
                className="p-2 md:p-6 lg:px-6 lg:py-8 flex items-center justify-center text-center border-t lg:border-t-0"
              >
                <span className="text-[12px] md:text-[22px] leading-[18px] md:leading-[28px] font-medium text-[#4B3621]">
                  {tour.meals}
                </span>
              </div>
            ))}
          </div>

          {/* ----- Key Activities Row (174px height) ----- */}
          <div className="grid grid-cols-3 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:min-h-[174px] border-b border-[#4B3621]/20 bg-white">
            <div className="col-span-3 lg:col-span-1 p-2 md:p-6 lg:px-6 lg:py-8 flex items-center justify-center lg:justify-start bg-gray-50 lg:bg-transparent">
              <span className="font-display text-lg md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Key Activities
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`activities-${tour.id}`}
                className="p-2 md:p-6 lg:px-6 lg:py-8 flex flex-col items-center gap-3 border-t lg:border-t-0"
              >
                <div className="flex flex-col gap-2 md:gap-3 items-start scale-90 lg:scale-100 origin-center">
                  {tour.activities.map((activity, index) => (
                    <ActivityItem key={index} activity={activity} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ----- Difficulty Row (60px height) ----- */}
          <div className="grid grid-cols-3 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:h-[60px] border-b border-[#4B3621]/20 bg-white">
            <div className="col-span-3 lg:col-span-1 p-2 md:p-6 lg:px-6 lg:py-4 flex items-center justify-center lg:justify-start bg-gray-50 lg:bg-transparent">
              <span className="font-display text-lg md:text-[22px] leading-[28px] italic font-semibold text-[#4B3621]">
                Difficulty
              </span>
            </div>
            {tours.map((tour) => (
              <div
                key={`difficulty-${tour.id}`}
                className="p-2 md:p-6 lg:px-6 lg:py-4 flex items-center justify-center border-t lg:border-t-0"
              >
                <DifficultyBadge difficulty={tour.difficulty} />
              </div>
            ))}
          </div>

          {/* ----- Book Now Buttons Row (107px height) ----- */}
          <div className="grid grid-cols-3 lg:grid-cols-[200px_1fr_1fr_1fr] h-auto lg:h-[107px] rounded-b-xl bg-white">
            <div className="col-span-3 lg:col-span-1 p-4 md:p-6 hidden lg:block"></div>
            {tours.map((tour) => (
              <div
                key={`book-${tour.id}`}
                className="p-2 md:p-6 flex items-center justify-center border-t lg:border-t-0"
              >
                <button
                  onClick={() => handleBookNow(tour)}
                  className="w-full max-w-[233px] block group/btn relative h-[40px] md:h-[45px] bg-[#FF6E00] text-white font-display text-[14px] md:text-[20px] leading-[20px] md:leading-[27px] italic font-medium rounded-xl override-hidden transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center h-full group-hover/btn:text-[#4B3621] transition-colors duration-300">
                    Book Now
                  </span>
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
