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

interface CheckoutProgressBarProps {
  currentStep: 1 | 2 | 3;
}

const CheckoutProgressBar: React.FC<CheckoutProgressBarProps> = ({ currentStep }) => {
  // Step data
  const steps = [
    {
      id: 1,
      label: 'Detail',
      icon: (
        // Profile icon
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="#FFFFFF" strokeWidth="2.5" />
          <path
            d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: 'Payment',
      icon: (
        // Payment/Cash icon
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="6" width="20" height="12" rx="2" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M6 12H6.01" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 12H18.01" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 3,
      label: 'Confirm',
      icon: (
        // Success/Check icon
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" fill="#FFFFFF" />
          <path
            d="M8 12L11 15L16 9"
            stroke="#FF6E00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full mb-8 md:mb-12">
      {/* Desktop/Tablet Progress Bar */}
      <div className="hidden sm:flex items-start justify-between max-w-[900px]">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step Item */}
            <div className="flex flex-col items-center">
              {/* Icon Circle */}
              <div
                className={`
                  w-[50px] h-[50px] rounded-full flex items-center justify-center
                  transition-all duration-300
                  ${step.id <= currentStep ? 'bg-brand-orange' : 'bg-brand-brown/30'}
                `}
              >
                {step.icon}
              </div>
              {/* Label */}
              <span className="font-display italic font-medium text-lg md:text-xl leading-[27px] text-brand-brown mt-3 text-center">
                {step.label}
              </span>
            </div>

            {/* Connecting Line (not after last step) */}
            {index < steps.length - 1 && (
              <div className="flex-1 flex items-center px-2 mt-6">
                <div
                  className={`
                    w-full h-px transition-colors duration-300
                    ${step.id < currentStep ? 'bg-brand-orange' : 'border-t border-brand-orange'}
                  `}
                  style={{ borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: '#FF6E00' }}
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
