"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useWishlist } from "@/app/context/WishlistContext";
import WishlistSidebar from "./WishlistSidebar";
import WishlistCard from "./WishlistCard";
import { useCart, CartItem } from "@/app/context/CartContext";

type WishlistContentSectionProps = object;

const WishlistContentSection: React.FC<WishlistContentSectionProps> = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const [activeCollection, setActiveCollection] = useState("all");
  const [showRefineMenu, setShowRefineMenu] = useState(false);
  const { addToCart, isInCart, cartItems, removeFromCart } = useCart();

  const [sortBy, setSortBy] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(4);

  // Removed click-outside listener to ensure it only closes on explicit button click or option selection

  useEffect(() => {
    setVisibleCount(4);
  }, [activeCollection]);

  const itemCounts = useMemo(() => ({
    all: wishlistItems.length,
    tours: wishlistItems.filter((item) => item.type !== "room").length,
    destinations: wishlistItems.filter((item) => item.type === "room").length,
  }), [wishlistItems]);

  const filteredItems = useMemo(() => wishlistItems.filter((item) => {
    if (activeCollection === "all") return true;
    if (activeCollection === "tours") return item.type !== "room";
    if (activeCollection === "destinations") return item.type === "room";
    return true;
  }), [wishlistItems, activeCollection]);

  const sortedItems = useMemo(() => {
    const items = [...filteredItems];
    switch (sortBy) {
      case "price-asc": return items.sort((a, b) => a.price - b.price);
      case "price-desc": return items.sort((a, b) => b.price - a.price);
      case "name-asc": return items.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc": return items.sort((a, b) => b.title.localeCompare(a.title));
      case "rating-desc": return items.sort((a, b) => b.rating - a.rating);
      case "newest":
      default:
        return items.reverse(); // newest items are appended to the end, so reverse to show them first
    }
  }, [filteredItems, sortBy]);

  const handleRemove = useCallback((id: string) => {
    removeFromWishlist(id);
  }, [removeFromWishlist]);

  const handleAddToCart = useCallback((id: string) => {
    const item = wishlistItems.find((i) => i.id === id);
    if (!item) return;

    if (!isInCart(item.title)) {
      const cartItem: CartItem = {
        id: item.id,
        type: item.type === "room" ? "room" : "experience",
        title: item.title,
        image: item.image,
        location: item.location,
        dates: new Date().toISOString().split("T")[0],
        amenities: [item.duration, item.groupSize],
        price: item.price,
        actionLabel: "Book Now",
      };
      addToCart(cartItem);
    } else {
      const itemToRemove = cartItems.find((i) => i.title === item.title);
      if (itemToRemove) removeFromCart(itemToRemove.id);
    }
  }, [wishlistItems, addToCart, isInCart, cartItems, removeFromCart]);

  const sortOptions = [
    { label: "Newest Added", value: "newest" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Name: A to Z", value: "name-asc" },
    { label: "Name: Z to A", value: "name-desc" },
    { label: "Check Rating", value: "rating-desc" },
  ];

  return (
    // ✅ isolate creates a new stacking root so cards can't overlap dropdown
    <section className="relative isolate w-full bg-[#FFFCF5] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 ipad-landscape-wishlist">
          <div className="w-full lg:w-auto lg:shrink-0">
            <WishlistSidebar
              activeCollection={activeCollection}
              onCollectionChange={setActiveCollection}
              itemCounts={itemCounts}
            />
          </div>

          <div className="flex-1">
            {/* ✅ Raised z-index so dropdown always wins */}
            <div className="relative z-[500] flex items-center justify-between mb-6 md:mb-8">
              <h2 className="font-display italic font-semibold text-xl md:text-[24px] leading-[30px] text-brand-brown">
                {filteredItems.length} Favorites
              </h2>

              <div className="relative">
                <button
                  onClick={() => setShowRefineMenu((prev) => !prev)}
                  className="flex items-center gap-2 bg-brand-orange px-4 py-1.5 rounded-xl hover:bg-brand-orange/90 transition-colors"
                >
                  <span className="font-display italic font-semibold text-lg md:text-xl text-white">
                    Refine
                  </span>
                </button>

                {showRefineMenu && (
                  // ✅ Very high z-index + overflow-visible prevents clipping
                  <div
                    className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-brand-brown/10 z-[9999] overflow-visible animate-in fade-in zoom-in-95 duration-200"
                  >
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setShowRefineMenu(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors
                            ${sortBy === option.value
                              ? "bg-brand-orange/10 text-brand-orange"
                              : "text-brand-brown hover:bg-brand-brown/5"
                            }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 md:mb-12">
              {sortedItems.length > 0 ? (
                sortedItems.slice(0, visibleCount).map((item) => (
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

            {visibleCount < sortedItems.length && (
              <div className="flex justify-center">
                <button
                  onClick={() => setVisibleCount(sortedItems.length)}
                  className="relative w-full max-w-[200px] h-[45px] bg-brand-orange border border-brand-orange rounded-xl overflow-hidden group shadow-[0px_8px_24px_rgba(255,110,0,0.15)]"
                >
                  <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
                  <span className="relative z-10 font-display italic font-medium text-lg md:text-xl text-white group-hover:text-brand-orange transition-colors duration-300">
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