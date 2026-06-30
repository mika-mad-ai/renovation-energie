import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import DPEGratuit from './DPE-gratuit';
import Simulateur from './Simulateur';
import LandingPAC from './pompe-a-chaleur';
import LandingPACV2 from './pompe-a-chaleur.v2';
import ProductPage from './ProductPage';
import ArticleValorisationImmobiliere from './Article-valorisation-immobiliere';
import ArticleCaniculeClimatisation from './Article-canicule-aides-climatisation-2026';
import './App.css';

function App() {
  // Filtre global des erreurs cross-origin (“Script error.”) en DEV
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const onError = (event) => {
      // Empêche l’overlay rouge quand le navigateur remonte “Script error.”
      if (event?.message === 'Script error.') {
        event.preventDefault?.();
        return true;
      }
      return false;
    };

    const onUnhandledRejection = (event) => {
      const reason = event?.reason;
      if (typeof reason === 'string' && /script error/i.test(reason)) {
        event.preventDefault?.();
      }
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);
    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dpe-gratuit" element={<DPEGratuit />} />
      <Route path="/simulateur" element={<Simulateur />} />
      <Route path="/pompe-a-chaleur" element={<LandingPACV2 />} />
      <Route path="/pompe-a-chaleur-classique" element={<LandingPAC />} />
      <Route path="/pompe-a-chaleur/:slug" element={<ProductPage />} />
      <Route path="/blog/valorisation-immobiliere-renovation-energetique" element={<ArticleValorisationImmobiliere />} />
      <Route path="/blog/canicule-aides-climatisation-2026" element={<ArticleCaniculeClimatisation />} />
    </Routes>
  );
}

export default App;
