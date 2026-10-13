import React from 'react';

export const OrnateCorner: React.FC<{ className?: string; position?: 'tl' | 'tr' | 'bl' | 'br' }> = ({
  className = '',
  position = 'tl'
}) => {
  const rotationClass = {
    tl: '',
    tr: 'rotate-90',
    br: 'rotate-180',
    bl: '-rotate-90'
  }[position];

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-8 pointer-events-none text-[#D4AF37] ${rotationClass} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 2V28C2 13.6406 13.6406 2 28 2H2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M2 2L18 18M2 10L10 2M2 20L20 2"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <circle cx="2" cy="2" r="2" fill="currentColor" />
      <path
        d="M10 28C10 18 18 10 28 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 2"
        opacity="0.5"
      />
    </svg>
  );
};

export const GoldDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-8 ${className}`}>
      <div className="h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
      <div className="flex items-center gap-1.5 text-[#D4AF37]">
        <span className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#D4AF37]" />
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#D4AF37]"
        >
          <path
            d="M16 2L19.5 12.5L30 16L19.5 19.5L16 30L12.5 19.5L2 16L12.5 12.5L16 2Z"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="currentColor"
            fillOpacity="0.2"
          />
        </svg>
        <span className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#D4AF37]" />
      </div>
      <div className="h-[1px] w-20 md:w-32 bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
    </div>
  );
};

export const WZLogo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({
  className = '',
  size = 'md'
}) => {
  const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-11 h-11 text-sm',
    lg: 'w-16 h-16 text-lg'
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Ornate Gold Frame Emblem */}
      <div
        className={`rounded-sm flex items-center justify-center border border-[#D4AF37]/80 bg-gradient-to-br from-[#1C1A14] via-[#0E0E0D] to-[#252012] shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all duration-300 ${sizeMap[size]}`}
      >
        {/* Inner thin border */}
        <div className="absolute inset-[2px] border border-[#D4AF37]/40 pointer-events-none" />
        
        {/* Monogram letters */}
        <span className="font-heading font-black tracking-wider text-gold-gradient select-none">
          WZ
        </span>
      </div>
    </div>
  );
};
