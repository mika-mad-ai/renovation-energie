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
        <p className="text-gray-400">Votre Rénovation Énergétique, Simplifiée & Financée.</p>
        <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} RenoHab. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

const PUBLISHED = '2026-07-21';
const PATH = '/blog/maprimerenov-proprietaire-bailleur-2026';
const IMAGE = 'https://renohab.fr/blog/maprimerenov-proprietaire-bailleur-2026.jpg';

export default function ArticleMaPrimeRenovBailleur() {
  useSeo({
    title: "MaPrimeRénov' pour les propriétaires bailleurs en 2026 — conditions, montants et obligations | RenoHab",
    description:
      "Propriétaire bailleur en 2026 : comment accéder à MaPrimeRénov', quelles conditions remplir, combien obtenir et comment cumuler les aides pour rénover vos logements avant les interdictions de location.",
    path: PATH,
    image: IMAGE,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "MaPrimeRénov' pour les propriétaires bailleurs en 2026 — conditions, montants et obligations",
      description:
        "Propriétaire bailleur en 2026 : conditions d'accès à MaPrimeRénov', montants, engagement de location, cumul CEE et déficit foncier.",
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
      about: ['MaPrimeRénov', 'Propriétaire bailleur', 'Rénovation énergétique', 'Passoires thermiques', 'Interdiction location'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <img
          src="/blog/maprimerenov-proprietaire-bailleur-2026.jpg"
          alt="Immeuble résidentiel rénové — propriétaire bailleur et rénovation énergétique"
          className="w-full h-auto rounded-2xl shadow-card mb-8 object-cover"
          width="1200"
          height="630"
        />

        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 21 juillet 2026 · Aides financières &amp; bailleurs
          </p>

          <h1>MaPrimeRénov' pour les propriétaires bailleurs en 2026 — conditions, montants et obligations</h1>

          <p className="lead">
            Depuis le 1er janvier 2025, les logements classés <strong>G</strong> sont interdits à la
            location. La classe <strong>F</strong> suivra en 2028. Face à cette pression réglementaire,
            de nombreux bailleurs ignorent qu'ils peuvent eux aussi bénéficier de{' '}
            <strong>MaPrimeRénov'</strong> pour financer leurs travaux. Tour d'horizon complet des
            conditions, des montants et des aides cumulables en 2026.
          </p>

          <h2>Pourquoi les bailleurs doivent agir rapidement</h2>
          <p>
            Le calendrier d'interdiction de location des passoires thermiques est fixé par la loi
            Climat et Résilience :
          </p>
          <ul>
            <li><strong>Classe G :</strong> interdite à la location depuis le 1er janvier 2025.</li>
            <li><strong>Classe F :</strong> interdiction au 1er janvier 2028.</li>
            <li><strong>Classe E :</strong> interdiction prévue en 2034.</li>
          </ul>
          <p>
            Une autre échéance pèse sur les bailleurs propriétaires de logements F ou G : à partir du
            <strong> 1er janvier 2027</strong>, ces biens n'auront plus accès au{' '}
            <em>parcours par geste</em> de MaPrimeRénov'. Rénover sera toujours possible, mais
            uniquement via le <em>parcours accompagné</em>, plus exigeant — et plus subventionné.
            Autrement dit, plus vous attendez, moins vos options sont simples.
          </p>

          <h2>MaPrimeRénov' est-elle accessible aux propriétaires bailleurs ?</h2>
          <p>
            Oui — contrairement à une idée reçue, MaPrimeRénov' n'est pas réservée aux propriétaires
            occupants. Les bailleurs personnes physiques (en nom propre ou en indivision) y ont droit,
            sous plusieurs conditions cumulatives :
          </p>
          <ul>
            <li>
              Le logement doit avoir <strong>plus de 15 ans</strong> (ou plus de 2 ans pour le
              remplacement d'une chaudière fioul ou gaz).
            </li>
            <li>
              Il doit être occupé en <strong>résidence principale</strong> par le locataire au moment
              de la demande et pendant les travaux.
            </li>
            <li>
              Le bailleur s'engage à <strong>louer le bien au moins 6 ans</strong> après la fin des
              travaux.
            </li>
            <li>
              Depuis le 1er juillet 2024, un même bailleur peut rénover au maximum{' '}
              <strong>3 logements sur 5 ans</strong> dans ce cadre.
            </li>
            <li>
              <strong>Les SCI sont exclues</strong> : seules les personnes physiques (propriétaires en
              nom propre) sont éligibles.
            </li>
          </ul>
          <p>
            Bonne nouvelle : le guichet MaPrimeRénov', suspendu en début d'année pour raisons
            budgétaires, a rouvert le <strong>23 février 2026</strong>. Les dossiers peuvent donc de
            nouveau être déposés.
          </p>

          <h2>Combien peut-on obtenir en tant que bailleur ?</h2>
          <p>
            Le montant de l'aide dépend du <strong>profil de revenus du propriétaire bailleur</strong>,
            calculé selon les mêmes tranches que pour les propriétaires occupants (Bleu, Jaune, Violet,
            Rose). Plus vos revenus sont modestes, plus le taux de prise en charge est élevé — jusqu'à
            <strong> 80 % des travaux</strong> pour le profil Bleu (très modestes).
          </p>
          <p>
            Dans le cadre d'une <strong>rénovation d'ampleur</strong> (saut d'au moins 2 classes DPE,
            avec un Accompagnateur Rénov'), l'aide peut atteindre <strong>jusqu'à 32 000 €</strong>.
            Ce montant couvre des opérations combinées — isolation, remplacement du système de
            chauffage,{' '}
            <Link to="/pompe-a-chaleur">installation d'une pompe à chaleur</Link>, ventilation — qui
            permettent de sortir définitivement du statut de passoire.
          </p>
          <p>
            À noter : le <em>bonus passoire thermique</em> de 10 % accordé pour la sortie de classe F
            ou G a été supprimé le 30 septembre 2025 et ne s'applique plus aux dossiers ouverts en
            2026.
          </p>

          <h2>Cumuler les aides pour réduire le reste à charge</h2>
          <p>
            MaPrimeRénov' n'est pas la seule aide mobilisable. En 2026, un bailleur peut cumuler :
          </p>
          <ul>
            <li>
              <strong>Les Certificats d'Économies d'Énergie (CEE)</strong> : primes versées par les
              fournisseurs d'énergie, sans condition de revenus, cumulables avec MaPrimeRénov'.
            </li>
            <li>
              <strong>L'éco-Prêt à Taux Zéro (éco-PTZ)</strong> : jusqu'à 50 000 € sans intérêts
              pour financer la part restante des travaux.
            </li>
            <li>
              <strong>Le déficit foncier doublé</strong> : le plafond de déduction fiscale pour les
              travaux d'économies d'énergie est porté à <strong>21 400 € par an</strong> (au lieu de
              10 700 €) jusqu'au 31 décembre 2027. Une opportunité fiscale majeure pour les bailleurs
              imposés au régime réel.
            </li>
            <li>
              <strong>La TVA réduite à 5,5 %</strong> : applicable automatiquement sur les travaux de
              rénovation énergétique réalisés par un artisan RGE dans un logement de plus de 2 ans.
            </li>
          </ul>

          <h2>Quel impact sur le loyer après travaux ?</h2>
          <p>
            Si vous révisez le loyer en vous appuyant sur les travaux d'amélioration, la réglementation
            impose de <strong>déduire le montant de l'aide publique perçue</strong> du coût des travaux
            servant de base à la révision. Vous ne pouvez pas répercuter intégralement la prime sur
            votre locataire. En revanche, la sortie de passoire thermique ouvre droit à une{' '}
            <strong>augmentation de loyer encadrée</strong> dans les zones tendues — un retour sur
            investissement indirect à anticiper.
          </p>

          <h2>Par où commencer ?</h2>
          <p>
            La première étape est d'<strong>évaluer précisément le DPE de chaque logement</strong>
            {' '}pour savoir si vous êtes dans les classes concernées par les interdictions à venir.
            Notre outil gratuit vous permet de{' '}
            <Link to="/dpe-gratuit">estimer votre DPE en quelques minutes</Link>.
          </p>
          <p>
            Si votre logement est classé F ou G, le <em>parcours accompagné</em> — avec un{' '}
            <strong>Accompagnateur Rénov' agréé</strong> — est la voie d'accès aux aides les plus
            généreuses. RenoHab est Accompagnateur Rénov' certifié : nous montons votre dossier
            d'aides, coordonnons les artisans RGE et vous accompagnons jusqu'à la clôture du chantier.
          </p>
          <p>
            Pour une première estimation de vos travaux et de votre reste à charge, utilisez notre{' '}
            <Link to="/#simulator">simulateur d'économies</Link>.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Bailleur : calculez vos aides en 2026</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            DPE, MaPrimeRénov', CEE, déficit foncier : RenoHab vous accompagne pour financer et
            piloter la rénovation de vos logements locatifs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
            </Link>
            <Link to="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Voir les solutions chauffage
            </Link>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
