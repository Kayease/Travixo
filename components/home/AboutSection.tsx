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
  <Image src={planeIconImg} alt="Plane Icon" width={20} height={20} />
);

/**
 * Travel Guide Icon
 */
const TravelIcon = () => (
  <Image src={travelIconImg} alt="Travel Guide Icon" width={32} height={32} />
);

/**
 * Luggage/Safety Icon
 */
const LuggageIcon = () => (
  <Image src={luggageIconImg} alt="Luggage Icon" width={32} height={32} />
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
    description:
      "Our certified guides ensure personalized attention and deep local knowledge on every journey.",
    icon: "travel",
  },
  {
    id: "safety-travel",
    title: "Safety Travel",
    description:
      "Travel with confidence knowing every detail is managed with your safety as our top priority.",
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
    <section className="relative w-full py-16 lg:py-24 bg-[#FFFCF5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Mobile-only Header - Always at the very top for iPad/iPhone */}
        <div className="lg:hidden mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl mb-6 bg-[#FF6E00]">
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

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-24 relative">
          {/* Left Side - Images */}
          <div className="relative lg:w-[340px] xl:w-[611px] shrink-0 mb-8 lg:mb-0">
            {/* Main Image */}
            <div className="relative w-full h-[400px] md:h-[600px] lg:w-[340px] lg:h-[480px] xl:w-[611px] xl:h-[754px] overflow-hidden shadow-sm">
              <Image
                src={gettoknow1Img}
                alt="Experience Travel"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 340px, 611px"
              />
            </div>

            {/* Overlapping Secondary Image — bottom-right of main image */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:-bottom-4 md:left-auto md:right-0 md:-translate-x-6 lg:bottom-6 lg:right-[-50px] xl:bottom-12 xl:right-[-60px] w-[240px] md:w-[320px] lg:w-[240px] xl:w-[401px] h-[160px] md:h-[200px] lg:h-[150px] xl:h-[242px] z-20 overflow-hidden "
              style={{
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "32px",
              }}
            >
              <Image
                src={gettoknow2Img}
                alt="Beach View"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 240px, (max-width: 1024px) 320px, (max-width: 1280px) 240px, 401px"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 lg:pt-8 xl:pt-16">
            {/* Desktop-only Badge */}
            <div className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 rounded-xl mb-4 xl:mb-8 bg-[#FF6E00]">
              <div className="w-5 h-5 flex items-center justify-center">
                <PlaneIcon />
              </div>
              <span className="font-display italic font-medium text-[14px] leading-[19px] text-white tracking-wide">
                GET TO KNOW US
              </span>
            </div>

            {/* Desktop-only Title */}
            <h2 className="hidden lg:block font-display italic font-semibold text-[24px] xl:text-[32px] leading-[32px] xl:leading-[42px] text-brand-brown max-w-[400px] mb-4 xl:mb-6">
              Experience the World with Our Company
            </h2>

            {/* Description */}
            <p className="font-body font-medium text-base lg:text-[15px] xl:text-lg leading-[24px] xl:leading-[27px] text-brand-brown mb-6 xl:mb-10 max-w-[607px]">
              With over a decade of experience, we craft unforgettable journeys
              that blend adventure with comfort. Our team of passionate travel
              experts hand-picks every destination, ensuring authentic
              experiences that create lasting memories.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 mb-6 xl:mb-10 border-t border-black/10">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.id}
                  tabIndex={0}
                  className={`py-5 lg:py-4 xl:py-10 px-3 xl:px-4 group transition-all duration-500 lg:hover:bg-[#FFF9F0] focus:bg-[#FFF9F0] outline-none ${index === 0 ? "border-r border-b border-black/10" : "border-b border-black/10"}`}
                >
                  <div className="flex items-start gap-3 xl:gap-4">
                    {/* Icon Container */}
                    <div className="w-[42px] lg:w-[40px] xl:w-[50px] h-[42px] lg:h-[40px] xl:h-[50px] bg-white border-[0.5px] border-[#FF6E00] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 lg:group-hover:bg-[#FF6E00] group-focus:bg-[#FF6E00]">
                      <div className="transition-all duration-300 lg:group-hover:brightness-0 lg:group-hover:invert group-focus:brightness-0 group-focus:invert">
                        {feature.icon === "travel" ? (
                          <TravelIcon />
                        ) : (
                          <LuggageIcon />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="font-display italic font-normal text-lg lg:text-[17px] xl:text-xl leading-[24px] xl:leading-[27px] text-brand-brown lg:group-hover:text-[#FF6E00] group-focus:text-[#FF6E00] transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="font-body font-normal text-sm xl:text-base leading-5 xl:leading-6 text-brand-brown/70 mt-1 xl:mt-2 max-w-[240px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist items */}
            <div className="flex flex-col gap-3 xl:gap-4 mb-8 xl:mb-12 lg:pl-6 xl:pl-0">
              {CHECKLIST.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 group outline-none"
                  tabIndex={0}
                >
                  <div className="shrink-0 transition-transform duration-300 lg:group-hover:scale-110 group-focus:scale-110">
                    <CheckIcon />
                  </div>
                  <span className="font-body font-normal text-sm xl:text-base leading-5 xl:leading-6 text-brand-brown/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center xl:justify-start">
              <Link href="/destinations" className="inline-block outline-none">
                <button className="w-[220px] xl:w-[244px] h-[46px] xl:h-[50px] bg-white border border-[#FF6E00] rounded-xl font-display italic text-base xl:text-lg text-brand-orange overflow-hidden transition-all duration-300 relative group cursor-pointer shadow-sm outline-none">
                  <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange lg:group-hover:h-full transition-all duration-300 ease-out" />
                  <span className="relative z-10 lg:group-hover:text-white transition-colors duration-300">
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
