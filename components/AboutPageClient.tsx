'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, MessageSquare, Compass, Award, ShieldCheck, Building, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SmoothScroll } from '@/components/SmoothScroll';

export default function AboutPageClient() {
  return (
    <SmoothScroll>
      <Navbar />

      <main className="relative bg-[#0d0e11] text-[#e8e6e1] min-h-screen pt-28 md:pt-36 pb-20 overflow-hidden">
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              Corporate Chronicle · West Tambaram
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.08] mb-6">
            Building Permanence, Nurturing{' '}
            <span className="text-[#c5a880] font-semibold italic">Community</span>
          </h1>

          <div className="space-y-2 mb-8">
            <p className="font-serif text-xl sm:text-2xl text-[#dfca9e] italic font-light">
              “{BUSINESS_INFO.tagline1}”
            </p>
            <p className="font-serif text-lg sm:text-xl text-[#cfcac0] font-light">
              “{BUSINESS_INFO.tagline2}”
            </p>
          </div>
        </section>

        {/* Story Section with Dual Photographic Panels */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Detailed Narrative */}
            <div className="lg:col-span-7 space-y-6 text-[#cfcac0] font-light leading-relaxed text-sm sm:text-base md:text-lg">
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight mb-4">
                Our Roots in West Tambaram
              </h2>
              <p>
                Headquartered at Doctors Plaza on 20, VOC Street, West Tambaram,{' '}
                <strong className="text-white font-medium">Malarkodi Construction Pvt Ltd</strong> was
                established to bridge the gap between uncompromising civil engineering and human-centered
                residential living.
              </p>
              <p>
                Every home and office we build reflects a belief that architecture is a generational
                investment. We do not just construct physical walls; we cultivate connected neighborhoods
                where families thrive, natural breezes flow freely, and structures withstand the test
                of time.
              </p>
              <p>
                From meticulous soil borings to precision reinforcement curing and transparent
                documentation, our team oversees every stage with personal accountability.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#14151c] border border-[#23252e] rounded-sm">
                  <Compass className="w-5 h-5 text-[#c5a880] mb-2" />
                  <h3 className="font-serif text-lg text-white font-medium mb-1">
                    Vastu Harmony
                  </h3>
                  <p className="text-xs text-[#8e8b82]">
                    Precise spatial orientations maximizing dawn illumination and aerodynamic cross-ventilation.
                  </p>
                </div>

                <div className="p-5 bg-[#14151c] border border-[#23252e] rounded-sm">
                  <Award className="w-5 h-5 text-[#c5a880] mb-2" />
                  <h3 className="font-serif text-lg text-white font-medium mb-1">
                    Civil Precision
                  </h3>
                  <p className="text-xs text-[#8e8b82]">
                    Certified concrete cube testing, tested steel rebar, and seismic-resistant foundations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Architectural Image Frame */}
            <div className="lg:col-span-5 relative w-full h-[420px] sm:h-[520px] border border-[#2a2c33] rounded-sm overflow-hidden bg-[#14151b] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=85&w=1600&auto=format&fit=crop"
                alt="Architectural development by Malarkodi Construction Pvt Ltd"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter grayscale-[15%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0d0e11]/90 backdrop-blur-md border border-[#2a2c33]">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c5a880] block mb-1">
                  Permanent Headquarters
                </span>
                <p className="text-xs font-mono text-white">
                  {BUSINESS_INFO.addressShort}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency & Open Desk Pillar */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="p-8 sm:p-14 bg-[#14151c] border border-[#23252e] rounded-sm">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-3 text-xs font-mono text-[#c5a880] tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>The Malarkodi Promise</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight mb-4">
                Open Doors & Direct Accountability
              </h2>
              <p className="text-sm sm:text-base text-[#cfcac0] font-light leading-relaxed mb-8">
                We believe that peace of mind is built on clear communication. Our West Tambaram
                office welcomes prospective clients to inspect physical drawings, review material
                certificates, and consult directly on custom building requirements.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-[#c5a880] hover:bg-[#d6bb94] text-[#0d0e11] text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-sm transition-colors"
                >
                  Visit Our Tambaram Desk
                </Link>
                <Link
                  href="/standards"
                  className="px-7 py-3.5 border border-[#333] hover:border-[#c5a880] text-white hover:text-[#c5a880] text-xs font-mono tracking-[0.2em] uppercase rounded-sm transition-colors bg-[#111216]"
                >
                  Explore Quality Standards →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </SmoothScroll>
  );
}
