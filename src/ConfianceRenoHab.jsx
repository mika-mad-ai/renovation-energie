import React from 'react';
import { FiStar, FiShield, FiUsers, FiCheckCircle } from 'react-icons/fi';

const cases = [
  {
    title: 'Maison familiale - 120 m²',
    content:
      'Remplacement d’une chaudière fioul par une PAC Air/Eau. Aides cumulées (MaPrimeRénov’, CEE, bonus ANAH) jusqu’à 14 999 € selon le revenu fiscal.',
  },
  {
    title: 'Pavillon récent - 90 m²',
    content: 'Installation compacte RGE avec assistance dossier, reste à charge estimé à 1 € après aides nationales et locales.',
  },
  {
    title: 'Résidence secondaire - 150 m²',
    content: 'Optimisation des aides malgré un usage partiel, économies moyennes projetées : 35 % sur la facture d’énergie annuelle.',
  },
];

const steps = [
  'Demande en ligne en moins de 2 minutes',
  'Vérification de l’éligibilité aux aides (MaPrimeRénov’, ANAH, CEE, aides locales)',
  'Mise en relation avec nos installateurs partenaires triés sur le volet',
  'Validation finale du devis par le client avant lancement du chantier',
];

export default function ConfianceRenoHab() {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50/40 py-16 px-4">
      <div className="mx-auto max-w-6xl space-y-12 rounded-[40px] border border-emerald-100 bg-white/80 p-8 shadow-card shadow-emerald-900/5 backdrop-blur">
        <header className="space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            <FiShield className="h-4 w-4" /> Confiance
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Pourquoi faire confiance à RenoHab pour votre pompe à chaleur ?
          </h2>
          <p className="text-base text-slate-600 md:text-lg">
            Nous privilégions la pédagogie et la transparence à chaque étape, afin de sécuriser votre investissement énergétique.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
            <img
              src="/Marianne_logo.png"
              alt="Marianne - République Française"
              className="h-12 w-auto rounded-xl border border-emerald-100 bg-white/80 p-2 shadow-sm"
              loading="lazy"
            />
            <img
              src="/Logo_Anah.svg.png"
              alt="Logo ANAH"
              className="h-12 w-auto rounded-xl border border-emerald-100 bg-white/80 p-2 shadow-sm"
              loading="lazy"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <article className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-white p-6 shadow-lg shadow-emerald-900/5">
            <div className="flex items-center gap-3 text-emerald-600">
              <FiStar className="h-8 w-8" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">Études de cas types</p>
                <h3 className="text-xl font-semibold text-slate-900">Des scénarios réalistes, pas des avis</h3>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Ces cas types illustrent la manière dont nous montons les dossiers PAC Air/Eau et optimisons les aides (jusqu’à 14 999 €). Ils ne sont pas des
              témoignages clients mais des exemples pour comprendre les gains possibles, dont les économies estimées sur votre facture d’énergie.
            </p>
            <ul className="mt-6 space-y-4">
              {cases.map(({ title, content }) => (
                <li key={title} className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-emerald-100">
                  <p className="text-sm font-semibold text-slate-800">{title}</p>
                  <p className="mt-2 text-sm text-slate-600">{content}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg shadow-emerald-900/5">
            <div className="flex items-center gap-3 text-emerald-600">
              <FiCheckCircle className="h-8 w-8" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">Méthode RenoHab</p>
                <h3 className="text-xl font-semibold text-slate-900">Notre accompagnement</h3>
              </div>
            </div>
            <ol className="mt-6 space-y-4">
              {steps.map((label, index) => (
                <li key={label} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">{index + 1}</span>
                  <p className="text-sm text-slate-700">{label}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm font-semibold text-emerald-800">
              Aucun frais caché, accompagnement 100 % transparent.
            </p>
          </article>

          <article className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg shadow-emerald-900/5">
            <div className="flex items-center gap-3 text-emerald-600">
              <FiUsers className="h-8 w-8" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">Transparence</p>
                <h3 className="text-xl font-semibold text-slate-900">Service récent, sérieux assumé</h3>
              </div>
            </div>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <p>RenoHab est un service récent : nous préférons le dire franchement plutôt que de montrer de faux avis.</p>
              <p>
                Les premiers retours clients seront publiés au fil des projets livrés, preuve par preuve. Cette transparence reflète notre
                sérieux et l’attention portée à chaque installation.
              </p>
              <p className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/50 p-4 text-emerald-800">
                Nous partageons régulièrement les avancées chantiers, photos avant/après et informations aides pour que vous puissiez suivre l’accompagnement en
                toute confiance.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
