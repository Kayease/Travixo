"use client";
/**
 * Custom SelectInput Component
 *
 * A fully custom dropdown to replace native <select> elements.
 * Native <select> dropdowns on Windows can overflow outside the viewport.
 * This component uses a custom options panel with smart viewport-aware
 * positioning (fixed positioning) to ensure the dropdown always stays
 * within the visible screen area.
 */
import React, { useState, useRef, useEffect, useCallback } from "react";

export interface SelectOption {
    label: string;
    value: string;
}

interface SelectInputProps {
    /** Placeholder label shown when no value is selected */
    label: string;
    /** Input name attribute */
    name: string;
    /** Currently selected value */
    value: string;
    /** Change handler — fires a synthetic event matching native select onChange */
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    /**
     * Options can be simple strings (used as both label and value)
     * or { label, value } objects.
     */
    options: (string | SelectOption)[];
    /** Additional CSS class names for the trigger button */
    className?: string;
    /** Visual variant */
    variant?: "default" | "settings";
}

const SelectInput: React.FC<SelectInputProps> = ({
    label,
    name,
    value,
    onChange,
    options,
    className = "",
    variant = "default",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

    // Normalise options to { label, value }
    const normalised: SelectOption[] = options.map((opt) =>
        typeof opt === "string" ? { label: opt, value: opt } : opt
    );

    // Find the currently-selected label
    const selectedOption = normalised.find((o) => o.value === value);
    const displayLabel = selectedOption ? selectedOption.label : "";

    /**
     * Calculate dropdown position using fixed positioning
     * so it always stays within the viewport.
     */
    const updatePosition = useCallback(() => {
        if (!triggerRef.current) return;

        const rect = triggerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        // Estimated max dropdown height
        const dropdownMaxHeight = Math.min(normalised.length * 44 + 16, 280);

        const spaceBelow = viewportHeight - rect.bottom;
        const spaceAbove = rect.top;

        const style: React.CSSProperties = {
            position: "fixed",
            width: rect.width,
            left: Math.min(rect.left, viewportWidth - rect.width - 8),
            maxHeight: 280,
            zIndex: 9999,
        };

        if (spaceBelow >= dropdownMaxHeight || spaceBelow >= spaceAbove) {
            // Open below
            style.top = rect.bottom + 4;
        } else {
            // Open above
            style.bottom = viewportHeight - rect.top + 4;
        }

        setDropdownStyle(style);
    }, [normalised.length]);

    // Close on outside click
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Reposition on scroll / resize while open
    useEffect(() => {
        if (!isOpen) return;

        updatePosition();
        const handleScrollOrResize = () => updatePosition();

        window.addEventListener("scroll", handleScrollOrResize, true);
        window.addEventListener("resize", handleScrollOrResize);

        return () => {
            window.removeEventListener("scroll", handleScrollOrResize, true);
            window.removeEventListener("resize", handleScrollOrResize);
        };
    }, [isOpen, updatePosition]);

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen]);

    /** Fire the onChange handler with a synthetic-like event */
    const handleSelect = (optValue: string) => {
        // Create a minimal synthetic event so callers using e.target.value still work
        const syntheticEvent = {
            target: { name, value: optValue },
        } as React.ChangeEvent<HTMLSelectElement>;

        onChange(syntheticEvent);
        setIsOpen(false);
    };

    const toggleOpen = () => {
        if (!isOpen) updatePosition();
        setIsOpen((prev) => !prev);
    };

    // Base styles per variant
    const triggerClasses =
        variant === "settings"
            ? `w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-[16px] text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-orange text-left flex items-center justify-between cursor-pointer transition-all duration-200 ${className}`
            : `w-full h-[50px] bg-white border border-brand-brown/20 rounded-xl px-4 text-brand-brown font-medium text-lg font-body outline-none focus:outline-none focus:ring-0 focus:border-brand-brown/20 text-left flex items-center justify-between cursor-pointer transition-all duration-200 ${className}`;

    return (
        <div ref={containerRef} className="relative">
            {/* Hidden native select for form compatibility / accessibility */}
            <select
                name={name}
                value={value}
                onChange={onChange}
                tabIndex={-1}
                aria-hidden="true"
                className="sr-only"
            >
                <option value="" disabled>
                    {label}
                </option>
                {normalised.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>

            {/* Custom trigger button */}
            <button
                ref={triggerRef}
                type="button"
                onClick={toggleOpen}
                className={triggerClasses}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className={value ? "text-brand-brown" : "text-brand-brown/60"}>
                    {displayLabel || label}
                </span>
                {/* Chevron */}
                <svg
                    className={`w-4 h-4 text-brand-brown/60 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {/* Options dropdown — rendered via portal-like fixed positioning */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="overflow-y-auto bg-white rounded-xl shadow-2xl shadow-brand-brown/10 border border-brand-brown/10 py-1"
                    style={dropdownStyle}
                    role="listbox"
                >
                    {normalised.map((opt) => {
                        const isSelected = opt.value === value;
                        return (
                            <button
                                key={opt.value}
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => handleSelect(opt.value)}
                                className={`
                  w-full text-left px-4 py-2.5 text-base font-body font-medium
                  transition-colors duration-150 cursor-pointer
                  ${isSelected
                                        ? "bg-brand-orange/10 text-brand-orange"
                                        : "text-brand-brown hover:bg-brand-orange/5 hover:text-brand-orange"
                                    }
                `}
                            >
                                {opt.label}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SelectInput;
