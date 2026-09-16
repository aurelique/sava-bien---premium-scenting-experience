import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface ClosingStatementProps {
  onStartJourney: () => void;
  onOpenConsultation: () => void;
}

export const ClosingStatement: React.FC<ClosingStatementProps> = ({
  onStartJourney,
  onOpenConsultation,
}) => {
  const { language } = useLanguage();
  const t = translations[language].closing;

  return (
    <section className="relative py-28 sm:py-36 lg:py-44 bg-[#141312] text-[#FAF8F5] overflow-hidden">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
          alt="Atmospheric Luxury Villa"
          className="w-full h-full object-cover filter contrast-110 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/70 to-[#141312]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Supporting Brand Tagline */}
        <div className="inline-flex items-center space-x-3 mb-8">
          <span className="w-8 h-[1px] bg-[#C5A880]/70" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#D4BC9B]">
            SAVA BIEN — PREMIUM SCENTING EXPERIENCE
          </span>
          <span className="w-8 h-[1px] bg-[#C5A880]/70" />
        </div>

        {/* Brand Philosophy / Tagline preserved strictly in English */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.08] tracking-tight mb-8">
          Your Space.
          <br />
          <span className="italic text-[#E3DCD1]">Your Scent.</span>
          <br />
          Your Signature.
        </h2>

        <p className="text-[#C9C2BA] text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
          {t.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center">
          <button
            id="closing-journey-cta"
            onClick={onStartJourney}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#FAF8F5] text-[#181716] hover:bg-white text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <span>{t.ctaJourney}</span>
            <ArrowRight className="w-4 h-4 text-[#181716]" />
          </button>

          <button
            id="closing-specialist-cta"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 border border-white/30 text-[#FAF8F5] hover:border-[#D4BC9B] hover:text-[#D4BC9B] hover:bg-white/5 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.ctaSpecialist}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
