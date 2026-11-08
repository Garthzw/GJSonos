import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateProjectEstimate, filterPortfolioItems } from './estimator';
import { PORTFOLIO_ITEMS } from '../data/siteContent';

test('calculateProjectEstimate correctly calculates base sum without addons', () => {
  const result = calculateProjectEstimate({
    aiDeliverables: ['single_commercial'],
    serviceAddons: [],
  });

  assert.equal(result.subtotal, 1200);
  assert.equal(result.discount, 0);
  assert.equal(result.expressSurcharge, 0);
  assert.equal(result.total, 1200);
  assert.equal(result.estimatedDeliveryDays, 5);
  assert.equal(result.itemCount, 1);
});

test('calculateProjectEstimate handles agency partner discount and express turnaround', () => {
  const result = calculateProjectEstimate({
    aiDeliverables: ['single_commercial', 'product_staging'], // 1200 + 950 = 2150
    serviceAddons: [],
    agencyPartnerDiscount: true, // 15% discount: 322.5 -> 323
    expressTurnaround: true, // +25% of subtotal: 537.5 -> 538
  });

  assert.equal(result.subtotal, 2150);
  assert.equal(result.discount, 323);
  assert.equal(result.expressSurcharge, 538);
  assert.equal(result.total, 2150 - 323 + 538);
  assert.equal(result.estimatedDeliveryDays, 3); // maxDays was 5 -> ceil(5 * 0.5) = 3
  assert.equal(result.itemCount, 2);
});

test('filterPortfolioItems filters by AI video correctly', () => {
  const allVideos = filterPortfolioItems(PORTFOLIO_ITEMS, 'ai-video');
  assert.ok(allVideos.length >= 7, 'Should find at least 7 video/AI commercial items');
  for (const item of allVideos) {
    assert.ok(item.category === 'AI Commercial' || item.mediaType === 'video');
  }
});

test('filterPortfolioItems filters with search query', () => {
  const deereResults = filterPortfolioItems(PORTFOLIO_ITEMS, 'all', 'John Deere');
  assert.equal(deereResults.length, 1);
  assert.equal(deereResults[0].id, 'johndeere-afgri');
});
