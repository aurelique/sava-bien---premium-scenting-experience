import React, { useState } from 'react';
import { Wind, Flame, Droplets, VolumeX, ShieldAlert, Cpu, Sparkles, Check, X, ArrowRight } from 'lucide-react';
import { DIFFUSERS } from '../data/diffusers';
import { DiffuserDevice } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface TechnologySectionProps {
  onSelectDevice: (device: DiffuserDevice) => void;
  onOpenConsultation: (topic: string) => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({
  onSelectDevice,
  onOpenConsultation,
}) => {
  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(0);
  const activeDevice = DIFFUSERS[selectedDeviceIndex];
  const { language } = useLanguage();
  const t = translations[language].technology;

  const highlightIcons = [
    Droplets,
    Flame,
    Sparkles,
    Wind,
    VolumeX,
    ShieldAlert,
    Wind,
    Cpu,
  ];

  return (
    <section id="technology" className="py-28 lg:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8A8175] font-medium block mb-4">
            {t.eyebrow}
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#181716] font-light tracking-tight mb-6">
            {language === 'id' ? 'Aroma Murni.' : 'Pure Fragrance.'}
            <br />
            <span className="italic font-light text-[#5C554B]">
              {language === 'id' ? 'Difusi Pintar Tanpa Air.' : 'Intelligent Diffusion.'}
            </span>
          </h2>
          <p className="text-[#5C554B] text-base sm:text-lg font-light leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 8 Technical Highlight Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {t.highlights.map((item, idx) => {
            const Icon = highlightIcons[idx] || Sparkles;
            return (
              <div
                key={item.title}
                className="p-6 bg-[#F6F3EE] border border-[#ECE6DC] hover:border-[#C5A880] transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E3DCD1] flex items-center justify-center mb-4 text-[#8C7A65] group-hover:text-[#181716] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-[#181716] font-medium mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#665F55] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Sculptural Device Showcase */}
        <div className="bg-[#F6F3EE] border border-[#ECE6DC] p-8 sm:p-12 lg:p-16 mb-24">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 pb-8 border-b border-[#E3DCD1] gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A65] block mb-2">
                {language === 'id' ? 'PORTOFOLIO PERANGKAT ARSITEKTURAL' : 'ARCHITECTURAL HARDWARE PORTFOLIO'}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#181716] font-light">
                {language === 'id'
                  ? 'Dirancang untuk Diskresi & Keindahan Arsitektur'
                  : 'Engineered for Discretion & Architectural Beauty'}
              </h3>
            </div>

            {/* Device Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {DIFFUSERS.map((device, idx) => (
                <button
                  key={device.id}
                  onClick={() => setSelectedDeviceIndex(idx)}
                  className={`px-4 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 border ${
                    selectedDeviceIndex === idx
                      ? 'bg-[#181716] text-[#FAF8F5] border-[#181716]'
                      : 'bg-[#FAF8F5] text-[#5C554B] border-[#E3DCD1] hover:border-[#AA8C65]'
                  }`}
                >
                  {device.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hardware Image */}
            <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-[#E8E2D8] border border-[#E3DCD1]">
              <img
                src={activeDevice.image}
                alt={activeDevice.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-[#181716]/90 text-white px-3 py-1 text-[10px] uppercase tracking-widest">
                {activeDevice.modelCode}
              </div>
            </div>

            {/* Right Specs & Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#181716] font-medium mb-2">
                  {activeDevice.name}
                </h4>
                {/* Device tagline kept in English */}
                <p className="text-xs uppercase tracking-[0.2em] text-[#AA8C65] font-medium mb-4">
                  {activeDevice.tagline}
                </p>
                <p className="text-sm text-[#5C554B] font-light leading-relaxed mb-6">
                  {activeDevice.description}
                </p>

                {/* Technical Metric Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D8]">
                    <span className="text-[9px] uppercase tracking-widest text-[#8A8175] block">
                      {language === 'id' ? 'Cakupan Area' : 'Coverage'}
                    </span>
                    <span className="text-xs font-mono font-medium text-[#181716]">
                      {activeDevice.coverageSqM} m² ({activeDevice.coverageSqFt} sq ft)
                    </span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D8]">
                    <span className="text-[9px] uppercase tracking-widest text-[#8A8175] block">
                      {language === 'id' ? 'Akustik' : 'Acoustics'}
                    </span>
                    <span className="text-xs font-mono font-medium text-[#181716]">
                      {activeDevice.noiseLevel}
                    </span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D8]">
                    <span className="text-[9px] uppercase tracking-widest text-[#8A8175] block">
                      {language === 'id' ? 'Kapasitas' : 'Capacity'}
                    </span>
                    <span className="text-xs font-mono font-medium text-[#181716]">
                      {activeDevice.capacityMl} ml
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {activeDevice.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-[#4A453E]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-[#E3DCD1]">
                <button
                  onClick={() => onSelectDevice(activeDevice)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  <span>{language === 'id' ? 'Lihat Spesifikasi Lengkap' : 'Full Technical Blueprint'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4BC9B]" />
                </button>

                <button
                  onClick={() => onOpenConsultation(`Hardware Pairing Inquiry: ${activeDevice.name}`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 border border-[#C5A880] text-[#181716] hover:bg-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  <span>{language === 'id' ? 'Permintaan Brosur & Panduan Instalasi' : 'Request Architectural Spec Sheet'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comparative Matrix: SAVA BIEN Waterless vs Traditional Methods */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A65] block mb-2">
              {language === 'id' ? 'STANDAR AROMA PROFESIONAL' : 'THE OLFACTORY STANDARD'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#181716] font-light">
              {language === 'id'
                ? 'Mengapa Teknologi Udara Dingin Tanpa Air Mengungguli Cara Tradisional'
                : 'Why Waterless Cold-Air Atomization Outperforms Everything Else'}
            </h3>
          </div>

          <div className="overflow-x-auto border border-[#E3DCD1] bg-[#FAF8F5]">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-[#E3DCD1] bg-[#F6F3EE]">
                  <th className="p-4 sm:p-5 text-xs uppercase tracking-[0.16em] font-medium text-[#7A7165]">
                    {language === 'id' ? 'Metrik Performa' : 'Performance Metric'}
                  </th>
                  <th className="p-4 sm:p-5 text-xs uppercase tracking-[0.2em] font-bold text-[#181716] bg-[#EFECE6] border-x border-[#E3DCD1]">
                    {language === 'id' ? 'SAVA BIEN Tanpa Air' : 'SAVA BIEN Waterless'}
                  </th>
                  <th className="p-4 sm:p-5 text-xs uppercase tracking-[0.16em] font-medium text-[#7A7165]">
                    {language === 'id' ? 'Difuser Air Ultrasonik' : 'Ultrasonic Water Diffusers'}
                  </th>
                  <th className="p-4 sm:p-5 text-xs uppercase tracking-[0.16em] font-medium text-[#7A7165]">
                    {language === 'id' ? 'Lilin Beraroma / Pembakaran' : 'Scented Wax / Burning Candles'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECE6DC] text-xs sm:text-sm text-[#4A453E]">
                {t.comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F9F7F4] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-[#181716]">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 bg-[#FAF8F5] border-x border-[#E3DCD1] font-medium text-[#181716] flex items-center space-x-2">
                      <Check className="w-4 h-4 text-[#2C6E49] shrink-0" />
                      <span>{row.savaBien}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-[#7A7165]">
                      <div className="flex items-center space-x-2">
                        <X className="w-3.5 h-3.5 text-[#B85042] shrink-0" />
                        <span>{row.waterUltrasonic}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-[#7A7165]">
                      <div className="flex items-center space-x-2">
                        <X className="w-3.5 h-3.5 text-[#B85042] shrink-0" />
                        <span>{row.candlesHeat}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
