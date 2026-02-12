import React from "react";
import Image from "next/image";
import Link from "next/link";

// Static imports for images to ensure they load correctly in production
import planeIconImg from "@/public/images/home/about/mynaui_plane.png";
import travelIconImg from "@/public/images/home/about/healthicons_travel-outline.png";
import luggageIconImg from "@/public/images/home/about/material-symbols-light_travel-luggage-and-bags-outline.png";
import checkIconImg from "@/public/images/home/about/mask-group.png";
import gettoknow1Img from "@/public/images/gettoknow/gettoknow-1.png";
import gettoknow2Img from "@/public/images/gettoknow/gettoknow-2.png";

/**
 * Plane Icon for the badge
 */
const PlaneIcon = () => (
  <Image
    src={planeIconImg}
    alt="Plane Icon"
    width={20}
    height={20}
  />
);

/**
 * Travel Guide Icon
 */
const TravelIcon = () => (
  <Image
    src={travelIconImg}
    alt="Travel Guide Icon"
    width={32}
    height={32}
  />
);

/**
 * Luggage/Safety Icon
 */
const LuggageIcon = () => (
  <Image
    src={luggageIconImg}
    alt="Luggage Icon"
    width={32}
    height={32}
  />
);

/**
 * Checkmark Icon
 */
const CheckIcon = () => (
  <Image
    src={checkIconImg}
    alt="Checkmark Icon"
    width={28}
    height={28}
    style={{ width: "auto", height: "auto" }}
  />
);

/**
 * Feature data
 */
const FEATURES = [
  {
    id: "friendly-guide",
    title: "Friendly Guide",
    description: "Our certified guides ensure personalized attention and deep local knowledge on every journey.",
    icon: "travel",
  },
  {
    id: "safety-travel",
    title: "Safety Travel",
    description: "Travel with confidence knowing every detail is managed with your safety as our top priority.",
    icon: "luggage",
  },
];

/**
 * Checklist items
 */
const CHECKLIST = [
  "Expert-led tours with certified local guides in every destination",
  "24/7 customer support throughout your entire travel experience",
  "Flexible cancellation policies for worry-free booking",
];

/**
 * AboutSection Component
 * "Get To Know Us" section with images and company info
 * Background: #FFFCF5 (cream)
 */
export const AboutSection = () => {
  return (
    <section
      className="relative w-full py-16 lg:py-24"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Mobile-only Header - Always at the very top for iPad/iPhone */}
        <div className="lg:hidden mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl mb-6"
            style={{ backgroundColor: "#FF6E00" }}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <PlaneIcon />
            </div>
            <span className="font-display italic font-medium text-[14px] leading-[19px] text-white tracking-wide">
              GET TO KNOW US
            </span>
          </div>
          <h2 className="font-display italic font-semibold text-[32px] md:text-[42px] leading-[42px] md:leading-[52px] text-brand-brown">
            Experience the World with Our Company
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-24 relative">
          {/* Main content continues... */}

          {/* Left Side - Images */}
          <div className="relative lg:w-[450px] xl:w-[611px] shrink-0">
            {/* Main Image Frame 4 */}
            <div className="relative w-full h-[400px] md:h-[600px] lg:w-[450px] lg:h-[600px] xl:w-[611px] xl:h-[754px] overflow-hidden shadow-sm">
              <Image
                src={gettoknow1Img}
                alt="Experience Travel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 611px"
              />
              {/* 50% Off Text */}
              <div
                className="absolute lg:left-[320px] xl:left-[418px] top-[93px] hidden lg:block z-10"
                style={{
                  width: '103px',
                  height: '37px',
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 800,
                  fontSize: '28px',
                  lineHeight: '37px',
                  color: '#FFFFFF',
                  textAlign: 'center'
                }}
              >
                50% Off
              </div>
            </div>

            {/* Overlapping Secondary Image - Frame 27 */}
            <div
              className="absolute -bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 lg:left-[150px] xl:left-[250px] lg:translate-x-0 w-[240px] md:w-[350px] lg:w-[320px] xl:w-[401px] h-[160px] md:h-[220px] lg:h-[200px] xl:h-[242px] z-20 overflow-hidden"
              style={{
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '32px',
              }}
            >
              <Image
                src={gettoknow2Img}
                alt="Beach View"
                fill
                className="object-cover scale-110"
                sizes="(max-width: 768px) 240px, (max-width: 1024px) 350px, (max-width: 1280px) 320px, 401px"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 lg:pt-16">
            {/* Desktop-only Badge - Frame 19 */}
            <div
              className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 rounded-xl mb-8"
              style={{ backgroundColor: "#FF6E00" }}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <PlaneIcon />
              </div>
              <span className="font-display italic font-medium text-[14px] leading-[19px] text-white tracking-wide">
                GET TO KNOW US
              </span>
            </div>

            {/* Desktop-only Title - Experience the World... */}
            <h2 className="hidden lg:block font-display italic font-semibold text-[28px] md:text-[32px] leading-[37px] md:leading-[42px] text-brand-brown max-w-[400px] mb-6">
              Experience the World with Our Company
            </h2>

            {/* Description */}
            <p className="font-body font-medium text-lg leading-[27px] text-brand-brown mb-10 max-w-[607px]">
              With over a decade of experience, we craft unforgettable journeys that blend adventure with comfort. Our team of passionate travel experts hand-picks every destination, ensuring authentic experiences that create lasting memories.
            </p>

            {/* Feature Cards - Frame 28 & 29 */}
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10 border-t border-black/10">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`py-8 md:py-10 px-4 group transition-all duration-500 hover:bg-[#FFF9F0] ${index === 0 ? 'border-r border-b border-black/10' : 'border-b border-black/10'}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Container - Component 29/30 */}
                    <div className="w-[50px] h-[50px] bg-white border-[0.5px] border-[#FF6E00] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#FF6E00]">
                      <div className="transition-all duration-300 group-hover:brightness-0 group-hover:invert">
                        {feature.icon === "travel" ? <TravelIcon /> : <LuggageIcon />}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="font-display italic font-normal text-xl leading-[27px] text-brand-brown group-hover:text-[#FF6E00] transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="font-body font-normal text-base leading-6 text-brand-brown/70 mt-2 max-w-[240px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist items - Frame 33 */}
            <div className="flex flex-col gap-4 mb-12">
              {CHECKLIST.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <CheckIcon />
                  </div>
                  <span className="font-body font-normal text-base leading-6 text-brand-brown/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button - Component 1 */}
            <div className="flex justify-center xl:justify-start">
              <Link href="/destinations" className="inline-block">
                <button className="w-[244px] h-[50px] bg-white border border-[#FF6E00] rounded-xl font-display italic text-lg text-brand-orange overflow-hidden transition-all duration-300 relative group cursor-pointer shadow-sm">
                  <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover:h-full transition-all duration-300 ease-out" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Explore More
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
