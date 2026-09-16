import React from 'react';
import { X, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { Fragrance } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FragranceDetailModalProps {
  fragrance: Fragrance | null;
  onClose: () => void;
  onRequestSample: (fragranceName: string) => void;
}

export const FragranceDetailModal: React.FC<FragranceDetailModalProps> = ({
  fragrance,
  onClose,
  onRequestSample,
}) => {
  const { language } = useLanguage();
  if (!fragrance) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#E3DCD1] shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FAF8F5]/80 hover:bg-[#181716] hover:text-[#FAF8F5] transition-colors border border-[#E3DCD1]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column Image & Aura */}
          <div className="md:col-span-5 relative aspect-[4/5] md:aspect-auto overflow-hidden bg-[#ECE6DC]">
            <img
              src={fragrance.image}
              alt={fragrance.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181716]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BC9B] block mb-1">
                {language === 'id' ? 'FORMULASI SAVA BIEN' : 'SAVA BIEN FORMULATION'}
              </span>
              <h3 className="font-serif text-3xl font-light">
                {fragrance.name}
              </h3>
              <p className="text-xs text-[#D8D2C7] font-light mt-1">
                {fragrance.family}
              </p>
            </div>
          </div>

          {/* Right Column Full Olfactory Profile */}
          <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#AA8C65] font-medium mb-2">
                <Sparkles className="w-3 h-3 text-[#C5A880]" />
                <span>
                  {language === 'id' ? 'DOSIR MINYAK WEWANGIAN PREMIUM' : 'PREMIUM FRAGRANCE OIL DOSSIER'}
                </span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl text-[#181716] font-medium mb-1">
                {fragrance.name}
              </h4>
              <p className="text-xs uppercase tracking-[0.18em] text-[#8C7A65] font-medium mb-4">
                {fragrance.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#5C554B] font-light leading-relaxed mb-6">
                {fragrance.description}
              </p>

              {/* Character Quote preserved in English */}
              <div className="p-3.5 bg-[#F6F3EE] border-l-2 border-[#C5A880] mb-6">
                <span className="text-[9px] uppercase tracking-widest text-[#8A8175] block mb-0.5">
                  {language === 'id' ? 'Esensi Suasana' : 'Atmospheric Essence'}
                </span>
                <p className="text-xs font-serif italic text-[#181716]">
                  &ldquo;{fragrance.character}&rdquo;
                </p>
              </div>

              {/* Olfactory Notes Pyramid */}
              <div className="mb-6 space-y-3">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#181716] font-medium pb-1 border-b border-[#ECE6DC]">
                  <Layers className="w-3.5 h-3.5 text-[#AA8C65]" />
                  <span>{language === 'id' ? 'Piramida Aroma' : 'Notes Pyramid'}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start">
                    <span className="w-20 font-medium text-[#181716] text-[11px] uppercase tracking-wider shrink-0">
                      {language === 'id' ? 'Atas (Top):' : 'Top:'}
                    </span>
                    <span className="text-[#5C554B]">
                      {fragrance.topNotes.join(', ')}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-20 font-medium text-[#181716] text-[11px] uppercase tracking-wider shrink-0">
                      {language === 'id' ? 'Tengah (Heart):' : 'Heart:'}
                    </span>
                    <span className="text-[#5C554B]">
                      {fragrance.heartNotes.join(', ')}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-20 font-medium text-[#181716] text-[11px] uppercase tracking-wider shrink-0">
                      {language === 'id' ? 'Dasar (Base):' : 'Base:'}
                    </span>
                    <span className="text-[#5C554B]">
                      {fragrance.baseNotes.join(', ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mood and Intensity */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#ECE6DC] mb-6">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#8A8175] block mb-1">
                    {language === 'id' ? 'Intensitas' : 'Intensity'}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <span
                        key={lvl}
                        className={`w-2 h-2 rounded-full ${
                          lvl <= fragrance.intensity ? 'bg-[#181716]' : 'bg-[#E3DCD1]'
                        }`}
                      />
                    ))}
                    <span className="text-[10px] text-[#7A7165] ml-2">
                      {language === 'id' ? `Tingkat ${fragrance.intensity} dari 5` : `Level ${fragrance.intensity} of 5`}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#8A8175] block mb-1">
                    {language === 'id' ? 'Direkomendasikan Untuk' : 'Recommended For'}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {fragrance.recommendedSpaces.slice(0, 2).map((s) => (
                      <span key={s} className="text-[10px] bg-[#ECE6DC] px-1.5 py-0.5 text-[#2C2723]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#ECE6DC]">
              <button
                onClick={() => {
                  onRequestSample(fragrance.name);
                  onClose();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <span>{language === 'id' ? 'Minta Sampel Tester' : 'Request Fragrance Sample'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4BC9B]" />
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 border border-[#D9D2C7] text-[#5C554B] hover:text-[#181716] text-xs uppercase tracking-[0.16em] transition-colors"
              >
                {language === 'id' ? 'Tutup Dosir' : 'Close Dossier'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
