import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface NavbarProps {
  onOpenConsultation: (initialCategory?: string) => void;
  onOpenScentFinder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenScentFinder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.collection, href: '#collection' },
    { label: t.signatureScents, href: '#signature-scents' },
    { label: t.technology, href: '#technology' },
    { label: t.homeScenting, href: '#home-scenting' },
    { label: t.b2bSolutions, href: '#b2b-solutions' },
    { label: t.ourStory, href: '#about-story' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md py-4 border-b border-[#E8E2D8] shadow-xs'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo with generous whitespace */}
        <a
          href="#"
          className="group flex flex-col items-start focus:outline-none"
          aria-label="SAVA BIEN Home"
        >
          <span
            className={`font-serif text-2xl sm:text-3xl tracking-[0.22em] font-light transition-colors duration-300 ${
              isScrolled ? 'text-[#181716]' : 'text-[#FAF8F5]'
            }`}
          >
            SAVA BIEN
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.35em] font-medium transition-colors duration-300 mt-0.5 ${
              isScrolled ? 'text-[#8A8175]' : 'text-[#EFECE6]/80'
            }`}
          >
            PARFUMERIE D’ATMOSPHÈRE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs uppercase tracking-[0.16em] transition-colors duration-200 hover:text-[#AA8C65] font-medium ${
                isScrolled ? 'text-[#4A453E]' : 'text-[#FAF8F5]/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="hidden sm:flex items-center space-x-3 xl:space-x-4">
          {/* Language Selector: EN | ID */}
          <div
            id="nav-language-toggle-desktop"
            className={`inline-flex items-center rounded-xs p-0.5 text-[11px] font-medium tracking-wider transition-all duration-300 border ${
              isScrolled
                ? 'border-[#D9D2C7] bg-[#F3EFE9]/70 text-[#2C2723]'
                : 'border-white/30 bg-black/25 text-white backdrop-blur-xs'
            }`}
            title="Pilih Bahasa / Select Language"
          >
            <Globe className="w-3 h-3 ml-1.5 mr-1 opacity-70" />
            <button
              id="lang-btn-en-desktop"
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 ${
                language === 'en'
                  ? isScrolled
                    ? 'bg-[#181716] text-[#FAF8F5] shadow-xs'
                    : 'bg-[#FAF8F5] text-[#181716] shadow-xs'
                  : 'opacity-70 hover:opacity-100 hover:text-[#AA8C65]'
              }`}
              aria-label="English"
            >
              EN
            </button>
            <span className="opacity-30 text-[10px] px-0.5">|</span>
            <button
              id="lang-btn-id-desktop"
              onClick={() => setLanguage('id')}
              className={`px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 ${
                language === 'id'
                  ? isScrolled
                    ? 'bg-[#181716] text-[#FAF8F5] shadow-xs'
                    : 'bg-[#FAF8F5] text-[#181716] shadow-xs'
                  : 'opacity-70 hover:opacity-100 hover:text-[#AA8C65]'
              }`}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          <button
            id="nav-scent-finder-btn"
            onClick={onOpenScentFinder}
            className={`inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] px-3.5 py-2 transition-all duration-300 border ${
              isScrolled
                ? 'border-[#D9D2C7] text-[#2C2723] hover:border-[#AA8C65] hover:text-[#AA8C65] bg-[#F3EFE9]/40'
                : 'border-white/30 text-white hover:border-white hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{t.scentFinder}</span>
          </button>

          <button
            id="nav-consultation-btn"
            onClick={() => onOpenConsultation('General / Concierge')}
            className={`inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.18em] px-4 py-2 font-medium transition-all duration-300 ${
              isScrolled
                ? 'bg-[#181716] text-[#FAF8F5] hover:bg-[#2C2723] hover:shadow-md'
                : 'bg-[#FAF8F5] text-[#181716] hover:bg-white hover:shadow-lg'
            }`}
          >
            <span>{t.consultation}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Header Right Items */}
        <div className="flex items-center space-x-2 sm:hidden">
          {/* Mobile Direct Language Toggle */}
          <div
            className={`inline-flex items-center rounded-xs p-0.5 text-[10px] font-semibold border ${
              isScrolled
                ? 'border-[#D9D2C7] bg-[#F3EFE9]/70 text-[#2C2723]'
                : 'border-white/30 bg-black/25 text-white'
            }`}
          >
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 py-0.5 uppercase ${
                language === 'en'
                  ? isScrolled
                    ? 'bg-[#181716] text-[#FAF8F5]'
                    : 'bg-white text-[#181716]'
                  : 'opacity-70'
              }`}
            >
              EN
            </button>
            <span className="opacity-30">|</span>
            <button
              onClick={() => setLanguage('id')}
              className={`px-1.5 py-0.5 uppercase ${
                language === 'id'
                  ? isScrolled
                    ? 'bg-[#181716] text-[#FAF8F5]'
                    : 'bg-white text-[#181716]'
                  : 'opacity-70'
              }`}
            >
              ID
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors ${
              isScrolled ? 'text-[#181716]' : 'text-white'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Tablet Hamburger Button */}
        <div className="hidden sm:flex lg:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors ${
              isScrolled ? 'text-[#181716]' : 'text-white'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF8F5] border-b border-[#E8E2D8] px-6 py-8 shadow-xl">
          <nav className="flex flex-col space-y-5">
            {/* Language Selector Inside Mobile Menu */}
            <div className="pb-3 border-b border-[#E8E2D8] flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#8A8175] font-medium flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-[#AA8C65]" />
                <span>Bahasa / Language</span>
              </span>
              <div className="inline-flex items-center border border-[#D9D2C7] bg-[#F3EFE9] p-0.5">
                <button
                  id="lang-btn-en-mobile"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold transition-colors ${
                    language === 'en'
                      ? 'bg-[#181716] text-[#FAF8F5]'
                      : 'text-[#6B6358] hover:text-[#181716]'
                  }`}
                >
                  English
                </button>
                <button
                  id="lang-btn-id-mobile"
                  onClick={() => setLanguage('id')}
                  className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold transition-colors ${
                    language === 'id'
                      ? 'bg-[#181716] text-[#FAF8F5]'
                      : 'text-[#6B6358] hover:text-[#181716]'
                  }`}
                >
                  Indonesia
                </button>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-[#2C2723] hover:text-[#AA8C65] font-medium"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E8E2D8] flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenScentFinder();
                }}
                className="w-full flex items-center justify-center space-x-2 border border-[#C5A880] text-[#181716] py-3 text-xs uppercase tracking-[0.16em]"
              >
                <Sparkles className="w-4 h-4 text-[#AA8C65]" />
                <span>{t.atmosphereFinder}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('B2B / Concierge');
                }}
                className="w-full bg-[#181716] text-[#FAF8F5] py-3 text-xs uppercase tracking-[0.18em]"
              >
                {t.bookConsultation}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
