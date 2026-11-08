import React from 'react';
import { Award, Briefcase, MapPin, Phone, Mail, MessageSquare, CheckCircle, Shield, Globe2 } from 'lucide-react';

export const AboutGarth: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  const zimbabweSectors = [
    {
      name: 'Agriculture & Agro-Industrial',
      hub: 'Mashonaland & Manicaland Corridors',
      detail: 'Strategic campaigns for tractor dealerships, fertilizer giants, and seasonal crop inputs (e.g. John Deere, AFGRI Equipment Zimbabwe).',
    },
    {
      name: 'Freight, Logistics & Road Haulage',
      hub: 'Harare–Beitbridge & Beira Corridors',
      detail: '24-hour fleet livery transformations and cross-border commercial visibility across Southern Africa (e.g. Swift Transport, Unifreight Africa).',
    },
    {
      name: 'Mining & Heavy Machinery',
      hub: 'Midlands & Great Dyke Belts',
      detail: 'Industrial telehandler and crane staging for gold, platinum, and lithium extraction tenders (e.g. Crane 4 Hire Zimbabwe).',
    },
    {
      name: 'FMCG, Retail & Confectionery',
      hub: 'National 10-Province Distribution',
      detail: 'Dynamic consumer goods packaging, high-energy BTL activations, and cinema-grade AI commercials tailored for Zimbabwean shopper psychology.',
    },
    {
      name: 'Financial Services & Asset Banking',
      hub: 'Harare CBD & Borrowdale Corporate Hubs',
      detail: 'Corporate identity manuals, high-security UI/UX web portals, and ERP stakeholder audits for Zimbabwean institutional brands.',
    },
    {
      name: 'Hospitality & Luxury Lifestyle',
      hub: 'Victoria Falls & Regional Tourism',
      detail: 'Sophisticated visual storytelling, high-end fragrance staging, and global traveler acquisition campaigns.',
    },
  ];

  return (
    <section className="py-24 bg-[#0A0C13] border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#FFB800]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Garth Portrait Photography & Credential Card */}
          <div className="lg:col-span-5">
            <div className="p-4 sm:p-6 rounded-3xl bg-[#0F1118] border border-white/10 shadow-2xl relative overflow-hidden group">
              {/* Actual Portrait Photo */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl mb-6">
                <img
                  src="/public/assets/aistudio/gj_f9135d84.png"
                  alt="Garth Jones — Principal Consultant & Creative Director, SONOS Zimbabwe"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />

                {/* Subtle scrim and badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/75 backdrop-blur-md text-[#00F0FF] border border-[#00F0FF]/30">
                    26 Years Creative Direction
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display font-black text-2xl text-white">Garth Jones</h3>
                  <p className="text-xs font-mono text-[#00F0FF] font-semibold">
                    Principal Consultant & Creative Art Director
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FFB800]" />
                    <span>Harare, Zimbabwe (Serving All 10 Provinces & Southern Africa)</span>
                  </div>
                </div>
              </div>

              {/* Personal quote */}
              <blockquote className="text-xs text-slate-300 italic leading-relaxed mb-6 px-2 border-l-2 border-[#00F0FF]">
                "Zimbabwean brands cannot afford generic, reactive marketing. Every campaign we build is rooted in local consumer psychology, rigorous corporate identity, and commercial ROI."
              </blockquote>

              {/* Direct channels */}
              <div className="space-y-2 text-xs">
                <a
                  href="https://wa.me/263790414827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 font-semibold transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp: +263 790 414 827</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-emerald-500/20 px-2 py-0.5 rounded">Principal Direct</span>
                </a>

                <a
                  href="mailto:garth@sonos.co.zw"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/5 text-slate-300 font-semibold transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00F0FF]" />
                    <span>Email: garth@sonos.co.zw</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Harare HQ</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 26 Years of Authority & Zimbabwe Focus */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFB800] font-bold">
              <Award className="w-4 h-4" />
              <span>Harare &amp; Bulawayo Service Hubs · 26 Years of Authority Across Zimbabwe</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight [text-wrap:balance]">
              MEET GARTH:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#00F0FF] to-[#3B82F6]">
                26 YEARS OF AUTHORITY IN HARARE, BULAWAYO &amp; NATIONWIDE.
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Bridging senior creative visual direction with hard-line commercial revenue. With over two decades of hands-on leadership directing brand architecture, multi-channel national campaigns, television commercials, and ground-level roadshows across Harare, Bulawayo, Mutare, and the Southern African region, Garth provides rare sole-custody protection for Zimbabwe's top tier organizations.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              From repositioning national transport giants like <strong className="text-white">Swift Transport & Unifreight</strong> to architecting 12-month agricultural campaigns for <strong className="text-white">John Deere / AFGRI</strong>, Garth ensures your brand dominates search results, social feeds, highway billboards, and point-of-sale displays.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-xl text-xs font-bold text-black bg-[#00F0FF] hover:bg-[#3bf4ff] transition-all cursor-pointer shadow-lg shadow-[#00F0FF]/20"
              >
                Discuss a Project with Garth
              </button>

              <a
                href="https://wa.me/263790414827"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Zimbabwe Nationwide Market Dominance Grid */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold mb-1">
                <Globe2 className="w-4 h-4" />
                <span>Zimbabwe Market Expertise: Harare &amp; Bulawayo Service Hubs</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                Deep Footprint Across Harare Corporate &amp; Bulawayo Industrial Engines
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Targeted marketing and AI content engineered for Zimbabwean business leaders, commercial farmers, mine operators, and FMCG distributors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zimbabweSectors.map((sector, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F1118] border border-white/5 hover:border-[#00F0FF]/30 transition-all group"
              >
                <p className="text-[11px] font-mono text-[#00F0FF] font-bold uppercase mb-1">{sector.hub}</p>
                <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {sector.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sector.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
