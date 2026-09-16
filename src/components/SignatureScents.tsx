import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, Check, Layers, MapPin } from 'lucide-react';
import { FRAGRANCES } from '../data/fragrances';
import { Fragrance } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface SignatureScentsProps {
  onSelectFragrance: (fragrance: Fragrance) => void;
  onOpenConsultation: (topic: string) => void;
}

export const SignatureScents: React.FC<SignatureScentsProps> = ({
  onSelectFragrance,
  onOpenConsultation,
}) => {
  const [selectedFragrance, setSelectedFragrance] = useState<Fragrance>(FRAGRANCES[0]);
  const [sampleRequested, setSampleRequested] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = translations[language].signatureScents;

  const handleRequestSample = (name: string) => {
    setSampleRequested(name);
    setTimeout(() => {
      onOpenConsultation(`Discovery Sample Pack: ${name}`);
    }, 600);
  };

  return (
    <section id="signature-scents" className="py-28 lg:py-36 bg-[#F6F3EE] border-t border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
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

        {/* Fragrance Selector Tabs / Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {FRAGRANCES.map((fragrance) => {
            const isSelected = selectedFragrance.id === fragrance.id;
            return (
              <button
                key={fragrance.id}
                onClick={() => setSelectedFragrance(fragrance)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#181716] text-[#FAF8F5] border-[#181716] shadow-sm scale-102'
                    : 'bg-[#FAF8F5] text-[#5C554B] border-[#E3DCD1] hover:border-[#AA8C65] hover:text-[#181716]'
                }`}
              >
                {fragrance.name}
              </button>
            );
          })}
        </div>

        {/* Featured Interactive Perfume Display */}
        <div className="bg-[#FAF8F5] border border-[#E3DCD1] shadow-xs grid grid-cols-1 lg:grid-cols-12 overflow-hidden mb-16">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-auto overflow-hidden bg-[#ECE6DC]">
            <img
              src={selectedFragrance.image}
              alt={selectedFragrance.name}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181716]/60 via-transparent to-transparent" />
            
            {/* Overlay badge */}
            <div className="absolute top-6 left-6 bg-[#FAF8F5]/90 backdrop-blur-md px-4 py-2 border border-[#E3DCD1]">
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#181716]">
                {selectedFragrance.family}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4BC9B] block mb-1">
                SAVA BIEN FORMULATION
              </span>
              {/* Character Quote - PRESERVED IN ORIGINAL ENGLISH */}
              <p className="font-serif text-2xl font-light italic">
                &ldquo;{selectedFragrance.character}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Sensory Notes & Pyramid Details */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-6 border-b border-[#ECE6DC] gap-2">
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#181716] font-medium tracking-wide mb-1">
                    {selectedFragrance.name}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#AA8C65] font-medium">
                    {selectedFragrance.subtitle}
                  </p>
                </div>

                {/* Intensity Gauge */}
                <div className="flex flex-col sm:items-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A65] mb-1.5">
                    {t.intensityLabel}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <span
                        key={level}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          level <= selectedFragrance.intensity
                            ? 'bg-[#181716]'
                            : 'bg-[#E3DCD1]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Narrative description */}
              <p className="text-[#5C554B] text-sm sm:text-base font-light leading-relaxed mb-8">
                {selectedFragrance.description}
              </p>

              {/* Olfactory Pyramid (Top, Heart, Base) */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#8C7A65] font-medium pb-2 border-b border-[#ECE6DC]">
                  <Layers className="w-3.5 h-3.5 text-[#AA8C65]" />
                  <span>{t.notesHeader}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 bg-[#F6F3EE] border border-[#ECE6DC]">
                    <span className="text-[10px] uppercase tracking-widest text-[#8A8175] font-medium block mb-2">
                      {language === 'id' ? 'Top Notes' : 'Top Notes'}
                    </span>
                    <ul className="text-xs text-[#2C2723] space-y-1">
                      {selectedFragrance.topNotes.map((note) => (
                        <li key={note}>• {note}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-[#F6F3EE] border border-[#ECE6DC]">
                    <span className="text-[10px] uppercase tracking-widest text-[#8A8175] font-medium block mb-2">
                      {language === 'id' ? 'Heart Notes' : 'Heart Notes'}
                    </span>
                    <ul className="text-xs text-[#2C2723] space-y-1">
                      {selectedFragrance.heartNotes.map((note) => (
                        <li key={note}>• {note}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-[#F6F3EE] border border-[#ECE6DC]">
                    <span className="text-[10px] uppercase tracking-widest text-[#8A8175] font-medium block mb-2">
                      {language === 'id' ? 'Base Notes' : 'Base Notes'}
                    </span>
                    <ul className="text-xs text-[#2C2723] space-y-1">
                      {selectedFragrance.baseNotes.map((note) => (
                        <li key={note}>• {note}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mood & Recommended Spaces */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#ECE6DC] mb-8">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8A8175] font-medium block mb-2">
                    {language === 'id' ? 'Karakter Suasana' : 'Atmospheric Mood'}
                  </span>
                  <p className="text-xs text-[#4A453E] leading-relaxed">
                    {selectedFragrance.mood}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8A8175] font-medium block mb-2 flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-[#AA8C65]" />
                    <span>{t.bestForLabel}</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedFragrance.recommendedSpaces.map((space) => (
                      <span
                        key={space}
                        className="text-[11px] bg-[#EFECE6] text-[#4A453E] px-2.5 py-1 border border-[#E3DCD1]"
                      >
                        {space}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-[#ECE6DC]">
              <button
                onClick={() => onSelectFragrance(selectedFragrance)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-[#D4BC9B]" />
                <span>{t.viewDossier}</span>
              </button>

              <button
                onClick={() => handleRequestSample(selectedFragrance.name)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 border border-[#C5A880] text-[#181716] hover:bg-[#FAF8F5] hover:border-[#181716] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                {sampleRequested === selectedFragrance.name ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2C6E49]" />
                    <span>{language === 'id' ? 'Permintaan Terkirim' : 'Inquiry Initiated'}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#AA8C65]" />
                    <span>{t.orderSamples}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 6 Fragrances Scannable Grid Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {FRAGRANCES.map((fragrance) => {
            const isCurrent = selectedFragrance.id === fragrance.id;
            return (
              <div
                key={fragrance.id}
                onClick={() => setSelectedFragrance(fragrance)}
                className={`p-4 bg-[#FAF8F5] border transition-all duration-300 cursor-pointer text-left ${
                  isCurrent
                    ? 'border-[#181716] ring-1 ring-[#181716]'
                    : 'border-[#E3DCD1] hover:border-[#C5A880]'
                }`}
              >
                <div className="aspect-[3/4] mb-3 overflow-hidden bg-[#ECE6DC]">
                  <img
                    src={fragrance.image}
                    alt={fragrance.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h5 className="font-serif text-sm text-[#181716] font-medium tracking-wide">
                  {fragrance.name}
                </h5>
                <p className="text-[10px] text-[#8C7A65] truncate mt-0.5">
                  {fragrance.family}
                </p>
              </div>
            );
          })}
        </div>

        {/* Explore All CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenConsultation('Full Olfactory Library Consultation')}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#181716] hover:text-[#AA8C65] font-medium border-b border-[#181716] hover:border-[#AA8C65] pb-1 transition-colors"
          >
            <span>
              {language === 'id'
                ? 'Konsultasi Kurasi Aroma & Perpustakaan Formula Lengkap'
                : 'Explore All SAVA BIEN Fragrances & Custom Library'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
