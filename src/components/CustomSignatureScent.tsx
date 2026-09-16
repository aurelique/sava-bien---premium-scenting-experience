import React from 'react';
import { Sparkles, ArrowRight, Palette, Layers, Award, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface CustomSignatureScentProps {
  onOpenConsultation: () => void;
}

export const CustomSignatureScent: React.FC<CustomSignatureScentProps> = ({ onOpenConsultation }) => {
  const { language } = useLanguage();
  const t = translations[language].customScent;
  const icons = [Palette, Award, Layers, FileText, Sparkles];

  return (
    <section id="custom-signature-scent" className="py-28 lg:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column: Haute Atelier Craft */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#ECE6DC] border border-[#E3DCD1] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85"
                alt="SAVA BIEN Bespoke Perfumery Atelier"
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181716]/60 via-transparent to-transparent" />
              
              <div className="absolute top-6 left-6 bg-[#FAF8F5]/90 backdrop-blur-md px-4 py-2 border border-[#E3DCD1]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#181716] font-medium">
                  {language === 'id' ? 'LAYANAN ATELIER BESPOKE' : 'BESPOKE ATELIER SERVICE'}
                </span>
              </div>

              {/* Philosophy quote preserved in English */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#FAF8F5]/90 backdrop-blur-xs border border-[#E3DCD1]">
                <p className="font-serif italic text-lg text-[#181716] mb-1">
                  &ldquo;A signature scent is the invisible watermark of luxury.&rdquo;
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8C7A65]">
                  {language === 'id'
                    ? 'FORMULA EKSKLUSIF BERHAK CIPTA TERSENDIRI'
                    : 'EXCLUSIVE FORMULATION RESERVED FOR SINGLE ENTITIES'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Narrative & Highlights Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8A8175] font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#AA8C65]" />
              <span>{t.eyebrow}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#181716] font-light leading-tight tracking-tight mb-6">
              {t.heading}
              <br />
              <span className="italic font-light text-[#5C554B]">{t.subheading}</span>
            </h2>

            <p className="text-[#5C554B] text-base sm:text-lg font-light leading-relaxed mb-8">
              {t.description}
            </p>

            {/* 5 Highlights */}
            <div className="space-y-4 mb-10">
              {t.highlights.map((item, idx) => {
                const Icon = icons[idx] || Sparkles;
                return (
                  <div
                    key={item.title}
                    className="p-4 bg-[#F6F3EE] border border-[#ECE6DC] hover:border-[#C5A880] transition-colors flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E3DCD1] flex items-center justify-center text-[#8C7A65] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#AA8C65]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-[#181716] font-medium mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#665F55] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4 text-[#D4BC9B]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
