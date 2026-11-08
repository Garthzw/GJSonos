import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/siteContent';

export interface EstimateOptions {
  aiDeliverables: string[];
  serviceAddons: string[];
  expressTurnaround?: boolean;
  agencyPartnerDiscount?: boolean;
}

export interface EstimateResult {
  subtotal: number;
  discount: number;
  expressSurcharge: number;
  total: number;
  estimatedDeliveryDays: number;
  itemCount: number;
}

export function calculateProjectEstimate(options: EstimateOptions): EstimateResult {
  const AI_PRICING: Record<string, { price: number; days: number }> = {
    single_commercial: { price: 1200, days: 5 },
    ambassador_launch: { price: 2800, days: 10 },
    episodic_series: { price: 4200, days: 14 },
    product_staging: { price: 950, days: 3 },
  };

  const SERVICE_PRICING: Record<string, { price: number; days: number }> = {
    retainer_basic: { price: 1500, days: 30 },
    web_portal: { price: 3200, days: 18 },
    seo_partner: { price: 1100, days: 30 },
    btl_activation: { price: 2400, days: 14 },
  };

  let subtotal = 0;
  let maxDays = 0;
  let itemCount = 0;

  for (const id of options.aiDeliverables) {
    if (AI_PRICING[id]) {
      subtotal += AI_PRICING[id].price;
      maxDays = Math.max(maxDays, AI_PRICING[id].days);
      itemCount++;
    }
  }

  for (const id of options.serviceAddons) {
    if (SERVICE_PRICING[id]) {
      subtotal += SERVICE_PRICING[id].price;
      maxDays = Math.max(maxDays, SERVICE_PRICING[id].days);
      itemCount++;
    }
  }

  // Agency discount (15% for accredited design agencies & enterprise marketing leads)
  const discount = options.agencyPartnerDiscount ? Math.round(subtotal * 0.15) : 0;
  const taxableSubtotal = subtotal - discount;

  // Express turnaround (50% time compression surcharge: +25% base)
  const expressSurcharge = options.expressTurnaround && subtotal > 0 ? Math.round(subtotal * 0.25) : 0;
  const total = taxableSubtotal + expressSurcharge;

  const estimatedDeliveryDays = options.expressTurnaround ? Math.max(2, Math.ceil(maxDays * 0.5)) : maxDays;

  return {
    subtotal,
    discount,
    expressSurcharge,
    total,
    estimatedDeliveryDays,
    itemCount,
  };
}

export function filterPortfolioItems(
  items: PortfolioItem[],
  filter: string,
  searchQuery?: string
): PortfolioItem[] {
  return items.filter((item) => {
    const matchesCategory =
      filter === 'all' ||
      (filter === 'ai-video' && (item.category === 'AI Commercial' || item.mediaType === 'video')) ||
      (filter === 'brand-staging' && (item.category === 'Brand Architecture' || item.category === 'Fleet Staging')) ||
      (filter === 'industrial-ag' && (item.sector === 'Agriculture & Heavy Machinery' || item.sector === 'Industrial & Engineering' || item.sector === 'Automotive & Logistics'));

    if (!matchesCategory) return false;

    if (!searchQuery || !searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(q) ||
      item.client.toLowerCase().includes(q) ||
      item.sector.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.psychologicalStrategy.toLowerCase().includes(q)
    );
  });
}
