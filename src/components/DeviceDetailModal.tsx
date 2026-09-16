import React from 'react';
import { X, Wind, ArrowRight } from 'lucide-react';
import { DiffuserDevice } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface DeviceDetailModalProps {
  device: DiffuserDevice | null;
  onClose: () => void;
  onInquire: (deviceName: string) => void;
}

export const DeviceDetailModal: React.FC<DeviceDetailModalProps> = ({
  device,
  onClose,
  onInquire,
}) => {
  const { language } = useLanguage();
  if (!device) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#E3DCD1] shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FAF8F5]/80 hover:bg-[#181716] hover:text-[#FAF8F5] transition-colors border border-[#E3DCD1]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Hardware Imagery */}
          <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto overflow-hidden bg-[#ECE6DC]">
            <img
              src={device.image}
              alt={device.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181716]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BC9B] block mb-1">
                {device.modelCode}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light">
                {device.name}
              </h3>
              <p className="text-xs text-[#C9C2BA] font-light mt-1">
                {language === 'id'
                  ? `Hingga ${device.coverageSqM} m² (${device.coverageSqFt} sq ft)`
                  : `Up to ${device.coverageSqM} m² (${device.coverageSqFt} sq ft)`}
              </p>
            </div>
          </div>

          {/* Blueprint & Specification Table */}
          <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#AA8C65] font-medium mb-2">
                <Wind className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>
                  {language === 'id' ? 'CETAK BIRU UDARA-DINGIN TANPA AIR' : 'WATERLESS COLD-AIR BLUEPRINT'}
                </span>
              </div>

              <h4 className="font-serif text-2xl text-[#181716] font-medium mb-1">
                {device.name}
              </h4>
              {/* Tagline preserved in English */}
              <p className="text-xs uppercase tracking-[0.16em] text-[#8A8175] mb-4 font-medium">
                {device.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#5C554B] font-light leading-relaxed mb-6">
                {device.description}
              </p>

              {/* Spec Details Table */}
              <div className="space-y-2.5 text-xs pb-6 border-b border-[#ECE6DC] mb-6">
                <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                  <span className="text-[#8A8175] font-medium">
                    {language === 'id' ? 'Teknologi Difusi:' : 'Diffusion Technology:'}
                  </span>
                  <span className="text-[#181716] text-right font-medium max-w-[220px]">
                    {language === 'id' ? 'Atomisasi Udara Dingin Sub-Mikron' : 'Sub-Micron Cold-Air Atomization'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                  <span className="text-[#8A8175] font-medium">
                    {language === 'id' ? 'Cakupan Area:' : 'Coverage Area:'}
                  </span>
                  <span className="text-[#181716] font-mono font-medium">
                    {device.coverageSqM} m² / {device.coverageSqFt} sq ft
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                  <span className="text-[#8A8175] font-medium">
                    {language === 'id' ? 'Kapasitas Tabung:' : 'Cartridge Reservoir:'}
                  </span>
                  <span className="text-[#181716] font-mono font-medium">
                    {device.capacityMl} ml
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                  <span className="text-[#8A8175] font-medium">
                    {language === 'id' ? 'Tingkat Kebisingan:' : 'Acoustic Decibel:'}
                  </span>
                  <span className="text-[#181716] font-mono font-medium">
                    {device.noiseLevel}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0EBE1]">
                  <span className="text-[#8A8175] font-medium">
                    {language === 'id' ? 'Dimensi Fisik:' : 'Physical Dimensions:'}
                  </span>
                  <span className="text-[#181716] font-mono">
                    {device.dimensions}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#8A8175] font-medium">
                    {language === 'id' ? 'Material Casing:' : 'Enclosure Chassis:'}
                  </span>
                  <span className="text-[#181716] text-right max-w-[220px]">
                    {device.material}
                  </span>
                </div>
              </div>

              {/* Key Features List */}
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#8A8175] block mb-2 font-medium">
                  {language === 'id' ? 'Keunggulan Sistem' : 'System Advantages'}
                </span>
                <ul className="space-y-1.5 text-xs text-[#5C554B]">
                  {device.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#ECE6DC]">
              <button
                onClick={() => {
                  onInquire(device.name);
                  onClose();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <span>{language === 'id' ? 'Minta Penawaran & Konsultasi' : 'Request Quotation & Integration'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4BC9B]" />
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 border border-[#D9D2C7] text-[#5C554B] hover:text-[#181716] text-xs uppercase tracking-[0.16em] transition-colors"
              >
                {language === 'id' ? 'Tutup Cetak Biru' : 'Close Blueprint'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
