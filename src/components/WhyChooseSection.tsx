import React from 'react';
import { Sliders, ShieldCheck, Sparkles, Wind, Maximize2, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export const WhyChooseSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].whyChoose;

  const featureIcons = [Sparkles, Wind, Sliders, Maximize2, ShieldCheck, Users];

  return (
    <section id="why-sava-bien" className="py-28 lg:py-36 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8A8175] font-medium block mb-4">
            {t.eyebrow}
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#181716] font-light leading-tight tracking-tight mb-4">
            {t.heading}
          </h2>
          <h3 className="font-serif italic text-2xl sm:text-3xl text-[#5C554B] font-light mb-6">
            {language === 'id'
              ? 'Dirancang untuk Ruang yang Menuntut Kesempurnaan.'
              : 'Designed for Spaces That Deserve More.'}
          </h3>
          <p className="text-[#665F55] text-base sm:text-lg font-light leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 6 Premium Editorial Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {t.blocks.map((item, idx) => {
            const IconComponent = featureIcons[idx];
            return (
              <div
                key={item.num}
                className="group relative p-8 sm:p-10 bg-[#F6F3EE] border border-[#ECE5DB] hover:border-[#C5A880] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E3DCD1]">
                    <span className="font-mono text-sm tracking-widest text-[#9C9286] group-hover:text-[#181716] transition-colors">
                      {item.num}
                    </span>
                    <IconComponent className="w-5 h-5 text-[#8C7A65] group-hover:text-[#C5A880] transition-colors" />
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl text-[#181716] font-medium tracking-wide mb-4 uppercase">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#5C554B] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EFEBE4] flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#8C7A65]">
                  <span>SAVA BIEN STANDARD</span>
                  <span className="w-6 h-[1px] bg-[#C5A880] group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
