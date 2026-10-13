import React, { useState } from 'react';
import { X, MessageSquare, Scissors, ShieldCheck, Check, Sparkles, MapPin } from 'lucide-react';
import { Product } from '../types';
import { STORE_INFO } from '../data/storeData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onBookFitting: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onBookFitting,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('Bespoke Stitch');
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) return null;

  const sizes = ['38 Regular', '40 Regular', '42 Regular', '44 Large', 'Bespoke Stitch'];

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello Wear Zone! I want to inquire/order:
- Item: ${product.name}
- Category: ${product.categoryLabel}
- Price: Rs. ${product.price.toLocaleString()}
- Chosen Size / Stitching: ${selectedSize}
- Quantity: ${quantity}
Please let me know fabric availability and stitching timeline at Dolmen Center, Tariq Road.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#121211] border border-[#D4AF37]/50 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col md:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#A8A29A] hover:text-[#D4AF37] bg-[#0A0A0A]/80 rounded-full border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image Display */}
        <div className="w-full md:w-1/2 relative bg-[#181714] min-h-[300px] md:min-h-full overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center max-h-[460px] md:max-h-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-transparent to-transparent opacity-60" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F1D97A] bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-2 border border-[#D4AF37]/30">
            <span className="flex items-center gap-1.5">
              <Scissors className="w-3.5 h-3.5 text-[#D4AF37]" />
              Custom Stitching Available
            </span>
            <span className="font-semibold">Dolmen Center Atelier</span>
          </div>
        </div>

        {/* Right Side: Product Details & Purchase Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Category & Status */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
              <span>{product.categoryLabel}</span>
              <span>·</span>
              <span className="text-[#A8A29A]">Master Craft</span>
            </div>

            {/* Title */}
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F1E8] mb-3 leading-snug">
              {product.name}
            </h2>

            {/* Price in PKR */}
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-heading text-3xl font-bold text-gold-gradient">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm line-through text-[#A8A29A]">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-[11px] text-[#A8A29A]">
                (PKR · Tax Inclusive)
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Fabric Specification */}
            <div className="p-3 bg-[#181816] border border-[#D4AF37]/20 rounded-xs mb-5">
              <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold block mb-1">
                Fabric &amp; Weave:
              </span>
              <p className="text-xs text-[#F5F1E8] font-medium">
                {product.fabric}
              </p>
            </div>

            {/* Tailoring Key Points */}
            <div className="mb-6 space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider text-[#A8A29A] font-semibold block mb-1.5">
                Master Craft Highlights:
              </span>
              {product.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F1E8]/90">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Size / Bespoke Option Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#F5F1E8]">
                  Select Fitting Mode:
                </span>
                <span className="text-[11px] text-[#D4AF37]">
                  Master Tailor Consultation Included
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-2 text-xs text-center border rounded-xs transition-all ${
                      selectedSize === size
                        ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F1D97A] font-semibold shadow-xs'
                        : 'border-white/10 bg-[#161615] text-[#A8A29A] hover:border-white/25'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleWhatsAppOrder}
              className="gold-shimmer-btn w-full sm:flex-1 py-3.5 px-4 text-xs uppercase font-bold tracking-wider text-[#0A0A0A] bg-gold-gradient rounded-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:brightness-110"
            >
              <MessageSquare className="w-4 h-4 text-[#0A0A0A]" />
              <span>WhatsApp to Order</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onBookFitting();
              }}
              className="w-full sm:w-auto py-3.5 px-4 text-xs uppercase font-semibold tracking-wider text-[#D4AF37] border border-[#D4AF37]/50 rounded-xs hover:bg-[#D4AF37]/10 transition-colors whitespace-nowrap"
            >
              Book In-Store Fitting
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
