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

const PUBLISHED = '2026-07-14';
const PATH = '/blog/tva-5-5-travaux-renovation-energetique-2026';

export default function ArticleTva55TravauxRenovation() {
  useSeo({
    title: "TVA à 5,5 % sur les travaux de rénovation énergétique : le guide 2026 | RenoHab",
    description:
      "La TVA à 5,5 % s'applique à tous les propriétaires sans condition de revenus. Découvrez les travaux éligibles, comment en bénéficier et comment la cumuler avec MaPrimeRénov' et les CEE.",
    path: PATH,
    image: '/blog/tva-5-5-travaux-renovation-energetique-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "TVA à 5,5 % sur les travaux de rénovation énergétique : le guide complet 2026",
      description:
        "La TVA à 5,5 % s'applique à tous les propriétaires sans condition de revenus. Travaux éligibles, démarches simplifiées et cumul avec les autres aides en 2026.",
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
      about: ['TVA réduite', 'Rénovation énergétique', 'Aides travaux', 'Fiscalité'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 14 juillet 2026 · Aides &amp; fiscalité
          </p>

          <h1>TVA à 5,5 % sur les travaux de rénovation énergétique : le guide complet 2026</h1>

          <img
            src="/blog/tva-5-5-travaux-renovation-energetique-2026.jpg"
            alt="Travaux d'isolation dans un logement"
            className="w-full rounded-xl shadow-soft mb-8 object-cover"
            loading="eager"
          />

          <p className="lead">
            La TVA à 5,5 % est l'une des aides à la rénovation énergétique les plus méconnues. Pourtant,
            elle s'applique à tous les propriétaires — sans condition de revenus — et peut représenter
            plusieurs milliers d'euros d'économies sur une facture de travaux. Bonne nouvelle supplémentaire :
            la loi de finances pour 2026 a supprimé l'attestation Cerfa, simplifiant encore la démarche.
            Mode d'emploi complet.
          </p>

          <h2>Ce qu'est vraiment la TVA à 5,5 %</h2>
          <p>
            En France, le taux normal de TVA est de 20 %. Pour les travaux d'amélioration énergétique
            réalisés sur des logements achevés depuis plus de deux ans, l'État applique un taux réduit
            à 5,5 %. La différence est directement visible sur la facture : pour <strong>10 000 € HT
            de travaux</strong>, vous payez 10 550 € TTC au lieu de 12 000 €, soit une économie
            de <strong>1 450 €</strong> sans aucune démarche administrative complexe.
          </p>
          <p>
            Un autre taux réduit existe à 10 % pour les travaux de rénovation non énergétiques
            (ravalement, plomberie classique, peinture…). Le taux de 5,5 % est donc le niveau
            le plus avantageux, réservé aux travaux qui améliorent concrètement la performance
            thermique du logement.
          </p>

          <h2>Qui peut bénéficier de la TVA à 5,5 % ?</h2>
          <p>
            L'avantage majeur de ce dispositif : il n'y a <strong>aucune condition de revenus</strong>.
            Peuvent en bénéficier :
          </p>
          <ul>
            <li>Les propriétaires occupants (résidence principale ou secondaire)</li>
            <li>Les propriétaires bailleurs</li>
            <li>Les locataires (pour certains travaux d'amélioration autorisés par le bailleur)</li>
            <li>Les syndicats de copropriétaires</li>
            <li>Les SCI (sociétés civiles immobilières)</li>
          </ul>
          <p>
            La seule condition structurelle : le logement doit être <strong>achevé depuis plus de deux ans</strong>{' '}
            au moment du début des travaux. Les constructions neuves et les locaux à usage professionnel
            exclusif sont exclus.
          </p>

          <h2>La simplification 2026 : plus besoin du Cerfa</h2>
          <p>
            Jusqu'en 2025, bénéficier de la TVA à 5,5 % impliquait de remplir une attestation fiscale
            (formulaire Cerfa n°1301-SD) à remettre à l'artisan avant le démarrage du chantier. La{' '}
            <strong>loi de finances pour 2026 a supprimé cette formalité</strong>. Il n'est désormais
            plus nécessaire de remplir ce document : votre entreprise applique directement le taux
            réduit sur sa facture, dès lors que les travaux répondent aux critères d'éligibilité.
          </p>
          <p>
            Cette simplification réduit le risque d'oublier l'attestation — et donc de se retrouver
            avec une facture à 20 % qui aurait pu être à 5,5 %.
          </p>

          <h2>Quels travaux sont éligibles au taux de 5,5 % ?</h2>

          <h3>Équipements de chauffage et d'eau chaude</h3>
          <ul>
            <li>
              <strong>Pompe à chaleur air/eau ou géothermique</strong> : la solution de chauffage
              la plus performante, également éligible à MaPrimeRénov'. Voir notre guide{' '}
              <a href="/pompe-a-chaleur">pompe à chaleur</a>.
            </li>
            <li>Chauffe-eau thermodynamique (CET)</li>
            <li>Chaudière à condensation (gaz ou fioul)</li>
            <li>Poêles, inserts et chaudières à bois ou à granulés (biomasse)</li>
          </ul>
          <p className="text-sm italic text-gray-500">
            À noter : les pompes à chaleur air/air (climatiseurs réversibles) ne sont PAS éligibles
            au taux de 5,5 % — elles relèvent du taux de 10 %.
          </p>

          <h3>Isolation thermique de l'enveloppe</h3>
          <ul>
            <li>Isolation des combles perdus et rampants</li>
            <li>Isolation des murs par l'intérieur (ITI) ou par l'extérieur (ITE)</li>
            <li>Isolation des planchers bas et sous-sols</li>
            <li>
              Remplacement des fenêtres, portes-fenêtres et portes donnant sur l'extérieur
              (en passant d'un simple vitrage à un double vitrage, ou vers le triple vitrage)
            </li>
            <li>Volets isolants et stores à lames orientables</li>
          </ul>

          <h3>Ventilation et régulation</h3>
          <ul>
            <li>VMC double flux et VMC simple flux hygroréglable</li>
            <li>Thermostats programmables et régulateurs connectés</li>
            <li>Robinets thermostatiques</li>
          </ul>

          <h2>Ce qui n'est pas éligible à 5,5 %</h2>
          <ul>
            <li>Les panneaux solaires photovoltaïques (soumis au taux de 20 %)</li>
            <li>Les matériaux achetés seuls, sans prestation de pose par une entreprise</li>
            <li>Les travaux sur des logements de moins de deux ans</li>
            <li>Les équipements sans lien direct avec l'amélioration thermique (électroménager, etc.)</li>
          </ul>

          <h2>Les travaux induits : un avantage souvent ignoré</h2>
          <p>
            Quand des travaux énergétiques entraînent des interventions complémentaires — dépose
            d'un ancien revêtement avant une ITE, ragréage de sol après isolation, etc. — ces
            « travaux induits » peuvent eux aussi bénéficier du taux de 5,5 %, à condition d'être
            réalisés dans les <strong>3 mois suivant les travaux principaux</strong>.
          </p>

          <h2>Comment cumuler TVA réduite et autres aides ?</h2>
          <p>
            La TVA à 5,5 % se cumule avec toutes les autres aides à la rénovation énergétique :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov'</strong> : subvention Anah versée après les travaux, sous
              conditions de revenus, pour les mêmes gestes éligibles.
            </li>
            <li>
              <strong>CEE (Certificats d'Économies d'Énergie)</strong> : prime versée directement
              par les fournisseurs d'énergie, sans condition de revenus ni de plafond.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : prêt à taux zéro pour financer le reste à charge,
              sans intérêts.
            </li>
          </ul>
          <p>
            Important : la TVA réduite agit <strong>en amont</strong>, sur le coût total des travaux.
            Elle réduit la base de calcul dès la facturation, ce qui diminue mécaniquement le reste
            à charge avant même d'appliquer les subventions.
          </p>
          <p>
            Pour estimer vos aides personnalisées — MaPrimeRénov', CEE et Éco-PTZ inclus —
            utilisez notre <a href="/simulateur">simulateur d'aides</a> ou faites{' '}
            <a href="/dpe-gratuit">estimer votre DPE gratuitement</a> pour identifier les travaux
            prioritaires.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Calculez vos économies en 2 minutes</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            TVA à 5,5 %, MaPrimeRénov', CEE : RenoHab monte tous vos dossiers d'aides et coordonne
            des artisans RGE pour sécuriser votre chantier.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/simulateur"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Simuler mes aides
            </a>
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Estimer mon DPE
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
