import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { CLIENT_LOGOS, TESTIMONIALS } from '../data/testimonials';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export const TrustSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].trust;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = language === 'id'
    ? [
        { key: 'All', label: 'Semua' },
        { key: 'Hotels', label: 'Hotel & Resor' },
        { key: 'Restaurants', label: 'Restoran' },
        { key: 'Retail', label: 'Retail' },
        { key: 'Corporate', label: 'Korporat' },
        { key: 'Residential', label: 'Residensial' },
      ]
    : [
        { key: 'All', label: 'All' },
        { key: 'Hotels', label: 'Hotels' },
        { key: 'Restaurants', label: 'Restaurants' },
        { key: 'Retail', label: 'Retail' },
        { key: 'Corporate', label: 'Corporate' },
        { key: 'Residential', label: 'Residential' },
      ];

  const filteredTestimonials = activeCategory === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((tItem) => tItem.category === activeCategory);

  return (
    <section id="trust-social-proof" className="py-28 lg:py-36 bg-[#F6F3EE] border-t border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8A8175] font-medium block mb-4">
            {t.eyebrow}
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#181716] font-light tracking-tight mb-4">
            {t.heading}
          </h2>
          <p className="text-[#665F55] text-base sm:text-lg font-light leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Monochrome Client Logos Grid */}
        <div className="mb-20 pb-16 border-b border-[#E3DCD1]">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#9C9286] text-center block mb-8">
            {t.properties}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="p-4 bg-[#FAF8F5] border border-[#E8E2D8] flex flex-col items-center justify-center text-center group hover:border-[#AA8C65] transition-colors"
              >
                <span className="font-serif text-lg text-[#332F2A] font-light tracking-widest block mb-1">
                  {client.emblem}
                </span>
                <span className="text-[9px] uppercase tracking-[0.14em] text-[#8C8377] font-medium leading-tight">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 border ${
                activeCategory === cat.key
                  ? 'bg-[#181716] text-[#FAF8F5] border-[#181716]'
                  : 'bg-[#FAF8F5] text-[#665F55] border-[#E3DCD1] hover:border-[#AA8C65]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F5] border border-[#E3DCD1] p-8 sm:p-10 flex flex-col justify-between hover:border-[#C5A880] transition-all duration-300 shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-6 h-6 text-[#C5A880]/60 group-hover:text-[#AA8C65] transition-colors" />
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-[#C5A880] text-[#C5A880]" />
                    ))}
                  </div>
                </div>

                <p className="font-serif italic text-base sm:text-lg text-[#2C2723] leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#ECE6DC]">
                <div className="flex items-baseline justify-between mb-1">
                  <h4 className="font-serif text-base text-[#181716] font-medium">
                    {item.author}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider text-[#8A8175]">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-[#7A7165] font-light">
                  {item.title} — {item.property}
                </p>
                <div className="mt-3 flex items-center justify-between text-[10px] text-[#9C9286]">
                  <span>{item.location}</span>
                  <span className="text-[#AA8C65] font-medium">{item.scentUsed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
