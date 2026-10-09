'use client';

import React, { useState } from 'react';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Preloader } from '@/components/Preloader';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { WhatWeBuild } from '@/components/WhatWeBuild';
import { WeExcelIn } from '@/components/WeExcelIn';
import { GoogleRatingStrip } from '@/components/GoogleRatingStrip';
import { LongFormAbout } from '@/components/LongFormAbout';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { ConsultationModal } from '@/components/ConsultationModal';

export default function HomeClient() {
  const [, setPreloaderFinished] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <SmoothScroll>
      {/* 1. Preloader */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* Navigation Bar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Page Flow */}
      <main className="relative bg-[#0d0e11] text-[#e8e6e1] overflow-hidden min-h-screen pb-14 md:pb-0">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Intro with Dual Parallax Images */}
        <Intro />

        {/* 4. What We Build */}
        <WhatWeBuild />

        {/* 5. "We excel in" 4-Column Grid */}
        <WeExcelIn />

        {/* 6. Google Rating Strip */}
        <GoogleRatingStrip />

        {/* 7. Long-form About Text Over Pinned Background Image */}
        <LongFormAbout />

        {/* 8. Final CTA: "Planning your dream home?" */}
        <FinalCTA />
      </main>

      {/* 9. Footer with Logo, Address, Map, Phone, Instagram, Hours */}
      <Footer />

      {/* Mobile-only Sticky Bottom Call / WhatsApp Action Bar */}
      <MobileStickyBar />

      {/* Quick Consultation Dialog */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </SmoothScroll>
  );
}
