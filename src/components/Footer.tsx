import React, { useState } from 'react';
import { Check, Send, Phone, Mail, Instagram, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface FooterProps {
  onOpenConsultation: (topic?: string) => void;
  onOpenScentFinder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenScentFinder }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].footer;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="footer" className="bg-[#0D0C0B] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand & Description (4 cols) */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block focus:outline-none mb-4">
              <span className="font-serif text-3xl tracking-[0.22em] text-[#FAF8F5] font-light block">
                SAVA BIEN
              </span>
              {/* Tagline preserved in English */}
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#C5A880] font-medium block mt-1">
                PREMIUM SCENTING EXPERIENCE
              </span>
            </a>

            <p className="text-[#A8A096] text-xs sm:text-sm font-light leading-relaxed mb-6 max-w-sm">
              {t.desc}
            </p>

            <div className="text-xs text-[#8A8177] space-y-1">
              <p>© {new Date().getFullYear()} SAVA BIEN Maison d’Atmosphère.</p>
              <p>{t.rights}</p>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BC9B] font-semibold block mb-4">
              {t.solutionsTitle}
            </span>
            <ul className="space-y-2.5 text-xs text-[#C9C2B8]">
              <li>
                <a href="#collection" className="hover:text-[#FAF8F5] transition-colors">
                  {t.links.solutions}
                </a>
              </li>
              <li>
                <a href="#signature-scents" className="hover:text-[#FAF8F5] transition-colors">
                  {t.links.fragranceOils}
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-[#FAF8F5] transition-colors">
                  {t.links.diffusers}
                </a>
              </li>
              <li>
                <a href="#why-sava-bien" className="hover:text-[#FAF8F5] transition-colors">
                  {t.links.whySavaBien}
                </a>
              </li>
              <li>
                <a href="#home-scenting" className="hover:text-[#FAF8F5] transition-colors">
                  {t.links.homeScenting}
                </a>
              </li>
              <li>
                <a href="#b2b-solutions" className="hover:text-[#FAF8F5] transition-colors">
                  {t.links.b2bSolutions}
                </a>
              </li>
            </ul>
          </div>

          {/* Experience & Atelier Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BC9B] font-semibold block mb-4">
              {t.experienceTitle}
            </span>
            <ul className="space-y-2.5 text-xs text-[#C9C2B8]">
              <li>
                <button
                  onClick={onOpenScentFinder}
                  className="hover:text-[#FAF8F5] transition-colors text-left"
                >
                  {t.links.scentFinder}
                </button>
              </li>
              <li>
                <a href="#custom-signature-scent" className="hover:text-[#FAF8F5] transition-colors">
                  {t.links.customScent}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#FAF8F5] transition-colors">
                  {t.links.howItWorks}
                </a>
              </li>
              <li>
                <a href="#about-story" className="hover:text-[#FAF8F5] transition-colors">
                  {t.links.about}
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Bespoke Hotel / Hospitality Scenting')}
                  className="hover:text-[#FAF8F5] transition-colors text-left"
                >
                  {t.links.hospitality}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('General Inquiries')}
                  className="hover:text-[#FAF8F5] transition-colors text-left"
                >
                  {t.links.concierge}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Showrooms (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BC9B] font-semibold block mb-4">
              {t.newsletterTitle}
            </span>
            <p className="text-xs text-[#A8A096] font-light leading-relaxed mb-4">
              {t.newsletterDesc}
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              {subscribed ? (
                <div className="p-3 bg-white/5 border border-[#C5A880] text-xs text-[#D4BC9B] flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#2C6E49]" />
                  <span>{t.newsletterSuccess}</span>
                </div>
              ) : (
                <div className="flex">
                  <input
                    type="email"
                    required
                    placeholder={t.newsletterPlaceholder}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#181716] border border-white/20 px-4 py-2.5 text-xs text-white placeholder:text-[#7A7165] focus:outline-none focus:border-[#C5A880]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="bg-[#C5A880] text-[#181716] px-4 hover:bg-[#D4BC9B] transition-colors flex items-center justify-center shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </form>

            {/* Direct Contact Channels */}
            <div className="space-y-2 text-xs text-[#A8A096]">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <a
                  href="https://wa.me/628119288777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +62 811-928-8777
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <a
                  href="mailto:concierge@savabien.com"
                  className="hover:text-white transition-colors"
                >
                  concierge@savabien.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-3.5 h-3.5 text-[#C5A880]" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram: @savabien.official
                </a>
              </div>
              <div className="flex items-start space-x-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>
                  {t.showrooms}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A7165] gap-4">
          <p>SAVA BIEN — Creating memorable atmospheres through the architecture of pure scent.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#C5A880] transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-[#C5A880] transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-[#C5A880] transition-colors">{t.ifra}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
