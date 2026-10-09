'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dot1Ref = useRef<HTMLSpanElement>(null);
  const dot2Ref = useRef<HTMLSpanElement>(null);
  const dot3Ref = useRef<HTMLSpanElement>(null);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Check if preloader already ran in this session
    const hasLoadedBefore = typeof window !== 'undefined' && sessionStorage.getItem('mc_preloader_shown');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasLoadedBefore || prefersReducedMotion) {
      const rafId = requestAnimationFrame(() => {
        setRemoved(true);
        onComplete();
      });
      return () => cancelAnimationFrame(rafId);
    }

    sessionStorage.setItem('mc_preloader_shown', 'true');

    const tl = gsap.timeline({
      onComplete: () => {
        setRemoved(true);
        onComplete();
      },
    });

    // Animate dots
    const dotsTl = gsap.timeline({ repeat: 2, yoyo: true });
    dotsTl
      .to([dot1Ref.current, dot2Ref.current, dot3Ref.current], {
        scale: 1.6,
        opacity: 1,
        stagger: 0.18,
        duration: 0.35,
        ease: 'power2.out',
      })
      .to([dot1Ref.current, dot2Ref.current, dot3Ref.current], {
        scale: 1,
        opacity: 0.4,
        stagger: 0.18,
        duration: 0.35,
        ease: 'power2.in',
      });

    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
      .add(dotsTl)
      .to(contentRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.35,
        ease: 'power2.in',
      })
      .to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.75,
          ease: 'power3.inOut',
        },
        '-=0.1'
      );

    return () => {
      tl.kill();
      dotsTl.kill();
    };
  }, [onComplete]);

  if (removed) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0e11] text-[#e8e6e1] pointer-events-auto"
      aria-hidden="true"
    >
      <div
        ref={contentRef}
        className="opacity-0 translate-y-4 flex flex-col items-center justify-center text-center px-6"
      >
        {/* Architectural Emblem */}
        <div className="w-16 h-16 mb-6 relative flex items-center justify-center border border-[#c5a880]/40 rotate-45">
          <span className="text-[#c5a880] text-xs font-mono tracking-widest -rotate-45 font-semibold">
            MC
          </span>
          <div className="absolute inset-1 border border-[#c5a880]/20 pointer-events-none" />
        </div>

        <p className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#c5a880] mb-2">
          West Tambaram · Chennai
        </p>
        <h1 className="font-serif text-2xl md:text-3xl tracking-wide text-white font-light">
          Malarkodi Construction
        </h1>
        <p className="text-xs text-[#8e8b82] tracking-wider mt-1 font-light">
          Pvt Ltd · Real Estate Developers
        </p>

        {/* Three Animated Dots */}
        <div className="flex items-center gap-2 mt-8">
          <span
            ref={dot1Ref}
            className="w-1.5 h-1.5 rounded-full bg-[#c5a880] opacity-30 inline-block transition-transform"
          />
          <span
            ref={dot2Ref}
            className="w-1.5 h-1.5 rounded-full bg-[#c5a880] opacity-30 inline-block transition-transform"
          />
          <span
            ref={dot3Ref}
            className="w-1.5 h-1.5 rounded-full bg-[#c5a880] opacity-30 inline-block transition-transform"
          />
        </div>
      </div>
    </div>
  );
};
