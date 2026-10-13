import React from 'react';
import { Scissors, Calendar, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { STORE_INFO, heroModelImg } from '../data/storeData';
import { OrnateCorner } from './OrnateFlourish';

interface SpecialOfferBannerProps {
  onOpenBooking: () => void;
}

export const SpecialOfferBanner: React.FC<SpecialOfferBannerProps> = ({ onOpenBooking }) => {
  const handleQuickWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Wear Zone! I want to book a fitting consultation for a bespoke suit / sherwani at Dolmen Center, Tariq Road.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-20 overflow-hidden bg-[#0F0E0B] border-y border-[#D4AF37]/30">
      
      {/* Background Graphic & Texture */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={heroModelImg}
          alt="Gentleman background"
          className="w-full h-full object-cover object-center filter grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E0B] via-[#0F0E0B]/90 to-[#0F0E0B]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative p-8 sm:p-12 md:p-16 rounded-xs bg-[#141310]/90 border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
          
          <OrnateCorner position="tl" className="absolute top-2 left-2" />
          <OrnateCorner position="tr" className="absolute top-2 right-2" />
          <OrnateCorner position="bl" className="absolute bottom-2 left-2" />
          <OrnateCorner position="br" className="absolute bottom-2 right-2" />

          <div className="max-w-3xl mx-auto text-center">
            
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
              <Scissors className="w-4 h-4 text-[#D4AF37]" />
              <span>Complimentary Atelier Consultation</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] mb-4 leading-tight">
              Get Your Custom Suit Stitched —{' '}
              <span className="text-gold-gradient italic font-serif">
                Book a Fitting Today
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#A8A29A] font-light max-w-xl mx-auto leading-relaxed mb-8">
              Step into our Dolmen Center atelier. Feel the weight of luxury wools and raw silks in your hands, have our master tailor examine your posture, and experience the timeless luxury of a bespoke cut.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="gold-shimmer-btn w-full sm:w-auto px-8 py-3.5 text-xs uppercase font-bold tracking-widest text-[#0A0A0A] bg-gold-gradient rounded-xs flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110"
              >
                <Calendar className="w-4 h-4 text-[#0A0A0A]" />
                <span>Book A Fitting Today</span>
              </button>

              <button
                onClick={handleQuickWhatsApp}
                className="w-full sm:w-auto px-7 py-3.5 text-xs uppercase font-semibold tracking-wider text-[#F5F1E8] border border-[#D4AF37]/60 hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] rounded-xs flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Master Tailor</span>
              </button>

              <a
                href={`tel:${STORE_INFO.phoneClean}`}
                className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase font-semibold tracking-wider text-[#D4AF37] hover:text-[#F1D97A] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>0335 8193113</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
