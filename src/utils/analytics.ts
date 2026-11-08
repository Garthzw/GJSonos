/**
 * Google Analytics 4 (gtag.js) Integration Utility for SONOS Consultancy Zimbabwe
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
export const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-7PPZ7FHYJ4').trim();

/**
 * Initializes the Google Analytics gtag.js script and configures the tracking stream.
 */
export function initGoogleAnalytics(id: string = GA_MEASUREMENT_ID) {
  if (typeof window === 'undefined') return;

  // Ensure dataLayer and gtag are initialized
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
  }

  if (id && id !== 'G-XXXXXXXXXX') {
    const existingScript = document.getElementById('google-analytics-gtag');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'google-analytics-gtag';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
      document.head.appendChild(script);
    }

    // Configure GA4 Measurement ID
    window.gtag('config', id, {
      send_page_view: false, // SPA handles page views explicitly
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });

    console.info(`[Analytics] Google Analytics 4 initialized with Measurement ID: ${id}`);
  } else {
    console.info('[Analytics] Google Analytics initialized in local queue mode (awaiting Measurement ID).');
  }
}

/**
 * Tracks SPA virtual page views when the user changes views or navigation tabs.
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window === 'undefined' || !window.gtag) return;

  const title = pageTitle || document.title;
  const currentId = (import.meta.env.VITE_GA_MEASUREMENT_ID || '').trim();

  if (currentId && currentId !== 'G-XXXXXXXXXX') {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: title,
      page_location: window.location.href,
    });
  } else {
    // Queue event
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: title,
    });
  }
}

/**
 * Tracks custom commercial conversion events across the SONOS website.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, any> = {}
) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, {
    ...params,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Dedicated conversion trackers for Zimbabwean business and agency leads
 */
export const analyticsConversions = {
  trackWhatsAppClick: (source: string) => {
    trackEvent('whatsapp_lead_click', {
      event_category: 'Commercial Lead',
      event_label: source,
      contact_number: '+263790414827',
    });
  },

  trackCaseStudyInspection: (caseStudyId: string, clientName: string) => {
    trackEvent('case_study_view', {
      event_category: 'Portfolio Engagement',
      case_study_id: caseStudyId,
      client_name: clientName,
    });
  },

  trackReelPlayback: (reelTitle: string) => {
    trackEvent('cinema_reel_play', {
      event_category: 'Video Engagement',
      reel_title: reelTitle,
    });
  },

  trackScopeCalculatorUse: (deliverablesCount: number, estimatedAmount: number) => {
    trackEvent('scope_estimator_calculation', {
      event_category: 'Pricing Estimator',
      deliverables_count: deliverablesCount,
      estimated_total: estimatedAmount,
    });
  },

  trackStrategicInquirySubmitted: (role: string, serviceInterest: string, budget: string) => {
    trackEvent('strategic_inquiry_submitted', {
      event_category: 'RFP Submission',
      role,
      service_interest: serviceInterest,
      budget_range: budget,
    });
  },

  trackAIChatAssistantPrompt: (promptSubject: string, model: string) => {
    trackEvent('ai_chat_assistant_interaction', {
      event_category: 'AI Assistant',
      prompt_subject: promptSubject,
      neural_model: model,
    });
  },
};
