"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Settings Hero Section
 */
const SettingsHeroSection = () => {
  return (
    <section
      className="relative w-full py-16 lg:py-[98px]"
      style={{ backgroundColor: "#FFF7E5" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center">
          <h1 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-6">
            Settings
          </h1>
          <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown max-w-[780px] mx-auto">
            Manage your account preferences and notification settings
          </p>
        </div>
      </div>
    </section>
  );
};

/**
 * Settings Content Section
 */
const SettingsContentSection = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    marketingEmails: true,
    weeklyNewsletter: false,
    bookingReminders: true,
    priceAlerts: true,
    specialOffers: true,
    travelTips: false,
    language: "en",
    currency: "USD",
    timezone: "America/New_York",
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  const handleSelect = (key: keyof typeof settings, value: string) => {
    setSettings({
      ...settings,
      [key]: value,
    });
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
    // Handle save logic
  };

  return (
    <section
      className="relative w-full py-12 lg:py-[80px]"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-[900px] mx-auto px-5 md:px-10">
        {/* Notifications Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="font-display italic font-semibold text-[28px] text-brand-brown mb-6">
            Notification Preferences
          </h2>

          {/* General Notifications */}
          <div className="mb-8 pb-8 border-b">
            <h3 className="font-body font-semibold text-[20px] text-brand-brown mb-4">
              General Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-medium text-[16px] text-brand-brown">
                    Email Notifications
                  </p>
                  <p className="font-body text-[14px] text-gray-600">
                    Receive updates via email
                  </p>
                </div>
                <button
                  onClick={() => handleToggle("emailNotifications")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                    settings.emailNotifications ? "bg-brand-orange" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.emailNotifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-medium text-[16px] text-brand-brown">
                    SMS Notifications
                  </p>
                  <p className="font-body text-[14px] text-gray-600">
                    Receive updates via text message
                  </p>
                </div>
                <button
                  onClick={() => handleToggle("smsNotifications")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                    settings.smsNotifications ? "bg-brand-orange" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.smsNotifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-medium text-[16px] text-brand-brown">
                    Push Notifications
                  </p>
                  <p className="font-body text-[14px] text-gray-600">
                    Receive push notifications on your device
                  </p>
                </div>
                <button
                  onClick={() => handleToggle("pushNotifications")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                    settings.pushNotifications ? "bg-brand-orange" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.pushNotifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Email Preferences */}
          <div>
            <h3 className="font-body font-semibold text-[20px] text-brand-brown mb-4">
              Email Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-medium text-[16px] text-brand-brown">
                    Booking Reminders
                  </p>
                  <p className="font-body text-[14px] text-gray-600">
                    Reminders about upcoming trips
                  </p>
                </div>
                <button
                  onClick={() => handleToggle("bookingReminders")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                    settings.bookingReminders ? "bg-brand-orange" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.bookingReminders ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-medium text-[16px] text-brand-brown">
                    Price Alerts
                  </p>
                  <p className="font-body text-[14px] text-gray-600">
                    Notify me about price drops
                  </p>
                </div>
                <button
                  onClick={() => handleToggle("priceAlerts")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                    settings.priceAlerts ? "bg-brand-orange" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.priceAlerts ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-medium text-[16px] text-brand-brown">
                    Marketing Emails
                  </p>
                  <p className="font-body text-[14px] text-gray-600">
                    Promotions and special offers
                  </p>
                </div>
                <button
                  onClick={() => handleToggle("marketingEmails")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                    settings.marketingEmails ? "bg-brand-orange" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.marketingEmails ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-medium text-[16px] text-brand-brown">
                    Weekly Newsletter
                  </p>
                  <p className="font-body text-[14px] text-gray-600">
                    Weekly travel inspiration and tips
                  </p>
                </div>
                <button
                  onClick={() => handleToggle("weeklyNewsletter")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                    settings.weeklyNewsletter ? "bg-brand-orange" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.weeklyNewsletter ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-medium text-[16px] text-brand-brown">
                    Travel Tips
                  </p>
                  <p className="font-body text-[14px] text-gray-600">
                    Helpful tips for your destinations
                  </p>
                </div>
                <button
                  onClick={() => handleToggle("travelTips")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                    settings.travelTips ? "bg-brand-orange" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.travelTips ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="font-display italic font-semibold text-[28px] text-brand-brown mb-6">
            General Preferences
          </h2>

          <div className="space-y-6">
            {/* Language */}
            <div>
              <label className="block font-body font-medium text-[16px] text-brand-brown mb-2">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleSelect("language", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
                <option value="pt">Português</option>
                <option value="zh">中文</option>
                <option value="ja">日本語</option>
              </select>
            </div>

            {/* Currency */}
            <div>
              <label className="block font-body font-medium text-[16px] text-brand-brown mb-2">
                Currency
              </label>
              <select
                value={settings.currency}
                onChange={(e) => handleSelect("currency", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CHF">CHF - Swiss Franc</option>
                <option value="CNY">CNY - Chinese Yuan</option>
              </select>
            </div>

            {/* Timezone */}
            <div>
              <label className="block font-body font-medium text-[16px] text-brand-brown mb-2">
                Timezone
              </label>
              <select
                value={settings.timezone}
                onChange={(e) => handleSelect("timezone", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange"
              >
                <option value="America/New_York">Eastern Time (ET)</option>
                <option value="America/Chicago">Central Time (CT)</option>
                <option value="America/Denver">Mountain Time (MT)</option>
                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                <option value="Europe/London">London (GMT)</option>
                <option value="Europe/Paris">Paris (CET)</option>
                <option value="Asia/Tokyo">Tokyo (JST)</option>
                <option value="Asia/Shanghai">Shanghai (CST)</option>
                <option value="Australia/Sydney">Sydney (AEDT)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="font-display italic font-semibold text-[28px] text-brand-brown mb-6">
            Privacy & Data
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-brand-orange mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-body font-medium text-[16px] text-brand-brown mb-1">
                    Data Usage
                  </p>
                  <p className="font-body text-[14px] text-gray-600">
                    Learn how we use your data and manage your privacy settings
                  </p>
                  <Link
                    href="/privacy"
                    className="font-body text-[14px] text-brand-orange hover:underline inline-block mt-2"
                  >
                    View Privacy Policy →
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-brand-orange mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div>
                  <p className="font-body font-medium text-[16px] text-brand-brown mb-1">
                    Download Your Data
                  </p>
                  <p className="font-body text-[14px] text-gray-600">
                    Request a copy of your personal data
                  </p>
                  <button className="font-body text-[14px] text-brand-orange hover:underline inline-block mt-2 cursor-pointer">
                    Request Data Export →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-4">
          <Link
            href="/profile"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-body font-medium text-[16px] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            onClick={handleSave}
            className="px-6 py-3 rounded-lg bg-brand-orange text-white font-body font-medium text-[16px] hover:bg-orange-600 transition-colors cursor-pointer"
          >
            Save Settings
          </button>
        </div>
      </div>
    </section>
  );
};

/**
 * Settings Page Component
 */
export default function SettingsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SettingsHeroSection />
        <SettingsContentSection />
      </main>
      <Footer />
    </>
  );
}
