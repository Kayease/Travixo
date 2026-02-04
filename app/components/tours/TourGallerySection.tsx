"use client";
import React, { useState } from "react";
import Image from "next/image";

/**
 * TourGallerySection Props Interface
 */
interface TourGallerySectionProps {
  /** Array of image URLs for the gallery */
  images: {
    url: string;
    alt?: string;
  }[];
}

/**
 * TourGallerySection Component
 * 
 * Displays a gallery of tour images with a main large image
 * and smaller thumbnails on the right.
 * 
 * Design Specifications (from Figma):
 * - Main image: 650x544px, border-radius 12px
 * - Small images: 325x264px, border-radius 12px
 * - Gap between images: 12px
 * 
 * @param {TourGallerySectionProps} props - Gallery images
 * @returns {JSX.Element} The rendered gallery section
 */
export const TourGallerySection: React.FC<TourGallerySectionProps> = ({
  images,
}) => {
  const [activeImage, setActiveImage] = useState(0);

  // Ensure we have at least one image
  if (!images || images.length === 0) {
    return null;
  }

  // Get main image and thumbnails
  const mainImage = images[activeImage];
  const thumbnails = images.filter((_, index) => index !== activeImage).slice(0, 2);

  return (
    <section className="w-full" aria-label="Tour Gallery">
      <div className="flex flex-col lg:flex-row gap-3">
        {/* Main Large Image */}
        <div 
          className="relative w-full lg:w-[650px] aspect-[650/544] lg:h-[544px] overflow-hidden shrink-0"
          style={{ borderRadius: "12px" }}
        >
          <Image
            src={mainImage.url}
            alt={mainImage.alt || "Tour main image"}
            fill
            className="object-cover"
            style={{ borderRadius: "12px" }}
            sizes="(max-width: 1024px) 100vw, 650px"
            priority
          />
        </div>

        {/* Thumbnail Images - Right Side */}
        <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-[325px]">
          {thumbnails.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                const originalIndex = images.findIndex(img => img.url === image.url);
                setActiveImage(originalIndex);
              }}
              className="relative w-1/2 lg:w-full aspect-[325/264] lg:h-[264px] overflow-hidden transition-opacity hover:opacity-90"
              style={{ borderRadius: "12px" }}
            >
              <Image
                src={image.url}
                alt={image.alt || `Tour image ${index + 2}`}
                fill
                className="object-cover"
                style={{ borderRadius: "12px" }}
                sizes="(max-width: 1024px) 50vw, 325px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourGallerySection;
