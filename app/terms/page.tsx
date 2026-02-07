"use client";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Terms and Conditions Hero Section
 */
const TermsHeroSection = () => {
  return (
    <section
      className="relative w-full py-16 lg:py-[98px]"
      style={{ backgroundColor: "#FFF7E5" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center">
          <h1 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-6">
            Terms and Conditions
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
 * Terms Content Section
 */
const TermsContentSection = () => {
  return (
    <section
      className="relative w-full py-12 lg:py-[80px]"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-10">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <div>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              Welcome to Travixo. These Terms and Conditions govern your use of
              our website and services. By accessing or using our services, you
              agree to be bound by these terms. Please read them carefully.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              1. Definitions
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
              <li>
                <strong>"We," "Us," "Our"</strong> refers to Travixo Travel &
                Tours
              </li>
              <li>
                <strong>"You," "Your"</strong> refers to the user or customer of
                our services
              </li>
              <li>
                <strong>"Services"</strong> refers to all travel booking,
                planning, and related services provided by Travixo
              </li>
              <li>
                <strong>"Website"</strong> refers to www.travixo.com and all
                associated platforms
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              2. Acceptance of Terms
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              By accessing and using our website or services, you acknowledge
              that you have read, understood, and agree to be bound by these
              Terms and Conditions, as well as our Privacy Policy. If you do not
              agree to these terms, please do not use our services.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              3. Booking and Reservations
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-body font-semibold text-[18px] leading-[28px] text-brand-brown mb-2">
                  3.1 Booking Process
                </h3>
                <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
                  All bookings are subject to availability and confirmation. A
                  booking is confirmed only when you receive written
                  confirmation from us via email. We reserve the right to
                  decline any booking at our discretion.
                </p>
              </div>

              <div>
                <h3 className="font-body font-semibold text-[18px] leading-[28px] text-brand-brown mb-2">
                  3.2 Pricing
                </h3>
                <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
                  All prices are quoted in USD unless otherwise stated. Prices
                  are subject to change without notice until booking is
                  confirmed. The price quoted at the time of booking
                  confirmation is the price you will pay, except in cases of
                  obvious pricing errors.
                </p>
              </div>

              <div>
                <h3 className="font-body font-semibold text-[18px] leading-[28px] text-brand-brown mb-2">
                  3.3 Payment
                </h3>
                <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
                  Payment terms vary by tour package. Generally, a deposit is
                  required at the time of booking, with the balance due 30 days
                  before departure. Full payment is required at booking for
                  departures within 30 days.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              4. Cancellation and Refunds
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-body font-semibold text-[18px] leading-[28px] text-brand-brown mb-2">
                  4.1 Cancellation by Customer
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
                  <li>
                    <strong>30+ days before departure:</strong> Full refund
                    minus 10% processing fee
                  </li>
                  <li>
                    <strong>15-30 days before departure:</strong> 50% refund
                  </li>
                  <li>
                    <strong>Less than 15 days before departure:</strong> No
                    refund
                  </li>
                </ul>
                <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700 mt-3">
                  Cancellation must be made in writing via email. The
                  cancellation date is the date we receive your written notice.
                </p>
              </div>

              <div>
                <h3 className="font-body font-semibold text-[18px] leading-[28px] text-brand-brown mb-2">
                  4.2 Cancellation by Travixo
                </h3>
                <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
                  We reserve the right to cancel any tour due to insufficient
                  bookings, force majeure, or safety concerns. In such cases,
                  you will receive a full refund or the option to transfer to an
                  alternative tour.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              5. Travel Documents and Requirements
            </h2>
            <div className="space-y-3">
              <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
                You are responsible for obtaining and maintaining all necessary
                travel documents, including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
                <li>
                  Valid passport (must be valid for at least 6 months beyond
                  travel dates)
                </li>
                <li>Visas and entry permits</li>
                <li>Health certificates and vaccinations</li>
                <li>Travel insurance</li>
              </ul>
              <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
                We are not responsible for any costs or issues arising from
                failure to obtain proper documentation.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              6. Travel Insurance
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              We strongly recommend that all travelers purchase comprehensive
              travel insurance covering trip cancellation, medical expenses,
              emergency evacuation, and personal belongings. You are responsible
              for ensuring adequate coverage for your trip.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              7. Changes to Itinerary
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              While we make every effort to operate tours as advertised, we
              reserve the right to modify itineraries due to weather conditions,
              safety concerns, local circumstances, or other factors beyond our
              control. We will provide reasonable alternative arrangements where
              possible.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              8. Limitation of Liability
            </h2>
            <div className="space-y-3">
              <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
                To the fullest extent permitted by law, Travixo shall not be
                liable for:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
                <li>
                  Any injury, death, loss, or damage to person or property
                </li>
                <li>
                  Any delays, cancellations, or changes to travel arrangements
                </li>
                <li>Acts of God, war, terrorism, or government actions</li>
                <li>Actions of third-party service providers</li>
                <li>Loss of enjoyment or disappointment</li>
              </ul>
              <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
                Our maximum liability is limited to the total amount paid for
                the tour package.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              9. Customer Responsibilities
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700 mb-3">
              You agree to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
              <li>Provide accurate and complete information when booking</li>
              <li>Arrive on time for all scheduled activities</li>
              <li>Follow instructions from tour guides and local authorities</li>
              <li>Respect local customs, laws, and regulations</li>
              <li>
                Behave in a manner that does not disturb other travelers or
                jeopardize safety
              </li>
              <li>
                Report any issues or complaints during the tour for immediate
                resolution
              </li>
            </ul>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700 mt-3">
              We reserve the right to terminate your participation without
              refund if your behavior is deemed unacceptable or dangerous.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              10. Health and Fitness
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              You must inform us of any medical conditions, disabilities, or
              special requirements at the time of booking. Some tours require a
              reasonable level of fitness. It is your responsibility to ensure
              you are physically capable of participating in the activities
              included in your tour.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              11. Complaints and Disputes
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              If you have a complaint during your tour, please inform your tour
              guide or our representative immediately so we can attempt to
              resolve the issue. If the matter remains unresolved, you must
              submit a written complaint within 30 days of completing your tour.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              12. Intellectual Property
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              All content on our website, including text, images, logos, and
              graphics, is the property of Travixo or its licensors and is
              protected by copyright and trademark laws. You may not reproduce,
              distribute, or use any content without our written permission.
            </p>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              13. Force Majeure
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              We shall not be liable for failure to perform our obligations due
              to circumstances beyond our reasonable control, including but not
              limited to natural disasters, war, terrorism, pandemics, strikes,
              or government actions.
            </p>
          </div>

          {/* Section 14 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              14. Governing Law
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the jurisdiction where Travixo is
              registered. Any disputes shall be subject to the exclusive
              jurisdiction of the courts in that jurisdiction.
            </p>
          </div>

          {/* Section 15 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              15. Modifications to Terms
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              We reserve the right to modify these Terms and Conditions at any
              time. Changes will be effective immediately upon posting to our
              website. Your continued use of our services after any changes
              constitutes acceptance of the new terms.
            </p>
          </div>

          {/* Section 16 */}
          <div>
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              16. Severability
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700">
              If any provision of these Terms and Conditions is found to be
              invalid or unenforceable, the remaining provisions shall continue
              in full force and effect.
            </p>
          </div>

          {/* Contact Section */}
          <div className="border-t pt-8">
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[36px] text-brand-brown mb-4">
              Contact Information
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700 mb-3">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-2 font-body font-normal text-[16px] leading-[28px] text-gray-700">
              <p>
                <strong>Email:</strong>{" "}
                <a
                
                  className="text-brand-orange "
                >
                  legal@travixo.com
                </a>
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

          {/* Agreement */}
          <div className="border-t pt-8">
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-700 italic">
              By using our services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Terms and Conditions Page Component
 */
export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <TermsHeroSection />
        <TermsContentSection />
      </main>
      <Footer />
    </>
  );
}
