"use client";
/** Calendar-style date picker for tour and stay search. */
import React, { useState, useRef, useEffect } from "react";

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  placeholder?: string;
  minDate?: string;
  maxDate?: string;
  className?: string;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

/**
 * Custom DatePicker Component
 * A beautiful, reusable datepicker with calendar dropdown
 * Matches the Travixo design system with brand colors
 */
export const DatePicker = ({
  value,
  onChange,
  placeholder = "Select Date",
  minDate,
  maxDate,
  variant,
  className = "",
}: DatePickerProps & { variant?: "default" | "transparent" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate years array for year picker (current year ± 10 years)
  const getYearsRange = () => {
    const years = [];
    const startYear = currentYear - 10;
    const endYear = currentYear + 10;
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  // Parse selected date
  const selectedDate = value ? new Date(value) : null;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get days in month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Navigate months
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Check if date is disabled
  const isDateDisabled = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);

    if (minDate && date < new Date(minDate)) return true;
    if (maxDate && date > new Date(maxDate)) return true;

    return false;
  };

  // Check if date is selected
  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };

  // Check if date is today
  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  };

  // Handle date selection
  const handleDateSelect = (day: number) => {
    if (isDateDisabled(day)) return;

    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    onChange(dateStr);
    setIsOpen(false);
  };

  // Format display value
  const formatDisplayValue = () => {
    if (!selectedDate) return "";
    return selectedDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Generate calendar grid
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10" />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const disabled = isDateDisabled(day);
      const selected = isDateSelected(day);
      const today = isToday(day);

      days.push(
        <button
          key={day}
          type="button"
          disabled={disabled}
          onClick={() => handleDateSelect(day)}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
            transition-all duration-200 cursor-pointer
            ${disabled
              ? "text-gray-300 cursor-not-allowed"
              : selected
                ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                : today
                  ? "bg-brand-orange/10 text-brand-orange border border-brand-orange"
                  : "text-brand-brown hover:bg-brand-orange/10 hover:text-brand-orange"
            }
          `}
        >
          {day}
        </button>,
      );
    }

    return days;
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Input Field */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={
          variant === "transparent"
            ? "w-full bg-transparent border-none p-0 flex items-center justify-between text-brand-brown font-normal text-[16px] md:text-[18px] leading-[28px] font-body outline-none focus:outline-none !focus-visible:ring-0 !focus-visible:shadow-none !focus-visible:outline-none focus:shadow-none cursor-pointer"
            : `w-full h-[50px] bg-white border border-brand-brown/20 rounded-xl px-4 flex items-center justify-between gap-3 text-brand-brown font-medium text-lg font-body outline-none focus:outline-none focus:ring-0 focus:border-brand-brown/20 !focus-visible:ring-0 !focus-visible:shadow-none !focus-visible:outline-none focus:shadow-none transition-all duration-200 cursor-pointer`
        }
      >
        <span className={value ? "text-brand-brown" : "text-brand-brown/60"}>
          {value ? formatDisplayValue() : placeholder}
        </span>

        {/* Calendar Icon - Hidden for transparent variant if desired, or styled differently. Keeping for dropdown indication but maybe smaller/subtle? */}
        {variant !== "transparent" && (
          <svg
            className={`w-5 h-5 text-brand-brown/60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
      </button>

      {/* Calendar Dropdown - high z-index so it appears above hero and all sections */}
      {isOpen && (
        <div
          className={`
            absolute top-full left-0 mt-2 z-10002
            bg-white rounded-2xl shadow-2xl shadow-brand-brown/10
            border border-brand-brown/10 overflow-hidden
            animate-in fade-in slide-in-from-top-2 duration-200
          `}
          style={{ minWidth: "320px" }}
        >
          {/* Header with month/year navigation */}
          <div className="bg-linear-to-r from-brand-orange to-amber-500 p-4">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={goToPreviousMonth}
                className="p-2 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="text-center flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowMonthPicker(!showMonthPicker);
                    setShowYearPicker(false);
                  }}
                  className="text-white font-display italic font-semibold text-lg hover:text-white/90 transition-colors cursor-pointer"
                >
                  {MONTHS[currentMonth]} ▾
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowYearPicker(!showYearPicker);
                    setShowMonthPicker(false);
                  }}
                  className="text-white/80 text-sm font-body hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  {currentYear} ▾
                </button>
              </div>

              <button
                type="button"
                onClick={goToNextMonth}
                className="p-2 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Year Picker View */}
          {showYearPicker ? (
            <div className="p-4">
              <div className="grid grid-cols-4 gap-2 max-h-[280px] overflow-y-auto">
                {getYearsRange().map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => {
                      setCurrentYear(year);
                      setShowYearPicker(false);
                    }}
                    className={`
                      py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                      ${year === currentYear
                        ? "bg-brand-orange text-white shadow-md"
                        : year === new Date().getFullYear()
                          ? "bg-brand-orange/10 text-brand-orange border border-brand-orange"
                          : "text-brand-brown hover:bg-brand-orange/10 hover:text-brand-orange"
                      }
                    `}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          ) : showMonthPicker ? (
            /* Month Picker View */
            <div className="p-4">
              <div className="grid grid-cols-3 gap-3">
                {MONTHS.map((month, index) => (
                  <button
                    key={month}
                    type="button"
                    onClick={() => {
                      setCurrentMonth(index);
                      setShowMonthPicker(false);
                    }}
                    className={`
                      py-2 px-1 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                      ${index === currentMonth
                        ? "bg-brand-orange text-white shadow-md"
                        : index === new Date().getMonth() &&
                          currentYear === new Date().getFullYear()
                          ? "bg-brand-orange/10 text-brand-orange border border-brand-orange"
                          : "text-brand-brown hover:bg-brand-orange/10 hover:text-brand-orange"
                      }
                    `}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Calendar Body */}
              <div className="p-4">
                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {DAYS.map((day) => (
                    <div
                      key={day}
                      className="w-10 h-8 flex items-center justify-center text-xs font-semibold text-brand-brown/50 uppercase"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {renderCalendarDays()}
                </div>
              </div>

              {/* Footer with quick actions */}
              <div className="border-t border-brand-brown/10 px-4 py-3 flex items-center justify-between bg-gray-50/50">
                <button
                  type="button"
                  onClick={() => {
                    const today = new Date();
                    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
                    onChange(dateStr);
                    setIsOpen(false);
                  }}
                  className="text-sm font-medium text-brand-orange hover:text-brand-orange/80 transition-colors cursor-pointer"
                >
                  Today
                </button>

                {value && (
                  <button
                    type="button"
                    onClick={() => {
                      onChange("");
                      setIsOpen(false);
                    }}
                    className="text-sm font-medium text-brand-brown/50 hover:text-brand-brown transition-colors cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
