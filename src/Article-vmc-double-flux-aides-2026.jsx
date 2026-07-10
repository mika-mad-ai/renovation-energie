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

const PUBLISHED = '2026-07-10';
const PATH = '/blog/vmc-double-flux-aides-2026';
const IMAGE = 'https://renohab.fr/blog/vmc-double-flux-aides-2026.jpg';

export default function ArticleVmcDoubleFlux2026() {
  useSeo({
    title: "VMC double flux en 2026 : prix, aides et installation | RenoHab",
    description:
      "VMC double flux en 2026 : avantages, prix d'installation, MaPrimeRénov', CEE et TVA à 5,5 %. Découvrez la règle clé qui change tout depuis janvier 2026.",
    path: PATH,
    image: IMAGE,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "VMC double flux en 2026 : prix, aides et installation",
      description:
        "VMC double flux en 2026 : avantages, prix d'installation, MaPrimeRénov', CEE et TVA à 5,5 %. Découvrez la règle clé qui change tout depuis janvier 2026.",
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
      about: ['VMC double flux', 'Ventilation', 'MaPrimeRénov', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <img
          src="/blog/vmc-double-flux-aides-2026.jpg"
          alt="Système de ventilation double flux installé dans un logement"
          className="w-full h-auto rounded-2xl shadow-card mb-8 object-cover"
          width="1200"
          height="800"
        />

        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 10 juillet 2026 · Ventilation &amp; qualité de l'air
          </p>

          <h1>VMC double flux en 2026 : prix, aides et ce qui a changé depuis janvier</h1>

          <p className="lead">
            La VMC double flux est l'une des solutions les plus efficaces pour améliorer la
            qualité de l'air intérieur tout en récupérant la chaleur qui s'échappe de votre
            logement. Mais depuis le 1er janvier 2026, les règles d'accès à MaPrimeRénov' ont
            changé : voici ce qu'il faut savoir avant de lancer votre projet.
          </p>

          <h2>VMC simple flux vs double flux : quelle différence ?</h2>
          <p>
            Une VMC simple flux extrait l'air vicié des pièces humides (cuisine, salle de bains,
            WC) et laisse entrer l'air frais par des entrées d'air en façade — sans récupérer
            la moindre chaleur. La <strong>VMC double flux</strong> fait mieux : elle traite
            simultanément l'air entrant et l'air sortant via un <em>échangeur thermique</em>. La
            chaleur de l'air extrait préchauffant l'air neuf avant qu'il entre dans les pièces
            de vie.
          </p>
          <p>
            Résultat : jusqu'à <strong>90 % de la chaleur extraite est récupérée</strong>, l'air
            neuf arrive tempéré sans courant d'air froid, et le logement est ventilé en
            permanence selon les normes réglementaires.
          </p>

          <h2>Quels avantages concrets ?</h2>
          <ul>
            <li>
              <strong>Qualité de l'air intérieur améliorée :</strong> renouvellement permanent de
              l'air, réduction de l'humidité, des allergènes et des polluants domestiques.
            </li>
            <li>
              <strong>Économies d'énergie :</strong> jusqu'à 15 % de gain sur la facture de
              chauffage grâce à la récupération de chaleur.
            </li>
            <li>
              <strong>Confort acoustique :</strong> l'air entre filtré et régulé, sans avoir à
              ouvrir les fenêtres en hiver.
            </li>
            <li>
              <strong>Compatibilité avec une rénovation d'ampleur :</strong> dans un logement
              bien isolé, la VMC double flux est indispensable pour éviter les problèmes
              d'humidité et maintenir une bonne qualité de l'air. C'est même une condition
              implicite d'une rénovation réussie.
            </li>
          </ul>

          <h2>Combien coûte une VMC double flux en 2026 ?</h2>
          <p>
            Le prix varie selon la surface du logement, la complexité du réseau de gaines et
            la marque choisie. Pour une maison individuelle, comptez en général :
          </p>
          <ul>
            <li><strong>Maison jusqu'à 100 m² :</strong> 3 000 € à 5 000 € pose comprise.</li>
            <li><strong>Maison de 100 à 200 m² :</strong> 5 000 € à 8 000 € pose comprise.</li>
          </ul>
          <p>
            Ces tarifs s'entendent avec TVA à 20 %. Bonne nouvelle : pour un logement de plus
            de deux ans, la <strong>TVA est réduite à 5,5 %</strong> dès lors que l'installateur
            est certifié RGE — un gain immédiat d'environ 14 points sur la main-d'œuvre et les
            matériaux.
          </p>

          <h2>Les aides disponibles — et la règle clé de 2026</h2>
          <p>
            C'est ici que la situation a évolué. <strong>Depuis le 1er janvier 2026</strong>, la
            VMC double flux n'est plus éligible à MaPrimeRénov' en geste isolé : elle doit
            obligatoirement être couplée à <strong>au moins un geste d'isolation</strong> (combles,
            murs ou planchers). Cette condition étant remplie, les aides restent attractives :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' (parcours par geste) :</strong> jusqu'à{' '}
              <strong>2 500 € pour les ménages très modestes</strong>, 2 000 € pour les modestes
              et 1 500 € pour les intermédiaires. Les ménages aisés (profil Rose) ne sont pas
              éligibles à cette aide.
            </li>
            <li>
              <strong>Primes CEE</strong> (Certificats d'Économies d'Énergie) : entre{' '}
              <strong>220 € et 450 €</strong> selon les offres des fournisseurs d'énergie.
              Cumulables avec MaPrimeRénov', dans la limite du plafond global.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> : applicable automatiquement si l'installateur est RGE
              et le logement a plus de deux ans.
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            Montants indicatifs au 10 juillet 2026, soumis à conditions de ressources et aux
            évolutions réglementaires. Vérifiez votre situation sur{' '}
            <a
              href="https://mesaides.france-renov.gouv.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mesaides.france-renov.gouv.fr
            </a>
            .
          </p>

          <h2>Pourquoi associer VMC double flux et isolation ?</h2>
          <p>
            Au-delà de l'obligation réglementaire pour les aides, associer ces deux gestes est
            aussi la meilleure stratégie techniquement : un logement mieux isolé perd moins de
            chaleur, donc la VMC double flux récupère une part encore plus significative des
            pertes résiduelles. Ensemble, ils forment un duo qui améliore le DPE, réduit les
            factures et valorise le bien.
          </p>
          <p>
            Un <Link to="/dpe-gratuit">DPE et un audit énergétique</Link> permettent d'identifier
            les postes de perte prioritaires et d'optimiser le projet global — isolation d'abord
            (combles, murs), puis VMC double flux, puis éventuellement{' '}
            <Link to="/pompe-a-chaleur">pompe à chaleur air/eau</Link> pour un saut de classes
            DPE maximal.
          </p>

          <h2>Comment être sûr de ne pas se tromper ?</h2>
          <h3>Choisir un installateur RGE</h3>
          <p>
            C'est la condition sine qua non pour bénéficier de la TVA réduite et de
            MaPrimeRénov'. Un professionnel certifié RGE est formé aux bonnes pratiques de
            dimensionnement et d'installation, et engage sa responsabilité sur la performance
            du système.
          </p>
          <h3>Dimensionner correctement le réseau de gaines</h3>
          <p>
            Un réseau mal conçu génère du bruit, des pertes de charge et une efficacité
            dégradée. Le professionnel doit calculer les débits réglementaires pièce par pièce
            et prévoir la position optimale de l'unité centrale (généralement en comble ou dans
            un placard technique).
          </p>
          <h3>Planifier l'entretien</h3>
          <p>
            Les filtres de la VMC double flux doivent être nettoyés ou remplacés tous les 6 à
            12 mois. Un entretien régulier maintient le rendement de l'échangeur et évite la
            dégradation de la qualité de l'air.
          </p>

          <h2>VMC double flux et rénovation d'ampleur : la combinaison gagnante</h2>
          <p>
            Dans le cadre d'une <strong>rénovation d'ampleur</strong> (MaPrimeRénov' rénovation
            globale, éligible à de plus grandes aides), la VMC double flux est souvent
            recommandée par l'Accompagnateur Rénov'. Elle complète naturellement un projet
            d'isolation renforcée et de remplacement du système de chauffage, en assurant que
            la maison « respire » correctement une fois les parois rendues très étanches.
            Lancez le{' '}
            <Link to="/#simulator">simulateur d'aides RenoHab</Link> pour estimer votre
            éligibilité en quelques minutes.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre projet VMC double flux</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, évalue votre éligibilité, monte vos dossiers
            d'aides et coordonne un installateur RGE pour votre projet de ventilation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Obtenir mon DPE gratuit
            </a>
            <a
              href="/#simulator"
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
