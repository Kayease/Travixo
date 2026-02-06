"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

/**
 * Sample news articles data
 * In production, this would come from a CMS or API
 */
const FEATURED_ARTICLE = {
  id: 1,
  title: "Top 10 Hidden Gems in Southeast Asia You Must Visit in 2026",
  excerpt:
    "Discover the most breathtaking and undiscovered destinations across Southeast Asia that offer authentic cultural experiences and stunning natural beauty.",
  image: "/images/blogs/frame-421.png",
  category: "Destinations",
  author: "Emily Watson",
  date: "February 4, 2026",
  readTime: "8 min read",
  slug: "/news/southeast-asia-hidden-gems",
};

const NEWS_ARTICLES = [
  {
    id: 2,
    title: "Sustainable Travel: How to Minimize Your Environmental Impact",
    excerpt:
      "Learn practical tips and strategies to make your travels more eco-friendly and sustainable.",
    image: "/images/blogs/frame-422.png",
    category: "Travel Tips",
    author: "Michael Chen",
    date: "February 3, 2026",
    readTime: "6 min read",
    slug: "/news/sustainable-travel-tips",
  },
  {
    id: 3,
    title: "Best Time to Visit Thailand: A Month-by-Month Guide",
    excerpt:
      "Planning a trip to Thailand? Discover the best months to visit based on weather, festivals, and tourist seasons.",
    image: "/images/blogs/frame-423.png",
    category: "Guides",
    author: "Sarah Johnson",
    date: "February 2, 2026",
    readTime: "5 min read",
    slug: "/news/thailand-travel-guide",
  },
  {
    id: 4,
    title: "Travel Photography Tips: Capturing Memories Like a Pro",
    excerpt:
      "Elevate your travel photography with these expert tips and techniques for stunning vacation photos.",
    image: "/images/blogs/frame-424.png",
    category: "Photography",
    author: "David Park",
    date: "February 1, 2026",
    readTime: "7 min read",
    slug: "/news/travel-photography-tips",
  },
  {
    id: 5,
    title: "Cultural Etiquette: Respecting Local Customs Around the World",
    excerpt:
      "Understanding and respecting local customs is essential for meaningful travel experiences.",
    image: "/images/blogs/frame-425.png",
    category: "Culture",
    author: "Emma Rodriguez",
    date: "January 31, 2026",
    readTime: "6 min read",
    slug: "/news/cultural-etiquette-guide",
  },
  {
    id: 6,
    title: "Budget Travel: Exploring the World Without Breaking the Bank",
    excerpt:
      "Discover how to travel on a budget with our comprehensive guide to affordable adventures.",
    image: "/images/blogs/frame-426.png",
    category: "Budget Travel",
    author: "James Anderson",
    date: "January 30, 2026",
    readTime: "8 min read",
    slug: "/news/budget-travel-guide",
  },
];

const CATEGORIES = [
  "All",
  "Destinations",
  "Travel Tips",
  "Guides",
  "Photography",
  "Culture",
  "Budget Travel",
];

/**
 * FeaturedArticleCard Component
 * Large hero card for featured article
 */
const FeaturedArticleCard: React.FC<typeof FEATURED_ARTICLE> = ({
  title,
  excerpt,
  image,
  category,
  author,
  date,
  readTime,
  slug,
}) => {
  return (
    <Link href={slug} className="group cursor-pointer">
      <div className="relative bg-white border border-brand-brown/20 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[300px] lg:h-[450px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute top-4 left-4">
              <span className="bg-brand-orange text-white px-4 py-2 rounded-full font-body font-semibold text-sm">
                {category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h2 className="font-display italic font-semibold text-[24px] md:text-[32px] leading-[1.2] text-brand-brown mb-4 group-hover:text-brand-orange transition-colors">
              {title}
            </h2>
            <p className="font-body text-base leading-[28px] text-brand-brown/80 mb-6">
              {excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-brand-brown/60">
              <span className="font-body font-medium">{author}</span>
              <span>•</span>
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

/**
 * NewsCard Component
 * Standard news article card for grid layout
 */
interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  excerpt,
  image,
  category,
  author,
  date,
  readTime,
  slug,
}) => {
  return (
    <Link href={slug} className="group cursor-pointer">
      <div className="bg-white border border-brand-brown/20 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-[220px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-brand-orange text-white px-3 py-1 rounded-full font-body font-semibold text-xs">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-display italic font-semibold text-xl leading-[27px] text-brand-brown mb-3 group-hover:text-brand-orange transition-colors">
            {title}
          </h3>
          <p className="font-body text-sm leading-[25px] text-brand-brown/70 mb-4 flex-1">
            {excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-brand-brown/60 pt-4 border-t border-brand-brown/10">
            <span className="font-body font-medium">{author}</span>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

/**
 * NewsContent Component
 * Main latest news page layout (Client Component)
 */
export default function NewsContent() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  // Filter articles based on selected category
  const filteredArticles =
    selectedCategory === "All"
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter(
          (article) => article.category === selectedCategory,
        );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFCF5]">
        {/* Hero Section */}
        <section className="relative w-full bg-[#FFF7E5] py-12 md:py-16 lg:py-20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 text-center">
            <h1 className="font-display italic font-semibold text-[32px] md:text-[42px] lg:text-[48px] leading-[1.2] text-brand-brown mb-4">
              Latest Travel News & Insights
            </h1>
            <p className="font-body font-medium text-base md:text-lg leading-[30px] text-brand-brown max-w-[800px] mx-auto">
              Stay informed with the latest travel trends, destination guides,
              tips, and stories from around the globe.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="relative w-full py-12 md:py-16">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="mb-8">
              <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] text-brand-brown">
                Featured Story
              </h2>
            </div>
            <FeaturedArticleCard {...FEATURED_ARTICLE} />
          </div>
        </section>

        {/* Categories Filter */}
        <section className="relative w-full py-8 bg-white border-y border-brand-brown/10">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="flex flex-wrap gap-3 justify-center">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-6 py-2 rounded-full font-body font-medium text-sm transition-all duration-300 cursor-pointer
                    ${
                      selectedCategory === category
                        ? "bg-brand-orange text-white"
                        : "bg-[#FFFCF5] text-brand-brown border border-brand-brown/20 hover:border-brand-orange"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Grid */}
        <section className="relative w-full py-12 md:py-16 lg:py-20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="mb-8">
              <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] text-brand-brown">
                Latest Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((article) => (
                <NewsCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative w-full bg-brand-orange py-16 md:py-20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 text-center">
            <h2 className="font-display italic font-semibold text-[28px] md:text-[36px] leading-[1.2] text-white mb-4">
              Never Miss an Update
            </h2>
            <p className="font-body font-medium text-base md:text-lg leading-[30px] text-white/90 mb-8 max-w-[600px] mx-auto">
              Subscribe to our newsletter and get the latest travel news, tips,
              and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-[500px] mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-6 py-4 rounded-xl font-body text-base text-brand-brown border-2 border-white/20 focus:outline-none focus:border-white"
              />
              <button className="w-full sm:w-auto bg-white text-brand-orange px-8 py-4 rounded-xl font-body font-semibold text-base hover:bg-brand-cream transition-colors duration-300 whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

