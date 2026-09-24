import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
    FiMenu, FiX, FiPhoneCall, FiClipboard, FiDollarSign, FiTool, FiCheckSquare,
    FiChevronDown, FiAward, FiPercent, FiMapPin, FiInfo, FiArrowRight,
    FiBarChart2, FiZap // Ajouté pour la vidéo
} from "react-icons/fi";
import AdresseAutocomplete from "./AdresseAutocomplete";
import { Link } from 'react-router-dom';
import useSeo from "./useSeo";
import ArticleCard from "./ArticleCard";
import { ARTICLES } from "./blog/articles";

// react-snap pré-rend la page avec l'UA "ReactSnap" : on gèle alors les états
// pilotés par des effets (mobile, iframe…) pour que le HTML statique corresponde
// exactement au premier rendu client → hydratation sans erreur ni re-rendu complet.
const IS_PRERENDER = typeof navigator !== "undefined" && navigator.userAgent === "ReactSnap";

// Déclencheur d'apparition des sections : dès que la section entre dans les 85 %
// hauts de l'écran, quelle que soit sa hauteur (un seuil en % de la section
// bloquait les sections plus hautes que l'écran → contenu invisible).
const SECTION_VIEWPORT = { once: true, margin: "0px 0px -15% 0px" };
const HOME_ARTICLES_COUNT = 6;


// --- Configuration & Data ---
// (Gardez vos données existantes: renovationData, projectSteps, financialAidsBanner)
const renovationData = {
    "Isolation et énergies": {
      description: "Boostez l'efficacité énergétique et le confort thermique. Isolation performante et énergies renouvelables.",
      imageUrl: "/isolation.webp", // REMPLACEZ
      details: `
        <h3 class="text-lg font-semibold text-emerald-600 mt-4 mb-2">Isolation Thermique Avancée</h3>
        <p class="text-gray-600 mb-3">ITI, ITE, combles, planchers bas : nous utilisons des matériaux écologiques haute performance (laine de bois, ouate, polyuréthane) pour des économies maximales. Depuis le 1er septembre 2026, l’isolation se finance via la rénovation d’ampleur MaPrimeRénov’, les primes CEE et l’éco-PTZ (TVA 5,5 %).</p>
        <h3 class="text-lg font-semibold text-emerald-600 mt-4 mb-2">Fenêtres Haute Performance</h3>
        <p class="text-gray-600 mb-3">Double/Triple vitrage (PVC, Alu, Bois) pour stopper les déperditions et améliorer le confort acoustique. Aides : primes CEE, éco-PTZ (jusqu’à 7 000 €) et TVA 5,5 % — hors MaPrimeRénov’ par geste depuis le 1er septembre 2026.</p>
        <h3 class="text-lg font-semibold text-emerald-600 mt-4 mb-2">Autoconsommation Solaire</h3>
        <p class="text-gray-600">Produisez votre électricité verte avec des panneaux photovoltaïques. Réduisez vos factures et gagnez en autonomie : TVA à 5,5 % jusqu’à 9 kWc depuis octobre 2025.</p>
      `
    },
    "Chauffage et eau chaude": { // Shortened title
      description: "Systèmes de chauffage et production d'eau chaude nouvelle génération : confortables, économiques, écologiques.",
      imageUrl: "/chauffage.webp", // REMPLACEZ
      details: `
        <h3 class="text-lg font-semibold text-sky-600 mt-4 mb-2">Pompes à Chaleur (PAC)</h3>
        <p class="text-gray-600 mb-3">Air-Air, Air-Eau, Géothermique : utilisez les calories gratuites de l'environnement. Très faible coût d'usage. MaPrimeRénov’ jusqu’à 5 000 € (air/eau) ou 11 000 € (géothermie), cumulable avec une prime CEE bonifiée pour les modèles agréés depuis septembre 2026.</p>
        <h3 class="text-lg font-semibold text-sky-600 mt-4 mb-2">Chauffage Biomasse</h3>
        <p class="text-gray-600 mb-3">Chaudières à granulés ou poêles à bois modernes pour un chauffage renouvelable et performant. Aides : primes CEE bonifiées et éco-PTZ (hors MaPrimeRénov’ par geste depuis 2026).</p>
        <h3 class="text-lg font-semibold text-sky-600 mt-4 mb-2">Eau Chaude Sanitaire (ECS) Optimisée</h3>
        <p class="text-gray-600">Chauffe-eau thermodynamique ou solaire : des solutions écologiques pour réduire drastiquement votre consommation. Prime CEE fortement bonifiée jusqu’au 31 décembre 2026 (compensation de leur sortie de MaPrimeRénov’).</p>
      `
    },
    "Ventilation et qualité d'air": { // Shortened title
      description: "Respirez un air sain et maîtrisez votre consommation grâce à une ventilation et une régulation intelligentes.",
      imageUrl: "/ventilation.webp", // REMPLACEZ
      details: `
        <h3 class="text-lg font-semibold text-amber-600 mt-4 mb-2">Ventilation Mécanique Contrôlée (VMC)</h3>
        <p class="text-gray-600 mb-3">Essentielle pour un air renouvelé et sans humidité. VMC double flux avec récupération de chaleur pour optimiser l'énergie.</p>
        <h3 class="text-lg font-semibold text-amber-600 mt-4 mb-2">Régulation Thermique Intelligente</h3>
        <p class="text-gray-600">Thermostats connectés, programmables, robinets thermostatiques : pilotez votre confort pièce par pièce et réalisez des économies.</p>
      `
    },
};

const projectSteps = [
    { icon: FiPhoneCall, title: "1. Contact & Découverte", description: "Échange initial pour cerner vos ambitions et besoins énergétiques." },
    { icon: FiClipboard, title: "2. Audit Énergétique", description: "Visite technique et diagnostic précis par votre Accompagnateur Rénov'." },
    { icon: FiDollarSign, title: "3. Plan d'Action & Aides", description: "Stratégie de travaux personnalisée et optimisation des financements (MaPrimeRénov', CEE...)."},
    { icon: FiTool, title: "4. Lancement Travaux", description: "Coordination et suivi avec nos artisans partenaires certifiés RGE." },
    { icon: FiCheckSquare, title: "5. Validation & Suivi", description: "Vérification post-travaux, conformité et accompagnement long terme." },
];

const financialAidsBanner = [
    "Rénovation d'ampleur : jusqu'à 80 % de vos travaux financés par MaPrimeRénov'.",
    "Pompe à chaleur : MaPrimeRénov' + prime CEE, jusqu'à 90 % du coût pour les ménages très modestes.",
    "Financez votre reste à charge à 0 % avec l'Éco-PTZ : jusqu'à 50 000 € sur 20 ans.",
    "TVA à 5,5 % sur la rénovation énergétique, PAC air/air réversible incluse depuis juillet 2026.",
    "RenoHab : votre Accompagnateur Rénov' agréé pour maximiser toutes les aides.",
];
const HERO_VIDEO_SRC = "/hero-renohab-2025.mp4?v=2";
const HERO_POSTER    = "/background-poster.webp?v=2";

// --- Component ---
const Home = () => {
    useSeo({
        title: "Rénovation énergétique & DPE : jusqu'à 90 % d'aides | RenoHab",
        description: "RenoHab, Accompagnateur Rénov' agréé : audit énergétique, DPE, MaPrimeRénov', CEE, éco-PTZ et pompe à chaleur. Aides à jour des règles du 1er septembre 2026 : on monte vos dossiers et coordonnons des artisans RGE, partout en France.",
        path: "/",
        type: "website",
    });
    const [selectedWorkKey, setSelectedWorkKey] = useState(null);
    const [currentAidIndex, setCurrentAidIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showStickyHeader, setShowStickyHeader] = useState(false);
    const [formSubmitting, setFormSubmitting] = useState(false); // For form feedback
    const [showVideoMobile, setShowVideoMobile] = useState(false);
const [showKelvinIframe, setShowKelvinIframe] = useState(false);
const [selectedAddress, setSelectedAddress] = useState(""); 
const kelvinRef = useRef(null);




    const heroRef = useRef(null);
    const mainContentRef = useRef(null); // Ref for main content area parallax

    // --- Scroll Animations ---
    const { scrollYProgress: scrollYProgressHero } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroBgScale = useTransform(scrollYProgressHero, [0, 1], [1, 1.3]); // Zoom effect on hero bg
    const heroOpacity = useTransform(scrollYProgressHero, [0, 0.6, 0.9], [1, 1, 0]); // Fade out hero content
    const heroY = useTransform(scrollYProgressHero, [0, 1], ["0%", "30%"]); // Parallax effect for hero content
    
const [isMobile, setIsMobile] = useState(false);
// true une fois monté côté client (jamais pendant le pré-rendu) : permet d'afficher
// la vidéo desktop uniquement après hydratation, avec un HTML initial identique partout.
const [mounted, setMounted] = useState(false);

useEffect(() => {
  if (IS_PRERENDER) return;
  setMounted(true);
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile(); // initial check
  window.addEventListener('resize', checkMobile);

  return () => window.removeEventListener('resize', checkMobile);
}, []);

    // --- Effects ---
    useEffect(() => { // Scroll Listener for Sticky Header
        const mainEl = mainContentRef.current; // Use main content ref start
        if (!mainEl) return;

        const stickyThreshold = mainEl.offsetTop - 80; // Show sticky header just before main content starts (adjust offset)

        const handleScroll = () => {
            const currentPosition = window.scrollY || window.pageYOffset;
            window.requestAnimationFrame(() => {
                setShowStickyHeader(currentPosition > stickyThreshold);
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Le simulateur Kelvin (iframe tierce) se charge au clic, plus au défilement :
    // en se chargeant, l'iframe prend le focus et ramenait brutalement la page vers
    // lui (impossible d'atteindre le bas de page), et il pesait sur le chargement initial.
    const launchKelvin = () => setShowKelvinIframe(true);


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

      if (window.__kelvin_lead_sent) return; // anti-doublon
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
      }).catch(() => {});

      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "kelvin_lead_created", payload: lead });
      } catch {}

      window.__kelvin_lead_sent = true;
    } catch {}
  }

  window.addEventListener("message", handleKelvinEvent);
  return () => window.removeEventListener("message", handleKelvinEvent);
}, []);


      
      
      
    useEffect(() => { // Body scroll lock for mobile menu
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);
    
      
    // --- Handlers ---
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        if (targetId === 'kelvin' || targetId === 'simulator') setShowKelvinIframe(true);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const stickyHeaderHeight = 80; // Adjust if header height changes
            const offset = stickyHeaderHeight + 30; // Extra space below header
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

            const performScroll = () => {
                window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
            };

            if (isMenuOpen) {
                setIsMenuOpen(false);
                // Use setTimeout to ensure menu is closed *before* scrolling starts
                setTimeout(performScroll, 350); // Match menu transition duration
            } else {
                performScroll();
            }
        }
    };

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitting(true);
      
        try {
          const formData = {
            prenom: e.target.prenom.value,
            nom: e.target.nom.value,
            email: e.target.email.value,
            whatsapp: e.target.whatsapp.value,
            residence_type: e.target.residence_type.value,
            adresse_bien: selectedAddress || e.target.adresse_bien.value,
          };
      
          const response = await fetch(`/api/submit`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          });
          console.log("Code HTTP:", response.status);
          const text = await response.text();
          console.log("Réponse brute:", text);
      
          if (!response.ok) {
            throw new Error("Erreur HTTP: " + response.status);
          }
      
          e.target.reset();
          alert("Merci ! Votre demande a bien été envoyée. Nous vous recontacterons bientôt.");
          window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "form_lead_sent"
});
console.log("✅ form_lead_sent envoyé à GA4");
        } catch (error) {
          console.error("Erreur capturée:", error);
          alert("Erreur lors de l'envoi du formulaire.");
        } finally {
          setFormSubmitting(false);
        }
      };
      

    // --- Animation Variants ---
    // Courbes d'easing fortes (cf. Emil Kowalski) : plus de punch que les easings CSS natifs.
    const EASE_OUT = [0.23, 1, 0.32, 1];      // entrées : rapide puis se pose
    const EASE_IN_OUT = [0.77, 0, 0.175, 1];  // mouvements sur écran
    const cardHoverEffect = { y: -4, transition: { duration: 0.2, ease: EASE_OUT } };
    const fadeInUp = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } }
    };
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };
    const mobileMenuVariant = {
        hidden: { opacity: 0, y: "-100%" },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE_OUT } },
        exit: { opacity: 0, y: "-100%", transition: { duration: 0.2, ease: EASE_IN_OUT } }
    };
    const detailsFadeIn = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] } },
        exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] } }
    };


    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 font-sans text-gray-800 antialiased font-body">

            {/* === Section Héro === */}
<section id="hero" ref={heroRef} className="relative h-[100vh] flex flex-col overflow-hidden text-white">
{/* OPTIMISATION : Utilisation d'images responsives et séparation de l'animation */}
<motion.div 
    className="absolute inset-0 z-0"
    // On applique l'animation de parallaxe uniquement sur le conteneur, pas sur l'image directement.
    style={isMobile ? {} : { scale: heroBgScale }}
>
    <img
        // Image par défaut pour les anciens navigateurs
        src="/hero-home-desktop.webp" 
        
        // Indique au navigateur les différentes tailles disponibles
        srcSet="/hero-home-mobile.webp 640w,
                /hero-home-tablet.webp 1024w,
                /hero-home-desktop.webp 1920w"

        // Aide le navigateur à choisir la bonne image
        sizes="(max-width: 640px) 640px,
               (max-width: 1024px) 1024px,
               1920px"

        alt="Maison rénovée - RenoHab"
        className="w-full h-full object-cover"
        
        // Attributs pour la performance
        loading="eager"
        width="1920"
        height="1080"
    />
</motion.div>


    {/* Optimized Gradient Overlay */}
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent"></div>

    {/* Content Wrapper */}
<motion.div
    className="relative container mx-auto flex flex-col h-full px-4 sm:px-6 lg:px-8 z-20"
    style={isMobile ? {} : { y: heroY, opacity: heroOpacity }}
>

        {/* Top Nav / Logo */}
        <div className="flex justify-between items-center pt-6 md:pt-8">
            <img src="/RenoHabLogo.webp" alt="RenoHab Logo" className="h-60 md:h-72 w-auto drop-shadow-lg" />
<nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
  {/* Ancres vers sections de la home */}
  {['Simulateur', 'Réglementation 2026', 'Travaux', 'Aides', 'Accompagnement', 'Ressources'].map((item, index) => {
    const targetIds = ['simulator', 'reglementation-2026', 'renovation-types', 'financial-aids', 'project-steps', 'ressources'];
    const targetId = targetIds[index];
    return (
      <a
        key={item}
        href={`#${targetId}`}
        onClick={(e) => handleSmoothScroll(e, targetId)}
        className="text-lg font-medium pb-1 border-b-2 border-transparent hover:border-emerald-400 hover:text-emerald-100 transition-all duration-300 ease-in-out"
      >
        {item}
      </a>
    );
  })}

  {/* Lien page devis PAC */}
  <Link
    to="/pompe-a-chaleur"
    className="ml-2 inline-flex items-center px-4 py-2 rounded-full bg-white text-emerald-700 font-semibold shadow hover:shadow-md hover:bg-emerald-50 transition"
  >
    Devis PAC
  </Link>
</nav>


            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="Ouvrir le menu">
                    <FiMenu size={30} />
                </button>
            </div>
        </div>

        {/* Hero Text Content */}
        <div className="flex-grow flex flex-col justify-center text-center items-center pb-20 md:pb-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 md:mb-6 leading-tight drop-shadow-xl font-display">
                Votre Rénovation Énergétique,
                <br className="hidden md:block" /> <span className="text-emerald-400">Simplifiée & Financée.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90 mb-8 md:mb-10">
                Atteignez la performance énergétique, augmentez la valeur de votre bien et réduisez vos factures avec RenoHab, votre Accompagnateur Rénov' agréé.
            </p>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
                <a
                    href="#audit-request"
                    onClick={(e) => handleSmoothScroll(e, 'audit-request')}
                    className="group inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 border border-transparent text-base md:text-lg font-semibold rounded-full text-gray-900 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-emerald-400 shadow-lg transform-gpu hover:scale-[1.03] active:scale-[0.97] transition duration-200 ease-out"
                >
                    Démarrer Mon Projet <FiArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </a>
            </motion.div>
        </div>
    </motion.div>
</section>

            {/* === Header Sticky === */}
             <header
                className={`sticky top-0 left-0 w-full z-40 h-16 md:h-20 transition-all duration-300 ease-in-out ${showStickyHeader ? 'opacity-100 translate-y-0 backdrop-blur-md bg-white/80 shadow-lg' : 'opacity-0 -translate-y-full pointer-events-none'}`}
            >
                 {/* ... contenu du header sticky ... */}
                  <div className="container mx-auto h-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
                  <a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')} className="flex items-center h-full">
  <img src="/RenoHabLogo.webp" alt="RenoHab Logo" className="h-56 md:h-70 w-auto" />
</a>
<nav className="hidden md:flex items-center">
  <ul className="flex items-center space-x-6 lg:space-x-8 text-base font-medium text-gray-700">
    {['Simulateur', 'Réglementation 2026', 'Travaux', 'Aides', 'Accompagnement', 'Ressources'].map((item, index) => {
      const targetIds = ['simulator', 'reglementation-2026', 'renovation-types', 'financial-aids', 'project-steps', 'ressources'];
      const targetId = targetIds[index];
      return (
        <li key={item}>
          <a
            href={`#${targetId}`}
            onClick={(e) => handleSmoothScroll(e, targetId)}
            className="pb-1 border-b-2 border-transparent hover:border-emerald-500 hover:text-emerald-600 transition-colors duration-300 ease-in-out"
          >
            {item}
          </a>
        </li>
      );
    })}
  </ul>

  {/* Lien page devis PAC */}
  <Link
    to="/pompe-a-chaleur"
    className="ml-4 inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition"
  >
    Devis PAC
  </Link>
</nav>


                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-emerald-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500" aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
                             {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* === Menu Mobile === */}
             <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        key="mobile-menu"
                        initial="hidden" animate="visible" exit="exit" variants={mobileMenuVariant}
                        className="md:hidden fixed inset-0 bg-gradient-to-br from-emerald-600 to-teal-800 text-white p-8 flex flex-col items-center justify-center z-50"
                    >
                        {/* ... contenu du menu mobile ... */}
                         <button onClick={toggleMenu} className="absolute top-6 right-6 text-white p-2" aria-label="Fermer le menu">
                            <FiX size={35} />
                        </button>
<ul className="flex flex-col space-y-10 text-center">
  {['Simulateur', 'Réglementation 2026', 'Travaux', 'Aides', 'Accompagnement', 'Ressources'].map((item, index) => {
    const targetIds = ['simulator', 'reglementation-2026', 'renovation-types', 'financial-aids', 'project-steps', 'ressources'];
    const targetId = targetIds[index];
    return (
      <motion.li
        key={item}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 + index * 0.1 }}
      >
        <a
          href={`#${targetId}`}
          onClick={(e) => handleSmoothScroll(e, targetId)}
          className="text-3xl font-semibold transition-opacity duration-300 hover:opacity-80"
        >
          {item}
        </a>
      </motion.li>
    );
  })}

  {/* Bouton vers la page devis PAC */}
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 }}
  >
    <Link
      to="/pompe-a-chaleur"
      onClick={() => setIsMenuOpen(false)}
      className="inline-flex items-center px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-md hover:shadow-lg hover:bg-emerald-50 transition"
    >
      Devis PAC
    </Link>
  </motion.li>
</ul>


                        <motion.a
                             href="#audit-request" onClick={(e) => handleSmoothScroll(e, 'audit-request')}
                             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                             className="mt-12 inline-flex items-center justify-center px-6 py-3 border border-emerald-400 text-base font-medium rounded-full text-emerald-300 bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-emerald-700 focus:ring-white transition duration-300 ease-in-out">
                             Démarrer Mon Projet
                        </motion.a>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* === Contenu Principal (Feed) === */}
            <main ref={mainContentRef} className="container mx-auto max-w-5xl px-4 py-16 md:py-24 space-y-20 md:space-y-28 relative z-10">

                 {/* --- Card: Simulateur --- */}
                 <motion.section
                    id="simulator"
                    className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-200/50 transform transition-all duration-300 hover:shadow-card"
                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={SECTION_VIEWPORT} whileHover={cardHoverEffect}
                 >
                    <div className="p-6 md:p-10">
                        <div className="flex items-center mb-4">
                            <FiZap className="w-8 h-8 text-yellow-500 mr-3 flex-shrink-0" />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight font-display">Calculez Votre Potentiel d'Économies</h2>
                        </div>
                        <p className="text-gray-600 mb-6 ml-11">Obtenez une estimation rapide des aides (MaPrimeRénov', CEE...) et de l'impact sur vos factures grâce à notre outil partenaire.</p>
                    </div>
<div
  id="kelvin"
  ref={kelvinRef}
  className="w-full bg-gray-100 border-t border-gray-200/60 relative min-h-[700px]"
>
  {!showKelvinIframe ? (
    <div className="absolute inset-0 flex items-center justify-center p-6 z-0">
      <div className="max-w-lg w-full text-center bg-white rounded-2xl border border-gray-200/70 shadow-soft px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600 flex items-center justify-center shadow-inner">
          <FiZap className="w-7 h-7" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-display mb-2">Simulez vos aides en 2 minutes</h3>
        <p className="text-gray-600 mb-6">
          Adresse, chauffage actuel, revenus : notre outil partenaire estime MaPrimeRénov', les primes CEE
          et votre reste à charge. Gratuit et sans engagement.
        </p>
        <button
          type="button"
          onClick={launchKelvin}
          className="group inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg transform-gpu hover:-translate-y-0.5 active:scale-[0.97] transition duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Lancer le simulateur
          <FiArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </button>
        <p className="mt-4 text-xs text-gray-500">Le simulateur s'affiche ici même, sur cette page.</p>
      </div>
    </div>
  ) : (
    <iframe
      src="https://app.go-kelvin.com/simulator/renohab"
      title="Simulateur Kelvin"
      className="w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] h-[80vh] border-0 z-10 relative"
      allowFullScreen
    ></iframe>
  )}
</div>




                </motion.section>

                {/* ================================== */}
                {/* === NOUVELLE SECTION VIDÉO === */}
                {/* ================================== */}

<motion.section
  id="video-accroche"
  className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={SECTION_VIEWPORT}
>
  {!mounted || isMobile ? (
    showVideoMobile ? (
<video
  key={HERO_VIDEO_SRC}
  src={HERO_VIDEO_SRC}
  autoPlay
  muted
  loop
  playsInline
  controls
  poster={HERO_POSTER}
  className="w-full h-auto object-cover"
>
  Votre navigateur ne supporte pas la lecture de vidéos.
  Vous pouvez <a href={HERO_VIDEO_SRC} download>télécharger la vidéo</a>.
</video>

    ) : (
      <div className="relative w-full">
        <img
          src={HERO_POSTER}
          alt="Rénovation énergétique - RenoHab"
          className="w-full h-auto object-cover"
        />
        <button
          onClick={() => setShowVideoMobile(true)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-white/70 hover:bg-white/80 text-black rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-lg transition duration-300"
          aria-label="Lire la vidéo"
        >
          ▶️
        </button>
      </div>
    )
  ) : (
    <video
      src={HERO_VIDEO_SRC}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={HERO_POSTER}
      className="w-full h-auto object-cover"
    >
      Votre navigateur ne supporte pas la lecture de vidéos.
      Vous pouvez <a href={HERO_VIDEO_SRC} download>télécharger la vidéo</a>.
    </video>
  )}
</motion.section>



                {/* ================================== */}
                {/* === FIN NOUVELLE SECTION VIDÉO === */}
                {/* ================================== */}

{/* === SECTION: RÉGLEMENTATION 2026 === */}
<motion.section
  id="reglementation-2026"
  className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-200/50 transform transition-all duration-300 hover:shadow-card"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={SECTION_VIEWPORT}
>
  <div className="p-6 md:p-10">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 rounded-full mr-4 shadow-inner flex items-center justify-center">
        <FiInfo className="w-7 h-7" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight font-display">
        Ce qui change en 2026
      </h2>
    </div>

    <p className="text-gray-700 ml-11 mb-8 text-lg leading-relaxed">
      2026 marque un tournant : nouveau calcul du DPE (et une nouvelle baisse du coefficient
      électricité au 1er janvier 2027), calendrier d’interdiction de location maintenu mais
      débattu au Parlement, audit énergétique élargi, et MaPrimeRénov’ recentrée depuis le
      1er septembre 2026 sur le chauffage décarboné et les rénovations d’ampleur.
    </p>

    <div className="grid md:grid-cols-2 gap-6 ml-11">
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          Nouveau DPE depuis le 1er janvier 2026
        </h3>
        <p className="text-gray-700">
          Le <strong>coefficient de conversion de l’électricité passe de 2,3 à 1,9</strong> :
          environ <strong>850 000 logements</strong> chauffés à l’électricité gagnent une classe.
          <strong>Prochaine étape au 1er janvier 2027 : coefficient 1,7</strong> (arrêté publié au
          JO le 26 août 2026), soit près de 300 000 logements de plus qui sortent de F/G. Aucune
          étiquette ne peut être dégradée ; l’attestation de nouvelle classe est gratuite sur le site de l’ADEME.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          Calendrier d’interdiction de location
        </h3>
        <p className="text-gray-700">
          Les logements classés <strong>G</strong> sont interdits à la location depuis le
          <strong> 1er janvier 2025</strong>. Suivront les classes <strong>F au 1er janvier 2028</strong>
          puis <strong>E au 1er janvier 2034</strong> (nouveaux baux et renouvellements). Le projet de
          loi « relance du logement », voté au Sénat le 8 juillet 2026, permettrait de relouer un F/G
          sous engagement de travaux avant 2030 : non promulgué, il ne suspend pas l’interdiction.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          Audit énergétique à la vente
        </h3>
        <p className="text-gray-700">
          L’audit est obligatoire à la vente des maisons individuelles et immeubles en monopropriété
          classés <strong>E, F ou G</strong> (classe E depuis 2025), et s’étendra à la
          classe <strong>D en 2034</strong>.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          TVA & chauffage décarboné
        </h3>
        <p className="text-gray-700">
          Les <strong>pompes à chaleur air/eau</strong> conservent la <strong>TVA réduite à 5,5 %</strong>
          (pose par un installateur RGE QualiPAC) et la <strong>PAC air/air réversible</strong> y a droit
          depuis le <strong>18 juillet 2026</strong>. Les <strong>chaudières fossiles</strong> sont au taux
          normal de <strong>20 %</strong> depuis mars 2025, exclues de MaPrimeRénov’, des CEE et de l’éco-PTZ ;
          depuis le 1er septembre 2026, conserver un chauffage au gaz en maison individuelle ferme
          l’accès à la rénovation d’ampleur.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          MaPrimeRénov’ par geste recentrée (1er septembre 2026)
        </h3>
        <p className="text-gray-700">
          Le décret n° 2026-822 limite les aides « par geste » au <strong>chauffage décarboné</strong> :
          PAC air/eau (jusqu’à <strong>5 000 €</strong>), PAC géothermique (jusqu’à <strong>11 000 €</strong>),
          réseau de chaleur, dépose de cuve à fioul. Isolation, fenêtres, VMC, chauffe-eau et appareils
          bois passent par la <strong>rénovation d’ampleur</strong>, les <strong>CEE</strong> et l’<strong>éco-PTZ</strong>.
          Logements F/G acceptés jusqu’au 31 décembre 2027 ; DPE exigé à partir du 1er janvier 2028.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          Nouvelles étapes obligatoires
        </h3>
        <p className="text-gray-700">
          Depuis la réouverture du guichet le <strong>23 février 2026</strong>, un
          <strong> rendez-vous France Rénov’</strong> (gratuit) est obligatoire avant tout dossier de
          rénovation d’ampleur, et <strong>Mon Accompagnateur Rénov’</strong> reste imposé. Pour la prime
          CEE « coup de pouce » PAC, seuls les <strong>modèles agréés</strong> ouvrent droit à la bonification
          depuis le 1er septembre 2026. Rénovation d’ampleur réservée aux logements <strong>E, F ou G</strong>.
        </p>
      </div>
    </div>

    <div className="mt-10 ml-11 flex flex-wrap gap-4">
      <a
        href="#kelvin"
        onClick={(e) => handleSmoothScroll(e, 'kelvin')}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg transform-gpu hover:-translate-y-0.5 active:scale-[0.97] transition duration-200 ease-out"
      >
        Tester mon éligibilité
      </a>

      <Link
        to="/pompe-a-chaleur"
        className="px-6 py-3 rounded-full border border-emerald-400 text-emerald-600 font-semibold hover:bg-emerald-50 transition-all duration-300 ease-in-out"
      >
        Obtenir mon étude PAC
      </Link>
    </div>
  </div>
</motion.section>

                 {/* --- Card: Diagnostic de Performance Énergétique - DPE --- */}

                 <motion.section
  id="dpe-info"
  className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-200/50 transform transition-all duration-300 hover:shadow-card"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={SECTION_VIEWPORT}
>
  <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
    <div>
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 rounded-full mr-4 shadow-inner flex items-center justify-center">
          <FiBarChart2 className="w-7 h-7" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight font-display">
          Diagnostic de Performance Énergétique (DPE)
        </h2>
      </div>

      <p className="text-gray-600 mb-4 ml-11 text-lg">
        Le <strong>Diagnostic de Performance Énergétique (DPE)</strong> et l’<strong>audit énergétique</strong> sont les <strong>documents clés</strong> de votre projet : la rénovation d’ampleur <strong>MaPrimeRénov’</strong> est réservée aux logements classés <strong>E, F ou G</strong> et exige un audit ; pour les aides par geste, le DPE devient obligatoire au <strong>1er janvier 2028</strong>.
      </p>

      <p className="text-gray-600 mb-4 ml-11 text-lg">
        Un DPE fiable (diagnostiqueur certifié, enregistré à l’ADEME) et un audit de qualité déterminent <strong>le montant de vos aides</strong> et préparent le <strong>rendez-vous France Rénov’</strong>, désormais obligatoire avant tout dossier de rénovation d’ampleur.
      </p>

      <div className="bg-emerald-50/50 border border-emerald-200 p-4 rounded-lg mb-6 text-gray-700 font-medium ml-11">
        🎯 <strong>Un DPE et un audit de qualité = le passeport pour débloquer jusqu’à 80 % d’aides</strong> (rénovation d’ampleur) sur votre projet !
      </div>

      <h3 className="text-xl font-semibold text-emerald-600 mb-2 ml-11">Quel est le coût d’un DPE ?</h3>
      <p className="text-gray-600 mb-4 ml-11">
        L’<strong>audit énergétique complet avec DPE</strong> réalisé par un MAR agréé coûte généralement entre <strong>1500 € et 2500 €</strong>, selon la taille et la complexité du bien.
      </p>
      <p className="text-gray-600 mb-4 ml-11">
        Cet investissement est <strong>largement rentabilisé</strong>, car il permet d’accéder aux <strong>aides couvrant jusqu’à 80 % du montant HT des travaux</strong> (rénovation d’ampleur, ménages très modestes) et de sécuriser votre dossier.
      </p>

      <h3 className="text-xl font-semibold text-emerald-600 mb-2 ml-11">Pourquoi le DPE est-il si important ?</h3>
      <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1 ml-11">
        <li>Condition d’accès à la <strong>rénovation d’ampleur</strong> (logements E, F, G) et bientôt aux aides par geste</li>
        <li>Évaluation précise de la <strong>performance énergétique</strong></li>
        <li>Identification des <strong>travaux prioritaires</strong></li>
        <li>Valorisation du bien immobilier (vente / location)</li>
      </ul>

      <div className="flex justify-start mt-4 ml-11">
        <a href="#audit-request" onClick={(e) => handleSmoothScroll(e, 'audit-request')}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-full text-gray-900 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-emerald-400 shadow-lg transform-gpu hover:scale-[1.03] active:scale-[0.97] transition duration-200 ease-out">
          Je démarre mon audit DPE
        </a>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center">
      <img
        src="/DPE.webp"
        alt="Classes DPE"
        className="w-full max-w-sm mx-auto rounded-lg shadow-md object-contain mb-6"
      />
      <div className="space-y-1 text-sm font-medium">
        <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-green-600 mr-2"></span> A - Très performant</div>
        <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-green-400 mr-2"></span> B</div>
        <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-yellow-300 mr-2"></span> C</div>
        <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></span> D</div>
        <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-orange-400 mr-2"></span> E</div>
        <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-orange-500 mr-2"></span> F</div>
        <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-red-600 mr-2"></span> G - Très énergivore</div>
      </div>
    </div>
  </div>
</motion.section>




                 {/* --- Card: Formulaire --- */}
                 <motion.section
                    id="audit-request"
                    className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-soft overflow-hidden p-6 md:p-10 text-white"
                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={SECTION_VIEWPORT}
                 >
                      {/* ... contenu du formulaire ... */}
                      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight font-display drop-shadow-md">Prêt à Transformer Votre Habitat ?</h2>
                     <p className="text-emerald-100 text-center mb-8 md:mb-10 max-w-xl mx-auto text-lg">Lancez votre projet avec un expert. Audit, plan de travaux, montage des dossiers d'aides : on s'occupe de tout.</p>
                     <div className="flex justify-center items-center space-x-4 md:space-x-6 mb-8 md:mb-10"> {/* Ajustez space-x si besoin */}
    {/* Ajouter un wrapper autour de chaque image */}
    <div className="bg-white/80 p-1 rounded shadow"> {/* Fond blanc semi-transparent + padding + arrondi */}
        <img src="/maprimerenov-gouv-fr-2020.webp" alt="MaPrimeRénov" className="h-10 md:h-12 object-contain block" /> {/* 'block' pour éviter espace sous l'img */}
    </div>
    <div className="bg-white/80 p-1 rounded shadow">
        <img src="/CEE-main.jpg" alt="CEE" className="h-10 md:h-12 object-contain block" />
    </div>
    <div className="bg-white/80 p-1 rounded shadow">
        <img src="/ecoptz.jpg" alt="Eco PTZ" className="h-8 md:h-10 object-contain block" />
    </div>
</div>

<form onSubmit={handleFormSubmit} className="space-y-5 max-w-lg mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <motion.div variants={fadeInUp}>
      <label htmlFor="prenom" className="block text-sm font-medium text-emerald-100 mb-1">Prénom *</label>
      <input
        id="prenom"
        name="prenom"
        type="text"
        placeholder="Jean"
        required
        className="block w-full bg-white text-gray-900 border border-gray-300 rounded-md px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      />
    </motion.div>
    <motion.div variants={fadeInUp}>
      <label htmlFor="nom" className="block text-sm font-medium text-emerald-100 mb-1">Nom *</label>
      <input
        id="nom"
        name="nom"
        type="text"
        placeholder="Dupont"
        required
        className="block w-full bg-white text-gray-900 border border-gray-300 rounded-md px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      />
    </motion.div>
  </div>

  <motion.div variants={fadeInUp}>
    <label htmlFor="email" className="block text-sm font-medium text-emerald-100 mb-1">Email *</label>
    <input
      id="email"
      name="email"
      type="email"
      placeholder="votre.email@exemple.com"
      required
      className="block w-full bg-white text-gray-900 border border-gray-300 rounded-md px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
    />
  </motion.div>

  <motion.div variants={fadeInUp}>
    <label htmlFor="whatsapp" className="block text-sm font-medium text-emerald-100 mb-1">Téléphone / WhatsApp *</label>
    <input
      id="whatsapp"
      name="whatsapp"
      type="tel"
      placeholder="06 12 34 56 78"
      required
      className="block w-full bg-white text-gray-900 border border-gray-300 rounded-md px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
    />
  </motion.div>

  <motion.div variants={fadeInUp}>
    <label htmlFor="residence_type" className="block text-sm font-medium text-emerald-100 mb-1">Type de résidence *</label>
    <select
      id="residence_type"
      name="residence_type"
      required
      className="block w-full bg-white text-gray-900 border border-gray-300 rounded-md px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
    >
      <option value="">Sélectionnez...</option>
      <option value="proprietaire_principale">Propriétaire - Résidence principale</option>
      <option value="proprietaire_loue">Propriétaire - Résidence louée</option>
      <option value="locataire">Locataire (avec accord propriétaire)</option>
    </select>
  </motion.div>

  <motion.div variants={fadeInUp}>
    <label htmlFor="adresse_bien" className="block text-sm font-medium text-emerald-100 mb-1">Adresse du bien concerné *</label>
    <AdresseAutocomplete onPlaceSelected={(place) => setSelectedAddress(place.formatted_address)} />
  </motion.div>

  <motion.div variants={fadeInUp} className="pt-3">
    <button
      type="submit"
      disabled={formSubmitting}
      className="w-full flex items-center justify-center bg-white hover:bg-gray-100 text-emerald-600 px-8 py-3 rounded-full font-semibold transform-gpu active:scale-[0.98] transition duration-200 ease-out shadow-md hover:shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-emerald-600 focus:ring-white disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {formSubmitting ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Envoi en cours...
        </>
      ) : (
        <>Obtenir Mon Accompagnement <FiArrowRight className="ml-2 h-5 w-5" /></>
      )}
    </button>
  </motion.div>
</form>

                 </motion.section>

                 {/* --- Section: Types de Travaux --- */}
                 <motion.section
                    id="renovation-types"
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={SECTION_VIEWPORT}
                >
                     {/* ... contenu des types de travaux ... */}
                     <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16 tracking-tight font-display">Boostez Votre Score Énergétique : Les Travaux Clés</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(renovationData).map(([key, work], index) => (
                            <motion.div
                                key={key}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/50 flex flex-col transform transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                                layout // Enable smooth layout animation
                                variants={fadeInUp} // Staggered fade in for each card
                            >
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                    <img src={work.imageUrl} alt={`Illustration ${key}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 font-display">{key}</h3>
                                    <p className="text-gray-600 mb-5 text-sm leading-relaxed flex-grow">{work.description}</p>
                                    <button
                                        onClick={() => setSelectedWorkKey(selectedWorkKey === key ? null : key)}
                                        className="mt-auto w-full inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-emerald-700 bg-emerald-100 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-200 ease-in-out group"
                                        aria-expanded={selectedWorkKey === key}
                                    >
                                        {selectedWorkKey === key ? 'Masquer Détails' : 'Voir Détails'}
                                        <motion.div animate={{ rotate: selectedWorkKey === key ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                           <FiChevronDown className="ml-2 h-5 w-5 transition-transform duration-300" />
                                        </motion.div>
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {selectedWorkKey === key && (
                                        <motion.div
                                            key="details"
                                            variants={detailsFadeIn} initial="hidden" animate="visible" exit="exit"
                                            className="border-t border-gray-200 bg-gray-50 px-6 py-5"
                                        >
                                            {/* Apply modern prose styles */}
                                            <div className="prose prose-sm prose-emerald max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: work.details }} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                     </div>
                 </motion.section>

                {/* === SECTION: AIDES FINANCIÈRES === */}
                <motion.section
  id="financial-aids"
  className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-soft border border-gray-200/50 p-6 md:p-10"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={SECTION_VIEWPORT}
>
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2 tracking-tight font-display">
    Financez malin : les aides 2026 (à jour)
  </h2>
  <p className="text-center text-xs text-gray-500 mb-8">
    Mis à jour le 24/09/2026 — Synthèse indicative d’après le guide des aides Anah (septembre 2026) et le décret n° 2026-822 du 25 août 2026, soumise à conditions et évolutions réglementaires.
  </p>

  <motion.div className="space-y-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={SECTION_VIEWPORT}>
    {/* MPR par gestes */}
    <motion.div variants={fadeInUp} className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-200 shadow-sm">
      <div className="flex items-start sm:items-center mb-2">
        <FiAward className="w-7 h-7 text-emerald-600 mr-4 flex-shrink-0 mt-1 sm:mt-0" />
        <h3 className="text-lg md:text-xl font-semibold text-emerald-800 font-display">MaPrimeRénov’ – par geste (chauffage décarboné)</h3>
      </div>
      <ul className="ml-11 text-gray-700 text-sm leading-relaxed list-disc list-inside space-y-1">
        <li>Depuis le <strong>1er septembre 2026</strong> (décret n° 2026-822), le parcours par geste est recentré : <strong>PAC air/eau 5 000 € / 4 000 € / 3 000 €</strong> (ménages très modestes / modestes / intermédiaires), <strong>PAC géothermique 11 000 € / 9 000 € / 6 000 €</strong>, raccordement à un réseau de chaleur, dépose de cuve à fioul.</li>
        <li><strong>Sortis du parcours par geste</strong> : isolation (murs depuis janvier ; combles, toiture, planchers depuis septembre), fenêtres, VMC, chauffe-eau thermodynamique et solaire, poêles et chaudières bois. Ils restent finançables via la rénovation d’ampleur, les <strong>CEE</strong> et l’<strong>éco-PTZ</strong>.</li>
        <li>Revenus supérieurs non éligibles. Plafond de 20 000 € d’aides par logement sur 5 ans ; MPR + CEE écrêtés à <strong>90 % / 75 % / 60 %</strong> de la dépense éligible (PAC air/eau : jusqu’à <strong>10 800 €</strong> pour un ménage très modeste). Logements F/G acceptés jusqu’au 31/12/2027 ; DPE obligatoire au 1er janvier 2028.</li>
      </ul>
    </motion.div>
    {/* MPR rénovation d'ampleur */}
    <motion.div variants={fadeInUp} className="bg-sky-50/50 p-5 rounded-xl border border-sky-200 shadow-sm">
      <div className="flex items-start sm:items-center mb-2">
        <FiClipboard className="w-7 h-7 text-sky-600 mr-4 flex-shrink-0 mt-1 sm:mt-0" />
        <h3 className="text-lg md:text-xl font-semibold text-sky-800 font-display">MaPrimeRénov’ – rénovation d’ampleur (Parcours accompagné)</h3>
      </div>
      <ul className="ml-11 text-gray-700 text-sm leading-relaxed list-disc list-inside space-y-1">
        <li>Réservée aux logements classés <strong>E, F ou G</strong> de plus de 15 ans : audit énergétique, <strong>gain ≥ 2 classes DPE</strong>, au moins <strong>2 gestes d’isolation</strong> et <strong>chauffage décarboné</strong> (depuis le 1er septembre 2026, conserver une chaudière gaz ou fioul en maison individuelle rend inéligible).</li>
        <li>Prise en charge de <strong>80 % / 60 % / 45 % / 10 %</strong> du montant HT (très modestes / modestes / intermédiaires / supérieurs), dépense plafonnée à <strong>30 000 €</strong> (gain de 2 classes) ou <strong>40 000 €</strong> (3 classes et plus). Le bonus « sortie de passoire » a disparu le 30/09/2025.</li>
        <li><strong>Non cumulable avec les CEE</strong>. <strong>Mon Accompagnateur Rénov’ obligatoire</strong> (pris en charge jusqu’à 2 000 €, de 100 % à 20 % selon revenus) et <strong>rendez-vous France Rénov’ obligatoire</strong> avant le dépôt du dossier.</li>
      </ul>
      <div className="ml-11 mt-3 text-xs text-gray-600 italic">
        Guichet rouvert le 23/02/2026 (loi de finances 2026) ; règles ci-dessus applicables aux demandes déposées depuis le 1er septembre 2026 ; éligibilité calculée sur le revenu fiscal de référence 2025.
      </div>
    </motion.div>
    {/* CEE */}
    <motion.div variants={fadeInUp} className="bg-yellow-50/50 p-5 rounded-xl border border-yellow-200 shadow-sm">
      <div className="flex items-start sm:items-center mb-2">
        <FiDollarSign className="w-7 h-7 text-yellow-600 mr-4 flex-shrink-0 mt-1 sm:mt-0" />
        <h3 className="text-lg md:text-xl font-semibold text-yellow-800 font-display">Certificats d’Économies d’Énergie (CEE) – 6e période 2026-2030</h3>
      </div>
      <p className="ml-11 text-gray-700 text-sm leading-relaxed">
        Primes versées par les fournisseurs d’énergie, <strong>ouvertes à tous les revenus</strong> et <strong>cumulables avec MPR par geste</strong> (dans la limite d’écrêtement). « Coup de pouce » PAC air/eau bonifié (×5) lorsqu’elle remplace une chaudière gaz, fioul ou charbon ; depuis le <strong>1er septembre 2026</strong>, la bonification exige un <strong>modèle de PAC agréé</strong> (liste officielle). Du 1er septembre au 31 décembre 2026, primes fortement bonifiées pour le chauffe-eau thermodynamique et le solaire thermique, en compensation de leur sortie de MaPrimeRénov’.
      </p>
    </motion.div>
    {/* Eco-PTZ */}
    <motion.div variants={fadeInUp} className="bg-purple-50/50 p-5 rounded-xl border border-purple-200 shadow-sm">
      <div className="flex items-start sm:items-center mb-2">
        <FiPercent className="w-7 h-7 text-purple-600 mr-4 flex-shrink-0 mt-1 sm:mt-0" />
        <h3 className="text-lg md:text-xl font-semibold text-purple-800 font-display">Éco-Prêt à Taux Zéro (Éco-PTZ)</h3>
      </div>
      <p className="ml-11 text-gray-700 text-sm leading-relaxed">
        Prêt à 0 % sans condition de ressources, <strong>prolongé jusqu’au 31/12/2027</strong> : de 7 000 € (fenêtres) à <strong>30 000 €</strong> (3 actions et plus) sur 15 ans, et jusqu’à <strong>50 000 € sur 20 ans</strong> pour une rénovation performante ou en complément de MaPrimeRénov’ (éco-PTZ « MaPrimeRénov’ » accordé sur simple notification de l’Anah). Isolation, fenêtres, VMC et chauffe-eau y restent éligibles ; chaudières gaz exclues depuis le 1er juillet 2025.
      </p>
    </motion.div>
    {/* TVA */}
    <motion.div variants={fadeInUp} className="bg-gray-50/70 p-5 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-start sm:items-center mb-2">
        <FiInfo className="w-7 h-7 text-gray-700 mr-4 flex-shrink-0 mt-1 sm:mt-0" />
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 font-display">TVA travaux (2026)</h3>
      </div>
      <ul className="ml-11 text-gray-700 text-sm leading-relaxed list-disc list-inside space-y-1">
        <li><strong>5,5 %</strong> sur la rénovation énergétique (isolation, PAC air/eau et géothermique, chauffe-eau thermodynamique, fenêtres performantes, VMC…) dans un logement de plus de 2 ans, travaux induits compris.</li>
        <li><strong>Nouveau</strong> : la <strong>PAC air/air réversible</strong> passe à <strong>5,5 %</strong> depuis le <strong>18 juillet 2026</strong> (matériel performant, pose RGE). Panneaux photovoltaïques ≤ 9 kWc à 5,5 % depuis le 1er octobre 2025.</li>
        <li><strong>Chaudières fossiles (gaz, fioul)</strong> : <strong>20 %</strong> depuis mars 2025, exclues de MaPrimeRénov’, des CEE bonifiés et de l’éco-PTZ.</li>
      </ul>
    </motion.div>
    {/* Loc / DPE */}
    <motion.div variants={fadeInUp} className="bg-rose-50/60 p-5 rounded-xl border border-rose-200 shadow-sm">
      <div className="flex items-start sm:items-center mb-2">
        <FiMapPin className="w-7 h-7 text-rose-600 mr-4 flex-shrink-0 mt-1 sm:mt-0" />
        <h3 className="text-lg md:text-xl font-semibold text-rose-800 font-display">Réglementation DPE & location</h3>
      </div>
      <ul className="ml-11 text-gray-700 text-sm leading-relaxed list-disc list-inside space-y-1">
        <li><strong>Interdiction de louer les logements G</strong> depuis le 01/01/2025, puis <strong>F au 01/01/2028</strong> et <strong>E au 01/01/2034</strong>. Le projet de loi « relance du logement » (Sénat, 8 juillet 2026 ; Assemblée à l’automne) permettrait de louer un F/G sous engagement de travaux avant 2030 : tant qu’il n’est pas promulgué, l’interdiction s’applique.</li>
        <li>Nouveau DPE depuis le <strong>01/01/2026</strong> : coefficient électricité 2,3 → 1,9 (≈ 850 000 logements sortis de F/G). <strong>Au 01/01/2027, il passe à 1,7</strong> (arrêté publié le 26 août 2026) : ≈ 300 000 logements supplémentaires gagnent une classe, attestation ADEME gratuite sans nouveau diagnostic. Audit obligatoire à la vente des maisons E, F, G (D en 2034).</li>
      </ul>
    </motion.div>
    {/* Aides locales */}
    <motion.div variants={fadeInUp} className="bg-teal-50/50 p-5 rounded-xl border border-teal-200 shadow-sm">
      <div className="flex items-start sm:items-center mb-2">
        <FiBarChart2 className="w-7 h-7 text-teal-700 mr-4 flex-shrink-0 mt-1 sm:mt-0" />
        <h3 className="text-lg md:text-xl font-semibold text-teal-800 font-display">Aides locales</h3>
      </div>
      <p className="ml-11 text-gray-700 text-sm leading-relaxed">
        Régions, départements, communes : compléments possibles (variables). Nous optimisons le mélange MPR/CEE/locaux/Éco-PTZ pour votre cas.
      </p>
    </motion.div>
  </motion.div>

  <p className="text-gray-700 text-center mt-10 max-w-2xl mx-auto text-base italic bg-emerald-50/50 p-4 rounded-lg border border-emerald-200">
    En tant qu’Accompagnateur Rénov’, on vérifie l’éligibilité en temps réel et on monte tous les dossiers pour vous.
  </p>

  <div className="mt-8 flex justify-center gap-4">
    <a
      href="#kelvin"
      onClick={(e) => handleSmoothScroll(e, 'kelvin')}
      className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
    >
      Tester mon éligibilité
    </a>
    <Link to="/pompe-a-chaleur"
      className="px-6 py-3 rounded-full border border-emerald-400 text-emerald-600 font-semibold hover:bg-emerald-50 transform-gpu active:scale-[0.97] transition duration-200 ease-out"
    >
      Obtenir mon étude PAC
    </Link>
  </div>
</motion.section>



                 {/* --- Section: Étapes du Projet --- */}
                 <motion.section
                    id="project-steps"
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={SECTION_VIEWPORT}
                >
                    {/* ... contenu des étapes du projet ... */}
                     <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16 tracking-tight font-display">Votre Parcours Rénovation : 5 Étapes Clés</h2>
                     {/* Using Flexbox with relative positioning for lines (simplified) */}
                     <div className="relative flex flex-col md:flex-row justify-between items-stretch md:items-start space-y-8 md:space-y-0 md:space-x-4 px-4">
                        {/* Optional: Add connecting lines using pseudo-elements if needed */}
                        {projectSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex-1 bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200/50 flex flex-col items-center transform-gpu transition duration-200 ease-out hover:shadow-soft hover:-translate-y-1 z-10" // Added z-10
                                variants={fadeInUp}
                            >
                                <motion.div
                                     whileHover={{ scale: 1.08 }}
                                     transition={{ duration: 0.2, ease: EASE_OUT }}
                                     className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600 rounded-full mb-5 inline-block shadow-inner"
                                 >
                                    <step.icon className="w-8 h-8 md:w-9 md:h-9" />
                                </motion.div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">{step.title}</h3>
                                <p className="text-gray-600 text-sm flex-grow">{step.description}</p>
                            </motion.div>
                        ))}
                        {/* Example of a simple dashed line connecting them on larger screens */}
                         <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent hidden md:block -translate-y-1/2 z-0" aria-hidden="true"></div>
                     </div>
                 </motion.section>

                 {/* --- Section: Ressources / Articles --- */}
                 <motion.section
                    id="ressources"
                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={SECTION_VIEWPORT}
                 >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3 tracking-tight font-display">
                        Ressources &amp; conseils
                    </h2>
                    <p className="text-center text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto text-lg">
                        Nos guides pour comprendre la rénovation énergétique et valoriser votre bien.
                    </p>

                    {/* Les cartes viennent de src/blog/articles.js (6 plus récents). Pour ajouter un
                        article : ajouter une entrée EN TÊTE du tableau ARTICLES, pas ici. */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {ARTICLES.slice(0, HOME_ARTICLES_COUNT).map((article) => (
                            <ArticleCard key={article.slug} article={article} />
                        ))}
                    </div>

                    <div className="mt-10 md:mt-12 text-center">
                        <Link
                            to="/blog"
                            className="group inline-flex items-center justify-center px-8 py-3 rounded-full border border-emerald-500 text-emerald-700 font-semibold bg-white hover:bg-emerald-50 shadow-soft transform-gpu hover:-translate-y-0.5 active:scale-[0.98] transition duration-200 ease-out"
                        >
                            Voir tous nos articles ({ARTICLES.length})
                            <FiArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                        </Link>
                    </div>
                 </motion.section>

            </main>

            {/* === Bandeau Aides Financières === */}
             <div className="bg-gradient-to-r from-emerald-600 to-teal-700 py-4 overflow-hidden shadow-inner">
                 {/* ... contenu du bandeau rotatif ... */}
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentAidIndex}
                            className="text-white text-center font-medium text-base md:text-lg relative min-h-[1.5rem] tracking-wide"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {financialAidsBanner[currentAidIndex]}
                        </motion.div>
                    </AnimatePresence>
                 </div>
             </div>

            {/* === Footer === */}
            <footer className="bg-gray-800 text-gray-400 py-10">
                 {/* ... contenu du footer ... */}
                 <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-sm">
                    <p className="font-bold text-lg text-emerald-400 mb-2 font-display">RenoHab</p>
                    <p className="mb-4">© {new Date().getFullYear()} RenoHab. Tous droits réservés. <br className="sm:hidden"/>Votre Accompagnateur Rénov' Agréé par l'État.</p>
                    {/* Optional: Add simple links */}
                    <div className="space-x-4">
                        <Link to="/blog" className="hover:text-emerald-300 transition-colors">Tous nos articles</Link>
                        <a href="/blog/valorisation-immobiliere-renovation-energetique" className="hover:text-emerald-300 transition-colors">Valoriser son bien</a>
                        <a href="/#" className="hover:text-emerald-300 transition-colors">Mentions Légales</a>
                        <a href="/#" className="hover:text-emerald-300 transition-colors">Politique de Confidentialité</a>
                    </div>
                 </div>
             </footer>

             {/* Styles globaux : voir src/index.css (ancien bloc <style> inline retiré — il cassait l'hydratation après minification par react-snap). */}

        </div>
    );
};

export default Home;