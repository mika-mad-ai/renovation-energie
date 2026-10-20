import React from 'react';
import { Link } from 'react-router-dom';
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
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-10-20';
const PATH = '/blog/pompe-a-chaleur-haute-temperature-radiateurs-2026';

export default function ArticlePACHauteTemperature2026() {
  useSeo({
    title: "Pompe à chaleur haute température : remplacer sa chaudière sans changer ses radiateurs | RenoHab",
    description:
      "Vous avez des radiateurs en fonte ou en acier conçus pour 70–80 °C ? La PAC haute température est la solution pour sortir du fioul ou du gaz sans rénover tout votre réseau de chauffage. Aides 2026, prix et démarches.",
    path: PATH,
    image: '/blog/pompe-a-chaleur-haute-temperature-radiateurs-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Pompe à chaleur haute température : remplacer sa chaudière sans changer ses radiateurs",
      description:
        "Vous avez des radiateurs en fonte ou en acier conçus pour 70–80 °C ? La PAC haute température est la solution pour sortir du fioul ou du gaz sans rénover tout votre réseau de chauffage. Aides 2026, prix et démarches.",
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
      about: ['Pompe à chaleur haute température', 'Radiateurs anciens', 'Remplacement chaudière', 'Aides 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 20 octobre 2026 · Chauffage
          </p>

          <h1>Pompe à chaleur haute température : remplacer sa chaudière sans changer ses radiateurs</h1>

          <img
            src="/blog/pompe-a-chaleur-haute-temperature-radiateurs-2026.jpg"
            alt="Pompe à chaleur haute température installée à l'extérieur d'une maison avec radiateurs en fonte"
            className="w-full rounded-xl my-6 shadow-card"
            loading="lazy"
          />

          <p className="lead">
            La majorité des maisons construites avant 1990 chauffent avec des radiateurs en fonte ou
            en acier dimensionnés pour une eau à 70–80 °C. Les pompes à chaleur conventionnelles,
            optimisées pour le plancher chauffant (35–45 °C), sont incompatibles avec ces émetteurs
            sans travaux lourds. La <strong>PAC haute température (PAC HT)</strong> résout exactement
            ce problème : elle monte jusqu'à 65–75 °C et remplace la vieille chaudière sans toucher
            au réseau existant.
          </p>

          <h2>Pourquoi les PAC standard ne suffisent pas toujours</h2>
          <p>
            Une pompe à chaleur air/eau classique délivre l'eau entre 35 et 55 °C. C'est parfait
            pour un plancher chauffant basse température ou des radiateurs surdimensionnés, mais
            insuffisant pour des radiateurs anciens calibrés pour 70 °C ou plus : en hiver, la
            maison reste froide ou la machine tourne en continu avec un mauvais rendement.
          </p>
          <p>
            Deux solutions existent alors : remplacer l'ensemble des radiateurs (coût : 3 000 à
            8 000 € supplémentaires selon la surface) ou installer une{' '}
            <strong>PAC haute température</strong>, capable de produire une eau à 60–75 °C, soit la
            même plage qu'une chaudière à gaz ou fioul.
          </p>

          <h2>Fonctionnement et performances d'une PAC HT</h2>
          <p>
            Comme toute pompe à chaleur air/eau, la PAC HT capte les calories de l'air extérieur et
            les transfère au circuit de chauffage. La différence tient au fluide frigorigène et au
            compresseur, conçus pour atteindre des températures de départ élevées :
          </p>
          <ul>
            <li><strong>Daikin Altherma 3H HT</strong> : jusqu'à 70–75 °C, gamme 14 à 16 kW</li>
            <li><strong>Viessmann Vitocal (HT)</strong> : jusqu'à 65 °C, rendement maintenu jusqu'à −20 °C extérieur</li>
            <li><strong>Atlantic Alféa Excellia</strong> : jusqu'à 60 °C, fabrication française</li>
            <li><strong>Mitsubishi Zubadan</strong> : 60 °C à −25 °C extérieur, très adapté au climat montagnard</li>
          </ul>
          <p>
            Le <strong>COP</strong> (coefficient de performance) d'une PAC HT est légèrement
            inférieur à celui d'une PAC standard : compter 2,5 à 3,5 contre 3 à 4,5. Mais comparé
            à une chaudière gaz (rendement ≈ 0,9) ou fioul (≈ 0,85), c'est encore deux à trois fois
            moins d'énergie consommée pour la même quantité de chaleur produite.
          </p>

          <h2>Prix d'une installation complète en 2026</h2>
          <p>
            Le coût varie selon la puissance nécessaire, la configuration de la maison et les
            travaux associés (dépose chaudière, désembouage du circuit existant, raccordement
            électrique) :
          </p>
          <ul>
            <li><strong>PAC HT seule (matériel)</strong> : 6 000 à 12 000 €</li>
            <li><strong>Pose et mise en service</strong> : 2 000 à 5 000 €</li>
            <li>
              <strong>Projet complet pour une maison de 100–150 m²</strong> : 12 000 à 22 000 €
              avant aides
            </li>
            <li>
              <strong>Projet incluant dépose cuve fioul et dépollution</strong> : jusqu'à 25 000 €
            </li>
          </ul>
          <p>
            Un désembouage du circuit hydraulique (300 à 600 €) est quasiment toujours nécessaire
            avant la mise en route : les boues accumulées dans les vieux radiateurs réduisent
            fortement le rendement et peuvent endommager le compresseur.
          </p>

          <h2>Aides disponibles en 2026</h2>
          <p>
            Plusieurs dispositifs cumulables permettent de réduire significativement le reste à
            charge.
          </p>

          <h3>Primes CEE</h3>
          <p>
            La prime CEE (Certificats d'Économies d'Énergie) est versée par les fournisseurs
            d'énergie. Pour une PAC air/eau remplaçant une chaudière fossile, comptez entre
            2 500 € et 5 800 € selon les revenus du ménage et le prix au MWhc en vigueur.
            Depuis septembre 2026, une bonification s'applique pour les logements des classes
            E, F et G dans le cadre de la rénovation d'ampleur : renseignez-vous auprès d'un{' '}
            <Link to="/pompe-a-chaleur">installateur RGE référencé par RenoHab</Link> pour
            obtenir la meilleure offre.
          </p>

          <h3>MaPrimeRénov' en rénovation d'ampleur</h3>
          <p>
            Depuis septembre 2026, le remplacement de chaudière par une PAC air/eau est prioritairement
            financé dans le cadre d'une{' '}
            <Link to="/blog">rénovation d'ampleur accompagnée</Link>. En combinant la PAC HT avec
            des travaux d'isolation, le gain de deux classes DPE ou plus ouvre droit aux montants
            les plus élevés de MaPrimeRénov', variables selon les revenus. Un{' '}
            <a href="/dpe-gratuit">audit énergétique</a> préalable est nécessaire pour monter
            le dossier.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            La pose et la fourniture d'une PAC par un professionnel RGE bénéficient de la TVA
            réduite à 5,5 % (contre 20 % en taux normal), sur une résidence principale ou secondaire
            de plus de 2 ans. Cette réduction s'applique automatiquement sur le devis d'un
            installateur qualifié.
          </p>

          <h3>Éco-PTZ</h3>
          <p>
            L'éco-prêt à taux zéro permet de financer le reste à charge jusqu'à 50 000 €
            sur 20 ans, sans intérêts. Il est cumulable avec MaPrimeRénov' et les CEE, et ne
            nécessite pas de conditions de ressources.
          </p>

          <h2>Conditions d'éligibilité aux aides</h2>
          <ul>
            <li>Logement de plus de 15 ans et résidence principale</li>
            <li>Installateur certifié <strong>RGE QualiPAC</strong> obligatoire</li>
            <li>
              La PAC doit remplacer une chaudière à énergie fossile (gaz, fioul, propane) pour
              bénéficier du Coup de Pouce Chauffage CEE
            </li>
            <li>Signature du devis après l'accord de financement MaPrimeRénov' (pas avant)</li>
          </ul>

          <h2>PAC HT ou PAC hybride : comment choisir ?</h2>
          <p>
            Si votre maison est mal isolée et que vous n'envisagez pas de travaux d'isolation à
            court terme, la <strong>PAC hybride gaz</strong> (PAC + chaudière gaz en appoint) peut
            être une transition moins coûteuse : elle prend le relais de la chaudière par grand froid
            sans risque de sous-dimensionnement. En revanche, elle conserve une consommation de gaz
            résiduelle. La PAC HT seule, combinée à une bonne isolation, reste la solution la plus
            rentable sur 10–15 ans et la plus cohérente avec les{' '}
            <Link to="/dpe-gratuit">objectifs DPE</Link> pour sortir de la classe E ou F.
          </p>

          <h2>Les étapes pour passer à la PAC HT</h2>
          <ol>
            <li>
              <strong>Faire un audit ou bilan thermique</strong> pour vérifier la compatibilité
              des radiateurs (puissance, température de départ nécessaire) et la puissance de la
              PAC à prévoir
            </li>
            <li>
              <strong>Demander plusieurs devis RGE</strong> incluant désembouage, dépose de
              l'ancienne chaudière et raccordement électrique
            </li>
            <li>
              <strong>Déposer la demande de MaPrimeRénov'</strong> et valider le dossier CEE avant
              toute signature
            </li>
            <li>
              <strong>Planifier les travaux</strong> en dehors de la saison de chauffe (mai à
              septembre) pour éviter l'interruption de chauffage
            </li>
          </ol>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Obtenez un devis PAC haute température</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab sélectionne des installateurs RGE QualiPAC et monte votre dossier
            MaPrimeRénov' + CEE pour maximiser vos aides — sans frais cachés.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Étudier ma PAC
            </a>
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Estimer mon DPE
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
