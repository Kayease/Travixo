"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/app/context/ToastContext";

/**
 * Signup Hero Section
 */
const SignupHeroSection = () => {
  return (
    <section
      className="relative w-full py-16 lg:py-[98px] bg-[#FFF7E5]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center">
          <h1 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-6">
            Join Travixo
          </h1>
          <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown max-w-[780px] mx-auto">
            Create your account and start exploring the world with us
          </p>
        </div>
      </div>
    </section>
  );
};

/**
 * Signup Form Section
 */
const SignupFormSection = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      showToast("Passwords do not match!", "error");
      return;
    }
    if (!formData.agreeToTerms) {
      showToast("Please agree to the Terms and Conditions", "error");
      return;
    }

    // In production, this would create the account via API
    showToast("Account created successfully! Redirecting to login...", "success");
    setTimeout(() => router.push("/login"), 1500);
  };

  return (
    <section
      className="relative w-full py-12 lg:py-[80px] bg-[#FFFCF5]"
    >
      <div className="max-w-[720px] mx-auto px-5 md:px-10">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="font-display italic font-semibold text-[28px] md:text-[32px] leading-[40px] text-brand-brown mb-3">
              Create your account
            </h2>
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-600">
              Fill in your details to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block font-body font-medium text-[16px] leading-[24px] text-brand-brown mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] leading-[24px] text-brand-brown placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block font-body font-medium text-[16px] leading-[24px] text-brand-brown mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] leading-[24px] text-brand-brown placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-body font-medium text-[16px] leading-[24px] text-brand-brown mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] leading-[24px] text-brand-brown placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block font-body font-medium text-[16px] leading-[24px] text-brand-brown mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] leading-[24px] text-brand-brown placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block font-body font-medium text-[16px] leading-[24px] text-brand-brown mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                  minLength={8}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] leading-[24px] text-brand-brown placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-brand-brown transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <p className="mt-1 font-body text-[14px] text-gray-500">
                Must be at least 8 characters
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block font-body font-medium text-[16px] leading-[24px] text-brand-brown mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] leading-[24px] text-brand-brown placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-brand-brown transition-colors cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="space-y-3">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 mt-1 rounded border-gray-300 text-brand-orange focus:ring-brand-orange cursor-pointer"
                />
                <span className="ml-2 font-body font-normal text-[14px] leading-[24px] text-gray-700">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-brand-orange hover:underline"
                  >
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-brand-orange hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onChange={handleChange}
                  className="w-4 h-4 mt-1 rounded border-gray-300 text-brand-orange focus:ring-brand-orange cursor-pointer"
                />
                <span className="ml-2 font-body font-normal text-[14px] leading-[24px] text-gray-700">
                  Subscribe to our newsletter for travel tips and exclusive
                  offers
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-[12px] font-display italic font-normal transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange relative overflow-hidden group px-6 py-3 text-[18px] leading-[24px] bg-brand-orange border border-brand-orange text-white cursor-pointer"
            >
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-brand-orange transition-colors duration-300">
                Create Account
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white font-body text-gray-500">
                Or sign up with
              </span>
            </div>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg font-body font-medium text-[16px] text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg font-body font-medium text-[16px] text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="font-body font-normal text-[16px] leading-[28px] text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-brand-orange hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Signup Page Component
 */
export default function SignupPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen relative">
        <SignupHeroSection />
        <SignupFormSection />
      </main>
      <Footer />
    </>
  );
}
