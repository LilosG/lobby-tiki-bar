export type PromotionFeedOrigin = `https://${string}`;

export interface PromotionConfig {
  feedOrigin: PromotionFeedOrigin;
  venueSlug: string;
}

/** Public promotion-feed settings for The Lobby Tiki Bar. */
export const PROMOTION_CONFIG = {
  feedOrigin: 'https://gph-site-manager.vercel.app',
  venueSlug: 'the-lobby',
} as const satisfies PromotionConfig;

export function getPromotionFeedUrl(siteSlug: string): string {
  return new URL(
    `/api/public/promotion/${encodeURIComponent(siteSlug)}`,
    PROMOTION_CONFIG.feedOrigin,
  ).href;
}
