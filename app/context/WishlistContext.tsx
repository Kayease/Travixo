"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { WishlistItem } from "@/components/wishlist/WishlistCard";
import { useToast } from "@/app/context/ToastContext";

interface WishlistContextType {
    wishlistItems: WishlistItem[];
    addToWishlist: (item: WishlistItem) => void;
    removeFromWishlist: (id: string) => void;
    isInWishlist: (id: string) => boolean;
    clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { showToast } = useToast();

    // Load from localStorage on mount
    useEffect(() => {
        try {
            const savedWishlist = localStorage.getItem("travixo_wishlist");
            if (savedWishlist) {
                setWishlistItems(JSON.parse(savedWishlist));
            }
        } catch {
            // Silently handle corrupted localStorage data
        }
        setIsLoaded(true);
    }, []);

    // Save to localStorage whenever wishlist changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("travixo_wishlist", JSON.stringify(wishlistItems));
        }
    }, [wishlistItems, isLoaded]);

    const addToWishlist = (item: WishlistItem) => {
        const exists = wishlistItems.some((i) => i.id === item.id);
        if (exists) {
            showToast(`${item.title} is already in your wishlist`, "info");
            return;
        }

        setWishlistItems((prev) => [...prev, item]);
        showToast(`${item.title} added to your wishlist`, "success");
    };

    const removeFromWishlist = (id: string) => {
        const item = wishlistItems.find((i) => i.id === id);
        setWishlistItems((prev) => prev.filter((item) => item.id !== id));
        if (item) {
            showToast(`${item.title} removed from your wishlist`, "info");
        }
    };

    const isInWishlist = (id: string) => {
        return wishlistItems.some((item) => item.id === id);
    };

    const clearWishlist = () => {
        setWishlistItems([]);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                clearWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};
