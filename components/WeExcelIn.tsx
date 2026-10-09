'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Building2, ShieldCheck, HeartHandshake, Clock, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXCELLENCE_COLUMNS } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export const WeExcelIn: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#c5a880]" strokeWidth={1.5} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#c5a880]" strokeWidth={1.5} />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#c5a880]" strokeWidth={1.5} />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#c5a880]" strokeWidth={1.5} />;
      default:
        return <Building2 className="w-6 h-6 text-[#c5a880]" strokeWidth={1.5} />;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade-up on scroll: translateY 40px + opacity 0 to 1, 0.9s, power3.out, stagger 0.12
      gsap.fromTo(
        '.excel-col',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="standards"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 lg:py-36 bg-[#0f1014] text-[#e8e6e1] border-t border-[#1f2128]"
      aria-label="Core Pillars of Malarkodi Construction"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-3">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              Standards & Commitments
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
            We excel in every <span className="text-[#c5a880] font-semibold italic">dimension</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#8e8b82] font-light leading-relaxed">
            Constructing enduring landmarks through rigorous structural precision, total legal
            transparency, and an unwavering commitment to on-time handover.
          </p>
          <Link
            href="/standards"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#c5a880] hover:text-white transition-colors mt-3"
          >
            <span>Read Complete Civil Quality Protocol →</span>
          </Link>
        </div>

        {/* 4 Columns with icon, title, 3 short bullet words each */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y md:divide-y-0 lg:divide-x divide-[#23252e]"
        >
          {EXCELLENCE_COLUMNS.map((col, idx) => (
            <div
              key={col.id}
              className={`excel-col pt-8 md:pt-0 ${
                idx > 0 ? 'lg:pl-8' : ''
              } flex flex-col justify-between group`}
            >
              <div>
                {/* Column Index & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#2a2c33] group-hover:border-[#c5a880]/60 transition-colors bg-[#14151c]">
                    {getIcon(col.iconName)}
                  </div>
                  <span className="font-mono text-xs text-[#525563] tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide mb-6 group-hover:text-[#dfca9e] transition-colors">
                  {col.title}
                </h3>

                {/* 3 Short Bullet Words - Clean Unboxed Architectural Presentation */}
                <ul className="space-y-3 mb-6" aria-label={`Features of ${col.title}`}>
                  {col.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-center gap-3 text-xs font-mono tracking-wider text-[#cfcac0]"
                    >
                      <span className="w-1.5 h-1.5 bg-[#c5a880] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explanatory text */}
              <p className="text-xs text-[#8e8b82] font-light leading-relaxed pt-4 border-t border-[#1f2128]">
                {col.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
