"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Related Tour Card Interface
 */
interface RelatedTour {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviewCount: number;
  duration: string;
  groupSize: string;
  location: string;
  slug: string;
}

/**
 * RelatedToursSection Props Interface
 */
interface RelatedToursSectionProps {
  /** Array of related tours */
  tours: RelatedTour[];
  /** Section title */
  title?: string;
}

/**
 * RelatedToursSection Component
 * 
 * Displays related tour recommendations.
 * 
 * Design Specifications (from Figma):
 * - Title: Playfair Display, italic, 600 weight, 28px
 * - Tour cards with image, discount badge, price, rating
 * - Quick info: duration, group size, location
 * 
 * @param {RelatedToursSectionProps} props - Related tours data
 * @returns {JSX.Element} The rendered related tours section
 */
export const RelatedToursSection: React.FC<RelatedToursSectionProps> = ({
  tours,
  title = "You might also like...",
}) => {
  return (
    <section className="w-full py-8 md:py-12" aria-labelledby="related-tours-title">
      {/* Section Title */}
      <h2
        id="related-tours-title"
        className="font-display italic font-semibold text-2xl md:text-[28px] leading-[37px] text-brand-brown mb-6 md:mb-8"
      >
        {title}
      </h2>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="group block relative"
          >
            <article
              className="relative shrink-0"
              style={{
                width: "100%",
                maxWidth: "418px",
                height: "530px",
                backgroundColor: "#FFFCF5",
                border: "1px solid rgba(255, 110, 0, 0.2)",
                borderRadius: "12px",
                boxSizing: "border-box"
              }}
            >
              {/* Image Container (Frame 51) */}
              {/* Image Container (Frame 51) */}
              <div
                className="absolute left-[18px] top-[18px] w-[calc(100%-36px)] h-[283px] overflow-hidden rounded-[12px] group"
              >
                <Link href={tour.slug} className="block w-full h-full relative cursor-pointer">
                  <Image
                    src={tour.imageUrl}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </Link>

                {/* 27% Off Badge (Frame 52) */}
                {tour.discount && (
                  <div
                    className="absolute left-[12px] top-[12px] flex items-center justify-center px-2 gap-[10px]"
                    style={{
                      width: "67px",
                      height: "25px",
                      backgroundColor: "#FF6E00",
                    }}
                  >
                    <span className="font-poppins font-medium text-[14px] leading-[21px] text-white">
                      {tour.discount}
                    </span>
                  </div>
                )}

                {/* Hover Icons: Slide in from Right */}
                <div className="absolute top-[12px] right-[12px] flex flex-col gap-2 translate-x-[50px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
                  {/* Heart Icon */}
                  <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.7692 6.39583C12.3533 5.97917 11.6441 5.97917 11.2307 6.39583L4.24996 13.3958C3.83411 13.8125 3.83411 14.5242 4.24996 14.9408L11.2307 21.9408C11.6466 22.3575 12.3558 22.3575 12.7692 21.9408L19.7499 14.9408C20.1658 14.5242 20.1658 13.8125 19.7499 13.3958L12.7692 6.39583Z"
                        stroke="#4B3621" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M12 21.5C12 21.5 6 15 6 10C6 7 8 5 10.5 5C11.9 5 13.2 5.6 14 6.6C14.8 5.6 16.1 5 17.5 5C20 5 22 7 22 10C22 15 16 21.5 16 21.5" stroke="#4B3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Cart Icon */}
                  <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20Z" stroke="#4B3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20 20C20 21.1 19.1 22 18 22C16.9 22 16 21.1 16 20C16 18.9 16.9 18 18 18C19.1 18 20 18.9 20 20Z" stroke="#4B3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#4B3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>



                {/* Price Tag (Frame 53) - Hidden on Hover to make room for button */}
                <div
                  className="absolute bottom-[12px] right-0 w-[102px] h-[47px] bg-white rounded-tl-[100px] rounded-bl-[100px] rounded-br-none rounded-tr-none flex items-center justify-center pl-4 transition-opacity duration-300 group-hover:opacity-0"
                >
                  <div className="relative w-full h-full">
                    <span className="absolute left-[7px] top-[10px] font-poppins font-medium text-[18px] leading-[27px] text-[#FF6E00]">
                      ${tour.price}
                    </span>
                    {tour.originalPrice && (
                      <span className="absolute left-[55px] top-[16px] font-poppins font-medium text-[14px] leading-[21px] text-[#000000] opacity-60 line-through">
                        ${tour.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

              </div>

              <div className="absolute left-[18px] top-[315px] flex items-center h-[19px]">
                <div className="flex gap-px">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="relative w-[17px] h-[16px]">
                      {star <= 4 ? (
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.5 0L10.9706 5.34094L16.8116 6.009L12.4828 9.99844L13.6599 15.75L8.5 12.8638L3.34008 15.75L4.51722 9.99844L0.188358 6.009L6.02931 5.34094L8.5 0Z" fill="#FF6E00" />
                        </svg>
                      ) : (
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.5 0L10.9706 5.34094L16.8116 6.009L12.4828 9.99844L13.6599 15.75L8.5 12.8638L3.34008 15.75L4.51722 9.99844L0.188358 6.009L6.02931 5.34094L8.5 0Z" fill="#FF6E00" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>

                <span className="ml-[10px] font-poppins font-normal text-[16px] leading-[24px] text-brand-brown">
                  {tour.rating}
                </span>

                <div className="mx-[8px] w-px h-[16px] bg-[#4B3621]" />

                <span className="font-poppins font-normal text-[16px] leading-[24px] text-brand-brown">
                  ({tour.reviewCount} Reviews)
                </span>
              </div>

              {/* Title */}
              <div className="absolute left-[18px] top-[346px]">
                <Link href={tour.slug} className="cursor-pointer">
                  <h3 className="font-display italic font-semibold text-[22px] leading-[29px] text-brand-brown line-clamp-1 hover:text-brand-orange transition-colors">
                    {tour.title}
                  </h3>
                </Link>
              </div>

              {/* Description */}
              <div className="absolute left-[18px] top-[387px]">
                <p className="font-poppins font-normal text-[14px] leading-[24px] text-[rgba(75,54,33,0.6)] line-clamp-2 w-[382px]">
                  {tour.description}
                </p>
              </div>

              {/* Separator Line */}
              <div className="absolute left-[50%] -translate-x-1/2 top-[453px] w-[382px] h-px bg-[rgba(0,0,0,0.2)]" />

              {/* Bottom Info Row */}
              <div className="absolute left-[50%] -translate-x-1/2 top-[471px] flex items-center gap-[38px] w-[333px] h-[24px]">

                {/* Duration */}
                <div className="flex items-center gap-[8px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#FF6E00" strokeWidth="2" />
                    <path d="M12 6V12H16.5" stroke="#FF6E00" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="font-poppins font-normal text-[14px] leading-[24px] text-brand-brown">{tour.duration}</span>
                </div>

                {/* Group Size */}
                <div className="flex items-center gap-[8px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" stroke="#FF6E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="7" r="4" stroke="#FF6E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-poppins font-normal text-[14px] leading-[24px] text-brand-brown">{tour.groupSize}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-[8px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16 17 20 13 20 9C20 4.58 16.42 1 12 1C7.58 1 4 4.58 4 9C4 13 8 17 12 21Z" stroke="#FF6E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="3" stroke="#FF6E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-poppins font-normal text-[14px] leading-[24px] text-brand-brown line-clamp-1">{tour.location}</span>
                </div>

              </div>

              {/* Book Now Button - Positioned at bottom outside image */}
              {/* Book Now Button - Matches FeaturedToursSection implementation */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 translate-y-12 transform group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <Link href={tour.slug} className="relative flex items-center justify-center w-[202px] h-[45px] bg-white border border-[#FF6E00] rounded-[12px] font-display italic text-lg text-brand-brown overflow-hidden group/btn transition-all duration-300 cursor-pointer">
                  <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#FF6E00] group-hover/btn:h-full transition-all duration-300 ease-out" />
                  <span className="relative z-10 font-medium text-[20px] group-hover/btn:text-white transition-colors duration-300">Book Now</span>
                </Link>
              </div>

            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedToursSection;
