'use client';

import React, { useState } from 'react';
import { ArrowRight, Phone, MessageSquare, Check, Send } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export const FinalCTA: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Residential Construction',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 md:py-32 lg:py-36 bg-[#0a0b0e] text-[#e8e6e1] overflow-hidden border-t border-[#1f2128]"
      aria-label="Direct Consultation and Final Call to Action"
    >
      {/* Subtle radial architectural glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Huge Headline + Direct Action Buttons */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-8 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium">
                Direct Dialogue · West Tambaram
              </span>
            </div>

            {/* Huge Headline */}
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-tight leading-[1.04] mb-6">
              Planning your{' '}
              <span className="text-[#c5a880] font-semibold italic">dream</span>{' '}
              home?
            </h2>

            <p className="max-w-xl text-sm sm:text-base md:text-lg text-[#cfcac0] font-light leading-relaxed mb-8">
              Speak directly with our civil engineering and building team in West Tambaram.
              Whether you need residential construction, commercial facilities, or turnkey civil
              execution, we provide clear timelines and transparent execution.
            </p>

            {/* Arrow Button & Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-[#c5a880] hover:bg-[#d6bb94] text-[#0d0e11] rounded-sm transition-all duration-300 shadow-xl shadow-[#c5a880]/15"
                aria-label="Call Malarkodi Construction"
              >
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                  Call {BUSINESS_INFO.phone}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#0d0e11] text-[#c5a880] flex items-center justify-center transition-transform group-hover:translate-x-1.5">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 border border-[#2a2c33] hover:border-[#c5a880] text-white hover:text-[#c5a880] rounded-sm text-xs font-mono tracking-[0.15em] uppercase transition-colors bg-[#121318]"
              >
                <MessageSquare className="w-4 h-4 text-[#c5a880]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Callback Request Form */}
          <div className="lg:col-span-5 bg-[#14151c] border border-[#23252e] p-6 sm:p-10 rounded-sm shadow-2xl relative">
            <h3 className="font-serif text-2xl text-white font-light mb-1">
              Request Project Consultation
            </h3>
            <p className="text-xs text-[#8e8b82] mb-6 leading-relaxed">
              Connect with our West Tambaram office regarding your project requirements.
            </p>

            {formSubmitted ? (
              <div className="p-6 border border-[#c5a880]/40 bg-[#161822] text-center space-y-3">
                <div className="w-12 h-12 rounded-full border border-[#c5a880] text-[#c5a880] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg text-white">Inquiry Received</h4>
                <p className="text-xs text-[#cfcac0]">
                  Thank you, {formData.name || 'valued customer'}. Our team will contact you shortly at{' '}
                  <span className="text-[#c5a880] font-mono">{formData.phone || BUSINESS_INFO.phone}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-[11px] font-mono text-[#8e8b82] underline hover:text-white"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-2.5 text-xs text-white placeholder-[#525563] rounded-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-2.5 text-xs text-white placeholder-[#525563] rounded-sm focus:outline-none transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1">
                    Requirement Type
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-2.5 text-xs text-white rounded-sm focus:outline-none transition-colors"
                  >
                    <option value="Residential Construction">Residential Homes & Apartments</option>
                    <option value="Commercial Complex">Commercial Complexes & Offices</option>
                    <option value="Turnkey Civil Works">Turnkey Construction & Civil Works</option>
                    <option value="Community Development">Community Living Developments</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your location, timeline, or preferred layout..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-2.5 text-xs text-white placeholder-[#525563] rounded-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#c5a880] hover:bg-[#d6bb94] text-[#0d0e11] text-xs font-mono font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>

                <p className="text-[10px] text-center text-[#5c5e6b] font-mono">
                  Direct callback from Malarkodi Construction West Tambaram office
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
