import React, { useState } from 'react';
import { Building2, ArrowRight, MessageSquare, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { B2B_INDUSTRIES } from '../data/b2b';
import { B2BIndustry } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface B2BSolutionsProps {
  onOpenConsultation: (industryName?: string) => void;
  onExploreIndustryDetails: (industry: B2BIndustry) => void;
}

export const B2BSolutions: React.FC<B2BSolutionsProps> = ({
  onOpenConsultation,
  onExploreIndustryDetails,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<B2BIndustry>(B2B_INDUSTRIES[0]);
  const { language } = useLanguage();
  const t = translations[language].b2b;

  return (
    <section id="b2b-solutions" className="py-28 lg:py-36 bg-[#0F0E0D] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle Dark Mode Luxury Background Textures */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial from-[#C5A880]/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-radial from-[#AA8C65]/15 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4BC9B] font-medium mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5] font-light leading-tight tracking-tight mb-4">
            {t.heading}
          </h2>

          {/* Tagline is preserved in English as strictly requested */}
          <h3 className="font-serif italic text-2xl sm:text-3xl text-[#D8D0C5] font-light mb-6">
            Turn your space into an experience your customers remember.
          </h3>

          <p className="text-[#B3AAA0] text-base sm:text-lg font-light leading-relaxed">
            {t.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">
            <button
              id="b2b-specialist-cta"
              onClick={() => onOpenConsultation(`B2B Inquiry: ${selectedIndustry.name}`)}
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#FAF8F5] text-[#181716] hover:bg-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <MessageSquare className="w-4 h-4 text-[#181716]" />
              <span>{t.ctaSpecialist}</span>
            </button>

            <button
              id="b2b-explore-cta"
              onClick={() => onExploreIndustryDetails(selectedIndustry)}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-white/25 text-[#FAF8F5] hover:border-[#D4BC9B] hover:text-[#D4BC9B] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
            >
              <span>{t.ctaExplore}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 8 Industries Filter Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-12 border-b border-white/10 pb-6">
          {B2B_INDUSTRIES.map((industry) => {
            const isSelected = selectedIndustry.id === industry.id;
            return (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry)}
                className={`py-3 px-2 text-[11px] uppercase tracking-[0.14em] font-medium text-center transition-all duration-300 border-b-2 ${
                  isSelected
                    ? 'border-[#C5A880] text-[#FAF8F5] bg-white/5'
                    : 'border-transparent text-[#9E958C] hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {industry.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Industry Deep Dive Panel */}
        <div className="bg-[#181716] border border-white/10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Industry Image */}
          <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-black/40 border border-white/10">
            <img
              src={selectedIndustry.image}
              alt={selectedIndustry.name}
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] block mb-1">
                {language === 'id' ? 'ARSITEKTUR PENGHARUMAN KOMERSIAL' : 'COMMERCIAL SCENTING ARCHITECTURE'}
              </span>
              <h4 className="font-serif text-2xl font-light text-white">
                {selectedIndustry.name}
              </h4>
            </div>
          </div>

          {/* Right Solution Narrative & Capabilities */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#D4BC9B] font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{language === 'id' ? 'Cetak Biru Strategis Sektor' : 'Sector Strategic Blueprint'}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-light mb-4">
                {selectedIndustry.headline}
              </h3>

              <p className="text-[#C9C2BA] text-sm sm:text-base font-light leading-relaxed mb-6">
                {selectedIndustry.description}
              </p>

              {/* Measurable Impact Highlight */}
              <div className="p-4 bg-white/5 border border-white/10 mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-1">
                  {language === 'id' ? 'Dampak Olfaktori Terukur' : 'Measurable Olfactory Impact'}
                </span>
                <p className="text-xs text-[#E3DCD1] leading-relaxed">
                  {selectedIndustry.impact}
                </p>
              </div>

              {/* Setup and Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs">
                <div className="p-3 bg-black/40 border border-white/5">
                  <span className="text-[9px] uppercase tracking-widest text-[#9E958C] block mb-1">
                    {language === 'id' ? 'Rekomendasi Perangkat' : 'Recommended Hardware'}
                  </span>
                  <p className="text-[#FAF8F5] leading-snug">
                    {selectedIndustry.recommendedSetup}
                  </p>
                </div>

                <div className="p-3 bg-black/40 border border-white/5">
                  <span className="text-[9px] uppercase tracking-widest text-[#9E958C] block mb-1">
                    {language === 'id' ? 'Komposisi Unggulan' : 'Signature Compositions'}
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedIndustry.popularScents.map((scent) => (
                      <span
                        key={scent}
                        className="text-[10px] bg-white/10 px-2 py-0.5 text-[#FAF8F5]"
                      >
                        {scent}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/10">
              <button
                onClick={() => onOpenConsultation(`${selectedIndustry.name} Corporate Assessment`)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#C5A880] text-[#181716] hover:bg-[#D4BC9B] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
              >
                <span>
                  {language === 'id'
                    ? `Minta Proposal Khusus ${selectedIndustry.name}`
                    : `Request ${selectedIndustry.name} Proposal`}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center space-x-2 text-[11px] text-[#A69E94]">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                <span>{language === 'id' ? 'Sesuai Standar Global IFRA & OSHA' : 'Compliant with Global IFRA & OSHA Standards'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Advantages Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          <div className="flex items-start space-x-4">
            <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-serif text-lg text-[#FAF8F5] mb-1">
                {language === 'id' ? 'Integrasi HVAC Sentral' : 'Central HVAC Integration'}
              </h5>
              <p className="text-xs text-[#A69E94] leading-relaxed">
                {language === 'id'
                  ? 'Tersambung langsung ke unit penanganan udara gedung sentral untuk penyebaran aroma tanpa kabel di lantai ruangan.'
                  : 'Connect directly into central air handling units for uniform, invisible dispersion across thousands of square meters with zero floor clutter.'}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-serif text-lg text-[#FAF8F5] mb-1">
                {language === 'id' ? 'Layanan Concierge Menyeluruh' : 'Turnkey White-Glove Concierge'}
              </h5>
              <p className="text-xs text-[#A69E94] leading-relaxed">
                {language === 'id'
                  ? 'Survei lokasi, kalibrasi akustik, jadwal pengisian berkala, hingga pemeliharaan teknis ditangani sepenuhnya oleh tim SAVA BIEN.'
                  : 'Site survey, acoustic balancing, fragrance oil scheduled refills, and 24/7 technical dispatch managed end-to-end by SAVA BIEN specialists.'}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-serif text-lg text-[#FAF8F5] mb-1">
                {language === 'id' ? 'Hak Cipta Aroma Eksklusif' : 'Bespoke Olfactory Copyright'}
              </h5>
              <p className="text-xs text-[#A69E94] leading-relaxed">
                {language === 'id'
                  ? 'Ciptakan formula wewangian proprietary yang hanya dimiliki secara eksklusif oleh jaringan merek atau hotel Anda.'
                  : 'Formulate an exclusive proprietary fragrance formulation owned solely by your brand or property group, protected internationally.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
