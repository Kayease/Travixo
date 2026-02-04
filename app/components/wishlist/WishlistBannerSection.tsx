/**
 * WishlistBannerSection Component
 *
 * Full-width scenic banner image displayed below the hero section
 * on the Wishlist page. Features a beautiful landscape image
 * to evoke wanderlust and travel inspiration.
 *
 * Design: Full-width image banner with aspect ratio for visual impact
 */

import React from "react";

const WishlistBannerSection: React.FC = () => {
  return (
    <section className="relative w-full" aria-label="Wishlist banner video">
      {/* Banner Container */}
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] overflow-hidden">
        {/* Scenic Landscape Video */}
        <video
          src="/images/wishlist/173522-849651812_small.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Optional subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/10" />
      </div>
    </section>
  );
};

export default WishlistBannerSection;
