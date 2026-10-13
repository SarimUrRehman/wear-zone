import React from 'react';
import { Scissors, Sparkles, CheckCircle2, Crown, Gem, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/storeData';
import { GoldDivider } from './OrnateFlourish';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />;
      case 'Gem':
        return <Gem className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0E0E0D] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            The Wear Zone Standard
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] mt-2 mb-3">
            Why Discerning Gentlemen Choose Us
          </h2>
          <p className="text-sm sm:text-base text-[#A8A29A] font-light max-w-2xl mx-auto">
            From raw fabric selection to the final hand-pressed finish, 
            discover what separates our Dolmen Center atelier from off-the-rack garments.
          </p>
          <GoldDivider />
        </div>

        {/* 6 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-8 bg-[#141414] border border-[#D4AF37]/20 rounded-xs transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#181816] hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Highlight Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xs bg-[#1C1A14] border border-[#D4AF37]/40 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium bg-[#0A0A0A] px-2.5 py-1 border border-[#D4AF37]/30">
                    {service.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-[#F5F1E8] group-hover:text-gold-gradient transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Bottom Touch */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-[#A8A29A] group-hover:text-[#F1D97A] transition-colors">
                  Atelier Guarantee
                </span>
                <span className="text-[#D4AF37] text-xs font-semibold">
                  01 // WZ
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner beneath services */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#171510] via-[#211D14] to-[#171510] border border-[#D4AF37]/40 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
          <div className="text-center md:text-left">
            <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F1E8] mb-1">
              Need A Customized Wedding Ensemble Or Wardrobe Consultation?
            </h4>
            <p className="text-xs sm:text-sm text-[#A8A29A]">
              Visit us at Shop #132, 1st Floor, Dolmen Center, Tariq Road or book a private fitting slot.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="gold-shimmer-btn shrink-0 px-7 py-3 text-xs uppercase font-bold tracking-widest text-[#0A0A0A] bg-gold-gradient rounded-xs flex items-center gap-2 hover:brightness-110 shadow-md"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0A0A0A]" />
          </button>
        </div>

      </div>
    </section>
  );
};
