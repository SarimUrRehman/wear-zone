import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, CheckCircle2, Send, Star, Mail } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { GoldDivider, OrnateCorner } from './OrnateFlourish';

export const ContactLocation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Custom Stitching Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = encodeURIComponent(
      `*Inquiry from Wear Zone Website*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || 'N/A'}\n` +
      `🏷️ *Subject:* ${formData.subject}\n` +
      `💬 *Message:* ${formData.message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Visit Our Atelier
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] mt-2 mb-3">
            Contact &amp; Location
          </h2>
          <p className="text-sm sm:text-base text-[#A8A29A] font-light max-w-2xl mx-auto">
            Conveniently situated in the heart of Karachi's premier fashion boulevard at Dolmen Center, Tariq Road.
          </p>
          <GoldDivider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Store Details & Quick Action CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Store Information Card */}
            <div className="p-8 bg-[#141414] border border-[#D4AF37]/30 rounded-xs relative">
              <OrnateCorner position="tl" className="absolute top-1 left-1" />
              <OrnateCorner position="tr" className="absolute top-1 right-1" />

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F1E8] mb-6">
                Dolmen Center Atelier
              </h3>

              <div className="space-y-6 text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xs bg-[#1C1A14] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37]">
                      Physical Address
                    </h4>
                    <p className="text-xs sm:text-sm text-[#F5F1E8] mt-1 leading-relaxed">
                      {STORE_INFO.address}
                    </p>
                    <span className="text-[11px] text-[#A8A29A] block mt-0.5">
                      (Opposite Tariq Road fashion hub, 1st floor)
                    </span>
                  </div>
                </div>

                {/* Direct Phone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xs bg-[#1C1A14] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37]">
                      Direct Telephone &amp; WhatsApp
                    </h4>
                    <a
                      href={`tel:${STORE_INFO.phoneClean}`}
                      className="text-base font-heading font-bold text-[#F5F1E8] hover:text-[#D4AF37] transition-colors block mt-1"
                    >
                      {STORE_INFO.phone}
                    </a>
                    <span className="text-[11px] text-[#A8A29A]">
                      Available for voice calls &amp; WhatsApp inquiries
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xs bg-[#1C1A14] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37]">
                      Atelier Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-[#F5F1E8] mt-1">
                      {STORE_INFO.openingHours}
                    </p>
                    <span className="text-[11px] text-[#25D366]">
                      Open 7 Days a Week
                    </span>
                  </div>
                </div>

                {/* Google Rating */}
                <div className="flex items-start gap-4 pt-2">
                  <div className="w-9 h-9 rounded-xs bg-[#1C1A14] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <Star className="w-4 h-4 fill-current text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37]">
                      Google Verified Rating
                    </h4>
                    <p className="text-xs sm:text-sm text-[#F5F1E8] mt-1 font-semibold">
                      4.9 Stars from 79+ Customer Reviews
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons Row */}
              <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={`tel:${STORE_INFO.phoneClean}`}
                  className="py-3 px-2 text-[11px] uppercase tracking-wider font-bold text-[#0A0A0A] bg-gold-gradient rounded-xs text-center flex items-center justify-center gap-1.5 shadow-sm hover:brightness-110"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-2 text-[11px] uppercase tracking-wider font-bold text-[#F5F1E8] bg-[#25D366]/20 border border-[#25D366]/50 hover:bg-[#25D366]/30 rounded-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-2 text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] rounded-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>

            </div>

            {/* Embedded Interactive Google Map */}
            <div className="relative h-[250px] w-full rounded-xs overflow-hidden border border-[#D4AF37]/30 bg-[#161614] shadow-md">
              <iframe
                title="Wear Zone Dolmen Center Tariq Road Location"
                src={STORE_INFO.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 bg-[#0A0A0A]/90 backdrop-blur-xs px-3 py-1.5 border border-[#D4AF37]/30 text-[11px] text-[#F1D97A]">
                Dolmen Center · Tariq Road Karachi
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Custom Tailoring Inquiry Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#D4AF37]/30 p-8 sm:p-10 rounded-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Direct Atelier Desk
                </span>
                <span className="text-[11px] text-[#A8A29A]">
                  Fast Response via WhatsApp
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F1E8] mb-3">
                Send Us An Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed mb-6">
                Have a wedding date in mind, need bespoke fabric advice, or want to check stock availability at Dolmen Center? Leave a message below and our master tailoring team will reach out promptly.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-[#1A1A18] border border-[#D4AF37]/40 rounded-xs">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                  <h4 className="font-heading text-xl font-bold text-[#F5F1E8] mb-1">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-[#A8A29A] mb-4">
                    Your inquiry has been relayed to our Dolmen Center desk. We have also opened your WhatsApp chat for immediate answers.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', subject: 'Custom Stitching Inquiry', message: '' });
                    }}
                    className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 rounded-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Farhan Qureshi"
                        className="w-full px-4 py-3 text-xs bg-[#1A1A18] border border-white/10 rounded-xs text-[#F5F1E8] focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] mb-1.5">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0335 XXXXXXX"
                        className="w-full px-4 py-3 text-xs bg-[#1A1A18] border border-white/10 rounded-xs text-[#F5F1E8] focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 text-xs bg-[#1A1A18] border border-white/10 rounded-xs text-[#F5F1E8] focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#1A1A18] border border-white/10 rounded-xs text-[#F5F1E8] focus:border-[#D4AF37] focus:outline-none transition-colors"
                      >
                        <option value="Custom Stitching Inquiry">Custom Stitching &amp; Tailoring</option>
                        <option value="Groom Sherwani & Bridal Men's Wear">Groom Sherwani &amp; Bridal Wear</option>
                        <option value="Executive Suit Consultation">Executive Suit Consultation</option>
                        <option value="Fabric Availability & Sourcing">Fabric Availability &amp; Sourcing</option>
                        <option value="Alteration & Fit Adjustment">Alteration &amp; Fit Adjustment</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] mb-1.5">
                      Your Message / Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you're looking for, wedding dates, or sizing details..."
                      className="w-full px-4 py-3 text-xs bg-[#1A1A18] border border-white/10 rounded-xs text-[#F5F1E8] focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="gold-shimmer-btn w-full py-3.5 px-6 text-xs uppercase font-bold tracking-widest text-[#0A0A0A] bg-gold-gradient rounded-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:brightness-110"
                  >
                    <Send className="w-4 h-4 text-[#0A0A0A]" />
                    <span>{isSubmitting ? 'Sending Inquiry...' : 'Submit Inquiry & Chat on WhatsApp'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Privacy note */}
            <div className="pt-6 mt-6 border-t border-white/5 text-[11px] text-[#A8A29A]">
              We respect your privacy. Inquiries are handled directly by the Wear Zone management team at Dolmen Center, Tariq Road.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
