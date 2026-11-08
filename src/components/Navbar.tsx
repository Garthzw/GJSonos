import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'ai-studio', label: 'AI Studio' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Capabilities' },
    { id: 'about', label: 'About us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090D]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50 py-3'
          : 'bg-[#08090D]/60 backdrop-blur-sm border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] rounded-lg py-1 px-1"
            aria-label="SONOS Consultancy Zimbabwe Home"
          >
            <img
              src="/public/assets/aistudio/Sonos_logo_white__4__21a44cfe.png"
              alt="SONOS Consultancy"
              referrerPolicy="no-referrer"
              className="h-8 md:h-9 w-auto object-contain group-hover:brightness-110 transition-all duration-200"
            />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#00F0FF] font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Direct Contact */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/263790414827"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors py-2 px-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 whitespace-nowrap shrink-0"
              title="Chat directly on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Garth</span>
            </a>

            <button
              onClick={onOpenContact}
              className="relative group overflow-hidden px-4 py-2 rounded-lg text-xs font-bold text-black bg-[#00F0FF] hover:bg-[#38f4ff] transition-all duration-200 shadow-lg shadow-[#00F0FF]/25 hover:shadow-[#00F0FF]/40 whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/263790414827"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg"
              aria-label="Direct WhatsApp message"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00F0FF] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00F0FF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0A0C13]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between text-left px-4 py-3 rounded-lg text-base font-bold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00F0FF]/15 to-transparent text-[#00F0FF] border-l-2 border-[#00F0FF]'
                      : 'text-slate-200 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:+263790414827"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-300 hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#00F0FF]" />
                <span>+263 790 414 827</span>
              </a>

              <a
                href="https://wa.me/263790414827"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-black transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold bg-[#00F0FF] hover:bg-[#3bf4ff] text-black transition-colors shadow-lg shadow-[#00F0FF]/20"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
