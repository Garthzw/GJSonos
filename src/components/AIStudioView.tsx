import React, { useState } from 'react';
import { Sparkles, Cpu, Check, ShieldCheck, Play, ArrowRight, Layers, Sliders, RefreshCw, Calculator, MessageSquare } from 'lucide-react';
import { AI_PILLARS, REVENUE_ESTIMATOR_TIERS } from '../data/siteContent';
import { calculateProjectEstimate } from '../utils/estimator';
import { analyticsConversions } from '../utils/analytics';

interface AIStudioViewProps {
  onOpenCaseStudy: (id: string) => void;
  onOpenContactWithBrief?: (brief: string) => void;
}

const AI_GALLERY_VIDEOS = [
  {
    id: 'klomp-trail',
    title: 'KLOMP Trail Running Footwear',
    pillar: '02. AI Adverts',
    videoSrc: '/public/assets/aistudio/advert_run_36d8a2ee.mp4',
    highlight: 'Split-screen dual terrain, wet clay particle fluid dynamics, locked athlete mesh.',
  },
  {
    id: 'soundpeats-smartcase',
    title: 'SoundPeats Smart Screen Ambassador',
    pillar: '01. AI Ambassadors',
    videoSrc: '/public/assets/aistudio/advert_infuencer_74ea5a90.mp4',
    highlight: 'Photorealistic virtual spokesperson with locked facial likeness & studio voiceover.',
  },
  {
    id: 'fizzbears-sour',
    title: 'FizzBears Crystalline Sour Explosion',
    pillar: '02. AI Adverts',
    videoSrc: '/public/assets/aistudio/advert_fizzbears_d04c9eb9.mp4',
    highlight: 'Kinetic sugar vortex dynamics, explosive color bursts & upbeat audio design.',
  },
  {
    id: 'carabe-parfum',
    title: 'Carabe Haute Parfumerie Crystal',
    pillar: '04. AI Products Development',
    videoSrc: '/public/assets/aistudio/advert_perfume_ed4752e3.mp4',
    highlight: 'Architectural glass refractions, laser-etched branding & precision specular lighting.',
  },
  {
    id: 'mistify-skincare',
    title: 'Mistify Oceanic Harmonic Waves',
    pillar: '04. AI Products Development',
    videoSrc: '/public/assets/aistudio/advert_water_b1d99afb.mp4',
    highlight: 'Kinetic fluted surface deformation, mist audio design & luxury cosmetic branding.',
  },
  {
    id: 'actioncam-4k',
    title: 'ActionCam Extreme 4K Basalt Rock',
    pillar: '04. AI Products Development',
    videoSrc: '/public/assets/aistudio/advert_camera_840940ec.mp4',
    highlight: '360 geomorphic rock suspension, anamorphic lens flares & rugged impact aesthetics.',
  },
];

const PIPELINE_STEPS = [
  {
    step: '01',
    name: 'Corporate Identity Ingestion',
    desc: 'We ingest your vector brand marks, exact hex/Pantone palettes, typography hierarchy, and corporate identity rules into our neural prompt engine.',
  },
  {
    step: '02',
    name: 'In-House Psychological Scripting',
    desc: 'Scripts are drafted by human copywriters and art directors with proven 26-year conversion psychology, timing hooks, and clear CTA architecture.',
  },
  {
    step: '03',
    name: 'Talent & Product Weight Locking',
    desc: 'We train custom LoRA weights and facial embeddings to guarantee the same model face, consistent product geometry, and zero hallucinations across scenes.',
  },
  {
    step: '04',
    name: 'Neural Cinema Staging & Kinematics',
    desc: 'Multi-pass rendering with controlled camera velocity, depth of field, anamorphic lenses, and realistic fluid/particle mechanics in 4K resolution.',
  },
  {
    step: '05',
    name: 'Bespoke Music & Studio Voiceover',
    desc: 'Each spot receives an original audio score, custom Foley sound effects, and studio-grade voiceover with authentic cadence and regional nuance.',
  },
  {
    step: '06',
    name: '26-Year Art Direction Signoff',
    desc: 'Garth Jones personally inspects every frame against corporate guidelines before client presentation. Zero AI slop ever leaves our studio.',
  },
];

export const AIStudioView: React.FC<AIStudioViewProps> = ({ onOpenCaseStudy, onOpenContactWithBrief }) => {
  // Estimator interactive state
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>(['single_commercial']);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isAgency, setIsAgency] = useState<boolean>(true);
  const [isExpress, setIsExpress] = useState<boolean>(false);

  const estimate = calculateProjectEstimate({
    aiDeliverables: selectedDeliverables,
    serviceAddons: selectedServices,
    agencyPartnerDiscount: isAgency,
    expressTurnaround: isExpress,
  });

  const toggleDeliverable = (id: string) => {
    if (selectedDeliverables.includes(id)) {
      if (selectedDeliverables.length > 1) {
        setSelectedDeliverables(selectedDeliverables.filter((x) => x !== id));
      }
    } else {
      setSelectedDeliverables([...selectedDeliverables, id]);
    }
  };

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((x) => x !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleLaunchInquiry = () => {
    analyticsConversions.trackScopeCalculatorUse(selectedDeliverables.length, estimate.total);
    const brief = `AI Studio Project Scope: ${selectedDeliverables.length} Deliverable(s), Total Estimate: $${estimate.total}, Delivery Window: ${estimate.estimatedDeliveryDays} Days (Agency Discount: ${isAgency ? 'Yes' : 'No'}, Express: ${isExpress ? 'Yes' : 'No'})`;
    if (onOpenContactWithBrief) {
      onOpenContactWithBrief(brief);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#08090D] min-h-screen">
      {/* Top Banner / Hero */}
      <section className="relative py-16 lg:py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00F0FF]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#FF2E93]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase mb-4">
            <Cpu className="w-4 h-4" />
            <span>Harare &amp; Bulawayo · Zimbabwe's First Hybrid Traditional + AI Studio</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] max-w-4xl [text-wrap:balance] mb-6">
            AI-FIRST MARKETING.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#70E000] to-[#FFB800]">
              100% BRAND-LOCKED FOR ZIMBABWE.
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            Empowering Harare corporate boardrooms and Bulawayo industrial leaders with 26-year creative art direction, custom neural models, bespoke music, and regional voiceovers. Zero generic AI slop.
          </h2>

          {/* 4 Pillars Summary Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
              <span className="text-xs font-mono text-[#00F0FF] block mb-1">Pillar 01</span>
              <p className="font-bold text-white text-sm">AI Ambassadors</p>
              <p className="text-xs text-slate-400 mt-1">Locked facial talent & voice</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
              <span className="text-xs font-mono text-[#FFB800] block mb-1">Pillar 02</span>
              <p className="font-bold text-white text-sm">AI Adverts</p>
              <p className="text-xs text-slate-400 mt-1">Cinema-grade commercials</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
              <span className="text-xs font-mono text-[#FF2E93] block mb-1">Pillar 03</span>
              <p className="font-bold text-white text-sm">AI Short Stories</p>
              <p className="text-xs text-slate-400 mt-1">Episodic branded series</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
              <span className="text-xs font-mono text-emerald-400 block mb-1">Pillar 04</span>
              <p className="font-bold text-white text-sm">AI Products Dev</p>
              <p className="text-xs text-slate-400 mt-1">Virtual 3D product staging</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core AI Pillars in Detail */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] mb-2">Next-Gen Deliverables</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Zimbabwe's 4 Pillars of Brand-Locked Production (Harare &amp; Bulawayo)
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Every deliverable strictly adheres to your Corporate Identity Manual with original human art direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AI_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-2xl bg-[#0F1118] border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-500 font-bold tracking-widest">
                  PILLAR {pillar.id}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20">
                  {pillar.badge}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-4">{pillar.subtitle}</p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {pillar.description}
              </p>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">Key Capabilities</p>
                <ul className="space-y-2">
                  {pillar.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Reel Showcase Grid */}
      <section className="py-20 bg-[#0A0C13] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFB800] block mb-2 font-bold">
              Production Portfolio · Harare &amp; Bulawayo
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight [text-wrap:balance]">
              Commercials Powered by Advanced Neural Networks for Zimbabwean Brands
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Inspect cinema-grade adverts engineered for national broadcast in Harare, Bulawayo, regional TV, and social platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_GALLERY_VIDEOS.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#0F1118] border border-white/10 hover:border-[#00F0FF]/40 overflow-hidden transition-all duration-300 flex flex-col shadow-lg shadow-black/40"
              >
                {/* Video Container */}
                <div className="relative aspect-[16/10] bg-black overflow-hidden">
                  <video
                    src={item.videoSrc}
                    playsInline
                    loop
                    muted
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute top-3 left-3 text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white border border-white/10">
                    {item.pillar}
                  </span>

                  <button
                    onClick={() => onOpenCaseStudy(item.id)}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-[#00F0FF] text-black shadow-lg opacity-90 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
                    aria-label={`View case study for ${item.title}`}
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-1.5 group-hover:text-[#00F0FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {item.highlight}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(item.id)}
                    className="text-xs font-semibold text-[#00F0FF] hover:text-[#3bf4ff] flex items-center gap-1 cursor-pointer pt-2 border-t border-white/5"
                  >
                    <span>Inspect Case Study & Metrics</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 6-Step Brand-Locked Neural Pipeline */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold block mb-2">
            The Neural Design Workflow
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight [text-wrap:balance]">
            How Machine Learning Integrates with 26 Years of Art Direction in Zimbabwe
          </h2>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            We treat AI models not as automated spam, but as hyper-accelerated digital soundstages governed by rigorous brand guidelines for Harare, Bulawayo, and regional Zimbabwean enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PIPELINE_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all relative flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-black text-[#00F0FF]/40 mb-3 block">
                  {step.step}
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {step.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison: Generic AI Slop vs SONOS Brand-Locked */}
      <section className="py-20 bg-[#0A0C13] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block mb-2">
              The Critical Difference
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Generic AI Slop vs. SONOS Brand-Locked Production
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono">
                  <th className="py-4 px-4 font-semibold uppercase">Production Dimension</th>
                  <th className="py-4 px-4 font-semibold uppercase text-red-400">Generic AI Generators</th>
                  <th className="py-4 px-4 font-semibold uppercase text-[#00F0FF]">SONOS Brand-Locked Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Talent & Characters</td>
                  <td className="py-4 px-4 text-red-300/80">Random distorted faces that change every scene</td>
                  <td className="py-4 px-4 text-white font-medium">100% locked facial likeness across campaigns</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Brand Colors & Typography</td>
                  <td className="py-4 px-4 text-red-300/80">Generic purples, hallucinated gibberish text</td>
                  <td className="py-4 px-4 text-white font-medium">Exact Pantone/Hex match & vector logo integration</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Script & Narrative</td>
                  <td className="py-4 px-4 text-red-300/80">Robotic chatbot cliches with no commercial hook</td>
                  <td className="py-4 px-4 text-white font-medium">Human psychological progression engineered for ROI</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Audio & Voiceover</td>
                  <td className="py-4 px-4 text-red-300/80">Flat synthetic voices & royalty-free elevator music</td>
                  <td className="py-4 px-4 text-white font-medium">Bespoke orchestral scores, Foley & studio voice actors</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Quality Assurance</td>
                  <td className="py-4 px-4 text-red-300/80">None; delivered directly by automated software</td>
                  <td className="py-4 px-4 text-[#00F0FF] font-semibold">26-year veteran creative director signoff</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive AI Production Estimator */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0F1118] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-2 text-xs font-mono uppercase text-[#00F0FF] font-bold">
            <Calculator className="w-4 h-4" />
            <span>Interactive Project Scope Estimator</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-3">
            Estimate Your AI Commercial or Campaign Package
          </h2>
          <p className="text-sm text-slate-400 mb-8 max-w-2xl">
            Configure your deliverables to view approximate commercial pricing, timeline, and agency partner discounts.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 cols: Selection */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <p className="text-xs font-mono uppercase text-slate-400 mb-3 font-semibold">
                  1. Select AI Deliverables
                </p>
                <div className="space-y-2">
                  {REVENUE_ESTIMATOR_TIERS.aiTiers.map((tier) => {
                    const isChecked = selectedDeliverables.includes(tier.id);
                    return (
                      <button
                        key={tier.id}
                        onClick={() => toggleDeliverable(tier.id)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                          isChecked
                            ? 'bg-[#00F0FF]/10 border-[#00F0FF] text-white'
                            : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isChecked ? 'bg-[#00F0FF] border-[#00F0FF]' : 'border-slate-600'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 text-black stroke-[3]" />}
                          </div>
                          <div>
                            <span className="text-xs font-bold block">{tier.name}</span>
                            <span className="text-[11px] text-slate-400 font-mono">Turnaround: {tier.time}</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#00F0FF] tabular-nums">
                          ${tier.basePrice}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-xs font-mono uppercase text-slate-400 mb-3 font-semibold">
                  2. Full-Service Addons (Optional)
                </p>
                <div className="space-y-2">
                  {REVENUE_ESTIMATOR_TIERS.servicesTiers.map((tier) => {
                    const isChecked = selectedServices.includes(tier.id);
                    return (
                      <button
                        key={tier.id}
                        onClick={() => toggleService(tier.id)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                          isChecked
                            ? 'bg-[#FFB800]/10 border-[#FFB800] text-white'
                            : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isChecked ? 'bg-[#FFB800] border-[#FFB800]' : 'border-slate-600'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 text-black stroke-[3]" />}
                          </div>
                          <div>
                            <span className="text-xs font-bold block">{tier.name}</span>
                            <span className="text-[11px] text-slate-400 font-mono">Scope: {tier.time}</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#FFB800] tabular-nums">
                          ${tier.basePrice}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Toggles */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={isAgency}
                    onChange={(e) => setIsAgency(e.target.checked)}
                    className="rounded border-slate-700 text-[#00F0FF] focus:ring-0"
                  />
                  <span>Design Agency Partner Rate (15% Discount)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={isExpress}
                    onChange={(e) => setIsExpress(e.target.checked)}
                    className="rounded border-slate-700 text-[#00F0FF] focus:ring-0"
                  />
                  <span>Express Turnaround (48-72h Delivery)</span>
                </label>
              </div>
            </div>

            {/* Right 5 cols: Summary Card */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-black/60 border border-white/10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono uppercase text-slate-400 mb-4 font-semibold pb-2 border-b border-white/10">
                  Estimated Commercial Investment
                </p>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Base Deliverables ({estimate.itemCount})</span>
                    <span className="font-mono text-slate-200 tabular-nums">${estimate.subtotal}</span>
                  </div>

                  {estimate.discount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Agency Discount (15%)</span>
                      <span className="font-mono tabular-nums">-${estimate.discount}</span>
                    </div>
                  )}

                  {estimate.expressSurcharge > 0 && (
                    <div className="flex justify-between text-[#FFB800]">
                      <span>Express 48h Production</span>
                      <span className="font-mono tabular-nums">+${estimate.expressSurcharge}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-400">
                    <span>Target Turnaround</span>
                    <span className="font-mono text-slate-200">~{estimate.estimatedDeliveryDays} Days</span>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-white">Estimated Total</span>
                    <span className="font-display font-black text-3xl text-[#00F0FF] tabular-nums">
                      ${estimate.total}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={handleLaunchInquiry}
                  className="w-full py-3 rounded-lg text-xs font-bold text-black bg-[#00F0FF] hover:bg-[#3bf4ff] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#00F0FF]/20"
                >
                  <span>Submit Scope for Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/263790414827?text=${encodeURIComponent(`Hi Garth, I calculated a project scope on your website: ${estimate.itemCount} item(s) for ~$${estimate.total}. Let's discuss!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Scope to Garth</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
