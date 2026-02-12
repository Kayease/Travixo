/**
 * Global Loading UI
 * Displayed during route transitions via Next.js App Router
 */
export default function Loading() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-[#FFFCF5]"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Loader */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-brand-orange/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-orange animate-spin" />
        </div>

        {/* Loading Text */}
        <p className="font-display italic font-medium text-lg text-brand-brown/60">
          Loading...
        </p>
      </div>
    </main>
  );
}
