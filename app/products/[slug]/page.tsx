"use client";
import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { TourDetailHeroSection } from "../../components/tours/TourDetailHeroSection";
import { TourGallerySection } from "../../components/tours/TourGallerySection";
import { TourOverviewSection } from "../../components/tours/TourOverviewSection";
import { TourBookingCard } from "../../components/tours/TourBookingCard";
import { TourHighlightsSection } from "../../components/tours/TourHighlightsSection";
import { TourIncludesSection } from "../../components/tours/TourIncludesSection";
import { TourCancellationSection } from "../../components/tours/TourCancellationSection";
import { TourFAQSection } from "../../components/tours/TourFAQSection";
import { TourReviewsSection } from "../../components/tours/TourReviewsSection";
import { RelatedToursSection } from "../../components/tours/RelatedToursSection";

/**
 * Sample tour data for demonstration
 * In production, this would come from CMS, API, or database
 */
const SAMPLE_TOUR = {
  // Hero Section Data
  title: "Grand Palace, Wat Pho, and Wat Arun Guided Tour",
  rating: 4.8,
  reviewCount: 2,
  city: "Bangkok",
  country: "Thailand",

  // Gallery Images
  images: [
    { url: "/images/products/frame-369.png", alt: "Eiffel Tower View" },
    { url: "/images/products/frame-370.png", alt: "Louvre Museum" },
    { url: "/images/products/frame-371.png", alt: "Centre Pompidou" },
    { url: "/images/products/frame-372.png", alt: "Parisian Street" },
  ],

  // Overview Data
  duration: "4 hours",
  groupSize: "2-18",
  tourType: "Daily Tour",
  languages: ["English", "French", "German", "Italian"],
  description: `Immerse yourself in Bangkok's rich history and spiritual heritage on this guided tour to some of the city's most famous temples. From the majestic Grand Palace to the stunning Wat Pho and Wat Arun, this guided walking tour takes you on a journey through centuries of Thai art, culture, and religion.

Start your day by visiting the iconic Grand Palace, a symbol of Thailand's royal family and an architectural masterpiece. Wander through its ornate buildings, including the Temple of the Emerald Buddha (Wat Phra Kaew), home to one of the most sacred Buddha images in Thailand. Admire the intricate details of the murals, gold leaf decorations, and the stunning spires that make this palace a must-see destination.

Next, explore Wat Pho, the Temple of the Reclining Buddha, famous for its massive 46-meter-long golden Buddha statue. This temple is also known as the birthplace of traditional Thai massage, and you'll learn about its significance in Thai culture and medicine.`,

  // Price
  price: 45,

  // Highlights
  highlights: [
    "Discover the rich history and spiritual heritage of Bangkok on a guided tour",
    "Visit the iconic Grand Palace, a symbol of Thailand's royal family",
    "See the massive 46-meter-long Reclining Buddha at Wat Pho",
    "Cross the Chao Phraya River to Wat Arun, one of Bangkok's most iconic landmarks",
  ],

  // Includes/Excludes
  includes: [
    "English-speaking guide",
    "Guided tour",
    "Boat ride",
    "Bottled water",
  ],
  excludes: ["Entrance fees"],

  // Cancellation Policy
  cancellationPolicy:
    "You can cancel up to 24 hours in advance of the experience for a full refund.",

  // FAQs
  faqs: [
    {
      question: "What to bring",
      answer:
        "Comfortable walking shoes, sunscreen, hat, and a camera. Dress modestly as you'll be visiting temples - shoulders and knees should be covered.",
    },
    {
      question: "Not allowed",
      answer:
        "Shorts, sleeveless shirts, and revealing clothing are not permitted inside the temples. Shoes must be removed before entering temple buildings.",
    },
    {
      question: "Know before you go",
      answer:
        "The tour involves a significant amount of walking. The temples can get crowded, especially during peak hours. We recommend booking an early morning tour for a more peaceful experience.",
    },
  ],

  // Reviews
  reviewSummary: {
    overall: 4.2,
    totalReviews: 312,
    categories: [
      { name: "Guide", rating: 4.2 },
      { name: "Service", rating: 4.2 },
      { name: "Transportation", rating: 4.2 },
      { name: "Organization", rating: 4.2 },
    ],
  },
  reviews: [
    {
      id: 1,
      author: "Aarav Vink",
      date: "October 31, 2025",
      rating: 4,
      comment:
        "I don't know how to improve the tour because it was great professional run funny great day lover som and Grand Canyon, brilliant enough time to do everything not rushed great tour",
      images: [
        "/images/products/frame-403.png",
        "/images/products/frame-404.png",
      ],
    },
  ],

  // Related Tours
  relatedTours: [
    {
      id: 1,
      title: "Eiffel Tower",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      imageUrl: "/images/products/Frame_51.png",
      price: 100,
      originalPrice: 120,
      discount: "27% Off",
      rating: 4.9,
      reviewCount: 311,
      duration: "4 hrs",
      groupSize: "2-18",
      location: "Paris, France",
      slug: "/products/eiffel-tower",
    },
    {
      id: 2,
      title: "Louvre Museum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      imageUrl: "/images/products/Frame 485.png",
      price: 100,
      originalPrice: 120,
      discount: "27% Off",
      rating: 4.9,
      reviewCount: 311,
      duration: "4 hrs",
      groupSize: "2-18",
      location: "Paris, France",
      slug: "/products/louvre-museum",
    },
    {
      id: 3,
      title: "Centre Pompidou",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      imageUrl: "/images/products/Frame 486.png",
      price: 100,
      originalPrice: 120,
      discount: "27% Off",
      rating: 4.9,
      reviewCount: 311,
      duration: "4 hrs",
      groupSize: "2-18",
      location: "Paris, France",
      slug: "/products/centre-pompidou",
    },
  ],
};

/**
 * TourDetailPage Component
 *
 * Individual tour/product detail page showing comprehensive tour information.
 * Uses dynamic routing with [slug] parameter.
 *
 * Page Structure:
 * 1. Navbar - Site navigation
 * 2. TourDetailHeroSection - Tour title, rating, and location
 * 3. Main Content Area with:
 *    - Left Column: Gallery, Overview, Highlights, Includes, Cancellation, FAQ, Reviews
 *    - Right Column: Booking Card (sticky)
 * 4. Related Tours Section
 * 5. Footer - Site footer
 *
 * @returns {JSX.Element} The complete tour detail page
 */
const TourDetailPage: React.FC = () => {
  // In production, fetch tour data based on slug parameter
  const tour = SAMPLE_TOUR;

  return (
    <main className="relative min-h-screen bg-brand-cream">
      {/* Site Navigation */}
      <Navbar />

      {/* Hero Section - Tour Header */}
      <TourDetailHeroSection
        title={tour.title}
        rating={tour.rating}
        reviewCount={tour.reviewCount}
        city={tour.city}
        country={tour.country}
      />

      {/* Main Content Section */}
      <section
        className="w-full py-8 md:py-12"
        style={{ backgroundColor: "#FFFCF5" }}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
          {/* Gallery Section - Full Width */}
          <div className="mb-12">
            <TourGallerySection images={tour.images} />
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Main Content */}
            <div className="flex-1 min-w-0 space-y-10">
              {/* Overview Section */}
              <TourOverviewSection
                duration={tour.duration}
                groupSize={tour.groupSize}
                tourType={tour.tourType}
                languages={tour.languages}
                description={tour.description}
              />

              {/* Highlights Section */}
              <TourHighlightsSection highlights={tour.highlights} />

              {/* Includes/Excludes Section */}
              <TourIncludesSection
                includes={tour.includes}
                excludes={tour.excludes}
              />

              {/* Cancellation Policy Section */}
              <TourCancellationSection policy={tour.cancellationPolicy} />

              {/* FAQ Section */}
              <TourFAQSection faqs={tour.faqs} />

              {/* Reviews Section */}
              <TourReviewsSection
                summary={tour.reviewSummary}
                reviews={tour.reviews}
              />
            </div>

            {/* Right Column - Booking Card (Sticky) */}
            <div className="lg:w-[467px] shrink-0 h-full relative">
              <div className="lg:sticky lg:top-28 z-10 self-start">
                <TourBookingCard
                  price={tour.price}
                  currency="$"
                  defaultDate="Jan 17, 2026"
                />
              </div>
            </div>
          </div>

          {/* Related Tours Section */}
          <div className="mt-12 md:mt-16">
            <RelatedToursSection tours={tour.relatedTours} />
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <Footer />
    </main>
  );
};

export default TourDetailPage;
