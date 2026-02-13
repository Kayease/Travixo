import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/app/lib/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Products listing data
 */
const PRODUCTS = [
  {
    id: "grand-palace-tour",
    title: "Grand Palace & Temple Tour",
    description:
      "Discover Bangkok's most iconic landmarks with a guided tour of the Grand Palace, Wat Pho, and Wat Arun.",
    image: "/images/products/cards/gallery-1.png",
    price: "$45",
    originalPrice: "$60",
    rating: 4.8,
    reviews: 312,
    location: "Bangkok, Thailand",
    duration: "4 hours",
  },
  {
    id: "eiffel-tower",
    title: "Eiffel Tower Experience",
    description:
      "Ascend the iconic Eiffel Tower for panoramic views of Paris, with skip-the-line access and a guided history tour.",
    image: "/images/products/cards/product-1.png",
    price: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    location: "Paris, France",
    duration: "4 hours",
  },
  {
    id: "louvre-museum",
    title: "Louvre Museum Tour",
    description:
      "Explore the world's largest art museum with a curated tour of masterpieces including the Mona Lisa and Venus de Milo.",
    image: "/images/products/cards/product-2.png",
    price: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    location: "Paris, France",
    duration: "4 hours",
  },
  {
    id: "centre-pompidou",
    title: "Centre Pompidou Visit",
    description:
      "Discover modern and contemporary art at this architectural marvel, featuring works by Picasso, Kandinsky, and more.",
    image: "/images/products/cards/product-3.png",
    price: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    location: "Paris, France",
    duration: "4 hours",
  },
  {
    id: "venice-gondola",
    title: "Venice Gondola & Walking Tour",
    description:
      "Glide through Venice's iconic canals, visit historic piazzas, and savor authentic Italian cuisine at local trattorias.",
    image: "/images/travixo-tours/cards/tour-2.png",
    price: "$85",
    originalPrice: "$110",
    rating: 4.7,
    reviews: 245,
    location: "Venice, Italy",
    duration: "3 hours",
  },
  {
    id: "rome-colosseum",
    title: "Rome Colosseum Experience",
    description:
      "Step back in time with a guided tour of the ancient Colosseum, Roman Forum, and Palatine Hill ruins.",
    image: "/images/travixo-tours/cards/tour-3.png",
    price: "$75",
    originalPrice: "$95",
    rating: 4.8,
    reviews: 189,
    location: "Rome, Italy",
    duration: "5 hours",
  },
];

// Metadata for SEO
export const metadata = {
  title: "Products & Experiences | Travixo - Travel & Tour",
  description:
    "Explore our curated collection of tours, activities, and experiences around the world.",
  alternates: {
    canonical: `${siteUrl}/products`,
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFCF5]">
        {/* Hero Section */}
        <section
          className="relative w-full py-16 lg:py-[98px] bg-[#FFF7E5]"
        >
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="text-center">
              <h1 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-6">
                Products & Experiences
              </h1>
              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown max-w-[780px] mx-auto">
                Explore our curated collection of tours, activities, and
                experiences crafted to create unforgettable memories.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="w-full py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-brand-orange/10 hover:shadow-lg transition-all duration-300">
                    {/* Image */}
                    <div className="relative w-full h-[240px] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index === 0}
                      />
                      {/* Price Badge */}
                      <div className="absolute bottom-0 right-0 bg-white shadow-sm flex items-center justify-center gap-2 px-4 py-2 rounded-tl-2xl">
                        <span className="font-body font-medium text-lg text-[#FF6E00]">
                          {product.price}
                        </span>
                        <span className="font-body font-medium text-sm text-black/50 line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              width="14"
                              height="14"
                              viewBox="0 0 17 16"
                              fill={
                                star <= Math.round(product.rating)
                                  ? "#FF6E00"
                                  : "none"
                              }
                              stroke="#FF6E00"
                              strokeWidth="1.5"
                            >
                              <path d="M8.5 1L10.5 5.5L15.5 6L11.5 10L12.5 15L8.5 12.5L4.5 15L5.5 10L1.5 6L6.5 5.5L8.5 1Z" />
                            </svg>
                          ))}
                        </div>
                        <span className="font-body text-sm text-brand-brown">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      <h3 className="font-display italic font-semibold text-lg text-brand-brown mb-2 group-hover:text-brand-orange transition-colors">
                        {product.title}
                      </h3>
                      <p className="font-body font-normal text-sm text-brand-brown/70 mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="font-body text-xs text-brand-brown/60">
                          {product.location}
                        </span>
                        <span className="font-body text-xs text-brand-brown/60">
                          {product.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
