'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0d0e11]/95 backdrop-blur-md border-t border-[#2a2c33] p-2.5 px-4 flex items-center gap-3 shadow-2xl"
    >
      <a
        href={BUSINESS_INFO.phoneTel}
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#181920] border border-[#333644] hover:border-[#c5a880] text-white rounded-sm text-xs font-mono font-medium tracking-wider active:scale-95 transition-all"
        aria-label="Call Malarkodi Construction"
      >
        <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
        <span>Call Now</span>
      </a>

      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#c5a880] hover:bg-[#d6bb94] text-[#0d0e11] rounded-sm text-xs font-mono font-bold tracking-wider uppercase active:scale-95 transition-all shadow-md shadow-[#c5a880]/15"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
};
