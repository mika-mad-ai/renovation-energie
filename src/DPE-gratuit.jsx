import React, { useEffect, useRef } from 'react';
import useSeo from './useSeo';

// Ces composants sont locaux à ce fichier et n'affectent pas le reste du site.
function DpeHeader() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-2 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <a href="/">
            <img src="/RenoHabLogo.webp" alt="RenoHab Logo" className="h-32 w-auto" />
          </a>
          <a
            href="/"
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
          >
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </header>
  );
}

function DpeFooter() {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <img 
          src="/RenoHabLogo.webp" 
          alt="RenoHab Logo" 
          className="h-36 w-auto mx-auto mb-4" 
          loading="lazy"
        />
        <p className="mt-4 text-gray-400">
          Votre Rénovation Énergétique, Simplifiée & Financée.
        </p>
        <div className="mt-6">
          <a href="/mentions-legales" className="mx-2 hover:text-green-400">Mentions Légales</a>
          <span className="text-gray-500">|</span>
          <a href="/confidentialite" className="mx-2 hover:text-green-400">Politique de Confidentialité</a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} RenoHab. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}


// --- Page Principale : DPE Gratuit ---
export default function DpeGratuit() {
  useSeo({
    title: "DPE gratuit en ligne : estimez votre classe énergétique | RenoHab",
    description: "Estimez gratuitement le DPE de votre logement en ligne. Le DPE conditionne l'accès à MaPrimeRénov', aux CEE et à l'Éco-PTZ : RenoHab vous accompagne de l'audit aux travaux.",
    path: "/dpe-gratuit",
    type: "website",
  });
  const kelvinScriptLoaded = useRef(false);

  // Cet effet charge le widget de recherche d'adresse de Kelvin.
  useEffect(() => {

    const loadKelvinWidget = () => {
      if (kelvinScriptLoaded.current) return;
      kelvinScriptLoaded.current = true;
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/kelvin-js/dist/kelvin-address-search-widget-v1.0.1.min.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.kelvin && window.kelvin.search) {
          window.kelvin.search({
            simulatorUrl: "/simulateur", // L'URL de redirection
            htmlTargetId: "kelvin-address-search-content",
            inputPlaceholder: "Rentrez l'adresse de votre bien immobilier",
            submitButtonText: 'Lancer ma simulation',
            colors: {
              primary: '#22c55e',
              secondary: 'rgba(34, 197, 94, 0.15)',
              text: '#333333',
              border: '#14b8a6',
              hoverBackground: '#16a34a',
              hoverText: '#ffffff'
            }
          });
        }
      };
    };

loadKelvinWidget(); 
  }, []);

  // NOTE : La logique de capture de lead n'est PAS ici, car l'utilisateur est redirigé.
  // Elle devra être sur la page /simulateur.

  return (
      <div className="min-h-screen bg-white font-sans flex flex-col">
        <DpeHeader />
        <main className="flex-grow flex flex-col w-full">
          <div className="relative w-full h-[600px] bg-gray-800">
            <img
              src="/hero-desktop.webp" 
              srcSet="/hero-mobile.webp 640w,
                      /hero-tablet.webp 1024w,
                      /hero-desktop.webp 1920w"
              sizes="(max-width: 640px) 640px,
                     (max-width: 1024px) 1024px,
                     1920px"
              alt="Maison moderne avec un bon diagnostic énergétique"
              loading="eager" 
              width="1920"
              height="1080"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
            <div className="relative z-30 flex flex-col items-center justify-center h-full w-full max-w-3xl mx-auto text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Diagnostic de Performance Énergétique de votre habitat,
              </h1>
              <div className="mb-6 inline-block bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-2 rounded-full shadow-lg">
                <span className="text-white font-semibold text-lg">
                  une adresse suffit.
                </span>
              </div>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-white font-bold">
                Obtenez l'étiquette énergétique de votre logement en quelques clics.
              </p>
              <div id="kelvin-address-search-content" className="w-full max-w-lg">
                 {/* Le widget Kelvin sera injecté ici */}
              </div>
            </div>
          </div>
        </main>
        <DpeFooter />
      </div>
  );
}
