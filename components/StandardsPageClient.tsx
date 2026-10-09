'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, ShieldCheck, HeartHandshake, Clock, Check, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { EXCELLENCE_COLUMNS, BUSINESS_INFO } from '@/lib/data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SmoothScroll } from '@/components/SmoothScroll';

export default function StandardsPageClient() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-7 h-7 text-[#c5a880]" strokeWidth={1.5} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#c5a880]" strokeWidth={1.5} />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-[#c5a880]" strokeWidth={1.5} />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-[#c5a880]" strokeWidth={1.5} />;
      default:
        return <Building2 className="w-7 h-7 text-[#c5a880]" strokeWidth={1.5} />;
    }
  };

  return (
    <SmoothScroll>
      <Navbar />

      <main className="relative bg-[#0d0e11] text-[#e8e6e1] min-h-screen pt-28 md:pt-36 pb-20 overflow-hidden">
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              Rigorous Benchmarks · West Tambaram
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.08] mb-6">
            Our Quality <span className="text-[#c5a880] font-semibold italic">Standards</span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#cfcac0] font-light leading-relaxed">
            At Malarkodi Construction Pvt Ltd, quality is not an afterthought; it is an
            engineered discipline enforced from soil testing to the final coat of weather-shield paint.
          </p>
        </section>

        {/* 4 Pillars Detailed Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {EXCELLENCE_COLUMNS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="bg-[#14151c] border border-[#23252e] p-8 sm:p-10 rounded-sm flex flex-col justify-between hover:border-[#c5a880]/50 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 flex items-center justify-center border border-[#2a2c33] group-hover:border-[#c5a880] bg-[#171922] transition-colors rounded-sm">
                      {getIcon(pillar.iconName)}
                    </div>
                    <span className="font-mono text-sm text-[#525563] tracking-widest">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide mb-4 group-hover:text-[#dfca9e] transition-colors">
                    {pillar.title}
                  </h2>

                  <ul className="space-y-2.5 mb-6" aria-label={`Points of ${pillar.title}`}>
                    {pillar.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2.5 text-xs font-mono text-[#c5a880] tracking-wider">
                        <Check className="w-4 h-4 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-[#cfcac0] font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1f2128] flex items-center justify-between text-xs font-mono text-[#8e8b82]">
                  <span>Strict IS Verification</span>
                  <span className="text-[#c5a880]">100% Adherence</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Civil Engineering Protocol Box */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="p-8 sm:p-14 bg-[#12131a] border border-[#23252e] rounded-sm">
            <h2 className="font-serif text-3xl text-white font-light mb-4">
              Civil Assurance Protocol
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#cfcac0] leading-relaxed pt-4 border-t border-[#1f2128]">
              <div>
                <strong className="text-white block font-mono text-sm mb-1 text-[#c5a880]">
                  1. Structural Depth
                </strong>
                Engineered column footings calculated from South Chennai geotechnical bore logs to safely absorb lateral loads.
              </div>
              <div>
                <strong className="text-white block font-mono text-sm mb-1 text-[#c5a880]">
                  2. Concrete Integrity
                </strong>
                Controlled water-cement ratios and standard 28-day water curing protocols with certified lab batch verification.
              </div>
              <div>
                <strong className="text-white block font-mono text-sm mb-1 text-[#c5a880]">
                  3. Clean Titles
                </strong>
                Direct access to bank-cleared parent documents, municipal sanction orders, and transparent milestone contracts.
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#1f2128] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#8e8b82]">
                Need technical drawings or specifications?
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="px-5 py-2.5 bg-[#c5a880] text-[#0d0e11] text-xs font-mono font-bold uppercase tracking-wider rounded-sm hover:bg-[#d4b992] transition-colors"
                >
                  Call Engineering Desk
                </a>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 border border-[#333] hover:border-[#c5a880] text-white text-xs font-mono uppercase tracking-wider rounded-sm transition-colors"
                >
                  Request Consultation
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
