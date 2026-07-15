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

const PUBLISHED = '2026-07-15';
const PATH = '/blog/fenetres-double-vitrage-aides-2026';

export default function ArticleFenetresDoubleVitrage2026() {
  useSeo({
    title: "Fenêtres et double vitrage en 2026 : aides, prix et critères techniques | RenoHab",
    description:
      "MaPrimeRénov', CEE, TVA à 5,5 % : tout ce que vous devez savoir sur les aides pour changer vos fenêtres en double vitrage en 2026, avec les critères techniques (Uw ≤ 1,3) et les prix moyens.",
    path: PATH,
    image: '/blog/fenetres-double-vitrage-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Fenêtres et double vitrage en 2026 : aides, prix et critères techniques",
      description:
        "MaPrimeRénov', CEE, TVA à 5,5 % : tout ce que vous devez savoir sur les aides pour changer vos fenêtres en double vitrage en 2026, avec les critères techniques et les prix moyens.",
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
      about: ['Rénovation énergétique', 'Fenêtres', 'Double vitrage', 'MaPrimeRénov', 'CEE'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 15 juillet 2026 · Isolation &amp; menuiseries
          </p>

          <h1>Fenêtres et double vitrage en 2026 : aides, prix et critères techniques</h1>

          <img
            src="/blog/fenetres-double-vitrage-aides-2026.jpg"
            alt="Remplacement de fenêtres en double vitrage pour améliorer l'isolation thermique"
            className="w-full rounded-xl object-cover max-h-80 mb-8"
            loading="eager"
          />

          <p className="lead">
            Changer ses fenêtres reste l'un des premiers réflexes des propriétaires souhaitant
            réduire leur facture de chauffage. En 2026, plusieurs aides restent accessibles pour
            financer ce geste : MaPrimeRénov', primes CEE et TVA réduite à 5,5 %. Mais toutes
            ne s'appliquent pas dans les mêmes situations. Voici un guide clair pour savoir ce à
            quoi vous avez droit, à quelles conditions, et combien cela va vraiment vous coûter.
          </p>

          <h2>Pourquoi remplacer ses fenêtres en 2026 ?</h2>
          <p>
            Les fenêtres représentent jusqu'à <strong>10 à 15 % des déperditions thermiques</strong>{' '}
            d'un logement mal isolé. Lorsqu'elles datent des années 1970-1990, beaucoup sont encore
            équipées de simple vitrage, dont la résistance thermique est très faible. Passer au
            double vitrage performant permet de :
          </p>
          <ul>
            <li>Réduire la consommation de chauffage de 5 à 10 % en moyenne ;</li>
            <li>Améliorer le confort thermique en supprimant l'effet « paroi froide » ;</li>
            <li>Diminuer les nuisances sonores grâce aux vitrages feuilletés ou acoustiques ;</li>
            <li>Faire progresser la note de votre <a href="/dpe-gratuit">DPE</a>, ce qui valorise votre bien.</li>
          </ul>

          <h2>La condition clé : remplacement d'un simple vitrage</h2>
          <p>
            C'est le point que beaucoup ignorent : <strong>MaPrimeRénov' par geste pour les fenêtres
            ne finance que le remplacement d'un simple vitrage par un double vitrage</strong>. Si
            vos fenêtres sont déjà en double vitrage (même ancien), elles ne sont pas éligibles à
            cette aide spécifique. Le dispositif vise à éliminer les parois à très faible performance
            du parc de logements français.
          </p>
          <p>
            En revanche, d'autres aides (TVA à 5,5 % et primes CEE) s'appliquent à l'ensemble
            des remplacements de menuiseries dès lors que le nouveau vitrage respecte les critères
            techniques.
          </p>

          <h2>Le critère technique indispensable : Uw ≤ 1,3 W/m²K</h2>
          <p>
            Pour prétendre aux aides (MaPrimeRénov', CEE BAR-EN-104, Éco-PTZ), la fenêtre posée
            doit afficher un <strong>coefficient de transmission thermique global Uw ≤ 1,3 W/m²K</strong>.
            Ce coefficient prend en compte non seulement le vitrage, mais aussi le cadre (PVC,
            aluminium à rupture de pont thermique, bois). Vérifiez ce chiffre dans les fiches
            techniques du fabricant avant de signer un devis.
          </p>

          <h3>Double vitrage ou triple vitrage ?</h3>
          <p>
            Le triple vitrage (Uw autour de 0,8 W/m²K) est pertinent dans les régions à hivers
            rigoureux (Alsace, Lorraine, Franche-Comté, Massif Central) ou pour une maison passive.
            Ailleurs, un bon double vitrage à isolation renforcée (Uw ≤ 1,1) offre un rapport
            performance/prix plus avantageux. Les aides ne varient pas selon la technologie : vous
            touchez le même montant pour un double ou un triple vitrage éligible.
          </p>

          <h2>Les aides disponibles en 2026</h2>

          <h3>MaPrimeRénov' par geste</h3>
          <p>
            Cette aide de l'Anah est réservée au remplacement de <em>simple vitrage → double vitrage</em>.
            Le plafond de dépense subventionnable est fixé à <strong>1 000 € par fenêtre</strong>{' '}
            (pose comprise). Le taux de subvention varie selon les revenus du foyer :
          </p>
          <ul>
            <li><strong>Ménages très modestes (MaPrimePlus) :</strong> jusqu'à 100 €/fenêtre ;</li>
            <li><strong>Ménages modestes :</strong> jusqu'à 80 €/fenêtre ;</li>
            <li><strong>Ménages intermédiaires et supérieurs :</strong> non éligibles à cette aide.</li>
          </ul>
          <p>
            Un <strong>artisan RGE</strong> (Reconnu Garant de l'Environnement) est obligatoire pour
            que la facture ouvre droit à l'aide. Le versement est déduit directement de votre facture
            (avance de trésorerie gérée par l'entreprise partenaire).
          </p>

          <h3>Primes CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            La fiche CEE BAR-EN-104 (« Fenêtres ou portes-fenêtres complètes ») s'applique sans
            condition de revenus. Le montant de la prime est calculé par m² de fenêtre remplacée :
            comptez <strong>10 à 20 € par m²</strong> selon les offres des obligés énergétiques.
            Demandez plusieurs devis « CEE inclus » pour comparer — certains installateurs répercutent
            une prime plus élevée pour attirer les clients.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            La TVA réduite à 5,5 % s'applique automatiquement sur la facture d'un artisan RGE,
            sans démarche supplémentaire. Pour une fenêtre à 800 € HT, cela représente une économie
            de 152 € par rapport au taux normal à 20 %.
          </p>

          <h3>Éco-PTZ</h3>
          <p>
            Si vous remplacez vos fenêtres dans le cadre d'un <a href="/pompe-a-chaleur">projet de
            rénovation d'ensemble</a> (isolation + chauffage, par exemple), l'Éco-PTZ permet de
            financer jusqu'à <strong>50 000 € de travaux à 0 % d'intérêt</strong> sur 15 ans. C'est
            particulièrement intéressant pour les ménages aux revenus intermédiaires qui n'ont pas
            accès à MaPrimeRénov'.
          </p>

          <h2>Combien ça coûte, et quel reste à charge ?</h2>
          <p>
            Le prix d'une fenêtre posée varie selon les matériaux et la taille :
          </p>
          <ul>
            <li><strong>PVC :</strong> 400 à 900 € par fenêtre posée (rapport qualité/prix souvent optimal) ;</li>
            <li><strong>Aluminium à rupture de pont thermique :</strong> 700 à 1 500 € ;</li>
            <li><strong>Bois :</strong> 900 à 2 000 € (entretien à prévoir).</li>
          </ul>
          <p>
            Pour un ménage très modeste remplaçant 8 fenêtres en simple vitrage par du PVC double
            vitrage (à 600 €/fenêtre), le calcul devient :
          </p>
          <ul>
            <li>Coût total HT : 8 × 600 € = 4 800 €</li>
            <li>TVA 5,5 % : 264 € (au lieu de 960 € à 20 %)</li>
            <li>MaPrimeRénov' : 8 × 100 € = 800 €</li>
            <li>Prime CEE estimée : 8 × 15 €/m² × 1,2 m² = environ 144 €</li>
            <li><strong>Reste à charge estimé : ≈ 4 120 € TTC</strong></li>
          </ul>

          <h2>Les étapes pour lancer votre projet</h2>
          <ol>
            <li>
              <strong>Faites un bilan thermique de votre logement.</strong> Un <a href="/dpe-gratuit">DPE
              actualisé</a> vous donnera la liste des postes de déperdition à traiter en priorité.
            </li>
            <li>
              <strong>Vérifiez l'éligibilité de votre situation.</strong> Si vos fenêtres sont déjà
              en double vitrage, MaPrimeRénov' ne s'applique pas — mais TVA à 5,5 % et CEE restent
              accessibles si le nouveau Uw est ≤ 1,3.
            </li>
            <li>
              <strong>Obtenez au moins 3 devis d'artisans RGE</strong>, en demandant explicitement la
              mention du Uw sur chaque devis ainsi que le montant de prime CEE répercuté.
            </li>
            <li>
              <strong>Déposez votre dossier MaPrimeRénov'</strong> sur maprimerenov.gouv.fr avant
              de signer les devis (l'ordre des démarches conditionne le versement).
            </li>
            <li>
              <strong>Pensez à l'ensemble de l'enveloppe.</strong> Les fenêtres seules ne feront pas
              sauter deux classes DPE. Couplées à une <a href="/pompe-a-chaleur">pompe à chaleur</a>{' '}
              et à l'isolation des combles, elles s'inscrivent dans une rénovation d'ampleur bien
              plus efficace — et financée plus généreusement.
            </li>
          </ol>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre projet fenêtres en main</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            En tant qu'Accompagnateur Rénov' agréé, RenoHab monte vos dossiers d'aides et coordonne
            les artisans RGE pour que vous touchiez chaque euro auquel vous avez droit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE
            </a>
            <a
              href="/simulateur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
