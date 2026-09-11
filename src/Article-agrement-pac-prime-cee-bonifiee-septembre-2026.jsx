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

const PUBLISHED = '2026-09-11';
const PATH = '/blog/agrement-pac-prime-cee-bonifiee-septembre-2026';

export default function ArticleAgrementPacCEEBonifiee2026() {
  useSeo({
    title: "Prime CEE pompe à chaleur : l'agrément obligatoire depuis le 1er septembre 2026 | RenoHab",
    description:
      "Depuis le 1er septembre 2026, seules les pompes à chaleur agréées ouvrent droit à la prime CEE bonifiée (Coup de Pouce). Découvrez comment vérifier l'éligibilité de votre modèle et éviter de perdre jusqu'à 80 % de votre aide.",
    path: PATH,
    image: '/blog/agrement-pac-prime-cee-bonifiee-septembre-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Prime CEE pompe à chaleur : l'agrément obligatoire depuis le 1er septembre 2026",
      description:
        "Depuis le 1er septembre 2026, seules les pompes à chaleur agréées ouvrent droit à la prime CEE bonifiée. Ce guide explique les deux critères d'agrément, comment consulter la liste ADEME et comment choisir un modèle éligible.",
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
      about: ['Pompe à chaleur', 'Prime CEE', 'Coup de Pouce Chauffage', 'Agrément PAC 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 11 septembre 2026 · Aides & financement
          </p>

          <h1>Prime CEE pompe à chaleur : l'agrément obligatoire depuis le 1er septembre 2026</h1>

          <img
            src="/blog/agrement-pac-prime-cee-bonifiee-septembre-2026.jpg"
            alt="Pompe à chaleur air-eau extérieure éligible à la prime CEE bonifiée après agrément"
            className="w-full rounded-xl object-cover max-h-80 my-6"
            loading="eager"
          />

          <p className="lead">
            Depuis le <strong>1er septembre 2026</strong>, installer une pompe à chaleur sans
            vérifier son statut d'agrément peut vous faire perdre l'essentiel de votre prime CEE.
            Une nouvelle règle discrète — mais aux conséquences financières majeures — redessine le
            paysage des aides au chauffage. Voici tout ce que vous devez savoir avant de signer un
            devis.
          </p>

          <h2>Deux niveaux de prime CEE pour la pompe à chaleur</h2>
          <p>
            Les Certificats d'Économies d'Énergie (CEE) financent depuis des années l'installation
            de pompes à chaleur air/eau et eau/eau. Depuis le 1er septembre 2026, cette prime se
            scinde en deux niveaux bien distincts :
          </p>
          <ul>
            <li>
              <strong>Le forfait de base</strong> : accessible à tout modèle respectant les fiches
              techniques CEE standard. Son montant reste inchangé.
            </li>
            <li>
              <strong>La prime bonifiée</strong> (anciennement « Coup de Pouce Chauffage ») :
              réservée aux seuls modèles portant l'<strong>agrément officiel</strong>. Elle peut
              représenter plusieurs fois le forfait de base — un écart considérable sur la facture
              finale.
            </li>
          </ul>
          <p>
            En pratique, une pompe à chaleur non agréée peut encore recevoir le forfait de base,
            mais elle exclut son propriétaire de la bonification. Pour un foyer modeste ou
            intermédiaire qui cumule cette prime avec{' '}
            <a href="/pompe-a-chaleur">MaPrimeRénov' et la TVA à 5,5 %</a>, la différence peut
            atteindre plusieurs milliers d'euros.
          </p>

          <h2>Les deux critères de l'agrément PAC</h2>
          <p>
            Pour qu'un modèle soit inscrit sur la liste officielle, le fabricant doit satisfaire
            simultanément deux conditions :
          </p>

          <h3>1. La certification qualité européenne</h3>
          <p>
            Le modèle doit avoir obtenu une certification de performance délivrée par un organisme
            européen reconnu (tests d'efficacité énergétique, niveau sonore, fiabilité). Cette
            exigence rejoint les standards déjà pratiqués par les grandes marques, mais elle élimine
            mécaniquement certains équipements d'entrée de gamme sans certification.
          </p>

          <h3>2. La résilience industrielle (fabrication en EEE)</h3>
          <p>
            Le modèle doit être assemblé, au moins pour ses étapes clés, au sein de l'Espace
            Économique Européen (EEE). Cette condition, introduite dans le cadre de la politique
            européenne de résilience industrielle, vise à réduire la dépendance aux chaînes
            d'approvisionnement extra-européennes. Elle favorise les fabricants qui ont relocalisé
            tout ou partie de leur production en Europe.
          </p>

          <h2>Comment vérifier si votre modèle est agréé ?</h2>
          <p>
            L'ADEME publie et met à jour mensuellement la liste officielle des modèles agréés sur
            le site <strong>bonus-pac.ademe.fr</strong>. La liste regroupe à date de lancement
            plusieurs centaines de modèles provenant de nombreuses marques, en configurations
            monobloc et split. Il suffit d'y rechercher la référence exacte du modèle proposé par
            votre installateur avant de signer.
          </p>
          <p>
            Si votre modèle n'y figure pas, deux options s'offrent à vous :
          </p>
          <ul>
            <li>Demander à votre installateur de proposer un modèle agréé équivalent.</li>
            <li>
              Accepter le forfait de base si le modèle non agréé présente d'autres avantages
              (rapport qualité/prix, délai de livraison), après avoir mesuré précisément la
              différence d'aide.
            </li>
          </ul>

          <h2>Les contrats signés avant le 31 août 2026 sont protégés</h2>
          <p>
            La nouvelle règle s'applique aux <strong>contrats signés à partir du 1er septembre 2026</strong>.
            Si vous avez signé un devis ou un contrat de vente avant le 31 août 2026, les anciennes
            conditions du Coup de Pouce Chauffage s'appliquent intégralement, sans obligation
            d'agrément. Conservez précieusement votre contrat daté : il constitue la preuve du
            régime applicable.
          </p>

          <h2>Ce que ça change pour votre projet de rénovation</h2>
          <p>
            Cette réforme ajoute une vérification supplémentaire à tout projet d'installation de
            PAC, mais elle ne change pas les montants globaux disponibles pour les ménages qui
            choisissent un modèle agréé. En combinant la prime CEE bonifiée avec{' '}
            <a href="/pompe-a-chaleur">MaPrimeRénov'</a>, l'<a href="/dpe-gratuit">amélioration du DPE</a> et
            la TVA réduite à 5,5 %, une pompe à chaleur air/eau reste l'un des investissements les
            mieux aidés de 2026.
          </p>
          <p>
            À noter : depuis janvier 2026, le coefficient de conversion de l'électricité est passé
            de 2,3 à 1,9 dans le calcul du DPE. Cette évolution reclasse automatiquement vers le
            haut les logements chauffés à l'électricité — un argument supplémentaire pour passer à
            la pompe à chaleur dès maintenant.
          </p>

          <h2>Le rôle de l'Accompagnateur Rénov' dans le choix du modèle</h2>
          <p>
            Un <strong>Accompagnateur Rénov' agréé</strong> comme RenoHab vérifie systématiquement
            l'éligibilité des équipements proposés avant toute signature. Cette mission inclut :
          </p>
          <ul>
            <li>
              La vérification du modèle sur la liste ADEME bonus-pac.ademe.fr et sa mise à jour
              mensuelle.
            </li>
            <li>La comparaison du coût net après toutes les aides (CEE bonifiés + MaPrimeRénov').</li>
            <li>
              La coordination avec un installateur RGE qui s'engage sur un modèle agréé dès le
              devis.
            </li>
            <li>
              Le montage complet du dossier CEE pour que la prime soit versée sans délai après
              les travaux.
            </li>
          </ul>
          <p>
            Sans cet accompagnement, le risque est de signer pour un modèle non agréé et de
            découvrir la perte de la bonification après l'installation — moment où il est trop tard
            pour changer d'équipement.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Votre PAC est-elle éligible à la prime bonifiée ?
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab vérifie l'agrément de votre modèle, monte votre dossier CEE et coordonne un
            installateur RGE — pour que vous touchiez la prime maximale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Étudier ma pompe à chaleur
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
