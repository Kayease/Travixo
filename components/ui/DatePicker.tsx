"use client";
/** Calendar-style date picker for tour and stay search. */
import React, { useState, useRef, useEffect, useCallback } from "react";

export interface DateRange {
  from: string | null;
  to: string | null;
}

interface DatePickerProps {
  value: string | DateRange;
  onChange: (date: string | DateRange) => void;
  placeholder?: string;
  minDate?: string;
  maxDate?: string;
  className?: string;
  mode?: "single" | "range";
  variant?: "default" | "transparent";
  size?: "default" | "sm";
  align?: "left" | "right";
  hideIcon?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  externalTriggerRef?: React.RefObject<HTMLElement>;
  bookedDates?: string[];
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
  variant = "default",
  className = "",
  mode = "single",
  size = "default",
  align = "left",
  hideIcon = false,
  open,
  onOpenChange,
  externalTriggerRef,
  bookedDates = [],
}: DatePickerProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalIsOpen;

  const setIsOpen = useCallback((value: boolean) => {
    if (!isControlled) {
      setInternalIsOpen(value);
    }
    onOpenChange?.(value);
  }, [isControlled, onOpenChange]);

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

  // Helper to parse date string YYYY-MM-DD to Date object
  const parseDate = (dateStr: string | null) => {
    if (!dateStr) return null;
    const parts = dateStr.split("-");
    return new Date(
      parseInt(parts[0]),
      parseInt(parts[1]) - 1,
      parseInt(parts[2]),
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        (!externalTriggerRef?.current || !externalTriggerRef.current.contains(event.target as Node))
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [externalTriggerRef, setIsOpen]);

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

  // Range specific logic
  const getRangeState = (day: number) => {
    if (mode === "single" || typeof value === "string")
      return {
        isSelected: false,
        isRangeStart: false,
        isRangeEnd: false,
        isInRange: false,
      };

    const date = new Date(currentYear, currentMonth, day);
    date.setHours(0, 0, 0, 0);

    const fromDate = value?.from ? parseDate(value.from) : null;
    const toDate = value?.to ? parseDate(value.to) : null;

    if (fromDate) fromDate.setHours(0, 0, 0, 0);
    if (toDate) toDate.setHours(0, 0, 0, 0);

    const isRangeStart = fromDate
      ? date.getTime() === fromDate.getTime()
      : false;
    const isRangeEnd = toDate ? date.getTime() === toDate.getTime() : false;
    const isInRange =
      fromDate && toDate ? date > fromDate && date < toDate : false;

    return { isRangeStart, isRangeEnd, isInRange };
  };

  // Check if date is selected (Single selection)
  const isDateSelected = (day: number) => {
    if (mode === "range") return false;
    const selectedDate = typeof value === "string" ? parseDate(value) : null;
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
    const selectedDateObj = new Date(currentYear, currentMonth, day);

    if (mode === "single") {
      onChange(dateStr);
      setIsOpen(false);
    } else {
      // Range Mode
      const currentRange =
        typeof value === "object" && value ? value : { from: null, to: null };

      let newRange = { ...currentRange };

      if (!newRange.from || (newRange.from && newRange.to)) {
        // Start new range
        newRange = { from: dateStr, to: null };
      } else {
        // Have start, selecting end
        const fromDate = parseDate(newRange.from);
        if (fromDate && selectedDateObj < fromDate) {
          // Clicked before start, reset start
          newRange = { from: dateStr, to: null };
        } else {
          // Valid end date
          newRange = { ...newRange, to: dateStr };
          // Auto close when range is complete? distinct choice. Let's keep open or close.
          // Usually better to keep open or close after Short delay. Let's close for now to be snappy.
          setIsOpen(false);
        }
      }
      onChange(newRange);
    }
  };

  // Format display value
  const formatDisplayValue = () => {
    if (mode === "range") {
      const range =
        typeof value === "object" && value ? value : { from: null, to: null };
      if (!range.from) return "";

      const fromDate = parseDate(range.from);
      const toDate = range.to ? parseDate(range.to) : null;

      const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
      };
      const fromStr = fromDate?.toLocaleDateString("en-US", options);

      if (toDate) {
        const toStr = toDate.toLocaleDateString("en-US", options);
        return `${fromStr} - ${toStr}`;
      }
      return fromStr;
    }

    const selectedDate = typeof value === "string" ? parseDate(value) : null;
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
      days.push(<div key={`empty-${i}`} className={size === "sm" ? "w-8 h-8" : "w-10 h-10"} />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const disabled = isDateDisabled(day);
      const today = isToday(day);
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const isBooked = bookedDates.includes(dateStr);

      let buttonClass = "";

      if (mode === "single") {
        const selected = isDateSelected(day);
        buttonClass = `
          ${size === "sm" ? "w-8 h-8" : "w-10 h-10"} rounded-full flex items-center justify-center text-sm font-medium
          transition-all duration-200 cursor-pointer
          ${disabled
            ? "text-gray-300 cursor-not-allowed"
            : isBooked
              ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
              : selected
                ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                : today
                  ? "bg-brand-orange/10 text-brand-orange border border-brand-orange"
                  : "text-brand-brown hover:bg-brand-orange/10 hover:text-brand-orange"
          }
        `;
      } else {
        // Range Logic styling
        const { isRangeStart, isRangeEnd, isInRange } = getRangeState(day);
        const isSelected = isRangeStart || isRangeEnd;

        buttonClass = `
          ${size === "sm" ? "w-8 h-8" : "w-10 h-10"} flex items-center justify-center text-sm font-medium
          transition-all duration-200 cursor-pointer relative z-10
          ${isRangeStart ? "rounded-l-full rounded-r-none" : ""} 
          ${isRangeEnd ? "rounded-r-full rounded-l-none" : ""}
          ${!isRangeStart && !isRangeEnd && !isInRange ? "rounded-full" : ""}
          ${isInRange ? "bg-brand-orange/10 !rounded-none" : ""}
          ${disabled
            ? "text-gray-300 cursor-not-allowed"
            : isBooked
              ? "bg-red-500 text-white rounded-full shadow-lg shadow-red-500/30"
              : isSelected
                ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30 rounded-full" // Force round selection
                : today && !isInRange
                  ? "bg-brand-orange/10 text-brand-orange border border-brand-orange"
                  : "text-brand-brown hover:bg-brand-orange/10 hover:text-brand-orange"
          }
        `;
      }

      days.push(
        <button
          key={day}
          type="button"
          disabled={disabled}
          onClick={() => handleDateSelect(day)}
          className={buttonClass}
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
          {value && (typeof value === "string" || value.from)
            ? formatDisplayValue()
            : placeholder}
        </span>

        {/* Calendar Icon */}
        {!hideIcon && (
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
            absolute top-full mt-2 z-[1100]
            ${align === "right" ? "right-0" : "left-0"}
            bg-white rounded-2xl shadow-2xl shadow-brand-brown/10
            border border-brand-brown/10 overflow-hidden
            animate-in fade-in slide-in-from-top-2 duration-200
            iphone-14-pro-max-small-picker
          `}
          style={{ minWidth: size === "sm" ? "260px" : "320px" }}
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
                      className={`${size === "sm" ? "w-8 h-6" : "w-10 h-8"} flex items-center justify-center text-xs font-semibold text-brand-brown/50 uppercase`}
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
                    if (mode === "single") {
                      onChange(dateStr);
                    } else {
                      onChange({ from: dateStr, to: null });
                    }
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
                      if (mode === "single") {
                        onChange("");
                      } else {
                        onChange({ from: null, to: null });
                      }
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
      <style jsx>{`
        /* iPhone 14 Pro Max Portrait */
        @media only screen and (min-width: 430px) and (max-width: 430px) and (min-height: 932px) and (max-height: 932px) {
          .iphone-14-pro-max-small-picker {
            transform: scale(0.85) !important;
            transform-origin: top ${align === "right" ? "right" : "left"} !important;
          }
        }
        /* iPhone 14 Pro Max Landscape */
        @media only screen and (min-width: 932px) and (max-width: 932px) and (min-height: 430px) and (max-height: 430px) {
          .iphone-14-pro-max-small-picker {
            transform: scale(0.7) !important;
            transform-origin: top ${align === "right" ? "right" : "left"} !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DatePicker;
