'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const FACEBOOK_PIXEL_ID = '645498691174565'; // Seu ID do Pixel

// Adicionando 'fbq' ao objeto 'window' global
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export default function FacebookPixel() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.fbq) {
      const fbq: (...args: unknown[]) => void = function (...args) {
        if ((window.fbq as any).callMethod) {
          (window.fbq as any).callMethod(...args);
        } else {
          (window.fbq as any).queue.push(args);
        }
      };

      window.fbq = fbq;
      (window.fbq as any).push = fbq;
      (window.fbq as any).loaded = true;
      (window.fbq as any).version = '2.0';
      (window.fbq as any).queue = [];

      const t = document.createElement('script');
      t.async = true;
      t.src = 'https://connect.facebook.net/en_US/fbevents.js';

      const s = document.getElementsByTagName('script')[0];
      if (s?.parentNode) {
        s.parentNode.insertBefore(t, s);
      }

      window.fbq('init', FACEBOOK_PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <>
      {/* Script do Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (!window.fbq) {
              window.fbq = function(...args) {
                if (window.fbq.callMethod) {
                  window.fbq.callMethod(...args);
                } else {
                  window.fbq.queue.push(args);
                }
              };
              window.fbq.push = window.fbq;
              window.fbq.loaded = true;
              window.fbq.version = '2.0';
              window.fbq.queue = [];
              var t = document.createElement('script');
              t.async = true;
              t.src = 'https://connect.facebook.net/en_US/fbevents.js';
              var s = document.getElementsByTagName('script')[0];
              if (s && s.parentNode) {
                s.parentNode.insertBefore(t, s);
              }
            }
            fbq('init', '${FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
}
