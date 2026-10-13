import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Scissors, MapPin, MessageSquare, Phone } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '12:00 PM',
    category: 'Wedding Sherwani / Groom Wear',
    fittingType: 'In-Store (Dolmen Center, Tariq Road)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format WhatsApp message to notify store immediately
    const text = encodeURIComponent(
      `*New Master Fitting Appointment Request - Wear Zone*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📅 *Date:* ${formData.date}\n` +
      `⏰ *Time:* ${formData.time}\n` +
      `👔 *Garment:* ${formData.category}\n` +
      `📍 *Type:* ${formData.fittingType}\n` +
      `📝 *Notes:* ${formData.notes || 'None'}\n\n` +
      `Please confirm my slot at Shop #132, Dolmen Center Tariq Road.`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Auto open WhatsApp for seamless communication
      window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#121211] border border-[#D4AF37]/60 rounded-xs shadow-[0_20px_60px_rgba(0,0,0,0.95)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#181816] px-6 py-4 border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Scissors className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="font-heading text-lg font-bold text-[#F5F1E8]">
              Book Master Tailor Fitting
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#A8A29A] hover:text-[#D4AF37] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-[#F5F1E8] mb-2">
                Fitting Request Dispatched!
              </h4>
              <p className="text-xs sm:text-sm text-[#A8A29A] max-w-md mx-auto leading-relaxed mb-6">
                Thank you, <strong className="text-[#F5F1E8]">{formData.name}</strong>. Our master tailor at Dolmen Center has received your request. We have also opened your WhatsApp to confirm your preferred slot instantly.
              </p>
              <div className="p-4 bg-[#181816] border border-white/10 rounded-xs text-xs text-left text-[#A8A29A] mb-6 space-y-1">
                <div><span className="text-[#D4AF37]">Location:</span> Shop #132, 1st Floor, Dolmen Center, Tariq Road</div>
                <div><span className="text-[#D4AF37]">Appointment:</span> {formData.date || 'Today'} at {formData.time}</div>
                <div><span className="text-[#D4AF37]">Direct Hotline:</span> 0335 8193113</div>
              </div>
              <button
                onClick={handleReset}
                className="gold-shimmer-btn px-6 py-2.5 text-xs uppercase font-bold tracking-wider text-[#0A0A0A] bg-gold-gradient rounded-xs"
              >
                Done &amp; Return to Store
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-[#A8A29A] leading-relaxed mb-4">
                Experience an individual drape analysis, posture inspection, and fabric preview with our master cutter at Dolmen Center.
              </div>

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
                    placeholder="e.g. Asad Siddiqui"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#1A1A18] border border-white/10 rounded-xs text-[#F5F1E8] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0335 XXXXXXX"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#1A1A18] border border-white/10 rounded-xs text-[#F5F1E8] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#1A1A18] border border-white/10 rounded-xs text-[#F5F1E8] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#1A1A18] border border-white/10 rounded-xs text-[#F5F1E8] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="12:00 PM">12:00 PM (Afternoon)</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="05:00 PM">05:00 PM (Evening)</option>
                    <option value="07:30 PM">07:30 PM</option>
                    <option value="09:00 PM">09:00 PM (Night)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] mb-1.5">
                  Garment of Interest
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#1A1A18] border border-white/10 rounded-xs text-[#F5F1E8] focus:border-[#D4AF37] focus:outline-none transition-colors"
                >
                  <option value="Wedding Sherwani / Groom Wear">Wedding Sherwani / Royal Groom Wear</option>
                  <option value="Bespoke 3-Piece Executive Suit">Bespoke 3-Piece Executive Suit</option>
                  <option value="Designer Kurta & Waistcoat">Designer Kurta &amp; Raw Silk Waistcoat</option>
                  <option value="Luxury Egyptian Cotton Shalwar Kameez">Luxury Egyptian Cotton Shalwar Kameez</option>
                  <option value="Formal Blazer & Custom Trousers">Formal Blazer &amp; Custom Trousers</option>
                  <option value="Full Bridal Groomsmen Package">Full Bridal Groomsmen Package</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] mb-1.5">
                  Fitting Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, fittingType: 'In-Store (Dolmen Center, Tariq Road)' })}
                    className={`py-2 px-3 text-xs border rounded-xs transition-all ${
                      formData.fittingType.includes('In-Store')
                        ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F1D97A]'
                        : 'border-white/10 bg-[#1A1A18] text-[#A8A29A]'
                    }`}
                  >
                    At Store (Dolmen Center)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, fittingType: 'WhatsApp Video Consultation' })}
                    className={`py-2 px-3 text-xs border rounded-xs transition-all ${
                      formData.fittingType.includes('WhatsApp')
                        ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F1D97A]'
                        : 'border-white/10 bg-[#1A1A18] text-[#A8A29A]'
                    }`}
                  >
                    WhatsApp Consultation
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#F5F1E8] mb-1.5">
                  Special Notes / Specific Style Preference (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Wedding date is next month, need velvet touch"
                  className="w-full px-3.5 py-2 text-xs bg-[#1A1A18] border border-white/10 rounded-xs text-[#F5F1E8] focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-shimmer-btn w-full py-3.5 px-4 text-xs uppercase font-bold tracking-widest text-[#0A0A0A] bg-gold-gradient rounded-xs flex items-center justify-center gap-2 shadow-lg hover:brightness-110"
                >
                  <Calendar className="w-4 h-4 text-[#0A0A0A]" />
                  <span>{isSubmitting ? 'Confirming...' : 'Confirm Fitting Appointment'}</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
