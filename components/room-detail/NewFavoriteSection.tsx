"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

/**
 * Interface for favorite room data
 */
interface FavoriteRoom {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

/**
 * Cart Icon for top-right actions
 */
const CartIcon = ({ className = "" }: { className?: string }) => (
  <div
    className={`w-full h-full ${className}`}
    style={{
      maskImage: 'url("/images/navbar/mdi_cart-outline.png")',
      maskSize: "contain",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      WebkitMaskImage: 'url("/images/navbar/mdi_cart-outline.png")',
      WebkitMaskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
    }}
  />
);

/**
 * FavoriteRoomCard Component
 * Displays a single room card with image, name, price, and description
 */
const FavoriteRoomCard: React.FC<{ room: FavoriteRoom }> = ({ room }) => {
  const router = useRouter();
  const { addToCart, isInCart, cartItems, removeFromCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isWishlisted = mounted && isInWishlist(room.id);
  const isInCartState = mounted && isInCart(room.name);

  const handleWishlistAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishlisted) {
      removeFromWishlist(room.id);
    } else {
      addToWishlist({
        id: room.id,
        slug: "/room-detail",
        title: room.name,
        description: room.description,
        image: room.image,
        price: parseInt(room.price.replace(/[^0-9]/g, "")) || 0,
        type: "room",
        rating: 5,
        reviewCount: 0,
        duration: "1 night",
        groupSize: "2 guests",
        location: "Resort",
      });
    }
  };

  const handleCartAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isInCartState) {
      addToCart({
        id: `${room.id}-${Date.now()}`,
        type: "room",
        title: room.name,
        image: room.image,
        location: "Luxury Resort",
        dates: new Date().toISOString().split("T")[0],
        amenities: ["Free Wifi", "Breakfast Included"],
        price: parseInt(room.price.replace(/[^0-9]/g, "")) || 0,
        actionLabel: "Customize",
      });
    } else {
      const itemToRemove = cartItems.find((item) => item.title === room.name);
      if (itemToRemove) {
        removeFromCart(itemToRemove.id);
      }
    }
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isInCartState) {
      addToCart({
        id: `${room.id}-${Date.now()}`,
        type: "room",
        title: room.name,
        image: room.image,
        location: "Luxury Resort",
        dates: new Date().toISOString().split("T")[0],
        amenities: ["Free Wifi", "Breakfast Included"],
        price: parseInt(room.price.replace(/[^0-9]/g, "")) || 0,
        actionLabel: "Customize",
      });
    }
    router.push("/cart");
  };

  return (
    <div className="bg-[#FFFCF5] rounded-xl overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)] group relative">
      {/* Room Image */}
      <div className="relative w-full h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Action Buttons - Slide in from right */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistAction}
            className={`group/icon w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${isWishlisted
              ? "bg-[#FF6E00]"
              : "bg-white hover:bg-[#FF6E00]"
              }`}
            aria-label="Add to wishlist"
          >
            <div
              className={`w-[24px] h-[24px] transition-colors duration-300 ${isWishlisted
                ? "bg-white"
                : "bg-[#4B3621] group-hover/icon:bg-white"
                }`}
              style={{
                maskImage: 'url("/images/icons/line-md_heart.png")',
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: 'url("/images/icons/line-md_heart.png")',
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            />
          </button>

          {/* Cart Button */}
          <button
            onClick={handleCartAction}
            className={`group/icon w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${isInCartState
              ? "bg-[#FF6E00] text-white"
              : "bg-white text-[#4B3621] hover:bg-[#FF6E00] hover:text-white"
              }`}
            aria-label="Add to cart"
          >
            <div className="scale-[0.8] w-6 h-6">
              <CartIcon
                className={isInCartState
                  ? "bg-white"
                  : "bg-[#4B3621] group-hover/icon:bg-white transition-colors duration-300"
                }
              />
            </div>
          </button>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-4 md:p-5">
        {/* Room Name */}
        <h3 className="font-display text-lg md:text-2xl italic font-semibold leading-7 md:leading-8 text-[#4B3621] mb-1 md:mb-2">
          {room.name}
        </h3>

        {/* Price */}
        <p className="font-display text-lg md:text-xl italic font-medium leading-[27px] text-[#4B3621] mb-2 md:mb-3">
          {room.price}{" "}
          <span className="text-sm md:text-base font-normal not-italic">/Night</span>
        </p>

        {/* Description */}
        <p className="text-sm md:text-lg font-normal leading-6 md:leading-7 text-[#4B3621] mb-3 md:mb-4 line-clamp-3">
          {room.description}
        </p>

        {/* Check Availability Link */}
        <button
          onClick={handleBookNow}
          className="inline-flex items-center gap-2 text-base md:text-xl font-normal text-[#4B3621] hover:text-[#FF6E00] transition-colors duration-300 group/link"
        >
          <span className="transition-colors duration-300">Book Now</span>
          {/* Arrow Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

/**
 * NewFavoriteSection Component
 *
 * Displays a section highlighting new favorite rooms with
 * a title, description, and 3-column grid of room cards.
 */
const NewFavoriteSection: React.FC = () => {
  // Favorite rooms data
  const favoriteRooms: FavoriteRoom[] = [
    {
      id: "serenity-suite",
      name: "Serenity Suite",
      price: "$45",
      image: "/images/room_detail/cards/room-1.png",
      description:
        "A tranquil retreat featuring floor-to-ceiling windows, plush bedding, and a private balcony with garden views.",
    },
    {
      id: "sunlight-terrace",
      name: "Sunlight Terrace Villa",
      price: "$45",
      image: "/images/room_detail/cards/detail-2.png",
      description:
        "Bask in natural light with an open-plan layout, terrace dining area, and premium furnishings throughout.",
    },
    {
      id: "tropical-zen",
      name: "Tropical Zen Retreat",
      price: "$45",
      image: "/images/room_detail/cards/detail-1.png",
      description:
        "Inspired by nature, this retreat blends tropical greenery with minimalist design for ultimate relaxation.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-12 md:px-16 lg:px-20">
        {/* ============================================
            Header - Title & Description
        ============================================ */}
        <div className="text-center mb-8 md:mb-12">
          {/* Section Title */}
          <h2 className="font-display text-xl md:text-[28px] lg:text-[32px] italic font-semibold leading-7 text-[#4B3621] mb-3 md:mb-4">
            The new favorite
          </h2>

          {/* Description */}
          <p className="text-sm md:text-lg lg:text-xl font-normal leading-6 md:leading-7 text-[#4B3621] max-w-[753px] mx-auto">
            Whether you&apos;re seeking calm, sunlight, or a touch of luxury,
            Lodr offers the perfect space to rest, recharge, and feel at home.
          </p>
        </div>

        {/* ============================================
            Room Cards Grid
        ============================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[18px]">
          {favoriteRooms.map((room) => (
            <FavoriteRoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewFavoriteSection;