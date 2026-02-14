"use client";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogDetailHero } from "@/components/blogs/BlogDetailHero";
import { BlogDetailContent } from "@/components/blogs/BlogDetailContent";

/**
 * BlogDetailPage Component
 *
 * Individual blog/article detail page.
 * Route: /blog-detail
 */
const BlogDetailPage: React.FC = () => {
    // Sample data - in production this would be fetched based on slug
    const blogData = {
        title: "Discover the World, One Journey at a Time",
        date: "13 May, 2024",
        featuredImage: "/images/blogs/cards/article-1.png",
        content: [
            "Travel is more than visiting new places—it's about creating memories, experiencing cultures, and seeing the world from a fresh perspective. Whether you're dreaming of peaceful beaches, vibrant cities, or breathtaking mountain escapes, every journey has a story waiting to be told.",
            "At Travixo, we believe travel should feel exciting, effortless, and deeply personal. We focus on creating travel experiences that match your pace, interests, and style. From cultural tours and nature escapes to luxury getaways and budget-friendly trips, our goal is to turn your travel dreams into reality—without stress or compromise.",
            "The world is full of places that leave a lasting impression. Wander through historic streets, taste local flavors, meet new people, and discover hidden gems beyond the typical tourist routes. Each destination offers something unique, and every trip is an opportunity to learn, grow, and reconnect—with the world and yourself.",
        ],
    };

    return (
        <main className="relative min-h-screen bg-brand-cream">
            {/* Site Navigation */}
            <Navbar />

            {/* Hero Section */}
            <BlogDetailHero title={blogData.title} date={blogData.date} />

            {/* Main Content Area */}
            <BlogDetailContent />

            {/* Site Footer */}
            <Footer />
        </main>
    );
};

export default BlogDetailPage;
