
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
