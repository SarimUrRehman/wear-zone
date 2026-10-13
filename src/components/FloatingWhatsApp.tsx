import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Wear Zone! I'm reaching out from your website regarding custom stitching & ready-to-wear collections at Dolmen Center, Tariq Road.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-3 max-w-[220px] bg-[#141414] border border-[#D4AF37]/50 p-3 rounded-xs shadow-2xl text-xs relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-[#0A0A0A] border border-white/20 rounded-full text-[#A8A29A] hover:text-[#D4AF37] flex items-center justify-center text-[10px]"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-[#F5F1E8] font-medium leading-snug">
            Need fabric advice or custom suit stitching?
          </p>
          <span className="text-[10px] text-[#D4AF37] block mt-1">
            Chat with Master Tailor · 0335 8193113
          </span>
        </div>
      )}

      {/* Floating Button with Pulse Ring */}
      <div className="relative group">
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 blur-sm group-hover:opacity-75 animate-pulse transition duration-1000" />
        
        <button
          onClick={handleOpenWhatsApp}
          className="relative w-14 h-14 rounded-full bg-[#181816] border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-[#0A0A0A] shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105"
          aria-label="Chat with Wear Zone on WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-current" />
        </button>
      </div>

    </div>
  );
};
