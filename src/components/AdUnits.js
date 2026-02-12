'use client';
import { useEffect, useRef } from 'react';

// AdSense publisher ID
const AD_CLIENT = 'ca-pub-3599505006694500';

// Set to true once AdSense is approved and ad units are created
// Change this to true and add your real ad slot IDs below
const ADS_ENABLED = false;

// Ad slot IDs — replace with real ones from your AdSense dashboard
const AD_SLOTS = {
  banner: '1234567890',        // Horizontal banner (728x90 or responsive)
  inContent: '2345678901',     // In-article/content ad
  sidebar: '3456789012',       // Sidebar rectangle (300x250)
  categoryTop: '4567890123',   // Top of category pages
};

function AdUnit({ slot, format = 'auto', className = '', style = {} }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!ADS_ENABLED) return;
    if (pushed.current) return;

    try {
      if (adRef.current && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  if (!ADS_ENABLED) return null;

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Horizontal banner — below hero, between sections
export function AdBanner({ className = '' }) {
  return (
    <AdUnit
      slot={AD_SLOTS.banner}
      format="horizontal"
      className={`my-6 ${className}`}
    />
  );
}

// In-content ad — within article/guide content
export function AdInContent({ className = '' }) {
  return (
    <AdUnit
      slot={AD_SLOTS.inContent}
      format="fluid"
      className={`my-6 ${className}`}
      style={{ minHeight: '250px' }}
    />
  );
}

// Sidebar ad — 300x250 rectangle
export function AdSidebar({ className = '' }) {
  return (
    <AdUnit
      slot={AD_SLOTS.sidebar}
      format="rectangle"
      className={className}
      style={{ minWidth: '250px', minHeight: '250px' }}
    />
  );
}

// Category page top ad — responsive leaderboard
export function AdCategoryTop({ className = '' }) {
  return (
    <AdUnit
      slot={AD_SLOTS.categoryTop}
      format="auto"
      className={`mb-6 ${className}`}
    />
  );
}

// Placeholder shown when ads aren't enabled yet — useful for layout testing
export function AdPlaceholder({ type = 'banner', className = '' }) {
  if (ADS_ENABLED) return null; // Don't show placeholder when real ads are live

  // Return null in production — no visible placeholder
  // Uncomment the block below to see where ads will go during development
  return null;

  /*
  const sizes = {
    banner: 'h-[90px]',
    sidebar: 'h-[250px] w-[300px]',
    inContent: 'h-[250px]',
  };

  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${sizes[type] || sizes.banner} ${className}`}>
      <span className="text-xs text-gray-400">Ad placement: {type}</span>
    </div>
  );
  */
}
