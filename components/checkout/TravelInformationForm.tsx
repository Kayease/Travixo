/**
 * TravelInformationForm Component
 * 
 * Form section for collecting traveler details including
 * first name, last name, email, and passport number.
 * 
 * Design specs from Figma:
 * - Section title: Playfair Display italic, 24px, 600 weight with briefcase icon
 * - Labels: Playfair Display italic, 20px, 600 weight
 * - Inputs: 400x50px, white background, 1px border rgba(75,54,33,0.2), radius 12px
 * - Input text: Poppins 16px, 400 weight
 */

'use client';

import React from 'react';
import Image from 'next/image';

interface TravelInformationFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    passportNumber: string;
  };
  onChange: (field: string, value: string) => void;
}

const TravelInformationForm: React.FC<TravelInformationFormProps> = ({
  formData,
  onChange,
}) => {
  return (
    <div className="mb-8 md:mb-10">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6 md:mb-8">
        {/* Briefcase Icon */}
        <Image
          src="/images/checkout/tabler_briefcase.png"
          alt="Briefcase"
          width={32}
          height={32}
          className="object-contain flex-shrink-0"
        />
        <h2 className="font-display italic font-semibold text-[24px] leading-[30px] text-brand-brown">
          Travel Information
        </h2>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* First Name */}
        <div>
          <label className="block font-display italic font-semibold text-[20px] leading-[30px] text-brand-brown mb-2">
            First Name
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            placeholder="Jimmy"
            className="w-full h-[50px] bg-white border border-brand-brown/20 rounded-xl px-4
                       font-body font-normal text-base leading-[30px] text-brand-brown
                       placeholder:text-brand-brown/60 focus:outline-none focus:border-brand-orange
                       transition-colors"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-display italic font-semibold text-[20px] leading-[30px] text-brand-brown mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            placeholder="Jostar"
            className="w-full h-[50px] bg-white border border-brand-brown/20 rounded-xl px-4
                       font-body font-normal text-base leading-[30px] text-brand-brown
                       placeholder:text-brand-brown/60 focus:outline-none focus:border-brand-orange
                       transition-colors"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block font-display italic font-semibold text-[20px] leading-[30px] text-brand-brown mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="Jimmy@demo.com"
            className="w-full h-[50px] bg-white border border-brand-brown/20 rounded-xl px-4
                       font-body font-normal text-base leading-[30px] text-brand-brown
                       placeholder:text-brand-brown/60 focus:outline-none focus:border-brand-orange
                       transition-colors"
          />
        </div>

        {/* Passport Number */}
        <div>
          <label className="block font-display italic font-semibold text-[20px] leading-[30px] text-brand-brown mb-2">
            Passport Number
          </label>
          <input
            type="text"
            value={formData.passportNumber}
            onChange={(e) => onChange('passportNumber', e.target.value)}
            placeholder="X123456789"
            className="w-full h-[50px] bg-white border border-brand-brown/20 rounded-xl px-4
                       font-body font-normal text-base leading-[30px] text-brand-brown
                       placeholder:text-brand-brown/60 focus:outline-none focus:border-brand-orange
                       transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default TravelInformationForm;
