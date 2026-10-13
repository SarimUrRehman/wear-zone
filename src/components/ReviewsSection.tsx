import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import { REVIEWS, STORE_INFO } from '../data/storeData';
import { GoldDivider } from './OrnateFlourish';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : REVIEWS.length - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-[#0E0E0D] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          {/* Prominent Google Rating Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#171510] border border-[#D4AF37]/50 rounded-sm mb-4 shadow-sm">
            <div className="flex items-center text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
              ))}
            </div>
            <span className="font-heading font-bold text-sm text-[#F5F1E8]">
              4.9 ★ — 79 Google Reviews
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] mb-3">
            Voices of Distinction
          </h2>
          <p className="text-sm sm:text-base text-[#A8A29A] font-light max-w-2xl mx-auto">
            Grooms, corporate leaders, and gentlemen from across Karachi trust Wear Zone for momentous occasions and daily refinement.
          </p>
          <GoldDivider />
        </div>

        {/* Testimonial Spotlight Carousel */}
        <div
          className="relative max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-b from-[#161512] to-[#121210] border border-[#D4AF37]/30 rounded-xs shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-[#D4AF37]/20">
            <Quote className="w-16 h-16 -rotate-12" />
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-6 relative z-10">
            {[...Array(currentReview.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current text-[#D4AF37]" />
            ))}
          </div>

          {/* Comment text */}
          <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-[#F5F1E8] italic font-normal leading-relaxed mb-8 relative z-10 min-h-[110px] sm:min-h-[90px]">
            &ldquo;{currentReview.comment}&rdquo;
          </p>

          {/* Reviewer Details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10 relative z-10">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-heading text-lg font-bold text-gold-gradient">
                  {currentReview.name}
                </h4>
                {currentReview.verified && (
                  <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-xs border border-[#25D366]/30">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Customer
                  </span>
                )}
              </div>
              <p className="text-xs text-[#A8A29A] mt-0.5">
                {currentReview.role} · {currentReview.location}
              </p>
              <p className="text-[11px] text-[#D4AF37] mt-0.5 font-medium">
                Occasion: {currentReview.occasion}
              </p>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-xs tracking-widest text-[#A8A29A] tabular-nums">
                {currentIndex + 1} / {REVIEWS.length}
              </div>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

        {/* Action Button: Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=Wear+Zone+Dolmen+Center+Tariq+Road+Karachi+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#D4AF37] border border-[#D4AF37]/50 rounded-xs hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all"
          >
            <span>Read All 79 Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
