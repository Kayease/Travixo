/**
 * CheckoutProgressBar Component
 * 
 * Step progress indicator showing Detail, Payment, and Confirm stages.
 * Features orange circular icons with connecting lines.
 * 
 * Design specs from Figma:
 * - Icons: 50x50px, background #FF6E00, border-radius 100px
 * - Labels: Playfair Display italic, 20px, 500 weight
 * - Connecting lines: 309px width, 1px solid #FF6E00
 */

import React from 'react';
import Image from 'next/image';

interface CheckoutProgressBarProps {
  currentStep: 1 | 2 | 3;
}

const CheckoutProgressBar: React.FC<CheckoutProgressBarProps> = ({ currentStep }) => {
  // Step data
  const steps = [
    {
      id: 1,
      label: 'Detail',
      iconSrc: '/images/checkout/iconamoon_profile-bold.png',
    },
    {
      id: 2,
      label: 'Payment',
      iconSrc: '/images/checkout/streamline-freehand_cash-payment-bill.png',
    },
    {
      id: 3,
      label: 'Confirm',
      iconSrc: '/images/checkout/ix_success.png',
    },
  ];

  return (
    <div className="w-full mb-8 md:mb-12">
      {/* Desktop/Tablet Progress Bar */}
      <div className="hidden sm:flex items-start justify-between max-w-[900px] mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step Item */}
            <div className="flex flex-col items-center gap-[18px]">
              {/* Icon Circle */}
              <div
                className={`
                  w-[50px] h-[50px] rounded-full flex items-center justify-center
                  transition-all duration-300
                  ${step.id <= currentStep ? 'bg-brand-orange' : 'bg-brand-brown/30'}
                `}
              >
                <Image
                  src={step.iconSrc}
                  alt={step.label}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              {/* Label */}
              <span className="font-display italic font-medium text-[20px] leading-[27px] text-brand-brown text-center">
                {step.label}
              </span>
            </div>

            {/* Connecting Line (not after last step) */}
            {index < steps.length - 1 && (
              <div className="flex-1 flex items-start pt-[25px] px-4">
                <div
                  className="w-full h-[1px] bg-brand-orange"
                  style={{ maxWidth: '309px' }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Progress Bar */}
      <div className="sm:hidden flex items-center justify-between">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${step.id <= currentStep ? 'bg-brand-orange' : 'bg-brand-brown/30'}
              `}
            >
              <span className="text-white font-body font-semibold text-sm">{step.id}</span>
            </div>
            <span className="font-display italic font-medium text-sm text-brand-brown mt-2 text-center">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutProgressBar;
