'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_INFO } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export const Intro: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const slowImgRef = useRef<HTMLDivElement>(null);
  const fastImgRef = useRef<HTMLDivElement>(null);
  const [readMoreExpanded, setReadMoreExpanded] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // Reveal pattern: translateY 40px + opacity 0 to 1, 0.9s, power3.out, stagger 0.12
      gsap.fromTo(
        '.intro-reveal-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Two images beside it moving at different parallax speeds (max 15% travel)
      if (!prefersReducedMotion) {
        if (slowImgRef.current) {
          gsap.fromTo(
            slowImgRef.current,
            { y: '5%' },
            {
              y: '-8%',
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );
        }

        if (fastImgRef.current) {
          gsap.fromTo(
            fastImgRef.current,
            { y: '10%' },
            {
              y: '-12%',
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8,
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 lg:py-36 bg-[#0f1014] text-[#e8e6e1] overflow-hidden border-t border-[#1f2128]"
      aria-label="Introduction to Malarkodi Construction"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Sub-header indicator */}
        <div className="flex items-center gap-4 mb-8 intro-reveal-item">
          <span className="w-8 h-[1px] bg-[#c5a880]" />
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium">
            Architectural Philosophy · West Tambaram
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Statement Headline, paragraph, read more */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="intro-reveal-item font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-tight leading-[1.15] mb-6">
              A foundation to build your{' '}
              <span className="text-[#c5a880] font-semibold italic">dreams</span> upon.
            </h2>

            <div className="intro-reveal-item space-y-4 text-[#cfcac0] font-light leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                At Malarkodi Construction Pvt Ltd, every structure starts with an uncompromising
                dedication to durability and civil precision. Headquartered at Doctors Plaza on
                VOC Street, West Tambaram, we develop residential homes and commercial spaces that
                elevate everyday living.
              </p>
              <p>
                We do not just assemble concrete and masonry; we foster vibrant, connected
                communities through thoughtful layouts, optimal cross-ventilation, and transparent
                supervision across every phase.
              </p>
            </div>

            {/* Read More Link / Drawer */}
            <div className="intro-reveal-item pt-4">
              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={() => setReadMoreExpanded(!readMoreExpanded)}
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#c5a880] hover:text-white transition-colors group py-2"
                  aria-expanded={readMoreExpanded}
                >
                  <span>{readMoreExpanded ? 'Show Less' : 'Read Approach Highlights'}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      readMoreExpanded ? '-rotate-90' : 'group-hover:translate-x-1'
                    }`}
                  />
                </button>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#a6a49c] hover:text-[#c5a880] transition-colors group py-2 border-b border-[#2a2c33] hover:border-[#c5a880]"
                >
                  <span>Full Company Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#c5a880]" />
                </Link>
              </div>

              {readMoreExpanded && (
                <div className="mt-4 p-5 sm:p-6 border-l-2 border-[#c5a880] bg-[#14151a] text-xs sm:text-sm text-[#b5b1a8] leading-relaxed space-y-3 animate-fadeIn">
                  <p>
                    <strong>Structural Engineering Standards:</strong> We enforce certified testing
                    protocols for cement, primary steel reinforcement, and foundation depth suited
                    specifically to South Chennai soil conditions.
                  </p>
                  <p>
                    <strong>Tambaram Neighborhood Commitment:</strong> With our office located on
                    VOC Street, we offer direct access to project supervisors, clear documentation,
                    and ongoing support from initial blueprint to handover.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-[#c5a880]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> High Civil Engineering Codes
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Direct Site Supervision
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Quiet unboxed metadata stats (based ONLY on real data provided) */}
            <div className="intro-reveal-item grid grid-cols-2 gap-6 pt-8 border-t border-[#1f2128] mt-8">
              <div>
                <span className="block font-serif text-3xl md:text-4xl text-white font-light">
                  {BUSINESS_INFO.googleRating}★
                </span>
                <span className="text-[11px] font-mono tracking-wider text-[#8e8b82] uppercase mt-1 block">
                  {BUSINESS_INFO.googleReviewCount} Google Reviews
                </span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl text-[#c5a880] font-light">
                  Doctors Plaza
                </span>
                <span className="text-[11px] font-mono tracking-wider text-[#8e8b82] uppercase mt-1 block">
                  VOC St, West Tambaram
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Two images moving at different parallax speeds */}
          <div className="lg:col-span-6 relative min-h-[420px] md:min-h-[540px] flex items-center justify-center">
            {/* Image 1: Primary Large Frame - Slow Parallax */}
            <div
              ref={slowImgRef}
              className="relative w-[82%] sm:w-[75%] h-[340px] sm:h-[440px] border border-[#2a2c33] shadow-2xl overflow-hidden bg-[#16171d] will-change-transform z-10 mr-auto"
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                alt="Architectural structure crafted by Malarkodi Construction"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-cover object-center contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white/90 tracking-wider">
                <span className="text-[#c5a880] mr-2">01 //</span>
                <span>Structural Elevation & Framing</span>
              </div>
            </div>

            {/* Image 2: Secondary Overlapping Frame - Fast Parallax */}
            <div
              ref={fastImgRef}
              className="absolute right-0 top-1/4 w-[55%] sm:w-[50%] h-[240px] sm:h-[320px] border border-[#c5a880]/30 shadow-2xl overflow-hidden bg-[#121316] will-change-transform z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop"
                alt="Finished living space interior by Malarkodi Construction"
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#c5a880] tracking-widest uppercase">
                Artisanal Living Spaces
              </div>
            </div>

            {/* Subtle coordinates watermark */}
            <div className="absolute -bottom-6 right-4 text-[10px] font-mono text-[#444652] tracking-[0.25em] select-none pointer-events-none">
              WEST TAMBARAM · CHENNAI 600045
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
