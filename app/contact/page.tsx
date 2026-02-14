"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/app/context/ToastContext";

/**
 * ContactHeroSection Component
 * Hero section for Contact page
 */
const ContactHeroSection = () => {
  return (
    <section
      className="relative w-full py-16 lg:py-[98px] bg-[#FFF7E5]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Header Content */}
        <div className="text-center">
          {/* Title */}
          <h1 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-6">
            Contact us
          </h1>

          {/* Subtitle */}
          <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown max-w-[780px] mx-auto">
            Get in Touch with Us. Start planning your ultimate safari adventure
            today.
          </p>
        </div>
      </div>
    </section>
  );
};

/**
 * ContactFormSection Component
 * Form section with image and contact form
 */
const ContactFormSection = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    destination: "",
    additionalRequests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      showToast("Please fill in your name and email", "error");
      return;
    }
    // Demo: simulate form submission
    showToast("Message sent successfully! We'll get back to you soon.", "success");
    setFormData({ fullName: "", phoneNumber: "", email: "", destination: "", additionalRequests: "" });
  };

  return (
    <section
      className="relative w-full py-12 lg:py-[52px] bg-[#FFFCF5]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Side - Title, Subtitle, Image */}
          <div className="lg:w-[487px] shrink-0">
            {/* Title */}
            <h2 className="font-display italic font-semibold text-[32px] md:text-[42px] leading-[52px] text-brand-brown mb-5">
              Keep in touch with the travixo experts
            </h2>

            {/* Subtitle */}
            <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown mb-8">
              Get in Touch with Us Start Planning Your Ultimate Safari Adventure
              Today!
            </p>

            {/* Image */}
            <div className="relative h-[280px] md:h-[351px] rounded-xl overflow-hidden">
              <Image
                src="/images/travixo-tours/cards/contact.png"
                alt="Beautiful waterfall"
                fill
                className="object-cover"
                sizes="487px"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block font-display italic font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full pb-3 bg-transparent border-b border-brand-brown/50 font-body font-normal text-[16px] leading-[30px] text-brand-brown placeholder:text-brand-brown/60 focus:outline-none focus-visible:outline-none focus-visible:ring-0 transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block font-display italic font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown mb-2">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                  className="w-full pb-3 bg-transparent border-b border-brand-brown/50 font-body font-normal text-[16px] leading-[30px] text-brand-brown placeholder:text-brand-brown/60 focus:outline-none focus-visible:outline-none focus-visible:ring-0 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-display italic font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pb-3 bg-transparent border-b border-brand-brown/50 font-body font-normal text-[16px] leading-[30px] text-brand-brown placeholder:text-brand-brown/60 focus:outline-none focus-visible:outline-none focus-visible:ring-0 transition-colors"
                />
              </div>

              {/* Preferred Destination */}
              <div>
                <label htmlFor="destination" className="block font-display italic font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown mb-2">
                  Preferred Destination
                </label>
                <input
                  id="destination"
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Paris"
                  className="w-full pb-3 bg-transparent border-b border-brand-brown/50 font-body font-normal text-[16px] leading-[30px] text-brand-brown placeholder:text-brand-brown/60 focus:outline-none focus-visible:outline-none focus-visible:ring-0 transition-colors"
                />
              </div>

              {/* Additional Requests */}
              <div>
                <label htmlFor="additionalRequests" className="block font-display italic font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown mb-2">
                  Additional Requests
                </label>
                <input
                  id="additionalRequests"
                  type="text"
                  name="additionalRequests"
                  value={formData.additionalRequests}
                  onChange={handleChange}
                  placeholder="If you need anything else, let us know..."
                  className="w-full pb-3 bg-transparent border-b border-brand-brown/50 font-body font-normal text-[16px] leading-[30px] text-brand-brown placeholder:text-brand-brown/60 focus:outline-none focus-visible:outline-none focus-visible:ring-0 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-[200px] h-[45px] rounded-[12px] font-display italic font-normal text-[18px] leading-[24px] text-white bg-[#FF6E00] border border-[#FF6E00] overflow-hidden transition-all duration-300 relative group cursor-pointer"
                >
                  {/* Fill animation from bottom to top */}
                  <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
                  <span className="relative z-10 group-hover:text-[#FF6E00] transition-colors duration-300">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-12 lg:my-16 border-t border-black/20" />

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {/* Call Us */}
          <div className="relative lg:pr-8 lg:border-r lg:border-black/40">
            <h4 className="font-display italic font-medium text-[20px] md:text-[24px] leading-[30px] text-brand-brown mb-4">
              Call us:
            </h4>
            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[30px] text-brand-brown">
              +91 1234567890
            </p>
            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[30px] text-brand-brown">
              +91 1234567890
            </p>
          </div>

          {/* Mail Us */}
          <div className="relative lg:pr-8 lg:border-r lg:border-black/40">
            <h4 className="font-display italic font-medium text-[20px] md:text-[24px] leading-[30px] text-brand-brown mb-4">
              Mail us:
            </h4>
            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[30px] text-brand-brown">
              contact@travixo.com
            </p>
            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[30px] text-brand-brown">
              support@travixo.com
            </p>
          </div>

          {/* Head Office */}
          <div className="relative lg:pr-8 lg:border-r lg:border-black/40">
            <h4 className="font-display italic font-medium text-[20px] md:text-[24px] leading-[30px] text-brand-brown mb-4">
              Head Office:
            </h4>
            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[30px] text-brand-brown">
              6391 Elgin St. Celina,
            </p>
            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[30px] text-brand-brown">
              Delaware 10001, USA
            </p>
          </div>

          {/* Regional Office */}
          <div>
            <h4 className="font-display italic font-medium text-[20px] md:text-[24px] leading-[30px] text-brand-brown mb-4">
              Regional Office:
            </h4>
            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[30px] text-brand-brown">
              1523 New Street Road,
            </p>
            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[30px] text-brand-brown">
              Milkyway, Sirius
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Contact Page
 */
export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      <style dangerouslySetInnerHTML={{
        __html: `
        input:focus, input:focus-visible, textarea:focus, textarea:focus-visible {
          outline: none !important;
          box-shadow: none !important;
          border-color: rgba(75, 54, 33, 0.5) !important;
        }
      `}} />
      <Navbar />
      <ContactHeroSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
