import React, { useState } from 'react';
import { Home, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { HOME_SPACES } from '../data/spaces';
import { HomeSpace } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface HomeScentingProps {
  onOpenConsultation: (spaceName: string) => void;
  onOpenScentFinder: () => void;
}

export const HomeScenting: React.FC<HomeScentingProps> = ({
  onOpenConsultation,
  onOpenScentFinder,
}) => {
  const [activeSpace, setActiveSpace] = useState<HomeSpace>(HOME_SPACES[0]);
  const { language } = useLanguage();
  const t = translations[language].homeScenting;

  return (
    <section id="home-scenting" className="py-28 lg:py-36 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8A8175] font-medium mb-4">
            <Home className="w-3.5 h-3.5 text-[#AA8C65]" />
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#181716] font-light leading-tight tracking-tight mb-4">
            {t.heading}
          </h2>

          <p className="text-[#5C554B] text-base sm:text-lg font-light leading-relaxed mb-8">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenScentFinder}
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{t.quizCta}</span>
            </button>

            <button
              onClick={() => onOpenConsultation(`Residential Home Scenting Consultation`)}
              className="inline-flex items-center space-x-2 px-6 py-3.5 border border-[#C5A880] text-[#181716] hover:bg-[#F6F3EE] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              <span>{t.discoverCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5 Domestic Zones Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-4 border-b border-[#ECE6DC]">
          {HOME_SPACES.map((space) => {
            const isSelected = activeSpace.id === space.id;
            return (
              <button
                key={space.id}
                onClick={() => setActiveSpace(space)}
                className={`px-5 py-3 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#181716] text-[#FAF8F5] border-[#181716]'
                    : 'bg-[#F6F3EE] text-[#5C554B] border-[#E3DCD1] hover:border-[#AA8C65] hover:text-[#181716]'
                }`}
              >
                {space.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Zone Showcase */}
        <div className="bg-[#F6F3EE] border border-[#ECE6DC] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xs">
          {/* Architectural Photography */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#ECE6DC]">
            <img
              src={activeSpace.image}
              alt={activeSpace.name}
              className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181716]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#D4BC9B] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{language === 'id' ? 'PROFIL ZONA' : 'ZONE PROFILE'}</span>
              </div>
              <h3 className="font-serif text-3xl font-light">
                {activeSpace.name}
              </h3>
            </div>
          </div>

          {/* Scent & Atmosphere Curation Details */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#AA8C65] font-medium block mb-2">
                {language === 'id' ? 'TARGET SUASANA' : 'ATMOSPHERE GOAL'}
              </span>
              {/* Tagline preserved in English */}
              <h4 className="font-serif text-2xl text-[#181716] font-medium mb-3">
                {activeSpace.tagline}
              </h4>
              <p className="text-xs sm:text-sm text-[#5C554B] font-light leading-relaxed mb-6">
                {activeSpace.description}
              </p>

              <div className="p-4 bg-[#FAF8F5] border border-[#E3DCD1] mb-6">
                <span className="text-[9px] uppercase tracking-widest text-[#8A8175] block mb-1">
                  {language === 'id' ? 'Kesan Olfaktori Ruangan' : 'Olfactory Sensation Target'}
                </span>
                <p className="text-xs text-[#2C2723] font-serif italic">
                  &ldquo;{activeSpace.atmosphereGoal}&rdquo;
                </p>
              </div>

              {/* Recommended Scents and Hardware Pairing */}
              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8A8175] block mb-2 font-medium">
                    {language === 'id' ? 'Kurasi Minyak Wewangian Khas' : 'Curated Signature Fragrances'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeSpace.recommendedScents.map((scent) => (
                      <span
                        key={scent}
                        className="text-xs bg-[#FAF8F5] border border-[#C5A880] text-[#181716] px-3 py-1 font-serif font-medium"
                      >
                        {scent}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8A8175] block mb-1 font-medium">
                    {language === 'id' ? 'Rekomendasi Perangkat Difuser' : 'Recommended Device Pairing'}
                  </span>
                  <p className="text-xs text-[#2C2723] font-medium">
                    {activeSpace.recommendedDevice}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E3DCD1]">
              <button
                onClick={() => onOpenConsultation(`Home Consultation for ${activeSpace.name}`)}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <span>
                  {language === 'id'
                    ? `Kurasi Wewangian Untuk ${activeSpace.name}`
                    : 'Curate Scenting For This Space'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Spaces Scannable Architectural Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {HOME_SPACES.map((space) => {
            const isCurrent = activeSpace.id === space.id;
            return (
              <div
                key={space.id}
                onClick={() => setActiveSpace(space)}
                className={`p-4 bg-[#FAF8F5] border transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? 'border-[#181716] shadow-sm'
                    : 'border-[#E3DCD1] hover:border-[#AA8C65]'
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#ECE6DC] mb-3">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="font-serif text-base text-[#181716] font-medium">
                  {space.name}
                </h5>
                <p className="text-[10px] text-[#7A7165] line-clamp-1 mt-1">
                  {space.recommendedScents.join(' · ')}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
