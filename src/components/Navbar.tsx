import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { WZLogo } from './OrnateFlourish';
import { STORE_INFO } from '../data/storeData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Collections', href: '#collections' },
    { label: 'Featured', href: '#featured' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Micro-Bar */}
      <div className="bg-[#12110E] border-b border-[#D4AF37]/20 text-[#A8A29A] text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#F5F1E8]">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Shop #132, 1st Floor, Dolmen Center, Tariq Road, Karachi
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              Open Daily: 11:00 AM – 10:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#D4AF37] font-medium tracking-wide">
              ★ 4.9 Rating (79 Google Reviews)
            </span>
            <span className="text-[#A8A29A]/50">|</span>
            <a
              href={`tel:${STORE_INFO.phoneClean}`}
              className="text-[#F5F1E8] hover:text-[#D4AF37] transition-colors"
            >
              Direct Line: {STORE_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-transparent py-4 md:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Zone 1: Brand Title & Monogram */}
            <a href="#home" className="flex items-center gap-3 shrink-0 group">
              <WZLogo size="md" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-heading text-xl sm:text-2xl font-bold tracking-wider text-[#F5F1E8] group-hover:text-gold-gradient transition-colors">
                    WEAR ZONE
                  </span>
                </div>
                <span className="font-script text-xs sm:text-sm text-[#D4AF37] -mt-1 tracking-wider">
                  Stitch &amp; Designer
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-widest uppercase text-[#F5F1E8]/80">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#D4AF37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${STORE_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium tracking-wider uppercase text-[#D4AF37] border border-[#D4AF37]/50 rounded-sm hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all whitespace-nowrap"
                title="Call Wear Zone"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="gold-shimmer-btn inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#0A0A0A] bg-gold-gradient rounded-sm hover:brightness-110 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#0A0A0A]" />
                <span>Book Fitting</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-2.5 py-1.5 text-[11px] font-semibold uppercase text-[#0A0A0A] bg-gold-gradient rounded-sm whitespace-nowrap"
              >
                Book Fitting
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#D4AF37] hover:text-[#F5F1E8] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F0F0E] border-b border-[#D4AF37]/30 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest text-[#F5F1E8] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${STORE_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-wider font-semibold text-[#D4AF37] border border-[#D4AF37] rounded-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 0335 8193113</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-wider font-bold text-[#0A0A0A] bg-gold-gradient rounded-sm shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Master Tailor Fitting</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
