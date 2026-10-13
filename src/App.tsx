/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Collections } from './components/Collections';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { SpecialOfferBanner } from './components/SpecialOfferBanner';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductModal } from './components/ProductModal';
import { BookingModal } from './components/BookingModal';
import { IntroLoader } from './components/IntroLoader';
import { CustomCursor } from './components/CustomCursor';
import { Product } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const handleSelectCategory = (categorySlug: Product['category']) => {
    setActiveCategoryFilter(categorySlug);
    const featuredElement = document.getElementById('featured');
    if (featuredElement) {
      featuredElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8] font-sans selection:bg-[#D4AF37]/30 selection:text-[#F1D97A]">
      {/* Intro Loader Animation */}
      <IntroLoader />

      {/* Desktop Ambient Gold Cursor */}
      <CustomCursor />

      {/* Sticky Luxury Navbar */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 2. Google Rating & Verified Trust Bar */}
        <TrustBar />

        {/* 3. Collections & Categories Grid */}
        <Collections onSelectCategory={handleSelectCategory} />

        {/* 4. Featured Products with PKR Pricing & WhatsApp Ordering */}
        <FeaturedProducts
          onOpenProduct={(product) => setSelectedProduct(product)}
          activeFilter={activeCategoryFilter}
          onFilterChange={(filter) => setActiveCategoryFilter(filter)}
        />

        {/* 5. Why Choose Wear Zone Services */}
        <ServicesSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 6. Verified Google Reviews Carousel */}
        <ReviewsSection />

        {/* 9. Bespoke Fitting Special Offer Banner */}
        <SpecialOfferBanner onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 10. Contact, Google Map & Inquiry Form */}
        <ContactLocation />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Product Quick View & Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onBookFitting={() => setIsBookingOpen(true)}
      />

      {/* Custom Fitting Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
