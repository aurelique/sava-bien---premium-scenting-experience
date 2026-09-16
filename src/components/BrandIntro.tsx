import React from 'react';
import { Compass, Sparkles, Wind, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export const BrandIntro: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].brandIntro;

  const pillarIcons = [Sparkles, Wind, Compass, HeartHandshake];

  return (
    <section id="brand-intro" className="py-28 lg:py-36 bg-[#FAF8F5] relative overflow-hidden">
      {/* Editorial Decorative Background Details */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Core Philosophy Quote Block */}
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-28">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#9C9286] font-medium block mb-6">
            {t.eyebrow}
          </span>

          {/* Core Philosophy Quote - STRICTLY PRESERVED IN ENGLISH */}
          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#181716] font-light leading-snug tracking-tight mb-8">
            &ldquo;Every space has a feeling.{' '}
            <span className="italic text-[#7A7165]">Every feeling can have a scent.</span>&rdquo;
          </blockquote>

          <div className="w-16 h-[1px] bg-[#D4BC9B] mx-auto mb-8" />

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#181716] font-light leading-tight mb-6">
            {t.heading}
            <br />
            <span className="italic font-light text-[#575046]">{t.headingSub}</span>
          </h2>

          <p className="text-[#5C554B] text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            {t.lead}
          </p>
        </div>

        {/* Narrative Split: Architectural Imagery + Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E2D8] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"
                alt="SAVA BIEN Atmospheric Scent Architecture"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181716]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#FAF8F5]/90 backdrop-blur-xs border border-[#E3DCD1]">
                {/* Atelier Quote - STRICTLY PRESERVED IN ENGLISH */}
                <p className="font-serif italic text-base sm:text-lg text-[#181716] leading-snug mb-1">
                  &ldquo;Scent is the most intimate architectural finish.&rdquo;
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#7A7165]">
                  SAVA BIEN OLFACTORY ATELIER
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#AA8C65] font-medium">
              {t.convergenceEyebrow}
            </span>

            {/* Philosophy Equation - STRICTLY PRESERVED IN ENGLISH */}
            <h3 className="font-serif text-3xl sm:text-4xl text-[#181716] font-light leading-snug">
              Fragrance × Technology × Space × Emotion
            </h3>

            <p className="text-[#5C554B] text-base sm:text-lg font-light leading-relaxed">
              {t.p1}
            </p>

            <p className="text-[#5C554B] text-base sm:text-lg font-light leading-relaxed">
              {t.p2}
            </p>

            {/* Scent Capabilities List */}
            <div className="pt-4 border-t border-[#E8E2D8] grid grid-cols-2 gap-y-3 gap-x-4">
              {t.capabilities.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs sm:text-sm text-[#4A453E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#E8E2D8]">
          {t.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx];
            return (
              <div
                key={pillar.title}
                className="p-8 bg-[#F6F3EE] border border-[#ECE6DC] hover:border-[#D4BC9B] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <Icon className="w-5 h-5 text-[#8C7A65] group-hover:text-[#181716] transition-colors" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#B5ABA0]">
                    0{idx + 1}
                  </span>
                </div>
                {/* Pillar titles (FRAGRANCE, TECHNOLOGY, SPACE, EMOTION) kept in original architectural terms */}
                <h4 className="font-serif text-xl text-[#181716] font-medium tracking-wide mb-3">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#665E54] font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
