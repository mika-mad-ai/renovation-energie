import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FiCheck, FiArrowRight, FiArrowLeft, FiArrowDown, FiDroplet, FiCloud, FiZap, FiBox, FiHelpCircle, FiHome, FiMapPin, FiThermometer, FiUser, FiCheckCircle, FiX } from 'react-icons/fi';
import { useSheetProducts } from './hooks/useSheetProducts';
import HeroPacImage from './Hero-PAC.png';
import ConfianceRenoHab from './ConfianceRenoHab';
import useSeo from './useSeo';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.3, ease: 'easeIn' } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const FUNNEL_STEP_META = {
  1: { context: 'step-1-chauffage', label: 'energie_actuelle' },
  2: { context: 'step-2-surface', label: 'surface' },
  3: { context: 'step-3-cp', label: 'cp' },
  4: { context: 'step-4-contact', label: 'contact' },
};

const normalizeBrandKey = (value = '') => value?.toString().toLowerCase().replace(/[^a-z0-9]/g, '') || '';

const BRAND_FILTER_OPTIONS = [
  'Altherma',
  'Ariston',
  'Atlantic',
  'Bosch',
  'Carrier',
  'Daikin',
  'De Dietrich',
  'Ferroli',
  'Frisquet',
  'Gree',
  'Haier',
  'Hitachi',
  'Mitsubishi',
  'Nibe',
  'Panasonic',
  'Samsung',
  'Saunier Duval',
  'Stiebel',
  'Thermor',
  'Toshiba',
  'Viessmann',
  'Weishaupt',
].map((label) => ({ label, key: normalizeBrandKey(label) }));

const META_PIXEL_ID = '1381414250297297';

const initMetaPixel = () => {
  if (typeof window === 'undefined') return;
  if (window.fbq) {
    if (!window.__metaPixelInitialized) {
      window.fbq('init', META_PIXEL_ID);
      window.__metaPixelInitialized = true;
    }
    window.fbq('track', 'PageView');
    return;
  }

  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
  window.__metaPixelInitialized = true;
};

const trackMetaLead = (payload = {}) => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', payload);
    }
  } catch {}
};

export default function LandingPACV2() {
  useSeo({
    title: "Pompe à chaleur air/eau : devis & aides jusqu'à 14 999 € | RenoHab",
    description: "Installez une pompe à chaleur air/eau avec RenoHab : MaPrimeRénov' + CEE, TVA 5,5 %, pose par un artisan RGE QualiPAC. Devis gratuit et dossier d'aides monté pour vous.",
    path: "/pompe-a-chaleur",
    type: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Installation de pompe à chaleur air/eau",
      "serviceType": "Rénovation énergétique – pompe à chaleur",
      "provider": {
        "@type": "Organization",
        "name": "RenoHab",
        "url": "https://renohab.fr/"
      },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Étude, devis et installation de pompes à chaleur air/eau par des artisans RGE QualiPAC, avec montage des dossiers MaPrimeRénov' et CEE et TVA réduite à 5,5 %.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    },
  });
  const [shrink, setShrink] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [formModalTitle, setFormModalTitle] = useState('Bénéficiez de jusqu’à 14 999€ d’aides');
  const [formProductRef, setFormProductRef] = useState('');
  const [formModalSingleStep, setFormModalSingleStep] = useState(false);
  const [kelvinModalOpen, setKelvinModalOpen] = useState(false);
  const location = useLocation();
  const sheetUrl = process.env.REACT_APP_PAC_PRODUCTS_SHEET_URL || '';
  const { products, loading: productsLoading, error: productsError } = useSheetProducts(sheetUrl);
  const heroLogos = [
    { src: '/maprimerenov-gouv-fr-2020.png', alt: 'Logo MaPrimeRénov’' },
    { src: '/Logo_Anah.svg.png', alt: 'Logo ANAH' },
    { src: '/Marianne_logo.png', alt: 'Logo République Française' },
    { src: '/logo-qualibat.avif', alt: 'Label Qualibat' },
    { src: '/logo-RGE-artisant.avif', alt: 'Label RGE Artisan' },
  ];
  const heroLogoMarqueeCss = `
    @keyframes heroLogoMarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;
  
  const openFormModal = ({ title = 'Bénéficiez de jusqu’à 14 999€ d’aides', productRef = '', singleStep = false } = {}) => {
    setFormModalTitle(title);
    setFormProductRef(productRef);
    setFormModalSingleStep(singleStep);
    setFormModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeFormModal = () => {
    setFormModalOpen(false);
    setFormModalSingleStep(false);
    document.body.style.overflow = 'unset';
  };

  const openKelvinModal = () => {
    setKelvinModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeKelvinModal = () => {
    setKelvinModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    initMetaPixel();
  }, []);

  // --- ECOUTEUR KELVIN ---
  useEffect(() => {
    function handleKelvinEvent(event) {
      try {
        const allowedOrigin = "https://app.go-kelvin.com";
        if (typeof event.origin === "string" && !event.origin.startsWith(allowedOrigin)) return;

        const data = event?.data;
        if (!data || typeof data !== "object") return;

        const isLead =
          data.message === "kelvin:simulator:lead_created" ||
          data.type === "kelvin:simulator:lead_created";
        if (!isLead) return;

        if (window.__kelvin_lead_sent_pac) return; 
        const lead = data.payload || {};

        fetch("/api/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "kelvin",
            id_simulation: lead.id ?? "",
            created_at: lead.created_at ?? "",
            nom: lead.client?.last_name ?? "",
            prenom: lead.client?.first_name ?? "",
            email: lead.client?.email ?? "",
            telephone: lead.client?.phone_number ?? "",
            profil: lead.client?.ownership_status ?? "",
            type_residence: lead.client?.main_property ? "résidence principale" : "autre",
            adresse: lead.housing?.address ?? "",
            lien_simulation: lead.simulation_url ?? "",
          }),
        })
        .then(res => {
          console.log("Lead Kelvin PAC envoyé:", res.status);
          if (res.ok) {
            trackMetaLead({ source: 'kelvin-simulator', simulation_id: lead.id ?? '' });
          }
        })
        .catch(err => console.error("Erreur envoi Kelvin PAC:", err));

        try {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "kelvin_lead_created", payload: lead });
        } catch {}

        window.__kelvin_lead_sent_pac = true;
      } catch {}
    }

    window.addEventListener("message", handleKelvinEvent);
    return () => window.removeEventListener("message", handleKelvinEvent);
  }, []);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'landing_view', page: 'pac-landing-funnel' });
    } catch {}
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const modal = params.get('modal');
    if (modal === 'form' || modal === 'devis') {
      const titleParam = params.get('title');
      const productRefParam = params.get('productRef') || '';
      openFormModal({
        title: titleParam || (modal === 'form' ? 'Bénéficiez de jusqu’à 14 999€ d’aides' : 'Obtenir Un Devis'),
        productRef: productRefParam,
        singleStep: modal === 'form',
      });
    }
  }, [location.search]);

  return (
    <>
      <style>{heroLogoMarqueeCss}</style>
      <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      <header
        className={`sticky top-0 z-40 border-b border-gray-200 bg-white/70 backdrop-blur transition-all duration-300 ${
          shrink ? 'h-24' : 'h-36'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 h-full flex items-center justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="Accueil RenoHab">
            <img src="/RenoHabLogo.webp" alt="RenoHab" className={`transition-all duration-300 ${shrink ? 'h-24' : 'h-32'}`} />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/" className="text-gray-700 hover:text-emerald-700">
              Accueil
            </a>
            <button
              type="button"
              onClick={() => openFormModal()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Tester Votre Éligibilité
            </button>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-emerald-50 via-white to-sky-50 py-10 md:py-16 border-b border-emerald-100">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col-reverse items-center gap-8 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
              ACCOMPAGNEMENT PAC
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
              Obtenez jusqu’à{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent">
                14 999 €
              </span>{' '}
              d’aides publiques pour votre pompe à chaleur.
            </h1>
            <p className="text-base md:text-lg text-slate-600">
              RenoHab monte gratuitement votre dossier MaPrimeRénov’ + CEE, sélectionne un artisan RGE local et vous accompagne jusqu’à la pose.
            </p>
            <ul className="space-y-2 text-left text-sm md:text-base text-slate-600">
              <li className="flex items-start gap-2">
                <FiCheck className="mt-0.5 text-emerald-600" /> Financement basé sur les aides nationales.
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="mt-0.5 text-emerald-600" /> Artisans RGE audités par RenoHab.
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="mt-0.5 text-emerald-600" /> Rappel gratuit sous 24–48 h.
              </li>
            </ul>
            <div className="overflow-hidden relative pt-2 h-16">
              <div className="flex items-center gap-4 min-w-max" style={{ animation: 'heroLogoMarquee 18s linear infinite' }}>
                {[...heroLogos, ...heroLogos].map((logo, index) => (
                  <div key={`${logo.alt}-${index}`} className="flex items-center justify-center rounded-xl border border-emerald-100 bg-white/80 px-3 py-2 shadow-sm">
                    <img src={logo.src} alt={logo.alt} className="h-10 w-auto object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <button
                onClick={() => openFormModal()}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                Tester l’éligibilité
              </button>
              <button
                onClick={() => openFormModal({ title: 'Obtenir Un Devis', productRef: '' })}
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                Obtenir un devis
              </button>
            </div>
            <p className="text-xs text-slate-500">Rappel gratuit, sans engagement.</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={HeroPacImage}
              alt="Illustration Pompe à Chaleur"
              className="w-full h-auto max-w-xl rounded-[32px] shadow-card ring-1 ring-emerald-100 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-6xl px-4 py-10 md:py-20">
        {/* --- SECTION KELVIN RESTAURÉE --- */}
        <section className="rounded-3xl border border-emerald-100 bg-white/90 p-4 md:p-6 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">Simulation PAC</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Estimez votre projet en 2 minutes</h2>
              <p className="text-sm md:text-base text-slate-600 mt-1">
                Module Kelvin officiel – simulateur geste chauffage. Vos réponses sont utilisées uniquement pour préparer votre dossier.
              </p>
            </div>
            <div className="text-xs text-slate-500">
              ⚠️ Certains navigateurs bloquent les cookies tiers. Si le module ne s’affiche pas,
              <button
                type="button"
                onClick={() => window.open('https://app.go-kelvin.com/simulateur-geste/renohab/heating/new', '_blank')}
                className="text-emerald-600 underline ml-1"
              >
                ouvrez-le dans un nouvel onglet
              </button>
              .
            </div>
          </div>
          <div className="hidden md:block relative pb-[70%] rounded-3xl overflow-hidden ring-1 ring-emerald-100 shadow-lg">
            <iframe
              title="Simulateur PAC Kelvin"
              src="https://app.go-kelvin.com/simulateur-geste/renohab/heating/new"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allow="clipboard-write; fullscreen"
            />
          </div>
          <div className="md:hidden rounded-3xl border border-emerald-100 bg-emerald-50/60 p-4 space-y-3">
            <p className="text-sm text-slate-700">
              Pour une meilleure expérience sur mobile, ouvrez le simulateur Kelvin en plein écran.
            </p>
            <button
              type="button"
              onClick={openKelvinModal}
              className="w-full inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-700"
            >
              Ouvrir le simulateur
            </button>
          </div>
        </section>
        {/* ------------------------------ */}

        <section id="pac-form" className="hidden md:block">
            {/* Version Desktop "In-Page" du funnel */}
            <div className="bg-white rounded-3xl shadow-soft border border-gray-200/80 overflow-hidden p-6 md:p-10">
                <Funnel />
            </div>
        </section>

        {/* MODAL OPTIMISÉ MOBILE */}
        <AnimatePresence>
          {formModalOpen && (
            <FormModal onClose={closeFormModal}>
              <Funnel titleText={formModalTitle} productRef={formProductRef} contactOnly={formModalSingleStep} isMobileModal={true} />
            </FormModal>
          )}
        </AnimatePresence>
        {kelvinModalOpen && (
          <FullscreenModal onClose={closeKelvinModal}>
            <iframe
              title="Simulateur PAC Kelvin"
              src="https://app.go-kelvin.com/simulateur-geste/renohab/heating/new"
              className="w-full h-full border-0"
              allow="clipboard-write; fullscreen"
            />
          </FullscreenModal>
        )}

        <div className="mt-12 md:mt-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-slate-800 mb-8">
            Découvrez nos Pompes à Chaleur
          </h2>
          <ProductShowcase
            products={products}
            loading={productsLoading}
            error={productsError}
            onRequestForm={(ref) => openFormModal({ title: 'Obtenir Un Devis', productRef: ref })}
          />
        </div>

        <div className="mt-16">
          <ConfianceRenoHab />
        </div>
      </main>
      
      {/* Sticky Bottom CTA Mobile */}
      <div className="md:hidden fixed bottom-4 inset-x-0 px-4 z-30 pointer-events-none">
        <button
          onClick={() => openFormModal({ title: 'Obtenir Un Devis', productRef: '', singleStep: false })}
          className="pointer-events-auto w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 text-white font-semibold px-6 py-3 shadow-soft shadow-emerald-600/30 backdrop-blur-sm bg-opacity-95"
        >
          Demander mon devis gratuit
        </button>
      </div>
    </div>
    </>
  );
}

function FormModal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:bg-black/60 sm:p-4 h-[100dvh]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 hidden sm:block"
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-lg bg-white sm:rounded-3xl shadow-card overflow-hidden flex flex-col z-10"
      >
        <div className="flex justify-end p-4 absolute top-0 right-0 z-20">
          <button
            onClick={onClose}
            className="rounded-full bg-gray-100 p-2 text-slate-500 hover:bg-gray-200 hover:text-slate-800 transition-colors"
            aria-label="Fermer"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 pt-12 sm:p-8 sm:pt-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function FullscreenModal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/80">
      <div className="flex justify-end p-3">
        <button
          onClick={onClose}
          className="rounded-full bg-white/80 px-4 py-2 text-slate-700 font-semibold shadow hover:bg-white"
          aria-label="Fermer le simulateur"
        >
          Fermer
        </button>
      </div>
      <div className="flex-1 px-3 pb-3">
        <div className="h-full w-full rounded-2xl overflow-hidden bg-white shadow-card">{children}</div>
      </div>
    </div>
  );
}

function Funnel({ titleText = 'Bénéficiez jusqu’à 14 999€ d’aides', productRef = '', contactOnly = false, isMobileModal = false }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState('');
  const totalSteps = contactOnly ? 1 : 4;

  useEffect(() => {
    try {
      window.dataLayer = window.dataLayer || [];
      const stepMeta = FUNNEL_STEP_META[step];
      if (stepMeta) {
        window.dataLayer.push({
          event: 'funnel_step_view',
          step_number: step,
          step_name: stepMeta.label,
          step_context: stepMeta.context,
          product_ref: productRef || 'generic',
        });
      }
    } catch (err) {
      console.error('Erreur tracking funnel:', err);
    }
  }, [step, productRef]);

  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (scrollContainer) scrollContainer.scrollTop = 0;
  }, [step]);

  const handleSelect = (field, value) => {
    if (contactOnly) return;
    setFormData((prev) => ({ ...prev, [field]: value }));
    setStep((prev) => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = new FormData(e.currentTarget);
    const contactPayload = Object.fromEntries(form.entries());
    const finalPayload = { ...formData, ...contactPayload };

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'pac-landing-funnel',
          type: 'lead',
          context: 'funnel-final',
          payload: finalPayload,
        }),
      });

      if (!res.ok) throw new Error('Erreur réseau');
      trackMetaLead({ source: 'pac-landing-funnel' });
      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'lead_completed',
          category: 'Form',
          action: 'Submit',
          label: 'PAC Funnel',
        });
      } catch {}
      setOk(true);
    } catch {
      setError('Une erreur est survenue. Réessayez.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (contactOnly) return;
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  if (ok) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <div className="bg-emerald-100 p-4 rounded-full mb-6">
            <FiCheckCircle className="text-6xl text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Demande Envoyée !</h2>
        <p className="text-slate-600 mb-6">Un conseiller expert vous recontacte sous 24h pour finaliser votre projet.</p>
        <button onClick={() => window.location.reload()} className="text-emerald-600 font-semibold hover:underline">
            Retour à l'accueil
        </button>
      </div>
    );
  }

  // Titre Dynamique : Si Mobile et étape > 1, on affiche "Étape X/Y" pour gagner de la place
  // Sinon (Desktop ou Étape 1 mobile) on affiche le titre marketing complet
  const displayTitle = isMobileModal && step > 1 ? `Étape ${step}/${totalSteps}` : titleText;

  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-6">
        {/* Application du dégradé de couleurs comme demandé */}
        <h2 className={`font-bold tracking-tight mb-2 drop-shadow-sm ${isMobileModal ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
          <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent font-['Poppins','Segoe_UI','sans-serif']">
            {displayTitle}
          </span>
        </h2>
        
        {!contactOnly && !isMobileModal && (
          <p className="text-sm text-slate-500">
            Étape {step} sur {totalSteps}
          </p>
        )}
        {isMobileModal && step === 1 && !contactOnly && (
             <p className="text-sm text-slate-500">Vérifiez votre éligibilité en 3 clics.</p>
        )}
      </div>

      <div className="flex-1">
        {contactOnly ? (
          <StepContact
            key="contact-only"
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
            productRef={productRef}
            variant="minimal"
            titleOverride={titleText}
            isMobile={isMobileModal}
          />
        ) : (
          <AnimatePresence mode="wait">
            {step === 1 && (
              <StepChauffage key="step1" onSelect={(val) => handleSelect('energie_actuelle', val)} isMobile={isMobileModal} />
            )}
            {step === 2 && (
              <StepSurface key="step2" onSelect={(val) => handleSelect('surface', val)} onBack={handleBack} isMobile={isMobileModal} />
            )}
            {step === 3 && (
              <StepCodePostal key="step3" onSelect={(val) => handleSelect('cp', val)} onBack={handleBack} isMobile={isMobileModal} />
            )}
            {step === 4 && (
              <StepContact
                key="step4"
                onSubmit={handleSubmit}
                onBack={handleBack}
                loading={loading}
                error={error}
                productRef={productRef}
                isMobile={isMobileModal}
              />
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

function StepChauffage({ onSelect, isMobile }) {
  const options = [
    { label: 'Fioul', icon: <FiDroplet /> },
    { label: 'Gaz', icon: <FiCloud /> },
    { label: 'Élec.', icon: <FiZap /> },
    { label: 'Bois', icon: <FiBox /> },
    { label: 'Autre', icon: <FiHelpCircle /> },
  ];

  return (
    <motion.div variants={fadeInUp} initial="hidden" animate="visible" exit="exit" className="h-full flex flex-col">
      <StepHeader
        icon={<FiThermometer />}
        title="Chauffage actuel ?"
        subtitle="Pour calculer vos économies."
        compact={isMobile}
      />
      <div className={`mt-6 grid ${isMobile ? 'grid-cols-2 gap-3' : 'grid-cols-3 gap-4'}`}>
        {options.map((opt) => (
          <ChoiceCard 
            key={opt.label} 
            icon={opt.icon} 
            label={opt.label} 
            onClick={() => onSelect(opt.label)} 
            compact={isMobile}
          />
        ))}
      </div>
    </motion.div>
  );
}

function StepSurface({ onSelect, onBack, isMobile }) {
  const options = ['< 70 m²', '70–100 m²', '100–130 m²', '130–160 m²', '> 160 m²'];
  return (
    <motion.div variants={fadeInUp} initial="hidden" animate="visible" exit="exit" className="h-full flex flex-col">
      <StepHeader
        icon={<FiHome />}
        title="Surface du logement ?"
        subtitle="Pour dimensionner la PAC."
        compact={isMobile}
      />
      <div className={`mt-6 grid ${isMobile ? 'grid-cols-2 gap-3' : 'grid-cols-3 gap-4'}`}>
        {options.map((label) => (
          <ChoiceCard key={label} label={label} onClick={() => onSelect(label)} compact={isMobile} />
        ))}
      </div>
      <div className="mt-auto pt-6">
        <BackButton onClick={onBack} />
      </div>
    </motion.div>
  );
}

function StepCodePostal({ onSelect, onBack, isMobile }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const cp = new FormData(e.currentTarget).get('cp');
    if (cp) {
      onSelect(cp);
    }
  };

  return (
    <motion.div variants={fadeInUp} initial="hidden" animate="visible" exit="exit">
      <StepHeader
        icon={<FiMapPin />}
        title="Code postal ?"
        subtitle="Pour vérifier la zone d'intervention."
        compact={isMobile}
      />
      <form onSubmit={handleSubmit} className="mt-6 w-full space-y-4">
        <Field label="Code postal">
          <Input
            name="cp"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{5}"
            maxLength={5}
            required
            placeholder="Ex: 75001"
            autoFocus
          />
        </Field>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 text-white font-bold text-lg shadow hover:bg-emerald-700 active:scale-95 transition-transform"
        >
          Valider <FiArrowRight className="w-5 h-5" />
        </button>
      </form>
      <div className="mt-4">
        <BackButton onClick={onBack} />
      </div>
    </motion.div>
  );
}

function StepContact({ onSubmit, onBack, loading, error, productRef = '', variant = 'full', titleOverride, isMobile }) {
  const isMinimal = variant === 'minimal';
  const title = isMinimal ? 'Vos coordonnées' : titleOverride || 'Dernière étape';
  
  return (
    <motion.div variants={fadeInUp} initial="hidden" animate="visible" exit="exit">
      <StepHeader
        icon={<FiUser />}
        title={title}
        subtitle="Pour recevoir votre étude gratuite."
        compact={isMobile}
      />
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        {productRef && <input type="hidden" name="ref_produit" value={productRef} />}
        <div className="grid grid-cols-2 gap-3">
          <Field label="Prénom"><Input name="prenom" autoComplete="given-name" required /></Field>
          <Field label="Nom"><Input name="nom" autoComplete="family-name" required /></Field>
        </div>
        <Field label="Téléphone">
          <Input
            name="telephone"
            type="tel"
            inputMode="tel"
            pattern="\\+?[0-9]{9,14}"
            maxLength={14}
            autoComplete="tel"
            required
          />
        </Field>
        {!isMinimal && <Field label="Email (optionnel)"><Input type="email" name="email" autoComplete="email" /></Field>}
        {!isMinimal && <Field label="Message (optionnel)"><Textarea name="message" rows={isMobile ? 2 : 3} /></Field>}

        {error && <p className="text-red-600 text-sm bg-red-50 p-2 rounded">{error}</p>}

        <div className="pt-2">
            <button
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 text-white font-bold text-lg shadow-lg hover:bg-emerald-700 disabled:opacity-60 active:scale-95 transition-transform"
            >
              {loading ? 'Envoi…' : <>Recevoir mon étude <FiArrowRight className="w-5 h-5" /></>}
            </button>
        </div>
        
        {onBack && !isMinimal && (
            <div className="text-center">
                <button type="button" onClick={onBack} className="text-slate-400 text-sm hover:text-slate-600 py-2">
                    Retour
                </button>
            </div>
        )}
        
        <p className="text-[10px] text-slate-400 text-center leading-tight">
          Vos données sont confidentielles. Pas de spam.
        </p>
      </form>
    </motion.div>
  );
}

// --- COMPOSANTS UI OPTIMISÉS ---

function StepHeader({ icon, title, subtitle, compact }) {
  return (
    <div className={`flex items-center gap-3 ${compact ? 'mb-2' : 'mb-4'}`}>
      {!compact && (
          <div className="flex-shrink-0 p-3 rounded-full bg-emerald-50 text-emerald-600 text-2xl">
            {icon}
          </div>
      )}
      <div className="text-left">
        <h2 className={`font-bold text-slate-800 ${compact ? 'text-lg' : 'text-2xl'}`}>{title}</h2>
        {subtitle && <p className={`text-slate-500 ${compact ? 'text-xs' : 'text-base'}`}>{subtitle}</p>}
      </div>
    </div>
  );
}

function ChoiceCard({ icon, label, onClick, compact }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full rounded-xl border-2 border-slate-100 bg-white hover:border-emerald-500 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-200 active:scale-95 ${compact ? 'p-3' : 'p-6'}`}
    >
      <div className="flex flex-col items-center text-center">
        {icon && <div className={`text-emerald-600 mb-2 ${compact ? 'text-2xl' : 'text-4xl'}`}>{icon}</div>}
        <span className={`font-semibold text-slate-700 group-hover:text-emerald-800 ${compact ? 'text-sm' : 'text-lg'}`}>{label}</span>
      </div>
    </button>
  );
}

function BackButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors"
    >
      <FiArrowLeft className="w-4 h-4" /> Étape précédente
    </button>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 ml-1">
        {label}
      </label>
      {children}
    </div>
  );
}

// IMPORTANT : text-base (16px) empêche le zoom automatique sur iOS
const inputBase =
  'w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition shadow-sm placeholder-slate-400';

function Input(props) {
  return <input {...props} className={inputBase} />;
}

function Textarea(props) {
  return <textarea {...props} className={inputBase} />;
}

// (Les composants ProductShowcase, buildProductSpecs, etc. restent inchangés pour la lisibilité mais sont inclus dans l'export final implicitement si besoin, ici je les remets pour être complet et éviter les erreurs de référence)

function ProductShowcase({ products, loading, error, onRequestForm }) {
    // ... (Code identique à votre version précédente) ...
    const [expandedCard, setExpandedCard] = useState(null);
    const [brandFilter, setBrandFilter] = useState('all');
    const [priceSort, setPriceSort] = useState('default');
    const [visibleCount, setVisibleCount] = useState(6);
    const fallbackProducts = [
      {
        title: 'Atlantic Alfea Extensa A.I.',
        description: 'Idéale pour les surfaces de 100 à 130 m² en remplacement de chaudière.',
        photo: 'https://placehold.co/400x300/e2e8f0/334155?text=PAC+Atlantic',
        basePrice: '13 900 €',
        financedPrice: '1 €*',
        reference: 'ATL-EXT-100',
      },
      {
        title: 'Saunier Duval GeniaSet',
        description: 'Performante et silencieuse, parfaite pour les grandes surfaces.',
        photo: 'https://placehold.co/400x300/e2e8f0/334155?text=PAC+Saunier+Duval',
        basePrice: '14 200 €',
        financedPrice: '1 €*',
        reference: 'SD-GENIA-130',
      },
      {
        title: 'Daikin Altherma 3 R',
        description: 'Solution compacte adaptée aux espaces réduits, rendement élevé.',
        photo: 'https://placehold.co/400x300/e2e8f0/334155?text=PAC+Daikin',
        basePrice: '15 000 €',
        financedPrice: '1 €*',
        reference: 'DAI-AL3R-90',
      },
    ];
  
    const displayProducts = products.length ? products : fallbackProducts;
    const normalizedProducts = displayProducts.map((p) => enhanceProduct(p));
    const availableBrands = BRAND_FILTER_OPTIONS.filter(({ key }) =>
      normalizedProducts.some((p) => normalizeBrandKey(p.brand) === key)
    );
  
    const filteredProducts = normalizedProducts.filter((p) => {
      if (brandFilter !== 'all' && normalizeBrandKey(p.brand) !== normalizeBrandKey(brandFilter)) return false;
      return true;
    });
  
    const sortedProducts = [...filteredProducts];
    if (priceSort === 'asc') {
      sortedProducts.sort((a, b) => (a.numericPrice ?? Infinity) - (b.numericPrice ?? Infinity));
    } else if (priceSort === 'desc') {
      sortedProducts.sort((a, b) => (b.numericPrice ?? -Infinity) - (a.numericPrice ?? -Infinity));
    }
  
    const visibleProducts = sortedProducts.slice(0, visibleCount);
    const hasMore = visibleCount < sortedProducts.length;
  
    return (
      <div className="space-y-4">
        {loading && <p className="text-sm text-slate-500 text-center">Chargement des offres…</p>}
        {error && (
          <p className="text-sm text-red-500 text-center">
            Impossible de charger la Google Sheet (publiez-la sur le web).<br />
            <span className="text-xs opacity-80">{error.message}</span>
          </p>
        )}
        {!loading && !error && !products.length && (
          <p className="text-sm text-slate-500 text-center">Ajoutez vos produits dans la Google Sheet pour remplacer cette sélection.</p>
        )}
  
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/90 p-4 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <label className="text-sm font-medium text-slate-600">
              Filtrer par marque
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                <option value="all">Toutes les marques</option>
                {availableBrands.map(({ label }) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-slate-600">
              Trier par prix
              <select
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                <option value="default">Ordre d’origine</option>
                <option value="asc">Croissant</option>
                <option value="desc">Décroissant</option>
              </select>
            </label>
          </div>
          <p className="text-sm text-slate-500">
            {sortedProducts.length} offre{sortedProducts.length > 1 ? 's' : ''} affichée{sortedProducts.length > 1 ? 's' : ''}
          </p>
        </div>
  
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((p, index) => {
            const photo = normalizePhotoUrl(p.photo);
            const brandLogo = normalizePhotoUrl(p.logo);
            const description = p.description || p.desc || '';
            const ratingValue = clampRating(p.rating);
            const cardKey = p.reference || p.title || `product-${index}`;
            const isExpanded = expandedCard === cardKey;
            const specs = buildProductSpecs(p);
            const productRef = p.reference || p.title || '';
            const slug = p.slug || buildProductSlug(p);
            const handleCardClick = (e) => {
              if (e.defaultPrevented) return;
              const target = e.target;
              if (target.closest('button') || target.closest('a')) return;
              window.location.href = `/pompe-a-chaleur/${slug}`;
            };
            return (
              <article
                key={cardKey}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-card"
                onClick={handleCardClick}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 opacity-80" />
                <div className="relative">
                  <a href={`/pompe-a-chaleur/${slug}`} className="block h-64 overflow-hidden bg-slate-100 sm:h-72">
                    {photo ? (
                      <img src={photo} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-slate-400 text-sm">Image indisponible</div>
                    )}
                  </a>
                  {brandLogo && (
                    <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-3 py-1 shadow-md ring-1 ring-black/5">
                      <img src={brandLogo} alt={p.title ? `${p.title} logo` : 'Logo marque'} className="h-6 w-auto object-contain" loading="lazy" />
                    </div>
                  )}
                </div>
  
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase text-emerald-500">{p.reference || 'Réf. N/A'}</p>
                      <h4 className="text-lg font-semibold text-slate-900">{p.title}</h4>
                      {ratingValue > 0 && (
                        <div className="mt-1 flex items-center gap-1 text-amber-400">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <span key={starIndex} className={starIndex < ratingValue ? 'text-amber-500' : 'text-slate-300'}>
                              ★
                            </span>
                          ))}
                          <span className="ml-1 text-xs font-medium text-slate-500">{ratingValue}/5</span>
                        </div>
                      )}
                    </div>
                  </div>
  
                  {description && (
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isExpanded ? 'max-h-[360px] opacity-100' : 'max-h-16 opacity-90'
                      }`}
                    >
                      <p className="text-sm text-slate-600 whitespace-pre-line">{description}</p>
                    </div>
                  )}
  
                  <button
                    type="button"
                    onClick={() => setExpandedCard((prev) => (prev === cardKey ? null : cardKey))}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                    {isExpanded ? 'Masquer les détails' : 'Voir les détails'}
                    <FiArrowDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
  
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {!!specs.length && (
                      <dl className="grid gap-3 rounded-2xl bg-slate-50/80 p-4 text-sm text-slate-700">
                        {specs.map((spec) => (
                          <React.Fragment key={spec.label}>
                            <dt className="flex items-center gap-2 font-semibold text-slate-900">
                              {spec.icon && <spec.icon className={`h-4 w-4 ${spec.highlight ? 'text-emerald-500' : 'text-slate-500'}`} />}
                              {spec.label}
                            </dt>
                            <dd className={`${spec.highlight ? 'text-emerald-600 text-base font-bold' : 'text-slate-600'}`}>{spec.value}</dd>
                          </React.Fragment>
                        ))}
                      </dl>
                    )}
                  </div>
  
                  <div className="mt-auto flex flex-col gap-3 border-t border-slate-100 pt-4 text-sm text-slate-600">
                    <a
                      href={`/pompe-a-chaleur/${slug}`}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-emerald-500 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-center"
                    >
                      Voir la fiche produit
                    </a>
                    {p.basePrice && (
                      <div className="flex items-center justify-between">
                        <span>Prix public</span>
                        <span className="text-base font-semibold text-slate-900">{p.basePrice}</span>
                      </div>
                    )}
                    {p.financedPrice && (
                      <button
                        type="button"
                        onClick={() => onRequestForm?.(productRef)}
                        className="flex w-full items-center justify-between gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-white shadow focus:outline-none focus:ring-2 focus:ring-emerald-400 hover:bg-emerald-700"
                      >
                        <span className="text-sm font-semibold">Si Éligible Au Financement</span>
                        <span className="text-lg font-bold">{p.financedPrice}</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => onRequestForm?.(productRef)}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-emerald-500 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      Obtenir Un Devis Pour Livraison/Installation
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {hasMore && (
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              Afficher plus de PAC
            </button>
          </div>
        )}
      </div>
    );
  }

// Helpers pour les produits (inchangés)
function buildProductSpecs(p) {
  return [
    { label: 'Capacité de refroidissement', value: p.cooling, icon: SnowflakeIcon },
    { label: 'Capacité de chauffage', value: p.heating, icon: FlameIcon },
    { label: 'Fluide de refroidissement', value: p.fluid, icon: WaveIcon },
    { label: 'Classe énergétique', value: p.energyClass, icon: SparklesIcon, highlight: true },
  ].filter((item) => item.value);
}

function enhanceProduct(p = {}) {
  const numericPrice = parseEuroPrice(p.basePrice);
  const brand =
    detectBrandFromLogo(p.logo) ||
    (p.brand || extractBrandFromReference(p) || '').trim();
  return { ...p, numericPrice, brand, slug: buildProductSlug(p) };
}

function parseEuroPrice(value = '') {
  if (!value) return null;
  const cleaned = value.toString().replace(/[^0-9.,]/g, '').replace(',', '.');
  const numeric = Number.parseFloat(cleaned);
  return Number.isNaN(numeric) ? null : numeric;
}

function extractBrandFromReference(p) {
  if (p.brand) return p.brand;
  if (p.reference) return p.reference.split('-')[0];
  if (p.title) return p.title.split(' ')[0];
  return '';
}

function detectBrandFromLogo(url = '') {
  if (!url) return '';
  const lower = url.toLowerCase();
  if (lower.includes('lg')) return 'LG';
  if (lower.includes('ariston')) return 'Ariston';
  if (lower.includes('atlantic')) return 'Atlantic';
  if (lower.includes('mitsubishi')) return 'Mitsubishi';
  if (lower.includes('ferroli')) return 'Ferroli';
  return '';
}

function clampRating(value) {
  const numeric = Math.round(Number(String(value || '').replace(',', '.')));
  if (Number.isNaN(numeric)) return 0;
  return Math.min(5, Math.max(0, numeric));
}

function normalizeSlug(str = '') {
  return (
    str
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'produit'
  );
}

function buildProductSlug(p = {}) {
  return normalizeSlug(p.reference || p.title || '');
}

const SnowflakeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v18M3 12h18" />
    <path d="m5.64 5.64 12.72 12.72M5.64 18.36 18.36 5.64" />
  </svg>
);

const FlameIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2s3 3 3 6-3 4-3 4-3-1-3-4 3-6 3-6z" />
    <path d="M12 12c-3 0-5 2.5-5 5.5S9 23 12 23s5-2.5 5-5.5S15 12 12 12z" />
  </svg>
);

const WaveIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
    <path d="M2 11c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
  </svg>
);

const SparklesIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v4M12 18v4M4 12H0m24 0h-4" />
    <path d="m5.64 5.64-2.64-2.64m18 18-2.64-2.64m-12.72 0-2.64 2.64m18-18-2.64 2.64" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

function normalizePhotoUrl(url = "") {
  if (!url) return "";
  const driveFileMatch = url.match(/https?:\/\/drive\.google\.com\/file\/d\/([^/]+)/);
  if (driveFileMatch) {
    return `https://drive.google.com/uc?export=download&id=${driveFileMatch[1]}`;
  }
  const driveOpenMatch = url.match(/https?:\/\/drive\.google\.com\/open\?id=([^&]+)/);
  if (driveOpenMatch) {
    return `https://drive.google.com/uc?export=download&id=${driveOpenMatch[1]}`;
  }
  const driveUcMatch = url.match(/https?:\/\/drive\.google\.com\/uc\?id=([^&]+)/);
  if (driveUcMatch) {
    const base = "https://drive.google.com/uc";
    const params = new URLSearchParams({ export: "download", id: driveUcMatch[1] });
    return `${base}?${params.toString()}`;
  }
  return url;
}
