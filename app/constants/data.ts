/**
 * Constants Data File
 * 
 * This file contains all static data used across the application.
 * Organized by section/component for easy maintenance.
 */

/* ========== Hero Section Images ========== */
/**
 * Hero section floating gallery images
 * Each image has unique rotation and animation delay for floating effect
 */
export interface HeroImage {
    id: number;
    url: string;
    alt: string;
    title: string;
    location: string;
}

export const HERO_IMAGES: HeroImage[] = [
    {
        id: 1,
        url: "/images/travixo-tours/cards/tour-1.png",
        alt: "Airplane wing view above clouds",
        title: "Sky Journey",
        location: "Above the Clouds"
    },
    {
        id: 2,
        url: "/images/travixo-tours/cards/tour-2.png",
        alt: "Desert rock formations",
        title: "Desert Wonders",
        location: "Arizona, USA"
    },
    {
        id: 3,
        url: "/images/travixo-tours/cards/tour-3.png",
        alt: "Colorful coastal village",
        title: "Cinque Terre",
        location: "Italy"
    },
    {
        id: 4,
        url: "/images/travixo-tours/cards/tour-4.png",
        alt: "Hot air balloons over ocean",
        title: "Balloon Festival",
        location: "Cappadocia"
    },
    {
        id: 5,
        url: "/images/travixo-tours/cards/tour-5.png",
        alt: "Mountain suspension bridge",
        title: "Mountain Trek",
        location: "Nepal"
    },
    {
        id: 6,
        url: "/images/travixo-tours/cards/tour-6.png",
        alt: "Coastal church view",
        title: "Greek Islands",
        location: "Santorini"
    },
    {
        id: 7,
        url: "/images/travixo-tours/cards/tour-7.png",
        alt: "Tropical beach paradise",
        title: "Paradise Beach",
        location: "Maldives"
    }
];

/* ========== Navigation Links ========== */
export interface NavLink {
    label: string;
    href: string;
    hasDropdown?: boolean;
}

export const NAV_LINKS: NavLink[] = [
    { label: "Destination", href: "/destinations", hasDropdown: true },
    { label: "Pages", href: "#", hasDropdown: true },
    { label: "Stay", href: "/stay" }
];
