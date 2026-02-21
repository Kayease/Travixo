/**
 * WishlistCard Component
 *
 * Wraps the shared TourCard with wishlist-specific behavior:
 * - Heart button removes from wishlist
 * - Cart button triggers onAddToCart callback
 * - Book Now links to checkout
 */

import React from "react";
import TourCard from "@/components/ui/TourCard";

// Type definition for wishlist item (re-exported for use across the app)
export interface WishlistItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  discountPercent?: number;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  groupSize: string;
  type: "tour" | "destination" | "room";
  location: string;
}

interface WishlistCardProps {
  item: WishlistItem;
  onRemove?: (id: string) => void;
  onAddToCart?: (id: string) => void;
  priority?: boolean;
}

const WishlistCard: React.FC<WishlistCardProps> = React.memo(
  ({ item, onRemove, onAddToCart, priority = false }) => {
    return (
      <TourCard
        id={item.id}
        image={item.image}
        title={item.title}
        description={item.description}
        currentPrice={item.price}
        originalPrice={item.originalPrice}
        discount={
          item.discountPercent ? `${item.discountPercent}% Off` : undefined
        }
        rating={item.rating}
        reviews={item.reviewCount}
        duration={item.duration}
        people={item.groupSize}
        location={item.location}
        slug="/tour-listings/grand-palace-tour"
        variant="wishlist"
        onRemove={onRemove}
        onAddToCart={onAddToCart}
        priority={priority}
      />
    );
  },
);
WishlistCard.displayName = "WishlistCard";

export default WishlistCard;
