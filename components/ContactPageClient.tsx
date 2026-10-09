'use client';

import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Instagram, Send, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SmoothScroll } from '@/components/SmoothScroll';

export default function ContactPageClient() {
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
    <SmoothScroll>
      <Navbar />

      <main className="relative bg-[#0d0e11] text-[#e8e6e1] min-h-screen pt-28 md:pt-36 pb-20 overflow-hidden">
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              West Tambaram Headquarters
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.08] mb-6">
            Get in <span className="text-[#c5a880] font-semibold italic">Touch</span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#cfcac0] font-light leading-relaxed">
            Visit our office at Doctors Plaza on VOC Street or reach out directly by phone and
            WhatsApp. We are here to discuss your property requirements, architectural blueprints,
            and civil estimates.
          </p>
        </section>

        {/* Contact Information & Callback Form Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-[#14151c] border border-[#23252e] rounded-sm">
                <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase block mb-3">
                  Direct Telephone
                </span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex items-center gap-3 text-2xl font-serif text-white hover:text-[#c5a880] transition-colors"
                >
                  <Phone className="w-6 h-6 text-[#c5a880]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <p className="text-xs text-[#8e8b82] mt-2 font-mono">
                  Direct line to our West Tambaram project desk
                </p>
              </div>

              <div className="p-8 bg-[#14151c] border border-[#23252e] rounded-sm">
                <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase block mb-3">
                  Instant Messaging
                </span>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#c5a880] hover:bg-[#d6bb94] text-[#0d0e11] text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <p className="text-xs text-[#8e8b82] mt-3 font-mono">
                  Quick inquiries & brochure requests
                </p>
              </div>

              <div className="p-8 bg-[#14151c] border border-[#23252e] rounded-sm space-y-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase block mb-1">
                    Headquarters Address
                  </span>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e8e6e1] leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                    <address className="not-italic">
                      {BUSINESS_INFO.address}
                    </address>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1f2128]">
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase block mb-1">
                    Working Hours
                  </span>
                  <div className="flex items-center gap-2 text-xs text-[#cfcac0]">
                    <Clock className="w-4 h-4 text-[#c5a880]" />
                    <span>{BUSINESS_INFO.hours}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1f2128]">
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase block mb-1">
                    Instagram Updates
                  </span>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-white hover:text-[#c5a880] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#c5a880]" />
                    <span>{BUSINESS_INFO.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Callback Inquiry Form */}
            <div className="lg:col-span-7 bg-[#14151c] border border-[#23252e] p-8 sm:p-12 rounded-sm shadow-2xl">
              <h2 className="font-serif text-3xl text-white font-light mb-2">
                Send a Direct Message
              </h2>
              <p className="text-xs sm:text-sm text-[#8e8b82] mb-8 leading-relaxed">
                Fill in your details below and our construction team will get in touch directly.
              </p>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full border border-[#c5a880] text-[#c5a880] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-white font-light">Inquiry Sent Successfully</h3>
                  <p className="text-xs sm:text-sm text-[#cfcac0] max-w-md mx-auto">
                    Thank you, {formData.name || 'valued customer'}. Our team will call you back at{' '}
                    <span className="text-[#c5a880] font-mono">{formData.phone || BUSINESS_INFO.phone}</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-[#8e8b82] underline hover:text-white pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-3 text-sm text-white placeholder-[#525563] rounded-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1.5">
                      Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-3 text-sm text-white placeholder-[#525563] rounded-sm focus:outline-none transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1.5">
                      Requirement Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-3 text-sm text-white rounded-sm focus:outline-none transition-colors"
                    >
                      <option value="Residential Construction">Residential Homes & Apartments</option>
                      <option value="Commercial Complex">Commercial Complexes & Offices</option>
                      <option value="Turnkey Civil Works">Turnkey Construction & Civil Works</option>
                      <option value="Community Development">Community Living & Developments</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1.5">
                      Project Details / Location in Tambaram
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Provide any details about your plot size, budget, or preferred timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-3 text-sm text-white placeholder-[#525563] rounded-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#c5a880] hover:bg-[#d6bb94] text-[#0d0e11] text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <p className="text-[11px] text-center text-[#6b6e7d] font-mono">
                    Direct callback from Malarkodi Construction West Tambaram office
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Full-Width Map Frame */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-4">
            <h2 className="font-serif text-2xl text-white font-light">
              Visit Doctors Plaza, West Tambaram
            </h2>
            <p className="text-xs text-[#8e8b82]">
              Conveniently accessible via Tambaram Railway Station and GST Road.
            </p>
          </div>

          <div className="relative w-full h-80 sm:h-96 border border-[#23252e] rounded-sm overflow-hidden bg-[#121319]">
            <iframe
              title="Malarkodi Construction Pvt Ltd - Doctors Plaza Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583151770997!2d80.11545647573038!3d12.934484987377517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0e340c213d%3A0x6b7dd2c56a64db9f!2sDoctors%20Plaza%2C%20VOC%20St%2C%20West%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600045!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full opacity-85 hover:opacity-100 transition-opacity"
            />
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0d0e11]/95 backdrop-blur-md p-3 text-xs font-mono text-[#cfcac0] border border-[#2a2c33] flex items-center justify-between gap-4">
              <span>20, VOC St, West Tambaram, Chennai 600045</span>
              <a
                href={BUSINESS_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a880] hover:underline font-bold"
              >
                Directions →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </SmoothScroll>
  );
}
