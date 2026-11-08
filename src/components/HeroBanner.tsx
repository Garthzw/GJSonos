import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowRight, ShieldCheck, Sparkles, Cpu, Award, MessageSquare } from 'lucide-react';
import { analyticsConversions } from '../utils/analytics';

interface HeroBannerProps {
  onNavigate: (view: string) => void;
  onOpenContact: () => void;
}

const HERO_REELS = [
  {
    id: 'brand',
    title: 'Brand Cinema Reel',
    subtitle: 'Cinema-Grade Staging',
    src: '/public/assets/aistudio/advert_brandvid_d8521859.mp4',
    badge: '100% Brand-Locked',
  },
  {
    id: 'swift',
    title: 'Swift 24h Logistics',
    subtitle: 'Day & Night Dynamic Fleet',
    src: '/public/assets/aistudio/Swift-day_night_57763f9d.mp4',
    badge: 'National Freight Leader',
  },
  {
    id: 'klomp',
    title: 'KLOMP Athletics',
    subtitle: 'High-Impact Trail Commercial',
    src: '/public/assets/aistudio/advert_run_36d8a2ee.mp4',
    badge: 'Dual-Terrain AI Video',
  },
  {
    id: 'mistify',
    title: 'Mistify Skincare',
    subtitle: 'Acoustic Fluid Wave Dynamics',
    src: '/public/assets/aistudio/advert_water_b1d99afb.mp4',
    badge: 'Precision Product Physics',
  },
];

export const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigate, onOpenContact }) => {
  const [selectedReelIndex, setSelectedReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeReel = HERO_REELS[selectedReelIndex];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSelectReel = (index: number) => {
    setSelectedReelIndex(index);
    setIsPlaying(true);
    const targetReel = HERO_REELS[index];
    if (targetReel) {
      analyticsConversions.trackReelPlayback(targetReel.title);
    }
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#08090D]">
      {/* Background radial gradients for high-end dark luxury aesthetic */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FF2E93]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Kicker - Editorial unboxed text */}
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-mono tracking-wider text-slate-400 mb-6">
          <span className="text-[#00F0FF] font-bold">HARARE</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-[#FFB800] font-bold">BULAWAYO</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-white font-bold">ZIMBABWE</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>NO BS MARKETING</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-[#00F0FF] font-semibold">BRAND-LOCKED AI</span>
        </div>

        {/* Master Headline & 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column: Proposition & Authority */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              STOP FOLLOWING.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#70E000] to-[#FFB800]">
                START LEADING.
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed max-w-2xl">
              Harare &amp; Bulawayo's Premier Marketing &amp; AI Agency — Leading Brands Across Zimbabwe.
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Backed by <span className="text-slate-200 font-semibold">26 years of senior creative art direction</span> and ground-level execution, SONOS serves enterprise corporate boardrooms in Harare, industrial manufacturing in Bulawayo, and distribution across all 10 provinces of Zimbabwe. Transition your brand from a reactive panic state to a responsive commercial leader.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('ai-studio')}
                className="group px-6 py-3.5 rounded-xl text-sm font-bold text-black bg-[#00F0FF] hover:bg-[#38f4ff] transition-all duration-200 shadow-xl shadow-[#00F0FF]/25 hover:shadow-[#00F0FF]/40 cursor-pointer flex items-center gap-2"
              >
                <span>Explore AI Studio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <span>View Portfolio & Case Studies</span>
              </button>

              <a
                href="https://wa.me/263790414827"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analyticsConversions.trackWhatsAppClick('hero_cta')}
                className="px-4 py-3.5 rounded-xl text-sm font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/25 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>+263 790 414 827</span>
              </a>
            </div>

            {/* Garth Jones Profile Anchor & Trust Badge */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3 bg-slate-900/80 p-2 pr-4 rounded-xl border border-white/10">
                <img
                  src="/public/assets/aistudio/gj-odoo_80d40182.png"
                  alt="Garth Jones — Principal Creative Director"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-lg object-cover border border-[#00F0FF]/30"
                />
                <div>
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Garth Jones</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#00F0FF]/20 text-[#00F0FF]">Principal</span>
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono">26 Yrs Direction · Harare &amp; Bulawayo Hubs · Zimbabwe</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>Zero AI Slop</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#FF2E93]" />
                  <span>Premier Google Partner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Commercial Cinema Player */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900/90 border border-white/15 shadow-2xl shadow-black/80">
              {/* Video container */}
              <div className="relative aspect-[16/10] bg-black">
                <video
                  ref={videoRef}
                  key={activeReel.src}
                  src={activeReel.src}
                  playsInline
                  autoPlay
                  loop
                  muted={isMuted}
                  className="w-full h-full object-cover"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                    <span>{activeReel.badge}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleToggleMute}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
                      aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-[#00F0FF]" />}
                    </button>
                    <button
                      onClick={handleTogglePlay}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
                      aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 text-slate-300" /> : <Play className="w-4 h-4 text-[#00F0FF]" />}
                    </button>
                  </div>
                </div>

                {/* Bottom title inside player */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <p className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">{activeReel.subtitle}</p>
                  <p className="text-base font-bold text-white tracking-tight">{activeReel.title}</p>
                </div>
              </div>

              {/* Selector Tabs (4 featured reels) */}
              <div className="p-3 bg-[#0F1118] border-t border-white/10">
                <div className="grid grid-cols-2 gap-2">
                  {HERO_REELS.map((reel, idx) => {
                    const isSelected = selectedReelIndex === idx;
                    return (
                      <button
                        key={reel.id}
                        onClick={() => handleSelectReel(idx)}
                        className={`text-left p-2.5 rounded-lg transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-800/90 border border-[#00F0FF]/40 shadow-sm'
                            : 'bg-slate-900/40 hover:bg-slate-900 border border-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        <p className={`text-xs font-bold truncate ${isSelected ? 'text-[#00F0FF]' : 'text-slate-300'}`}>
                          {reel.title}
                        </p>
                        <p className="text-[11px] text-slate-500 truncate">{reel.subtitle}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Quantitative Value Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0F1118]/80 border border-white/10 backdrop-blur-md shadow-xl">
          <div className="flex flex-col gap-1 p-2">
            <span className="font-display font-black text-3xl sm:text-4xl text-[#00F0FF] tracking-tight tabular-nums">
              26 Yrs
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-300">
              Creative Authority
            </span>
            <span className="text-xs text-slate-500">
              Senior Art Direction & Regional Leadership
            </span>
          </div>

          <div className="flex flex-col gap-1 p-2 border-l border-white/10 pl-4">
            <span className="font-display font-black text-3xl sm:text-4xl text-[#FFB800] tracking-tight tabular-nums">
              100%
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-300">
              Brand-Locked
            </span>
            <span className="text-xs text-slate-500">
              Zero Generic Slop · Strict CI Manual Lock
            </span>
          </div>

          <div className="flex flex-col gap-1 p-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-2 md:pl-4">
            <span className="font-display font-black text-3xl sm:text-4xl text-[#FF2E93] tracking-tight">
              Premier
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-300">
              Google Partner
            </span>
            <span className="text-xs text-slate-500">
              Enterprise SEO, Paid Search & Analytics
            </span>
          </div>

          <div className="flex flex-col gap-1 p-2 border-t md:border-t-0 border-l border-white/10 pt-4 md:pt-2 pl-4">
            <span className="font-display font-black text-3xl sm:text-4xl text-emerald-400 tracking-tight tabular-nums">
              48h
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-300">
              SLA Turnaround
            </span>
            <span className="text-xs text-slate-500">
              Sole Custody Approval & Fast Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
