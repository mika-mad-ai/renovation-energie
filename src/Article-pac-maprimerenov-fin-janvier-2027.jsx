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

const PUBLISHED = '2026-10-23';
const PATH = '/blog/pac-maprimerenov-fin-janvier-2027';

export default function ArticlePacMaPrimeRenovFin2027() {
  useSeo({
    title: "Pompe à chaleur et MaPrimeRénov' : pourquoi agir avant le 1er janvier 2027 | RenoHab",
    description:
      "Le PLF 2027 prévoit de retirer les pompes à chaleur de MaPrimeRénov' dès janvier 2027. Montants actuels, alternatives CEE et démarches pour sécuriser votre aide avant la fin d'année.",
    path: PATH,
    image: '/blog/pac-maprimerenov-fin-janvier-2027.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Pompe à chaleur et MaPrimeRénov' : pourquoi agir avant le 1er janvier 2027",
      description:
        "Le PLF 2027 prévoit de retirer les pompes à chaleur de MaPrimeRénov' dès janvier 2027. Montants actuels, alternatives CEE et démarches pour sécuriser votre aide avant la fin d'année.",
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
      about: ['Pompe à chaleur', 'MaPrimeRénov', 'Aides rénovation énergétique 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 23 oct. 2026 · Aides &amp; Chauffage
          </p>

          <h1>Pompe à chaleur et MaPrimeRénov' : pourquoi agir avant le 1er janvier 2027</h1>

          <img
            src="/blog/pac-maprimerenov-fin-janvier-2027.jpg"
            alt="Unité extérieure de pompe à chaleur installée en façade d'une maison individuelle"
            className="w-full rounded-xl my-6 shadow-card"
            loading="lazy"
          />

          <p className="lead">
            Le projet de loi de finances (PLF) 2027, déposé à l'Assemblée nationale en octobre 2026,
            prévoit de retirer les pompes à chaleur (PAC) du périmètre de MaPrimeRénov' par geste
            à partir du 1er janvier 2027. Tant que ce texte n'est pas voté, les règles actuelles
            s'appliquent : il reste donc une fenêtre de tir de quelques semaines pour déposer votre
            dossier et sécuriser jusqu'à 5 000 € d'aide.
          </p>

          <h2>Ce que prévoit le PLF 2027 pour les pompes à chaleur</h2>
          <p>
            Selon les documents budgétaires annexés au PLF 2027, les{' '}
            <strong>pompes à chaleur air/eau et géothermiques</strong> ne seraient plus financées
            par MaPrimeRénov' au titre des travaux par geste. Le gouvernement entend les basculer
            vers les <strong>certificats d'économies d'énergie (CEE)</strong>, gérés par les
            fournisseurs d'énergie (EDF, Total Énergie, Engie…).
          </p>
          <p>
            Cette réorientation s'inscrit dans un recentrage plus large de MaPrimeRénov' sur les{' '}
            <strong>rénovations d'ampleur</strong> (saut de deux classes DPE minimum), au détriment
            des gestes isolés. Les crédits de l'Anah passent ainsi de 1,45 milliard d'euros en 2026
            à 1,233 milliard d'euros en 2027 selon le PLF, soit une baisse de 15 %.
          </p>
          <p>
            <strong>Important :</strong> le PLF 2027 n'est pas encore adopté à la date de
            publication de cet article. Les montants et dates indiqués restent des projections
            budgétaires, susceptibles d'être modifiées lors des débats parlementaires. Vérifiez
            les conditions en vigueur sur{' '}
            <a
              href="https://www.maprimerenov.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              maprimerenov.gouv.fr
            </a>{' '}
            avant de vous engager.
          </p>

          <h2>Les montants actuels de MaPrimeRénov' pour une PAC</h2>
          <p>
            En 2026, l'aide MaPrimeRénov' pour une <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> s'élève à :
          </p>
          <ul>
            <li>
              <strong>5 000 €</strong> pour les ménages aux revenus <em>très modestes</em> (couleur
              bleue)
            </li>
            <li>
              <strong>4 000 €</strong> pour les ménages aux revenus <em>modestes</em> (couleur
              jaune)
            </li>
            <li>
              <strong>3 000 €</strong> pour les ménages aux revenus <em>intermédiaires</em> (couleur
              violet)
            </li>
          </ul>
          <p>
            Ces forfaits s'appliquent à une PAC air/eau neuve installée par un artisan{' '}
            <strong>RGE (Reconnu Garant de l'Environnement)</strong>, dans un logement construit
            depuis plus de 2 ans, en résidence principale. Ils sont cumulables avec les primes CEE
            proposées par les fournisseurs d'énergie et avec la TVA à taux réduit de 5,5 %.
          </p>
          <p>
            Pour les ménages aisés (couleur rose), aucun forfait MaPrimeRénov' n'est prévu sur le
            geste seul.
          </p>

          <h2>Ce qui prend le relais : les primes CEE</h2>
          <p>
            Les{' '}
            <strong>certificats d'économies d'énergie (CEE)</strong> resteraient disponibles pour
            les pompes à chaleur, même si MaPrimeRénov' disparaît. Les montants varient selon le
            fournisseur, la zone climatique et les revenus du foyer, mais une prime CEE pour une
            PAC air/eau se situe généralement entre <strong>500 € et 2 500 €</strong>.
          </p>
          <p>
            Contrairement à MaPrimeRénov', les CEE ne sont pas plafonnés aux ménages modestes : tous
            les propriétaires peuvent en bénéficier. En revanche, les montants sont sensiblement
            inférieurs aux forfaits actuels de l'Anah pour les foyers les moins aisés.
          </p>
          <p>
            Pour les foyers éligibles à MaPrimeRénov', l'intérêt de déposer un dossier maintenant
            est donc réel : <strong>cumuler MPR + CEE</strong> permet de maximiser le taux d'aide et
            d'abaisser significativement le reste à charge. Consultez notre guide{' '}
            <a href="/blog">rénovation énergétique</a> pour comprendre comment combiner ces aides.
          </p>

          <h2>Comment sécuriser votre aide avant le 31 décembre 2026</h2>
          <p>
            La règle clé : la demande MaPrimeRénov' doit être <strong>déposée avant le début des
            travaux</strong>. Voici le processus en quatre étapes :
          </p>
          <ol>
            <li>
              <strong>Faire réaliser un devis par un artisan RGE</strong> — condition indispensable
              pour déposer le dossier en ligne sur maprimerenov.gouv.fr.
            </li>
            <li>
              <strong>Déposer la demande d'aide</strong> sur la plateforme France Rénov' / Anah
              avant de signer le bon de commande ou de commencer les travaux.
            </li>
            <li>
              <strong>Attendre l'accusé de réception</strong> de l'Anah (le dépôt crée un droit
              acquis à la date de dépôt, indépendamment de l'instruction — qui peut prendre plusieurs
              mois).
            </li>
            <li>
              <strong>Lancer les travaux et demander le versement</strong> une fois les travaux
              terminés, facture à l'appui.
            </li>
          </ol>
          <p>
            Avec les délais d'instruction actuels qui dépassent parfois 6 mois, l'important est de{' '}
            <strong>déposer le dossier en 2026</strong> : c'est la date de dépôt qui détermine les
            règles applicables, pas la date d'instruction ni la date de versement.
          </p>

          <h2>PAC air/eau ou géothermique : quel choix en 2026 ?</h2>
          <p>
            La <strong>PAC air/eau</strong> reste la solution la plus accessible : moins de
            contraintes de terrain, installation plus rapide, prix de départ plus bas. Elle est
            adaptée à la majorité des maisons individuelles.
          </p>
          <p>
            La <strong>PAC géothermique (sol/eau)</strong> offre un coefficient de performance
            (COP) supérieur et des coûts de fonctionnement plus stables, mais nécessite un terrain
            suffisant pour les capteurs horizontaux ou un forage pour les sondes verticales.
          </p>
          <p>
            Dans les deux cas, si votre logement est encore équipé d'une chaudière à gaz ou au
            fioul, le remplacement par une PAC en 2026 vous permet de cumuler les aides actuelles
            tout en anticipant les restrictions de location des passoires thermiques. Pour un bilan
            précis, commencez par{' '}
            <a href="/dpe-gratuit">estimer votre DPE actuel et le gain potentiel</a>.
          </p>

          <h2>Faut-il attendre ou agir maintenant ?</h2>
          <p>
            Si votre chaudière approche de la fin de vie ou si vous envisagez une installation de
            PAC, <strong>agir avant le 31 décembre 2026</strong> présente un avantage financier
            concret :
          </p>
          <ul>
            <li>
              Vous sécurisez jusqu'à <strong>5 000 € de MaPrimeRénov'</strong> au tarif 2026.
            </li>
            <li>
              Vous pouvez cumuler avec les primes CEE (de 500 à 2 500 € selon votre situation).
            </li>
            <li>
              La TVA à 5,5 % sur la fourniture et pose reste applicable.
            </li>
          </ul>
          <p>
            Si le PLF 2027 est voté en l'état, les ménages qui n'auront pas déposé de dossier avant
            le 1er janvier 2027 devront se contenter des seules primes CEE — moins avantageuses pour
            les foyers modestes. Même si le texte évolue, le risque de perdre plusieurs milliers
            d'euros d'aide justifie d'agir maintenant plutôt que d'attendre.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Sécurisez votre aide PAC avant le 31 décembre
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, vous aide à constituer votre dossier
            MaPrimeRénov' et à trouver un artisan RGE avant la fin d'année.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Simuler ma PAC
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
