import React from 'react';
import { Star, ShieldCheck, Scissors, Award } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: Star,
      value: '4.9 ★',
      label: 'Google Rating',
      detail: 'From 79 verified local reviews'
    },
    {
      icon: Award,
      value: '79+',
      label: 'Google Reviews',
      detail: 'Highest rated in Tariq Road'
    },
    {
      icon: Scissors,
      value: '100%',
      label: 'Custom Stitching',
      detail: 'Master tailor draft & fitting'
    },
    {
      icon: ShieldCheck,
      value: 'Pure',
      label: 'Premium Fabrics',
      detail: 'Italian wool, Swiss & Egyptian cotton'
    }
  ];

  return (
    <section id="trust" className="relative z-20 py-8 bg-[#0E0E0D] border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  index !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-8 h-8 rounded-xs bg-[#1A1813] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                    <Icon className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-gold-gradient">
                    {item.value}
                  </span>
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#F5F1E8]">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#A8A29A] mt-0.5">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
