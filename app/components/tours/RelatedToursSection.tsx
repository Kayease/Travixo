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
          <Link
            key={tour.id}
            href={tour.slug}
            className="group block"
          >
            <article
              className="overflow-hidden transition-shadow hover:shadow-lg"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={tour.imageUrl}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Discount Badge */}
                {tour.discount && (
                  <span
                    className="absolute top-3 left-3 px-2 py-1 text-xs font-medium text-white rounded"
                    style={{ backgroundColor: "#FF6E00" }}
                  >
                    {tour.discount}
                  </span>
                )}

                {/* Price Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <span className="font-display italic font-semibold text-lg text-white drop-shadow-lg">
                    ${tour.price}
                  </span>
                  {tour.originalPrice && (
                    <span className="font-body text-sm text-white/70 line-through drop-shadow-lg">
                      ${tour.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill={star <= Math.floor(tour.rating) ? "#FF6E00" : "#E5E7EB"}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-body text-sm text-brand-brown">
                    {tour.rating}
                  </span>
                  <span className="font-body text-sm text-brand-brown/60">
                    ({tour.reviewCount} Reviews)
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display italic font-semibold text-lg text-brand-brown mb-2 line-clamp-1">
                  {tour.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-brand-brown/70 mb-4 line-clamp-2">
                  {tour.description}
                </p>

                {/* Quick Info */}
                <div className="flex items-center gap-4 text-brand-brown/60">
                  {/* Duration */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="font-body text-xs">{tour.duration}</span>
                  </div>

                  {/* Group Size */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <span className="font-body text-xs">{tour.groupSize}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span className="font-body text-xs">{tour.location}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedToursSection;
