import React from "react";
import Image from "next/image";

/**
 * Process steps data
 */
const PROCESS_STEPS = [
  {
    id: 1,
    stepNumber: "Step 1:",
    title: "Initial Consultation",
    description:
      "Connect with our safari experts to discuss your travel goals, preferences, and budget. We'll guide you through the best destinations and tailor an itinerary just for you.",
    image: "/images/travixo-tours/cards/process-1.png",
    imageAlt: "Woman reading map",
    outerIcon: "/images/about/process/vector-6.png",
    innerIcon: "/images/about/process/tabler_phone-call.png",
    layout: "image-left",
  },
  {
    id: 2,
    stepNumber: "Step 2:",
    title: "Get Ready for Your Adventure",
    description:
      "We handle all the details from accommodations to permits so you can focus on preparing for an unforgettable trip. Receive expert tips on packing, safety, and cultural insights.",
    image: "/images/travixo-tours/cards/process-2.png",
    imageAlt: "Person on suspension bridge",
    outerIcon: "/images/about/process/vector-7.png",
    innerIcon: "/images/about/process/uil_calender.png",
    layout: "image-right",
  },
  {
    id: 3,
    stepNumber: "Step 3:",
    title: "Experience the Journey of a Lifetime",
    description:
      "Embark on your African safari with confidence! Enjoy breathtaking landscapes, incredible wildlife, and immersive cultural experiences while we ensure a seamless adventure.",
    image: "/images/travixo-tours/cards/process-3.png",
    imageAlt: "Woman in car enjoying view",
    outerIcon: "/images/about/process/vector-8.png",
    innerIcon: "/images/about/process/mynaui_plane-2.png",
    layout: "image-left",
  },
];

/**
 * ProcessSection Component
 * "Traveling with Travixo" - Our Process section
 */
export const ProcessSection = () => {
  return (
    <section
      className="relative w-full py-12 lg:py-[52px] bg-[#FFFCF5]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-body font-medium text-[20px] md:text-[24px] leading-[36px] text-brand-brown mb-3">
            Our Process
          </p>
          <h2 className="font-display italic font-semibold text-[32px] md:text-[42px] leading-[56px] text-brand-brown">
            Traveling with Travixo
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 lg:space-y-24">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col gap-8 lg:gap-12 xl:gap-16 ${step.layout === "image-left"
                ? "xl:flex-row"
                : "xl:flex-row-reverse"
                }`}
            >
              {/* Image */}
              <div className="w-full xl:w-[640px] shrink-0">
                <div className="relative h-[350px] md:h-[450px] lg:h-[496px] rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 640px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center items-center md:items-center xl:items-start text-left">
                {/* Icon Circle */}
                <div
                  className="group relative w-[80px] h-[80px] lg:w-[95px] lg:h-[95px] mb-6 flex items-center justify-center cursor-pointer mx-auto xl:mx-0 outline-none"
                  tabIndex={0}
                >
                  {/* Outer Shape (Orange Blob) */}
                  <div className="absolute inset-0 w-full h-full transition-all duration-300">
                    <Image
                      src={step.outerIcon}
                      alt={`${step.title} decorative icon`}
                      fill
                      role="presentation"
                      className="object-contain transition-all duration-300 lg:group-hover:scale-[0.96] group-focus:scale-[0.96] lg:group-hover:filter-[brightness(0)_invert(1)_drop-shadow(0.5px_0_0_#FF6E00)_drop-shadow(-0.5px_0_0_#FF6E00)_drop-shadow(0_0.5px_0_#FF6E00)_drop-shadow(0_-0.5px_0_#FF6E00)] group-focus:filter-[brightness(0)_invert(1)_drop-shadow(0.5px_0_0_#FF6E00)_drop-shadow(-0.5px_0_0_#FF6E00)_drop-shadow(0_0.5px_0_#FF6E00)_drop-shadow(0_-0.5px_0_#FF6E00)]"
                      sizes="(max-width: 1024px) 80px, 95px"
                    />
                  </div>
                  {/* Inner Icon (White Icon) */}
                  <div className="relative z-10 w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] transition-all duration-300 lg:group-hover:brightness-0 lg:group-hover:filter-[brightness(0)_invert(48%)_sepia(99%)_saturate(4155%)_hue-rotate(1deg)_brightness(102%)_contrast(106%)] group-focus:brightness-0 group-focus:filter-[brightness(0)_invert(48%)_sepia(99%)_saturate(4155%)_hue-rotate(1deg)_brightness(102%)_contrast(106%)]">
                    <Image
                      src={step.innerIcon}
                      alt={`Step ${step.id} icon`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 40px, 48px"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display italic font-semibold text-[28px] md:text-[36px] lg:text-[42px] leading-[40px] lg:leading-[56px] text-brand-brown mb-4 text-center xl:text-left">
                  {step.stepNumber} {step.title}
                </h3>

                {/* Description */}
                <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-brand-brown max-w-[608px] text-center xl:text-left">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
