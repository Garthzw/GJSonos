import React, { useState } from 'react';
import { X, Check, ArrowRight, MessageSquare, ExternalLink, Play, Layers } from 'lucide-react';
import { PortfolioItem } from '../data/siteContent';

interface CaseStudyModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenContactWithBrief: (brief: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ item, onClose, onOpenContactWithBrief }) => {
  if (!item) return null;

  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);

  const handleLaunchInquiry = () => {
    onOpenContactWithBrief(`Inquiry regarding case study: ${item.title} (${item.client})`);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl bg-[#0F1118] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0C13]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#00F0FF] uppercase tracking-wider">
              {item.sector}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-xs font-mono text-slate-400">{item.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Case Study Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
          {/* Main Visual Display */}
          <div className="rounded-2xl overflow-hidden bg-black border border-white/10 relative">
            {item.videoSrc ? (
              <div className="aspect-[16/9] w-full">
                <video
                  src={item.videoSrc}
                  controls
                  playsInline
                  autoPlay
                  className="w-full h-full object-contain bg-black"
                />
              </div>
            ) : item.imageSrc ? (
              <div className="aspect-[16/9] w-full relative">
                <img
                  src={item.galleryImages && item.galleryImages.length > 0 ? item.galleryImages[selectedGalleryIdx] : item.imageSrc}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain bg-[#08090D]"
                />
              </div>
            ) : null}
          </div>

          {/* Image thumbnails if multi-gallery */}
          {item.galleryImages && item.galleryImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {item.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGalleryIdx(idx)}
                  className={`w-28 h-18 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                    selectedGalleryIdx === idx
                      ? 'border-[#00F0FF] ring-2 ring-[#00F0FF]/30 scale-105'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Case Study Header */}
          <div>
            <span className="text-xs font-mono text-[#00F0FF] uppercase font-bold tracking-widest block mb-1">
              Client: {item.client}
            </span>
            <h2 id="case-study-title" className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-3">
              {item.title}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-medium">
              {item.tagline}
            </p>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {item.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="font-display font-black text-2xl text-[#00F0FF] block mb-1 tabular-nums">
                  {m.value}
                </span>
                <span className="text-xs text-slate-400 font-medium">{m.label}</span>
              </div>
            ))}
          </div>

          {/* 2-Column: Background & Psychological Strategy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#0A0C13] border border-white/5">
              <h3 className="font-display font-bold text-lg text-white mb-3">The Brief & Commercial Context</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0C13] border border-[#00F0FF]/20">
              <h3 className="font-display font-bold text-lg text-[#00F0FF] mb-3">Psychological Strategy & Conversion Hook</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.psychologicalStrategy}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="p-6 rounded-2xl bg-[#0A0C13] border border-white/5">
            <h3 className="font-display font-bold text-lg text-white mb-4">Delivered Production Assets</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {item.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-white/10 bg-[#0A0C13]">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Want similar authority & ROI for your brand?
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/263790414827?text=${encodeURIComponent(`Hi Garth, I'm interested in work similar to: ${item.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center gap-2 transition-colors flex-1 sm:flex-initial"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Garth</span>
            </a>

            <button
              onClick={handleLaunchInquiry}
              className="py-2.5 px-5 rounded-xl text-xs font-bold text-black bg-[#00F0FF] hover:bg-[#3bf4ff] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#00F0FF]/20 flex-1 sm:flex-initial"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
