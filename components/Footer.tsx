'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  ArrowUp,
  Star,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Standards', href: '/standards' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative w-full bg-[#08090b] text-[#e8e6e1] border-t border-[#1f2128] pb-16 md:pb-0">
      {/* Upper Grid: Business Info + Map + Details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Col 1: Identity & Taglines (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Architectural Logo */}
              <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
                <div className="w-8 h-8 relative flex items-center justify-center border border-[#c5a880] rotate-45 group-hover:rotate-90 transition-transform duration-500">
                  <span className="text-[#c5a880] text-xs font-mono tracking-widest -rotate-45 font-bold">
                    M
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl tracking-[0.05em] uppercase text-white font-medium group-hover:text-[#c5a880] transition-colors">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8e8b82] font-mono">
                    {BUSINESS_INFO.type}
                  </p>
                </div>
              </Link>

              {/* Taglines */}
              <div className="space-y-1.5 mb-6">
                <p className="font-serif text-base sm:text-lg text-[#dfca9e] italic font-light">
                  “{BUSINESS_INFO.tagline1}”
                </p>
                <p className="font-serif text-sm sm:text-base text-[#cfcac0] font-light">
                  “{BUSINESS_INFO.tagline2}”
                </p>
              </div>

              <p className="text-xs text-[#8e8b82] font-light leading-relaxed mb-6 max-w-md">
                Residential developers and builders in West Tambaram, Chennai.
                Grounded in high engineering standards, clear documentation, and community living.
              </p>
            </div>

            {/* Google Rating Snippet */}
            <div className="p-4 bg-[#101116] border border-[#23252e] rounded-sm flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[#c5a880]">
                  <span className="font-serif text-xl text-white font-medium">
                    {BUSINESS_INFO.googleRating}
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#c5a880] text-[#c5a880]" />
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#8e8b82] uppercase tracking-wider block mt-0.5">
                  Based on {BUSINESS_INFO.googleReviewCount} Google reviews
                </span>
              </div>

              <a
                href={BUSINESS_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono text-[#c5a880] hover:underline flex items-center gap-1 uppercase"
              >
                <span>Google Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Contact, Hours & Instagram (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a880] uppercase block mb-3">
                Head Office
              </span>
              <div className="flex items-start gap-2.5 text-xs text-[#cfcac0] leading-relaxed">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <address className="not-italic">
                  {BUSINESS_INFO.address}
                </address>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a880] uppercase block mb-2">
                Phone Contact
              </span>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2.5 text-sm font-mono text-white hover:text-[#c5a880] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c5a880]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a880] uppercase block mb-2">
                Working Hours
              </span>
              <div className="flex items-center gap-2.5 text-xs text-[#cfcac0]">
                <Clock className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a880] uppercase block mb-2">
                Instagram
              </span>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#cfcac0] hover:text-[#c5a880] transition-colors font-mono"
              >
                <Instagram className="w-4 h-4 text-[#c5a880]" />
                <span>{BUSINESS_INFO.instagramHandle}</span>
              </a>
            </div>

            {/* Quick Multi-Page Links */}
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a880] uppercase block mb-2">
                Explore Pages
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono text-[#8e8b82]">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="hover:text-[#c5a880] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Embedded Google Map for Doctors Plaza, West Tambaram (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a880] uppercase block mb-3">
              Tambaram Location Map
            </span>
            <div className="relative w-full h-56 sm:h-64 border border-[#23252e] rounded-sm overflow-hidden bg-[#121319]">
              <iframe
                title="Malarkodi Construction Pvt Ltd - Doctors Plaza Tambaram Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583151770997!2d80.11545647573038!3d12.934484987377517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0e340c213d%3A0x6b7dd2c56a64db9f!2sDoctors%20Plaza%2C%20VOC%20St%2C%20West%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600045!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-85 hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-[#0d0e11]/90 backdrop-blur-sm p-2 text-[10px] font-mono text-[#cfcac0] border border-[#2a2c33] flex items-center justify-between">
                <span>West Tambaram, Chennai 600045</span>
                <a
                  href={BUSINESS_INFO.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c5a880] hover:underline flex items-center gap-1"
                >
                  Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hairline Bar */}
      <div className="border-t border-[#1a1b22] bg-[#050608] py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-[#6b6e7d] font-mono text-center sm:text-left">
            <span>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono text-[#525563] tracking-wider uppercase">
              West Tambaram, Chennai
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 border border-[#23252e] hover:border-[#c5a880] text-[#8e8b82] hover:text-[#c5a880] rounded-sm transition-colors flex items-center gap-1.5 text-xs font-mono"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
