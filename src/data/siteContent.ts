export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  sector: 'Automotive & Logistics' | 'Agriculture & Heavy Machinery' | 'Industrial & Engineering' | 'FMCG & Consumer Goods' | 'Luxury & Fragrance' | 'Tech & Electronics';
  category: 'AI Commercial' | 'Brand Architecture' | 'Fleet Staging' | 'Editorial & 3D Staging';
  tagline: string;
  description: string;
  psychologicalStrategy: string;
  mediaType: 'video' | 'image' | 'hybrid';
  videoSrc?: string;
  imageSrc?: string;
  galleryImages?: string[];
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'swift-transport',
    title: 'Swift Transport — 24-Hour Fleet Transformation & Dynamic Day/Night Lighting',
    client: 'Swift Transport / Unifreight Africa',
    sector: 'Automotive & Logistics',
    category: 'Fleet Staging',
    tagline: 'Zimbabwe\'s premier logistics giant reimagined through precision lighting and high-impact roadside branding.',
    description: 'Complete visual architecture and commercial staging for Swift Transport\'s multi-trailer national fleet. Utilizing specialized day-to-night lighting cinematography and 360-degree livery inspection, the visual asset establishes regional freight dominance across Southern Africa.',
    psychologicalStrategy: 'Scale & Reliability Anchor: Freight buyers make decisions based on perceived infrastructure stability and punctuality. Dramatic dusk-to-dawn illumination conveys non-stop operational endurance.',
    mediaType: 'hybrid',
    videoSrc: '/public/assets/aistudio/Swift-day_night_57763f9d.mp4',
    imageSrc: '/public/assets/aistudio/swift-edited_b2aa6adb.png',
    galleryImages: [
      '/public/assets/aistudio/swift-edited_b2aa6adb.png',
      '/public/assets/aistudio/profile_swift_60ce0b62.png',
    ],
    metrics: [
      { label: 'Fleet Visibility', value: '+180%' },
      { label: 'Regional Brand Recall', value: '94%' },
      { label: 'B2B Freight Contracts', value: 'Record Q3' },
    ],
    deliverables: [
      '24-Hour Day/Night Commercial Cinema Reel',
      'High-Definition Fleet Livery Specification Manual',
      'Multi-Angle Truck & Double-Trailer Photography',
      'Corporate Profile & Highway Billboard Artwork',
    ],
  },
  {
    id: 'johndeere-afgri',
    title: 'John Deere (Ag Range) — 12-Month Editorial Content & 3D Tractor Staging',
    client: 'John Deere / AFGRI Equipment Zimbabwe',
    sector: 'Agriculture & Heavy Machinery',
    category: 'Editorial & 3D Staging',
    tagline: 'A systematic 365-day agricultural marketing blueprint synchronized with Zimbabwe\'s farming calendar.',
    description: 'Engineered an exhaustive 12-month editorial and product specification matrix for the John Deere 5075 E and 5045 D utility tractors, combines, turf mowers, and Gators. Pre-season land prep, planting, crop care, and harvesting phases were strategically mapped with 3D product specifications.',
    psychologicalStrategy: 'Predictive Timing Progression: Farmers do not buy equipment impulsively. Content hits commercial readiness 60 days before seasonal tillage and rainfall, establishing insurmountable pre-season authority.',
    mediaType: 'image',
    imageSrc: '/public/assets/aistudio/johndeere-plan_1345a090.png',
    galleryImages: [
      '/public/assets/aistudio/johndeere-plan_1345a090.png',
    ],
    metrics: [
      { label: 'Editorial Horizon', value: '12 Months' },
      { label: 'Seasonal Alignment', value: '100% On-Schedule' },
      { label: 'Dealer Inbound Enquiries', value: '+42%' },
    ],
    deliverables: [
      '52-Week Thematic Editorial Calendar & Copy Matrix',
      '5075 E & 5045 D 3D Product Reference & Callouts',
      'Field Photography & Real Soil Working Demonstrations',
      'Dealer Social Assets & Targeted Agricultural Ads',
    ],
  },
  {
    id: 'crane4hire',
    title: 'Crane 4 Hire — Industrial Staging & Scissor Lift Visual Overhaul',
    client: 'Crane 4 Hire Zimbabwe',
    sector: 'Industrial & Engineering',
    category: 'Brand Architecture',
    tagline: 'Industrial machinery visual elevation that commands tier-1 mining and commercial construction contracts.',
    description: 'Comprehensive industrial staging of telehandlers, telescopic cranes, and electric scissor lifts operating on active mining, fabrication, and warehouse sites. Repositioned the brand from utility equipment supplier to indispensable heavy-lifting engineering partner.',
    psychologicalStrategy: 'Operational Competence Signaling: Safety officers and mine managers look for meticulous machine condition and rigorous safety staging. High-contrast site lighting reinforces certified structural rigor.',
    mediaType: 'image',
    imageSrc: '/public/assets/aistudio/crane4hire_5f8a2c57.png',
    galleryImages: [
      '/public/assets/aistudio/crane4hire_5f8a2c57.png',
    ],
    metrics: [
      { label: 'Tier-1 Mining RFPs', value: '+65%' },
      { label: 'Long-Term Lease Renewals', value: '88%' },
      { label: 'Site Safety Audit Score', value: '100%' },
    ],
    deliverables: [
      'Active Site Telehandler & Scissor Lift Photography',
      'Warehouse Staging & Structural Scale Composition',
      'Equipment Fleet Spec Cards & Rate Brochures',
      'Digital Fleet Catalog for Construction Project Directors',
    ],
  },
  {
    id: 'klomp-trail',
    title: 'KLOMP Trail-Tuned Footwear — Cinematic AI Commercial',
    client: 'KLOMP Performance Athletics',
    sector: 'FMCG & Consumer Goods',
    category: 'AI Commercial',
    tagline: 'High-octane commercial cinematography seamlessly transitioning from rugged forest trails to neon city streets.',
    description: 'Fully brand-locked AI commercial showcasing the KLOMP all-terrain footwear. Features split-screen dynamic cinematography, precision foot-strike fluid dynamics in wet clay, locked female and male athletes, and original adrenaline-pumping audio production.',
    psychologicalStrategy: 'Dual-Identity Fusion: Urban runners want to believe they have primal endurance. Seamlessly morphing from mountain singletrack into metropolitan downtown validates the runner\'s dual lifestyle.',
    mediaType: 'video',
    videoSrc: '/public/assets/aistudio/advert_run_36d8a2ee.mp4',
    metrics: [
      { label: 'Production Timeline', value: '72 Hours' },
      { label: 'Traditional Cost Saved', value: '85%' },
      { label: 'Brand Guideline Lock', value: '100%' },
    ],
    deliverables: [
      'Broadcast-Ready 4K Commercial Video',
      'Consistent Locked Athletic Character Profiles',
      'Custom Foley Sound Effects & Music Track',
      'E-Commerce Hero Loop Assets',
    ],
  },
  {
    id: 'fizzbears-sour',
    title: 'FizzBears Sour Gummies — Kinetic Particle & Confectionery Launch',
    client: 'FizzBears Confectionery',
    sector: 'FMCG & Consumer Goods',
    category: 'AI Commercial',
    tagline: 'Hyper-saturated color explosions and crystalline sour sugar particle physics.',
    description: 'An electrifying confectionery advert featuring sugar-crystal landscapes, levitating gummy characters, vortex dynamics, and explosive fruit sour bursts. Produced with brand-locked packaging geometry and synchronized high-tempo commercial audio.',
    psychologicalStrategy: 'Sensory Synesthesia: Crisp crunch soundscapes and hyper-focused macro crystals trigger mouth-watering taste anticipation before the consumer ever enters the retail aisle.',
    mediaType: 'video',
    videoSrc: '/public/assets/aistudio/advert_fizzbears_d04c9eb9.mp4',
    metrics: [
      { label: 'Social Engagement Rate', value: '14.8%' },
      { label: 'Retail Stockist Requests', value: '+110%' },
      { label: 'Gen-Z Brand Sentiment', value: '96% Positive' },
    ],
    deliverables: [
      'Explosive 3D Packaging Animation & Commercial',
      'Macro Sugar Particle Physics Simulation',
      'Bespoke Upbeat Electronic Score & VO',
      'Point-of-Sale (POS) Digital Screen Loops',
    ],
  },
  {
    id: 'carabe-parfum',
    title: 'Carabe Haute Parfumerie — Faceted Crystal Glass Elegance',
    client: 'Carabe Luxury Fragrance',
    sector: 'Luxury & Fragrance',
    category: 'AI Commercial',
    tagline: 'Precision geometric glass refractions and minimalist luxury aesthetic.',
    description: 'A study in high-end luxury art direction. The Carabe bottle rotates through soft atmospheric light beams, revealing faceted architectural bevels, laser-etched branding, and pristine metallic atomizers without expensive physical studio rigging.',
    psychologicalStrategy: 'Sensory Exclusivity: Luxury buyers judge prestige by refraction purity and deliberate camera deceleration. Slow, gliding focal sweeps signal uncompromising craftsmanship.',
    mediaType: 'video',
    videoSrc: '/public/assets/aistudio/advert_perfume_ed4752e3.mp4',
    metrics: [
      { label: 'Luxury Brand Perception', value: 'Top Tier' },
      { label: 'Pre-Order Conversion', value: '+34%' },
      { label: 'Production Cost vs CGI Studio', value: '-90%' },
    ],
    deliverables: [
      'Haute Horlogerie Grade Glass Studio Reel',
      'High-Resolution Faceted Geometry Staging',
      'Ambient Orchestral Soundscape',
      'Social Luxury Editorial Still Extracts',
    ],
  },
  {
    id: 'mistify-skincare',
    title: 'Mistify Oceanic Toner — Kinetic Fluid Surface & Wave Mechanics',
    client: 'Mistify Botanical Skincare',
    sector: 'FMCG & Consumer Goods',
    category: 'AI Commercial',
    tagline: 'Harmonic wave deformations and pure botanical hydration dynamics.',
    description: 'Commercial spot for Mistify Hydrating Toner Spray resting on kinetic undulating blue fluted surfaces. Smooth mechanical wave rippling accentuates the bottle\'s matte royal cobalt finish and natural botanic extracts.',
    psychologicalStrategy: 'Subconscious Hydration Cue: Rhythmic ripple frequencies match relaxed human breathing, creating an instinctive sensation of refreshing skin relief.',
    mediaType: 'video',
    videoSrc: '/public/assets/aistudio/advert_water_b1d99afb.mp4',
    metrics: [
      { label: 'Brand Recall Boost', value: '82%' },
      { label: 'DTC Add-to-Cart Lift', value: '+29%' },
      { label: 'Rendering Turnaround', value: '48h' },
    ],
    deliverables: [
      'Fluid Acoustic Ribbed Surface Animation',
      'Locked Packaging Typography & Logo Placement',
      'Calming Audio Design & Pure Mist Sound',
      'Social Reels & Website Hero Media',
    ],
  },
  {
    id: 'soundpeats-smartcase',
    title: 'SoundPeats Smart Screen Earbuds — AI Brand Ambassador Showcase',
    client: 'SoundPeats Audio',
    sector: 'Tech & Electronics',
    category: 'AI Commercial',
    tagline: 'Virtual brand ambassador delivering authentic consumer review and product demonstration.',
    description: 'Featuring a custom-trained virtual spokesperson with locked facial structure, natural vocal inflections, and genuine product interaction in a designer loft environment. Demonstrates the touch-screen case controls and matte earbud ergonomics.',
    psychologicalStrategy: 'Relatable Peer Authority: Micro-influencer fatigue is real. A photorealistic, perfectly enunciated virtual talent delivers 100% script precision with zero talent drop-off or scheduling friction.',
    mediaType: 'video',
    videoSrc: '/public/assets/aistudio/advert_infuencer_74ea5a90.mp4',
    metrics: [
      { label: 'Script Compliance', value: '100% Flawless' },
      { label: 'Talent Agency Fees Saved', value: '$8,500' },
      { label: 'CTR on Paid Social Ads', value: '4.6%' },
    ],
    deliverables: [
      'Locked Facial Likeness Virtual Ambassador Reel',
      'Studio-Grade Voiceover with Micro-Pauses',
      'Loft Architecture Staging & Dynamic Hands',
      'Short-Form TikTok & Instagram Video Edits',
    ],
  },
  {
    id: 'roastery-coffee',
    title: 'Artisan Roastery — Sensory Morning Steam & Roast Chemistry',
    client: 'Highland Specialty Coffee',
    sector: 'FMCG & Consumer Goods',
    category: 'AI Commercial',
    tagline: 'Golden morning light and visceral tactile coffee steam dynamics.',
    description: 'Close-up macro study of fresh morning brew, dynamic swirling crema, and authentic sunlight filtering across a warm kitchen counter. Evokes warm comfort and artisanal bean quality.',
    psychologicalStrategy: 'Ritualistic Trigger: Morning coffee is not a beverage; it is an emotional grounding anchor. Warm illumination and gentle rising steam awaken visceral comfort cravings.',
    mediaType: 'video',
    videoSrc: '/public/assets/aistudio/advert_coffee_684b1f5d.mp4',
    metrics: [
      { label: 'Morning Foot Traffic', value: '+38%' },
      { label: 'Artisan Roast Sales', value: '+51%' },
      { label: 'Video Completion Rate', value: '78%' },
    ],
    deliverables: [
      'Macro Steam & Fluid Convection Cinema Spot',
      'Warm Natural Golden Hour Grading',
      'Acoustic Morning Ambience & Kitchen Sound',
      'Brand Storytelling Video for Website Hero',
    ],
  },
  {
    id: 'actioncam-4k',
    title: 'ActionCam Extreme 4K — Levitating Rugged Geomorphic Staging',
    client: 'Apex Tech Dynamics',
    sector: 'Tech & Electronics',
    category: 'AI Commercial',
    tagline: 'Lunar rock levitation and rugged impact-proof engineering visual.',
    description: 'Dynamic 360-degree floating showcase of the ActionCam 4K extreme action camera suspended above raw basalt rock terrain with anamorphic lens flare and precision chassis detailing.',
    psychologicalStrategy: 'Invulnerability Staging: Positioning technology against harsh volcanic stone subtly registers military-grade durability in the buyer\'s mind.',
    mediaType: 'video',
    videoSrc: '/public/assets/aistudio/advert_camera_840940ec.mp4',
    metrics: [
      { label: 'Pre-Order Velocity', value: '3.2x Target' },
      { label: 'Tech Reviewer Pickups', value: '18 Outlets' },
      { label: 'Studio Cost Reduction', value: '92%' },
    ],
    deliverables: [
      '360 Geomorphic Basalt Rock Rotation',
      'Chassis Explosion & Lens Spec Visuals',
      'Heavy Bass Impact Sound Effects',
      'Display Advertising & Product Page Loop',
    ],
  },
];

export const AI_PILLARS = [
  {
    id: '01',
    title: 'AI Ambassadors',
    subtitle: 'Virtual Spokespeople With Locked Facial Identity',
    description: 'Custom-trained virtual brand ambassadors with locked facial likeness, tailored wardrobe, bespoke scripts, and studio-grade voice synthesis. No scheduling conflicts, no talent controversies, and infinite campaign versatility.',
    features: ['Locked consistent facial features across all video series', 'Corporate wardrobe matched to brand guidelines', 'Authentic voiceovers and natural phonetic delivery', 'Multi-lingual capability for regional & international expansion'],
    badge: '100% Brand-Locked',
  },
  {
    id: '02',
    title: 'AI Adverts',
    subtitle: 'Cinema-Grade Commercials With Zero Generic Slop',
    description: 'Broadcast-quality television and digital video spots integrating your physical products, precise pantone colors, and typography with dramatic camera movement, bespoke audio scores, and human emotional nuance.',
    features: ['Photorealistic fluid, particle, and mechanical physics', 'Real product placement and 3D geometry consistency', 'Commercial audio design with original musical scores', 'Delivered in standard 16:9 broadcast and 9:16 vertical reels'],
    badge: 'Cinema-Grade 4K',
  },
  {
    id: '03',
    title: 'AI Short Stories',
    subtitle: 'Episodic Branded Narrative Series',
    description: 'Serial branded entertainment and dramatic/comedic mini-episodes with recurring locked character casts that build authentic audience loyalty and emotional investment over multiple quarters.',
    features: ['Multi-episode narrative arcs written with psychological hooks', 'Persistent character ensembles and recognizable environments', 'High retention rates on YouTube Shorts, TikTok & Instagram', 'Measurable conversion calls-to-action embedded in every story'],
    badge: 'High Retentive Storytelling',
  },
  {
    id: '04',
    title: 'AI Products Development',
    subtitle: 'Pre-Manufacturing Prototyping & Virtual Staging',
    description: 'Virtual product staging, packaging concept exploration, and custom AI Agent LLM development to automate customer journeys and test consumer appetite before committing capital to tooling.',
    features: ['Photorealistic 3D virtual packaging on pristine studio surfaces', 'Interactive customer journey AI Agent LLMs', 'Market test staging before expensive physical tooling runs', 'Rapid iteration cycle: concepts delivered in 48 hours'],
    badge: 'Capital Efficiency',
  },
];

export const SERVICES_LIST = [
  {
    id: '01',
    title: 'Strategy & Brand Architecture',
    summary: 'Building unshakeable market position and cognitive authority.',
    details: 'Corporate Brand Identity, Go-to-Market (GTM) blueprints, Competitor Vulnerability Audits, and Corporate Brand Guides that govern every internal and external asset.',
  },
  {
    id: '02',
    title: 'Web, Custom UI/UX & ERP Audits',
    summary: 'High-converting digital interfaces engineered for commercial ROI.',
    details: 'Modern full-stack web applications, custom enterprise UI/UX logic, AI Agent LLM integration, and comprehensive ERP system user-flow audits.',
  },
  {
    id: '03',
    title: 'SEO, SEM & Paid Performance',
    summary: 'Premier Google Partner technical search dominance and conversion optimization.',
    details: 'Enterprise technical SEO, high-intent Google Search campaigns, CRO (Conversion Rate Optimization), and granular ROAS tracking.',
  },
  {
    id: '04',
    title: 'Social Media & Brand Custody',
    summary: 'Disciplined monthly publishing and narrative stewardship.',
    details: '12 custom static and video assets per month, psychological copywriting, mobile-first optimization, platform scheduling, and transparent analytics reporting.',
  },
  {
    id: '05',
    title: 'Activations & Live Events',
    summary: 'Ground-level BTL campaigns that cut through marketplace noise.',
    details: 'In-store promotions, multi-city roadshows, high-impact corporate product launches, spatial staging, and real-time lead attribution.',
  },
];

export const REVENUE_ESTIMATOR_TIERS = {
  aiTiers: [
    { id: 'single_commercial', name: 'Cinema-Grade AI Commercial (30-60s)', basePrice: 1200, time: '3-5 Days' },
    { id: 'ambassador_launch', name: 'AI Brand Ambassador + 4 Custom Video Spots', basePrice: 2800, time: '7-10 Days' },
    { id: 'episodic_series', name: 'Episodic Branded Short Story Series (6 Episodes)', basePrice: 4200, time: '2 Weeks' },
    { id: 'product_staging', name: 'Virtual 3D Product Staging Suite (10 Renderings)', basePrice: 950, time: '48-72 Hours' },
  ],
  servicesTiers: [
    { id: 'retainer_basic', name: 'Sole Brand Custodian SLA Retainer (Monthly)', basePrice: 1500, time: 'Monthly Recurring' },
    { id: 'web_portal', name: 'High-Converting Web & UI/UX Portal', basePrice: 3200, time: '2-3 Weeks' },
    { id: 'seo_partner', name: 'Premier Google SEO & SEM Management', basePrice: 1100, time: 'Monthly Retainer' },
    { id: 'btl_activation', name: 'Ground-Level Live Activation & Roadshow Direction', basePrice: 2400, time: 'Project-Based' },
  ],
};
