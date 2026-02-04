"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

/**
 * Button Component with bottom-to-top fill hover animation
 *
 * Primary: Orange background → White fill from bottom on hover
 * Outline: White background with orange border → Orange fill from bottom on hover
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-[12px] font-display italic font-normal transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange relative overflow-hidden group";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-[18px] leading-[24px]",
    lg: "px-8 py-3 text-xl",
  };

  // Variant-specific styles for the button container
  const variantStyles = {
    primary: "bg-brand-orange border border-brand-orange text-white",
    outline: "bg-white border border-brand-orange text-brand-orange",
    ghost: "text-brand-brown hover:bg-black/5 border-none",
  };

  // Variant-specific styles for the fill overlay (the animated element)
  const fillStyles = {
    primary: "bg-white", // White fill for primary buttons
    outline: "bg-brand-orange", // Orange fill for outline buttons
    ghost: "", // No fill for ghost buttons
  };

  // Variant-specific text color on hover
  const hoverTextStyles = {
    primary: "group-hover:text-brand-orange",
    outline: "group-hover:text-white",
    ghost: "",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Fill animation from bottom to top */}
      {variant !== "ghost" && (
        <span
          className={`absolute bottom-0 left-0 right-0 h-0 ${fillStyles[variant]} group-hover:h-full transition-all duration-300 ease-out`}
        />
      )}
      {/* Button text */}
      <span
        className={`relative z-10 ${hoverTextStyles[variant]} transition-colors duration-300`}
      >
        {children}
      </span>
    </button>
  );
};
