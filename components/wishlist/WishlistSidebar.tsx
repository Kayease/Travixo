/**
 * WishlistSidebar Component
 *
 * Sidebar navigation for filtering wishlist items by collection type.
 * Displays "Collections" title with filter options for All Items,
 * Saved Tours, and Destinations with item counts.
 *
 * Design specs from Figma:
 * - Title: Playfair Display italic, 24px, 600 weight
 * - Filter items: 379x58px, Poppins 20px medium
 * - Active state: white background with border
 * - Icons: 24x24px, orange #FF6E00 for active
 */

"use client";

import React, { useState } from "react";

// Collection type definition
interface Collection {
  id: string;
  name: string;
  count: number;
  icon: React.ReactNode;
}

interface WishlistSidebarProps {
  activeCollection?: string;
  onCollectionChange?: (collectionId: string) => void;
  itemCounts?: {
    all: number;
    tours: number;
    destinations: number;
  };
}

const WishlistSidebar: React.FC<WishlistSidebarProps> = ({
  activeCollection = "all",
  onCollectionChange,
  itemCounts = { all: 12, tours: 5, destinations: 8 },
}) => {
  const [active, setActive] = useState(activeCollection);

  // Handle collection click
  const handleCollectionClick = (collectionId: string) => {
    setActive(collectionId);
    onCollectionChange?.(collectionId);
  };

  // Collection items with icons
  const collections: Collection[] = [
    {
      id: "all",
      name: "All Items",
      count: itemCounts.all,
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          {/* Gallery icon */}
          <rect x="3" y="3" width="7" height="7" rx="1" fill="#FF6E00" />
          <rect x="14" y="3" width="7" height="7" rx="1" fill="#FF6E00" />
          <rect x="3" y="14" width="7" height="7" rx="1" fill="#FF6E00" />
          <rect x="14" y="14" width="7" height="7" rx="1" fill="#FF6E00" />
        </svg>
      ),
    },
    {
      id: "tours",
      name: "Saved Tours",
      count: itemCounts.tours,
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          {/* Dashboard/compass icon */}
          <circle cx="12" cy="12" r="9" stroke="#4B3621" strokeWidth="1.5" />
          <path
            d="M12 7V12L15 14"
            stroke="#4B3621"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "destinations",
      name: "Saved Rooms",
      count: itemCounts.destinations,
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          {/* Location pin icon */}
          <path
            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
            stroke="#4B3621"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="9" r="2" stroke="#4B3621" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-full lg:w-[379px] wishlist-sidebar-container">
      {/* Collections Title */}
      <h2 className="font-display italic font-semibold text-xl md:text-[24px] leading-[30px] text-brand-brown mb-6 md:mb-8 wishlist-collections-title">
        Collections
      </h2>

      {/* Collection Filter List */}
      <div className="flex flex-col gap-3 wishlist-collections-list">
        {collections.map((collection) => (
          <button
            key={collection.id}
            onClick={() => handleCollectionClick(collection.id)}
            className={`
              w-full h-[58px] rounded-xl flex items-center justify-between px-5 cursor-pointer
              transition-all duration-200 wishlist-collection-btn
              ${active === collection.id
                ? "bg-white border border-brand-brown/40"
                : "bg-transparent hover:bg-white/50"
              }
            `}
          >
            {/* Left: Icon + Name */}
            <div className="flex items-center gap-3.5">
              {/* Icon - Update color based on active state */}
              <div
                className={
                  active === collection.id
                    ? "text-brand-orange"
                    : "text-brand-brown"
                }
              >
                {/* Icon Logic based on ID and Active State */}
                {collection.id === "all" ? (
                  active === "all" ? (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="3"
                        width="7"
                        height="7"
                        rx="1"
                        fill="#FF6E00"
                      />
                      <rect
                        x="14"
                        y="3"
                        width="7"
                        height="7"
                        rx="1"
                        fill="#FF6E00"
                      />
                      <rect
                        x="3"
                        y="14"
                        width="7"
                        height="7"
                        rx="1"
                        fill="#FF6E00"
                      />
                      <rect
                        x="14"
                        y="14"
                        width="7"
                        height="7"
                        rx="1"
                        fill="#FF6E00"
                      />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="3"
                        width="7"
                        height="7"
                        rx="1"
                        stroke="#4B3621"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="14"
                        y="3"
                        width="7"
                        height="7"
                        rx="1"
                        stroke="#4B3621"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="3"
                        y="14"
                        width="7"
                        height="7"
                        rx="1"
                        stroke="#4B3621"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="14"
                        y="14"
                        width="7"
                        height="7"
                        rx="1"
                        stroke="#4B3621"
                        strokeWidth="1.5"
                      />
                    </svg>
                  )
                ) : collection.id === "tours" ? (
                  active === "tours" ? (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" fill="#FF6E00" />
                      <path
                        d="M12 7V12L15 14"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="#4B3621"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 7V12L15 14"
                        stroke="#4B3621"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )
                ) : collection.id === "destinations" ? (
                  active === "destinations" ? (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                        fill="#FF6E00"
                      />
                      <circle cx="12" cy="9" r="2" fill="white" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                        stroke="#4B3621"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="9"
                        r="2"
                        stroke="#4B3621"
                        strokeWidth="1.5"
                      />
                    </svg>
                  )
                ) : null}
              </div>

              {/* Name */}
              <span className="font-body font-medium text-lg md:text-xl leading-[30px] text-brand-brown">
                {collection.name}
              </span>
            </div>

            {/* Right: Count */}
            <span className="font-body font-medium text-base leading-[30px] text-brand-brown wishlist-collection-count">
              {collection.count.toString().padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {/* iPad Landscape Specific Styles */}
      <style jsx>{`
        /* iPad Landscape (1024x768) - Horizontal layout for collections */
        @media only screen 
          and (min-width: 1024px) 
          and (max-width: 1024px) 
          and (min-height: 768px) 
          and (max-height: 768px) 
          and (orientation: landscape) {
          .wishlist-sidebar-container {
            width: 100% !important;
          }
          
          .wishlist-collections-title {
            margin-bottom: 1rem !important;
          }
          
          .wishlist-collections-list {
            flex-direction: row !important;
            gap: 0.75rem !important;
            justify-content: flex-start;
          }
          
          .wishlist-collection-btn {
            width: auto !important;
            flex: 0 0 auto !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            min-width: fit-content !important;
          }
          
          .wishlist-collection-count {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
};

export default WishlistSidebar;
