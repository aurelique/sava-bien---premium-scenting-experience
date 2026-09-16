import React, { useState, useEffect } from 'react';
import { X, Check, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'Atmospheric Scent Consultation',
}) => {
  const { language } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [propertyType, setPropertyType] = useState('Hotels & Hospitality');
  const [spaceArea, setSpaceArea] = useState('100 - 300 m²');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setNotes(language === 'id' ? `Topik Konsultasi: ${initialTopic}` : `Inquiry Topic: ${initialTopic}`);
    }
  }, [initialTopic, language]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      language === 'id'
        ? `Halo Concierge SAVA BIEN, saya ingin menjadwalkan konsultasi wewangian ruang privat terkait: ${initialTopic || 'Arsitektur Atmosfer Ruang'}. Nama saya ${fullName || 'Klien'}.`
        : `Hello SAVA BIEN Concierge, I would like to schedule a private scenting consultation regarding: ${initialTopic || 'Atmospheric Architecture'}. My name is ${fullName || 'Client'}.`
    );
    window.open(`https://wa.me/628119288777?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#E3DCD1] shadow-2xl p-6 sm:p-10 my-auto animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#7A7165] hover:text-[#181716] hover:bg-[#F0EBE1] transition-colors"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#F3EFE9] border border-[#C5A880] flex items-center justify-center mx-auto mb-6 text-[#181716]">
              <Check className="w-6 h-6 text-[#2C6E49]" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#AA8C65] font-semibold block mb-2">
              {language === 'id' ? 'KONSULTASI DIJADWALKAN' : 'CONSULTATION INITIATED'}
            </span>
            <h3 className="font-serif text-3xl text-[#181716] mb-3">
              {language === 'id' ? `Terima Kasih, ${fullName || 'Tamu Terhormat'}.` : `Thank You, ${fullName || 'Honored Guest'}.`}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C554B] font-light leading-relaxed max-w-md mx-auto mb-8">
              {language === 'id'
                ? 'Spesialis Wewangian SAVA BIEN telah menerima brief ruang Anda. Kami akan menghubungi Anda melalui email atau WhatsApp dalam 1 hari kerja disertai dossier pengantar dan kurasi sampel aroma.'
                : 'A dedicated SAVA BIEN Scent Specialist has received your spatial brief. We will contact you via email or WhatsApp within one business day with an introductory dossier and fragrance sample curation.'}
            </p>

            <div className="p-4 bg-[#F6F3EE] border border-[#E8E2D8] text-xs text-[#7A7165] mb-8 max-w-sm mx-auto">
              <span className="font-mono text-[10px] block mb-1 uppercase tracking-wider text-[#181716]">
                Reference ID: SB-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <span>{language === 'id' ? 'Antrean Prioritas Hospitalitas & Arsitektural' : 'Priority Hospitality & Architectural Queue'}</span>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-3 bg-[#181716] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium"
            >
              {language === 'id' ? 'Kembali ke Beranda' : 'Return to Maison'}
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#AA8C65] font-semibold block mb-2">
                MAISON SAVA BIEN CONCIERGE
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#181716] font-light">
                {language === 'id' ? 'Konsultasi dengan Spesialis Aroma' : 'Talk to a Scent Specialist'}
              </h3>
              <p className="text-xs text-[#7A7165] font-light mt-2 max-w-md mx-auto">
                {language === 'id'
                  ? 'Baik merancang atmosfer khas hotel mewah atau menyempurnakan kediaman privat, arsitek penciuman kami mendampingi setiap racikan aroma dan parameter sirkulasi udara.'
                  : 'Whether creating a signature hotel atmosphere or elevating a private residence, our olfactory architects guide you through every note and airflow parameter.'}
              </p>
            </div>

            {/* Direct WhatsApp Quick Connect Banner */}
            <div className="mb-6 p-3.5 bg-[#F6F3EE] border border-[#E3DCD1] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#181716] text-[#FAF8F5] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#181716]">
                    {language === 'id' ? 'WhatsApp Concierge Langsung' : 'Instant WhatsApp Concierge'}
                  </p>
                  <p className="text-[11px] text-[#7A7165]">
                    {language === 'id' ? 'Chat langsung dengan spesialis kami' : 'Direct chat with an active specialist'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="px-3.5 py-1.5 bg-[#FAF8F5] border border-[#C5A880] text-[11px] uppercase tracking-wider font-semibold text-[#181716] hover:bg-[#181716] hover:text-white transition-colors"
              >
                {language === 'id' ? 'Chat Sekarang' : 'Chat Now'}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#7A7165] mb-1 font-medium">
                    {language === 'id' ? 'Nama Lengkap *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'id' ? 'cth. Laurent Vian' : 'e.g. Laurent Vian'}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#F6F3EE] border border-[#E3DCD1] px-3.5 py-2.5 text-xs text-[#181716] placeholder:text-[#A69E94] focus:outline-none focus:border-[#AA8C65]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#7A7165] mb-1 font-medium">
                    {language === 'id' ? 'Email Kantor / Personal *' : 'Corporate Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={language === 'id' ? 'cth. l.vian@palace-hotel.ch' : 'e.g. l.vian@palace-hotel.ch'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F6F3EE] border border-[#E3DCD1] px-3.5 py-2.5 text-xs text-[#181716] placeholder:text-[#A69E94] focus:outline-none focus:border-[#AA8C65]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#7A7165] mb-1 font-medium">
                    {language === 'id' ? 'Nomor Telepon / WhatsApp *' : 'Phone or WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+62 atau +1..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F6F3EE] border border-[#E3DCD1] px-3.5 py-2.5 text-xs text-[#181716] placeholder:text-[#A69E94] focus:outline-none focus:border-[#AA8C65]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#7A7165] mb-1 font-medium">
                    {language === 'id' ? 'Sektor / Tipe Properti' : 'Sector / Space Type'}
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-[#F6F3EE] border border-[#E3DCD1] px-3.5 py-2.5 text-xs text-[#181716] focus:outline-none focus:border-[#AA8C65]"
                  >
                    {language === 'id' ? (
                      <>
                        <option>Hotel & Resor</option>
                        <option>Hunian Privat / Vila</option>
                        <option>Butik Retail Mewah</option>
                        <option>Spa & Suaka Kebugaran</option>
                        <option>Kantor Korporat & Ruang Rapat</option>
                        <option>Restoran & Lounge</option>
                        <option>Pengembang Properti Arsitektural</option>
                      </>
                    ) : (
                      <>
                        <option>Hotels & Resorts</option>
                        <option>Private Residence / Villa</option>
                        <option>Retail & Luxury Boutiques</option>
                        <option>Spa & Wellness Sanctuary</option>
                        <option>Corporate Office & Boardrooms</option>
                        <option>Restaurants & Cocktail Lounges</option>
                        <option>Architectural Property Development</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#7A7165] mb-1 font-medium">
                  {language === 'id' ? 'Perkiraan Luas Area / Kebutuhan Cakupan' : 'Approximate Area / Coverage Requirements'}
                </label>
                <select
                  value={spaceArea}
                  onChange={(e) => setSpaceArea(e.target.value)}
                  className="w-full bg-[#F6F3EE] border border-[#E3DCD1] px-3.5 py-2.5 text-xs text-[#181716] focus:outline-none focus:border-[#AA8C65]"
                >
                  {language === 'id' ? (
                    <>
                      <option>Di bawah 80 m² (Suite intim / 1 ruangan)</option>
                      <option>80 - 250 m² (Lantai vila / butik)</option>
                      <option>250 - 600 m² (Restoran besar / showroom)</option>
                      <option>600 - 2.000+ m² (Lobi Hotel Utama / Multi-Zone HVAC)</option>
                    </>
                  ) : (
                    <>
                      <option>Under 80 m² (Intimate suite / single room)</option>
                      <option>80 - 250 m² (Villa floor / boutique)</option>
                      <option>250 - 600 m² (Large restaurant / showroom)</option>
                      <option>600 - 2,000+ m² (Central Hotel Lobby / HVAC Multi-Zone)</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#7A7165] mb-1 font-medium">
                  {language === 'id' ? 'Catatan Proyek atau Visi Olfaktori' : 'Project Notes or Olfactory Goals'}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    language === 'id'
                      ? 'Deskripsikan visi estetika, target waktu, atau instalasi aroma yang sedang digunakan...'
                      : 'Describe your aesthetic vision, timeline, or current scenting setup...'
                  }
                  className="w-full bg-[#F6F3EE] border border-[#E3DCD1] px-3.5 py-2 text-xs text-[#181716] placeholder:text-[#A69E94] focus:outline-none focus:border-[#AA8C65]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-4 bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-md"
                >
                  <span>{language === 'id' ? 'Kirim Permohonan Konsultasi' : 'Submit Consultation Request'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4BC9B]" />
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-[#8A8175] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{language === 'id' ? 'Kerahasiaan & Privasi Terjamin Sepenuhnya' : 'Strict Discretion & Non-Disclosure Assured'}</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
