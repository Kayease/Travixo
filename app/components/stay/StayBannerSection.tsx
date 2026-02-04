/**
 * StayBannerSection Component
 *
 * Full-width banner video showcasing a luxury hotel setting.
 * Creates an immersive and inviting visual for the stay/accommodation page.
 * Video autoplays, loops, and is muted for a seamless experience.
 */

import React from "react";

const StayBannerSection: React.FC = () => {
  return (
    <section className="w-full">
      {/* Banner Video Container - Desktop: 608px height */}
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[608px] overflow-hidden">
        <video
          src="/images/stay/156473-812592018_small.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Optional dark overlay for better visibility */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </section>
  );
};

export default StayBannerSection;
