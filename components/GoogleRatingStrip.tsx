'use client';

import React from 'react';
import Link from 'next/link';
import { Star, CheckCircle, ExternalLink, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export const GoogleRatingStrip: React.FC = () => {
  return (
    <section
      id="reviews"
      className="relative w-full py-20 md:py-28 lg:py-32 bg-[#0d0e11] text-[#e8e6e1] overflow-hidden border-t border-b border-[#1f2128]"
      aria-label="Google Customer Rating"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#13141a] border border-[#23252e] rounded-sm flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Left: Large 4.9 + Stars + 37 Google Reviews */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-8">
            <div className="flex items-center gap-5">
              <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-white font-light tracking-tight leading-none">
                {BUSINESS_INFO.googleRating}
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1 text-[#c5a880]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#c5a880] text-[#c5a880]"
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono tracking-widest text-[#c5a880] uppercase">
                  Overall Score
                </span>
              </div>
            </div>

            <div className="hidden sm:block h-16 w-[1px] bg-[#2a2c33]" />

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-xl font-medium text-white tracking-wide">
                  {BUSINESS_INFO.googleReviewCount} Google reviews
                </span>
                <CheckCircle className="w-5 h-5 text-[#c5a880]" />
              </div>
              <p className="text-xs text-[#8e8b82] tracking-wider mt-1 font-light">
                Verified Google Business Profile · West Tambaram, Chennai
              </p>
              <div className="flex items-center gap-3 text-[11px] text-[#a6a49c] font-mono mt-1.5">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{BUSINESS_INFO.addressShort}</span>
                </span>
                <span>·</span>
                <Link
                  href="/reviews"
                  className="text-[#c5a880] hover:underline flex items-center gap-1"
                >
                  <span>Trust & Reviews Overview</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Read our reviews on Google link button */}
          <div className="flex items-center sm:self-start lg:self-center">
            <a
              href={BUSINESS_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#0d0e11] bg-[#c5a880] hover:bg-[#d6bb94] px-6 py-4 rounded-sm transition-all duration-300 font-semibold shadow-lg shadow-[#c5a880]/15"
            >
              <span>Read our reviews on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
