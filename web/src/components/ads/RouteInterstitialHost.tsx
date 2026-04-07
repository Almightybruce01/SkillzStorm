import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ADSENSE_CONFIG, isAdFree } from './AdConfig';
import { InterstitialAd } from './InterstitialAd';

const MIN_MS_BETWEEN = 35_000;
const SHOW_EVERY_N_NAV = 3;

/**
 * Sponsored full-screen overlay on periodic route changes (not a browser pop-under).
 * Skips checkout, premium, and first paint. Respects ad-free.
 */
export function RouteInterstitialHost() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navCount = useRef(0);

  useEffect(() => {
    if (isAdFree()) return;

    const path = location.pathname;
    if (path.startsWith('/checkout') || path.startsWith('/premium')) return;

    navCount.current += 1;
    if (navCount.current <= 1) return;

    if (navCount.current % SHOW_EVERY_N_NAV !== 0) return;

    const last = parseInt(sessionStorage.getItem('sz_last_route_popup_at') || '0', 10);
    if (Date.now() - last < MIN_MS_BETWEEN) return;

    sessionStorage.setItem('sz_last_route_popup_at', String(Date.now()));
    setOpen(true);
  }, [location.pathname]);

  if (isAdFree()) return null;

  return (
    <InterstitialAd
      show={open}
      onClose={() => setOpen(false)}
      slot={ADSENSE_CONFIG.slots.routePopup}
    />
  );
}
