"use client";
/** Site-wide navigation: logo, destination dropdowns, search, and auth links. */
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";

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
  { name: "Paris", image: "/images/destinations/cards/Component_68.png" },
  { name: "Bali", image: "/images/destinations/cards/Component_69.png" },
  { name: "London", image: "/images/destinations/cards/Component_70.png" },
];

const destinationCities: Record<string, DestinationItem[]> = {
  France: [
    { name: "Paris", image: "/images/destinations/cards/Component_68.png" },
    { name: "Nice", image: "/images/destinations/cards/Component_69.png" },
    { name: "Lyon", image: "/images/destinations/cards/Component_70.png" },
  ],
  Thailand: [
    { name: "Bangkok", image: "/images/destinations/cards/Component_71.png" },
    { name: "Phuket", image: "/images/destinations/cards/Component_72.png" },
    {
      name: "Chiang Mai",
      image: "/images/destinations/cards/Component_73.png",
    },
  ],
  "United Kingdom": [
    { name: "London", image: "/images/destinations/cards/Component_68.png" },
    { name: "Edinburgh", image: "/images/destinations/cards/Component_69.png" },
    {
      name: "Manchester",
      image: "/images/destinations/cards/Component_70.png",
    },
  ],
};

/* ============================================
   DestinationDropdown Component
 ============================================ */

interface DestinationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const DestinationDropdown: React.FC<DestinationDropdownProps> = ({
  isOpen,
  onClose: _onClose,
}) => {
  const [hoveredCountry, setHoveredCountry] = useState<string>("");

  // Reset to default view when closed/opened
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isOpen) setHoveredCountry("");
  }, [isOpen]);

  // Early return removed for transition

  const currentCities =
    !hoveredCountry || hoveredCountry === "View all"
      ? []
      : destinationCities[hoveredCountry] || featuredDestinations;

  return (
    <div
      className={`w-[90vw] md:w-[870px] lg:max-xl:w-[780px] bg-[#FFFCF5] rounded-xl shadow-[0px_0px_4px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out transform origin-top h-auto md:h-[314px] overflow-hidden ${isOpen
        ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
        : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
        }`}
    >
      <div className="flex flex-col md:flex-row h-full p-4 overflow-y-auto md:overflow-visible">
        {/* Left Column - Menu Items */}
        <div className="flex flex-col w-full md:w-[190px] lg:max-xl:w-[200px] pt-2 mb-4 md:mb-0">
          {/* Top Destination Header */}
          <div className="bg-[#FF6E00] px-4 py-1.5 rounded-sm mb-1">
            <span className="font-display text-lg italic text-white whitespace-nowrap">
              Top Destination
            </span>
          </div>

          {/* Destination Links */}
          <div className="flex flex-col">
            {topDestinations.map((destination) => {
              const _slug =
                destination === "View all"
                  ? "all"
                  : destination.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={destination}
                  href={destination === "View all" ? "/destinations" : "/paris"}
                  className="group relative block text-left px-4 lg:max-xl:px-3 py-1.5 font-display text-lg italic text-[#4B3621] hover:text-white overflow-hidden rounded-sm transition-colors duration-300 whitespace-nowrap"
                  onMouseEnter={() => setHoveredCountry(destination)}
                >
                  <span
                    className={`absolute inset-0 bg-[#FF6E00] transition-all duration-500 ease-out z-0 ${hoveredCountry === destination ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}`}
                  ></span>
                  <span className="relative z-10">{destination}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Vertical Divider - Hidden on mobile */}
        <div className="hidden md:block w-px h-[278px] bg-[rgba(0,0,0,0.2)] mx-6 lg:max-xl:mx-4 self-center" />

        {/* Middle Column - Featured Destinations with Images */}
        <div className="flex flex-col gap-3 md:gap-5 pt-2 w-full md:w-[240px] lg:max-xl:w-[210px] mb-4 md:mb-0">
          {currentCities.map((destination) => {
            return (
              <Link
                key={destination.name}
                href="/paris"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                {/* Circular Image */}
                <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden shrink-0">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                    sizes="50px"
                  />
                </div>
                {/* Destination Name */}
                <span className="font-display text-lg italic text-[#4B3621]">
                  {destination.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right Column - Promotional Banner - Hidden on very small screens if needed, or scaled */}
        <div className="ml-auto relative w-full md:w-[298px] lg:max-xl:w-[260px] h-[150px] md:h-full rounded-lg overflow-hidden shrink-0">
          <Image
            src="/images/destinations/cards/Travel.png"
            alt="Travel Holiday Promotion"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 298px"
          />
          {/* Overlay Content */}

          <p className="text-[10px] md:text-xs text-[#4B3621] text-center mt-2 hidden md:block">
            Discover handpicked destinations and exclusive travel deals curated
            by our expert team of adventurers.
          </p>
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
  { label: "Product Page", href: "/products/grand-palace-tour" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Checkout", href: "/checkout" },
  { label: "Wishlist", href: "/wishlist" },
];

const pagesColumn2: PageLink[] = [
  { label: "Team", href: "/team" },
  { label: "Blogs", href: "/blog" },
  { label: "Blog 2", href: "/blog2" },
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

const PagesDropdown: React.FC<PagesDropdownProps> = ({ isOpen, onClose: _onClose }) => {
  const renderColumn = (pages: PageLink[]) => (
    <div className="flex flex-col gap-0.5">
      {pages.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          className="group relative flex items-center w-[148px] h-[39px] text-left px-3 font-display text-[15px] md:text-base italic text-[#4B3621] hover:text-white overflow-hidden rounded-sm transition-colors duration-300 whitespace-nowrap"
        >
          <span className="absolute inset-0 bg-[#FF6E00] w-0 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-out z-0" />
          <span className="relative z-10">{page.label}</span>
        </Link>
      ))}
    </div>
  );

  return (
    <div
      className={`w-[90vw] md:w-[830px] h-auto md:h-[314px] bg-[#FFFCF5] rounded-xl shadow-[0px_0px_4px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out transform origin-top flex flex-col justify-center ${isOpen
        ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
        : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
        }`}
    >
      <div className="grid grid-cols-3 w-full items-center justify-items-center">
        {renderColumn(pagesColumn1)}
        {renderColumn(pagesColumn2)}
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
  href?: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  hasDropdown = false,
  isActive = false,
  onClick,
  href,
  className,
}) => {
  const content = (
    <>
      {/* Background slide effect */}
      <span
        className={`absolute inset-0 bg-[#FF6E00] transition-all duration-300 ease-out ${isActive
          ? "w-full opacity-100"
          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
          }`}
      />

      {/* Text content - positioned relatively to sit on top of background */}
      <span className="relative z-10">{label}</span>
      {hasDropdown && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`relative z-10 transition-transform ${isActive ? "rotate-180" : ""
            }`}
        >
          <path
            d="M6.41 8.58L12 14.17L17.59 8.58L19 10L12 17L5 10L6.41 8.58Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );

  const containerClasses = `group relative flex items-center gap-2 px-1 md:px-5 lg:max-xl:px-3 py-1.5 font-display italic text-[15px] md:text-[18px] transition-all overflow-hidden cursor-pointer shrink-0 ${isActive
    ? "text-white rounded-sm"
    : "text-[#4B3621] hover:text-white rounded-sm"
    } ${className || ""}`;

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={containerClasses}>
      {content}
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
 * WishlistIcon Component
 * SVG icon for wishlist/favorites
 */
const WishlistIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer hover:opacity-70 transition-opacity"
  >
    <path
      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
      stroke="#4B3621"
      strokeWidth="2"
      strokeLinejoin="round"
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [isMobilePagesExpanded, setIsMobilePagesExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [mounted, setMounted] = useState(false);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close everything when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
    setIsDestinationOpen(false);
    setIsPagesOpen(false);
    setIsSearchOpen(false);
    setIsMobilePagesExpanded(false);
    setExpandedCountry(null);
  }, [pathname]);

  // Reset mobile menu on resize to desktop to prevent scroll lock being stuck
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
      document.documentElement.style.removeProperty("overflow");
    }

    return () => {
      document.body.style.removeProperty("overflow");
      document.documentElement.style.removeProperty("overflow");
    };
  }, [isMobileMenuOpen]);

  // Close dropdowns and search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDestinationOpen(false);
        setIsPagesOpen(false);
      }

      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsDestinationOpen(false);
        setIsPagesOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle destination dropdown toggle — passed to NavItem child
  const handleDestinationClick = useCallback(() => {
    setIsDestinationOpen((prev) => !prev);
    setIsPagesOpen(false);
  }, []);

  // Handle pages dropdown toggle — passed to NavItem child
  const handlePagesClick = useCallback(() => {
    setIsPagesOpen((prev) => !prev);
    setIsDestinationOpen(false);
  }, []);

  // Handle Search toggle — passed to icon child
  const handleSearchToggle = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
  }, []);

  // Handle Search submit
  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Always redirect to paris page with search query
      router.push(`/paris?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  }, [searchQuery, router]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-1000 bg-[#FFFCF5] transition-all duration-300 shadow-sm">
        {/* Main Navbar Container */}
        <nav className="w-full flex items-center justify-between px-4 md:px-10 lg:px-20 h-[60px] transition-all duration-300">
          {/* Logo Section */}
          <Link
            href="/"
            className="relative w-[120px] md:w-[150px] h-[40px] md:h-[50px] cursor-pointer"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Travixo Logo"
              fill
              className="object-contain"
              sizes="150px"
              priority
            />
          </Link>

          {/* Center Navigation Links - Hidden on Mobile */}
          <div
            className="hidden lg:flex items-center gap-[35px] shrink-0"
            ref={dropdownRef}
          >
            {/* Destination with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setIsDestinationOpen(true);
                  setIsPagesOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setIsDestinationOpen(false);
                }
              }}
            >
              <NavItem
                label="Destination"
                hasDropdown
                isActive={isDestinationOpen}
                onClick={handleDestinationClick}
                className="cursor-pointer"
              />
              <div
                className={`absolute top-full left-0 lg:max-xl:-left-32 pt-2 z-50 ${isDestinationOpen ? "" : "pointer-events-none"
                  }`}
              >
                <DestinationDropdown
                  isOpen={isDestinationOpen}
                  onClose={() => setIsDestinationOpen(false)}
                />
              </div>
            </div>

            {/* Pages with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setIsPagesOpen(true);
                  setIsDestinationOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setIsPagesOpen(false);
                }
              }}
            >
              <NavItem
                label="Pages"
                hasDropdown
                isActive={isPagesOpen}
                onClick={handlePagesClick}
                className="cursor-pointer"
              />
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 ${isPagesOpen ? "" : "pointer-events-none"
                  }`}
              >
                <PagesDropdown
                  isOpen={isPagesOpen}
                  onClose={() => setIsPagesOpen(false)}
                />
              </div>
            </div>

            <NavItem label="Stay" href="/stay" />
          </div>

          {/* Right Icons Section */}
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
            <div
              className="hidden lg:flex cursor-pointer scale-90 md:scale-100 p-1 hover:bg-[#FF6E00]/10 rounded-full transition-colors"
              onClick={handleSearchToggle}
              aria-label="Open search"
              role="button"
              tabIndex={0}
            >
              <SearchIcon />
            </div>
            <Link href="/cart" aria-label="View cart" className="relative cursor-pointer scale-90 md:scale-100">
              <CartIcon />
              {mounted && cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FF6E00] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center border border-white shadow-sm">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Icons shown only on Large Screens */}
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
              <Link href="/wishlist" aria-label="View wishlist" className="relative cursor-pointer scale-90 md:scale-100">
                <WishlistIcon />
                {mounted && wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FF6E00] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center border border-white shadow-sm">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
              <Link
                href="/profile"
                aria-label="View profile"
                className="cursor-pointer scale-90 md:scale-100"
              >
                <ProfileIcon />
              </Link>
            </div>

            {/* Hamburger Menu Toggle Button - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#4B3621] hover:bg-[#FF6E00]/10 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={isMobileMenuOpen ? "M18 6L6 18M6 6L18 18" : "M4 6H20M4 12H20M4 18H20"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 z-990 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
          onTouchMove={(e) => isMobileMenuOpen && e.preventDefault()}
        />

        {/* Mobile Menu Content Drawer */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[280px] bg-[#FFFCF5] z-1000 lg:hidden transition-transform duration-300 shadow-2xl overflow-y-auto ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col p-6 h-full">
            {/* Logo in Menu */}
            <div className="flex justify-between items-center mb-8 border-b border-black/10 pb-4">
              <Image
                src="/images/logo/logo.png"
                alt="Travixo Logo"
                width={100}
                height={33}
                className="object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 hover:bg-black/5 rounded-full"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6L18 18" />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-black/40 uppercase px-3 mb-2 mt-2">Destinations</h3>

              <div className="flex flex-col gap-1">
                {topDestinations.map((country) => {
                  const hasSubMenu = country !== "View all" && destinationCities[country];
                  const isExpanded = expandedCountry === country;

                  return (
                    <div key={country} className="flex flex-col">
                      {hasSubMenu ? (
                        <button
                          onClick={() => setExpandedCountry(isExpanded ? null : country)}
                          className={`flex items-center justify-between w-full p-3 font-display italic text-lg text-[#4B3621] hover:bg-[#FF6E00]/10 rounded-lg transition-all ${isExpanded ? "bg-[#FF6E00]/5" : ""}`}
                        >
                          <span>{country}</span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          href={country === "View all" ? "/destinations" : "/paris"}
                          className="p-3 font-display italic text-lg text-[#4B3621] hover:bg-[#FF6E00] hover:text-white rounded-lg transition-all"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {country}
                        </Link>
                      )}

                      {/* Submenu for Cities */}
                      {hasSubMenu && (
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[300px] opacity-100 mb-2" : "max-h-0 opacity-0"}`}
                        >
                          <div className="flex flex-col gap-1 pl-6 pt-1">
                            {destinationCities[country].map((city) => (
                              <Link
                                key={city.name}
                                href="/paris"
                                className="flex items-center gap-3 p-2 font-display italic text-base text-[#4B3621]/80 hover:text-brand-orange transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-black/5">
                                  <Image
                                    src={city.image}
                                    alt={city.name}
                                    fill
                                    className="object-cover"
                                    sizes="32px"
                                  />
                                </div>
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="border-b border-black/5 my-2" />
              <h3 className="text-xs font-bold text-black/40 uppercase px-3 mb-2">Activities</h3>
              <Link
                href="/stay"
                className="p-3 font-display italic text-lg text-[#4B3621] hover:bg-[#FF6E00] hover:text-white rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stay
              </Link>

              <div className="border-b border-black/5 my-2" />
              <h3 className="text-xs font-bold text-black/40 uppercase px-3 mb-2">More</h3>
              <div className="flex flex-col">
                <button
                  onClick={() => setIsMobilePagesExpanded(!isMobilePagesExpanded)}
                  className={`flex items-center justify-between w-full p-3 font-display italic text-lg text-[#4B3621] hover:bg-[#FF6E00]/10 rounded-lg transition-all ${isMobilePagesExpanded ? "bg-[#FF6E00]/5" : ""}`}
                >
                  <span>Pages</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${isMobilePagesExpanded ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobilePagesExpanded ? "max-h-[800px] opacity-100 mb-2" : "max-h-0 opacity-0"}`}
                >
                  <div className="flex flex-col gap-1 pl-6 pt-1">
                    {[...pagesColumn1, ...pagesColumn2, ...pagesColumn3].map((page) => (
                      <Link
                        key={page.label}
                        href={page.href}
                        className="flex items-center gap-3 p-3 font-display italic text-base text-[#4B3621]/80 hover:text-brand-orange transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        {/* Global Search Overlay Bar */}
        <div
          className={`absolute top-[60px] left-0 right-0 z-40 transition-all duration-300 ease-in-out border-b border-[#FF6E00]/20 ${isSearchOpen
            ? "translate-y-0 opacity-100 visible h-[80px]"
            : "-translate-y-full opacity-0 invisible h-0"
            }`}
          ref={searchBarRef}
        >
          <div className="w-full h-full bg-[#FFFCF5] flex items-center justify-center px-4 md:px-10 lg:px-20">
            <form
              onSubmit={handleSearchSubmit}
              className="w-full max-w-[800px] relative"
            >
              <input
                ref={searchInputRef}
                type="text"
                aria-label="Search destinations, tours, and activities"
                placeholder="What are you looking for? (e.g. Paris, Bangkok, Safari...)"
                className="w-full h-[50px] bg-white border border-[#4B3621]/20 rounded-xl pl-12 pr-4 font-display italic text-lg outline-none focus:border-[#4B3621]/40 shadow-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {!searchQuery && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </div>
              )}
              {/* Close button inside input area for accessibility */}

              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF6E00] text-white px-4 py-1.5 rounded-lg font-display italic text-sm hover:bg-[#E66300] transition-colors"
              >
                Search
              </button>
            </form>

            {/* Close Search Button */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="ml-4 p-2 text-[#4B3621]/60 hover:text-red-500 transition-colors"
              aria-label="Close search"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* Spacer to push content down below fixed header */}
      <div
        className={`transition-all duration-300 ease-in-out ${isSearchOpen ? "h-[140px]" : "h-[60px]"}`}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;