import React, { useState } from 'react';
import { Volume2, ArrowRight, CheckCircle2, XCircle, Brain, Target, Sparkles } from 'lucide-react';

export const BrandPhilosophy: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'marketers' | 'agencies'>('marketers');

  return (
    <section className="py-24 bg-[#0A0C13] border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F0FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section kicker */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase mb-3">
          <Volume2 className="w-3.5 h-3.5" />
          <span>Harare &amp; Bulawayo Service Hubs · The Psychology of Marketing</span>
        </div>

        {/* Section title */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight [text-wrap:balance]">
            GIVE YOUR BRAND A VOICE IN HARARE &amp; BULAWAYO.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#3B82F6]">
              MAKE IT RESOUND ACROSS ZIMBABWE.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Rooted in the Latin <span className="text-slate-200 font-semibold italic">‘sonus’</span> (tone, character, style, and voice) and <span className="text-slate-200 font-semibold italic">‘sono’</span> (to cry out, celebrate, and resound). Across Zimbabwe's key commercial centres—from Harare corporate financial districts to Bulawayo's heavy industrial corridors and nationwide agricultural supply chains—our methodology transforms organizations from passive noise into an unmistakable market force.
          </p>
        </div>

        {/* 2-Column: Reactive vs Responsive Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Reactive State */}
          <div className="p-8 rounded-2xl bg-[#0F1118]/60 border border-red-500/20 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                The Status Quo Trap
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
                Reactive State
              </span>
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-3">
              Isolated Announcements & Panic Marketing
            </h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Most brands operate in a chaotic loop—reacting to competitor moves, posting sporadic social flyers with mismatched typography, and throwing disjointed discounts when sales dip.
            </p>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span>Unbranded, generic stock imagery and low-rent visual templates</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span>Single-post announcements forgotten within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span>No cohesive psychological progression or narrative build</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span>Vanity likes that never convert to signed commercial contracts</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Responsive Mindset (SONOS Way) */}
          <div className="p-8 rounded-2xl bg-[#0F1118] border border-[#00F0FF]/30 backdrop-blur-md relative overflow-hidden shadow-xl shadow-[#00F0FF]/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00F0FF] font-bold">
                The SONOS Methodology
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30">
                Responsive Mindset
              </span>
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-3">
              Structured Psychological Progression &amp; Brand Custody for Zimbabwe
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Marketing is not a series of isolated announcements. Capturing consumer attention in Harare and Bulawayo, building unshakeable trust, and converting buyers into brand advocates across Zimbabwe is an engineered sequence.
            </p>

            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] mt-0.5 shrink-0" />
                <span><strong className="text-white">100% Brand-Locked Assets:</strong> Every color, font, and talent face conforms strictly to your Corporate Identity Manual.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] mt-0.5 shrink-0" />
                <span><strong className="text-white">Cognitive Priming:</strong> Strategic content hits target buyers 60 days before seasonal purchasing windows across Zimbabwean markets.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] mt-0.5 shrink-0" />
                <span><strong className="text-white">Cinema-Grade Staging:</strong> Multi-million dollar Hollywood commercial quality at a fraction of physical studio costs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] mt-0.5 shrink-0" />
                <span><strong className="text-white">Sole Official Brand Custodian:</strong> 26 years of senior creative leadership protecting your brand equity in Harare &amp; Bulawayo.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Target Market Switcher: Business Marketers vs Design Agencies */}
        <div className="p-8 rounded-2xl bg-[#0D0F16] border border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#FFB800] mb-1">Tailored Solutions</p>
              <h3 className="font-display font-bold text-2xl text-white">Who We Partner With in Harare, Bulawayo &amp; Beyond</h3>
            </div>

            {/* Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveTab('marketers')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'marketers'
                    ? 'bg-[#00F0FF] text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                For Corporate & Business Marketers
              </button>
              <button
                onClick={() => setActiveTab('agencies')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'agencies'
                    ? 'bg-[#00F0FF] text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                For Design & Ad Agencies
              </button>
            </div>
          </div>

          {activeTab === 'marketers' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5">
                <Brain className="w-6 h-6 text-[#00F0FF] mb-3" />
                <h4 className="font-bold text-base text-white mb-2">Sole Brand Custodianship</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Eliminate visual degradation. Route every brochure, billboard, and social campaign through Garth Jones for strict compliance before public release.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5">
                <Target className="w-6 h-6 text-[#FFB800] mb-3" />
                <h4 className="font-bold text-base text-white mb-2">Definitive Commercial ROI</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every dollar spent is linked to customer journey mapping, technical search intent (Premier Google Partner), and measurable inbound pipelines.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5">
                <Sparkles className="w-6 h-6 text-[#FF2E93] mb-3" />
                <h4 className="font-bold text-base text-white mb-2">Turnkey AI Commercials</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Produce TV commercials, episodic social series, and custom virtual brand ambassadors in 72 hours without expensive video shoot logistics.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5">
                <Brain className="w-6 h-6 text-[#00F0FF] mb-3" />
                <h4 className="font-bold text-base text-white mb-2">White-Label AI Production Unit</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Equip your agency with full AI commercial and character-locking capabilities. We execute behind the scenes while you deliver client triumphs.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5">
                <Target className="w-6 h-6 text-[#FFB800] mb-3" />
                <h4 className="font-bold text-base text-white mb-2">Senior Creative Leadership</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Need a 26-year veteran creative director to lead high-stakes client pitches or solve thorny brand architecture problems? SONOS is on tap.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5">
                <Sparkles className="w-6 h-6 text-[#FF2E93] mb-3" />
                <h4 className="font-bold text-base text-white mb-2">Accelerated Margin & Output</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pitch ambitious 3D packaging, character series, and video campaigns without expanding permanent agency payroll or freelance risk.
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Ready to upgrade your brand or agency workflow? Consult with Garth directly.
            </p>
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-black bg-[#00F0FF] hover:bg-[#3bf4ff] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Strategic Discovery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
