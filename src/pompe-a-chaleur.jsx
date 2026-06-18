// src/pompe-a-chaleur.jsx
import React, { useEffect, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiZap, FiPercent, FiDroplet, FiTool, FiShield, FiClipboard, FiHome } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import useSeo from "./useSeo";

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } };

export default function LandingPAC() {
  // Version "classique" : doublon de /pompe-a-chaleur, exclue de l'index pour éviter le contenu dupliqué.
  useSeo({
    title: "Pompe à chaleur air/eau | RenoHab",
    description: "Devis et installation de pompe à chaleur air/eau avec RenoHab.",
    path: "/pompe-a-chaleur-classique",
    noindex: true,
  });
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [leadOkHero, setLeadOkHero] = useState(false);
  const [leadOkSection, setLeadOkSection] = useState(false);
  const { hash } = useLocation();

  // pageview tracking (safe)
  useEffect(() => {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "landing_view", page: "pac-landing" });
    } catch {}
  }, []);

  // scroll to hash
  useLayoutEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
  }, [hash]);

  const scrollToDevis = (e) => {
    e?.preventDefault?.();
    const target = document.getElementById("devis");
    if (!target) return;
    const header = document.querySelector("header");
    const headerH = header ? header.getBoundingClientRect().height : 0;
    const y = target.getBoundingClientRect().top + window.pageYOffset - headerH - 16;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <main className="font-sans text-gray-800">
      {/* HEADER (logo très grand) */}
      <header className={`sticky top-0 z-40 border-b border-gray-200 bg-white/70 backdrop-blur transition-all duration-300 ${shrink ? "h-24" : "h-36"}`}>
        <div className="container mx-auto max-w-7xl px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Accueil RenoHab">
            <img src="/RenoHabLogo.webp" alt="RenoHab" className={`transition-all duration-300 ${shrink ? "h-24" : "h-32"}`} />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="text-gray-700 hover:text-emerald-700">Accueil</Link>
            {!leadOkHero && (
              <a href="#devis" onClick={scrollToDevis} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700">
                Devis PAC <FiArrowRight />
              </a>
            )}
          </nav>
        </div>
      </header>

      {/* CRO: Bandeau de réassurance sous le header */}
      <section className="bg-white/90 border-b border-emerald-100">
        <div className="container mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm text-emerald-900">
          <div className="flex items-center gap-2">
            <FiCheck className="text-emerald-600" />
            <span>Devis 100 % gratuit et sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheck className="text-emerald-600" />
            <span>Artisans locaux certifiés RGE</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheck className="text-emerald-600" />
            <span>Vos données restent confidentielles</span>
          </div>
        </div>
      </section>

      {/* HERO avec FORMULAIRE visible */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900" />
          <div className="absolute -top-24 -left-24 w-[42rem] h-[42rem] rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[42rem] h-[42rem] rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
          <nav aria-label="Fil d’Ariane" className="mb-6 text-sm text-white/80">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-white underline underline-offset-2">Accueil</Link></li>
              <li aria-hidden="true" className="opacity-60">›</li>
              <li className="text-white font-medium">Pompe à chaleur</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Pompe à chaleur air/eau&nbsp;:
                <span className="block text-emerald-200">baissez vos factures</span>
                et valorisez votre bien
              </h1>
              {/* CRO: Argumentaire bénéfices concrets */}
              <p className="mt-4 text-lg md:text-xl text-emerald-50/95 max-w-2xl">
                Estimez vos aides MaPrimeRénov’ + CEE, laissez-nous monter le dossier administratif et coordonner l’installation avec un artisan RGE.
                Notre mission&nbsp;: financer et poser votre PAC sans démarche compliquée.
              </p>
              <p className="mt-3 text-base md:text-lg text-emerald-50/90 max-w-2xl">
                Vous êtes rappelé par un conseiller unique sous 24–48&nbsp;h, sans démarchage agressif ni engagement.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Badge>Artisans RGE</Badge>
                <Badge>TVA 5,5&nbsp;% éligible</Badge>
                <Badge>Aides cumulables</Badge>
              </div>

              <div className="mt-8">
                <a onClick={scrollToDevis} href="#devis" className="group inline-flex items-center gap-2 rounded-full bg-white text-emerald-700 px-6 py-3 font-semibold shadow-lg hover:shadow-soft">
                  Voir le formulaire complet <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Colonne droite : Encadré 14999€ + Form */}
            <motion.div variants={fadeIn} initial="hidden" animate="visible" className="relative">
{/* ✅ ENCADRÉ FINANCEMENT — logos empilés + bleu républicain */}
<div className="relative mb-4 rounded-3xl bg-sky-50 text-[#0055A4] shadow-soft p-5 md:p-6 border border-sky-200 overflow-hidden">
  {/* halo bleu clair */}
  <div className="absolute -inset-0.5 rounded-3xl bg-[#0055A4]/10 blur-md" aria-hidden="true" />

  <div className="relative flex items-start gap-5">
    {/* Logos institutionnels empilés */}
    <div className="flex-shrink-0 flex flex-col items-center gap-2 mt-1">
      <img
        src="/Marianne_logo.png"
        alt="Logo de la République Française"
        className="h-14 w-auto md:h-16"
        loading="lazy"
      />
      <img
        src="/Logo_Anah.svg.png"
        alt="Logo de l’Agence nationale de l’habitat"
        className="h-10 w-auto md:h-12"
        loading="lazy"
      />
    </div>

    {/* Contenu texte */}
    <div className="flex-1">
      <div className="flex items-baseline justify-between">
        <p className="text-sm md:text-base tracking-wide uppercase text-[#0055A4]/90 font-semibold">
          Financement public
        </p>
        <span className="text-xs md:text-sm bg-[#0055A4]/10 text-[#0055A4] px-2 py-1 rounded-full border border-[#0055A4]/20">
          déduit du devis
        </span>
      </div>

      <div className="mt-2 leading-none">
        <span className="block text-4xl md:text-5xl font-extrabold text-[#0055A4]">
          Jusqu’à&nbsp;14 999&nbsp;€
        </span>
        <span className="block text-sm md:text-base text-[#0055A4]/90 mt-1">
          MaPrimeRénov’ + CEE – potentiellement déduits du devis final selon votre situation
        </span>
        <span className="block text-xs md:text-sm text-[#00396F] mt-1 font-semibold">
          Remplissez le formulaire pour vérifier votre éligibilité à ces aides.
        </span>
      </div>
    </div>
  </div>
</div>



              {/* Formulaire HERO — Glass card */}
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-white/30 to-white/10 blur-xl" />
                <div className="relative rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-card p-6 md:p-8">
                  {/* CRO: Points clés du formulaire */}
                  <div className="mb-4 space-y-2 text-sm text-slate-700">
                    <div className="flex items-start gap-2">
                      <FiCheck className="mt-0.5 text-emerald-600 flex-shrink-0" />
                      <span>Estimation personnalisée de vos aides et de la faisabilité technique.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="mt-0.5 text-emerald-600 flex-shrink-0" />
                      <span>Rappel par un conseiller unique sous 24–48&nbsp;h.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="mt-0.5 text-emerald-600 flex-shrink-0" />
                      <span>Devis personnalisé et possibilité de refuser sans frais.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="mt-0.5 text-emerald-600 flex-shrink-0" />
                      <span>Coordination complète du dossier administratif MaPrimeRénov’ + CEE.</span>
                    </div>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-800">Votre devis gratuit</h2>
                  <p className="text-slate-600 mt-1 text-sm">Un expert vous rappelle sous 24–48 h.</p>
                  <div className="mt-6">
                    <PACForm context="hero" onSuccess={() => setLeadOkHero(true)} />
                  </div>
                  <p className="mt-4 text-xs text-slate-500">*Sous réserve d’éligibilité aux aides. Dossier accompagné.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POURQUOI LA PAC */}
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl px-6 py-16 text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-emerald-700" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            Pourquoi choisir la PAC air/eau ?
          </motion.h2>

          <motion.div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <AdvCard icon={<FiZap />} title="Économies jusqu’à 60 %">Consomme peu d’électricité et récupère les calories de l’air extérieur.</AdvCard>
            <AdvCard icon={<FiDroplet />} title="ECS possible">Peut couvrir chauffage + eau chaude selon étude.</AdvCard>
            <AdvCard icon={<FiPercent />} title="Aides cumulables">MaPrimeRénov’ + CEE, accompagnement au dossier.</AdvCard>
            <AdvCard icon={<FiTool />} title="Pose RGE">Installation & mise en service par artisans certifiés.</AdvCard>
          </motion.div>

          {/* Illustration PAC existante */}
          <motion.div className="flex justify-center mt-12" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <figure className="relative w-full max-w-3xl overflow-hidden rounded-3xl shadow-lg">
              <img src="/pompe-a-chaleur.png" alt="Pompe à chaleur air/eau moderne" className="w-full h-auto object-cover" loading="lazy" />
              <figcaption className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-sm md:text-base p-3 md:p-4 text-center">
                Exemple d’installation d’une pompe à chaleur air/eau domestique
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* CRO: Section réassurance */}
      <section className="bg-emerald-50/40 border-t border-emerald-100">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center mb-8">Pourquoi nous faire confiance&nbsp;?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white shadow-sm border border-emerald-100 p-5">
              <div className="flex items-center gap-3 text-emerald-700 font-semibold">
                <FiShield className="text-xl" /> Installateurs RGE sélectionnés
              </div>
              <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                Nous travaillons uniquement avec des artisans locaux certifiés RGE et suivons la qualité des chantiers.
              </p>
            </div>
            <div className="rounded-2xl bg-white shadow-sm border border-emerald-100 p-5">
              <div className="flex items-center gap-3 text-emerald-700 font-semibold">
                <FiClipboard className="text-xl" /> Accompagnement administratif complet
              </div>
              <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                MaPrimeRénov’, CEE, TVA&nbsp;5,5&nbsp;%&nbsp;: nous montons et suivons les dossiers jusqu’au versement.
              </p>
            </div>
            <div className="rounded-2xl bg-white shadow-sm border border-emerald-100 p-5">
              <div className="flex items-center gap-3 text-emerald-700 font-semibold">
                <FiHome className="text-xl" /> Plateforme indépendante
              </div>
              <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                Notre intérêt est que le projet soit adapté à votre logement, pas de pousser une marque en particulier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÉTAPES — pastilles + flèches */}
      <section className="bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">Déroulé du projet</h2>
          <ul className="grid gap-6 md:grid-cols-4">
            <StepDot title="Demande & estimation">Vous complétez le formulaire. Rappel sous 24–48 h + 1ʳᵉ estimation d’aides.</StepDot>
            <StepDot title="Visite technique gratuite">Validation de la faisabilité, dimensionnement et implantation de l’unité extérieure.</StepDot>
            <StepDot title="Devis final & aides">Chiffrage détaillé, accompagnement pour MaPrimeRénov’ + CEE (déduction sur facture).</StepDot>
            <StepDot title="Travaux & mise en service" isLast>Dépose éventuelle de l’ancien système, pose, réglages et tests.</StepDot>
          </ul>
        </div>
      </section>

      {/* FORMULAIRE (section) — design premium */}
      <section id="devis" className="bg-white scroll-mt-36">
        <div className="container mx-auto max-w-5xl px-4 py-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold font-display">Votre devis Pompe à Chaleur personnalisé</h2>
            <p className="text-slate-600 mt-2">Réponse rapide – aucun engagement.</p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-emerald-200/60 to-teal-200/40 blur-md" />
              <div className="relative rounded-3xl border border-emerald-200 bg-white shadow-soft p-6 md:p-8">
                <PACForm context="section" onSuccess={() => setLeadOkSection(true)} />
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* CRO: Bouton sticky mobile vers le formulaire */}
      <div className="md:hidden fixed bottom-4 inset-x-0 px-4 z-40 pointer-events-none">
        <button
          onClick={scrollToDevis}
          className="pointer-events-auto w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 text-white font-semibold px-6 py-3 shadow-soft shadow-emerald-600/30"
        >
          Demander mon devis gratuit <FiArrowRight />
        </button>
      </div>
    </>
  );
}

/* ---------- UI ---------- */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm bg-white/15 text-white border border-white/25 px-3 py-1.5 rounded-full shadow">
      <FiCheck className="opacity-90" /> {children}
    </span>
  );
}
function AdvCard({ icon, title, children }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-soft transition-shadow">
      <div className="absolute inset-x-0 -top-0.5 h-1 rounded-t-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-start gap-4">
        <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-xl">{icon}</div>
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="text-slate-600 mt-1 text-sm leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}
function StepDot({ title, children, isLast = false }) {
  return (
    <li className="relative">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
        <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="text-slate-600 mt-1 text-sm leading-relaxed">{children}</p>
        </div>
      </div>
      {!isLast && (
        <svg className="hidden md:block absolute top-1/2 right-[-18px] -translate-y-1/2" width="36" height="12" viewBox="0 0 36 12" fill="none" aria-hidden="true">
          <path d="M0 6h28" stroke="currentColor" className="text-emerald-300" strokeWidth="2" strokeLinecap="round" />
          <path d="M28 1l7 5-7 5" fill="none" stroke="currentColor" className="text-emerald-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </li>
  );
}

/* ---------- Formulaire ---------- */
function PACForm({ context = "hero", onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // tracking conversion
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_submit",
        form: "pac",
        source: "pac-landing",
        context, // "hero" | "section"
        zip: payload.cp,
        energy: payload.energie_actuelle,
      });
    } catch {}

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "pac-landing",
          type: "lead",
          context, // utile pour spreadsheet côté backend
          payload,
        }),
      });

      if (!res.ok) throw new Error("Erreur réseau");
      setOk(true);
      try { window.dataLayer.push({ event: "lead_success", form: "pac", context }); } catch {}
      onSuccess && onSuccess();
    } catch {
      setError("Une erreur est survenue. Réessayez.");
      try { window.dataLayer.push({ event: "lead_error", form: "pac", context }); } catch {}
    } finally {
      setLoading(false);
    }
  }

  if (ok)
    return (
      <div className="mx-auto text-center p-6 bg-emerald-50 border border-emerald-200 rounded-2xl">
        <p className="text-lg font-semibold text-emerald-800">Merci ! Votre demande a bien été envoyée.</p>
        <p className="mt-1 text-emerald-900/80">Un conseiller vous recontacte rapidement.</p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Prénom"><Input name="prenom" required /></Field>
        <Field label="Nom"><Input name="nom" required /></Field>
        <Field label="Email"><Input type="email" name="email" required /></Field>
        <Field label="Téléphone"><Input name="telephone" inputMode="tel" required /></Field>
        <Field label="Code postal"><Input name="cp" pattern="[0-9]{5}" required /></Field>
        <Field label="Énergie actuelle"><Select name="energie_actuelle" required>
          <option>Fioul</option><option>Gaz</option><option>Électrique</option><option>Bois</option><option>Autre</option>
        </Select></Field>
        <Field label="Surface approximative"><Select name="surface" required>
          <option>&lt;70 m²</option><option>70–100 m²</option><option>100–130 m²</option><option>130–160 m²</option><option>&gt;160 m²</option>
        </Select></Field>
      </div>

      <Field label="Message (optionnel)"><Textarea name="message" rows={3} /></Field>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        disabled={loading}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 disabled:opacity-60"
      >
        {loading ? "Envoi…" : <>Envoyer ma demande <FiArrowRight /></>}
      </button>
      {/* CRO: Micro-copy rassurante sous le bouton */}
      <p className="text-xs text-slate-500 leading-snug">
        Nous vous appelons une seule fois pour étudier votre projet. Aucun engagement et aucune revente de vos coordonnées.
      </p>
    </form>
  );
}

/* Field avec étoile automatique si required */
function Field({ label, children }) {
  const child = React.Children.only(children);
  const isRequired = !!(child && child.props && child.props.required);
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label} {isRequired && <span className="text-red-600">*</span>}
      </label>
      {children}
    </div>
  );
}

/* petites utilitaires d'inputs (Tailwind) */
const inputBase = "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition";
function Input(props) { return <input {...props} className={inputBase} />; }
function Select(props) { return <select {...props} className={inputBase} />; }
function Textarea(props) { return <textarea {...props} className={inputBase} />; }
