import React from 'react';
import { ArrowRight, Sparkles, Feather, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface AboutSectionProps {
  onDiscoverStory: () => void;
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onDiscoverStory,
  onOpenConsultation,
}) => {
  const { language } = useLanguage();
  const t = translations[language].about;
  const icons = [Feather, Sparkles, ShieldCheck, Heart];

  return (
    <section id="about-story" className="py-28 lg:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8A8175] font-medium block mb-4">
              {t.eyebrow}
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#181716] font-light leading-tight tracking-tight mb-6">
              {t.heading}
              <br />
              <span className="italic font-light text-[#5C554B]">{t.subheading}</span>
            </h2>

            <p className="text-[#5C554B] text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.p1}
            </p>

            <p className="text-[#5C554B] text-base sm:text-lg font-light leading-relaxed mb-8">
              {t.p2}
            </p>

            {/* 4 Pillars Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {t.pillars.map((pillar, idx) => {
                const Icon = icons[idx] || Sparkles;
                return (
                  <div key={pillar.title} className="p-4 bg-[#F6F3EE] border border-[#ECE6DC]">
                    <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#181716] font-medium mb-1">
                      <Icon className="w-3.5 h-3.5 text-[#AA8C65]" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-[#665F55] font-light leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onDiscoverStory}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <span>{t.ctaStory}</span>
                <ArrowRight className="w-4 h-4 text-[#D4BC9B]" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 border border-[#C5A880] text-[#181716] hover:bg-[#F6F3EE] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <span>{t.ctaConcierge}</span>
              </button>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#ECE6DC] border border-[#E3DCD1] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85"
                alt="SAVA BIEN Fragrance Bottling and Atelier"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181716]/60 via-transparent to-transparent" />
              {/* Philosophy quote preserved in English as requested */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#FAF8F5]/95 backdrop-blur-xs border border-[#E3DCD1]">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#AA8C65] font-semibold block mb-1">
                  {language === 'id' ? 'STANDAR ATELIER' : 'ATELIER STANDARD'}
                </span>
                <p className="font-serif italic text-base text-[#181716] leading-snug">
                  &ldquo;A scent is not applied to a space; it is awakened within it.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
