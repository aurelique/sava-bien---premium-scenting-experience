import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface HeroProps {
  onExploreSolutions: () => void;
  onDiscoverBrand: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSolutions, onDiscoverBrand }) => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#121110]"
    >
      {/* Background Architectural Atmosphere with slow subtle scale */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
          alt="SAVA BIEN Luxury Architectural Interior Atmosphere"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[12000ms] ease-out will-change-transform"
          style={{ filter: 'brightness(0.55) contrast(1.08)' }}
        />

        {/* Sophisticated neutral vignette and gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#121110]/30 to-[#121110]/80" />

        {/* Atmospheric scent particles / soft micro-mist visualizer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-radial from-[#C5A880]/20 via-[#E3DCD1]/10 to-transparent blur-3xl animate-subtle-float" />
          <div
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-radial from-[#AA8C65]/15 via-white/5 to-transparent blur-3xl animate-subtle-float"
            style={{ animationDelay: '-4s', animationDuration: '11s' }}
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        {/* Eyebrow / Tagline - KEPT IN ENGLISH */}
        <div className="inline-flex items-center space-x-3 mb-6 sm:mb-8">
          <span className="w-8 h-[1px] bg-[#C5A880]/60" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.32em] font-medium text-[#D4BC9B]">
            SAVA BIEN — PREMIUM SCENTING EXPERIENCE
          </span>
          <span className="w-8 h-[1px] bg-[#C5A880]/60" />
        </div>

        {/* Main Headline / Tagline - KEPT IN ENGLISH */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF8F5] font-light leading-[1.08] tracking-tight mb-8 max-w-4xl text-balance">
          Scent Your Space.
          <br />
          <span className="italic font-light text-[#E8DFD3]">Define Your Atmosphere.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-[#D8D2C7] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12 text-balance tracking-wide">
          {t.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center">
          <button
            id="hero-primary-cta"
            onClick={onExploreSolutions}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#FAF8F5] text-[#181716] hover:bg-white text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>{t.exploreCta}</span>
            <ArrowRight className="w-4 h-4 text-[#181716]" />
          </button>

          <button
            id="hero-secondary-cta"
            onClick={onDiscoverBrand}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/35 text-[#FAF8F5] hover:border-[#D4BC9B] hover:text-[#D4BC9B] hover:bg-white/5 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 backdrop-blur-xs"
          >
            <span>{t.discoverCta}</span>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#brand-intro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-[#C5BCB1]/80 hover:text-white transition-colors duration-300 group"
        aria-label="Scroll to discover SAVA BIEN"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium group-hover:tracking-[0.35em] transition-all duration-300">
          {t.scrollPrompt}
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A880]" />
      </a>
    </section>
  );
};
