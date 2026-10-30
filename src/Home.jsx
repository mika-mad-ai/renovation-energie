import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiClipboard, FiDollarSign, FiChevronDown, FiAward, FiPercent, FiMapPin, FiInfo,
    FiArrowRight, FiBarChart2, FiZap, FiCheck, FiPlay, FiCheckCircle, FiAlertCircle,
} from "react-icons/fi";
import { Link } from 'react-router-dom';
import AdresseAutocomplete from "./AdresseAutocomplete";
import useSeo from "./useSeo";
import ArticleCard from "./ArticleCard";
import { SiteHeader, SiteFooter } from "./SiteChrome";
import { ARTICLES } from "./blog/articles";

// react-snap pré-rend la page avec l'UA "ReactSnap" : on gèle alors les états
// pilotés par des effets (vidéo, bandeau…) pour que le HTML statique corresponde
// exactement au premier rendu client → hydratation sans erreur ni re-rendu complet.
const IS_PRERENDER = typeof navigator !== "undefined" && navigator.userAgent === "ReactSnap";

// Les sections sont visibles dans le HTML pré-rendu : l'apparition au défilement
// est un effet CSS progressif (classe `reveal`, cf. index.css), jamais un état
// initial invisible qui dépendrait du JavaScript.
const HOME_ARTICLES_COUNT = 6;

const CONTAINER = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const H2 = "font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950";
const BTN_PRIMARY = "group inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-emerald-700 active:scale-[0.98]";
const BTN_SECONDARY = "inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition duration-200 ease-out hover:border-gray-400 hover:bg-gray-50 active:scale-[0.98]";

// --- Configuration & Data ---
const renovationData = {
    "Isolation et énergies": {
      description: "Boostez l'efficacité énergétique et le confort thermique. Isolation performante et énergies renouvelables.",
      imageUrl: "/isolation.webp",
      details: `
        <h3>Isolation thermique avancée</h3>
        <p>ITI, ITE, combles, planchers bas : nous utilisons des matériaux écologiques haute performance (laine de bois, ouate, polyuréthane) pour des économies maximales. Depuis le 1er septembre 2026, l’isolation se finance via la rénovation d’ampleur MaPrimeRénov’, les primes CEE et l’éco-PTZ (TVA 5,5 %).</p>
        <h3>Fenêtres haute performance</h3>
        <p>Double/Triple vitrage (PVC, Alu, Bois) pour stopper les déperditions et améliorer le confort acoustique. Aides : primes CEE, éco-PTZ (jusqu’à 7 000 €) et TVA 5,5 % — hors MaPrimeRénov’ par geste depuis le 1er septembre 2026.</p>
        <h3>Autoconsommation solaire</h3>
        <p>Produisez votre électricité verte avec des panneaux photovoltaïques. Réduisez vos factures et gagnez en autonomie : TVA à 5,5 % jusqu’à 9 kWc depuis octobre 2025.</p>
      `
    },
    "Chauffage et eau chaude": {
      description: "Systèmes de chauffage et production d'eau chaude nouvelle génération : confortables, économiques, écologiques.",
      imageUrl: "/chauffage.webp",
      details: `
        <h3>Pompes à chaleur (PAC)</h3>
        <p>Air-Air, Air-Eau, Géothermique : utilisez les calories gratuites de l'environnement. Très faible coût d'usage. MaPrimeRénov’ jusqu’à 5 000 € (air/eau) ou 11 000 € (géothermie), cumulable avec une prime CEE bonifiée pour les modèles agréés depuis septembre 2026.</p>
        <h3>Chauffage biomasse</h3>
        <p>Chaudières à granulés ou poêles à bois modernes pour un chauffage renouvelable et performant. Aides : primes CEE bonifiées et éco-PTZ (hors MaPrimeRénov’ par geste depuis 2026).</p>
        <h3>Eau chaude sanitaire (ECS) optimisée</h3>
        <p>Chauffe-eau thermodynamique ou solaire : des solutions écologiques pour réduire drastiquement votre consommation. Prime CEE fortement bonifiée jusqu’au 31 décembre 2026 (compensation de leur sortie de MaPrimeRénov’).</p>
      `
    },
    "Ventilation et qualité d'air": {
      description: "Respirez un air sain et maîtrisez votre consommation grâce à une ventilation et une régulation intelligentes.",
      imageUrl: "/ventilation.webp",
      details: `
        <h3>Ventilation mécanique contrôlée (VMC)</h3>
        <p>Essentielle pour un air renouvelé et sans humidité. VMC double flux avec récupération de chaleur pour optimiser l'énergie.</p>
        <h3>Régulation thermique intelligente</h3>
        <p>Thermostats connectés, programmables, robinets thermostatiques : pilotez votre confort pièce par pièce et réalisez des économies.</p>
      `
    },
};

const projectSteps = [
    { title: "Contact & découverte", description: "Échange initial pour cerner vos ambitions et besoins énergétiques." },
    { title: "Audit énergétique", description: "Visite technique et diagnostic précis par votre Accompagnateur Rénov'." },
    { title: "Plan d'action & aides", description: "Stratégie de travaux personnalisée et optimisation des financements (MaPrimeRénov', CEE...)." },
    { title: "Lancement des travaux", description: "Coordination et suivi avec nos artisans partenaires certifiés RGE." },
    { title: "Validation & suivi", description: "Vérification post-travaux, conformité et accompagnement long terme." },
];

const financialAidsBanner = [
    "Rénovation d'ampleur : jusqu'à 80 % de vos travaux financés par MaPrimeRénov'.",
    "Pompe à chaleur : MaPrimeRénov' + prime CEE, jusqu'à 90 % du coût pour les ménages très modestes.",
    "Financez votre reste à charge à 0 % avec l'Éco-PTZ : jusqu'à 50 000 € sur 20 ans.",
    "TVA à 5,5 % sur la rénovation énergétique, PAC air/air réversible incluse depuis juillet 2026.",
    "RenoHab : votre Accompagnateur Rénov' agréé pour maximiser toutes les aides.",
];

// Échelle DPE : couleurs de l'étiquette officielle, seuils d'interdiction de location.
const DPE_CLASSES = [
    { letter: "A", width: "40%", bg: "#009c6d", fg: "#ffffff" },
    { letter: "B", width: "50%", bg: "#52b153", fg: "#ffffff" },
    { letter: "C", width: "60%", bg: "#78bd76", fg: "#0b1f14" },
    { letter: "D", width: "70%", bg: "#f4e70f", fg: "#1f1a00" },
    { letter: "E", width: "80%", bg: "#f0b50f", fg: "#1f1500", note: "Location interdite en 2034" },
    { letter: "F", width: "90%", bg: "#eb8235", fg: "#1f0d00", note: "Location interdite en 2028" },
    { letter: "G", width: "100%", bg: "#d7221f", fg: "#ffffff", note: "Location interdite depuis 2025" },
];

const AID_TONES = {
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    sky: "bg-sky-50 text-sky-700 ring-sky-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    violet: "bg-violet-50 text-violet-700 ring-violet-100",
    gray: "bg-gray-100 text-gray-700 ring-gray-200",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
    teal: "bg-teal-50 text-teal-700 ring-teal-100",
};

const HERO_VIDEO_SRC = "/hero-renohab-2025.mp4?v=2";
const HERO_POSTER    = "/background-poster.webp?v=2";

// --- Sous-composants ---

function SectionIntro({ title, children, center = false }) {
    return (
        <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
            <h2 className={H2}>{title}</h2>
            {children && <p className="mt-4 text-lg leading-relaxed text-gray-600 [text-wrap:pretty]">{children}</p>}
        </div>
    );
}

function AidRow({ icon: Icon, tone, title, children }) {
    return (
        <div className="grid gap-4 px-6 py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,9fr)] md:gap-10 md:px-10">
            <div className="flex items-start gap-4">
                <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${AID_TONES[tone]}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="pt-1.5 font-display text-lg font-semibold leading-snug text-gray-950">{title}</h3>
            </div>
            <div className="text-[15px] leading-relaxed text-gray-700 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 marker:text-gray-400">
                {children}
            </div>
        </div>
    );
}

function RegItem({ when, title, children }) {
    return (
        <div className="border-t border-gray-200 py-7 first:border-t-0 first:pt-0">
            <p className="text-sm font-semibold text-emerald-700">{when}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-gray-950">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 [text-wrap:pretty] [&_strong]:font-semibold [&_strong]:text-gray-900">{children}</p>
        </div>
    );
}

// Vidéo de présentation : poster seul au chargement (7,5 Mo évités), lecture
// automatique et muette sur desktop dès qu'elle entre à l'écran, au clic ailleurs.
function PresentationVideo() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [withControls, setWithControls] = useState(false);

    useEffect(() => {
        if (IS_PRERENDER) return undefined;
        const video = videoRef.current;
        const desktop = window.matchMedia("(min-width: 768px)").matches;
        const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!video || !desktop || calm || !("IntersectionObserver" in window)) return undefined;
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                video.play().then(() => setPlaying(true)).catch(() => {});
                io.disconnect();
            }
        }, { threshold: 0.35 });
        io.observe(video);
        return () => io.disconnect();
    }, []);

    const start = () => {
        const video = videoRef.current;
        if (!video) return;
        setWithControls(true);
        video.play().then(() => setPlaying(true)).catch(() => {});
    };

    return (
        <section id="video-accroche" aria-label="Vidéo de présentation RenoHab" className="relative bg-gray-950">
            <video
                ref={videoRef}
                src={HERO_VIDEO_SRC}
                poster={HERO_POSTER}
                preload="none"
                muted
                loop
                playsInline
                controls={withControls}
                className="block aspect-video max-h-[80svh] w-full object-cover"
            >
                Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            {!playing && (
                <button
                    type="button"
                    onClick={start}
                    className="group absolute inset-0 flex items-center justify-center"
                    aria-label="Lire la vidéo de présentation"
                >
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-gray-950 shadow-lg transition duration-200 ease-out group-hover:scale-105 group-hover:bg-white md:h-20 md:w-20">
                        <FiPlay className="ml-1 h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
                    </span>
                </button>
            )}
        </section>
    );
}

// --- Component ---
const Home = () => {
    useSeo({
        title: "Rénovation énergétique & DPE : jusqu'à 80 % d'aides | RenoHab",
        description: "RenoHab, Accompagnateur Rénov' agréé : audit énergétique, DPE, MaPrimeRénov', CEE, éco-PTZ et pompe à chaleur. Aides à jour des règles du 1er septembre 2026 : on monte vos dossiers et coordonnons des artisans RGE, partout en France.",
        path: "/",
        type: "website",
    });
    const [selectedWorkKey, setSelectedWorkKey] = useState(null);
    const [currentAidIndex, setCurrentAidIndex] = useState(0);
    const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error
    const [showKelvinIframe, setShowKelvinIframe] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState("");

    // Bandeau des aides : une phrase toutes les 5 s (figé au pré-rendu et si
    // l'utilisateur a demandé moins d'animations).
    useEffect(() => {
        if (IS_PRERENDER || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
        const id = setInterval(() => setCurrentAidIndex((i) => (i + 1) % financialAidsBanner.length), 5000);
        return () => clearInterval(id);
    }, []);

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

    // --- Handlers ---
    // Les ancres défilent nativement (scroll-behavior + scroll-padding dans index.css).
    // Le simulateur Kelvin (iframe tierce) ne se charge qu'à la demande : en se
    // chargeant, il prend le focus et pèserait sur le chargement initial.
    const handleNavigate = useCallback((e, targetId) => {
        if (targetId === "kelvin" || targetId === "simulator") setShowKelvinIframe(true);
    }, []);

    const handlePlaceSelected = useCallback((place) => setSelectedAddress(place.formatted_address), []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setFormStatus("sending");

        try {
          const formData = {
            prenom: form.prenom.value,
            nom: form.nom.value,
            email: form.email.value,
            whatsapp: form.whatsapp.value,
            residence_type: form.residence_type.value,
            adresse_bien: selectedAddress || form.adresse_bien.value,
          };

          const response = await fetch(`/api/submit`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
          });
          if (!response.ok) throw new Error("Erreur HTTP: " + response.status);

          form.reset();
          setSelectedAddress("");
          setFormStatus("success");
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "form_lead_sent" });
        } catch (error) {
          console.error("Envoi du formulaire impossible :", error);
          setFormStatus("error");
        }
    };

    const detailsFadeIn = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } },
        exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] } }
    };

    const fieldClass = "block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-950 placeholder:text-gray-500 shadow-sm transition focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/25";
    const labelClass = "mb-1.5 block text-sm font-medium text-gray-800";

    return (
        <div className="bg-white font-sans text-gray-800 antialiased">
            <SiteHeader variant="overlay" onHome onNavigate={handleNavigate} />

            {/* === Héro === */}
            <section id="hero" className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-white md:min-h-[92svh] md:items-center">
                <img
                    src="/hero-home-desktop.webp"
                    srcSet="/hero-home-mobile.webp 640w, /hero-home-tablet.webp 1024w, /hero-home-desktop.webp 1920w"
                    sizes="100vw"
                    alt="Maison rénovée - RenoHab"
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                    loading="eager"
                    fetchpriority="high"
                    width="1920"
                    height="1080"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-gray-950/20 md:bg-gradient-to-r md:from-gray-950/85 md:via-gray-950/50 md:to-gray-950/0" aria-hidden="true" />

                <div className={`${CONTAINER} w-full pb-14 pt-28 md:py-32`}>
                    <div className="hero-in max-w-2xl">
                        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/20 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                            Accompagnateur Rénov' agréé · aides à jour de septembre 2026
                        </p>
                        <h1 className="mt-6 font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                            Votre rénovation énergétique, <span className="text-emerald-300">simplifiée et financée.</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
                            Atteignez la performance énergétique, augmentez la valeur de votre bien et réduisez vos factures avec RenoHab, votre Accompagnateur Rénov' agréé.
                        </p>
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <a href="#audit-request" className="group inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-gray-950 shadow-lg shadow-emerald-950/30 transition duration-200 ease-out hover:bg-emerald-400 active:scale-[0.98]">
                                Démarrer mon projet
                                <FiArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                            </a>
                            <a href="#simulator" onClick={(e) => handleNavigate(e, "simulator")} className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-inset ring-white/30 backdrop-blur-sm transition duration-200 ease-out hover:bg-white/20 active:scale-[0.98]">
                                Simuler mes aides
                            </a>
                        </div>
                        <ul className="mt-10 grid gap-x-6 gap-y-2.5 text-[15px] text-white/85 sm:grid-cols-3">
                            {["Jusqu'à 80 % des travaux financés", "Artisans certifiés RGE", "Partout en France"].map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <FiCheck className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* === Dispositifs mobilisés === */}
            <div className="border-b border-gray-200 bg-white">
                <div className={`${CONTAINER} flex flex-col items-center gap-5 py-7 md:flex-row md:justify-between`}>
                    <p className="text-sm font-medium text-gray-600">Nous montons vos dossiers pour chaque dispositif public :</p>
                    <div className="flex items-center gap-8 md:gap-10">
                        <img src="/maprimerenov-gouv-fr-2020.webp" alt="MaPrimeRénov'" className="h-14 w-auto object-contain md:h-16" loading="lazy" />
                        <img src="/CEE-main.webp" alt="Certificats d'économies d'énergie (CEE)" className="h-11 w-auto object-contain md:h-12" loading="lazy" />
                        <img src="/ecoptz.webp" alt="Éco-prêt à taux zéro" className="h-12 w-auto object-contain md:h-14" loading="lazy" />
                    </div>
                </div>
            </div>

            <main>
                {/* --- Simulateur --- */}
                <section id="simulator" className="bg-gray-50 py-20 md:py-28">
                    <div className={`${CONTAINER} reveal`}>
                        {!showKelvinIframe ? (
                            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                                <div className="lg:col-span-6">
                                    <SectionIntro title="Calculez votre potentiel d'économies">
                                        Obtenez une estimation rapide des aides (MaPrimeRénov', CEE...) et de l'impact sur vos factures grâce à notre outil partenaire.
                                    </SectionIntro>
                                    <ul className="mt-8 space-y-3 text-gray-700">
                                        {["Estimation MaPrimeRénov' et primes CEE", "Votre reste à charge après aides", "Gratuit et sans engagement"].map((t) => (
                                            <li key={t} className="flex items-center gap-3">
                                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                                                    <FiCheck className="h-3.5 w-3.5" aria-hidden="true" />
                                                </span>
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div id="kelvin" className="lg:col-span-6">
                                    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-card md:p-10">
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                                            <FiZap className="h-6 w-6" aria-hidden="true" />
                                        </span>
                                        <h3 className="mt-6 font-display text-2xl font-bold text-gray-950">Simulez vos aides en 2 minutes</h3>
                                        <p className="mt-3 leading-relaxed text-gray-600">
                                            Adresse, chauffage actuel, revenus : notre outil partenaire estime MaPrimeRénov', les primes CEE
                                            et votre reste à charge.
                                        </p>
                                        <button type="button" onClick={() => setShowKelvinIframe(true)} className={`${BTN_PRIMARY} mt-8 w-full sm:w-auto`}>
                                            Lancer le simulateur
                                            <FiArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                                        </button>
                                        <p className="mt-4 text-sm text-gray-500">Le simulateur s'affiche ici même, sur cette page.</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <SectionIntro title="Calculez votre potentiel d'économies">
                                    Obtenez une estimation rapide des aides (MaPrimeRénov', CEE...) et de l'impact sur vos factures grâce à notre outil partenaire.
                                </SectionIntro>
                                <div id="kelvin" className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-card">
                                    <iframe
                                        src="https://app.go-kelvin.com/simulator/renohab"
                                        title="Simulateur Kelvin"
                                        className="block h-[80vh] min-h-[600px] w-full border-0 sm:min-h-[700px] md:min-h-[800px]"
                                        allowFullScreen
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </section>

                <PresentationVideo />

                {/* --- Réglementation 2026 --- */}
                <section id="reglementation-2026" className="bg-white py-20 md:py-28">
                    <div className={`${CONTAINER} reveal grid gap-12 lg:grid-cols-12 lg:gap-16`}>
                        <div className="lg:col-span-5">
                            <div className="lg:sticky lg:top-28">
                                <SectionIntro title="Ce qui change en 2026">
                                    2026 marque un tournant : nouveau calcul du DPE (et une nouvelle baisse du coefficient
                                    électricité au 1er janvier 2027), calendrier d’interdiction de location maintenu mais
                                    débattu au Parlement, audit énergétique élargi, et MaPrimeRénov’ recentrée depuis le
                                    1er septembre 2026 sur le chauffage décarboné et les rénovations d’ampleur.
                                </SectionIntro>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <a href="#kelvin" onClick={(e) => handleNavigate(e, "kelvin")} className={BTN_PRIMARY}>
                                        Tester mon éligibilité
                                    </a>
                                    <Link to="/pompe-a-chaleur" className={BTN_SECONDARY}>
                                        Obtenir mon étude PAC
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <RegItem when="1er janvier 2026 · 1er janvier 2027" title="Nouveau DPE depuis le 1er janvier 2026">
                                Le <strong>coefficient de conversion de l’électricité passe de 2,3 à 1,9</strong> :
                                environ <strong>850 000 logements</strong> chauffés à l’électricité gagnent une classe.{" "}
                                <strong>Prochaine étape au 1er janvier 2027 : coefficient 1,7</strong> (arrêté publié au
                                JO le 26 août 2026), soit près de 300 000 logements de plus qui sortent de F/G. Aucune
                                étiquette ne peut être dégradée ; l’attestation de nouvelle classe est gratuite sur le site de l’ADEME.
                            </RegItem>
                            <RegItem when="2025 · 2028 · 2034" title="Calendrier d’interdiction de location">
                                Les logements classés <strong>G</strong> sont interdits à la location depuis le
                                <strong> 1er janvier 2025</strong>. Suivront les classes <strong>F au 1er janvier 2028</strong>{" "}
                                puis <strong>E au 1er janvier 2034</strong> (nouveaux baux et renouvellements). Le projet de
                                loi « relance du logement », voté au Sénat le 8 juillet 2026, permettrait de relouer un F/G
                                sous engagement de travaux avant 2030 : non promulgué, il ne suspend pas l’interdiction.
                            </RegItem>
                            <RegItem when="Classes E, F, G · D en 2034" title="Audit énergétique à la vente">
                                L’audit est obligatoire à la vente des maisons individuelles et immeubles en monopropriété
                                classés <strong>E, F ou G</strong> (classe E depuis 2025), et s’étendra à la
                                classe <strong>D en 2034</strong>.
                            </RegItem>
                            <RegItem when="18 juillet 2026" title="TVA & chauffage décarboné">
                                Les <strong>pompes à chaleur air/eau</strong> conservent la <strong>TVA réduite à 5,5 %</strong>{" "}
                                (pose par un installateur RGE QualiPAC) et la <strong>PAC air/air réversible</strong> y a droit
                                depuis le <strong>18 juillet 2026</strong>. Les <strong>chaudières fossiles</strong> sont au taux
                                normal de <strong>20 %</strong> depuis mars 2025, exclues de MaPrimeRénov’, des CEE et de l’éco-PTZ ;
                                depuis le 1er septembre 2026, conserver un chauffage au gaz en maison individuelle ferme
                                l’accès à la rénovation d’ampleur.
                            </RegItem>
                            <RegItem when="1er septembre 2026" title="MaPrimeRénov’ par geste recentrée (1er septembre 2026)">
                                Le décret n° 2026-822 limite les aides « par geste » au <strong>chauffage décarboné</strong> :
                                PAC air/eau (jusqu’à <strong>5 000 €</strong>), PAC géothermique (jusqu’à <strong>11 000 €</strong>),
                                réseau de chaleur, dépose de cuve à fioul. Isolation, fenêtres, VMC, chauffe-eau et appareils
                                bois passent par la <strong>rénovation d’ampleur</strong>, les <strong>CEE</strong> et l’<strong>éco-PTZ</strong>.
                                Logements F/G acceptés jusqu’au 31 décembre 2027 ; DPE exigé à partir du 1er janvier 2028.
                            </RegItem>
                            <RegItem when="23 février 2026 · 1er septembre 2026" title="Nouvelles étapes obligatoires">
                                Depuis la réouverture du guichet le <strong>23 février 2026</strong>, un
                                <strong> rendez-vous France Rénov’</strong> (gratuit) est obligatoire avant tout dossier de
                                rénovation d’ampleur, et <strong>Mon Accompagnateur Rénov’</strong> reste imposé. Pour la prime
                                CEE « coup de pouce » PAC, seuls les <strong>modèles agréés</strong> ouvrent droit à la bonification
                                depuis le 1er septembre 2026. Rénovation d’ampleur réservée aux logements <strong>E, F ou G</strong>.
                            </RegItem>
                        </div>
                    </div>
                </section>

                {/* --- DPE --- */}
                <section id="dpe-info" className="bg-gray-50 py-20 md:py-28">
                    <div className={`${CONTAINER} reveal grid items-start gap-12 lg:grid-cols-12 lg:gap-16`}>
                        <div className="lg:col-span-7">
                            <h2 className={H2}>Diagnostic de Performance Énergétique (DPE)</h2>
                            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700 [text-wrap:pretty] [&_strong]:font-semibold [&_strong]:text-gray-900">
                                <p>
                                    Le <strong>Diagnostic de Performance Énergétique (DPE)</strong> et l’<strong>audit énergétique</strong> sont les <strong>documents clés</strong> de votre projet : la rénovation d’ampleur <strong>MaPrimeRénov’</strong> est réservée aux logements classés <strong>E, F ou G</strong> et exige un audit ; pour les aides par geste, le DPE devient obligatoire au <strong>1er janvier 2028</strong>.
                                </p>
                                <p>
                                    Un DPE fiable (diagnostiqueur certifié, enregistré à l’ADEME) et un audit de qualité déterminent <strong>le montant de vos aides</strong> et préparent le <strong>rendez-vous France Rénov’</strong>, désormais obligatoire avant tout dossier de rénovation d’ampleur.
                                </p>
                            </div>

                            <p className="mt-8 rounded-2xl bg-emerald-50 px-5 py-4 font-medium text-emerald-950 ring-1 ring-inset ring-emerald-200">
                                <strong>Un DPE et un audit de qualité = le passeport pour débloquer jusqu’à 80 % d’aides</strong> (rénovation d’ampleur) sur votre projet !
                            </p>

                            <div className="mt-10 grid gap-8 sm:grid-cols-2">
                                <div>
                                    <h3 className="font-display text-lg font-semibold text-gray-950">Quel est le coût d’un DPE ?</h3>
                                    <p className="mt-2 leading-relaxed text-gray-700 [&_strong]:font-semibold [&_strong]:text-gray-900">
                                        L’<strong>audit énergétique complet avec DPE</strong> réalisé par un MAR agréé coûte généralement entre <strong>1500 € et 2500 €</strong>, selon la taille et la complexité du bien.
                                    </p>
                                    <p className="mt-3 leading-relaxed text-gray-700 [&_strong]:font-semibold [&_strong]:text-gray-900">
                                        Cet investissement est <strong>largement rentabilisé</strong>, car il permet d’accéder aux <strong>aides couvrant jusqu’à 80 % du montant HT des travaux</strong> (rénovation d’ampleur, ménages très modestes) et de sécuriser votre dossier.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-display text-lg font-semibold text-gray-950">Pourquoi le DPE est-il si important ?</h3>
                                    <ul className="mt-3 space-y-2.5 text-gray-700 [&_strong]:font-semibold [&_strong]:text-gray-900">
                                        {[
                                            <>Condition d’accès à la <strong>rénovation d’ampleur</strong> (logements E, F, G) et bientôt aux aides par geste</>,
                                            <>Évaluation précise de la <strong>performance énergétique</strong></>,
                                            <>Identification des <strong>travaux prioritaires</strong></>,
                                            <>Valorisation du bien immobilier (vente / location)</>,
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3">
                                                <FiCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a href="#audit-request" className={BTN_PRIMARY}>
                                    Je démarre mon audit DPE
                                    <FiArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                                </a>
                                <Link to="/dpe-gratuit" className={BTN_SECONDARY}>Estimer mon DPE</Link>
                            </div>
                        </div>

                        <figure className="lg:col-span-5 lg:sticky lg:top-28">
                            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-card md:p-8">
                                <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                                    <span>Logement économe</span>
                                    <FiBarChart2 className="h-4 w-4" aria-hidden="true" />
                                </div>
                                <ol className="mt-3 space-y-1.5" aria-label="Échelle des classes DPE, de A à G">
                                    {DPE_CLASSES.map((c) => (
                                        <li key={c.letter} className="grid grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center gap-3">
                                            <span
                                                className="flex h-9 items-center rounded-l-md rounded-r-full pl-3 font-display text-lg font-bold"
                                                style={{ width: c.width, backgroundColor: c.bg, color: c.fg }}
                                            >
                                                {c.letter}
                                            </span>
                                            {c.note && <span className="text-xs font-medium leading-tight text-gray-700">{c.note}</span>}
                                        </li>
                                    ))}
                                </ol>
                                <p className="mt-3 text-xs font-medium text-gray-500">Logement énergivore</p>
                                <figcaption className="mt-6 border-t border-gray-100 pt-5 text-sm leading-relaxed text-gray-700">
                                    <strong className="font-semibold text-gray-950">Classes E, F et G</strong> : éligibles à la rénovation d’ampleur MaPrimeRénov’, jusqu’à 80 % du montant HT des travaux. Interdictions de location : nouveaux baux et renouvellements.
                                </figcaption>
                            </div>
                        </figure>
                    </div>
                </section>

                {/* --- Formulaire --- */}
                <section id="audit-request" className="relative isolate overflow-hidden bg-emerald-900 py-20 text-white md:py-28">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_0%_0%,rgba(52,211,153,0.28),transparent_60%),radial-gradient(50%_60%_at_100%_100%,rgba(20,184,166,0.25),transparent_60%)]" aria-hidden="true" />
                    <div className={`${CONTAINER} reveal grid items-start gap-12 lg:grid-cols-12 lg:gap-16`}>
                        <div className="lg:col-span-5">
                            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Prêt à transformer votre habitat ?</h2>
                            <p className="mt-4 text-lg leading-relaxed text-emerald-50/90">
                                Lancez votre projet avec un expert. Audit, plan de travaux, montage des dossiers d'aides : on s'occupe de tout.
                            </p>
                            <ol className="mt-10 space-y-6">
                                {[
                                    ["On étudie votre demande", "Un conseiller RenoHab vous recontacte pour cerner votre projet."],
                                    ["Visite et audit énergétique", "Votre Accompagnateur Rénov' établit le diagnostic et les scénarios de travaux."],
                                    ["Aides et travaux", "On monte vos dossiers d'aides et on coordonne des artisans certifiés RGE."],
                                ].map(([title, text], i) => (
                                    <li key={title} className="flex gap-4">
                                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 font-display text-sm font-semibold ring-1 ring-inset ring-white/25">
                                            {i + 1}
                                        </span>
                                        <div>
                                            <p className="font-semibold">{title}</p>
                                            <p className="mt-1 text-[15px] leading-relaxed text-emerald-50/80">{text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="rounded-3xl bg-white p-6 text-gray-800 shadow-2xl shadow-emerald-950/40 sm:p-8 md:p-10">
                                {formStatus === "success" ? (
                                    <div className="py-10 text-center" role="status">
                                        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                                            <FiCheckCircle className="h-7 w-7" aria-hidden="true" />
                                        </span>
                                        <h3 className="mt-6 font-display text-2xl font-bold text-gray-950">Merci, votre demande est bien envoyée</h3>
                                        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-gray-600">Nous vous recontacterons bientôt pour faire le point sur votre projet.</p>
                                        <button type="button" onClick={() => setFormStatus("idle")} className={`${BTN_SECONDARY} mt-8`}>
                                            Envoyer une autre demande
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="prenom" className={labelClass}>Prénom *</label>
                                                <input id="prenom" name="prenom" type="text" autoComplete="given-name" placeholder="Jean" required className={fieldClass} />
                                            </div>
                                            <div>
                                                <label htmlFor="nom" className={labelClass}>Nom *</label>
                                                <input id="nom" name="nom" type="text" autoComplete="family-name" placeholder="Dupont" required className={fieldClass} />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="email" className={labelClass}>Email *</label>
                                                <input id="email" name="email" type="email" autoComplete="email" placeholder="votre.email@exemple.com" required className={fieldClass} />
                                            </div>
                                            <div>
                                                <label htmlFor="whatsapp" className={labelClass}>Téléphone / WhatsApp *</label>
                                                <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" required className={fieldClass} />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="residence_type" className={labelClass}>Type de résidence *</label>
                                            <select id="residence_type" name="residence_type" required defaultValue="" className={fieldClass}>
                                                <option value="">Sélectionnez...</option>
                                                <option value="proprietaire_principale">Propriétaire - Résidence principale</option>
                                                <option value="proprietaire_loue">Propriétaire - Résidence louée</option>
                                                <option value="locataire">Locataire (avec accord propriétaire)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="adresse_bien" className={labelClass}>Adresse du bien concerné *</label>
                                            <AdresseAutocomplete onPlaceSelected={handlePlaceSelected} className={fieldClass} />
                                        </div>

                                        {formStatus === "error" && (
                                            <p className="flex items-start gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-800 ring-1 ring-inset ring-rose-200" role="alert">
                                                <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                                                L'envoi n'a pas abouti. Vérifiez votre connexion puis réessayez : vos informations sont toujours dans le formulaire.
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={formStatus === "sending"}
                                            className="flex w-full items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-lg font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-emerald-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {formStatus === "sending" ? (
                                                <>
                                                    <svg className="-ml-1 mr-3 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Envoi en cours...
                                                </>
                                            ) : (
                                                <>Obtenir mon accompagnement <FiArrowRight className="ml-2 h-5 w-5" aria-hidden="true" /></>
                                            )}
                                        </button>
                                        <p className="text-center text-xs leading-relaxed text-gray-500">
                                            Sans engagement. Vos données servent uniquement à vous recontacter :{" "}
                                            <a href="/confidentialite" className="underline underline-offset-2 hover:text-gray-700">politique de confidentialité</a>.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Types de travaux --- */}
                <section id="renovation-types" className="bg-white py-20 md:py-28">
                    <div className={`${CONTAINER} reveal`}>
                        <SectionIntro title="Boostez votre score énergétique : les travaux clés">
                            Les postes qui font gagner des classes DPE, et les aides qui les financent depuis septembre 2026.
                        </SectionIntro>
                        <div className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
                            {Object.entries(renovationData).map(([key, work]) => {
                                const open = selectedWorkKey === key;
                                const panelId = `travaux-${key.replace(/[^a-z]/gi, "").toLowerCase()}`;
                                return (
                                    <article key={key} className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-card">
                                        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                                            <img src={work.imageUrl} alt={`Illustration ${key}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-display text-xl font-semibold text-gray-950">{key}</h3>
                                            <p className="mt-2 leading-relaxed text-gray-600">{work.description}</p>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedWorkKey(open ? null : key)}
                                                className="mt-5 inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:text-emerald-800"
                                                aria-expanded={open}
                                                aria-controls={panelId}
                                            >
                                                {open ? "Masquer les détails" : "Voir les détails"}
                                                <FiChevronDown className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
                                            </button>
                                        </div>
                                        <AnimatePresence initial={false}>
                                            {open && (
                                                <motion.div
                                                    id={panelId}
                                                    key="details"
                                                    variants={detailsFadeIn} initial="hidden" animate="visible" exit="exit"
                                                    className="overflow-hidden"
                                                >
                                                    <div
                                                        className="prose prose-sm max-w-none border-t border-gray-100 bg-gray-50 px-6 py-5 text-gray-700 prose-headings:font-display prose-headings:text-gray-950 prose-h3:mb-1 prose-h3:mt-4 prose-h3:text-base first:prose-h3:mt-0"
                                                        dangerouslySetInnerHTML={{ __html: work.details }}
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* --- Aides financières --- */}
                <section id="financial-aids" className="bg-gray-50 py-20 md:py-28">
                    <div className={`${CONTAINER} reveal`}>
                        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                            <SectionIntro title="Financez malin : les aides 2026 (à jour)" />
                            <p className="max-w-sm text-sm leading-relaxed text-gray-500 md:text-right">
                                Mis à jour le 24/09/2026 — Synthèse indicative d’après le guide des aides Anah (septembre 2026) et le décret n° 2026-822 du 25 août 2026, soumise à conditions et évolutions réglementaires.
                            </p>
                        </div>

                        <div className="mt-12 divide-y divide-gray-200 overflow-hidden rounded-3xl border border-gray-200 bg-white">
                            <AidRow icon={FiAward} tone="emerald" title="MaPrimeRénov’ – par geste (chauffage décarboné)">
                                <ul>
                                    <li>Depuis le <strong>1er septembre 2026</strong> (décret n° 2026-822), le parcours par geste est recentré : <strong>PAC air/eau 5 000 € / 4 000 € / 3 000 €</strong> (ménages très modestes / modestes / intermédiaires), <strong>PAC géothermique 11 000 € / 9 000 € / 6 000 €</strong>, raccordement à un réseau de chaleur, dépose de cuve à fioul.</li>
                                    <li><strong>Sortis du parcours par geste</strong> : isolation (murs depuis janvier ; combles, toiture, planchers depuis septembre), fenêtres, VMC, chauffe-eau thermodynamique et solaire, poêles et chaudières bois. Ils restent finançables via la rénovation d’ampleur, les <strong>CEE</strong> et l’<strong>éco-PTZ</strong>.</li>
                                    <li>Revenus supérieurs non éligibles. Plafond de 20 000 € d’aides par logement sur 5 ans ; MPR + CEE écrêtés à <strong>90 % / 75 % / 60 %</strong> de la dépense éligible (PAC air/eau : jusqu’à <strong>10 800 €</strong> pour un ménage très modeste). Logements F/G acceptés jusqu’au 31/12/2027 ; DPE obligatoire au 1er janvier 2028.</li>
                                </ul>
                            </AidRow>
                            <AidRow icon={FiClipboard} tone="sky" title="MaPrimeRénov’ – rénovation d’ampleur (Parcours accompagné)">
                                <ul>
                                    <li>Réservée aux logements classés <strong>E, F ou G</strong> de plus de 15 ans : audit énergétique, <strong>gain ≥ 2 classes DPE</strong>, au moins <strong>2 gestes d’isolation</strong> et <strong>chauffage décarboné</strong> (depuis le 1er septembre 2026, conserver une chaudière gaz ou fioul en maison individuelle rend inéligible).</li>
                                    <li>Prise en charge de <strong>80 % / 60 % / 45 % / 10 %</strong> du montant HT (très modestes / modestes / intermédiaires / supérieurs), dépense plafonnée à <strong>30 000 €</strong> (gain de 2 classes) ou <strong>40 000 €</strong> (3 classes et plus). Le bonus « sortie de passoire » a disparu le 30/09/2025.</li>
                                    <li><strong>Non cumulable avec les CEE</strong>. <strong>Mon Accompagnateur Rénov’ obligatoire</strong> (pris en charge jusqu’à 2 000 €, de 100 % à 20 % selon revenus) et <strong>rendez-vous France Rénov’ obligatoire</strong> avant le dépôt du dossier.</li>
                                </ul>
                                <p className="mt-3 text-sm italic text-gray-500">
                                    Guichet rouvert le 23/02/2026 (loi de finances 2026) ; règles ci-dessus applicables aux demandes déposées depuis le 1er septembre 2026 ; éligibilité calculée sur le revenu fiscal de référence 2025.
                                </p>
                            </AidRow>
                            <AidRow icon={FiDollarSign} tone="amber" title="Certificats d’Économies d’Énergie (CEE) – 6e période 2026-2030">
                                <p>
                                    Primes versées par les fournisseurs d’énergie, <strong>ouvertes à tous les revenus</strong> et <strong>cumulables avec MPR par geste</strong> (dans la limite d’écrêtement). « Coup de pouce » PAC air/eau bonifié (×5) lorsqu’elle remplace une chaudière gaz, fioul ou charbon ; depuis le <strong>1er septembre 2026</strong>, la bonification exige un <strong>modèle de PAC agréé</strong> (liste officielle). Du 1er septembre au 31 décembre 2026, primes fortement bonifiées pour le chauffe-eau thermodynamique et le solaire thermique, en compensation de leur sortie de MaPrimeRénov’.
                                </p>
                            </AidRow>
                            <AidRow icon={FiPercent} tone="violet" title="Éco-Prêt à Taux Zéro (Éco-PTZ)">
                                <p>
                                    Prêt à 0 % sans condition de ressources, <strong>prolongé jusqu’au 31/12/2027</strong> : de 7 000 € (fenêtres) à <strong>30 000 €</strong> (3 actions et plus) sur 15 ans, et jusqu’à <strong>50 000 € sur 20 ans</strong> pour une rénovation performante ou en complément de MaPrimeRénov’ (éco-PTZ « MaPrimeRénov’ » accordé sur simple notification de l’Anah). Isolation, fenêtres, VMC et chauffe-eau y restent éligibles ; chaudières gaz exclues depuis le 1er juillet 2025.
                                </p>
                            </AidRow>
                            <AidRow icon={FiInfo} tone="gray" title="TVA travaux (2026)">
                                <ul>
                                    <li><strong>5,5 %</strong> sur la rénovation énergétique (isolation, PAC air/eau et géothermique, chauffe-eau thermodynamique, fenêtres performantes, VMC…) dans un logement de plus de 2 ans, travaux induits compris.</li>
                                    <li><strong>Nouveau</strong> : la <strong>PAC air/air réversible</strong> passe à <strong>5,5 %</strong> depuis le <strong>18 juillet 2026</strong> (matériel performant, pose RGE). Panneaux photovoltaïques ≤ 9 kWc à 5,5 % depuis le 1er octobre 2025.</li>
                                    <li><strong>Chaudières fossiles (gaz, fioul)</strong> : <strong>20 %</strong> depuis mars 2025, exclues de MaPrimeRénov’, des CEE bonifiés et de l’éco-PTZ.</li>
                                </ul>
                            </AidRow>
                            <AidRow icon={FiMapPin} tone="rose" title="Réglementation DPE & location">
                                <ul>
                                    <li><strong>Interdiction de louer les logements G</strong> depuis le 01/01/2025, puis <strong>F au 01/01/2028</strong> et <strong>E au 01/01/2034</strong>. Le projet de loi « relance du logement » (Sénat, 8 juillet 2026 ; Assemblée à l’automne) permettrait de louer un F/G sous engagement de travaux avant 2030 : tant qu’il n’est pas promulgué, l’interdiction s’applique.</li>
                                    <li>Nouveau DPE depuis le <strong>01/01/2026</strong> : coefficient électricité 2,3 → 1,9 (≈ 850 000 logements sortis de F/G). <strong>Au 01/01/2027, il passe à 1,7</strong> (arrêté publié le 26 août 2026) : ≈ 300 000 logements supplémentaires gagnent une classe, attestation ADEME gratuite sans nouveau diagnostic. Audit obligatoire à la vente des maisons E, F, G (D en 2034).</li>
                                </ul>
                            </AidRow>
                            <AidRow icon={FiBarChart2} tone="teal" title="Aides locales">
                                <p>
                                    Régions, départements, communes : compléments possibles (variables). Nous optimisons le mélange MPR/CEE/locaux/Éco-PTZ pour votre cas.
                                </p>
                            </AidRow>
                        </div>

                        <div className="mt-10 flex flex-col items-center gap-6 text-center">
                            <p className="max-w-2xl text-lg text-gray-700">
                                En tant qu’Accompagnateur Rénov’, on vérifie l’éligibilité en temps réel et on monte tous les dossiers pour vous.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <a href="#kelvin" onClick={(e) => handleNavigate(e, "kelvin")} className={BTN_PRIMARY}>
                                    Tester mon éligibilité
                                </a>
                                <Link to="/pompe-a-chaleur" className={BTN_SECONDARY}>
                                    Obtenir mon étude PAC
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Étapes du projet --- */}
                <section id="project-steps" className="bg-white py-20 md:py-28">
                    <div className={`${CONTAINER} reveal`}>
                        <SectionIntro title="Votre parcours rénovation : 5 étapes clés" center>
                            Un seul interlocuteur, du premier appel à la vérification des travaux.
                        </SectionIntro>
                        <ol className="mt-14 grid gap-8 md:grid-cols-5 md:gap-6">
                            {projectSteps.map((step, index) => (
                                <li key={step.title} className="relative flex gap-5 md:flex-col md:gap-0 md:text-center">
                                    {index < projectSteps.length - 1 && (
                                        <span
                                            className="absolute left-5 top-12 -bottom-8 w-px bg-emerald-200 md:left-[calc(50%+2rem)] md:right-[calc(-50%+2rem)] md:top-5 md:bottom-auto md:h-px md:w-auto"
                                            aria-hidden="true"
                                        />
                                    )}
                                    <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-display font-semibold text-white md:mx-auto">
                                        {index + 1}
                                    </span>
                                    <div className="md:mt-5">
                                        <h3 className="font-display text-lg font-semibold text-gray-950">{step.title}</h3>
                                        <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* --- Ressources / Articles --- */}
                <section id="ressources" className="bg-gray-50 py-20 md:py-28">
                    <div className={`${CONTAINER} reveal`}>
                        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                            <SectionIntro title="Ressources & conseils">
                                Nos guides pour comprendre la rénovation énergétique et valoriser votre bien.
                            </SectionIntro>
                            <Link to="/blog" className="group hidden items-center font-semibold text-emerald-700 hover:text-emerald-800 md:inline-flex">
                                Voir tous nos articles ({ARTICLES.length})
                                <FiArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                            </Link>
                        </div>

                        {/* Les cartes viennent de src/blog/articles.js (6 plus récents). Pour ajouter un
                            article : ajouter une entrée EN TÊTE du tableau ARTICLES, pas ici. */}
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                            {ARTICLES.slice(0, HOME_ARTICLES_COUNT).map((article) => (
                                <ArticleCard key={article.slug} article={article} />
                            ))}
                        </div>

                        <div className="mt-10 text-center md:hidden">
                            <Link to="/blog" className={`${BTN_SECONDARY} group`}>
                                Voir tous nos articles ({ARTICLES.length})
                                <FiArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* === Bandeau aides financières (rotation) === */}
            <div className="bg-emerald-700 py-4">
                <div className={CONTAINER}>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.p
                            key={currentAidIndex}
                            className="min-h-[1.5rem] text-center text-base font-medium text-white"
                            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                        >
                            {financialAidsBanner[currentAidIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>

            <SiteFooter />
        </div>
    );
};

export default Home;
