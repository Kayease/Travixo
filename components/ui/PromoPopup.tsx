"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

/**
 * PromoPopup Component
 * A promotional modal that appears on first load in a session.
 * 
 * Design Specifications from Figma:
 * - Container: 555x293px, white (60% opacity), backdrop-filter blur(5px), 12px radius
 * - Title: Playfair Display Italic, 42px, #FF6E00
 * - Subtitle: Poppins Italic, 20px, #000000
 * - Button: 200x50px, white bg, #FF6E00 border, Poppins Italic 24px
 */
export const PromoPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { addToCart } = useCart();

    useEffect(() => {
        // Show popup ONLY on initial mount (full reload/refresh) if on the home page
        if (pathname === "/") {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [pathname]); // Added pathname dependency for correctness

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleBookNow = (e: React.MouseEvent) => {
        e.preventDefault();

        // Add Paris Tour to cart
        addToCart({
            id: `paris-promo-${Date.now()}`,
            type: "experience",
            title: "Paris Tour Promotion",
            image: "/images/paris/paris_promo_bg.png",
            location: "Paris, France",
            dates: new Date().toISOString().split("T")[0],
            amenities: ["Limited Time Offer", "50% Off"],
            price: 750, // Example discounted price
            actionLabel: "Customize",
        });

        handleClose();
        router.push("/checkout");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-10000 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Main Popup Container */}
            <div
                className="relative w-full max-w-[555px] h-auto min-h-[293px] rounded-[12px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/paris/paris_promo_bg.png"
                        alt="Paris Promotion"
                        fill
                        sizes="(max-width: 600px) 100vw, 555px"
                        className="object-cover"
                        priority
                    />
                    {/* Semi-transparent Overlay with Glassmorphism */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[5px]" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center h-full min-h-[293px]">
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 text-brand-brown/60 hover:text-brand-orange transition-colors rounded-full hover:bg-black/5"
                        aria-label="Close promotion"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    {/* Title */}
                    <h2 className="font-display italic text-[32px] md:text-[42px] leading-tight md:leading-[56px] text-brand-orange mb-2">
                        50% Off Paris Tour
                    </h2>

                    {/* Subtitle */}
                    <p className="font-body italic text-[16px] md:text-[20px] leading-tight md:leading-[30px] text-black mb-8 px-4">
                        Limited Time Offer Discover Paris for half the Price
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={handleBookNow}
                        className="relative flex items-center justify-center w-[200px] h-[50px] bg-white border border-brand-orange rounded-[12px] shadow-[0px_0px_4px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden group/btn cursor-pointer"
                    >
                        {/* Bottom-to-top fill animation */}
                        <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover/btn:h-full transition-all duration-300 ease-out" />

                        <span className="relative z-10 font-body italic font-normal text-[20px] md:text-[24px] leading-[36px] text-brand-orange group-hover/btn:text-white transition-colors duration-300">
                            Book Now
                        </span>
                    </button>

                    {/* View Detail Link */}
                    <Link
                        href="/paris"
                        className="mt-4 font-body italic text-[16px] md:text-[18px] leading-[27px] text-black hover:text-brand-orange transition-colors"
                        onClick={handleClose}
                    >
                        View detail
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PromoPopup;
