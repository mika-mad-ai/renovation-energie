
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// --- Neutralise les erreurs cross-origin / Adblock ---
// Empêche le "bandeau rouge" React de s'afficher quand une ressource est bloquée par un adblocker
(function safeIgnoreExternalErrors() {
  const IGNORE_MESSAGES = ["Script error.", "Script error"];
  const IGNORE_SOURCES = [
    "bam.nr-data.net",        // New Relic (bloqué par AdBlock)
    "app.go-kelvin.com",      // Iframe Kelvin (cross-origin)
    "googletagmanager.com",   // GTM parfois bloqué
    "doubleclick.net"
  ];

  window.addEventListener(
    "error",
    (e) => {
      const msg = e?.message || "";
      const src = e?.filename || "";
      if (
        IGNORE_MESSAGES.includes(msg) ||
        IGNORE_SOURCES.some((d) => src.includes(d))
      ) {
        e.stopImmediatePropagation?.();
        e.preventDefault?.();
        return false;
      }
    },
    true
  );

  window.addEventListener(
    "unhandledrejection",
    (e) => {
      const msg = e?.reason?.message || "";
      if (IGNORE_MESSAGES.includes(msg)) {
        e.stopImmediatePropagation?.();
        e.preventDefault?.();
        return false;
      }
    },
    true
  );
})();


const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// --- Compatibilité react-snap ↔ hydratation React 18 ---------------------------
// react-snap sérialise le DOM rendu côté client (UA "ReactSnap"). Deux nœuds texte
// adjacents (ex. `© {année} RenoHab`) sont alors fusionnés en un seul dans le HTML,
// et React 18 refuse ensuite d'hydrater (erreurs #418/#425/#423 → re-rendu complet
// de la page, plus lent). Pendant le pré-rendu uniquement, on intercale un
// commentaire vide entre nœuds texte adjacents : il est conservé dans le HTML et
// ignoré par l'hydratation, qui retrouve ainsi exactement les nœuds attendus.
const IS_PRERENDER = navigator.userAgent === 'ReactSnap';

if (IS_PRERENDER) {
  let scheduled = false;
  let mutating = false;
  const separateAdjacentTextNodes = () => {
    mutating = true;
    const walker = document.createTreeWalker(rootElement, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach((node) => {
      const next = node.nextSibling;
      if (next && next.nodeType === Node.TEXT_NODE) {
        node.parentNode.insertBefore(document.createComment(''), next);
      }
    });
    mutating = false;
  };
  const schedule = () => {
    if (scheduled || mutating) return;
    scheduled = true;
    setTimeout(() => {
      scheduled = false;
      separateAdjacentTextNodes();
    }, 50);
  };
  new MutationObserver(schedule).observe(rootElement, { childList: true, subtree: true, characterData: true });
}

// react-snap pré-rend chaque route en HTML statique au build.
// Si le DOM est déjà rempli (page pré-rendue), on hydrate ; sinon on monte normalement.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
