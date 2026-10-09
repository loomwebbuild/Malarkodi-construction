'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown, Check, Phone, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHAT_WE_BUILD, BUSINESS_INFO } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export const WhatWeBuild: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(WHAT_WE_BUILD[0].id);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(WHAT_WE_BUILD[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const rowsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Each row slides up as it enters the viewport
      gsap.fromTo(
        '.service-row',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: rowsContainerRef.current,
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
      id="services"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 lg:py-36 bg-[#0d0e11] text-[#e8e6e1] overflow-hidden border-t border-[#1f2128]"
      aria-label="What We Build - Real Estate & Construction Services"
    >
      {/* Desktop Background Image Preview that fades behind on hover */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {WHAT_WE_BUILD.map((service) => {
          const isActive = service.id === activeServiceId;
          return (
            <div
              key={service.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-25' : 'opacity-0'
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="100vw"
                className="object-cover object-center filter grayscale-[30%] brightness-75 scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e11] via-[#0d0e11]/85 to-[#0d0e11]/95" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e11] via-transparent to-[#0d0e11]" />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 pb-6 border-b border-[#23252e]">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="w-8 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium">
                Scope of Work · Real Estate & Construction
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
              What We <span className="text-[#c5a880] font-semibold italic">Build</span>
            </h2>
          </div>

          <div>
            <p className="text-xs sm:text-sm text-[#8e8b82] max-w-md font-light leading-relaxed">
              From single-family homes to commercial centers, explore our full spectrum of
              development capabilities across West Tambaram.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#c5a880] hover:text-white transition-colors mt-3"
            >
              <span>Explore Full Service Specifications →</span>
            </Link>
          </div>
        </div>

        {/* Desktop Services List (01 to 04) */}
        <div ref={rowsContainerRef} className="hidden lg:flex flex-col divide-y divide-[#23252e]/70">
          {WHAT_WE_BUILD.map((service) => {
            const isHovered = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                className={`service-row group relative py-8 px-5 transition-all duration-300 cursor-pointer flex items-center justify-between ${
                  isHovered ? 'bg-[#171921]/60 backdrop-blur-sm' : 'hover:bg-[#121318]/40'
                }`}
              >
                {/* Left: Number + Title + One-Line Benefit Description */}
                <div className="flex items-start gap-8 max-w-3xl">
                  {/* Number */}
                  <span className="font-mono text-base tracking-widest text-[#8e8b82] group-hover:text-[#c5a880] transition-colors mt-1">
                    {service.number}
                  </span>

                  <div>
                    {/* Title */}
                    <h3 className="font-serif text-2xl xl:text-3xl text-white group-hover:text-[#dfca9e] transition-colors font-light tracking-wide flex items-center gap-3">
                      {service.title}
                      <ArrowUpRight
                        className={`w-5 h-5 text-[#c5a880] transition-all duration-300 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0`}
                      />
                    </h3>

                    {/* Subtitle / Scope */}
                    <p className="text-xs text-[#c5a880] font-mono tracking-wider mt-1 uppercase">
                      {service.subtitle}
                    </p>

                    {/* One-Line Benefit Description */}
                    <p className="text-xs sm:text-sm text-[#cfcac0] font-light leading-relaxed mt-2.5 max-w-2xl">
                      {service.benefit}
                    </p>
                  </div>
                </div>

                {/* Right: Action Button */}
                <div className="flex items-center gap-6 shrink-0">
                  <div className="hidden xl:flex flex-col items-end text-right">
                    <span className="text-[11px] font-mono text-[#8e8b82] tracking-wider uppercase">
                      Tambaram, Chennai
                    </span>
                    <span className="text-xs font-mono text-[#cfcac0] tracking-wide mt-0.5">
                      Turnkey Execution
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/919841921582?text=Hello%20Malarkodi%20Construction,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                      service.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-4 py-2.5 text-[10px] font-mono tracking-widest uppercase border border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0d0e11] rounded-sm font-semibold"
                  >
                    Discuss Service
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View: Tap-to-Expand Cards */}
        <div className="lg:hidden flex flex-col gap-3">
          {WHAT_WE_BUILD.map((service) => {
            const isExpanded = expandedMobileId === service.id;
            return (
              <div
                key={service.id}
                className="border border-[#23252e] bg-[#14151b] rounded-sm overflow-hidden transition-all duration-300"
              >
                {/* Header row / Tap target */}
                <button
                  onClick={() =>
                    setExpandedMobileId(isExpanded ? null : service.id)
                  }
                  className="w-full p-5 text-left flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#c5a880] mt-1">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-white font-normal leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-[11px] font-mono text-[#8e8b82] mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-[#8e8b82] transition-transform duration-300 shrink-0 mt-1 ${
                      isExpanded ? 'rotate-180 text-[#c5a880]' : ''
                    }`}
                  />
                </button>

                {/* Expanded Accordion Body */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-1 border-t border-[#1f2128] space-y-4 animate-fadeIn">
                    {/* Service Image */}
                    <div className="relative w-full h-44 rounded-sm overflow-hidden border border-[#2a2c33]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="90vw"
                        className="object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Benefit description */}
                    <p className="text-xs text-[#cfcac0] leading-relaxed">
                      {service.benefit}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-1.5 py-1">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-[11px] text-[#a6a49c] font-mono">
                          <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={BUSINESS_INFO.phoneTel}
                        className="flex-1 py-2.5 text-center border border-[#2a2c33] text-white hover:text-[#c5a880] text-xs font-mono uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/919841921582?text=Hello%20Malarkodi%20Construction,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                          service.title
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 text-center bg-[#c5a880] text-[#0d0e11] text-xs font-mono font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
