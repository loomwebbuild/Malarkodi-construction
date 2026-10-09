'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Standards', href: '/standards' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0d0e11]/95 backdrop-blur-md border-b border-[#2a2c33]/50 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
        >
          <div className="w-8 h-8 relative flex items-center justify-center border border-[#c5a880]/60 rotate-45 transition-transform duration-500 group-hover:rotate-90">
            <span className="text-[#c5a880] text-[10px] font-mono tracking-widest -rotate-45 font-bold">
              M
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.08em] uppercase text-white font-medium group-hover:text-[#c5a880] transition-colors">
              Malarkodi
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-[#8e8b82] font-mono">
              Construction Pvt Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links - Clean Typography with Active State */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[11px] font-sans tracking-[0.22em] uppercase transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#c5a880] font-semibold after:w-full'
                    : 'text-[#cfcac0] hover:text-[#c5a880] after:w-0'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#c5a880] hover:after:w-full after:transition-all after:duration-300`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions: Phone Top Right + WhatsApp */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center gap-2.5 text-xs tracking-wider text-white hover:text-[#c5a880] transition-colors px-3.5 py-1.5 border border-[#2a2c33] hover:border-[#c5a880]/50 rounded-sm bg-[#121316]/75 backdrop-blur-sm"
            aria-label="Call Malarkodi Construction Pvt Ltd"
          >
            <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="font-mono text-[11px] tracking-wider">
              {BUSINESS_INFO.phone}
            </span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#0d0e11] bg-[#c5a880] hover:bg-[#d6bb94] px-4 py-1.5 rounded-sm transition-all duration-300 shadow-sm hover:shadow-[#c5a880]/20 font-semibold"
            aria-label="Chat with Malarkodi Construction on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="tracking-widest uppercase text-[10px]">
              WhatsApp
            </span>
          </a>
        </div>

        {/* Mobile Hamburger & Quick Phone */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="p-2 border border-[#2a2c33] text-[#c5a880] rounded-sm bg-[#14151a]"
            aria-label="Call Phone"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#2a2c33] text-white rounded-sm hover:border-[#c5a880]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0e11]/98 border-b border-[#2a2c33] px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-2.5 mb-6" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-sans tracking-[0.2em] uppercase py-2.5 border-b border-[#1c1e24] flex items-center justify-between ${
                    isActive ? 'text-[#c5a880] font-semibold' : 'text-white hover:text-[#c5a880]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8e8b82]" />
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-2.5 pt-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center justify-center gap-3 py-3 border border-[#c5a880]/40 text-white rounded-sm text-xs font-mono tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#c5a880]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#c5a880] text-[#0d0e11] rounded-sm text-xs font-mono font-semibold uppercase tracking-widest"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
            <p className="text-[10px] text-center text-[#8e8b82] tracking-wider mt-1">
              {BUSINESS_INFO.addressShort}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
