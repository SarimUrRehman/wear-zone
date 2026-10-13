import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/storeData';
import { Category, Product } from '../types';
import { GoldDivider } from './OrnateFlourish';

interface CollectionsProps {
  onSelectCategory: (slug: Product['category']) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="py-20 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Bespoke &amp; Ready-to-Wear
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] mt-2 mb-3">
            Curated Collections
          </h2>
          <p className="text-sm sm:text-base text-[#A8A29A] font-light max-w-2xl mx-auto">
            From imperial groom ensembles to modern executive silhouettes, 
            explore garments designed and stitched with sartorial precision.
          </p>
          <GoldDivider />
        </div>

        {/* 8-Card Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat: Category) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className="group relative cursor-pointer overflow-hidden rounded-xs border border-[#D4AF37]/25 bg-[#141414] transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex flex-col h-[380px]"
            >
              {/* Image Container with Zoom */}
              <div className="relative w-full h-[260px] overflow-hidden bg-[#181816]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to solid patterned container if external image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Gold Gradient Hover Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Category Count */}
                <div className="absolute top-3 right-3 text-[11px] font-medium tracking-wider uppercase text-[#D4AF37] bg-[#0A0A0A]/85 backdrop-blur-xs px-2.5 py-1 border border-[#D4AF37]/30">
                  {cat.itemCount}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#121211] border-t border-white/5">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#F5F1E8] group-hover:text-gold-gradient transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#A8A29A] mt-1 line-clamp-2 leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/5">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-[#D4AF37] group-hover:text-[#F1D97A] transition-colors">
                    View Catalog
                  </span>
                  <div className="w-6 h-6 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-gold-gradient group-hover:text-[#0A0A0A] group-hover:border-transparent transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
