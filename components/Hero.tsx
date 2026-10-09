'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { BUSINESS_INFO } from '@/lib/data';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      if (imageWrapperRef.current) imageWrapperRef.current.style.transform = 'scale(1)';
      return;
    }

    const ctx = gsap.context(() => {
      // Slow scale-down on load for full-viewport image
      gsap.fromTo(
        imageWrapperRef.current,
        { scale: 1.15 },
        {
          scale: 1.02,
          duration: 2.4,
          ease: 'power2.out',
        }
      );

      // Staggered line-by-line headline reveal
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(
        line1Ref.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
      )
        .fromTo(
          line2Ref.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
          '-=0.65'
        )
        .fromTo(
          subtextRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          actionsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[580px] max-h-[1100px] flex items-center justify-center overflow-hidden bg-[#0d0e11]"
      aria-label="Hero Section"
    >
      {/* Background Architectural Image with slow scale-down */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=2400&auto=format&fit=crop"
          alt="Architectural residential construction by Malarkodi Construction Pvt Ltd in West Tambaram"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Dark gradient overlay so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-[#0d0e11]/70 to-[#0d0e11]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-[#0d0e11]/40 to-[#0d0e11]/85 pointer-events-none" />
      </div>

      {/* Floating Top Right Contact Badge */}
      <div className="absolute top-24 right-6 md:right-12 hidden lg:flex items-center gap-3 bg-[#111215]/85 backdrop-blur-md border border-[#2a2c33]/70 px-4 py-2 text-xs font-mono rounded-sm shadow-xl z-20">
        <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
        <span className="text-[#8e8b82] tracking-wider uppercase text-[10px]">
          Tambaram Desk:
        </span>
        <a
          href={BUSINESS_INFO.phoneTel}
          className="text-white hover:text-[#c5a880] transition-colors font-medium tracking-widest"
        >
          {BUSINESS_INFO.phone}
        </a>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center pt-12 md:pt-16 pb-16">
        {/* Pre-Kicker */}
        <div className="inline-flex items-center gap-2 mb-3 md:mb-4 text-[#c5a880] text-[10px] md:text-xs font-sans tracking-[0.35em] uppercase font-medium">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span>Real Estate Developer · West Tambaram</span>
        </div>

        {/* Strong Two-Line Headline */}
        <h1
          ref={line1Ref}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.08] mb-1"
        >
          A foundation to build your{' '}
          <span className="text-[#c5a880] font-semibold italic">dreams</span> upon!
        </h1>

        <div
          ref={line2Ref}
          className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#dfca9e] font-light tracking-wide mt-1.5 mb-4 md:mb-6"
        >
          We don’t just build homes and offices, we build{' '}
          <span className="text-white font-medium border-b border-[#c5a880]/50 pb-0.5">
            communities!
          </span>
        </div>

        {/* One Short Subline */}
        <p
          ref={subtextRef}
          className="max-w-xl text-xs sm:text-sm md:text-base text-[#cfcac0] font-light leading-relaxed mb-6 md:mb-8 tracking-wide"
        >
          Premier builders delivering signature residential and commercial developments
          at Doctors Plaza, West Tambaram, Chennai.
        </p>

        {/* Two buttons ("Call now" and "WhatsApp us") - visible without scrolling on mobile */}
        <div
          ref={actionsRef}
          className="flex flex-row items-center justify-center gap-3 w-full max-w-md sm:w-auto"
        >
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#c5a880] hover:bg-[#d4b992] text-[#0d0e11] text-xs font-mono font-bold tracking-[0.18em] uppercase rounded-sm transition-all duration-300 shadow-lg shadow-[#c5a880]/20 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 border border-[#c5a880]/70 hover:border-[#c5a880] text-white hover:text-[#c5a880] text-xs font-mono font-medium tracking-[0.18em] uppercase rounded-sm bg-[#121316]/85 backdrop-blur-sm transition-all duration-300 active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
