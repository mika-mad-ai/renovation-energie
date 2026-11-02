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
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-11-02';
const PATH = '/blog/triple-vitrage-double-vitrage-guide-2026';

export default function ArticleTripleVitrageDoubleVitrageGuide2026() {
  useSeo({
    title: "Triple vitrage ou double vitrage : lequel choisir et financer en 2026 ? | RenoHab",
    description:
      "Ug 0,5 vs 1,0 W/m²K, prix, zones climatiques et aides CEE 2026 : le guide complet pour choisir entre double et triple vitrage après la suppression de MaPrimeRénov' par geste.",
    path: PATH,
    image: '/blog/triple-vitrage-double-vitrage-guide-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Triple vitrage ou double vitrage : lequel choisir et financer en 2026 ?",
      description:
        "Comparatif complet double vitrage vs triple vitrage : performances Ug, zones climatiques, prix posés, prime CEE (BAR-EN-104), TVA 5,5 % et éco-PTZ en 2026.",
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
      about: ['Triple vitrage', 'Double vitrage', 'Isolation fenêtres', 'Prime CEE', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 2 novembre 2026 · Isolation
          </p>

          <h1>Triple vitrage ou double vitrage : lequel choisir et financer en 2026 ?</h1>

          <img
            src="/blog/triple-vitrage-double-vitrage-guide-2026.jpg"
            alt="Fenêtre à triple vitrage installée dans une maison rénovée — isolation thermique performante"
            className="w-full rounded-2xl shadow-card my-6"
            loading="eager"
          />

          <p className="lead">
            Avec l'arrivée de l'hiver, le remplacement des fenêtres revient en tête des projets de
            rénovation. Faut-il opter pour le double vitrage performant ou investir dans le triple
            vitrage ? Depuis la réforme de septembre 2026 qui a retiré les fenêtres de
            MaPrimeRénov' par geste, la question du financement s'est aussi resserrée. Ce guide
            fait le point sur les performances, les prix et les aides encore disponibles.
          </p>

          <h2>Double vitrage vs triple vitrage : les différences techniques</h2>
          <p>
            Le facteur clé est le <strong>coefficient Ug</strong> (transmittance thermique du
            vitrage), qui mesure les déperditions de chaleur : plus il est bas, meilleure est
            l'isolation.
          </p>
          <ul>
            <li>
              <strong>Double vitrage performant</strong> (argon + couche à faible émissivité,
              dit VIR) : Ug ≈ <strong>1,0–1,1 W/m²K</strong>, poids ≈ 20 kg/m².
              Prix fourni-posé : <strong>450–800 €/fenêtre</strong>.
            </li>
            <li>
              <strong>Triple vitrage</strong> (deux lames de gaz entre trois couches de verre) :
              Ug ≈ <strong>0,5–0,7 W/m²K</strong>, poids ≈ 30 kg/m².
              Prix fourni-posé : <strong>650–1 200 €/fenêtre</strong> (surcoût de 30 à 50 %).
            </li>
          </ul>
          <p>
            Le triple vitrage divise par environ deux les pertes thermiques, mais il est plus
            lourd (ce qui peut imposer un renfort des châssis) et affiche un facteur solaire plus
            faible : vous captiez moins de chaleur solaire gratuite en hiver. Sur la seule
            facture énergétique, le double vitrage à haut rendement reste très compétitif dans la
            majorité des logements français.
          </p>

          <h2>Dans quelle zone climatique le triple vitrage est-il rentable ?</h2>
          <p>
            La France est découpée en trois zones climatiques réglementaires :
          </p>
          <ul>
            <li>
              <strong>Zone H1</strong> (Nord, Est, Massif Central, Alpes, Pyrénées) : hivers
              longs et rigoureux. C'est ici que le triple vitrage se justifie le mieux. La
              différence de Ug se traduit par des économies de chauffage réelles sur la durée.
            </li>
            <li>
              <strong>Zone H2</strong> (Centre, Bretagne, façade atlantique) : hivers doux à
              modérés. Un double vitrage performant (Uw ≤ 1,1 W/m²K) offre en général un
              meilleur rapport performance/prix. Le triple vitrage reste pertinent pour les
              façades très exposées au vent ou les pièces de nuit.
            </li>
            <li>
              <strong>Zone H3</strong> (Méditerranée, Sud-Ouest) : le triple vitrage est
              surdimensionné ; la priorité est plutôt le confort d'été et le facteur solaire.
            </li>
          </ul>
          <p>
            Si votre logement est en zone H1 ou fortement exposé au nord, le surcoût du triple
            vitrage peut être rentabilisé en 15 à 25 ans. Il améliore aussi sensiblement le
            confort hygrothermique (disparition des parois froides, moins de condensation).
          </p>

          <h2>Quel impact sur le DPE ?</h2>
          <p>
            Le Diagnostic de Performance Énergétique prend en compte la résistance thermique des
            menuiseries. Remplacer des fenêtres simple vitrage par un double vitrage VIR peut
            faire gagner une demi-classe à une classe complète, selon la surface vitrée et le
            mode de chauffage. En revanche, passer de double vitrage récent (≤ 10 ans) à triple
            vitrage génère un gain marginal sur le DPE — au regard du surcoût, d'autres postes
            (isolation des combles, pompe à chaleur) sont souvent prioritaires.
          </p>
          <p>
            Pour connaître le gain réel sur votre logement, faites réaliser un{' '}
            <a href="/dpe-gratuit">DPE actualisé</a> avant de vous engager.
          </p>

          <h2>Les aides financières disponibles en 2026</h2>

          <h3>La prime énergie CEE (fiche BAR-EN-104)</h3>
          <p>
            La fiche BAR-EN-104 couvre le remplacement de fenêtres ou portes-fenêtres complètes
            avec vitrage isolant dans les logements achevés depuis plus de 2 ans. Condition de
            performance : <strong>Uw ≤ 1,3 W/m²K</strong> et facteur solaire{' '}
            <strong>Sw ≥ 0,3</strong> en zones H1 et H2. Double et triple vitrage y sont éligibles
            à égalité dès lors que le seuil est atteint. Le montant de la prime dépend du
            fournisseur d'énergie sollicité : comptez indicativement <strong>50 à 150 €</strong>{' '}
            par fenêtre selon votre zone et vos revenus. Les ménages très modestes perçoivent
            souvent une prime bonifiée.
          </p>
          <p>
            Pour explorer les primes CEE disponibles sur votre projet, consultez le{' '}
            <a href="/blog/cee-2026-prime-energie-comment-en-profiter">
              guide complet des primes énergie 2026
            </a>
            .
          </p>

          <h3>La TVA à 5,5 %</h3>
          <p>
            Tout remplacement de fenêtres dans un logement achevé depuis plus de 2 ans bénéficie
            automatiquement de la <strong>TVA réduite à 5,5 %</strong> (contre 20 % pour les
            travaux classiques) sur la fourniture et la main-d'œuvre. Cette économie représente
            environ 300 à 500 € sur un chantier de 8 fenêtres.
          </p>

          <h3>L'Éco-PTZ</h3>
          <p>
            L'éco-prêt à taux zéro permet de financer jusqu'à <strong>50 000 €</strong> de
            travaux de rénovation énergétique sans intérêts, sur une durée pouvant aller jusqu'à
            20 ans. Le remplacement de fenêtres y est éligible, seul ou en combinaison avec
            d'autres travaux. Il se cumule avec les primes CEE et la TVA réduite. Votre banque
            est l'interlocuteur direct pour monter le dossier.
          </p>

          <h2>MaPrimeRénov' et fenêtres : ce qui a changé en septembre 2026</h2>
          <p>
            Depuis le <strong>1er septembre 2026</strong> (décret n° 2026-822 du 25 août 2026),
            les fenêtres ne sont plus éligibles à <strong>MaPrimeRénov' par geste</strong>. Seuls
            trois gestes restent accessibles par cette voie : la pompe à chaleur, le
            raccordement à un réseau de chaleur urbain et l'audit énergétique couplé à une
            rénovation d'ampleur.
          </p>
          <p>
            En revanche, si vos menuiseries s'inscrivent dans un{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">
              projet de rénovation d'ampleur
            </a>{' '}
            (gain de 2 classes DPE ou plus), elles peuvent contribuer au calcul global et aider
            à débloquer les aides MaPrimeRénov' les plus élevées (jusqu'à 70 % du coût total
            des travaux pour les ménages très modestes).
          </p>

          <h2>En résumé : comment choisir ?</h2>
          <ul>
            <li>
              <strong>Zone H1, murs anciens, façade nord :</strong> le triple vitrage se
              justifie techniquement et financièrement, surtout si vos châssis nécessitent de
              toute façon un remplacement complet.
            </li>
            <li>
              <strong>Zone H2 ou H3, maison construite après 2000 :</strong> optez pour un
              double vitrage VIR performant (Uw ≤ 1,1). L'économie de 30 à 50 % sur le prix
              est mieux investie dans l'isolation des combles ou une{' '}
              <a href="/pompe-a-chaleur">pompe à chaleur</a>.
            </li>
            <li>
              <strong>Remplacement de simple vitrage ancien :</strong> n'importe quel double
              vitrage argon récent constitue déjà un bond énorme — souvent plus rentable
              qu'un triple vitrage sur du double existant.
            </li>
          </ul>
          <p>
            Dans tous les cas, demandez à votre installateur un devis mentionnant explicitement le
            Uw final de la fenêtre posée : c'est ce coefficient qui conditionne l'éligibilité à
            la prime CEE et l'impact sur votre <a href="/dpe-gratuit">DPE</a>.
          </p>

          <p>
            Retrouvez tous nos articles sur les aides et travaux de rénovation dans notre{' '}
            <a href="/blog">guide du blog RenoHab</a>.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Quel vitrage pour votre logement ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Faites estimer votre DPE et découvrez les travaux prioritaires pour optimiser vos économies d'énergie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </a>
            <a href="/simulateur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
