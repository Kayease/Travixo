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
const CartIcon = () => (
  <svg
    width="25"
    height="20"
    viewBox="0 0 25 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.75 12.5H10V3.75H8.75C8.06 3.75 7.5 4.3098 7.5 5V11.25C7.5 11.9402 8.06 12.5 8.75 12.5ZM22.5 11.25V5C22.5 4.3098 21.94 3.75 21.25 3.75H20V12.5H21.25C21.94 12.5 22.5 11.9402 22.5 11.25ZM24.38 15H5V0.625C5 0.2797 4.72 0 4.38 0H0.62C0.28 0 0 0.2797 0 0.625V1.875C0 2.2203 0.28 2.5 0.62 2.5H2.5V16.875C2.5 17.2203 2.78 17.5 3.12 17.5H6.36C6.29 17.6965 6.25 17.9047 6.25 18.125C6.25 19.1605 7.09 20 8.12 20C9.16 20 10 19.1605 10 18.125C10 17.9047 9.96 17.6965 9.89 17.5H17.61C17.54 17.6965 17.5 17.9047 17.5 18.125C17.5 19.1605 18.34 20 19.38 20C20.41 20 21.25 19.1605 21.25 18.125C21.25 17.9047 21.21 17.6965 21.14 17.5H24.38C24.72 17.5 25 17.2203 25 16.875V15.625C25 15.2797 24.72 15 24.38 15ZM18.75 3.75V1.875C18.75 0.8395 17.91 0 16.88 0H13.12C12.09 0 11.25 0.8395 11.25 1.875V12.5H18.75V3.75ZM16.88 3.75H13.12V1.875H16.88V3.75Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * FavoriteRoomCard Component
 * Displays a single room card with image, name, price, and description
 */
const FavoriteRoomCard: React.FC<{ room: FavoriteRoom }> = ({ room }) => {
  const router = useRouter();
  const { addToCart, isInCart } = useCart();
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
            <div className="scale-[0.6]">
              <CartIcon />
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
        <Link
          href="/room-detail"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-base md:text-xl font-normal text-[#4B3621] hover:text-[#FF6E00] transition-colors duration-300 group/link"
        >
          <span className="transition-colors duration-300">Check Availability</span>
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
        </Link>
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
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-20">
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