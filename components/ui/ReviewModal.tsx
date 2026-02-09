"use client";
import React, { useState } from "react";
import { Button } from "./Button";

interface ReviewFormData {
    rating: number;
    comment: string;
    name: string;
    email: string;
}

interface ReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: ReviewFormData) => void;
    title?: string;
    subTitle?: string;
}

const StarInput: React.FC<{
    rating: number;
    setRating: (rating: number) => void;
}> = ({ rating, setRating }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                >
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                            fill={star <= rating ? "#FF6E00" : "#E5E7EB"}
                            stroke={star <= rating ? "#FF6E00" : "#E5E7EB"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            ))}
        </div>
    );
};

export const ReviewModal: React.FC<ReviewModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title = "Write a Review",
    subTitle = "Share your experience with us",
}) => {
    const [formData, setFormData] = useState<ReviewFormData>({
        rating: 0,
        comment: "",
        name: "",
        email: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ReviewFormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const validate = () => {
        const newErrors: Partial<Record<keyof ReviewFormData, string>> = {};
        if (formData.rating === 0) newErrors.rating = "Please select a rating";
        if (!formData.comment.trim()) newErrors.comment = "Please write a comment";
        if (!formData.name.trim()) newErrors.name = "Please enter your name";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Please enter a valid email";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            onSubmit(formData);
            setIsSubmitting(false);
            onClose();
            // Reset form
            setFormData({
                rating: 0,
                comment: "",
                name: "",
                email: "",
            });
        }
    };

    return (
        <div className="fixed inset-0 z-[2001] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#FFFCF5] shrink-0">
                    <div>
                        <h2 className="font-display italic font-semibold text-2xl text-brand-brown uppercase">
                            {title}
                        </h2>
                        <p className="font-body text-sm text-brand-brown/60 mt-1">
                            {subTitle}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-brand-brown/40 hover:text-brand-brown transition-colors rounded-full hover:bg-black/5"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 space-y-4 overflow-y-auto">
                    {/* Rating */}
                    <div className="flex flex-col items-center gap-1">
                        <span className="font-display italic font-medium text-lg text-brand-brown">
                            How would you rate your experience?
                        </span>
                        <StarInput
                            rating={formData.rating}
                            setRating={(r) => setFormData({ ...formData, rating: r })}
                        />
                        {errors.rating && (
                            <p className="text-red-500 text-xs mt-1">{errors.rating}</p>
                        )}
                    </div>

                    {/* Comment */}
                    <div className="space-y-2">
                        <label className="font-body font-medium text-sm text-brand-brown">
                            Your Review
                        </label>
                        <textarea
                            value={formData.comment}
                            onChange={(e) =>
                                setFormData({ ...formData, comment: e.target.value })
                            }
                            placeholder="Tell us about your experience..."
                            className={`w-full h-24 p-3 rounded-lg border ${errors.comment
                                ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                : "border-gray-200 focus:border-brand-brown/40 focus:ring-brand-brown/5"
                                } outline-none focus:ring-4 transition-all resize-none font-body text-brand-brown placeholder:text-gray-400`}
                        />
                        {errors.comment && (
                            <p className="text-red-500 text-xs">{errors.comment}</p>
                        )}
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-2">
                            <label className="font-body font-medium text-sm text-brand-brown">
                                Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                placeholder="John Doe"
                                className={`w-full p-2.5 rounded-lg border ${errors.name
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                    : "border-gray-200 focus:border-brand-brown/40 focus:ring-brand-brown/5"
                                    } outline-none focus:ring-4 transition-all font-body text-brand-brown placeholder:text-gray-400`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs">{errors.name}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="font-body font-medium text-sm text-brand-brown">
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                placeholder="john@example.com"
                                className={`w-full p-2.5 rounded-lg border ${errors.email
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                    : "border-gray-200 focus:border-brand-brown/40 focus:ring-brand-brown/5"
                                    } outline-none focus:ring-4 transition-all font-body text-brand-brown placeholder:text-gray-400`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs">{errors.email}</p>
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                        <Button
                            type="button"
                            onClick={onClose}
                            disabled={isSubmitting}
                            variant="ghost"
                            className="px-6 py-2.5 !rounded-lg"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            variant="primary"
                            className="px-8 py-2.5 !rounded-lg flex items-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg
                                        className="animate-spin h-4 w-4 text-brand-orange"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Submitting
                                </>
                            ) : (
                                "Submit Review"
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;
