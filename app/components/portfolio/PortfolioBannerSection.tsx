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
        {/* Scenic Bridge in Clouds Image */}
        <Image
          src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop"
          alt="Golden Gate Bridge emerging through clouds - global travel destinations"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        
        {/* Optional subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />
      </div>
    </section>
  );
};

export default PortfolioBannerSection;
