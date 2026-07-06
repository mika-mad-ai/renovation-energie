import React from 'react';
import useSeo from './useSeo';

function ArticleHeader() {
  return (
    <header className="w-full bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <a href="/" aria-label="Accueil RenoHab">
            <img src="/RenoHabLogo.webp" alt="RenoHab" className="h-24 md:h-28 w-auto" />
          </a>
          <a
            href="/"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-soft hover:shadow-glow transition-all"
          >
            ← Accueil
          </a>
        </div>
      </div>
    </header>
  );
}

function ArticleFooter() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center">
        <img src="/RenoHabLogo.webp" alt="RenoHab" className="h-28 w-auto mx-auto mb-3" loading="lazy" />
        <p className="text-gray-400">Votre Rénovation Énergétique, Simplifiée &amp; Financée.</p>
        <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} RenoHab. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-07-06';
const PATH = '/blog/eco-ptz-2026-financer-renovation';

export default function ArticleEcoPtz2026() {
  useSeo({
    title: "Éco-PTZ 2026 : financer sa rénovation énergétique sans avance de fonds | RenoHab",
    description:
      "Comment fonctionne l'éco-prêt à taux zéro en 2026 : montants jusqu'à 50 000 €, travaux éligibles, cumul avec MaPrimeRénov' et démarches pour obtenir ce prêt sans intérêts.",
    path: PATH,
    image: '/blog/eco-ptz-2026-financer-renovation.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Éco-PTZ 2026 : financer sa rénovation énergétique sans avance de fonds",
      description:
        "Comment fonctionne l'éco-prêt à taux zéro en 2026 : montants jusqu'à 50 000 €, travaux éligibles, cumul avec MaPrimeRénov' et démarches pratiques.",
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: 'fr-FR',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://renohab.fr${PATH}` },
      author: { '@type': 'Organization', name: 'RenoHab', url: 'https://renohab.fr/' },
      publisher: {
        '@type': 'Organization',
        name: 'RenoHab',
        logo: { '@type': 'ImageObject', url: 'https://renohab.fr/logo192-renohab.png' },
      },
      about: ['Éco-PTZ', 'Financement rénovation énergétique', 'Prêt à taux zéro', 'MaPrimeRénov\''],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 6 juillet 2026 · Financement &amp; aides
          </p>

          <h1>Éco-PTZ 2026 : financer sa rénovation énergétique sans avance de fonds</h1>

          <img
            src="/blog/eco-ptz-2026-financer-renovation.jpg"
            alt="Signature d'un prêt pour financer une rénovation énergétique"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            MaPrimeRénov' couvre une partie des travaux, mais le reste à charge peut encore
            représenter plusieurs milliers d'euros. C'est précisément là qu'intervient
            l'<strong>éco-prêt à taux zéro (éco-PTZ)</strong> : un prêt sans intérêts, sans
            condition de revenus, remboursable sur jusqu'à 20 ans, qui peut atteindre{' '}
            <strong>50 000 €</strong> pour une rénovation globale. En 2026, il est plus accessible
            et plus complémentaire que jamais.
          </p>

          <h2>Qu'est-ce que l'éco-PTZ et qui peut en bénéficier ?</h2>
          <p>
            L'éco-PTZ est un prêt bancaire garanti par l'État, dont les intérêts sont pris en
            charge par le Trésor public. L'emprunteur ne rembourse que le capital — sans frais de
            dossier, sans intérêt. Son principal avantage par rapport à MaPrimeRénov' : il est
            accordé <strong>sans plafond de ressources</strong>. Propriétaires occupants, bailleurs
            et copropriétés y sont tous éligibles.
          </p>

          <h3>Conditions à remplir</h3>
          <ul>
            <li>Le logement doit être achevé depuis <strong>plus de 2 ans</strong> à la date de début des travaux.</li>
            <li>Il doit être utilisé ou destiné à être utilisé comme <strong>résidence principale</strong>.</li>
            <li>L'ensemble des travaux doit être réalisé par des <strong>professionnels certifiés RGE</strong> (Reconnu Garant de l'Environnement).</li>
            <li>Depuis le 1er juillet 2025, les travaux financés par l'éco-PTZ doivent respecter les <strong>mêmes exigences techniques</strong> que ceux éligibles à MaPrimeRénov'.</li>
          </ul>

          <h2>Quels montants selon votre projet ?</h2>
          <p>
            Le plafond de l'éco-PTZ dépend du nombre d'actions réalisées et du type de travaux :
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="px-4 py-2 text-left font-semibold text-emerald-800">Type de projet</th>
                  <th className="px-4 py-2 text-right font-semibold text-emerald-800">Montant maximum</th>
                  <th className="px-4 py-2 text-right font-semibold text-emerald-800">Durée max.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">1 action éligible (hors fenêtres)</td>
                  <td className="px-4 py-2 text-right">15 000 €</td>
                  <td className="px-4 py-2 text-right">15 ans</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-4 py-2">Remplacement de fenêtres seul</td>
                  <td className="px-4 py-2 text-right">7 000 €</td>
                  <td className="px-4 py-2 text-right">15 ans</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">2 actions éligibles</td>
                  <td className="px-4 py-2 text-right">25 000 €</td>
                  <td className="px-4 py-2 text-right">15 ans</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-4 py-2">3 actions ou plus</td>
                  <td className="px-4 py-2 text-right">30 000 €</td>
                  <td className="px-4 py-2 text-right">15 ans</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 font-semibold">Rénovation globale (≥ 35 % de gain)</td>
                  <td className="px-4 py-2 text-right font-semibold text-emerald-700">50 000 €</td>
                  <td className="px-4 py-2 text-right font-semibold text-emerald-700">20 ans</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-4 py-2">Assainissement non collectif</td>
                  <td className="px-4 py-2 text-right">10 000 €</td>
                  <td className="px-4 py-2 text-right">15 ans</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Source : France Rénov' / ecologie.gouv.fr, barème en vigueur en 2026.
          </p>

          <h2>Quels travaux sont éligibles à l'éco-PTZ ?</h2>
          <p>
            L'éco-PTZ finance des travaux répartis en grandes catégories :
          </p>

          <h3>Isolation thermique</h3>
          <ul>
            <li><strong>Isolation de la toiture</strong> : combles perdus, combles aménageables, toits-terrasses</li>
            <li><strong>Isolation des murs</strong> : par l'intérieur (ITI) ou par l'extérieur (ITE)</li>
            <li><strong>Isolation des planchers bas</strong> : sous-sol, vide sanitaire, garage</li>
            <li><strong>Remplacement des fenêtres et portes-fenêtres</strong> : double ou triple vitrage performant</li>
          </ul>

          <h3>Systèmes de chauffage et d'eau chaude</h3>
          <ul>
            <li><strong>Pompe à chaleur air/eau</strong> : le système de chauffage le plus aidé en 2026 — voir notre <a href="/pompe-a-chaleur">guide pompe à chaleur</a></li>
            <li><strong>Raccordement à un réseau de chaleur urbain</strong> alimenté par des énergies renouvelables</li>
            <li><strong>Chauffe-eau solaire individuel</strong> et chauffe-eau thermodynamique</li>
            <li><strong>Chaudière biomasse</strong> (bois, pellets)</li>
          </ul>

          <h3>Ventilation</h3>
          <ul>
            <li><strong>VMC double flux</strong> : améliore la qualité de l'air intérieur tout en récupérant la chaleur de l'air extrait</li>
          </ul>

          <p>
            Pour accéder au plafond de 50 000 € (rénovation globale), un{' '}
            <strong>audit énergétique préalable</strong> est obligatoire. Il doit démontrer que les
            travaux envisagés permettent un gain d'au moins <strong>deux classes DPE</strong> et une
            réduction de la consommation d'énergie primaire d'au moins 35 %.
          </p>

          <h2>Comment cumuler l'éco-PTZ avec MaPrimeRénov' ?</h2>
          <p>
            C'est là que l'éco-PTZ devient particulièrement puissant : il est <strong>entièrement
            cumulable avec MaPrimeRénov'</strong>. Son rôle est précisément de financer le{' '}
            <strong>reste à charge</strong> après déduction des subventions de l'Anah.
          </p>

          <p>
            Exemple concret pour une pompe à chaleur air/eau d'une valeur de 16 000 € pour un
            ménage aux revenus intermédiaires :
          </p>
          <ul>
            <li>MaPrimeRénov' (parcours par geste) : environ 4 000 à 6 000 €</li>
            <li>CEE (prime énergie du fournisseur) : environ 1 000 à 2 000 €</li>
            <li><strong>Reste à charge : 8 000 à 11 000 €</strong></li>
            <li>Éco-PTZ : jusqu'à 15 000 € sans intérêt, remboursable sur 15 ans → mensualité d'environ 55 € à 75 €</li>
          </ul>

          <p>
            Pour en bénéficier, la notification de l'Anah accordant MaPrimeRénov' doit dater de{' '}
            <strong>moins de six mois</strong>, et les travaux ne doivent pas avoir débuté depuis
            plus de trois mois. Mieux vaut donc coordonner les deux demandes dès le départ.
          </p>

          <p>
            Vous pouvez également cumuler l'éco-PTZ avec la <strong>TVA à 5,5 %</strong> applicable
            aux travaux de rénovation énergétique, et avec l'exonération de taxe foncière que
            proposent certaines collectivités locales. Pour connaître votre éligibilité aux aides,
            utilisez notre <a href="/#simulator">simulateur en ligne</a>.
          </p>

          <h2>Les démarches pratiques : comment obtenir un éco-PTZ ?</h2>

          <h3>1. Choisir les travaux et sélectionner des artisans RGE</h3>
          <p>
            Avant toute démarche bancaire, définissez précisément vos travaux avec des devis d'artisans
            certifiés RGE. C'est sur la base de ces devis que la banque étudiera votre dossier.
            RenoHab, en tant qu'Accompagnateur Rénov' agréé, peut vous aider à constituer ce dossier
            technique et à sélectionner des professionnels qualifiés.
          </p>

          <h3>2. Déposer la demande auprès d'une banque partenaire</h3>
          <p>
            L'éco-PTZ est distribué par les établissements bancaires ayant signé une convention avec
            l'État (la majorité des grandes banques françaises). Présentez vos devis RGE et, le cas
            échéant, la notification MaPrimeRénov' de l'Anah. La banque instruit le dossier et, si
            accepté, débloque les fonds directement auprès des artisans ou par versement.
          </p>

          <h3>3. Réaliser les travaux et envoyer les factures</h3>
          <p>
            Une fois les travaux achevés, transmettez les factures à votre banque dans un délai de
            trois ans. En cas de rénovation globale avec audit, ce délai peut être étendu. Le non-respect
            de ce délai entraîne la transformation du prêt en prêt classique avec intérêts.
          </p>

          <h2>Ce qu'il faut retenir</h2>
          <ul>
            <li>L'éco-PTZ est un prêt <strong>sans intérêts, sans condition de revenus</strong>, accessible à tous les propriétaires.</li>
            <li>Il peut atteindre <strong>50 000 €</strong> pour une rénovation globale (≥ 35 % de gain énergétique), remboursable sur 20 ans.</li>
            <li>Il est <strong>cumulable avec MaPrimeRénov'</strong> pour financer le reste à charge sans avance de trésorerie.</li>
            <li>Depuis juillet 2025, les travaux éligibles doivent respecter les <strong>mêmes exigences techniques</strong> que MaPrimeRénov'.</li>
            <li>Un <strong>audit énergétique</strong> est obligatoire pour accéder au plafond de 50 000 €.</li>
            <li>Toutes les entreprises intervenant sur le chantier doivent être <strong>certifiées RGE</strong>.</li>
          </ul>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Montez votre dossier éco-PTZ + MaPrimeRénov'</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            En tant qu'Accompagnateur Rénov' agréé, RenoHab coordonne vos demandes d'aides, sélectionne
            des artisans RGE et vous accompagne jusqu'au versement des financements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#simulator"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Simuler mes aides
            </a>
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
