import React, { useState, useEffect } from 'react';

export const IntroLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Elegant quick reveal (1.4s total) so it enhances luxury without blocking user
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 500);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Ornate Monogram Drawing Box */}
        <div className="relative w-24 h-24 flex items-center justify-center border-2 border-[#D4AF37] rounded-sm p-3 shadow-[0_0_35px_rgba(212,175,55,0.4)] animate-pulse">
          <div className="absolute inset-1 border border-[#D4AF37]/50" />
          
          <span className="font-heading text-4xl font-extrabold tracking-widest text-gold-gradient select-none">
            WZ
          </span>
        </div>

        <div className="mt-6 text-center">
          <h2 className="font-heading text-xl font-bold tracking-[0.25em] text-[#F5F1E8] uppercase">
            WEAR ZONE
          </h2>
          <p className="font-script text-base text-[#D4AF37] mt-0.5">
            Stitch &amp; Designer
          </p>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="mt-8 text-[11px] uppercase tracking-widest text-[#A8A29A] hover:text-[#D4AF37] transition-colors"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
};
