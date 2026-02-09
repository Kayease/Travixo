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

import { useToast } from "@/app/context/ToastContext";

// Sample wishlist data
const sampleWishlistItems: WishlistItem[] = [
  {
    id: "1",
    slug: "eiffel-tower-tour",
    title: "Eiffel Tower",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "/images/wishlist/wishlist-placeholder.png",
    discountPercent: 27,
    price: 100,
    originalPrice: 120,
    rating: 4.9,
    reviewCount: 311,
    duration: "4 hours",
    groupSize: "2-18",
    type: "tour",
    location: "Paris, France",
  },
  {
    id: "2",
    slug: "eiffel-tower-sunset",
    title: "Eiffel Tower",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "/images/wishlist/wishlist-placeholder.png",
    discountPercent: 27,
    price: 100,
    originalPrice: 120,
    rating: 4.9,
    reviewCount: 311,
    duration: "4 hours",
    groupSize: "2-18",
    type: "tour",
    location: "Paris, France",
  },
  {
    id: "3",
    slug: "eiffel-tower-night",
    title: "Eiffel Tower",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "/images/wishlist/wishlist-placeholder.png",
    discountPercent: 27,
    price: 100,
    originalPrice: 120,
    rating: 4.9,
    reviewCount: 311,
    duration: "4 hours",
    groupSize: "2-18",
    type: "destination",
    location: "Paris, France",
  },
  {
    id: "4",
    slug: "eiffel-tower-morning",
    title: "Eiffel Tower",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "/images/wishlist/wishlist-placeholder.png",
    discountPercent: 27,
    price: 100,
    originalPrice: 120,
    rating: 4.9,
    reviewCount: 311,
    duration: "4 hours",
    groupSize: "2-18",
    type: "destination",
    location: "Paris, France",
  },
];

interface WishlistContentSectionProps {
  items?: WishlistItem[];
}

const WishlistContentSection: React.FC<WishlistContentSectionProps> = ({
  items: initialItems = sampleWishlistItems,
}) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(initialItems);
  const [activeCollection, setActiveCollection] = useState("all");
  const [showRefineMenu, setShowRefineMenu] = useState(false);
  const { showToast } = useToast();

  const [sortBy, setSortBy] = useState("newest"); // newest, price-asc, price-desc, name-asc, name-desc, rating-desc

  // Calculate item counts based on current wishlist
  const itemCounts = {
    all: wishlist.length,
    tours: wishlist.filter((item) => item.type === "tour").length,
    destinations: wishlist.filter((item) => item.type === "destination").length,
  };

  // Filter items based on active collection
  const filteredItems = wishlist.filter((item) => {
    if (activeCollection === "all") return true;
    if (activeCollection === "tours") return item.type === "tour";
    if (activeCollection === "destinations") return item.type === "destination";
    return true;
  });

  // Sort items based on selected option
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.title.localeCompare(b.title);
      case "name-desc":
        return b.title.localeCompare(a.title);
      case "rating-desc":
        return b.rating - a.rating;
      default:
        return 0; // Newest/Default
    }
  });

  // Handle remove from wishlist
  const handleRemove = (id: string) => {
    const item = wishlist.find((i) => i.id === id);
    setWishlist((prev) => prev.filter((i) => i.id !== id));
    showToast(`${item?.title || "Item"} removed from wishlist`, "info");
  };

  // Handle add to cart
  const handleAddToCart = (id: string) => {
    const item = wishlist.find((i) => i.id === id);
    showToast(`${item?.title || "Item"} added to cart`, "success");
  };

  const sortOptions = [
    { label: "Newest Added", value: "newest" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Name: A to Z", value: "name-asc" },
    { label: "Name: Z to A", value: "name-desc" },
    { label: "Check Rating", value: "rating-desc" },
  ];

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
            <div className="flex items-center justify-between mb-6 md:mb-8 z-30 relative">
              {/* Favorites Count Title */}
              <h2 className="font-display italic font-semibold text-xl md:text-[24px] leading-[30px] text-brand-brown">
                {filteredItems.length} Favorites
              </h2>

              {/* Refine Button & Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowRefineMenu(!showRefineMenu)}
                  className="flex items-center gap-2 bg-brand-orange px-4 py-1.5 rounded-xl hover:bg-brand-orange/90 transition-colors cursor-pointer"
                >
                  <span className="text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 5H17.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 10H15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 15H12.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-display italic font-semibold text-lg md:text-xl leading-[30px] text-white">
                    Refine
                  </span>
                </button>

                {/* Dropdown Menu */}
                {showRefineMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-brand-brown/10 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setShowRefineMenu(false);
                          }}
                          className={`
                            w-full text-left px-4 py-2 text-sm font-medium transition-colors
                            ${
                              sortBy === option.value
                                ? "bg-brand-orange/10 text-brand-orange"
                                : "text-brand-brown hover:bg-brand-brown/5"
                            }
                          `}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 md:mb-12">
              {sortedItems.length > 0 ? (
                sortedItems.map((item) => (
                  <WishlistCard
                    key={item.id}
                    item={item}
                    onRemove={handleRemove}
                    onAddToCart={handleAddToCart}
                  />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="font-display italic text-2xl text-brand-brown/60">
                    No items found in this collection.
                  </p>
                </div>
              )}
            </div>

            {/* Load More Button */}
            {sortedItems.length > 0 && (
              <div className="flex justify-center">
                <button className="relative w-full max-w-[431px] h-[45px] bg-brand-orange rounded-xl overflow-hidden group cursor-pointer">
                  <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
                  <span className="relative z-10 font-display italic font-medium text-lg md:text-xl leading-[27px] text-white group-hover:text-brand-orange transition-colors duration-300">
                    Load More
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistContentSection;
