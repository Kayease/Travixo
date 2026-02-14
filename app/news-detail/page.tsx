import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteUrl } from "@/app/lib/siteConfig";

// Metadata for SEO
export const metadata = {
  title: "Top 10 Hidden Gems in Southeast Asia | Travixo - Travel & Tour",
  description:
    "Discover the most breathtaking and undiscovered destinations across Southeast Asia that offer authentic cultural experiences and stunning natural beauty.",
  alternates: {
    canonical: `${siteUrl}/news-detail`,
  },
};

export default function NewsDetailPage() {
  const article = {
    title: "Top 10 Hidden Gems in Southeast Asia You Must Visit in 2026",
    excerpt:
      "Discover the most breathtaking and undiscovered destinations across Southeast Asia that offer authentic cultural experiences and stunning natural beauty.",
    image: "/images/blogs/cards/article-1.png",
    category: "Destinations",
    author: "Emily Watson",
    date: "February 4, 2026",
    readTime: "8 min read",
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFCF5]">
        {/* Hero Section */}
        <section className="relative w-full bg-[#FFF7E5] pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="max-w-[900px] mx-auto px-5 md:px-10">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-brand-orange text-white px-4 py-2 rounded-full font-body font-semibold text-sm">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display italic font-semibold text-[28px] md:text-[42px] lg:text-[52px] leading-[1.2] text-brand-brown mb-6">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-brand-brown/70 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                  <span className="font-display font-semibold text-brand-orange">
                    {article.author.charAt(0)}
                  </span>
                </div>
                <span className="font-body font-medium">{article.author}</span>
              </div>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative w-full py-8">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="relative w-full py-8 md:py-12">
          <div className="max-w-[800px] mx-auto px-5 md:px-10">
            <article className="prose prose-lg max-w-none">
              <p className="font-body text-base md:text-lg leading-[28px] md:leading-[32px] text-brand-brown/80 mb-6">
                Southeast Asia remains one of the world&apos;s most captivating
                regions for travelers, offering a perfect blend of ancient
                cultures, stunning landscapes, and warm hospitality. While
                popular destinations like Bangkok, Bali, and Singapore continue
                to attract millions of visitors, there are countless hidden gems
                waiting to be discovered.
              </p>

              <h2 className="font-display italic font-semibold text-[28px] md:text-[32px] text-brand-brown mt-12 mb-6">
                1. Luang Prabang, Laos
              </h2>
              <p className="font-body text-base md:text-lg leading-[28px] md:leading-[32px] text-brand-brown/80 mb-6">
                Nestled in the mountains of northern Laos, Luang Prabang is a
                UNESCO World Heritage site that perfectly preserves traditional
                Lao architecture and Buddhist culture. Wake up early to witness
                the daily alms-giving ceremony, where hundreds of monks walk
                through the streets collecting offerings.
              </p>

              <h2 className="font-display italic font-semibold text-[28px] md:text-[32px] text-brand-brown mt-12 mb-6">
                2. Hpa-An, Myanmar
              </h2>
              <p className="font-body text-base md:text-lg leading-[28px] md:leading-[32px] text-brand-brown/80 mb-6">
                This charming town in southeastern Myanmar is surrounded by
                dramatic limestone karst formations and ancient caves filled
                with Buddha statues. Rent a bicycle and explore the countryside,
                visiting sacred caves and enjoying breathtaking sunset views
                from Mount Zwegabin.
              </p>

              <h2 className="font-display italic font-semibold text-[28px] md:text-[32px] text-brand-brown mt-12 mb-6">
                3. Koh Rong Sanloem, Cambodia
              </h2>
              <p className="font-body text-base md:text-lg leading-[28px] md:leading-[32px] text-brand-brown/80 mb-6">
                While Cambodia&apos;s Angkor Wat draws most visitors, the
                pristine beaches of Koh Rong Sanloem offer a peaceful escape.
                This island paradise features crystal-clear waters,
                bioluminescent plankton, and some of the best snorkeling in
                Southeast Asia.
              </p>

              <h2 className="font-display italic font-semibold text-[28px] md:text-[32px] text-brand-brown mt-12 mb-6">
                4. Pai, Thailand
              </h2>
              <p className="font-body text-base md:text-lg leading-[28px] md:leading-[32px] text-brand-brown/80 mb-6">
                Tucked away in the mountains of northern Thailand, Pai is a
                bohemian paradise known for its laid-back atmosphere, hot
                springs, and stunning waterfalls. The journey from Chiang Mai
                involves 762 curves through mountain roads, but the destination
                is worth every twist and turn.
              </p>

              <h2 className="font-display italic font-semibold text-[28px] md:text-[32px] text-brand-brown mt-12 mb-6">
                5. Flores Island, Indonesia
              </h2>
              <p className="font-body text-base md:text-lg leading-[28px] md:leading-[32px] text-brand-brown/80 mb-6">
                Beyond Bali lies Flores, an island of incredible natural
                diversity. Trek to see the tri-colored crater lakes of Kelimutu,
                dive with manta rays in Komodo National Park, and explore
                traditional villages where ancient customs are still practiced.
              </p>

              <h2 className="font-display italic font-semibold text-[28px] md:text-[32px] text-brand-brown mt-12 mb-6">
                Planning Your Adventure
              </h2>
              <p className="font-body text-base md:text-lg leading-[28px] md:leading-[32px] text-brand-brown/80 mb-6">
                The best time to visit most of these destinations is during the
                dry season (November to April). However, each location has its
                own microclimate, so research specific weather patterns before
                booking your trip. Remember to respect local customs, support
                local businesses, and travel sustainably to help preserve these
                beautiful destinations for future generations.
              </p>
            </article>
          </div>
        </section>

        {/* Back to News */}
        <section className="relative w-full py-12">
          <div className="max-w-[800px] mx-auto px-5 md:px-10 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange/80 font-body font-medium text-lg transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
