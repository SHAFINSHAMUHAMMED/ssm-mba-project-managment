// GoogleTagManager.js
import React, { useEffect } from 'react';

function GoogleTagManager() {
  useEffect(() => {
    // Initialize Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'gtm.js', 'gtm.start': new Date().getTime() });
  }, []);

  return null;
}

export default GoogleTagManager;
