/**
 * PortfolioBannerSection Component
 * 
 * Full-width scenic banner image displayed below the hero section
 * on the Portfolio page. Features a dramatic landscape image
 * showcasing global travel destinations.
 * 
 * Design: Full-width image banner with bridge in clouds aesthetic
 */

import React from 'react';
import Image from 'next/image';

const PortfolioBannerSection: React.FC = () => {
  return (
    <section
      className="relative w-full"
      aria-label="Portfolio banner image"
    >
      {/* Banner Container */}
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/images/portfolio/18392-291585315_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />
      </div>
    </section>
  );
};

export default PortfolioBannerSection;
