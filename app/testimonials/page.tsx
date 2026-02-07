/**
 * Testimonials Page
 *
 * Displays customer testimonials and reviews in a clean, organized layout.
 * Features hero section, testimonial cards grid, and CTA section.
 *
 * Route: /testimonials
 *
 * Design System:
 * - Primary Background: #FFFCF5 (brand-cream)
 * - Secondary Background: #FFF7E5
 * - Text Color: #3D3834 (brand-brown)
 * - Accent Color: #FF6E00 (brand-orange)
 * - Typography: Playfair Display (headings), Poppins (body)
 */

import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Metadata for SEO
export const metadata = {
  title: "Client Testimonials | Travixo - Travel & Tour",
  description:
    "Read what our clients say about their unforgettable experiences with Travixo. Real stories from real travelers.",
};

/**
 * Sample testimonials data
 * In production, this would come from a CMS or database
 */
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    image: "/images/room/cards/testimonial-1.png",
    testimonial:
      "Our trip to Thailand was absolutely magical! The attention to detail and personalized service from Travixo made it an unforgettable experience. Every moment was perfectly planned.",
    tour: "Bangkok Temple Tour",
    date: "January 2026",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    image: "/images/room/cards/testimonial-2.png",
    testimonial:
      "I've traveled with many companies, but Travixo stands out for their professionalism and genuine care for their clients. The safari experience exceeded all expectations!",
    tour: "African Safari Adventure",
    date: "December 2025",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    image: "/images/room/cards/testimonial-3.png",
    testimonial:
      "Travixo turned our honeymoon into a dream come true. From the stunning locations to the impeccable service, everything was perfect. Highly recommended!",
    tour: "Maldives Luxury Retreat",
    date: "November 2025",
  },
  {
    id: 4,
    name: "James Anderson",
    location: "London, UK",
    rating: 5,
    image: "/images/room/cards/testimonial-4.png",
    testimonial:
      "The cultural immersion and authentic experiences provided by Travixo were beyond compare. Our guide was knowledgeable and passionate about sharing local traditions.",
    tour: "Japan Cultural Journey",
    date: "October 2025",
  },
  {
    id: 5,
    name: "Sophia Williams",
    location: "Sydney, Australia",
    rating: 5,
    image: "/images/room/cards/testimonial-5.png",
    testimonial:
      "As a solo traveler, I felt safe and well-cared for throughout my entire journey. Travixo's team was always available and went above and beyond to ensure my comfort.",
    tour: "European Adventure",
    date: "September 2025",
  },
  {
    id: 6,
    name: "David Park",
    location: "Seoul, South Korea",
    rating: 5,
    image: "/images/room/cards/testimonial-1.png",
    testimonial:
      "The value for money was exceptional. Beautiful accommodations, amazing food, and incredible sights - all without breaking the bank. Thank you, Travixo!",
    tour: "Bali Paradise Tour",
    date: "August 2025",
  },
];

/**
 * StarRating Component
 * Displays star rating visualization
 */
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-brand-orange" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

/**
 * TestimonialCard Component
 * Individual testimonial card with image, rating, and review
 */
interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  image: string;
  testimonial: string;
  tour: string;
  date: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  image,
  testimonial,
  tour,
  date,
}) => {
  return (
    <div className="bg-white border border-brand-brown/20 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
      {/* Header - Avatar & Info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-display italic font-semibold text-xl leading-[27px] text-brand-brown">
            {name}
          </h3>
          <p className="font-body text-sm leading-[25px] text-brand-brown/70">
            {location}
          </p>
          <div className="mt-2">
            <StarRating rating={rating} />
          </div>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="font-body text-base leading-[28px] text-brand-brown mb-4">
        "{testimonial}"
      </p>

      {/* Tour & Date Info */}
      <div className="pt-4 border-t border-brand-brown/10">
        <p className="font-body text-sm font-semibold text-brand-orange">
          {tour}
        </p>
        <p className="font-body text-xs text-brand-brown/60 mt-1">{date}</p>
      </div>
    </div>
  );
};

/**
 * TestimonialsPage Component
 * Main testimonials page layout
 */
export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFCF5]">
        {/* Hero Section */}
        <section className="relative w-full bg-[#FFF7E5] py-12 md:py-16 lg:py-20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 text-center">
            <h1 className="font-display italic font-semibold text-[32px] md:text-[42px] lg:text-[48px] leading-[1.2] text-brand-brown mb-4">
              What Our Clients Say
            </h1>
            <p className="font-body font-medium text-base md:text-lg leading-[30px] text-brand-brown max-w-[800px] mx-auto">
              Real stories from real travelers. Discover why thousands of
              adventurers trust Travixo for their dream journeys around the
              world.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative w-full py-12 md:py-16">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Happy Travelers */}
              <div className="text-center">
                <h3 className="font-display italic font-semibold text-[36px] md:text-[42px] leading-[1.2] text-brand-orange mb-2">
                  10,000+
                </h3>
                <p className="font-body font-medium text-lg text-brand-brown">
                  Happy Travelers
                </p>
              </div>

              {/* 5-Star Reviews */}
              <div className="text-center">
                <h3 className="font-display italic font-semibold text-[36px] md:text-[42px] leading-[1.2] text-brand-orange mb-2">
                  4.9/5
                </h3>
                <p className="font-body font-medium text-lg text-brand-brown">
                  Average Rating
                </p>
              </div>

              {/* Countries Visited */}
              <div className="text-center">
                <h3 className="font-display italic font-semibold text-[36px] md:text-[42px] leading-[1.2] text-brand-orange mb-2">
                  50+
                </h3>
                <p className="font-body font-medium text-lg text-brand-brown">
                  Destinations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="relative w-full pb-12 md:pb-16 lg:pb-20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {TESTIMONIALS_DATA.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full bg-brand-orange py-16 md:py-20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 text-center">
            <h2 className="font-display italic font-semibold text-[28px] md:text-[36px] leading-[1.2] text-white mb-4">
              Ready to Create Your Own Story?
            </h2>
            <p className="font-body font-medium text-base md:text-lg leading-[30px] text-white/90 mb-8 max-w-[600px] mx-auto">
              Join thousands of satisfied travelers and embark on your next
              adventure with Travixo.
            </p>
            <a
              href="/products"
              className="inline-block bg-white text-brand-orange px-8 py-4 rounded-xl font-body font-semibold text-base hover:bg-brand-cream transition-colors duration-300"
            >
              Browse Tours
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
