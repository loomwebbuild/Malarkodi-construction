'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Phone, MessageSquare, ShieldCheck, Building2, HardHat, Home as HomeIcon } from 'lucide-react';
import { WHAT_WE_BUILD, BUSINESS_INFO } from '@/lib/data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SmoothScroll } from '@/components/SmoothScroll';

export default function ServicesPageClient() {
  return (
    <SmoothScroll>
      <Navbar />

      <main className="relative bg-[#0d0e11] text-[#e8e6e1] min-h-screen pt-28 md:pt-36 pb-20 overflow-hidden">
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              Capabilities & Offerings · West Tambaram
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.08] mb-6">
            What We <span className="text-[#c5a880] font-semibold italic">Build</span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#cfcac0] font-light leading-relaxed">
            From single-family residences to multi-story commercial destinations and turnkey
            civil works, Malarkodi Construction Pvt Ltd delivers structural permanence,
            uncompromising material specifications, and transparent project management.
          </p>
        </section>

        {/* Detailed Service Blocks */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-32 mb-28">
          {WHAT_WE_BUILD.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 relative w-full h-[320px] sm:h-[440px] border border-[#23252e] rounded-sm overflow-hidden bg-[#14151b] group ${
                    isReversed ? 'lg:col-start-7' : ''
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center filter grayscale-[15%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 bg-[#0d0e11]/85 backdrop-blur-md px-3 py-1 border border-[#2a2c33] text-xs font-mono text-[#c5a880]">
                    SERVICE {service.number}
                  </div>
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isReversed ? 'lg:col-start-1' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-[#c5a880] tracking-widest uppercase mb-2">
                    <span>West Tambaram Civil Standard</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-4xl text-white font-light tracking-tight mb-3">
                    {service.title}
                  </h2>

                  <p className="text-xs font-mono text-[#a6a49c] uppercase tracking-wider mb-5">
                    {service.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#cfcac0] font-light leading-relaxed mb-6">
                    {service.benefit}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="p-5 bg-[#13141a] border border-[#23252e] rounded-sm mb-8">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-3">
                      Key Technical Specifications
                    </span>
                    <ul className="space-y-2">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2.5 text-xs text-[#e8e6e1] font-mono">
                          <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#c5a880] hover:bg-[#d6bb94] text-[#0d0e11] text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Desk</span>
                    </a>
                    <a
                      href={`https://wa.me/919841921582?text=Hello%20Malarkodi%20Construction,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(
                        service.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 border border-[#2a2c33] hover:border-[#c5a880] text-white hover:text-[#c5a880] text-xs font-mono uppercase tracking-wider rounded-sm transition-colors bg-[#14151b]"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Bottom Direct CTA */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="p-8 sm:p-14 bg-[#14151c] border border-[#23252e] rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mb-2">
                Have a specific project in mind?
              </h3>
              <p className="text-xs sm:text-sm text-[#8e8b82] max-w-xl">
                Visit our office at Doctors Plaza, 20 VOC Street, West Tambaram, or call us
                directly to discuss blueprint drawings, site inspections, and estimates.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#c5a880] hover:bg-[#d6bb94] text-[#0d0e11] text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-sm shrink-0 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </SmoothScroll>
  );
}
