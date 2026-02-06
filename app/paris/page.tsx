import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { ParisToursSection } from "@/app/components/paris/ParisToursSection";
import { AdventureSection } from "@/app/components/paris/AdventureSection";
import { WhenToVisitSection } from "@/app/components/paris/WhenToVisitSection";
import { TestimonialSection } from "@/app/components/paris/TestimonialSection";

export default function ParisPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#FDFBF7]">
      <Navbar />

      {/* Paris Banner Section */}
      <section className="w-full bg-[#FFF7E5] h-[285px] relative overflow-hidden flex justify-center">
        <div className="w-full max-w-[1440px] h-full relative">
          {/* Paris Title */}
          <h1 className="absolute top-[52px] left-1/2 -translate-x-1/2 font-display italic font-semibold text-[28px] leading-[37px] text-[#4B3621]">
            Paris
          </h1>

          {/* Description */}
          <p className="absolute top-[113px] left-1/2 -translate-x-1/2 w-full max-w-[780px] px-4 font-sans font-medium text-[18px] leading-[30px] text-center text-[#4B3621]">
            Paris enchants with iconic landmarks like the Eiffel Tower,
            world-class art in the Louvre, and charming streets lined with
            cafés.
          </p>
        </div>
      </section>

      {/* Hero Video Section */}
      <section className="w-full h-[608px] relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/paris/220942_small.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Most Favorite Tour in Paris Section */}
      <ParisToursSection />

      {/* Adventure Section */}
      <AdventureSection />

      {/* When to Visit Section */}
      <WhenToVisitSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      <Footer />
    </main>
  );
}
