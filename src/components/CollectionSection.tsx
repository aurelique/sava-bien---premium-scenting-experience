import React, { useState } from 'react';
import { ArrowRight, Droplet, Wind, Eye, Sparkles } from 'lucide-react';
import { FRAGRANCES } from '../data/fragrances';
import { DIFFUSERS } from '../data/diffusers';
import { Fragrance, DiffuserDevice } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface CollectionSectionProps {
  onSelectFragrance: (fragrance: Fragrance) => void;
  onSelectDiffuser: (diffuser: DiffuserDevice) => void;
  onScrollToSignatureScents: () => void;
  onScrollToTechnology: () => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  onSelectFragrance,
  onSelectDiffuser,
  onScrollToSignatureScents,
  onScrollToTechnology,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'oils' | 'diffusers'>('all');
  const { language } = useLanguage();
  const t = translations[language].collection;

  return (
    <section id="collection" className="py-28 lg:py-36 bg-[#F6F3EE] border-t border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 pb-8 border-b border-[#E3DCD1]">
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8A8175] font-medium block mb-4">
              {t.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181716] font-light leading-tight tracking-tight mb-4">
              {t.heading}
            </h2>
            <p className="text-[#665F55] text-base sm:text-lg font-light leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 md:mt-0 flex items-center p-1 bg-[#EBE5DB] border border-[#DDD5C9]">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-300 font-medium ${
                activeTab === 'all'
                  ? 'bg-[#181716] text-[#FAF8F5] shadow-xs'
                  : 'text-[#665F55] hover:text-[#181716]'
              }`}
            >
              {t.tabs.all}
            </button>
            <button
              onClick={() => setActiveTab('oils')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-300 font-medium ${
                activeTab === 'oils'
                  ? 'bg-[#181716] text-[#FAF8F5] shadow-xs'
                  : 'text-[#665F55] hover:text-[#181716]'
              }`}
            >
              {t.tabs.fragrances}
            </button>
            <button
              onClick={() => setActiveTab('diffusers')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-300 font-medium ${
                activeTab === 'diffusers'
                  ? 'bg-[#181716] text-[#FAF8F5] shadow-xs'
                  : 'text-[#665F55] hover:text-[#181716]'
              }`}
            >
              {t.tabs.diffusers}
            </button>
          </div>
        </div>

        {/* Two Grand Category Hero Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* FRAGRANCE OILS CATEGORY */}
          <div className="group relative bg-[#FAF8F5] border border-[#E5DFD4] p-8 sm:p-12 flex flex-col justify-between overflow-hidden hover:border-[#C5A880] transition-all duration-500 shadow-xs">
            <div className="relative z-10">
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#8C7A65] mb-4">
                <Droplet className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{language === 'id' ? 'KATEGORI 01' : 'CATEGORY 01'}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#181716] font-light mb-4">
                {language === 'id' ? 'Minyak Wewangian Khas' : 'Premium Fragrance Oils'}
              </h3>
              <p className="text-[#5C554B] text-sm sm:text-base font-light leading-relaxed mb-6 max-w-md">
                {language === 'id'
                  ? 'Komposisi aroma mewah yang dirancang untuk menciptakan suasana khas, ingatan abadi, dan karakter ruang istimewa. Diracik dari ekstrak botani dan esensi murni.'
                  : 'Refined fragrance compositions designed to create distinctive moods, memories, and identities. Formulated with raw botanical extracts and noble essences.'}
              </p>
              <button
                onClick={onScrollToSignatureScents}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#181716] group-hover:text-[#AA8C65] transition-colors"
              >
                <span>{language === 'id' ? 'Jelajahi Koleksi Aroma' : 'Explore Fragrances'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            <div className="relative mt-8 aspect-[16/9] overflow-hidden bg-[#EFEBE4]">
              <img
                src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1000&q=85"
                alt="SAVA BIEN Fragrance Oils"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181716]/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#FAF8F5] text-xs">
                <span className="font-mono text-[10px] tracking-wider uppercase">
                  {language === 'id' ? '6 Komposisi Khas' : '6 Signature Compositions'}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4BC9B]">
                  {language === 'id' ? 'Ekstrak Murni Tanpa Pengencer' : 'Pure Undiluted Extract'}
                </span>
              </div>
            </div>
          </div>

          {/* WATERLESS DIFFUSERS CATEGORY */}
          <div className="group relative bg-[#FAF8F5] border border-[#E5DFD4] p-8 sm:p-12 flex flex-col justify-between overflow-hidden hover:border-[#C5A880] transition-all duration-500 shadow-xs">
            <div className="relative z-10">
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#8C7A65] mb-4">
                <Wind className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{language === 'id' ? 'KATEGORI 02' : 'CATEGORY 02'}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#181716] font-light mb-4">
                {language === 'id' ? 'Teknologi Difusi Tanpa Air' : 'Waterless Scenting Technology'}
              </h3>
              <p className="text-[#5C554B] text-sm sm:text-base font-light leading-relaxed mb-6 max-w-md">
                {language === 'id'
                  ? 'Difusi udara dingin mutakhir yang dirancang untuk pengharuman efisien, merata, dan mewah. Tanpa air, tanpa pemanasan, dan tanpa residu basah.'
                  : 'Advanced cold-air diffusion designed for efficient, consistent, and sophisticated scenting. Zero water, zero heat, zero maintenance residue.'}
              </p>
              <button
                onClick={onScrollToTechnology}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#181716] group-hover:text-[#AA8C65] transition-colors"
              >
                <span>{language === 'id' ? 'Lihat Lini Difuser' : 'Explore Diffusers'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            <div className="relative mt-8 aspect-[16/9] overflow-hidden bg-[#EFEBE4]">
              <img
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85"
                alt="SAVA BIEN Waterless Cold Air Diffuser"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181716]/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#FAF8F5] text-xs">
                <span className="font-mono text-[10px] tracking-wider uppercase">
                  {language === 'id' ? 'Model Hunian & Komersial' : 'Residential & Commercial Models'}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4BC9B]">
                  {language === 'id' ? 'Kabut Kering Sub-Mikron' : 'Dry Micro-Mist'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Product Showcase depending on filter */}
        {(activeTab === 'all' || activeTab === 'oils') && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E3DCD1]">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-4 h-4 text-[#AA8C65]" />
                <h4 className="font-serif text-2xl text-[#181716]">
                  {language === 'id' ? 'Koleksi Pilihan Minyak Wewangian' : 'Featured Fragrance Oils'}
                </h4>
              </div>
              <button
                onClick={onScrollToSignatureScents}
                className="text-xs uppercase tracking-[0.16em] text-[#7A7165] hover:text-[#181716] flex items-center space-x-1"
              >
                <span>{language === 'id' ? 'Lihat Semua 6 Aroma' : 'View All 6 Notes'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FRAGRANCES.slice(0, 3).map((fragrance) => (
                <div
                  key={fragrance.id}
                  onClick={() => onSelectFragrance(fragrance)}
                  className="bg-[#FAF8F5] border border-[#E8E2D8] p-6 group cursor-pointer hover:border-[#C5A880] transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#ECE6DC] mb-6">
                    <img
                      src={fragrance.image}
                      alt={fragrance.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#181716]">
                      {fragrance.family}
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h5 className="font-serif text-xl text-[#181716] font-medium tracking-wide">
                      {fragrance.name}
                    </h5>
                    <span className="text-[10px] uppercase tracking-widest text-[#8A8175]">
                      50ml / 500ml
                    </span>
                  </div>
                  <p className="text-xs text-[#7A7165] font-light mb-4">
                    {fragrance.subtitle}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#AA8C65] font-medium pt-3 border-t border-[#EFEBE4]">
                    <span>{t.viewNotes}</span>
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'diffusers') && (
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E3DCD1]">
              <div className="flex items-center space-x-3">
                <Wind className="w-4 h-4 text-[#AA8C65]" />
                <h4 className="font-serif text-2xl text-[#181716]">
                  {language === 'id' ? 'Sistem Difuser Tanpa Air' : 'Waterless Hardware Systems'}
                </h4>
              </div>
              <button
                onClick={onScrollToTechnology}
                className="text-xs uppercase tracking-[0.16em] text-[#7A7165] hover:text-[#181716] flex items-center space-x-1"
              >
                <span>{language === 'id' ? 'Pelajari Spesifikasi Detail' : 'Technology Deep Dive'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DIFFUSERS.map((device) => (
                <div
                  key={device.id}
                  onClick={() => onSelectDiffuser(device)}
                  className="bg-[#FAF8F5] border border-[#E8E2D8] p-6 group cursor-pointer hover:border-[#C5A880] transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE6DC] mb-6">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#181716] text-[#FAF8F5] px-2.5 py-1 text-[9px] uppercase tracking-wider">
                        {device.modelCode}
                      </div>
                    </div>
                    <h5 className="font-serif text-xl text-[#181716] font-medium tracking-wide mb-1">
                      {device.name}
                    </h5>
                    {/* Device Tagline is strictly preserved in English as requested */}
                    <p className="text-xs text-[#7A7165] font-light mb-4 line-clamp-2">
                      {device.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EFEBE4] flex items-center justify-between text-xs">
                    <span className="text-[#5C554B] font-mono text-[11px]">
                      {language === 'id' ? 'Hingga' : 'Up to'} {device.coverageSqM} m² ({device.coverageSqFt} sq ft)
                    </span>
                    <span className="text-[#AA8C65] font-medium flex items-center space-x-1">
                      <span>{t.viewBlueprint}</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
