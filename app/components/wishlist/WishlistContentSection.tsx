/**
 * WishlistContentSection Component
 *
 * Main content section for the wishlist page containing the sidebar
 * with collections filter and the grid of wishlist items.
 *
 * Design specs from Figma:
 * - Container: max-width 1440px, background #FFFCF5
 * - Sidebar: 379px width on desktop
 * - Grid: 2 columns with tour cards
 * - "Refine" button: orange #FF6E00, Playfair Display italic
 * - "Load More" button: orange #FF6E00, 431x45px
 */

"use client";

import React, { useState } from "react";
import WishlistSidebar from "./WishlistSidebar";
import WishlistCard, { WishlistItem } from "./WishlistCard";

// Sample wishlist data
const sampleWishlistItems: WishlistItem[] = [
  {
    id: "1",
    slug: "eiffel-tower-tour",
    title: "Eiffel Tower",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "/images/wishlist/Frame 51.png",
    discountPercent: 27,
    price: 100,
    originalPrice: 120,
    rating: 4.9,
    reviewCount: 311,
    duration: "4 hors",
    groupSize: "2-18",
    location: "Paris, France",
  },
  {
    id: "2",
    slug: "eiffel-tower-sunset",
    title: "Eiffel Tower",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "/images/wishlist/Frame 51.png",
    discountPercent: 27,
    price: 100,
    originalPrice: 120,
    rating: 4.9,
    reviewCount: 311,
    duration: "4 hors",
    groupSize: "2-18",
    location: "Paris, France",
  },
  {
    id: "3",
    slug: "eiffel-tower-night",
    title: "Eiffel Tower",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "/images/wishlist/Frame 51.png",
    discountPercent: 27,
    price: 100,
    originalPrice: 120,
    rating: 4.9,
    reviewCount: 311,
    duration: "4 hors",
    groupSize: "2-18",
    location: "Paris, France",
  },
  {
    id: "4",
    slug: "eiffel-tower-morning",
    title: "Eiffel Tower",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "/images/wishlist/Frame 51.png",
    discountPercent: 27,
    price: 100,
    originalPrice: 120,
    rating: 4.9,
    reviewCount: 311,
    duration: "4 hors",
    groupSize: "2-18",
    location: "Paris, France",
  },
];

interface WishlistContentSectionProps {
  items?: WishlistItem[];
}

const WishlistContentSection: React.FC<WishlistContentSectionProps> = ({
  items = sampleWishlistItems,
}) => {
  const [activeCollection, setActiveCollection] = useState("all");
  const [showRefineMenu, setShowRefineMenu] = useState(false);

  // Calculate item counts
  const itemCounts = {
    all: items.length,
    tours: Math.ceil(items.length * 0.4),
    destinations: Math.ceil(items.length * 0.6),
  };

  // Handle remove from wishlist
  const handleRemove = (id: string) => {
    console.log("Remove item:", id);
    // Implement remove logic
  };

  // Handle add to cart
  const handleAddToCart = (id: string) => {
    console.log("Add to cart:", id);
    // Implement add to cart logic
  };

  return (
    <section className="relative w-full bg-[#FFFCF5] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Main Layout: Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar - Collections */}
          <div className="w-full lg:w-auto lg:shrink-0">
            <WishlistSidebar
              activeCollection={activeCollection}
              onCollectionChange={setActiveCollection}
              itemCounts={itemCounts}
            />
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Header: Title + Refine Button */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              {/* Favorites Count Title */}
              <h2 className="font-display italic font-semibold text-xl md:text-[24px] leading-[30px] text-brand-brown">
                {items.length} Favorites
              </h2>

              {/* Refine Button */}
              <button
                onClick={() => setShowRefineMenu(!showRefineMenu)}
                className="flex items-center gap-2 bg-brand-orange px-4 py-1.5 rounded-xl hover:bg-brand-orange/90 transition-colors"
              >
                {/* Filter Icon */}
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2.5 5H17.5M5 10H15M7.5 15H12.5"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-display italic font-semibold text-lg md:text-xl leading-[30px] text-white">
                  Refine
                </span>
              </button>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 md:mb-12">
              {items.map((item) => (
                <WishlistCard
                  key={item.id}
                  item={item}
                  onRemove={handleRemove}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center">
              <button className="relative w-full max-w-[431px] h-[45px] bg-brand-orange rounded-xl overflow-hidden group">
                <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
                <span className="relative z-10 font-display italic font-medium text-lg md:text-xl leading-[27px] text-white group-hover:text-brand-orange transition-colors duration-300">
                  Load More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistContentSection;
