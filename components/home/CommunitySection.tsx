import React from "react";
import Image from "next/image";

/**
 * Instagram Icon
 */
const InstagramIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="22"
      height="22"
      rx="6"
      stroke="white"
      strokeWidth="2"
    />
    <circle cx="14" cy="14" r="5" stroke="white" strokeWidth="2" />
    <circle cx="20" cy="8" r="1.5" fill="white" />
  </svg>
);

/**
 * Community gallery images
 */
const GALLERY_IMAGES = [
  {
    id: 1,
    url: "/images/travixo-tours/cards/community-1.png",
    alt: "Travel moment 1",
  },
  {
    id: 2,
    url: "/images/travixo-tours/cards/community-2.png",
    alt: "Travel moment 2",
  },
  {
    id: 3,
    url: "/images/travixo-tours/cards/community-3.png",
    alt: "Travel moment 3",
  },
  {
    id: 4,
    url: "/images/travixo-tours/cards/community-4.png",
    alt: "Travel moment 4",
  },
];

/**
 * GalleryCard Component
 */
const GalleryCard = ({ url, alt }: { url: string; alt: string }) => (
  <div className="relative w-full h-[280px] md:h-[320px] lg:h-[365px] rounded-xl overflow-hidden group cursor-pointer">
    <Image
      src={url}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 311px"
    />

    {/* Overlay with Instagram Icon - Slides down on Hover */}
    <div className="absolute inset-0 bg-black/40 z-10 w-full h-full -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
      <InstagramIcon />
    </div>
  </div>
);

/**
 * CommunitySection Component
 * "Join Our Travel Community" Instagram gallery
 * Background: #FFF7E5 (beige)
 */
export const CommunitySection = () => {
  return (
    <section
      className="relative w-full py-12 lg:py-16 bg-[#FFF7E5]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 lg:mb-14">
          {/* Title */}
          <h2 className="font-display italic font-semibold text-2xl md:text-[28px] leading-tight md:leading-[37px] text-brand-brown text-center mb-4">
            Join Our Travel Community
          </h2>

          {/* Description */}
          <p className="font-body font-normal text-base md:text-lg leading-[28px] text-brand-brown text-center max-w-[505px]">
            Connect with fellow travelers, share your adventures, and get inspired for your next journey. Follow us on Instagram for daily travel inspiration and exclusive behind-the-scenes content.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {GALLERY_IMAGES.map((image) => (
            <GalleryCard key={image.id} url={image.url} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

