"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Toast } from "../ui/Toast";

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
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
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
  { label: "Tour Listings", href: "/products" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tour Activates", href: "/tour-activates" },
  { label: "Tour Types", href: "/tour-types" },
  { label: "How It Work", href: "/how-it-works" },
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
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState({ message: "", type: "success" as "success" | "error" });

  const handleSubscribe = () => {
    if (!email) {
      setToastMessage({ message: "Please enter your email address.", type: "error" });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setToastMessage({ message: "Please enter a valid email address.", type: "error" });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    // Success simulation
    console.log(`Subscribed with: ${email}`);
    setToastMessage({ message: "Thank you for subscribing to our newsletter!", type: "success" });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setEmail("");
  };

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#FF8930" }}
    >
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 z-50 animate-slide-up">
          <Toast
            message={toastMessage.message}
            type={toastMessage.type}
            onClose={() => setShowToast(false)}
          />
        </div>
      )}

      {/* Container to match 1440px design width */}
      <div className="w-full max-w-[1440px] mx-auto relative px-4 md:px-10 lg:px-20 py-12">
        {/* Top Section: Logo and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 md:gap-0">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="/images/footer/payment-badge.png"
              alt="Travixo"
              width={140}
              height={68}
              className="object-contain"
            />
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-[18px]">
            <button
              type="button"
              className="hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
            >
              <FacebookIcon />
            </button>
            <button
              type="button"
              className="hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
            >
              <InstagramIcon />
            </button>
            <button
              type="button"
              className="hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
            >
              <LinkedInIcon />
            </button>
            <button
              type="button"
              className="hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
            >
              <TwitterIcon />
            </button>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="w-full h-px bg-white mb-10" />

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 relative">
          {/* Columns Container */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-10 md:gap-12 lg:gap-[134px]">
            {/* Company Column */}
            <div className="flex flex-col">
              <h3 className="font-display italic font-semibold text-[28px] leading-[28px] text-white mb-6">
                Company
              </h3>
              <ul className="flex flex-col gap-2">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body font-medium text-[18px] leading-[28px] text-white hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore Column */}
            <div className="flex flex-col">
              <h3 className="font-display italic font-semibold text-[28px] leading-[28px] text-white mb-6">
                Explore
              </h3>
              <ul className="flex flex-col gap-2">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body font-medium text-[18px] leading-[28px] text-white hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col">
              <h3 className="font-display italic font-semibold text-[28px] leading-[28px] text-white mb-6">
                Contact
              </h3>
              <div className="flex flex-col gap-4">
                <p className="font-body font-medium text-[18px] leading-[28px] text-white max-w-[255px]">
                  6391 Elgin St.Celina,Delware
                  <br />
                  New York,USA
                </p>
                <div className="flex items-center gap-2">
                  <PhoneIcon />
                  <span className="font-body font-medium text-[18px] leading-[28px] text-white">
                    +91 1234567890
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon />
                  <span className="font-body font-medium text-[18px] leading-[28px] text-white">
                    example@example.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Box (Right aligned) */}
          <div className="lg:absolute lg:right-0 lg:top-0 w-[291px] h-[145px] bg-[#FFFCF5] rounded-[12px] p-[18px] flex flex-col justify-between shadow-lg">
            <h4 className="font-display italic font-medium text-[18px] leading-[28px] text-[#4B3621] text-center w-full">
              Signup for our latest news & articles
            </h4>
            <div className="relative w-[255px] h-[45px] mx-auto">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-full bg-white border border-[#FF6E00] rounded-[12px] pl-[18px] pr-[55px] font-body text-[18px] text-[#4B3621] placeholder:text-[#4B3621]/60 focus:outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="group absolute right-0 top-0 w-[50px] h-[45px] bg-[#FFFCF5] border border-[#FF6E00] rounded-[12px] flex items-center justify-center cursor-pointer overflow-hidden"
              >
                <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#FF6E00] group-hover:h-full transition-all duration-300 ease-out" />
                <div className="relative z-10">
                  <ArrowIcon className="text-[#4B3621] group-hover:text-white transform -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Divider 2 */}
        <div className="w-full h-px bg-white/20 mt-12 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body font-normal text-[14px] leading-[21px] text-white/60">
            © Copyright 2026 Travixo. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/terms"
              className="font-body font-normal text-[14px] leading-[21px] text-white/60 hover:text-white transition-colors"
            >
              Terms & Condition
            </Link>
            <Link
              href="/privacy"
              className="font-body font-normal text-[14px] leading-[21px] text-white/60 hover:text-white transition-colors"
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
