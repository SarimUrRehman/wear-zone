import React from 'react';
import { MapPin, Phone, MessageSquare, Instagram, Facebook, Clock, ArrowUp } from 'lucide-react';
import { WZLogo, GoldDivider } from './OrnateFlourish';
import { STORE_INFO } from '../data/storeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] border-t border-[#D4AF37]/30 text-[#A8A29A] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <WZLogo size="md" />
              <div>
                <span className="font-heading text-2xl font-bold tracking-wider text-[#F5F1E8]">
                  WEAR ZONE
                </span>
                <p className="font-script text-sm text-[#D4AF37] -mt-1 tracking-wider">
                  Stitch &amp; Designer
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A8A29A] font-light leading-relaxed max-w-sm mb-6">
              Karachi’s landmark menswear atelier at Dolmen Center, Tariq Road. 
              Pioneering bespoke tailoring, royal groom sherwanis, and luxury ready-to-wear for discerning gentlemen.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#D4AF37]">
              <span>4.9 ★ Rating</span>
              <span>·</span>
              <span>79 Verified Reviews</span>
              <span>·</span>
              <span>Dolmen Center #132</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={STORE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141414] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STORE_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141414] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141414] border border-[#D4AF37]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-[#0A0A0A] transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm uppercase tracking-widest text-[#F5F1E8] font-bold mb-4">
              Explore Collections
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  Shalwar Kameez (Egyptian Cotton)
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  Designer Kurtas &amp; Necklines
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  Royal Brocade Waistcoats
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  Bespoke Italian Wool Suits
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  Wedding &amp; Groom Sherwanis
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  Prince Coats &amp; Tuxedos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-sm uppercase tracking-widest text-[#F5F1E8] font-bold mb-4">
              Atelier Address
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[#F5F1E8]">
                  {STORE_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${STORE_INFO.phoneClean}`} className="text-[#F5F1E8] hover:text-[#D4AF37] transition-colors">
                  {STORE_INFO.phone} (Direct &amp; WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Open 7 Days: 11:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] block mb-1">
                Custom Tailoring Guarantee:
              </span>
              <p className="text-[11px] text-[#A8A29A]">
                Complimentary master alterations on all bespoke orders.
              </p>
            </div>
          </div>

        </div>

        {/* Ornate Gold Divider */}
        <GoldDivider />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8A29A]/80 pt-4 gap-4">
          <p>© 2026 Wear Zone (Stitch &amp; Designer). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Shop #132, 1st Floor, Dolmen Center, Tariq Road, Karachi</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
