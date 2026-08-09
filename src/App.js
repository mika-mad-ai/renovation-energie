import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import DPEGratuit from './DPE-gratuit';
import Simulateur from './Simulateur';
import LandingPAC from './pompe-a-chaleur';
import LandingPACV2 from './pompe-a-chaleur.v2';
import ProductPage from './ProductPage';
import ArticleValorisationImmobiliere from './Article-valorisation-immobiliere';
import ArticlePompeAChaleurAirEau from './Article-pompe-a-chaleur-air-eau-prix-aides-2026';
import ArticleCaniculeClimatisation from './Article-canicule-aides-climatisation-2026';
import ArticleDpe2026PassoiresThermiques from './Article-dpe-2026-passoires-thermiques-location';
import ArticleCee2026PrimeEnergie from './Article-cee-2026-prime-energie-comment-en-profiter';
import ArticleEcoPtz2026 from './Article-eco-ptz-2026-pret-taux-zero-renovation';
import ArticleMaPrimeRenovSeptembre2026 from './Article-maprimerenov-septembre-2026-gestes-suppression';
import ArticleAuditEnergetiqueObligatoire from './Article-audit-energetique-obligatoire-vente-2026';
import ArticleRenovationAmpleur2026 from './Article-renovation-ampleur-2026-accompagnateur-renov';
import ArticleAidesRegionalesRenovation2026 from './Article-aides-regionales-renovation-energetique-2026';
import ArticleTva55RenovationEnergetique2026 from './Article-tva-5-5-renovation-energetique-2026';
import ArticleCETAides2026 from './Article-chauffe-eau-thermodynamique-aides-2026';
import ArticleOrdreTravauxRenovation2026 from './Article-ordre-travaux-renovation-energetique-2026';
import ArticleIsolationComblesPerdus2026 from './Article-isolation-combles-perdus-2026';
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
      <Route path="/blog/pompe-a-chaleur-air-eau-prix-aides-2026" element={<ArticlePompeAChaleurAirEau />} />
      <Route path="/blog/canicule-aides-climatisation-2026" element={<ArticleCaniculeClimatisation />} />
      <Route path="/blog/dpe-2026-passoires-thermiques-location" element={<ArticleDpe2026PassoiresThermiques />} />
      <Route path="/blog/cee-2026-prime-energie-comment-en-profiter" element={<ArticleCee2026PrimeEnergie />} />
      <Route path="/blog/eco-ptz-2026-pret-taux-zero-renovation" element={<ArticleEcoPtz2026 />} />
      <Route path="/blog/maprimerenov-septembre-2026-gestes-suppression" element={<ArticleMaPrimeRenovSeptembre2026 />} />
      <Route path="/blog/audit-energetique-obligatoire-vente-2026" element={<ArticleAuditEnergetiqueObligatoire />} />
      <Route path="/blog/renovation-ampleur-2026-accompagnateur-renov" element={<ArticleRenovationAmpleur2026 />} />
      <Route path="/blog/aides-regionales-renovation-energetique-2026" element={<ArticleAidesRegionalesRenovation2026 />} />
      <Route path="/blog/tva-5-5-renovation-energetique-2026" element={<ArticleTva55RenovationEnergetique2026 />} />
      <Route path="/blog/chauffe-eau-thermodynamique-aides-2026" element={<ArticleCETAides2026 />} />
      <Route path="/blog/ordre-travaux-renovation-energetique-2026" element={<ArticleOrdreTravauxRenovation2026 />} />
      <Route path="/blog/isolation-combles-perdus-2026" element={<ArticleIsolationComblesPerdus2026 />} />
    </Routes>
  );
}

export default App;
