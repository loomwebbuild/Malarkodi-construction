'use client';

import React from 'react';
import Link from 'next/link';
import { Star, CheckCircle, ExternalLink, MapPin, ShieldCheck, HeartHandshake, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SmoothScroll } from '@/components/SmoothScroll';

export default function ReviewsPageClient() {
  return (
    <SmoothScroll>
      <Navbar />

      <main className="relative bg-[#0d0e11] text-[#e8e6e1] min-h-screen pt-28 md:pt-36 pb-20 overflow-hidden">
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              Verified Public Feedback · Google Business
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.08] mb-6">
            Client Trust & <span className="text-[#c5a880] font-semibold italic">Reputation</span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#cfcac0] font-light leading-relaxed">
            Our standing in West Tambaram has been forged project by project. We take immense pride
            in maintaining authentic public feedback from real homeowners and commercial clients.
          </p>
        </section>

        {/* Central Google Scorecard Card */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28">
          <div className="p-8 sm:p-14 lg:p-16 bg-[#13141a] border border-[#23252e] rounded-sm flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-8">
              <div className="flex items-center gap-6">
                <span className="font-serif text-7xl sm:text-8xl lg:text-9xl text-white font-light tracking-tight leading-none">
                  {BUSINESS_INFO.googleRating}
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-[#c5a880]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#c5a880] text-[#c5a880]" />
                    ))}
                  </div>
                  <span className="text-xs font-mono tracking-widest text-[#c5a880] uppercase">
                    5.0 Scale Rating
                  </span>
                </div>
              </div>

              <div className="hidden sm:block h-20 w-[1px] bg-[#2a2c33]" />

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-2xl font-medium text-white tracking-wide">
                    {BUSINESS_INFO.googleReviewCount} Google reviews
                  </span>
                  <CheckCircle className="w-5 h-5 text-[#c5a880]" />
                </div>
                <p className="text-xs sm:text-sm text-[#8e8b82] tracking-wider mt-1.5 font-light">
                  Verified Local Business Profile on Google Maps
                </p>
                <div className="flex items-center gap-2 text-xs text-[#a6a49c] font-mono mt-2">
                  <MapPin className="w-4 h-4 text-[#c5a880]" />
                  <span>{BUSINESS_INFO.addressShort}</span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps / Profile Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={BUSINESS_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#0d0e11] bg-[#c5a880] hover:bg-[#d6bb94] px-7 py-4 rounded-sm transition-all duration-300 font-semibold shadow-lg shadow-[#c5a880]/15"
              >
                <span>Read our reviews on Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Reputation Commitments */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#14151c] border border-[#23252e] rounded-sm">
              <ShieldCheck className="w-6 h-6 text-[#c5a880] mb-4" />
              <h2 className="font-serif text-xl text-white font-medium mb-2">
                Authentic Feedback
              </h2>
              <p className="text-xs sm:text-sm text-[#8e8b82] leading-relaxed">
                All reviews reflect verified interactions from buyers who have partnered with us for
                apartments, commercial spaces, and custom civil construction.
              </p>
            </div>

            <div className="p-8 bg-[#14151c] border border-[#23252e] rounded-sm">
              <HeartHandshake className="w-6 h-6 text-[#c5a880] mb-4" />
              <h2 className="font-serif text-xl text-white font-medium mb-2">
                Post-Handover Support
              </h2>
              <p className="text-xs sm:text-sm text-[#8e8b82] leading-relaxed">
                Our relationship does not end at registration. We assist homeowners with plumbing,
                electrical, and facility orientations to guarantee lasting satisfaction.
              </p>
            </div>

            <div className="p-8 bg-[#14151c] border border-[#23252e] rounded-sm">
              <MapPin className="w-6 h-6 text-[#c5a880] mb-4" />
              <h2 className="font-serif text-xl text-white font-medium mb-2">
                In-Person Consultations
              </h2>
              <p className="text-xs sm:text-sm text-[#8e8b82] leading-relaxed">
                Meet our coordinators at Doctors Plaza on VOC Street in West Tambaram to examine
                completed portfolios and discuss floor plan customization.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </SmoothScroll>
  );
}
