import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { AIStudioView } from './components/AIStudioView';
import { PortfolioView } from './components/PortfolioView';
import { ServicesSection } from './components/ServicesSection';
import { AboutGarth } from './components/AboutGarth';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { GeminiChatbot } from './components/GeminiChatbot';
import { PORTFOLIO_ITEMS, PortfolioItem } from './data/siteContent';
import { MessageSquare, ArrowUp, ArrowRight, Play, Eye, Sparkles } from 'lucide-react';
import { initGoogleAnalytics, trackPageView, analyticsConversions } from './utils/analytics';

export default function App() {
  const [activeView, setActiveView] = useState<string>('home');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [contactBrief, setContactBrief] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Initialize Google Analytics on mount
  useEffect(() => {
    initGoogleAnalytics();
  }, []);

  // Track SPA virtual page views on navigation tab changes
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: 'SONOS Zimbabwe | Harare & Bulawayo Marketing & AI Agency',
      'ai-studio': 'AI Studio Zimbabwe | Brand-Locked AI Commercials & Ambassadors | SONOS',
      portfolio: 'Portfolio & Case Studies | Commercial Campaigns Across Zimbabwe | SONOS',
      services: 'Full-Service Capabilities & Brand Retainers | SONOS Zimbabwe',
      about: 'About Garth Jones | 26 Years Commercial Creative Direction | SONOS Zimbabwe',
      contact: 'Strategic Discovery & RFP Submission | Harare & Bulawayo | SONOS Zimbabwe',
    };

    const path = activeView === 'home' ? '/' : `/${activeView}`;
    const title = pageTitles[activeView] || `SONOS Zimbabwe | ${activeView}`;
    trackPageView(path, title);
  }, [activeView]);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleOpenCaseStudy = (id: string) => {
    setActiveCaseStudyId(id);
    const item = PORTFOLIO_ITEMS.find((p) => p.id === id);
    analyticsConversions.trackCaseStudyInspection(id, item ? item.client : id);
  };

  const handleCloseCaseStudy = () => {
    setActiveCaseStudyId(null);
  };

  const handleOpenContactWithBrief = (brief: string) => {
    setContactBrief(brief);
    setActiveView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    setActiveView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedCaseStudy = PORTFOLIO_ITEMS.find((item) => item.id === activeCaseStudyId) || null;

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 flex flex-col font-sans selection:bg-[#00F0FF] selection:text-black">
      {/* Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <div className="space-y-0">
            {/* 1. Homepage Banner & Hero with interactive cinema reel */}
            <HeroBanner
              onNavigate={setActiveView}
              onOpenContact={handleOpenContact}
            />

            {/* 2. Brand Meaning & Psychology: Latin sonus/sono, Reactive vs Responsive */}
            <BrandPhilosophy onOpenContact={handleOpenContact} />

            {/* 3. AI-First Feature Strip (Pillars preview) */}
            <section className="py-20 bg-[#08090D] border-t border-white/5 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold block mb-2">
                      Zimbabwe's First AI Studio
                    </span>
                    <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                      Brand-Locked AI Marketing Deliverables
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setActiveView('ai-studio');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-[#00F0FF] hover:bg-[#3bf4ff] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore Full AI Studio & Pipeline</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/10 hover:border-[#00F0FF]/30 transition-all">
                    <span className="text-xs font-mono text-[#00F0FF] block mb-2 font-bold">01. AI AMBASSADORS</span>
                    <h3 className="font-display font-bold text-lg text-white mb-2">Locked Virtual Talent</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Virtual brand spokespeople with persistent facial likeness, custom wardrobe, and studio voiceovers across entire multi-season campaigns.
                    </p>
                    <button
                      onClick={() => handleOpenCaseStudy('soundpeats-smartcase')}
                      className="text-xs font-semibold text-[#00F0FF] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inspect Ambassador Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/10 hover:border-[#FFB800]/30 transition-all">
                    <span className="text-xs font-mono text-[#FFB800] block mb-2 font-bold">02. AI ADVERTS</span>
                    <h3 className="font-display font-bold text-lg text-white mb-2">Cinema-Grade Spots</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Television and digital commercial spots integrating real client products, fluid/particle physics, and original musical scores.
                    </p>
                    <button
                      onClick={() => handleOpenCaseStudy('klomp-trail')}
                      className="text-xs font-semibold text-[#FFB800] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Watch KLOMP Commercial</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/10 hover:border-[#FF2E93]/30 transition-all">
                    <span className="text-xs font-mono text-[#FF2E93] block mb-2 font-bold">03. AI SHORT STORIES</span>
                    <h3 className="font-display font-bold text-lg text-white mb-2">Episodic Branded Series</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Branded entertainment narratives featuring recurring locked casts that build compounding audience engagement and loyalty.
                    </p>
                    <button
                      onClick={() => handleOpenCaseStudy('fizzbears-sour')}
                      className="text-xs font-semibold text-[#FF2E93] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Story Narrative</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/10 hover:border-emerald-400/30 transition-all">
                    <span className="text-xs font-mono text-emerald-400 block mb-2 font-bold">04. AI PRODUCTS DEV</span>
                    <h3 className="font-display font-bold text-lg text-white mb-2">Virtual 3D Staging</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Hyper-realistic packaging prototyping, pre-manufacturing visual testing, and customer journey AI Agent LLM development.
                    </p>
                    <button
                      onClick={() => handleOpenCaseStudy('carabe-parfum')}
                      className="text-xs font-semibold text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inspect 3D Glass Staging</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Featured Portfolio Showcase Preview */}
            <section className="py-20 bg-[#0A0C13] border-t border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FFB800] font-bold block mb-2">
                      Featured Case Studies
                    </span>
                    <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                      Recent Projects & Commercial Campaigns
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setActiveView('portfolio');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>View All 10 Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 3 Marquee Projects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Swift Transport */}
                  <div className="group rounded-2xl bg-[#0F1118] border border-white/10 hover:border-[#00F0FF]/40 overflow-hidden transition-all flex flex-col justify-between">
                    <div>
                      <div className="relative aspect-[16/10] bg-black overflow-hidden">
                        <video
                          src="/public/assets/aistudio/Swift-day_night_57763f9d.mp4"
                          playsInline
                          loop
                          muted
                          autoPlay
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute top-3 left-3 text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/70 text-[#00F0FF] border border-white/10">
                          Logistics & Fleet
                        </span>
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-mono text-[#00F0FF] uppercase font-bold mb-1">Swift Transport</p>
                        <h3 className="font-display font-bold text-lg text-white mb-2">
                          24-Hour Fleet Transformation & Day/Night Shoot
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          Complete visual architecture and commercial cinema staging for Zimbabwe's national logistics fleet.
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => handleOpenCaseStudy('swift-transport')}
                        className="w-full py-2.5 rounded-xl text-xs font-bold bg-white/5 hover:bg-[#00F0FF] text-white hover:text-black border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Inspect Fleet Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* John Deere */}
                  <div className="group rounded-2xl bg-[#0F1118] border border-white/10 hover:border-[#70E000]/40 overflow-hidden transition-all flex flex-col justify-between">
                    <div>
                      <div className="relative aspect-[16/10] bg-black overflow-hidden">
                        <img
                          src="/public/assets/aistudio/johndeere-plan_1345a090.png"
                          alt="John Deere Editorial Plan"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute top-3 left-3 text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/70 text-[#70E000] border border-white/10">
                          Heavy Agriculture
                        </span>
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-mono text-[#70E000] uppercase font-bold mb-1">John Deere / AFGRI</p>
                        <h3 className="font-display font-bold text-lg text-white mb-2">
                          12-Month Agro Content Plan & 3D Tractor Staging
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          365-day agricultural content matrix synchronizing pre-season tillage and harvesting with tractor specifications.
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => handleOpenCaseStudy('johndeere-afgri')}
                        className="w-full py-2.5 rounded-xl text-xs font-bold bg-white/5 hover:bg-[#70E000] text-white hover:text-black border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Inspect Ag Plan Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Crane 4 Hire */}
                  <div className="group rounded-2xl bg-[#0F1118] border border-white/10 hover:border-[#FFB800]/40 overflow-hidden transition-all flex flex-col justify-between">
                    <div>
                      <div className="relative aspect-[16/10] bg-black overflow-hidden">
                        <img
                          src="/public/assets/aistudio/crane4hire_5f8a2c57.png"
                          alt="Crane 4 Hire Staging"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute top-3 left-3 text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/70 text-[#FFB800] border border-white/10">
                          Mining & Heavy Lift
                        </span>
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-mono text-[#FFB800] uppercase font-bold mb-1">Crane 4 Hire</p>
                        <h3 className="font-display font-bold text-lg text-white mb-2">
                          Industrial Fleet Staging & Brand Elevation
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          Mining and construction visual staging for telehandlers and scissor lifts that secure tier-1 commercial tenders.
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => handleOpenCaseStudy('crane4hire')}
                        className="w-full py-2.5 rounded-xl text-xs font-bold bg-white/5 hover:bg-[#FFB800] text-white hover:text-black border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Inspect Industrial Staging</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Full-Service Capabilities & Custodian SLA */}
            <ServicesSection onOpenContact={handleOpenContact} />

            {/* 6. Meet Garth (26 Years of Authority) */}
            <AboutGarth onOpenContact={handleOpenContact} />

            {/* 7. Strategic RFP & Contact */}
            <ContactSection initialBrief={contactBrief} />
          </div>
        )}

        {activeView === 'ai-studio' && (
          <AIStudioView
            onOpenCaseStudy={handleOpenCaseStudy}
            onOpenContactWithBrief={handleOpenContactWithBrief}
          />
        )}

        {activeView === 'portfolio' && (
          <PortfolioView onOpenCaseStudy={handleOpenCaseStudy} />
        )}

        {activeView === 'services' && (
          <div className="pt-24 pb-12">
            <ServicesSection onOpenContact={handleOpenContact} />
            <ContactSection initialBrief="Inquiry regarding Services & Retainer SLA" />
          </div>
        )}

        {activeView === 'about' && (
          <div className="pt-24 pb-12">
            <AboutGarth onOpenContact={handleOpenContact} />
            <ContactSection initialBrief="Inquiry for Garth Jones" />
          </div>
        )}

        {activeView === 'contact' && (
          <div className="pt-24 pb-12">
            <ContactSection initialBrief={contactBrief} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenContact={handleOpenContact}
      />

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          item={selectedCaseStudy}
          onClose={handleCloseCaseStudy}
          onOpenContactWithBrief={handleOpenContactWithBrief}
        />
      )}

      {/* Floating Gemini AI Strategy Assistant */}
      <GeminiChatbot />

      {/* Floating Action Button: WhatsApp Garth */}
      <a
        href="https://wa.me/263790414827"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => analyticsConversions.trackWhatsAppClick('floating_button')}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all flex items-center gap-2 group cursor-pointer"
        aria-label="Direct WhatsApp Chat with Garth Jones"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-bold text-xs pr-1">WhatsApp Garth</span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 shadow-xl transition-all cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
