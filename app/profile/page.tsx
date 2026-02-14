"use client";
import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "../context/ToastContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Profile Hero Section
 */
const ProfileHeroSection = () => {
  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-[98px] bg-[#FFF7E5]"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="text-center">
          <h1 className="font-display italic font-semibold text-2xl md:text-[28px] leading-[30px] md:leading-[37px] text-brand-brown mb-4 md:mb-6">
            My Profile
          </h1>
          <p className="font-body font-medium text-sm md:text-[18px] leading-[24px] md:leading-[30px] text-brand-brown max-w-[780px] mx-auto px-4">
            Manage your account information and preferences
          </p>
        </div>
      </div>
    </section>
  );
};

/**
 * Profile Content Section
 */
const ProfileContentSection = () => {
  const [activeTab, setActiveTab] = useState<
    "profile" | "bookings" | "security"
  >("profile");
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const { showToast } = useToast();

  // Main profile data source
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    nationality: "United States",
    address: "123 Main Street",
    city: "New York",
    country: "United States",
    postalCode: "10001",
  });

  // Temporary state for editing (must be declared before the useEffect that uses setFormData)
  const [formData, setFormData] = useState(profileData);

  // Load data from localStorage on mount
  React.useEffect(() => {
    const savedData = localStorage.getItem("userProfile");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setProfileData(parsed);
        setFormData(parsed);
      } catch (e) {
        void e; // Silently handle corrupted localStorage data
      }
    } else {
      // If no profile data, check if we have email from login
      const savedEmail = localStorage.getItem("userEmail");
      if (savedEmail) {
        setProfileData(prev => ({ ...prev, email: savedEmail }));
        setFormData(prev => ({ ...prev, email: savedEmail }));
      }
    }
  }, []);

  // Password state
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // 2FA state
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [avatarImage, setAvatarImage] = useState<string | null>(null);

  // Load secondary data from localStorage
  React.useEffect(() => {
    const saved2FA = localStorage.getItem("is2FAEnabled");
    if (saved2FA) setIs2FAEnabled(saved2FA === "true");

    const savedAvatar = localStorage.getItem("userAvatar");
    if (savedAvatar) setAvatarImage(savedAvatar);
  }, []);

  const handleToggle2FA = useCallback(() => {
    setIs2FAEnabled((prev) => {
      const newState = !prev;
      localStorage.setItem("is2FAEnabled", newState.toString());
      showToast(
        newState
          ? "Two-Factor Authentication Enabled!"
          : "Two-Factor Authentication Disabled!",
        newState ? "success" : "info",
      );
      return newState;
    });
  }, [showToast]);

  const handleAvatarUpload = useCallback(() => {
    // Mock image selection
    showToast("Opening file picker...", "info");
    setTimeout(() => {
      const mockAvatars = [
        "/images/room/cards/testimonial-1.png",
        "/images/room/cards/testimonial-2.png",
        "/images/room/cards/testimonial-3.png",
        "/images/room/cards/testimonial-4.png"
      ];
      // Demo: cycle through avatars deterministically
      const currentIdx = avatarImage ? mockAvatars.indexOf(avatarImage) : -1;
      const nextAvatar = mockAvatars[(currentIdx + 1) % mockAvatars.length];
      setAvatarImage(nextAvatar);
      localStorage.setItem("userAvatar", nextAvatar);
      showToast("Avatar Updated!", "success");
    }, 1000);
  }, [showToast, avatarImage]);

  const handleLogout = useCallback(() => {
    showToast("Logged out successfully.", "success");
    setTimeout(() => router.push("/login"), 1000);
  }, [showToast, router]);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleEditClick = useCallback(() => {
    setFormData(profileData); // Reset form to current data
    setIsEditing(true);
  }, [profileData]);

  const handleCancel = useCallback(() => {
    setFormData(profileData); // Revert changes
    setIsEditing(false);
  }, [profileData]);

  const handleSave = useCallback(() => {
    setProfileData(formData); // Commit changes
    localStorage.setItem("userProfile", JSON.stringify(formData));
    setIsEditing(false);
    showToast("Profile Updated Successfully!", "success");
  }, [formData, showToast]);

  const handleUpdatePassword = useCallback(() => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showToast("New passwords do not match!", "error");
      return;
    }
    if (!passwordData.currentPassword || !passwordData.newPassword) {
      showToast("Please fill in all password fields.", "warning");
      return;
    }
    // Simulate API call
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    showToast("Password Updated Successfully!", "success");
  }, [passwordData, showToast]);

  // Mock booking data
  const bookings = [
    {
      id: "BK-2026-001",
      destination: "Paris, France",
      date: "March 15 - 22, 2026",
      status: "Confirmed",
      price: "$2,499",
      image: "/images/travixo-tours/cards/community-2.png",
      link: "/paris",
    },
    {
      id: "BK-2026-002",
      destination: "Bali, Indonesia",
      date: "June 10 - 20, 2026",
      status: "Pending",
      price: "$1,899",
      image: "/images/travixo-tours/cards/community-4.png",
      link: "#",
    },
    {
      id: "BK-2025-003",
      destination: "London, UK",
      date: "December 5 - 12, 2025",
      status: "Completed",
      price: "$1,599",
      image: "/images/travixo-tours/cards/community-3.png",
      link: "#",
    },
  ];

  // Get initials for avatar — memoized since it depends on profileData
  const getInitials = useMemo(() => {
    return `${profileData.firstName.charAt(0)}${profileData.lastName.charAt(0)}`.toUpperCase();
  }, [profileData.firstName, profileData.lastName]);

  return (
    <section
      className="relative w-full py-12 lg:py-[80px] bg-[#FFFCF5]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-[280px] shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
              {/* Profile Avatar */}
              <div className="text-center mb-6">
                <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 group">
                  <div className="w-full h-full rounded-full bg-brand-orange flex items-center justify-center text-white font-display text-2xl md:text-3xl overflow-hidden relative border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {avatarImage ? (
                      <Image
                        src={avatarImage}
                        alt="Profile"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 112px"
                      />
                    ) : (
                      getInitials
                    )}
                  </div>
                  <button
                    onClick={handleAvatarUpload}
                    className="absolute bottom-0 right-0 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-50 transition-all duration-300 cursor-pointer border-2 border-brand-orange/20 hover:scale-110 z-20"
                    title="Change Avatar"
                  >
                    <svg
                      className="w-5 h-5 text-brand-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
                <h3 className="font-body font-semibold text-[18px] text-brand-brown">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="font-body text-[14px] text-gray-600">
                  {profileData.email}
                </p>
              </div>

              {/* Navigation Tabs */}
              <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`shrink-0 lg:w-full flex items-center px-4 py-2 lg:py-3 rounded-lg font-body font-medium text-[14px] md:text-[16px] transition-colors cursor-pointer whitespace-nowrap ${activeTab === "profile"
                    ? "bg-brand-orange text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <svg
                    className="w-5 h-5 mr-2 md:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Profile Info
                </button>

                <button
                  onClick={() => setActiveTab("bookings")}
                  className={`shrink-0-full flex items-center px-4 py-2 lg:py-3 rounded-lg font-body font-medium text-[14px] md:text-[16px] transition-colors cursor-pointer whitespace-nowrap ${activeTab === "bookings"
                    ? "bg-brand-orange text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <svg
                    className="w-5 h-5 mr-2 md:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  My Bookings
                </button>

                <button
                  onClick={() => setActiveTab("security")}
                  className={`shrink-0 lg:w-full flex items-center px-4 py-2 lg:py-3 rounded-lg font-body font-medium text-[14px] md:text-[16px] transition-colors cursor-pointer whitespace-nowrap ${activeTab === "security"
                    ? "bg-brand-orange text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <svg
                    className="w-5 h-5 mr-2 md:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Security
                </button>

                <Link
                  href="/settings"
                  className="shrink-0 lg:w-full flex items-center px-4 py-2 lg:py-3 rounded-lg font-body font-medium text-[14px] md:text-[16px] text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  <svg
                    className="w-5 h-5 mr-2 md:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </Link>
              </nav>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full mt-4 lg:mt-6 flex items-center justify-center px-4 py-2 lg:py-3 rounded-lg border border-red-500 text-red-500 font-body font-medium text-[14px] md:text-[16px] hover:bg-red-50 transition-colors cursor-pointer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow-sm p-4 md:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="font-display italic font-semibold text-2xl md:text-[28px] text-brand-brown">
                    Personal Information
                  </h2>
                  {!isEditing ? (
                    <button
                      onClick={handleEditClick}
                      className="flex items-center justify-center w-full sm:w-auto px-4 py-2 rounded-lg border border-brand-orange text-brand-orange font-body font-medium text-[14px] hover:bg-orange-50 transition-colors cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button
                        onClick={handleCancel}
                        className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-body font-medium text-[14px] hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-brand-orange text-white font-body font-medium text-[14px] hover:bg-orange-600 transition-colors cursor-pointer"
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  {/* Nationality */}
                  <div>
                    <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                      Nationality
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === "bookings" && (
              <div className="space-y-4 md:space-y-6">
                <h2 className="font-display italic font-semibold text-2xl md:text-[28px] text-brand-brown">
                  My Bookings
                </h2>

                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-xl shadow-sm p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6"
                  >
                    {/* Image */}
                    <div className="relative w-full md:w-[200px] h-[160px] md:h-[150px] rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={booking.image}
                        alt={booking.destination}
                        fill
                        sizes="(max-width: 768px) 100vw, 200px"
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                          <div>
                            <h3 className="font-body font-semibold text-[18px] md:text-[20px] text-brand-brown mb-1">
                              {booking.destination}
                            </h3>
                            <p className="font-body text-[13px] md:text-[14px] text-gray-600">
                              Booking ID: {booking.id}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full font-body text-[12px] font-medium self-start ${booking.status === "Confirmed"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "Pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-gray-100 text-gray-700"
                              }`}
                          >
                            {booking.status}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mb-4">
                          <div className="flex items-center text-gray-600">
                            <svg
                              className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="font-body text-[13px] md:text-[14px]">
                              {booking.date}
                            </span>
                          </div>
                          <div className="flex items-center text-brand-orange">
                            <span className="font-body font-semibold text-[16px] md:text-[18px]">
                              {booking.price}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 md:gap-3">
                        <Link
                          href={booking.link}
                          className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-brand-orange text-brand-orange font-body font-medium text-[13px] md:text-[14px] hover:bg-orange-50 transition-colors cursor-pointer text-center"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="bg-white rounded-xl shadow-sm p-4 md:p-8">
                <h2 className="font-display italic font-semibold text-2xl md:text-[28px] text-brand-brown mb-6">
                  Security Settings
                </h2>

                {/* Change Password */}
                <div className="mb-8 pb-8 border-b">
                  <h3 className="font-body font-semibold text-[18px] md:text-[20px] text-brand-brown mb-4">
                    Change Password
                  </h3>
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        name="currentPassword"
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                        placeholder="Enter current password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        placeholder="Enter new password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-[14px] text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        placeholder="Confirm new password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>
                    <button
                      onClick={handleUpdatePassword}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-orange text-white font-body font-medium text-[16px] hover:bg-orange-600 transition-colors cursor-pointer"
                    >
                      Update Password
                    </button>
                  </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="mb-8 pb-8 border-b">
                  <h3 className="font-body font-semibold text-[18px] md:text-[20px] text-brand-brown mb-2">
                    Two-Factor Authentication
                  </h3>
                  <p className="font-body text-[14px] text-gray-600 mb-4">
                    Add an extra layer of security to your account
                  </p>
                  <button
                    onClick={handleToggle2FA}
                    className={`w-full sm:w-auto px-6 py-3 rounded-lg border font-body font-medium text-[16px] transition-colors cursor-pointer ${is2FAEnabled
                      ? "border-green-600 text-green-600 hover:bg-green-50"
                      : "border-brand-orange text-brand-orange hover:bg-orange-50"
                      }`}
                  >
                    {is2FAEnabled ? "2FA Enabled" : "Enable 2FA"}
                  </button>
                </div>


              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Profile Page Component
 */
export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main>
        <ProfileHeroSection />
        <ProfileContentSection />
      </main>
      <Footer />
    </>
  );
}

