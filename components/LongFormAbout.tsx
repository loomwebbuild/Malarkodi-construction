'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Compass, Award, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_INFO } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export const LongFormAbout: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in for the cards as they scroll past
      [card1Ref.current, card2Ref.current, card3Ref.current].forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full min-h-[170vh] bg-[#0d0e11] border-t border-[#1f2128]"
      aria-label="About Malarkodi Construction Pvt Ltd"
    >
      {/* Pinned Background Image (stays fixed while text scrolls over it) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=85&w=2400&auto=format&fit=crop"
          alt="Architectural development by Malarkodi Construction Pvt Ltd in West Tambaram"
          fill
          sizes="100vw"
          className="object-cover object-center filter grayscale-[25%] brightness-[0.35]"
          referrerPolicy="no-referrer"
        />
        {/* Dark gradient overlay so text is consistently readable */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-[#0d0e11]/65 to-[#0d0e11]/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e11] via-black/40 to-[#0d0e11]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Scrolling Text Flow Over the Pinned Background */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 -mt-[85vh] pb-32">
        {/* Intro Pillar Tag */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 border border-[#c5a880]/40 bg-[#0d0e11]/90 backdrop-blur-md px-4 py-2 text-[11px] font-mono tracking-[0.25em] text-[#c5a880] uppercase rounded-sm">
            <span>Our Philosophy</span>
            <span className="text-[#8e8b82]">/</span>
            <span>West Tambaram Builders</span>
          </div>
        </div>

        {/* Card 1: Core Tagline & Community Vision */}
        <div
          ref={card1Ref}
          className="bg-[#121319]/92 backdrop-blur-xl border border-[#23252e] p-8 sm:p-12 md:p-14 mb-14 shadow-2xl rounded-sm"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-tight leading-tight mb-6">
            We don’t just build homes and offices, we build{' '}
            <span className="text-[#c5a880] font-semibold italic">communities</span>.
          </h2>

          <div className="space-y-4 text-[#cfcac0] font-light leading-relaxed text-sm sm:text-base md:text-lg">
            <p>
              Founded on the belief that enduring structures foster meaningful lives,{' '}
              <strong className="text-white font-medium">Malarkodi Construction Pvt Ltd</strong> operates
              with an architectural ethos centered on generational durability.
            </p>
            <p>
              From modern medical and commercial offices at Doctors Plaza on VOC Street to
              custom-crafted residential homes, our developments are conceived to enrich their
              neighborhoods with light, ventilation, and structural stability.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1f2128] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#a6a49c]">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#c5a880]" />
              <span>Vastu-Aligned Space Planning</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#c5a880]" />
              <span>Tested Structural Materials</span>
            </div>
          </div>
        </div>

        {/* Card 2: Deep Engineering & Civil Discipline */}
        <div
          ref={card2Ref}
          className="bg-[#121319]/92 backdrop-blur-xl border border-[#23252e] p-8 sm:p-12 md:p-14 mb-14 shadow-2xl rounded-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c5a880]">
              Civil Engineering Integrity
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-light tracking-tight mb-5">
            Uncompromising Foundations for Century-Long Living
          </h3>

          <div className="space-y-4 text-[#cfcac0] font-light leading-relaxed text-xs sm:text-sm md:text-base">
            <p>
              South Chennai’s soil mechanics require precision calculations. Before casting footings,
              we conduct comprehensive geotechnical assessments to establish foundation depth that
              exceeds seismic and load safety factors.
            </p>
            <p>
              Throughout construction, our teams enforce certified concrete curing protocols,
              corrosion-resistant rebar placement, and precision plumbing conduits to prevent any
              post-handover moisture ingress.
            </p>
          </div>

          <div className="mt-6 p-5 bg-[#161820] border-l-2 border-[#c5a880] text-xs sm:text-sm text-[#dfca9e] italic leading-relaxed">
            “A foundation to build your dreams upon — built with honesty, supervised with care,
            and handed over with pride.”
          </div>
        </div>

        {/* Card 3: Permanent Location & Open Desk */}
        <div
          ref={card3Ref}
          className="bg-[#121319]/92 backdrop-blur-xl border border-[#23252e] p-8 sm:p-12 md:p-14 shadow-2xl rounded-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c5a880]">
              Local Accountability
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-light tracking-tight mb-4">
            Directly Accessible at 20, VOC Street
          </h3>

          <p className="text-[#cfcac0] font-light leading-relaxed text-xs sm:text-sm md:text-base mb-6">
            Our permanent headquarters at Doctors Plaza in West Tambaram provides a trusted point
            of contact. Clients meet directly with our project coordinators to review floor plans,
            structural details, and site timelines in person.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#a6a49c]">
            <div className="p-4 bg-[#161820] border border-[#23252e]">
              <span className="text-[#8e8b82] block text-[10px] uppercase">Corporate Desk</span>
              <span className="text-white font-medium">{BUSINESS_INFO.address}</span>
            </div>
            <div className="p-4 bg-[#161820] border border-[#23252e]">
              <span className="text-[#8e8b82] block text-[10px] uppercase">Working Hours</span>
              <span className="text-white font-medium">{BUSINESS_INFO.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
