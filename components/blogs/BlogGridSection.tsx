"use client";
import React, { useState } from "react";
import { BlogCard, BlogCardProps } from "./BlogCard";
import { Button } from "../ui/Button";

/**
 * Sample blog posts data
 * Replace with actual data from CMS or API
 */
const SAMPLE_BLOG_POSTS: BlogCardProps[] = [
  {
    id: 1,
    title:
      "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    date: "13 May, 2026",
    imageUrl: "/images/blogs/cards/article-1.png",
    slug: "/blog/safari-explorer",
  },
  {
    id: 2,
    title:
      "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    date: "13 May, 2026",
    imageUrl: "/images/blogs/cards/article-2.png",
    slug: "/blog/kayak-adventure",
  },
  {
    id: 3,
    title:
      "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    date: "13 May, 2026",
    imageUrl: "/images/blogs/cards/article-3.png",
    slug: "/blog/road-trip",
  },
  {
    id: 4,
    title:
      "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    date: "13 May, 2026",
    imageUrl: "/images/blogs/cards/article-4.png",
    slug: "/blog/mountain-hiking",
  },
  {
    id: 5,
    title:
      "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    date: "13 May, 2026",
    imageUrl: "/images/blogs/cards/article-5.png",
    slug: "/blog/hot-air-balloon",
  },
  {
    id: 6,
    title:
      "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    date: "13 May, 2026",
    imageUrl: "/images/blogs/cards/article-6.png",
    slug: "/blog/group-hiking",
  },
  {
    id: 7,
    title:
      "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    date: "13 May, 2026",
    imageUrl: "/images/blogs/cards/article-1.png",
    slug: "/blog/safari-explorer-2",
  },
  {
    id: 8,
    title:
      "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    date: "13 May, 2026",
    imageUrl: "/images/blogs/cards/article-2.png",
    slug: "/blog/kayak-adventure-2",
  },
  {
    id: 9,
    title:
      "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    date: "13 May, 2026",
    imageUrl: "/images/blogs/cards/article-3.png",
    slug: "/blog/road-trip-2",
  },
];

/**
 * BlogGridSection Props Interface
 */
interface BlogGridSectionProps {
  /** Array of blog posts to display */
  posts?: BlogCardProps[];
  /** Initial number of posts to show */
  initialCount?: number;
  /** Number of posts to load on "Load More" click */
  loadMoreCount?: number;
  /** Whether to show the "Load More" button */
  showLoadMore?: boolean;
}

/**
 * BlogGridSection Component
 *
 * Displays a grid of blog post cards with optional "Load More" functionality.
 *
 * Design Specifications (from Figma):
 * - Container: Background #FFFCF5
 * - Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
 * - Card spacing: Consistent gap between cards
 * - Load More Button: 200x45px, #FF6E00, 12px border-radius
 *
 * @param {BlogGridSectionProps} props - Component configuration
 * @returns {JSX.Element} The rendered blog grid section
 */
export const BlogGridSection: React.FC<BlogGridSectionProps> = ({
  posts = SAMPLE_BLOG_POSTS,
  initialCount = 6,
  loadMoreCount = 3,
  showLoadMore = true,
}) => {
  // State for managing visible posts count
  const [visibleCount, setVisibleCount] = useState(initialCount);

  // Get currently visible posts
  const visiblePosts = posts.slice(0, visibleCount);

  // Check if there are more posts to load
  const hasMorePosts = visibleCount < posts.length;

  // Handler for loading more posts
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadMoreCount, posts.length));
  };

  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-[52px]"
      style={{ backgroundColor: "#FFFCF5" }}
      aria-labelledby="blog-grid-title"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Screen reader only title */}
        <h2 id="blog-grid-title" className="sr-only">
          Blog Posts
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[33px]">
          {visiblePosts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              imageUrl={post.imageUrl}
              imageAlt={post.imageAlt}
              slug={post.slug}
            />
          ))}
        </div>

        {/* Load More Button */}
        {showLoadMore && hasMorePosts && (
          <div className="flex justify-center mt-10 md:mt-14 lg:mt-[52px]">
            <Button
              variant="primary"
              size="lg"
              onClick={handleLoadMore}
              className="w-[200px] h-[45px]"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGridSection;
