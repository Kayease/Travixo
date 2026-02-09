"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

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
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartTotal: number;
}

// Default Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("travixo_cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from local storage", error);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("travixo_cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      // Check if item already exists (optional, depends on requirements. For now allow duplicates or unique IDs)
      // If we want to prevent duplicates based on ID:
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        // Maybe update quantity? For now, just simplistic add.
        // If we want to allow adding the same tour multiple times, we might need unique IDs per instance.
        // Let's ensure the ID being passed is unique or handle it.
        // For this demo, let's append timestamp to ID if we want unique entries,
        // or just ignore if it's the exact same item ID from the source.
        // But the user might want to book multiple of the same.
        // Let's just add it.
        return [...prev, { ...item, id: `${item.id}-${Date.now()}` }];
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal }}
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
