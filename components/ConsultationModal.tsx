'use client';

import React, { useState, useEffect } from 'react';
import { X, Phone, MessageSquare, Check, Send, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Residential Homes & Apartments',
    timeSlot: 'Morning (9 AM - 12 PM)',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Schedule Consultation"
    >
      <div className="relative w-full max-w-lg bg-[#14151b] border border-[#2a2c33] rounded-sm shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#8e8b82] hover:text-white border border-[#23252e] hover:border-[#c5a880] rounded-sm transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 text-[#c5a880] text-[10px] font-mono tracking-widest uppercase mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Direct Desk · West Tambaram</span>
          </div>
          <h3 className="font-serif text-2xl text-white font-light">
            Schedule a Consultation
          </h3>
          <p className="text-xs text-[#8e8b82] mt-1 font-light">
            Speak directly with Malarkodi Construction builders at Doctors Plaza, West Tambaram.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full border border-[#c5a880] text-[#c5a880] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl text-white">Consultation Requested</h4>
            <p className="text-xs text-[#cfcac0] max-w-sm mx-auto">
              Thank you, {formData.name}. Our project desk will reach you at{' '}
              <span className="text-[#c5a880] font-mono">{formData.phone}</span> during your preferred window.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-4 py-2 bg-[#c5a880] text-[#0d0e11] text-xs font-mono font-semibold uppercase tracking-wider rounded-sm"
              >
                Call Now
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 border border-[#333] text-white hover:border-[#c5a880] text-xs font-mono uppercase tracking-wider rounded-sm"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-2.5 text-xs text-white placeholder-[#525563] rounded-sm focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="Contact number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-2.5 text-xs text-white placeholder-[#525563] rounded-sm focus:outline-none transition-colors font-mono"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1">
                Service Required
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-2.5 text-xs text-white rounded-sm focus:outline-none transition-colors"
              >
                <option value="Residential Homes & Apartments">Residential Homes & Apartments</option>
                <option value="Commercial Complexes & Offices">Commercial Complexes & Offices</option>
                <option value="Turnkey Construction & Civil Works">Turnkey Construction & Civil Works</option>
                <option value="Community Living & Developments">Community Living & Developments</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e8b82] mb-1">
                Preferred Callback Time
              </label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full bg-[#0d0e12] border border-[#2a2c33] focus:border-[#c5a880] px-4 py-2.5 text-xs text-white rounded-sm focus:outline-none transition-colors"
              >
                <option value="Morning (9 AM - 12 PM)">Morning (Opens 9:00 AM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening (4 PM - 7 PM)">Evening (4:00 PM - 7:00 PM)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#c5a880] hover:bg-[#d6bb94] text-[#0d0e11] text-xs font-mono font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Confirm Callback Request</span>
            </button>

            {/* Direct Instant Action Links */}
            <div className="pt-3 border-t border-[#1f2128] flex items-center justify-between text-xs font-mono">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="text-white hover:text-[#c5a880] flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a880] hover:underline flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
