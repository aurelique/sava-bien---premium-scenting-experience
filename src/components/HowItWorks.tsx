import React from 'react';
import { Compass, Cpu, SlidersHorizontal, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface HowItWorksProps {
  onStartJourney: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartJourney }) => {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;
  const icons = [Compass, Cpu, SlidersHorizontal, Sparkles];

  return (
    <section id="how-it-works" className="py-28 lg:py-36 bg-[#F6F3EE] border-t border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8A8175] font-medium block mb-4">
            {t.eyebrow}
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#181716] font-light tracking-tight mb-4">
            {t.heading}
          </h2>
          <p className="text-[#665F55] text-base sm:text-lg font-light leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
          {t.steps.map((step, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div
                key={step.num}
                className="bg-[#FAF8F5] border border-[#E3DCD1] p-8 flex flex-col justify-between hover:border-[#C5A880] transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#ECE6DC]">
                    <span className="font-serif text-3xl text-[#AA8C65] font-light">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#8C7A65] group-hover:text-[#181716] transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#181716] font-medium mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs uppercase tracking-[0.15em] text-[#8A8175] font-medium mb-4">
                    {step.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#5C554B] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EFEBE4] flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#8A8175]">
                  <span>{language === 'id' ? `TAHAP ${step.num}` : `STAGE ${step.num}`}</span>
                  <span className="w-2 h-2 rounded-full bg-[#D4BC9B]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={onStartJourney}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4 text-[#D4BC9B]" />
          </button>
        </div>
      </div>
    </section>
  );
};
