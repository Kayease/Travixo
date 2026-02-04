"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

/* ============================================
   Type Definitions
============================================ */

interface DestinationItem {
  name: string;
  image: string;
}

/* ============================================
   Dropdown Data
============================================ */

const topDestinations = ["France", "Thailand", "United Kingdom", "View all"];

const featuredDestinations: DestinationItem[] = [
  {
    name: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=100&h=100&fit=crop",
  },
  {
    name: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=100&h=100&fit=crop",
  },
  {
    name: "UK",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=100&h=100&fit=crop",
  },
];

/* ============================================
   DestinationDropdown Component
============================================ */

interface DestinationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const DestinationDropdown: React.FC<DestinationDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 mt-2 w-[830px] bg-[#FFFCF5] rounded-xl shadow-[0px_0px_4px_rgba(0,0,0,0.1)] z-50"
      style={{ height: "314px" }}
    >
      <div className="flex h-full p-4">
        {/* Left Column - Menu Items */}
        <div className="flex flex-col w-[148px] pt-2">
          {/* Top Destination Header */}
          <div className="bg-[#FF6E00] px-4 py-1.5 rounded-sm mb-1">
            <span className="font-display text-lg italic text-white">
              Top Destination
            </span>
          </div>

          {/* Destination Links */}
          {topDestinations.map((destination, index) => (
            <button
              key={index}
              className="text-left px-4 py-1.5 font-display text-lg italic text-[#4B3621] hover:text-[#FF6E00] transition-colors"
            >
              {destination}
            </button>
          ))}
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-[278px] bg-[rgba(0,0,0,0.2)] mx-6 self-center" />

        {/* Middle Column - Featured Destinations with Images */}
        <div className="flex flex-col gap-5 pt-2">
          {featuredDestinations.map((destination, index) => (
            <button
              key={index}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              {/* Circular Image */}
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Destination Name */}
              <span className="font-display text-lg italic text-[#4B3621]">
                {destination.name}
              </span>
            </button>
          ))}
        </div>

        {/* Right Column - Promotional Banner */}
        <div className="ml-auto relative w-[298px] h-[298px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&h=400&fit=crop"
            alt="Travel Holiday Promotion"
            fill
            className="object-cover"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7E5]/90 to-[#FFF7E5]/70 flex flex-col items-center justify-center p-4">
            <h3 className="text-3xl font-bold text-[#FF6E00] mb-1">TRAVEL</h3>
            <h3 className="text-3xl font-bold text-[#4B3621] mb-4">HOLIDAY</h3>
            <div className="bg-[#FF3B30] text-white px-3 py-1 rounded-lg mb-2">
              <span className="text-sm">Get Up To</span>
              <span className="text-2xl font-bold ml-2">50%</span>
              <span className="text-sm"> OFF</span>
            </div>
            <p className="text-xs text-[#4B3621] text-center mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================
   Pages Dropdown Data
============================================ */

interface PageLink {
  label: string;
  href: string;
}

const pagesColumn1: PageLink[] = [
  { label: "About", href: "/about" },
  { label: "product Page", href: "/product" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Checkout", href: "/checkout" },
  { label: "Wishlist", href: "/wishlist" },
];

const pagesColumn2: PageLink[] = [
  { label: "Team", href: "/team" },
  { label: "Blogs", href: "/blog" },
  { label: "Blog 2", href: "/blog-2" },
  { label: "FAQ", href: "/faq" },
  { label: "Cart Page", href: "/cart" },
];

const pagesColumn3: PageLink[] = [
  { label: "History", href: "/history" },
  { label: "Compare", href: "/compare" },
  { label: "Stay", href: "/stay" },
  { label: "Room", href: "/room" },
  { label: "Room Detail", href: "/room-detail" },
];

/* ============================================
   PagesDropdown Component
============================================ */

interface PagesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const PagesDropdown: React.FC<PagesDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const renderColumn = (pages: PageLink[]) => (
    <div className="flex flex-col gap-2">
      {pages.map((page, index) => (
        <a
          key={index}
          href={page.href}
          className="font-display text-lg italic text-[#4B3621] hover:text-[#FF6E00] transition-colors py-1"
          onClick={onClose}
        >
          {page.label}
        </a>
      ))}
    </div>
  );

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[830px] bg-[#FFFCF5] rounded-xl shadow-[0px_0px_4px_rgba(0,0,0,0.1)] z-50"
      style={{ height: "314px" }}
    >
      <div className="flex h-full px-10 py-10 justify-between">
        {/* Column 1 */}
        {renderColumn(pagesColumn1)}

        {/* Column 2 */}
        {renderColumn(pagesColumn2)}

        {/* Column 3 */}
        {renderColumn(pagesColumn3)}
      </div>
    </div>
  );
};

/**
 * NavItem Component
 * Renders a navigation link with optional dropdown indicator
 */
interface NavItemProps {
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  hasDropdown = false,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 font-serif italic text-lg transition-all ${
        isActive
          ? "bg-[#FF6E00] text-white rounded-lg"
          : "text-brand-brown hover:opacity-70"
      }`}
    >
      <span>{label}</span>
      {hasDropdown && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform ${isActive ? "rotate-180" : ""}`}
        >
          <path
            d="M6.41 8.58L12 14.17L17.59 8.58L19 10L12 17L5 10L6.41 8.58Z"
            fill={isActive ? "#FFFFFF" : "#4B3621"}
          />
        </svg>
      )}
    </button>
  );
};

/**
 * SearchIcon Component
 * SVG icon for search functionality
 */
const SearchIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer hover:opacity-70 transition-opacity"
  >
    <path
      d="M12.5833 4.66667C16.9556 4.66667 20.5 8.21108 20.5 12.5833C20.5 14.4617 19.8133 16.1883 18.6833 17.5183L19 17.8333H19.9167L25.75 23.6667L24 25.4167L18.1667 19.5833V18.6617L17.8517 18.3467C16.4717 19.5209 14.7217 20.1661 12.9117 20.1667C8.53942 20.1667 5 16.6222 5 12.25C5 7.87775 8.53942 4.33333 12.9117 4.33333C12.9117 4.33333 12.5833 4.66667 12.5833 4.66667ZM12.5833 7C9.33333 7 6.66667 9.66667 6.66667 12.9167C6.66667 16.1667 9.33333 18.8333 12.5833 18.8333C15.8333 18.8333 18.5 16.1667 18.5 12.9167C18.5 9.66667 15.8333 7 12.5833 7Z"
      fill="#4B3621"
    />
  </svg>
);

/**
 * CartIcon Component
 * SVG icon for cart/luggage functionality
 */
const CartIcon = () => (
  <svg
    width="25"
    height="20"
    viewBox="0 0 25 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer hover:opacity-70 transition-opacity"
  >
    <path
      d="M8.75 12.5H10V3.75H8.75C8.06 3.75 7.5 4.3098 7.5 5V11.25C7.5 11.9402 8.06 12.5 8.75 12.5ZM22.5 11.25V5C22.5 4.3098 21.94 3.75 21.25 3.75H20V12.5H21.25C21.94 12.5 22.5 11.9402 22.5 11.25ZM24.38 15H5V0.625C5 0.2797 4.72 0 4.38 0H0.62C0.28 0 0 0.2797 0 0.625V1.875C0 2.2203 0.28 2.5 0.62 2.5H2.5V16.875C2.5 17.2203 2.78 17.5 3.12 17.5H6.36C6.29 17.6965 6.25 17.9047 6.25 18.125C6.25 19.1605 7.09 20 8.12 20C9.16 20 10 19.1605 10 18.125C10 17.9047 9.96 17.6965 9.89 17.5H17.61C17.54 17.6965 17.5 17.9047 17.5 18.125C17.5 19.1605 18.34 20 19.38 20C20.41 20 21.25 19.1605 21.25 18.125C21.25 17.9047 21.21 17.6965 21.14 17.5H24.38C24.72 17.5 25 17.2203 25 16.875V15.625C25 15.2797 24.72 15 24.38 15ZM18.75 3.75V1.875C18.75 0.8395 17.91 0 16.88 0H13.12C12.09 0 11.25 0.8395 11.25 1.875V12.5H18.75V3.75ZM16.88 3.75H13.12V1.875H16.88V3.75Z"
      fill="#4B3621"
    />
  </svg>
);

/**
 * ProfileIcon Component
 * SVG icon for user profile
 */
const ProfileIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer hover:opacity-70 transition-opacity"
  >
    <path
      d="M4.66667 21.9987C4.66667 20.761 5.15833 19.574 6.03 18.6989C6.905 17.8237 8.1 17.332 9.33333 17.332H18.6667C19.9 17.332 21.09 17.8237 21.97 18.6989C22.84 19.574 23.3333 20.761 23.3333 21.9987C23.3333 22.6175 23.09 23.211 22.65 23.6486C22.21 24.0862 21.62 24.332 21 24.332H7C6.38 24.332 5.79 24.0862 5.35 23.6486C4.91 23.211 4.66667 22.6175 4.66667 21.9987Z"
      stroke="#4B3621"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M14 12.666C15.933 12.666 17.5 11.099 17.5 9.166C17.5 7.233 15.933 5.666 14 5.666C12.067 5.666 10.5 7.233 10.5 9.166C10.5 11.099 12.067 12.666 14 12.666Z"
      stroke="#4B3621"
      strokeWidth="2"
    />
  </svg>
);

/**
 * Navbar Component
 * Main navigation header matching the Figma design
 * - Cream background (#FFFCF5) with subtle shadow
 * - Logo on left, navigation in center, icons on right
 * - Orange accent line at bottom
 * - Destination dropdown on click
 * - Pages dropdown on click
 */
export const Navbar = () => {
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDestinationOpen(false);
        setIsPagesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle destination dropdown toggle
  const handleDestinationClick = () => {
    setIsDestinationOpen(!isDestinationOpen);
    setIsPagesOpen(false);
  };

  // Handle pages dropdown toggle
  const handlePagesClick = () => {
    setIsPagesOpen(!isPagesOpen);
    setIsDestinationOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Main Navbar Container */}
      <nav
        className="w-full h-[60px] flex items-center justify-between px-20"
        style={{
          background: "#FFFCF5",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Logo Section */}
        {/* Logo Section */}
        <div className="relative w-[150px] h-[50px]">
          <Image
            src="/images/logo/Frame 511.png"
            alt="Travixo Logo"
            fill
            className="object-contain"
            sizes="150px"
            priority
          />
        </div>

        {/* Center Navigation Links */}
        <div className="flex items-center gap-[35px]" ref={dropdownRef}>
          {/* Destination with Dropdown */}
          <div className="relative">
            <NavItem
              label="Destination"
              hasDropdown
              isActive={isDestinationOpen}
              onClick={handleDestinationClick}
            />
            <DestinationDropdown
              isOpen={isDestinationOpen}
              onClose={() => setIsDestinationOpen(false)}
            />
          </div>

          {/* Pages with Dropdown */}
          <div className="relative">
            <NavItem
              label="Pages"
              hasDropdown
              isActive={isPagesOpen}
              onClick={handlePagesClick}
            />
            <PagesDropdown
              isOpen={isPagesOpen}
              onClose={() => setIsPagesOpen(false)}
            />
          </div>

          <NavItem label="Stay" />
        </div>

        {/* Right Icons Section */}
        <div className="flex items-center gap-6">
          <SearchIcon />
          <CartIcon />
          <ProfileIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
