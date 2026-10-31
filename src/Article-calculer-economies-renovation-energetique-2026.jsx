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
        <p className="mt-3 text-sm text-gray-500">
          <a href="/mentions-legales" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
          <span className="mx-2 opacity-60">·</span>
          <a href="/confidentialite" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-10-31';
const PATH = '/blog/calculer-economies-renovation-energetique-2026';

export default function ArticleCalculerEconomiesRenovation2026() {
  useSeo({
    title: "Calculer ses économies d'énergie après rénovation : méthode et exemples concrets 2026 | RenoHab",
    description:
      "Comment calculer précisément les économies d'énergie après une rénovation énergétique en 2026 : méthode en 3 étapes, exemples chiffrés et retour sur investissement.",
    path: PATH,
    image: '/blog/calculer-economies-renovation-energetique-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Calculer ses économies d'énergie après rénovation : méthode et exemples concrets 2026",
      description:
        "Comment calculer précisément les économies d'énergie après une rénovation énergétique en 2026 : méthode en 3 étapes, exemples chiffrés et retour sur investissement.",
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
      about: [
        'Rénovation énergétique',
        'Économies d\'énergie',
        'DPE',
        'Retour sur investissement travaux',
      ],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 31 octobre 2026 · Conseils pratiques
          </p>

          <h1>Calculer ses économies d'énergie après rénovation : méthode et exemples concrets en 2026</h1>

          <img
            src="/blog/calculer-economies-renovation-energetique-2026.jpg"
            alt="Maison rénovée avec étiquette DPE affichant une classe B, symbole d'économies d'énergie"
            className="rounded-2xl w-full object-cover mb-8"
            style={{ maxHeight: '400px' }}
            loading="lazy"
          />

          <p className="lead">
            Avant de se lancer dans des travaux, la question du retour sur investissement est légitime :
            combien vais-je économiser sur ma facture d'énergie ? Combien de temps avant d'amortir les
            travaux ? Bonne nouvelle : ces calculs ne nécessitent ni ingénieur ni logiciel complexe.
            Voici une méthode en trois étapes, illustrée par des exemples concrets.
          </p>

          <h2>Pourquoi le DPE est la base indispensable du calcul</h2>
          <p>
            Le <strong>Diagnostic de Performance Énergétique (DPE)</strong> indique la consommation
            normalisée de votre logement en <strong>kWh d'énergie primaire par m² et par an</strong>
            (kWh EP/m²/an). Cette valeur standardisée — calculée dans des conditions de température
            et d'occupation théoriques — permet de comparer des logements entre eux et de projeter
            les économies futures de manière objective.
          </p>
          <p>
            Rappel des seuils de classes DPE en vigueur depuis la réforme de 2021 (valables en 2026) :
          </p>
          <ul>
            <li><strong>A</strong> : moins de 70 kWh EP/m²/an</li>
            <li><strong>B</strong> : de 70 à 110 kWh EP/m²/an</li>
            <li><strong>C</strong> : de 111 à 180 kWh EP/m²/an</li>
            <li><strong>D</strong> : de 181 à 250 kWh EP/m²/an</li>
            <li><strong>E</strong> : de 251 à 330 kWh EP/m²/an</li>
            <li><strong>F</strong> : de 331 à 420 kWh EP/m²/an</li>
            <li><strong>G</strong> : plus de 420 kWh EP/m²/an</li>
          </ul>
          <p>
            Si vous ne disposez pas encore de DPE récent, RenoHab propose une{' '}
            <a href="/dpe-gratuit">estimation de votre classe DPE gratuitement en ligne</a>.
          </p>

          <h2>La méthode de calcul en 3 étapes</h2>

          <h3>Étape 1 — Relever la consommation actuelle et cible</h3>
          <p>
            Votre DPE indique la consommation actuelle en kWh EP/m²/an. Notez cette valeur et la
            surface de votre logement. Ensuite, identifiez la <strong>classe cible</strong> que vous
            visez après travaux (souvent B ou C pour bénéficier des meilleures aides). Prenez la
            valeur centrale de la classe cible comme référence.
          </p>
          <p>
            Exemple : logement F à 375 kWh EP/m²/an → cible B à 90 kWh EP/m²/an.
          </p>

          <h3>Étape 2 — Convertir en énergie finale selon votre énergie de chauffage</h3>
          <p>
            L'énergie primaire se convertit en énergie finale (ce que vous consommez réellement) selon
            le coefficient propre à chaque énergie :
          </p>
          <ul>
            <li>
              <strong>Gaz naturel et fioul</strong> : coefficient 1,0 — 1 kWh EP = 1 kWh de gaz ou fioul consommé.
            </li>
            <li>
              <strong>Électricité</strong> : coefficient 1,9 depuis le 1er janvier 2026 (il était de 2,3
              avant) — 1 kWh EP = 1/1,9 ≈ 0,53 kWh électrique consommé.
            </li>
            <li>
              <strong>Bois/granulés</strong> : coefficient 1,0 — identique au gaz.
            </li>
          </ul>
          <p>
            Pour obtenir la consommation finale totale : <em>surface (m²) × consommation (kWh EP/m²/an) / coefficient</em>.
          </p>

          <h3>Étape 3 — Calculer le coût annuel et l'économie</h3>
          <p>
            Multipliez la consommation finale (avant et après travaux) par le prix unitaire de votre
            énergie. En 2026, comptez à titre indicatif :
          </p>
          <ul>
            <li>Gaz naturel (tarif réglementé) : environ <strong>0,13 €/kWh TTC</strong></li>
            <li>Fioul domestique : environ <strong>0,11 à 0,13 €/kWh TTC</strong> selon les cours</li>
            <li>Électricité (tarif de base EDF) : environ <strong>0,2516 €/kWh TTC</strong></li>
          </ul>
          <p>
            L'économie annuelle = coût avant − coût après. Simple et reproductible.
          </p>

          <h2>Exemple concret n° 1 — Maison 120 m², classe F, chauffage gaz</h2>
          <p>
            Soit une maison individuelle de 120 m² chauffée au gaz, affichant une consommation DPE
            de 375 kWh EP/m²/an (milieu de la classe F).
          </p>
          <ul>
            <li>Consommation actuelle : 375 × 120 = <strong>45 000 kWh EP/an</strong></li>
            <li>Énergie finale gaz (coeff 1,0) : 45 000 kWh/an</li>
            <li>Facture estimée : 45 000 × 0,13 € = <strong>5 850 €/an</strong></li>
          </ul>
          <p>
            Après une <strong>rénovation d'ampleur</strong> (isolation des combles, murs, plancher +{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> en remplacement de la chaudière gaz)
            atteignant la classe B (90 kWh EP/m²/an) :
          </p>
          <ul>
            <li>Consommation cible : 90 × 120 = <strong>10 800 kWh EP/an</strong></li>
            <li>Énergie finale électricité (coeff 1,9) : 10 800 / 1,9 ≈ 5 684 kWh élec./an</li>
            <li>Facture estimée : 5 684 × 0,2516 € = <strong>1 430 €/an</strong></li>
          </ul>
          <p>
            <strong>Économie annuelle estimée : environ 4 400 €/an</strong>, soit une réduction de
            75 % de la facture d'énergie normalisée.
          </p>
          <p className="text-sm text-gray-500 italic">
            Ces chiffres sont calculés sur la base de la consommation normalisée du DPE (conditions
            standard : 19 °C, occupation moyenne). La consommation réelle peut être inférieure.
          </p>

          <h2>Exemple concret n° 2 — Appartement 65 m², classe E, chauffage électrique direct</h2>
          <p>
            Soit un appartement de 65 m² équipé de convecteurs électriques (chauffage à effet Joule),
            affiché en classe E à 290 kWh EP/m²/an.
          </p>
          <ul>
            <li>Consommation actuelle : 290 × 65 = <strong>18 850 kWh EP/an</strong></li>
            <li>Énergie finale électricité (coeff 1,9) : 18 850 / 1,9 ≈ 9 921 kWh élec./an</li>
            <li>Facture estimée : 9 921 × 0,2516 € = <strong>2 496 €/an</strong></li>
          </ul>
          <p>
            Après remplacement par une <strong>pompe à chaleur air/air réversible</strong> et
            isolation des combles, atteignant la classe C (145 kWh EP/m²/an) :
          </p>
          <ul>
            <li>Consommation cible : 145 × 65 = <strong>9 425 kWh EP/an</strong></li>
            <li>Énergie finale électricité (coeff 1,9) : 9 425 / 1,9 ≈ 4 961 kWh élec./an</li>
            <li>Facture estimée : 4 961 × 0,2516 € = <strong>1 248 €/an</strong></li>
          </ul>
          <p>
            <strong>Économie annuelle estimée : environ 1 250 €/an</strong>, soit une réduction de
            50 % de la facture d'énergie.
          </p>
          <p>
            Notez que le nouveau coefficient électrique de 1,9 (contre 2,3 avant le 1er janvier 2026)
            peut améliorer la classe DPE de logements chauffés à l'électricité sans aucun travaux.
            Si votre DPE date d'avant 2026, il vaut la peine de le faire refaire pour bénéficier
            du reclassement.
          </p>

          <h2>Calculer le retour sur investissement</h2>
          <p>
            Le retour sur investissement (ROI) s'obtient simplement en divisant le coût net des
            travaux (après déduction des aides — MaPrimeRénov', CEE, Éco-PTZ, TVA à 5,5 %) par
            l'économie annuelle :
          </p>
          <p>
            <em>ROI (années) = Coût net des travaux / Économie annuelle estimée</em>
          </p>
          <p>
            En reprenant l'exemple 1 (maison F → B) :
          </p>
          <ul>
            <li>Coût total des travaux : environ 55 000 €</li>
            <li>
              Aides mobilisables (MaPrimeRénov' rénovation d'ampleur + CEE + Éco-PTZ) : 25 000 à
              35 000 € selon les revenus du ménage
            </li>
            <li>Coût net estimé : 20 000 à 30 000 €</li>
            <li>Économie annuelle : 4 400 €</li>
            <li><strong>Retour sur investissement : 5 à 7 ans</strong></li>
          </ul>
          <p>
            À cela s'ajoute la <strong>valorisation immobilière</strong> : un logement passant de F
            à B peut gagner 10 à 20 % de valeur selon les études notariales récentes — un bénéfice
            non négligeable lors d'une revente.
          </p>

          <h2>Les outils officiels pour affiner votre simulation</h2>
          <p>
            Pour une projection personnalisée, plusieurs outils gratuits existent :
          </p>
          <ul>
            <li>
              Le <strong>simulateur de France Rénov'</strong> (accessible depuis{' '}
              <a href="/">la page d'accueil de RenoHab</a>) : il estime les aides disponibles et
              vous met en contact avec un conseiller.
            </li>
            <li>
              La plateforme <strong>SIMUL'AIdes de l'ANAH</strong> : calcule précisément les
              montants MaPrimeRénov' selon vos revenus et la nature des travaux.
            </li>
            <li>
              Votre <a href="/dpe-gratuit">DPE réalisé par un diagnostiqueur certifié</a> : indispensable
              pour disposer de données de consommation fiables et opposables.
            </li>
          </ul>
          <p>
            Retrouvez d'autres guides pratiques sur la{' '}
            <a href="/blog">page blog de RenoHab</a> : aides financières, choix des équipements,
            démarches administratives.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Estimez vos économies en quelques clics</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit énergétique, plan de travaux sur mesure et montage complet des dossiers d'aides :
            RenoHab vous accompagne à chaque étape.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
