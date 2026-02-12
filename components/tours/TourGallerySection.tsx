import React from "react";
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
 * Design Specifications:
 * - Layout: Bento Grid
 * - Desktop Width: ~1280px content area
 * - Gap: 18px (derived from Figma coordinates)
 *
 * Image Mapping (Indices based on typical input order 369, 370, 371, 372):
 * - Index 0 (Frame 369): Left Large (611x519)
 * - Index 1 (Frame 370): Right Top Left (325x264)
 * - Index 2 (Frame 371): Right Bottom Wide (652x237)
 * - Index 3 (Frame 372): Right Top Right (309x264)
 *
 * Note: Input array is expected to have at least 4 images for full layout.
 */
export const TourGallerySection: React.FC<TourGallerySectionProps> = ({
  images,
}) => {
  // Ensure we have images
  if (!images || images.length === 0) {
    return null;
  }

  // Fallback for fewer images could be added, but assuming 4 for this specialized design
  const imgLeft = images[0];
  const imgRightTop1 = images[1] || images[0];
  const imgRightBottom = images[2] || images[0];
  const imgRightTop2 = images[3] || images[1] || images[0];

  return (
    <section className="w-full" aria-label="Tour Gallery">
      {/* Mobile/Tablet: Vertical or simplified grid */}
      <div className="flex xl:hidden flex-col gap-4">
        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
          <Image
            src={imgLeft.url}
            alt={imgLeft.alt || "Main tour image"}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 611px"
            priority
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
            <Image
              src={imgRightTop1.url}
              alt={imgRightTop1.alt || "Tour detail"}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 50vw, 325px"
            />
          </div>
          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
            <Image
              src={imgRightTop2.url}
              alt={imgRightTop2.alt || "Tour detail"}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 50vw, 309px"
            />
          </div>
          <div className="relative w-full aspect-2/1 col-span-2 rounded-xl overflow-hidden">
            <Image
              src={imgRightBottom.url}
              alt={imgRightBottom.alt || "Tour panorama"}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 652px"
            />
          </div>
        </div>
      </div>

      {/* Desktop: Exact Figma Layout (XL Screens >= 1280px) */}
      <div className="hidden xl:flex flex-row gap-[18px]">
        {/* Left Column: Frame 369 - 611x519 */}
        <div className="relative shrink-0 w-[611px] h-[519px] overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={imgLeft.url}
            alt={imgLeft.alt || "Main tour image"}
            fill
            className="object-cover"
            sizes="611px"
            priority
          />
        </div>

        {/* Right Column: 652px wide */}
        <div className="flex flex-col gap-[18px] w-[652px] shrink-0">
          {/* Top Row: Frame 370 & Frame 372 */}
          <div className="flex flex-row gap-[18px] h-[264px]">
            {/* Frame 370 - 325x264 */}
            <div className="relative w-[325px] h-full overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={imgRightTop1.url}
                alt={imgRightTop1.alt || "Tour detail 1"}
                fill
                className="object-cover"
                sizes="325px"
                priority
              />
            </div>
            {/* Frame 372 - 309x264 */}
            <div className="relative w-[309px] h-full overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={imgRightTop2.url}
                alt={imgRightTop2.alt || "Tour detail 2"}
                fill
                className="object-cover"
                sizes="309px"
              />
            </div>
          </div>

          {/* Bottom Row: Frame 371 - 652x237 */}
          <div className="relative w-full h-[237px] overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={imgRightBottom.url}
              alt={imgRightBottom.alt || "Tour panorama"}
              fill
              className="object-cover"
              sizes="652px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGallerySection;
