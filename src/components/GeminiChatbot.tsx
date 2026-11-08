import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Sparkles, Send, X, Bot, User, Trash2, ArrowRight, Minimize2, Maximize2, ShieldCheck, RefreshCw } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

const STARTER_PROMPTS = [
  {
    label: 'Harare Enterprise Strategy',
    prompt: 'How can a corporate enterprise in Harare transition from reactive panic marketing to a responsive commercial mindset that captures market share?',
  },
  {
    label: 'AI Commercials vs Traditional Shoot',
    prompt: 'What are the specific cost, timeline, and ROI advantages of SONOS brand-locked AI commercials compared to traditional physical video shoots in Zimbabwe?',
  },
  {
    label: 'Sole Brand Custodian SLA',
    prompt: 'How does the Sole Official Brand Custodian SLA work for companies operating across both Harare and Bulawayo?',
  },
  {
    label: 'Bulawayo Industrial Marketing',
    prompt: 'How can heavy industry, logistics, and manufacturing firms in Bulawayo leverage 3D staging and targeted B2B digital positioning?',
  },
];

const AVAILABLE_MODELS = [
  {
    id: 'gemini-3.8-flash',
    name: 'Gemini 3.8 Flash',
    desc: 'General Tasks & Strategy (Recommended)',
  },
  {
    id: 'gemini-3.1-flash-lite',
    name: 'Gemini 3.1 Flash Lite',
    desc: 'Fast Tasks & Rapid Answers',
  },
  {
    id: 'gemini-4-argon',
    name: 'Gemini 4 Argon',
    desc: 'Complex Reasoning & Campaign Architectures',
  },
];

export const GeminiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedModel, setSelectedModel] = useState('gemini-3.8-flash');
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Welcome to SONOS Consultancy Zimbabwe. I am your Brand AI Strategy Assistant, equipped with Garth Jones' 26-year creative art direction framework and regional market intelligence across Harare, Bulawayo, and all 10 provinces.\n\nAsk me anything about brand-locked AI video production, corporate brand custody, BTL roadshows, or positioning your business to lead in Zimbabwe.",
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Build conversation history for multi-turn chat
      const historyPayload = messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({ role: m.role, text: m.text }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
          model: selectedModel,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get a response from the strategy assistant.');
      }

      const botMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: data.reply || 'No response returned from the assistant.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'model',
        text: `⚠️ **Strategy Engine Notice**: ${err.message || 'Unable to connect to the Gemini service. Please verify server status.'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'model',
        text: "Strategy thread reset. How can I assist your marketing initiatives in Harare, Bulawayo, or across Zimbabwe today?",
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-24 sm:right-48 z-40 px-4 py-3 rounded-full bg-[#0F1118]/95 hover:bg-slate-900 text-white border border-[#00F0FF]/40 hover:border-[#00F0FF] shadow-2xl shadow-[#00F0FF]/20 hover:scale-105 transition-all duration-200 cursor-pointer flex items-center gap-2.5 backdrop-blur-md group"
          aria-label="Open SONOS Brand AI Strategy Assistant"
        >
          <div className="relative">
            <Sparkles className="w-4 h-4 text-[#00F0FF] animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00F0FF]" />
          </div>
          <span className="font-mono text-xs font-bold tracking-wide text-white group-hover:text-[#00F0FF] transition-colors">
            AI Strategy Assistant
          </span>
          <span className="hidden md:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#00F0FF]/15 text-[#00F0FF]">
            Harare · Bulawayo
          </span>
        </button>
      )}

      {/* Chat Window Modal / Drawer */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col bg-[#0A0C13] border border-white/15 shadow-2xl shadow-black/80 rounded-2xl overflow-hidden backdrop-blur-2xl ${
            isExpanded
              ? 'inset-4 md:inset-10'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[95vw] sm:w-[460px] h-[640px] max-h-[88vh]'
          }`}
        >
          {/* Header Bar */}
          <div className="p-4 bg-[#0F1118] border-b border-white/10 flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00F0FF]/20 to-[#3B82F6]/20 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-sm text-white">SONOS Brand AI Strategist</h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">Harare &amp; Bulawayo Market Knowledge Base</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleClearHistory}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:block p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                title={isExpanded ? 'Minimize window' : 'Expand window'}
                aria-label={isExpanded ? 'Minimize window' : 'Expand window'}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-[#00F0FF] rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                title="Close chat"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Model Selector Strip */}
          <div className="px-4 py-2 bg-[#08090D] border-b border-white/5 flex items-center justify-between text-xs">
            <span className="font-mono text-[11px] text-slate-400">Neural Engine:</span>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1 text-[11px] font-mono text-[#00F0FF] focus:outline-none focus:border-[#00F0FF] cursor-pointer"
            >
              {AVAILABLE_MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Message Thread Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs ${
                      isUser
                        ? 'bg-[#00F0FF] text-black font-bold'
                        : 'bg-slate-800 text-[#00F0FF] border border-white/10'
                    }`}
                  >
                    {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                      isUser
                        ? 'bg-[#00F0FF] text-black font-medium rounded-tr-none'
                        : 'bg-[#0F1118] text-slate-200 border border-white/10 rounded-tl-none whitespace-pre-line'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <div
                      className={`text-[9px] mt-1 font-mono ${
                        isUser ? 'text-black/60 text-right' : 'text-slate-500 text-left'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs bg-slate-800 text-[#00F0FF] border border-white/10">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-[#0F1118] rounded-2xl rounded-tl-none px-4 py-3 text-xs text-slate-400 border border-white/10 flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 text-[#00F0FF] animate-spin" />
                  <span>Synthesizing strategic marketing insights...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preset Prompts Strip */}
          {messages.length <= 3 && (
            <div className="p-3 bg-[#08090D] border-t border-white/5">
              <p className="text-[10px] font-mono uppercase text-slate-400 mb-2 font-semibold">
                Suggested Zimbabwean Strategic Prompts:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {STARTER_PROMPTS.map((starter, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(starter.prompt)}
                    disabled={isLoading}
                    className="text-left p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/5 hover:border-[#00F0FF]/30 text-slate-300 hover:text-white transition-all text-[11px] cursor-pointer truncate"
                  >
                    <span className="font-semibold text-[#00F0FF] block truncate">{starter.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <div className="p-3 bg-[#0F1118] border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about brand strategy in Harare, Bulawayo..."
                disabled={isLoading}
                className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="p-2.5 rounded-xl bg-[#00F0FF] hover:bg-[#3bf4ff] text-black font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0"
                aria-label="Send message to assistant"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Zero AI Hallucinations · Garth Jones Framework</span>
              </span>
              <span>WhatsApp: +263 790 414 827</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
