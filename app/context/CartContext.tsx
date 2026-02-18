"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/app/context/ToastContext";

// Types
export interface CartItem {
  id: string;
  type: "room" | "experience";
  title: string;
  image: string;
  location: string;
  dates: string;
  amenities: string[];
  price: number;
  actionLabel: string;
  adults?: number;
  children?: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartItem: (id: string, updates: Partial<CartItem>) => void;
  clearCart: () => void;
  cartTotal: number;
  isInCart: (title: string) => boolean;
}

// Default Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const { showToast } = useToast();

  // Load from localStorage on mount
  useEffect(() => {
    setMounted(true);
    try {
      const savedCart = localStorage.getItem("travixo_cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("travixo_cart", JSON.stringify(cartItems));
    }
  }, [cartItems, mounted]);

  const addToCart = (item: CartItem) => {
    const exists = cartItems.some((i) => i.title === item.title);
    if (exists) {
      showToast(`${item.title} is already in your cart`, "info");
      return;
    }

    setCartItems((prev) => [...prev, item]);
    showToast(`${item.title} added to cart!`, "success");
  };

  const removeFromCart = (id: string) => {
    const item = cartItems.find((i) => i.id === id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    if (item) {
      showToast(`${item.title} removed from cart`, "info");
    }
  };

  const updateCartItem = (id: string, updates: Partial<CartItem>) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  const isInCart = (title: string) => {
    return cartItems.some((item) => item.title === title);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItem, clearCart, cartTotal, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
