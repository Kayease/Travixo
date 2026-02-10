/**
 * PaymentDetailsForm Component
 * 
 * Payment form with Credit Card/UPI toggle and card input fields.
 * Includes card number, expiry date, CVV, and security notice.
 * 
 * Design specs from Figma:
 * - Section title: Playfair Display italic, 24px, 600 weight with lock icon
 * - Payment toggle buttons: 400x60px, active has orange border and background
 * - Card form container: 812x242px, white background, rounded 12px
 * - Card inputs: cream background #FFFCF5
 */

'use client';

import React from 'react';
import Image from 'next/image';

interface PaymentDetailsFormProps {
  paymentMethod: 'card' | 'upi';
  onPaymentMethodChange: (method: 'card' | 'upi') => void;
  cardData: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
  onCardChange: (field: string, value: string) => void;
  upiId?: string;
  onUpiChange?: (value: string) => void;
}

const PaymentDetailsForm: React.FC<PaymentDetailsFormProps> = ({
  paymentMethod,
  onPaymentMethodChange,
  cardData,
  onCardChange,
  upiId = "",
  onUpiChange,
}) => {
  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '').replace(/\D/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ').substring(0, 19) : '';
  };

  // Format expiry date
  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  return (
    <div>
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6 md:mb-8">
        {/* Lock/Security Icon */}
        <Image
          src="/images/checkout/mdi_encryption-secure-outline.png"
          alt="Security"
          width={32}
          height={32}
          className="object-contain shrink-0"
        />
        <h2 className="font-display italic font-semibold text-[24px] leading-[30px] text-brand-brown">
          Payment Details
        </h2>
      </div>

      {/* Payment Method Toggle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
        {/* Credit Card Button */}
        <button
          onClick={() => onPaymentMethodChange('card')}
          className={`
            h-[60px] rounded-xl font-body font-semibold text-base leading-[30px] text-brand-brown
            transition-all duration-200 cursor-pointer
            ${paymentMethod === 'card'
              ? 'bg-brand-orange/20 border border-brand-orange'
              : 'bg-white border border-brand-brown/20 hover:border-brand-orange/50'
            }
          `}
        >
          Credit Card
        </button>

        {/* UPI Button */}
        <button
          onClick={() => onPaymentMethodChange('upi')}
          className={`
            h-[60px] rounded-xl font-body font-semibold text-base leading-[30px] text-brand-brown
            transition-all duration-200 cursor-pointer
            ${paymentMethod === 'upi'
              ? 'bg-brand-orange/20 border border-brand-orange'
              : 'bg-white border border-brand-brown/20 hover:border-brand-orange/50'
            }
          `}
        >
          UPI
        </button>
      </div>

      {/* Card Details Form - Show only when credit card is selected */}
      {paymentMethod === 'card' && (
        <div className="bg-white border border-brand-brown/20 rounded-xl p-4 md:p-6">
          {/* Card Number Field */}
          <div className="mb-4 md:mb-6">
            <label htmlFor="checkout-cardNumber" className="block font-display italic font-semibold text-[20px] leading-[30px] text-brand-brown mb-2">
              Card Number
            </label>
            <input
              id="checkout-cardNumber"
              type="text"
              value={cardData.cardNumber}
              onChange={(e) => onCardChange('cardNumber', formatCardNumber(e.target.value))}
              placeholder="0000 0000 0000 0000"
              maxLength={19}
              className="w-full h-[50px] bg-[#FFFCF5] border border-brand-brown/20 rounded-xl px-4
                         font-body font-normal text-base leading-[30px] text-brand-brown
                         placeholder:text-brand-brown/60 focus:outline-none focus:border-brand-brown/40
                         transition-colors"
            />
          </div>

          {/* Expiry & CVV Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Expiry Date */}
            <div>
              <label htmlFor="checkout-expiry" className="block font-display italic font-semibold text-[20px] leading-[30px] text-brand-brown mb-2">
                Expiry Date
              </label>
              <input
                id="checkout-expiry"
                type="text"
                value={cardData.expiryDate}
                onChange={(e) => onCardChange('expiryDate', formatExpiryDate(e.target.value))}
                placeholder="MM/YY"
                maxLength={5}
                className="w-full h-[50px] bg-[#FFFCF5] border border-brand-brown/20 rounded-xl px-4
                           font-body font-normal text-base leading-[30px] text-brand-brown
                           placeholder:text-brand-brown/60 focus:outline-none focus:border-brand-brown/40
                           transition-colors"
              />
            </div>

            {/* CVV */}
            <div>
              <label htmlFor="checkout-cvv" className="block font-display italic font-semibold text-[20px] leading-[30px] text-brand-brown mb-2">
                CVV
              </label>
              <input
                id="checkout-cvv"
                type="text"
                value={cardData.cvv}
                onChange={(e) => onCardChange('cvv', e.target.value.replace(/\D/g, '').substring(0, 4))}
                placeholder="123"
                maxLength={4}
                className="w-full h-[50px] bg-[#FFFCF5] border border-brand-brown/20 rounded-xl px-4
                           font-body font-normal text-base leading-[30px] text-brand-brown
                           placeholder:text-brand-brown/60 focus:outline-none focus:border-brand-brown/40
                           transition-colors"
              />
            </div>
          </div>
        </div>
      )}

      {/* UPI Content - Show only when UPI is selected */}
      {paymentMethod === 'upi' && (
        <div className="bg-white border border-brand-brown/20 rounded-xl p-4 md:p-6">
          <label htmlFor="checkout-upi" className="block font-display italic font-semibold text-[20px] leading-[30px] text-brand-brown mb-2">
           UPI ID
          </label>
          <input
            id="checkout-upi"
            type="text"
            value={upiId}
            onChange={(e) => onUpiChange?.(e.target.value)}
            placeholder="example@upi"
            className="w-full h-[50px] bg-[#FFFCF5] border border-brand-brown/20 rounded-xl px-4
                       font-body font-normal text-base leading-[30px] text-brand-brown
                       placeholder:text-brand-brown/60 focus:outline-none focus:border-brand-brown/40
                       transition-colors"
          />
          <p className="font-body text-sm text-brand-brown/60 mt-2">
            You will be redirected to your UPI app to complete the payment securely.
          </p>
        </div>
      )}

      {/* Security Notice */}
      <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
        {/* Lock Icon */}
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
          <rect x="3" y="7" width="10" height="7" rx="1" stroke="rgba(75,54,33,0.6)" strokeWidth="1" />
          <path
            d="M5 7V5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5V7"
            stroke="rgba(75,54,33,0.6)"
            strokeWidth="1"
          />
        </svg>
        <p className="font-body font-normal text-sm md:text-base leading-[30px] text-brand-brown/60 text-center">
          Your payment is secured with 256-bit SSL encryption. We do not store your full card details
        </p>
      </div>
    </div>
  );
};

export default PaymentDetailsForm;
