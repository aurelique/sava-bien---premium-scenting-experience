import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw, Droplet, Wind } from 'lucide-react';
import { FRAGRANCES } from '../data/fragrances';
import { DIFFUSERS } from '../data/diffusers';
import { Fragrance, DiffuserDevice } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ScentFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFragrance: (fragrance: Fragrance) => void;
  onOpenConsultation: (topic: string) => void;
}

export const ScentFinderModal: React.FC<ScentFinderModalProps> = ({
  isOpen,
  onClose,
  onSelectFragrance,
  onOpenConsultation,
}) => {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [spaceType, setSpaceType] = useState<string>('Living Room & Lounge');
  const [desiredMood, setDesiredMood] = useState<string>('warm');
  const [spaceScale, setSpaceScale] = useState<string>('medium');
  const [result, setResult] = useState<{ fragrance: Fragrance; device: DiffuserDevice } | null>(null);

  if (!isOpen) return null;

  const handleCalculate = () => {
    // Determine best fragrance based on mood
    let matchedFragrance = FRAGRANCES[0]; // AMBER NOIR default
    if (desiredMood === 'calm') matchedFragrance = FRAGRANCES[1]; // WHITE TEA
    else if (desiredMood === 'earthy') matchedFragrance = FRAGRANCES[2]; // FIG & CEDAR
    else if (desiredMood === 'fresh') matchedFragrance = FRAGRANCES[3]; // BERGAMOT
    else if (desiredMood === 'opulent') matchedFragrance = FRAGRANCES[4]; // OUD
    else if (desiredMood === 'romantic') matchedFragrance = FRAGRANCES[5]; // BLOOM

    // Determine best device based on scale
    let matchedDevice = DIFFUSERS[0]; // L'Atelier (compact)
    if (spaceScale === 'medium') matchedDevice = DIFFUSERS[1]; // La Villa
    else if (spaceScale === 'large') matchedDevice = DIFFUSERS[2]; // Le Grand

    setResult({ fragrance: matchedFragrance, device: matchedDevice });
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setResult(null);
  };

  const spaceOptions = language === 'id' ? [
    { label: 'Ruang Tamu & Hunian Privat', desc: 'Suaka rumah & menjamu relasi' },
    { label: 'Kamar Tidur Utama & Dressing Suite', desc: 'Istirahat intim & ketenangan pikiran' },
    { label: 'Hotel Butik & Resepsionis', desc: 'Kesan pertama & hospitalitas berkesan' },
    { label: 'Butik Mewah & Showroom', desc: 'Meningkatkan waktu singgah & prestise brand' },
    { label: 'Kantor Eksekutif & Studio', desc: 'Fokus kognitif & atmosfer arsitektural' },
    { label: 'Wellness Sanctuary & Spa', desc: 'Restorasi mendalam & pernapasan rileks' },
  ] : [
    { label: 'Living Room & Private Residence', desc: 'Home sanctuary & social hosting' },
    { label: 'Master Bedroom & Dressing Suite', desc: 'Intimate rest & serene unwinding' },
    { label: 'Boutique Hotel & Reception', desc: 'First impressions & memorable hospitality' },
    { label: 'Luxury Retail & Showroom', desc: 'Elevate dwell time & brand prestige' },
    { label: 'Executive Office & Studio', desc: 'Cognitive focus & architectural calm' },
    { label: 'Wellness Sanctuary & Spa', desc: 'Deep restoration & tranquil breathing' },
  ];

  const moodOptions = language === 'id' ? [
    { id: 'warm', label: 'Hangat, Memikat & Sensual', note: 'Amber kaya, bourbon vanilla, balsam asap' },
    { id: 'calm', label: 'Bersih, Tenang & Kontemporer', note: 'Pucuk teh putih, mandarin hijau, melati segar' },
    { id: 'earthy', label: 'Earthy, Elegan & Berkelas', note: 'Daun ara mediterania, violet, kayu cedar Virginia' },
    { id: 'fresh', label: 'Segar, Cerah & Ramah', note: 'Bergamot Calabria, neroli, kulit jeruk emas' },
    { id: 'opulent', label: 'Mewah, Kaya & Misterius', note: 'Gaharu mulia (oud), saffron, nilam asap' },
    { id: 'romantic', label: 'Lembut, Floral & Puitis', note: 'Peony embun, mawar damask, lotus & kasmir' },
  ] : [
    { id: 'warm', label: 'Warm, Magnetic & Sensual', note: 'Rich amber, bourbon vanilla, smoked balsams' },
    { id: 'calm', label: 'Clean, Calm & Contemporary', note: 'White tea leaves, green mandarin, crisp jasmine' },
    { id: 'earthy', label: 'Earthy, Elegant & Refined', note: 'Mediterranean fig leaf, violet, Virginian cedar' },
    { id: 'fresh', label: 'Fresh, Bright & Inviting', note: 'Calabrian bergamot, neroli, golden citrus zest' },
    { id: 'opulent', label: 'Opulent, Rich & Mysterious', note: 'Noble agarwood (oud), saffron, smoky patchouli' },
    { id: 'romantic', label: 'Soft, Floral & Poetic', note: 'Dewy peony, damask rose, lotus & cashmere' },
  ];

  const scaleOptions = language === 'id' ? [
    { id: 'small', title: 'Hingga 80 m²', sub: 's/d 860 sq ft', desc: 'Kamar tidur, ruang kerja privat, foyer, apartemen studio' },
    { id: 'medium', title: '80 s/d 250 m²', sub: '860 s/d 2.700 sq ft', desc: 'Ruang keluarga luas, vila, penthouse, butik desainer' },
    { id: 'large', title: '250 s/d 1.000+ m²', sub: 'Lebih dari 2.700 sq ft', desc: 'Lobi hotel, korporat, gedung bertingkat sistem HVAC' },
  ] : [
    { id: 'small', title: 'Up to 80 m²', sub: 'Up to 860 sq ft', desc: 'Bedrooms, private offices, foyers, single apartments' },
    { id: 'medium', title: '80 to 250 m²', sub: '860 to 2,700 sq ft', desc: 'Grand living rooms, villas, penthouses, design boutiques' },
    { id: 'large', title: '250 to 1,000+ m²', sub: 'Over 2,700 sq ft', desc: 'Hotel lobbies, corporate campuses, multistory HVAC systems' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#E3DCD1] shadow-2xl p-6 sm:p-10 my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#7A7165] hover:text-[#181716] hover:bg-[#F0EBE1] transition-colors"
          aria-label="Close scent finder"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center max-w-md mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#AA8C65] font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{language === 'id' ? 'PROFILER ATMOSFER RUANG' : 'ATMOSPHERE PROFILER'}</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#181716] font-light">
            {language === 'id' ? 'Temukan Aroma Khas Ruang Anda' : 'Find Your Spatial Signature'}
          </h3>
          <p className="text-xs text-[#7A7165] font-light mt-2">
            {language === 'id'
              ? 'Jawab 3 pertanyaan sensorik untuk menemukan perpaduan wewangian & difuser SAVA BIEN yang ideal.'
              : 'Answer 3 sensory questions to discover your ideal SAVA BIEN fragrance and diffusion pairing.'}
          </p>
        </div>

        {/* Progress Dots */}
        {step < 4 && (
          <div className="flex justify-center items-center space-x-2 mb-8">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step === i ? 'w-8 bg-[#181716]' : 'w-2 bg-[#D9D2C7]'
                }`}
              />
            ))}
          </div>
        )}

        {/* Step 1: Space Type */}
        {step === 1 && (
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#8A8175] block mb-2 font-medium text-center">
              {language === 'id' ? 'PERTANYAAN 1 DARI 3' : 'QUESTION 1 OF 3'}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[#181716] text-center mb-6">
              {language === 'id' ? 'Tipe ruangan apa yang ingin Anda beri aroma?' : 'What type of space are you scenting?'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {spaceOptions.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setSpaceType(item.label)}
                  className={`p-4 text-left border transition-all duration-200 ${
                    spaceType === item.label
                      ? 'border-[#181716] bg-[#F3EFE9] ring-1 ring-[#181716]'
                      : 'border-[#E3DCD1] bg-[#FAF8F5] hover:border-[#AA8C65]'
                  }`}
                >
                  <p className="text-xs font-semibold text-[#181716] mb-0.5">{item.label}</p>
                  <p className="text-[11px] text-[#7A7165] font-light">{item.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <span>{language === 'id' ? 'Lanjutkan' : 'Continue'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Desired Mood */}
        {step === 2 && (
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#8A8175] block mb-2 font-medium text-center">
              {language === 'id' ? 'PERTANYAAN 2 DARI 3' : 'QUESTION 2 OF 3'}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[#181716] text-center mb-6">
              {language === 'id' ? 'Nuansa emosional apa yang ingin dihadirkan?' : 'What emotional mood should the space inspire?'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {moodOptions.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setDesiredMood(mood.id)}
                  className={`p-4 text-left border transition-all duration-200 ${
                    desiredMood === mood.id
                      ? 'border-[#181716] bg-[#F3EFE9] ring-1 ring-[#181716]'
                      : 'border-[#E3DCD1] bg-[#FAF8F5] hover:border-[#AA8C65]'
                  }`}
                >
                  <p className="text-xs font-semibold text-[#181716] mb-0.5">{mood.label}</p>
                  <p className="text-[11px] text-[#7A7165] font-light">{mood.note}</p>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setStep(1)}
                className="text-xs uppercase tracking-wider text-[#7A7165] hover:text-[#181716]"
              >
                {language === 'id' ? 'Kembali' : 'Back'}
              </button>
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <span>{language === 'id' ? 'Lanjutkan' : 'Continue'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Spatial Scale */}
        {step === 3 && (
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#8A8175] block mb-2 font-medium text-center">
              {language === 'id' ? 'PERTANYAAN 3 DARI 3' : 'QUESTION 3 OF 3'}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[#181716] text-center mb-6">
              {language === 'id' ? 'Berapa perkiraan luas ruangan Anda?' : 'What is the approximate size of the space?'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {scaleOptions.map((scale) => (
                <button
                  key={scale.id}
                  onClick={() => setSpaceScale(scale.id)}
                  className={`p-4 text-left border transition-all duration-200 flex flex-col justify-between ${
                    spaceScale === scale.id
                      ? 'border-[#181716] bg-[#F3EFE9] ring-1 ring-[#181716]'
                      : 'border-[#E3DCD1] bg-[#FAF8F5] hover:border-[#AA8C65]'
                  }`}
                >
                  <div>
                    <h5 className="text-sm font-semibold text-[#181716]">{scale.title}</h5>
                    <p className="text-[11px] text-[#8A8175] font-mono mb-2">{scale.sub}</p>
                    <p className="text-xs text-[#5C554B] font-light leading-snug">{scale.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setStep(2)}
                className="text-xs uppercase tracking-wider text-[#7A7165] hover:text-[#181716]"
              >
                {language === 'id' ? 'Kembali' : 'Back'}
              </button>
              <button
                onClick={handleCalculate}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <span>{language === 'id' ? 'Lihat Rekomendasi' : 'Reveal Recommendation'}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#D4BC9B]" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Matched Result */}
        {step === 4 && result && (
          <div>
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-widest text-[#AA8C65] font-medium block mb-1">
                {language === 'id' ? `DIKURASI UNTUK ${spaceType.toUpperCase()}` : `CURATED FOR ${spaceType.toUpperCase()}`}
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#181716]">
                {language === 'id' ? 'Perpaduan Atmosfer Ideal Anda' : 'Your Bespoke Atmosphere Match'}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Fragrance Card */}
              <div className="p-4 bg-[#F6F3EE] border border-[#ECE6DC] flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-[#8A8175] mb-2">
                    <Droplet className="w-3 h-3 text-[#C5A880]" />
                    <span>{language === 'id' ? 'Minyak Wewangian Terpilih' : 'Matched Fragrance Oil'}</span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#ECE6DC] mb-3">
                    <img
                      src={result.fragrance.image}
                      alt={result.fragrance.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-serif text-xl text-[#181716] font-medium">
                    {result.fragrance.name}
                  </h5>
                  <p className="text-xs text-[#8A8175] font-medium mb-2">
                    {result.fragrance.subtitle}
                  </p>
                  <p className="text-xs text-[#5C554B] font-light line-clamp-2">
                    {result.fragrance.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    onSelectFragrance(result.fragrance);
                    onClose();
                  }}
                  className="mt-4 text-xs text-[#AA8C65] hover:text-[#181716] font-medium text-left flex items-center space-x-1"
                >
                  <span>{language === 'id' ? 'Lihat Profil Aroma' : 'View Notes Breakdown'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Device Card */}
              <div className="p-4 bg-[#F6F3EE] border border-[#ECE6DC] flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-[#8A8175] mb-2">
                    <Wind className="w-3 h-3 text-[#C5A880]" />
                    <span>{language === 'id' ? 'Difuser Direkomendasikan' : 'Recommended Diffuser'}</span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#ECE6DC] mb-3">
                    <img
                      src={result.device.image}
                      alt={result.device.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-serif text-xl text-[#181716] font-medium">
                    {result.device.name}
                  </h5>
                  <p className="text-xs text-[#8A8175] font-medium mb-2">
                    {result.device.modelCode}
                  </p>
                  <p className="text-xs text-[#5C554B] font-light line-clamp-2">
                    {result.device.tagline}
                  </p>
                </div>

                <div className="mt-4 text-xs text-[#8A8175]">
                  <span>{language === 'id' ? `Cakupan: Hingga ${result.device.coverageSqM} m²` : `Coverage: Up to ${result.device.coverageSqM} m²`}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#ECE6DC]">
              <button
                onClick={() => {
                  onOpenConsultation(`Atmosphere Profiler Match: ${result.fragrance.name} + ${result.device.name}`);
                  onClose();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <span>{language === 'id' ? 'Konsultasikan Setup Ini' : 'Book Curation for this Setup'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4BC9B]" />
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#7A7165] hover:text-[#181716] py-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{language === 'id' ? 'Ulangi Kuis' : 'Retake Quiz'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
