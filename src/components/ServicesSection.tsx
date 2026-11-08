import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, ArrowRight, Award, Zap, BarChart3, Globe, Sparkles } from 'lucide-react';
import { SERVICES_LIST } from '../data/siteContent';

export const ServicesSection: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  return (
    <section className="py-24 bg-[#08090D] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold block mb-3">
              Harare · Bulawayo · Full-Service Digital Marketing &amp; Brand-Locked Web
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight [text-wrap:balance]">
              AT OUR CORE IS TECHNOLOGY:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#3B82F6]">
                POWERING HARARE &amp; BULAWAYO ENTERPRISES.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              Every marketing dollar spent in Harare, Bulawayo, and throughout Zimbabwe is backed by customer journey mapping, technical search intent, and attributable commercial ROI.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 shrink-0">
            <Award className="w-8 h-8 text-[#FF2E93]" />
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Premier Google Partner</p>
              <p className="text-[11px] text-slate-400">Certified Technical SEO & SEM</p>
            </div>
          </div>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SERVICES_LIST.map((srv, idx) => (
            <div
              key={srv.id}
              className={`p-8 rounded-2xl bg-[#0F1118] border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300 relative group flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-[#0F1118] via-[#0F1118] to-slate-900/80' : ''
              }`}
            >
              <div>
                <span className="text-xs font-mono text-slate-500 font-bold block mb-3">
                  CAPABILITY {srv.id}
                </span>

                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs font-mono text-[#00F0FF] mb-4">
                  {srv.summary}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {srv.details}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Enterprise Grade</span>
                <span className="text-[#00F0FF] font-mono">100% Attributable ROI</span>
              </div>
            </div>
          ))}
        </div>

        {/* Design is Strategy & Activations Resound Feature Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-[#0D0F16] border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFB800] font-bold block mb-2">
              Visual Psychology
            </span>
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Corporate Brand Architecture in Harare &amp; Bulawayo.
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FFB800] mt-0.5 shrink-0" />
                <span><strong className="text-white">Corporate Brand Architecture:</strong> Comprehensive guidelines that eliminate ambiguity across branches in Harare, Bulawayo, and regional offices.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FFB800] mt-0.5 shrink-0" />
                <span><strong className="text-white">High-Converting Digital UI/UX:</strong> Portals engineered with cognitive friction reduction for maximal lead conversion across Zimbabwean buyers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FFB800] mt-0.5 shrink-0" />
                <span><strong className="text-white">Creative Art Direction:</strong> High-impact annual reports, packaging systems, and national outdoor billboards along major transit corridors.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-[#0D0F16] border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold block mb-2">
              Ground-Level BTL Execution
            </span>
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Ground-Level BTL Activations Across Zimbabwe.
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] mt-0.5 shrink-0" />
                <span><strong className="text-white">Ground-Level BTL Activations:</strong> High-energy in-store promotions, experiential sampling, and high-traffic popups across Harare, Bulawayo, and regional capitals.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] mt-0.5 shrink-0" />
                <span><strong className="text-white">Corporate Events & Launches:</strong> 3D spatial mapping, stage lighting, sound engineering, and VIP logistics for Zimbabwean enterprise leaders.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] mt-0.5 shrink-0" />
                <span><strong className="text-white">Multi-City Roadshows:</strong> High-engagement provincial tours covering all 10 provinces combined with real-time digital lead attribution.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sole Brand Custodian & SLA Retainer Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0F1118] to-slate-900 border border-[#00F0FF]/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparent Retainers & Quality Control Across Zimbabwe</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-4">
              Sole Official Brand Custody &amp; SLA Retainers Across Zimbabwe
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Protect your brand equity across every public-facing touchpoint. Under our custodian agreement, all marketing artwork, promotional collateral, and digital publications are routed through and approved by SONOS prior to release.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="font-mono text-sm font-bold text-white block mb-1">12 Custom Assets/Mo</span>
                <span className="text-xs text-slate-400">Mobile-optimized, branded & copywritten</span>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="font-mono text-sm font-bold text-white block mb-1">48-Hour SLA</span>
                <span className="text-xs text-slate-400">Rapid turnaround with 2 revision rounds</span>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="font-mono text-sm font-bold text-white block mb-1">Full Stewardship</span>
                <span className="text-xs text-slate-400">Platform scheduling & monthly analytics</span>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-xl text-xs font-bold text-black bg-[#00F0FF] hover:bg-[#3bf4ff] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#00F0FF]/25"
            >
              <span>Inquire About Monthly Custodian Retainer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
