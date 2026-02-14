import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Privacy Policy Hero Section
 */
const PrivacyHeroSection = () => {
  return (
    <section
      className="relative w-full py-16 lg:py-[98px] bg-[#FFF7E5]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center">
          <h1 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-6">
            Privacy Policy
          </h1>
          <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown max-w-[780px] mx-auto">
            Last Updated: February 4, 2026
          </p>
        </div>
      </div>
    </section>
  );
};

/**
 * Privacy Content Section
 */
const PrivacyContentSection = () => {
  return (
    <section
      className="relative w-full py-12 lg:py-[80px] bg-[#FFFCF5]"
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-10">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <div>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              At Travixo, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              1. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-body font-semibold text-[18px] leading-[28px] text-brand-brown mb-2">
                  Personal Information
                </h3>
                <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
                  <li>Name, email address, and phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely)</li>
                  <li>Passport and travel document details</li>
                  <li>Dietary preferences and special requirements</li>
                  <li>Emergency contact information</li>
                </ul>
              </div>

              <div>
                <h3 className="font-body font-semibold text-[18px] leading-[28px] text-brand-brown mb-2">
                  Automatically Collected Information
                </h3>
                <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
                  When you visit our website, we automatically collect certain
                  information about your device, including:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Clickstream data and cookies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              2. How We Use Your Information
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700 mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
              <li>Process and fulfill your travel bookings</li>
              <li>Communicate with you about your reservations</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send promotional materials and special offers (with consent)</li>
              <li>Improve our website and services</li>
              <li>Detect and prevent fraud or security issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700 mb-3">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
              <li>
                <strong>Service Providers:</strong> Hotels, airlines, tour
                operators, and other third parties necessary to fulfill your
                bookings
              </li>
              <li>
                <strong>Payment Processors:</strong> Secure payment gateways to
                process transactions
              </li>
              <li>
                <strong>Marketing Partners:</strong> With your consent, for
                promotional purposes
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
            </ul>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700 mt-3">
              We do not sell your personal information to third parties.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              We use cookies and similar tracking technologies to enhance your
              browsing experience, analyze site traffic, and personalize
              content. You can control cookie preferences through your browser
              settings, though this may affect website functionality.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              5. Data Security
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              We implement appropriate technical and organizational security
              measures to protect your personal information from unauthorized
              access, disclosure, alteration, or destruction. However, no method
              of transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              6. Your Rights and Choices
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700 mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
              <li>Access and receive a copy of your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700 mt-3">
              To exercise these rights, please contact us at{" "}
              <span className="text-brand-orange">
                privacy@travixo.com
              </span>
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              7. Data Retention
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this policy, unless a longer
              retention period is required by law. Booking records are typically
              retained for 7 years for accounting and legal purposes.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              8. International Data Transfers
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              Your information may be transferred to and processed in countries
              other than your country of residence. We ensure appropriate
              safeguards are in place to protect your information in accordance
              with this Privacy Policy.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              Our services are not directed to children under 13. We do not
              knowingly collect personal information from children. If you
              believe we have collected information from a child, please contact
              us immediately.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              We may update this Privacy Policy from time to time. The updated
              version will be indicated by an updated &quot;Last Updated&quot; date. We
              encourage you to review this policy periodically.
            </p>
          </div>

          {/* Contact Section */}
          <div className="border-t pt-8">
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              Contact Us
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700 mb-3">
              If you have questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <div className="space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
              <p>
                <strong>Email:</strong>{" "}
                <span className="text-brand-orange">
                  privacy@travixo.com
                </span>
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Address:</strong> Travixo Travel & Tours, 123 Adventure
                Lane, Travel City, TC 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Privacy Policy Page Component
 */
export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PrivacyHeroSection />
        <PrivacyContentSection />
      </main>
      <Footer />
    </>
  );
}
