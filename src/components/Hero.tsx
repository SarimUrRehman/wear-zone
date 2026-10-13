import React, { useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { OrnateCorner, GoldDivider } from './OrnateFlourish';
import { heroModelImg } from '../data/storeData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle luxury gold particle shimmer effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(38, Math.floor(window.innerWidth / 35));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.6,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * 0.02 + 0.01,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * 0.002) * 0.003;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0.1, Math.min(0.7, p.opacity))})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-4 pb-16"
    >
      {/* Background Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 opacity-70"
      />

      {/* Background Ambience & Gradient Scrims */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Brand Kicker with Logo Flourish */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#D4AF37]/30 bg-[#161410]/80 rounded-sm mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#F1D97A]">
                Dolmen Center · Tariq Road · Karachi
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#F5F1E8] leading-[1.1] mb-6">
              Dress the Man <br className="hidden sm:inline" />
              <span className="text-gold-gradient italic font-serif">
                You Want to Be
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-[#A8A29A] font-light max-w-xl mb-4 leading-relaxed">
              Karachi’s premier destination for custom-stitched Italian wool suits, 
              ceremonial groom sherwanis, and luxury Egyptian cotton kurtas.
            </p>

            <div className="font-script text-2xl text-[#D4AF37] mb-8">
              Stitch &amp; Designer — Tailored to Absolute Distinction
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#collections"
                className="gold-shimmer-btn w-full sm:w-auto px-8 py-3.5 text-xs uppercase font-bold tracking-widest text-[#0A0A0A] bg-gold-gradient rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.55)] transition-all flex items-center justify-center gap-2.5"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-[#0A0A0A]" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase font-semibold tracking-widest text-[#F5F1E8] border border-[#D4AF37]/70 rounded-sm hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:text-[#F1D97A] transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Visit Our Store</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase font-semibold tracking-wider text-[#D4AF37] hover:text-white transition-colors underline decoration-[#D4AF37]/40 underline-offset-8"
              >
                Book Fitting Consultation
              </button>
            </div>

            {/* Trust Markers Bar beneath hero split */}
            <div className="mt-10 pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#A8A29A]">
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-semibold text-sm">4.9 ★</span>
                <span>Google Rating</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-semibold text-sm">79+</span>
                <span>Verified Reviews</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-semibold text-sm">100%</span>
                <span>Fit Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Ornate Gold Frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ornate Frame Outer Box */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-sm p-3 bg-gradient-to-b from-[#211E16] via-[#12110D] to-[#1F1C14] border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
              
              {/* Corner SVG flourishes */}
              <OrnateCorner position="tl" className="absolute top-1 left-1" />
              <OrnateCorner position="tr" className="absolute top-1 right-1" />
              <OrnateCorner position="bl" className="absolute bottom-1 left-1" />
              <OrnateCorner position="br" className="absolute bottom-1 right-1" />

              {/* Inner Image with slow hover zoom */}
              <div className="w-full h-full overflow-hidden relative rounded-xs bg-[#0E0E0D]">
                <img
                  src={heroModelImg}
                  alt="Wear Zone gentleman in bespoke black tuxedo suit"
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Lighting Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                {/* Bottom Card Kicker */}
                <div className="absolute bottom-4 inset-x-4 p-4 bg-[#0A0A0A]/85 backdrop-blur-md border border-[#D4AF37]/30 rounded-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">
                        Bespoke Master Tailoring
                      </p>
                      <h2 className="text-sm font-heading font-semibold text-[#F5F1E8]">
                        The Signature Black Tuxedo
                      </h2>
                    </div>
                    <span className="font-heading text-xs text-[#F1D97A] border-l border-white/20 pl-3">
                      From Rs. 32,000
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <a
            href="#trust"
            className="group flex flex-col items-center text-[10px] tracking-widest uppercase text-[#A8A29A] hover:text-[#D4AF37] transition-colors"
          >
            <span className="mb-1 opacity-70 group-hover:opacity-100">Discover Excellence</span>
            <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
