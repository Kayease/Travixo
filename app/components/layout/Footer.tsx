"use client";
import React from "react";
import Link from "next/link";

/**
 * Facebook Icon
 */
const FacebookIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
      fill="white"
    />
  </svg>
);

/**
 * Instagram Icon
 */
const InstagramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      stroke="white"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
    <circle cx="18" cy="6" r="1.5" fill="white" />
  </svg>
);

/**
 * LinkedIn Icon
 */
const LinkedInIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
      fill="white"
    />
    <rect x="2" y="9" width="4" height="12" fill="white" />
    <circle cx="4" cy="4" r="2" fill="white" />
  </svg>
);

/**
 * Twitter/X Icon
 */
const TwitterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.27 1.5H18.18L11.83 8.75L19.33 18.5H13.5L8.93 12.56L3.69 18.5H0.78L7.58 10.75L0.33 1.5H6.33L10.47 6.94L15.27 1.5ZM14.23 16.77H15.87L5.53 3.17H3.77L14.23 16.77Z"
      fill="white"
    />
  </svg>
);

/**
 * Phone Icon
 */
const PhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 16.92V19.92C22 20.48 21.56 20.95 21 21C20.76 21.02 20.51 21.03 20.25 21.03C10.84 21.03 3.25 13.44 3.25 4C3.25 3.74 3.26 3.49 3.28 3.25C3.33 2.69 3.8 2.25 4.36 2.25H7.36C7.86 2.25 8.29 2.61 8.36 3.1C8.42 3.55 8.53 4 8.69 4.42C8.84 4.83 8.74 5.28 8.43 5.59L6.89 7.13C8.17 9.52 10.23 11.58 12.62 12.86L14.16 11.32C14.47 11.01 14.92 10.91 15.33 11.06C15.75 11.22 16.2 11.33 16.65 11.39C17.14 11.46 17.5 11.89 17.5 12.39V16.92C17.5 17.48 17.02 17.95 16.46 17.93L22 16.92Z"
      fill="white"
    />
  </svg>
);

/**
 * Mail Icon
 */
const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
      stroke="white"
      strokeWidth="2"
    />
    <path
      d="M2 6L12 13L22 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Arrow Icon for Newsletter
 */
const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="#4B3621"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="rotate(-30 12 12)"
    />
  </svg>
);

/**
 * Logo Icon
 */
const LogoIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="8"
      width="36"
      height="28"
      rx="4"
      stroke="white"
      strokeWidth="2.5"
    />
    <path
      d="M8 8V4C8 2.89543 8.89543 2 10 2H30C31.1046 2 32 2.89543 32 4V8"
      stroke="white"
      strokeWidth="2.5"
    />
    <circle cx="20" cy="22" r="6" stroke="white" strokeWidth="2" />
    <path
      d="M17 22L19 24L23 20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Footer links data
 */
const COMPANY_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Destinations", href: "/destinations" },
  { label: "Our Portfolio", href: "/portfolio" },
  { label: "Our History", href: "/history" },
  { label: "Compare", href: "/compare" },
];

const EXPLORE_LINKS = [
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Latest News", href: "/news" },
  { label: "Contact Now", href: "/contact" },
];

/**
 * Footer Component
 */
export const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = () => {
    if (!email) {
      console.log("Please enter your email address.");
      return;
    }
    console.log(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="relative w-full" style={{ backgroundColor: "#FF8930" }}>
      {/* Top Bar - Logo and Social Icons */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 lg:py-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon />
            <div className="flex flex-col">
              <span className="font-display italic font-semibold text-xl md:text-2xl text-white">
                TRAVIXO
              </span>
              <span className="text-xs text-white/80">TOUR & TRAVEL</span>
            </div>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <FacebookIcon />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <InstagramIcon />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <LinkedInIcon />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="w-full h-px bg-white" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Column */}
          <div>
            <h3 className="font-display italic font-semibold text-2xl md:text-[28px] leading-[28px] text-white mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body font-medium text-base md:text-lg leading-[28px] text-white hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-display italic font-semibold text-2xl md:text-[28px] leading-[28px] text-white mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body font-medium text-base md:text-lg leading-[28px] text-white hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display italic font-semibold text-2xl md:text-[28px] leading-[28px] text-white mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <p className="font-body font-medium text-base md:text-lg leading-[28px] text-white">
                6391 Elgin St.Celina,Delware
                <br />
                New York,USA
              </p>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <span className="font-body font-medium text-base md:text-lg leading-[28px] text-white">
                  +91 1234567890
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <MailIcon />
                <span className="font-body font-medium text-base md:text-lg leading-[28px] text-white">
                  Travixo@demo.com
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <div
              className="p-4 md:p-5 rounded-xl"
              style={{ backgroundColor: "#FFFCF5" }}
            >
              <h4 className="font-display italic font-medium text-base md:text-lg leading-[28px] text-brand-brown mb-4">
                Signup for our latest news & articles
              </h4>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full h-[45px] px-4 pr-14 bg-white border border-brand-orange rounded-xl font-body text-base text-brand-brown placeholder:text-brand-brown/60 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                />
                <button
                  onClick={handleSubscribe}
                  className="absolute right-0 top-0 w-[50px] h-[45px] flex items-center justify-center border border-brand-orange rounded-xl hover:bg-brand-orange/10 transition-colors"
                  style={{ backgroundColor: "#FFFCF5" }}
                >
                  <ArrowIcon />
                </button>
                {/* Orange underline accent */}
                <div className="absolute bottom-0 left-0 w-[50px] h-[2px] bg-brand-orange" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="w-full h-px bg-white/20" />
      </div>

      {/* Bottom Bar - Copyright and Legal */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 lg:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-body font-normal text-sm text-white/60 text-center md:text-left">
            © Copyright 2025 Blushora Cosmetics. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="font-body font-normal text-sm text-white/60 hover:text-white/80 transition-colors"
            >
              Terms & Condition
            </Link>
            <Link
              href="/privacy"
              className="font-body font-normal text-sm text-white/60 hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;