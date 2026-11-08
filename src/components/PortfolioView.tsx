import React, { useState } from 'react';
import { Search, Play, ArrowRight, Layers, ExternalLink, Image as ImageIcon, Eye } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/siteContent';
import { filterPortfolioItems } from '../utils/estimator';

interface PortfolioViewProps {
  onOpenCaseStudy: (id: string) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onOpenCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-video' | 'brand-staging' | 'industrial-ag'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = filterPortfolioItems(PORTFOLIO_ITEMS, activeFilter, searchQuery);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-video', label: 'AI Commercials & Video' },
    { id: 'brand-staging', label: 'Brand Architecture & Fleets' },
    { id: 'industrial-ag', label: 'Agriculture & Industrial' },
  ];

  return (
    <div className="pt-24 pb-24 bg-[#08090D] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase mb-3">
            <Layers className="w-4 h-4" />
            <span>Harare · Bulawayo · Commercial Case Studies Across Zimbabwe</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl [text-wrap:balance] mb-6">
            WORK THAT RESOUNDS.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#70E000] to-[#FFB800]">
              PROVEN IMPACT IN HARARE, BULAWAYO &amp; NATIONWIDE.
            </span>
          </h1>

          <h2 className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            From national fleet transformations across the Harare–Beitbridge corridor to 12-month agricultural matrices and cinema-grade AI commercials. Every project is engineered for commercial ROI across Zimbabwe.
          </h2>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-[60px] z-30 py-4 bg-[#08090D]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-white/10 w-full md:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#00F0FF] text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clients, sectors, keywords..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
            />
          </div>
        </div>
      </section>

      {/* Grid of Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {filteredItems.length === 0 ? (
          <div className="text-center py-24 bg-slate-900/30 rounded-2xl border border-white/5 p-8">
            <p className="text-base text-slate-300 font-semibold mb-2">No projects matched your criteria.</p>
            <p className="text-xs text-slate-500 mb-6">Try clearing the search query or selecting a different category tab.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg text-xs font-bold text-black bg-[#00F0FF] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#0F1118] border border-white/10 hover:border-[#00F0FF]/40 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/50"
              >
                {/* Media Preview Box */}
                <div>
                  <div className="relative aspect-[16/10] bg-black overflow-hidden">
                    {item.mediaType === 'video' || (item.mediaType === 'hybrid' && item.videoSrc) ? (
                      <video
                        src={item.videoSrc}
                        playsInline
                        loop
                        muted
                        autoPlay
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Sector pill badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-200 border border-white/10">
                      {item.mediaType === 'video' || item.mediaType === 'hybrid' ? (
                        <Play className="w-3 h-3 text-[#00F0FF] fill-current" />
                      ) : (
                        <ImageIcon className="w-3 h-3 text-[#FFB800]" />
                      )}
                      <span>{item.category}</span>
                    </div>

                    <button
                      onClick={() => onOpenCaseStudy(item.id)}
                      className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/10 hover:bg-[#00F0FF] text-white hover:text-black backdrop-blur-md border border-white/20 hover:border-transparent transition-all cursor-pointer shadow-lg"
                      title="Inspect case study & high-res assets"
                      aria-label={`Inspect case study for ${item.title}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#00F0FF] mb-1 font-semibold">
                      {item.client}
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug group-hover:text-[#00F0FF] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {item.tagline}
                    </p>

                    {/* Metrics strip */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/5 mb-4">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="font-mono text-xs font-bold text-white tabular-nums">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-slate-400 truncate">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenCaseStudy(item.id)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-white/5 hover:bg-[#00F0FF] text-white hover:text-black border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
