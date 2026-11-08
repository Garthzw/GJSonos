import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, Send, CheckCircle2, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { analyticsConversions } from '../utils/analytics';

interface ContactSectionProps {
  initialBrief?: string;
  onSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialBrief, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: 'Business Marketer',
    serviceInterest: 'AI Commercials & Brand-Locked Video',
    budget: '$2,500 – $5,000',
    message: initialBrief || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialBrief) {
      setFormData((prev) => ({ ...prev, message: initialBrief }));
    }
  }, [initialBrief]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid business email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone or WhatsApp number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief outline of your goals or project.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Track strategic inquiry RFP submission in Google Analytics
    analyticsConversions.trackStrategicInquirySubmitted(
      formData.role,
      formData.serviceInterest,
      formData.budget
    );

    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const generateWhatsAppUrl = () => {
    const text = `Hi Garth, I would like to discuss a project for ${formData.company || 'my organization'}.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRole: ${formData.role}\nInterest: ${formData.serviceInterest}\nBudget: ${formData.budget}\nDetails: ${formData.message}`;
    return `https://wa.me/263790414827?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact-section" className="py-24 bg-[#08090D] border-t border-white/5 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF2E93]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold block mb-3">
                Primary Service Hubs: Harare &amp; Bulawayo · All 10 Zimbabwe Provinces
              </span>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight [text-wrap:balance] mb-6">
                LET'S MAKE{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#3B82F6]">
                  SOME NOISE IN HARARE &amp; BULAWAYO.
                </span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed mb-8">
                Ready to transition your organization from a reactive panic state to a responsive commercial leader in Harare, Bulawayo, or nationwide across Zimbabwe? Schedule a strategic discovery call directly with Garth Jones.
              </p>

              {/* Direct Details Cards */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/263790414827"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analyticsConversions.trackWhatsAppClick('contact_direct_card')}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/25 transition-all text-slate-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                      Direct WhatsApp & Mobile
                    </span>
                    <span className="font-display font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
                      +263 790 414 827
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:garth@sonos.co.zw"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0F1118] hover:bg-slate-900 border border-white/10 transition-all text-slate-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00F0FF] font-bold block">
                      Principal Direct Email
                    </span>
                    <span className="font-display font-bold text-base text-white group-hover:text-[#00F0FF] transition-colors">
                      garth@sonos.co.zw
                    </span>
                  </div>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-[#0F1118] border border-white/10 text-slate-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <MapPin className="w-4 h-4 text-[#00F0FF]" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#00F0FF] font-bold">
                        Harare Headquarters
                      </span>
                    </div>
                    <p className="font-display font-bold text-xs text-white">Harare Corporate Hub</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Corporate boardrooms, financial services & agency direction</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0F1118] border border-white/10 text-slate-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <MapPin className="w-4 h-4 text-[#FFB800]" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFB800] font-bold">
                        Bulawayo Service Hub
                      </span>
                    </div>
                    <p className="font-display font-bold text-xs text-white">Bulawayo Industrial Hub</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Belmont & Steeldale corridors, manufacturing & logistics</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0A0C13] border border-white/5 text-xs text-slate-400 space-y-1">
                  <p className="font-semibold text-slate-300">Zimbabwe & Regional Settlement Options:</p>
                  <p>Flexible invoice settlement in USD, local currency (ZiG), and regional Nostro/wire facilities across all 10 provinces.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 mt-8">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
                <span>Strict 48-Hour SLA Response Time Guaranteed Across Zimbabwe</span>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Inquiry / RFP Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0F1118] border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-white">
                    Inquiry Received, {formData.name}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                    Garth Jones will review your brief against our current production calendar and respond within 24 to 48 hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward Brief via WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white mb-1">
                      Strategic Discovery & RFP Submission
                    </h3>
                    <p className="text-xs text-slate-400">
                      Tailored for Corporate Business Marketers and Design Agency Directors.
                    </p>
                  </div>

                  {/* 2-Column Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Dube"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-[#00F0FF]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                        Company or Agency Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Delta Corp / Agency Lead"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 focus:border-[#00F0FF] text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.co.zw"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-[#00F0FF]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+263 7..."
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-[#00F0FF]'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                        I am a...
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-[#00F0FF]"
                      >
                        <option value="Business Marketer">Business Marketer</option>
                        <option value="Design Agency Director">Design Agency Director</option>
                        <option value="Enterprise Executive">Enterprise Executive</option>
                        <option value="Founder / Brand Owner">Founder / Brand Owner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                        Primary Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-[#00F0FF]"
                      >
                        <option value="AI Commercials & Brand-Locked Video">AI Commercials & Video</option>
                        <option value="AI Ambassadors & Virtual Spokespeople">AI Ambassadors</option>
                        <option value="Sole Brand Custodian SLA Retainer">Sole Brand Custodian SLA</option>
                        <option value="Brand Architecture & Visual Guidelines">Brand Architecture</option>
                        <option value="Ground-Level BTL & Roadshows">Ground-Level BTL & Roadshows</option>
                        <option value="Web, UI/UX & SEO Dominance">Web, UI/UX & SEO Dominance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-[#00F0FF]"
                      >
                        <option value="Under $2,500">Under $2,500</option>
                        <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                        <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                        <option value="$10,000+ Enterprise">$10,000+ Enterprise</option>
                        <option value="Monthly Retainer Agreement">Monthly Retainer Agreement</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1.5">
                      Project Context & Immediate Goals *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your timeline, current brand challenges, target audience, or specific deliverables needed..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-[#00F0FF]'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold text-black bg-[#00F0FF] hover:bg-[#3bf4ff] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#00F0FF]/25"
                    >
                      <span>Submit Strategic Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href="https://wa.me/263790414827"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Prefer WhatsApp? Chat directly</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
