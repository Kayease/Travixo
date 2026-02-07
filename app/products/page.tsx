/**
 * Products Listing Page
 * 
 * Main products listing page showing available products.
 * 
 * Route: /products
 */

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Metadata for SEO
export const metadata = {
    title: 'Products & Experiences | Travixo - Travel & Tour',
    description: 'Explore our curated collection of products and experiences around the world.',
};

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#FFFCF5]">
                <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-12">
                    <h1 className="font-display italic font-semibold text-4xl text-brand-brown mb-8">
                        Products & Experiences
                    </h1>

                    <div className="bg-white border border-brand-brown/20 rounded-xl p-8 text-center">
                        <p className="font-body text-lg text-brand-brown mb-6">
                            To view product details, try accessing a specific product:
                        </p>
                        <Link
                            href="/products/bangkok-temple-tour"
                            className="inline-block bg-brand-orange text-white px-6 py-3 rounded-xl font-body font-semibold hover:bg-brand-orange/90 transition-colors"
                        >
                            View Sample Product
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
