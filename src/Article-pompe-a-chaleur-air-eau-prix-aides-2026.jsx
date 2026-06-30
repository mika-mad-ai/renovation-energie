import React from 'react';
import { Link } from 'react-router-dom';
import useSeo from './useSeo';

// En-tête et pied de page locaux, alignés sur le style du reste du site.
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

const PUBLISHED = '2026-06-30';
const PATH = '/blog/pompe-a-chaleur-air-eau-prix-aides-2026';
const IMAGE = 'https://renohab.fr/blog/pompe-a-chaleur-air-eau-prix-aides-2026.jpg';

export default function ArticlePompeAChaleurAirEau() {
  useSeo({
    title: "Pompe à chaleur air/eau en 2026 : prix, aides et rentabilité | RenoHab",
    description:
      "Combien coûte une pompe à chaleur air/eau en 2026 ? Prix, MaPrimeRénov', CEE, TVA à 5,5 % et reste à charge : le point complet pour calculer la rentabilité de votre projet.",
    path: PATH,
    image: IMAGE,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Pompe à chaleur air/eau en 2026 : prix, aides et rentabilité",
      description:
        "Prix d'une pompe à chaleur air/eau en 2026, montants de MaPrimeRénov' et des CEE, TVA réduite et reste à charge : comment estimer la rentabilité de votre installation.",
      image: IMAGE,
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
      about: ['Pompe à chaleur', 'MaPrimeRénov', 'Certificats d\'économies d\'énergie', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <img
          src="/blog/pompe-a-chaleur-air-eau-prix-aides-2026.jpg"
          alt="Pompe à chaleur air/eau installée à l'extérieur d'une maison"
          className="w-full h-auto rounded-2xl shadow-card mb-8 object-cover"
          width="1880"
          height="1253"
        />

        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 30 juin 2026 · Chauffage &amp; aides
          </p>

          <h1>Pompe à chaleur air/eau en 2026 : prix, aides et rentabilité</h1>

          <p className="lead">
            La pompe à chaleur air/eau s'est imposée comme la solution de référence pour remplacer
            une vieille chaudière fossile : elle puise l'énergie gratuite de l'air extérieur pour
            chauffer le logement et l'eau chaude, avec un coût d'usage très inférieur au gaz ou au
            fioul. Reste la question qui décide tout : combien ça coûte vraiment en 2026, une fois
            les aides déduites ? Tour d'horizon.
          </p>

          <h2>Combien coûte une pompe à chaleur air/eau en 2026 ?</h2>
          <p>
            Pour une maison individuelle, le budget d'une PAC air/eau s'établit généralement
            entre <strong>10 000 € et 18 000 € pose comprise</strong>, selon la puissance, la marque,
            le type d'émetteurs (radiateurs ou plancher chauffant) et la complexité de
            l'installation. Une PAC bien dimensionnée par un professionnel reste la condition n°1
            d'un chauffage performant : surdimensionnée, elle s'use plus vite ; sous-dimensionnée,
            elle peine les jours froids.
          </p>

          <h2>Les aides mobilisables en 2026</h2>
          <p>
            Bonne nouvelle : la PAC air/eau reste au cœur des dispositifs d'aide en 2026, car elle
            coche la case <strong>« chauffage décarboné »</strong> désormais exigée pour les
            rénovations d'ampleur.
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov'</strong> : selon les revenus, l'aide pour une PAC air/eau
              s'échelonne autour de <strong>5 000 € (ménages très modestes)</strong>,
              <strong> 4 000 € (modestes)</strong> et <strong>3 000 € (intermédiaires)</strong>.
            </li>
            <li>
              <strong>Primes CEE</strong> (Certificats d'Économies d'Énergie) : versées par les
              fournisseurs d'énergie, souvent <strong>2 000 € à 5 000 €</strong>, parfois davantage
              via une offre bonifiée. Elles sont cumulables avec MaPrimeRénov' par gestes, dans la
              limite d'un écrêtement global.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> sur la fourniture et la pose (au lieu de 20 %) dès lors
              que le logement a plus de deux ans et que l'installateur est <strong>RGE QualiPAC</strong>.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : un prêt à taux zéro pour financer le reste à charge sans
              avancer la trésorerie.
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            Montants indicatifs au 30 juin 2026, soumis à conditions de ressources, de performance
            de l'équipement et aux évolutions réglementaires.
          </p>

          <h2>Quel reste à charge, au final ?</h2>
          <p>
            Une fois MaPrimeRénov', les CEE et la TVA réduite combinés, le <strong>reste à
            charge</strong> se situe fréquemment entre <strong>3 000 € et 8 000 €</strong> pour les
            ménages modestes et intermédiaires. C'est ce montant qu'il faut comparer aux économies
            de chauffage pour juger la rentabilité.
          </p>

          <h2>Une installation rentable ?</h2>
          <p>
            Une PAC air/eau restitue en moyenne 3 à 4 kWh de chaleur pour 1 kWh d'électricité
            consommé. Concrètement, remplacer une chaudière fioul ou gaz par une PAC peut
            <strong> réduire fortement la facture de chauffage</strong>, surtout dans un logement
            correctement isolé. La rentabilité dépend donc de trois leviers : le coût réel après
            aides, le prix de l'énergie remplacée, et la qualité de l'isolation. C'est pourquoi un
            diagnostic préalable est essentiel : un <Link to="/dpe-gratuit">DPE et un audit
            énergétique</Link> permettent d'identifier les travaux prioritaires et d'éviter de
            surdimensionner le chauffage.
          </p>

          <h2>Comment s'y prendre avec RenoHab</h2>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab vérifie votre éligibilité, monte les
            dossiers d'aides (MaPrimeRénov', CEE) et coordonne des artisans RGE QualiPAC pour
            sécuriser la pose. Vous voulez une estimation chiffrée pour votre logement ? Découvrez
            notre <Link to="/pompe-a-chaleur">étude pompe à chaleur</Link> ou lancez le
            <Link to="/#simulator"> simulateur d'aides</Link> en quelques minutes.
          </p>

          <p>
            <strong>En résumé :</strong> en 2026, une PAC air/eau coûte 10 000 € à 18 000 € mais,
            grâce au cumul des aides et à la TVA à 5,5 %, le reste à charge devient accessible — et
            l'investissement se rembourse d'autant plus vite que votre logement est bien isolé.
          </p>
        </article>
      </main>

      <ArticleFooter />
    </div>
  );
}
