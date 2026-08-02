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
        <p className="text-gray-400">Votre Rénovation Énergétique, Simplifiée & Financée.</p>
        <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} RenoHab. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-08-02';
const PATH = '/blog/maprimerenov-septembre-2026-gestes-suppression';

export default function ArticleMaPrimeRenovSeptembre2026() {
  useSeo({
    title: "MaPrimeRénov' : ce qui disparaît au 1er septembre 2026 — agissez avant la date limite | RenoHab",
    description:
      "Au 1er septembre 2026, l'isolation des combles, les fenêtres, la VMC, le chauffe-eau thermodynamique et les poêles à granulés quittent le parcours MaPrimeRénov' par geste. Que faire avant la date limite ?",
    path: PATH,
    image: 'https://renohab.fr/blog/maprimerenov-septembre-2026-gestes-suppression.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "MaPrimeRénov' : ce qui disparaît au 1er septembre 2026 — agissez avant la date limite",
      description:
        "Au 1er septembre 2026, cinq gestes quittent le parcours MaPrimeRénov' par geste : isolation des combles, fenêtres, VMC, chauffe-eau thermodynamique et poêles à granulés. Que faire avant la date limite ?",
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
      about: ['MaPrimeRénov', 'Rénovation énergétique', 'Aides travaux 2026', 'Isolation', 'Fenêtres'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 2 août 2026 · Aides &amp; financement
          </p>

          <h1>MaPrimeRénov' : ce qui disparaît au 1er septembre 2026 — agissez avant la date limite</h1>

          <img
            src="/blog/maprimerenov-septembre-2026-gestes-suppression.jpg"
            alt="MaPrimeRénov' changements septembre 2026 — date limite pour déposer son dossier"
            className="w-full rounded-xl object-cover max-h-72 !mt-6 !mb-8"
            loading="eager"
          />

          <p className="lead">
            Dans moins d'un mois, le 1er septembre 2026, le gouvernement supprime cinq gestes du
            parcours <strong>MaPrimeRénov' par geste</strong> : isolation des combles, remplacement
            des fenêtres, VMC, chauffe-eau thermodynamique et poêles à granulés. Si vous avez un
            projet sur l'un de ces postes, vous avez quelques semaines pour déposer votre dossier
            aux conditions actuelles.
          </p>

          <h2>Cinq gestes qui quittent le dispositif monogeste</h2>
          <p>
            Jusqu'au 31 août 2026, le parcours <em>par geste</em> de MaPrimeRénov' permet de
            financer un travail isolé, sans obligation d'engager une rénovation globale. À partir du
            1er septembre 2026, seuls <strong>trois gestes restent éligibles</strong> en monogeste :
          </p>
          <ul>
            <li>La pompe à chaleur de chauffage (air/eau, eau/eau ou géothermique)</li>
            <li>Le raccordement à un réseau de chaleur</li>
            <li>La dépose d'une cuve à fioul</li>
          </ul>
          <p>Les cinq gestes qui disparaissent du parcours monogeste :</p>
          <ul>
            <li><strong>Isolation des combles perdus et des toitures</strong></li>
            <li><strong>Remplacement des fenêtres et portes-fenêtres</strong></li>
            <li><strong>Ventilation mécanique contrôlée (VMC) simple ou double flux</strong></li>
            <li><strong>Chauffe-eau thermodynamique (CET)</strong></li>
            <li><strong>Poêles et inserts à granulés (pellets)</strong></li>
          </ul>
          <p>
            Concrètement : si vous prévoyez d'isoler vos combles ou de changer vos fenêtres seuls,
            sans enchaîner d'autres travaux, il ne sera plus possible de demander MaPrimeRénov' pour
            ces postes après le 1er septembre 2026.
          </p>

          <h2>Exception importante : les logements F et G</h2>
          <p>
            Les propriétaires de logements classés <strong>F ou G au DPE</strong> bénéficient d'un
            délai supplémentaire. Pour eux, le parcours par geste reste accessible jusqu'au
            <strong> 31 décembre 2026</strong>, y compris pour les cinq gestes supprimés. C'est une
            mesure d'accompagnement pour les passoires thermiques dont les propriétaires ont besoin
            de plus de temps ou de moyens pour engager une rénovation d'ampleur.
          </p>
          <p>
            Si votre logement est en F ou G, vous avez donc jusqu'en fin d'année — mais
            n'attendez pas : les délais d'instruction des dossiers peuvent atteindre plusieurs
            semaines, et les artisans RGE sont très sollicités cet automne.
          </p>

          <h2>Que faire avant le 1er septembre 2026 ?</h2>
          <h3>Option 1 — Déposer son dossier monogeste avant la date limite</h3>
          <p>
            Si votre projet porte sur l'un des cinq gestes supprimés et que votre logement est
            classé A à E, <strong>la fenêtre se ferme le 31 août 2026</strong>. Pour que votre
            demande soit recevable, vous devez :
          </p>
          <ol>
            <li>Obtenir devis d'un artisan <strong>RGE (Reconnu Garant de l'Environnement)</strong></li>
            <li>Créer ou accéder à votre espace sur <a href="https://www.maprimerenov.gouv.fr" target="_blank" rel="noopener noreferrer">maprimerenov.gouv.fr</a></li>
            <li>Déposer le dossier en ligne avec le devis et les pièces justificatives</li>
          </ol>
          <p>
            RenoHab, en tant qu'<strong>Accompagnateur Rénov' agréé</strong>, peut vous aider à
            monter ce dossier en urgence et à identifier un artisan RGE disponible.
          </p>

          <h3>Option 2 — S'engager dans une rénovation d'ampleur</h3>
          <p>
            Le <strong>parcours rénovation d'ampleur</strong> de MaPrimeRénov' n'est pas impacté
            par la réforme : il reste entièrement disponible après septembre 2026 et permet de
            financer dans un seul dossier l'isolation, les fenêtres, la VMC et la pompe à chaleur.
            C'est la voie à privilégier si votre logement nécessite plusieurs postes de travaux.
          </p>
          <p>
            L'avantage : les aides sont nettement plus généreuses (jusqu'à 70 % du coût des
            travaux pour les ménages modestes), et le saut de classe DPE est garanti — condition
            d'accès aux aides maximales. Cette voie nécessite un <a href="/dpe-gratuit">audit
            énergétique</a> préalable, réalisable rapidement par RenoHab.
          </p>

          <h2>Peut-on combiner MaPrimeRénov' avec d'autres aides ?</h2>
          <p>
            Oui, et c'est même recommandé. MaPrimeRénov' se cumule avec :
          </p>
          <ul>
            <li>Les <strong>primes CEE</strong> (Certificats d'Économie d'Énergie), versées par les
              fournisseurs d'énergie sans condition de revenus</li>
            <li>L'<strong>Éco-PTZ</strong>, prêt à taux zéro jusqu'à 50 000 € pour financer le
              reste à charge</li>
            <li>La <strong>TVA à 5,5 %</strong> sur les travaux d'amélioration énergétique réalisés
              par un professionnel RGE</li>
          </ul>
          <p>
            En combinant ces dispositifs, il est possible de couvrir l'essentiel du coût des
            travaux, voire la totalité pour les ménages aux revenus modestes.
            <a href="/pompe-a-chaleur"> Voir notre guide sur la pompe à chaleur et ses aides</a>.
          </p>

          <h2>Ce que cette réforme signifie concrètement</h2>
          <p>
            Le gouvernement envoie un signal clair : il veut orienter les aides publiques vers les
            rénovations globales, plus efficaces énergétiquement, plutôt que vers des gestes
            isolés. La pompe à chaleur reste aidée parce qu'elle représente le principal levier de
            décarbonation du chauffage. Les autres gestes — isolation, fenêtres — ne disparaissent
            pas, mais ils sont désormais financés par MaPrimeRénov' uniquement dans le cadre d'un
            projet plus complet.
          </p>
          <p>
            Cette évolution est cohérente avec l'objectif de la France : atteindre un parc
            immobilier de classe B ou supérieur d'ici 2050. Une isolation seule ou des fenêtres
            seules ne permettent pas de sortir une passoire thermique du rouge ; une rénovation
            d'ampleur, si.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Agissez avant le 1er septembre</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Dossier MaPrimeRénov' en urgence, audit énergétique, rénovation d'ampleur : RenoHab
            vous accompagne pas à pas en tant qu'Accompagnateur Rénov' agréé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#simulator"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mes aides
            </a>
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Faire mon audit DPE
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
