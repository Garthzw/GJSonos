import React from 'react';
import { ArrowUpRight, MessageSquare, Mail, Phone, MapPin, Facebook, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { analyticsConversions } from '../utils/analytics';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <footer className="bg-[#050608] border-t border-white/10 text-slate-400 text-xs">
      {/* Top Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Roots */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/public/assets/aistudio/Sonos_logo_white__4__21a44cfe.png"
                alt="SONOS Consultancy Zimbabwe"
                referrerPolicy="no-referrer"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Rooted in the Latin <span className="text-slate-200 italic font-semibold">‘sonus’</span> (tone, character, style, voice) and <span className="text-slate-200 italic font-semibold">‘sono’</span> (to celebrate and resound). Zimbabwe's first mix of traditional marketing mastery & brand-locked AI marketing.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
              <span>Sole Official Brand Custodian · 26 Years Senior Creative Direction</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#00F0FF] hover:text-black text-slate-300 border border-white/10 transition-all cursor-pointer"
                aria-label="SONOS Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#FF2E93] hover:text-white text-slate-300 border border-white/10 transition-all cursor-pointer"
                aria-label="SONOS Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/263790414827"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analyticsConversions.trackWhatsAppClick('footer_social')}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-black text-slate-300 border border-white/10 transition-all cursor-pointer"
                aria-label="Chat with Garth on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              Explore Site
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Homepage & Reel
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ai-studio')}
                  className="hover:text-[#00F0FF] transition-colors cursor-pointer"
                >
                  AI Studio (Brand-Locked)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Capabilities & SLA Custody
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Professional Inquiries & Agencies */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#00F0FF] font-bold mb-4">
              Professional Inquiries
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Corporate RFP Submission
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Agency White-Label Production
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Sole Brand Custody SLA Retainer
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Ground-Level Roadshow Direction
                </button>
              </li>
              <li>
                <a
                  href="https://sonos.co.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>sonos.co.zw Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact Details */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/263790414827"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span>+263 790 414 827</span>
              </a>

              <a
                href="tel:+263790414827"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                <span>+263 790 414 827</span>
              </a>

              <a
                href="mailto:garth@sonos.co.zw"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
                <span>garth@sonos.co.zw</span>
              </a>

              <div className="flex flex-col gap-1 text-slate-400 pt-1 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                  <span>Harare &amp; Bulawayo Hubs</span>
                </div>
                <p className="text-slate-500 pl-5">Serving All 10 Provinces of Zimbabwe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hairline & Legal Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} SONOS Consultancy. All rights reserved. The Psychology of Marketing.</p>
          <div className="flex items-center gap-4">
            <button onClick={onOpenContact} className="hover:text-slate-300 transition-colors cursor-pointer">
              Professional Inquiries
            </button>
            <span aria-hidden="true">·</span>
            <span>Premier Google Partner</span>
            <span aria-hidden="true">·</span>
            <span>Harare &amp; Bulawayo · Zimbabwe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
