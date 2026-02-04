"use client";
import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { BlogHeroSection } from "../components/blogs/BlogHeroSection";
import { BlogGridSection } from "../components/blogs/BlogGridSection";

/**
 * BlogsPage Component
 * 
 * Main blogs/journal page showcasing travel articles, tips, and inspiration.
 * Features a hero section followed by blog grid content.
 * 
 * Page Structure:
 * 1. Navbar - Site navigation
 * 2. BlogHeroSection - Page header with title and subtitle
 * 3. BlogGridSection - Grid of blog post cards
 * 4. Footer - Site footer
 * 
 * @returns {JSX.Element} The complete blogs page
 */
const BlogsPage: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-brand-cream">
      {/* Site Navigation */}
      <Navbar />

      {/* Hero Section - Page Header */}
      <BlogHeroSection 
        title="Our Journal"
        subtitle="Your Safari Hub: News, Tips, and Inspiration"
      />

      {/* Blog Posts Grid Section */}
      <BlogGridSection 
        initialCount={6}
        loadMoreCount={3}
        showLoadMore={true}
      />

      {/* Site Footer */}
      <Footer />
    </main>
  );
};

export default BlogsPage;
