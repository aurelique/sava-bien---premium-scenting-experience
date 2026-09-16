/**
 * SAVA BIEN — Premium Scenting Experience
 * Modern luxury landing page & company profile website
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { CollectionSection } from './components/CollectionSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { SignatureScents } from './components/SignatureScents';
import { TechnologySection } from './components/TechnologySection';
import { B2BSolutions } from './components/B2BSolutions';
import { HomeScenting } from './components/HomeScenting';
import { HowItWorks } from './components/HowItWorks';
import { CustomSignatureScent } from './components/CustomSignatureScent';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { ClosingStatement } from './components/ClosingStatement';
import { Footer } from './components/Footer';

import { FragranceDetailModal } from './components/FragranceDetailModal';
import { DeviceDetailModal } from './components/DeviceDetailModal';
import { ScentFinderModal } from './components/ScentFinderModal';
import { ConsultationModal } from './components/ConsultationModal';

import { Fragrance, DiffuserDevice, B2BIndustry } from './types';
import { LanguageProvider } from './context/LanguageContext';

function SavaBienApp() {
  const [selectedFragrance, setSelectedFragrance] = useState<Fragrance | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<DiffuserDevice | null>(null);
  const [isScentFinderOpen, setIsScentFinderOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('General Consultation');

  const handleOpenConsultation = (topic = 'General Concierge Consultation') => {
    setConsultationTopic(topic);
    setIsConsultationOpen(true);
  };

  const handleExploreIndustryDetails = (industry: B2BIndustry) => {
    handleOpenConsultation(`B2B Sector Solution: ${industry.name}`);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#181716] font-sans antialiased selection:bg-[#E3DCD1] selection:text-[#181716]">
      {/* Top Sticky Navigation */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onOpenScentFinder={() => setIsScentFinderOpen(true)}
      />

      {/* Main Sections */}
      <main id="main-content">
        {/* Cinematic Full-Screen Hero */}
        <Hero
          onExploreSolutions={() => scrollToSection('collection')}
          onDiscoverBrand={() => scrollToSection('brand-intro')}
        />

        {/* Brand Introduction & Core Philosophy */}
        <BrandIntro />

        {/* The SAVA BIEN Collection (Oils & Diffusers) */}
        <CollectionSection
          onSelectFragrance={(fragrance) => setSelectedFragrance(fragrance)}
          onSelectDiffuser={(device) => setSelectedDevice(device)}
          onScrollToSignatureScents={() => scrollToSection('signature-scents')}
          onScrollToTechnology={() => scrollToSection('technology')}
        />

        {/* Why Choose SAVA BIEN (6 Editorial Blocks) */}
        <WhyChooseSection />

        {/* Signature Scents Interactive Luxury Perfume Collection */}
        <SignatureScents
          onSelectFragrance={(fragrance) => setSelectedFragrance(fragrance)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Waterless Scenting Technology & Precision Cold-Air Diffusion */}
        <TechnologySection
          onSelectDevice={(device) => setSelectedDevice(device)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* B2B Solutions (Premium Dark Architectural Section) */}
        <B2BSolutions
          onOpenConsultation={handleOpenConsultation}
          onExploreIndustryDetails={handleExploreIndustryDetails}
        />

        {/* Home Scenting (Living Room, Bedroom, Walk-in Closet, Entryway, Office) */}
        <HomeScenting
          onOpenConsultation={handleOpenConsultation}
          onOpenScentFinder={() => setIsScentFinderOpen(true)}
        />

        {/* How SAVA BIEN Works (01 - 04 Process) */}
        <HowItWorks
          onStartJourney={() => scrollToSection('collection')}
        />

        {/* Custom Signature Scent & Bespoke Olfactive Identity */}
        <CustomSignatureScent
          onOpenConsultation={() => handleOpenConsultation('Bespoke Custom Signature Scent Development')}
        />

        {/* Social Proof & Esteemed Hospitality Testimonials */}
        <TrustSection />

        {/* About SAVA BIEN Maison & Story */}
        <AboutSection
          onDiscoverStory={() => scrollToSection('why-sava-bien')}
          onOpenConsultation={() => handleOpenConsultation('Maison Heritage Inquiry')}
        />

        {/* Final Brand Statement */}
        <ClosingStatement
          onStartJourney={() => scrollToSection('collection')}
          onOpenConsultation={() => handleOpenConsultation('Executive Atmosphere Consultation')}
        />
      </main>

      {/* Comprehensive Brand Footer */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onOpenScentFinder={() => setIsScentFinderOpen(true)}
      />

      {/* Modals & Drawers */}
      <FragranceDetailModal
        fragrance={selectedFragrance}
        onClose={() => setSelectedFragrance(null)}
        onRequestSample={(fragranceName) => handleOpenConsultation(`Discovery Sample Pack: ${fragranceName}`)}
      />

      <DeviceDetailModal
        device={selectedDevice}
        onClose={() => setSelectedDevice(null)}
        onInquire={(deviceName) => handleOpenConsultation(`Hardware Spec & Architectural Inquiry: ${deviceName}`)}
      />

      <ScentFinderModal
        isOpen={isScentFinderOpen}
        onClose={() => setIsScentFinderOpen(false)}
        onSelectFragrance={(fragrance) => {
          setSelectedFragrance(fragrance);
          setIsScentFinderOpen(false);
        }}
        onOpenConsultation={handleOpenConsultation}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialTopic={consultationTopic}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <SavaBienApp />
    </LanguageProvider>
  );
}
