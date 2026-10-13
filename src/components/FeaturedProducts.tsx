import React, { useState } from 'react';
import { MessageSquare, Eye, Scissors, Sparkles } from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '../data/storeData';
import { Product } from '../types';
import { GoldDivider } from './OrnateFlourish';

interface FeaturedProductsProps {
  onOpenProduct: (product: Product) => void;
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onOpenProduct,
  activeFilter: propFilter,
  onFilterChange,
}) => {
  const [internalFilter, setInternalFilter] = useState<string>('all');
  const activeCategory = propFilter || internalFilter;

  const handleFilterClick = (slug: string) => {
    setInternalFilter(slug);
    if (onFilterChange) onFilterChange(slug);
  };

  const filterTabs = [
    { label: 'All Creations', slug: 'all' },
    { label: 'Wedding & Groom', slug: 'wedding' },
    { label: 'Suits & Blazers', slug: 'suits-blazers' },
    { label: 'Waistcoats', slug: 'waistcoats' },
    { label: 'Shalwar Kameez', slug: 'shalwar-kameez' },
    { label: 'Kurtas', slug: 'kurta' },
    { label: 'Casual Shirts', slug: 'casual-shirts' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleQuickWhatsApp = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello Wear Zone! I want to inquire about: "${product.name}" (Price: Rs. ${product.price.toLocaleString()}) from your Dolmen Center, Tariq Road collection. Please share fabric samples & delivery schedule.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="featured" className="py-20 bg-[#0E0E0D] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Signature Pieces
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1E8] mt-2 mb-3">
            Featured Masterpieces
          </h2>
          <p className="text-sm sm:text-base text-[#A8A29A] font-light max-w-2xl mx-auto">
            Ready-to-wear luxury or tailored on-demand to your posture. Each garment is cut and finished with fine Pakistani &amp; Western sartorial craftsmanship.
          </p>
          <GoldDivider />
        </div>

        {/* Filter Tabs / Segmented Controls */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.slug;
            return (
              <button
                key={tab.slug}
                onClick={() => handleFilterClick(tab.slug)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gold-gradient text-[#0A0A0A] shadow-[0_0_15px_rgba(212,175,55,0.35)] scale-105'
                    : 'bg-[#181816] text-[#A8A29A] hover:text-[#F5F1E8] hover:bg-[#22211E] border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onOpenProduct(product)}
              className="group cursor-pointer bg-[#141414] border border-[#D4AF37]/20 rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_10px_35px_rgba(212,175,55,0.22)] hover:-translate-y-1"
            >
              {/* Product Media Box */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1A18]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                {/* Stitched Tag */}
                {product.isCustomStitchAvailable && (
                  <div className="absolute top-3 left-3 bg-[#0A0A0A]/90 backdrop-blur-xs text-[10px] uppercase tracking-wider text-[#D4AF37] px-2.5 py-1 border border-[#D4AF37]/40 flex items-center gap-1">
                    <Scissors className="w-3 h-3 text-[#D4AF37]" />
                    <span>Custom Fit</span>
                  </div>
                )}

                {/* Hover Quick View Trigger */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenProduct(product);
                    }}
                    className="w-full py-2.5 px-3 bg-[#0A0A0A]/95 text-xs uppercase tracking-wider font-semibold text-[#F1D97A] border border-[#D4AF37] flex items-center justify-center gap-2 hover:bg-gold-gradient hover:text-[#0A0A0A] hover:border-transparent transition-all shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View &amp; Details</span>
                  </button>
                </div>
              </div>

              {/* Card Meta & Action */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium mb-1">
                    {product.categoryLabel}
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#F5F1E8] group-hover:text-gold-gradient transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#A8A29A] mt-1 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A8A29A] block">
                      Price (PKR)
                    </span>
                    <span className="font-heading text-lg font-bold text-gold-gradient">
                      Rs. {product.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Direct WhatsApp Order CTA */}
                  <button
                    onClick={(e) => handleQuickWhatsApp(e, product)}
                    className="p-2.5 bg-[#1F1D17] hover:bg-[#25D366]/20 border border-[#D4AF37]/30 hover:border-[#25D366] text-[#D4AF37] hover:text-[#25D366] rounded-xs transition-colors flex items-center gap-1.5"
                    title="Order on WhatsApp"
                    aria-label={`Order ${product.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider hidden sm:inline">
                      Order
                    </span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
