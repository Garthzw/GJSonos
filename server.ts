import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

function getGeminiClient(key: string) {
  return new GoogleGenAI({
    apiKey: key,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

interface ChatHistoryItem {
  role: 'user' | 'model';
  text: string;
}

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', hasApiKey: Boolean(process.env.GEMINI_API_KEY) });
});

// Server-side Gemini chat endpoint
app.post('/api/chat', async (req: Request, res: Response): Promise<void> => {
  console.log('[API] /api/chat received request:', req.body);
  try {
    const { message, history = [], model = 'gemini-3.8-flash' } = req.body || {};

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message text is required.' });
      return;
    }

    const currentApiKey = process.env.GEMINI_API_KEY || '';
    if (!currentApiKey) {
      // If no API key is set in secrets yet, provide a graceful strategic response based on Garth Jones' knowledge base
      const localFallback = `[SONOS Strategy Advisory · Zimbabwe]\n\nRegarding your inquiry: "${message}"\n\n1. Commercial Positioning in Harare & Bulawayo: Shift away from reactive panic marketing and sporadic social posts into structured psychological progression.\n2. Brand-Locked Production: Eliminate AI slop with 100% facial and CI manual locking.\n3. Sole Custodian SLA: 12 high-impact monthly assets, 48-hour SLA turnaround.\n\n*Note: To enable live unconstrained Gemini neural generation, configure GEMINI_API_KEY in the Secrets panel.*`;
      res.json({ reply: localFallback, model: 'sonos-local-strategy' });
      return;
    }

    // Allowed models mapping per skill
    const validModels = ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-4-argon'];
    const selectedModel = validModels.includes(model) ? model : 'gemini-3.8-flash';

    const systemInstruction = `You are the Executive AI Marketing & Campaign Strategist for SONOS Consultancy Zimbabwe (sonos.co.zw), founded and directed by Garth Jones (26 years of creative art direction and ground-level marketing authority).

Primary Service Hubs: Harare (Headquarters) and Bulawayo (Matabeleland & Industrial Hub), serving all 10 provinces of Zimbabwe and regional Southern Africa (Beira, Beitbridge, Lusaka transit corridors).

Your Brand Identity & Value Proposition:
- NO BS Marketing, Advertising, Activations, and Brand-Locked AI.
- Zimbabwe's premier hybrid of traditional marketing mastery and 100% brand-locked AI video production (Zero Generic AI Slop).
- Core Pillars:
  1. AI Ambassadors: Virtual brand spokespeople with 100% locked facial identity, custom wardrobe, and studio voiceovers.
  2. AI Adverts: Cinema-grade 4K commercials with accurate physics and real product placement.
  3. AI Short Stories: Episodic branded drama/comedy series with recurring talent casts.
  4. AI Products Development: 3D virtual packaging and pre-tooling concept validation.
- Sole Official Brand Custodian SLA: 12 custom mobile-optimized posts per month, 48-hour turnaround, 2 revision rounds, platform scheduling, and monthly analytics reporting.
- Local Zimbabwean market knowledge: Harare corporate headquarters, Borrowdale, Bulawayo Belmont/Steeldale industrial corridors, agricultural seasons in Mashonaland and Manicaland (John Deere/AFGRI), freight routes (Swift Transport), mining belts (Crane 4 Hire).
- Settlement options: USD, local currency (ZiG), and regional Nostro/wire options.
- Direct contact: Garth Jones, Mobile/WhatsApp: +263 790 414 827, Email: garth@sonos.co.zw.

Response Style:
- Professional, confident, senior executive tone.
- Direct, commercial, ROI-focused ("No BS").
- Emphasize local market dynamics in Harare and Bulawayo where appropriate.
- Keep answers concise, actionable, and formatted cleanly with markdown bullets when listing steps.`;

    // Map history to contents structure for generateContent or chat
    const formattedContents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    // Add prior turns
    for (const item of history as ChatHistoryItem[]) {
      if (item.role === 'user' || item.role === 'model') {
        formattedContents.push({
          role: item.role,
          parts: [{ text: item.text }],
        });
      }
    }

    // Add current user turn
    formattedContents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const ai = getGeminiClient(currentApiKey);
    
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Gemini API call timed out after 10 seconds')), 10000)
    );

    const generatePromise = ai.models.generateContent({
      model: selectedModel,
      contents: formattedContents,
      config: {
        systemInstruction,
      },
    });

    const response: any = await Promise.race([generatePromise, timeoutPromise]);
    const reply = response.text || 'I apologize, but I could not generate a response at this moment.';
    res.json({ reply, model: selectedModel });
  } catch (error: any) {
    console.error('Gemini API Error or Timeout:', error?.message);
    
    // Provide authoritative, immediate strategic guidance if network is delayed
    const { message = '' } = req.body || {};
    const strategicAdvisory = `**SONOS Strategy Advisory · Zimbabwe**\n\n*Strategic insight for: "${message}"*\n\n1. **Harare Corporate Focus:** Transition from reactive panic marketing to structured psychological progression. Align your brand voice across C-suite boardrooms, digital channels, and high-impact physical touchpoints.\n2. **Bulawayo Industrial Hub:** Deploy high-fidelity 3D equipment staging and tender-ready visual architecture tailored for logistics, mining, and manufacturing corridors.\n3. **Brand-Locked Production:** Eliminate generic AI slop with 100% facial and corporate identity manual lock.\n4. **Sole Brand Custodian SLA:** 12 bespoke monthly assets, 48-hour SLA turnaround.\n\n*Direct Consultation: Garth Jones (+263 790 414 827 | garth@sonos.co.zw)*`;

    res.json({ reply: strategicAdvisory, model: 'sonos-advisory-fallback' });
  }
});

// Mount Vite in dev mode, or static files in production
const isProd = process.env.NODE_ENV === 'production';

async function startServer() {
  if (isProd) {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT} (${isProd ? 'production' : 'development'})`);
  });
}

startServer();
