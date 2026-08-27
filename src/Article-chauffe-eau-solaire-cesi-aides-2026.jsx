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

const PUBLISHED = '2026-07-30';
const PATH = '/blog/chauffe-eau-solaire-cesi-aides-2026';

export default function ArticleCESI() {
  useSeo({
    title: "Chauffe-eau solaire individuel (CESI) : aides, prix et urgence avant septembre 2026 | RenoHab",
    description:
      "Le CESI sera exclu du monogeste MaPrimeRénov' dès septembre 2026. Prix, aides encore disponibles, économies attendues : tout ce qu'il faut savoir pour agir maintenant.",
    path: PATH,
    image: '/blog/chauffe-eau-solaire-cesi-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Chauffe-eau solaire individuel (CESI) : aides, prix et urgence avant septembre 2026",
      description:
        "Le CESI sera exclu du monogeste MaPrimeRénov' dès septembre 2026. Prix, aides encore disponibles, économies attendues : tout ce qu'il faut savoir pour agir maintenant.",
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
      about: ['Chauffe-eau solaire', 'CESI', 'MaPrimeRénov', 'Eau chaude sanitaire', 'Énergie solaire thermique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 30 juillet 2026 · Eau chaude sanitaire &amp; aides
          </p>

          <h1>Chauffe-eau solaire individuel (CESI) : aides, prix et urgence avant septembre 2026</h1>

          <img
            src="/blog/chauffe-eau-solaire-cesi-aides-2026.jpg"
            alt="Capteurs solaires thermiques installés sur le toit d'une maison individuelle"
            className="w-full rounded-xl object-cover mb-6"
            loading="eager"
          />

          <p className="lead">
            Produire gratuitement jusqu'à 70 % de son eau chaude sanitaire grâce au soleil, tout en
            bénéficiant d'une aide de l'État pouvant dépasser 4 000 € : c'est ce que permet le chauffe-eau
            solaire individuel (CESI). Mais le temps presse : le gouvernement annonce l'exclusion du CESI du
            dispositif MaPrimeRénov' « monogeste » à compter du 1er septembre 2026. Les propriétaires qui
            agissent maintenant profitent encore du financement actuel.
          </p>

          <h2>Qu'est-ce qu'un CESI et comment ça fonctionne ?</h2>
          <p>
            Le chauffe-eau solaire individuel est un système de production d'eau chaude sanitaire fonctionnant
            à l'énergie solaire thermique — à ne pas confondre avec les panneaux photovoltaïques, qui
            produisent de l'électricité. Le CESI se compose de deux éléments principaux :
          </p>
          <ul>
            <li><strong>Des capteurs solaires thermiques</strong> (ou « panneaux solaires thermiques »), installés en toiture ou en façade, qui absorbent le rayonnement solaire pour chauffer un fluide caloporteur.</li>
            <li><strong>Un ballon de stockage</strong> isolé (généralement 200 à 300 litres), qui conserve l'eau chaude produite et intègre une résistance électrique d'appoint pour les journées peu ensoleillées.</li>
          </ul>
          <p>
            En France, un CESI correctement dimensionné couvre <strong>50 à 70 % des besoins annuels en eau chaude</strong>
            {' '}d'un foyer, quelle que soit la région. L'appoint électrique prend le relais les jours gris ou lors de
            fortes demandes.
          </p>

          <h2>Prix d'installation d'un CESI en 2026</h2>
          <p>
            Le coût total d'un chauffe-eau solaire individuel, fourniture et pose par un artisan RGE incluses,
            varie selon la capacité du ballon et la surface des capteurs :
          </p>
          <ul>
            <li><strong>CESI 150-200 litres</strong> (2-3 personnes) : 3 500 € à 5 500 € TTC</li>
            <li><strong>CESI 250-300 litres</strong> (4-5 personnes) : 5 500 € à 8 000 € TTC</li>
          </ul>
          <p>
            Ces prix s'entendent avant déduction des aides. Après financement public, le reste à charge
            peut descendre à <strong>1 500 € - 3 000 €</strong> pour les ménages aux revenus modestes.
          </p>

          <h2>Les aides disponibles en 2026 : agissez avant le 1er septembre</h2>

          <h3>MaPrimeRénov' — fenêtre qui se ferme en septembre</h3>
          <p>
            Actuellement, le CESI est éligible à MaPrimeRénov' dans le cadre du parcours « par geste » (monogeste).
            Le montant de la prime dépend du profil de revenus du foyer :
          </p>
          <ul>
            <li><strong>Revenus très modestes (bleu)</strong> : jusqu'à 4 000 €</li>
            <li><strong>Revenus modestes (jaune)</strong> : jusqu'à 3 000 €</li>
            <li><strong>Revenus intermédiaires (violet)</strong> : jusqu'à 2 000 €</li>
            <li><strong>Revenus supérieurs (rose)</strong> : aide réduite ou non applicable en monogeste</li>
          </ul>
          <p>
            <strong>Attention :</strong> le gouvernement a annoncé en juillet 2026 son intention d'exclure le
            chauffe-eau solaire thermique du monogeste MaPrimeRénov' à partir du <strong>1er septembre 2026</strong>.
            Le décret n'était pas encore publié au 30 juillet, mais la direction politique est claire.{' '}
            <strong>Les dossiers déposés avant la publication du décret, selon les règles en vigueur à la date
            du dépôt, restent éligibles.</strong> Il est donc urgent d'engager les démarches dès maintenant.
          </p>
          <p>
            Après septembre, le CESI reste finançable via MaPrimeRénov' uniquement dans le cadre d'une{' '}
            <strong>rénovation d'ampleur</strong> (bouquet de travaux permettant un saut d'au moins deux classes DPE).
            Pour savoir si votre logement est éligible à ce parcours,{' '}
            <a href="/dpe-gratuit">estimez votre DPE gratuitement avec RenoHab</a>.
          </p>

          <h3>Les Certificats d'Économies d'Énergie (CEE)</h3>
          <p>
            La prime CEE — versée par les fournisseurs d'énergie — est cumulable avec MaPrimeRénov'. Son montant
            actuel est de <strong>80 € à 170 €</strong> selon la zone climatique. Bonne nouvelle : un projet
            d'arrêté prévoit de multiplier cette prime par <strong>4 à 7 dès le 1er septembre 2026</strong> pour les
            chauffe-eau solaires, en compensation partielle de la sortie du monogeste. Ce bonus CEE renforcé
            représentera une aide bienvenue pour les projets déposés après septembre.
          </p>

          <h3>TVA réduite à 5,5 %</h3>
          <p>
            La TVA applicable aux travaux de rénovation énergétique — dont l'installation d'un CESI par un
            professionnel — est de <strong>5,5 % au lieu de 20 %</strong>. Cette réduction s'applique
            automatiquement sur la facture de l'artisan et représente une économie non négligeable sur le
            coût des équipements et de la main-d'œuvre.
          </p>

          <h3>Éco-PTZ et aides locales</h3>
          <p>
            L'installation d'un CESI est également éligible à l'<strong>Éco-PTZ</strong>, le prêt à taux zéro
            permettant de financer jusqu'à 50 000 € de travaux sans intérêts. Certaines régions, départements
            et collectivités accordent en outre des subventions locales complémentaires : renseignez-vous auprès
            de votre conseiller France Rénov'.
          </p>

          <h2>Quelles économies attendre d'un CESI ?</h2>
          <p>
            L'eau chaude sanitaire représente en moyenne <strong>10 à 15 % de la consommation énergétique</strong>{' '}
            d'un logement. Avec un CESI, les économies sur la facture varient selon l'énergie d'appoint remplacée :
          </p>
          <ul>
            <li><strong>Remplacement d'un chauffe-eau électrique</strong> : 200 à 400 € d'économies annuelles</li>
            <li><strong>Remplacement d'un ballon au fioul ou au gaz</strong> : 150 à 300 € par an</li>
          </ul>
          <p>
            La durée de vie d'une installation solaire thermique est de <strong>20 à 30 ans</strong>, avec un
            entretien annuel limité (vérification du fluide caloporteur, contrôle des capteurs). Le retour sur
            investissement, aides déduites, s'établit généralement entre <strong>8 et 12 ans</strong>.
          </p>

          <h2>CESI ou chauffe-eau thermodynamique : comment choisir ?</h2>
          <p>
            Le chauffe-eau thermodynamique (CET) est une alternative qui utilise les calories de l'air ambiant
            pour chauffer l'eau. Ces deux technologies se distinguent ainsi :
          </p>
          <ul>
            <li><strong>CESI</strong> : idéal si votre toiture est bien orientée (sud, sud-est, sud-ouest) et
            dégagée, inclinaison 30-60°. Production solaire directe, très faible empreinte carbone. Nécessite
            un espace en toiture et un accès facile pour la maintenance.</li>
            <li><strong>Chauffe-eau thermodynamique</strong> : fonctionne sans contrainte d'orientation ou
            d'ensoleillement, s'installe dans un garage, une cave ou à l'extérieur. Consommation électrique
            divisée par 3 à 4 par rapport à un ballon classique.</li>
          </ul>
          <p>
            Les deux restent des solutions pertinentes pour décarboner la production d'eau chaude.
            Si vous êtes équipé d'une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a>, celle-ci peut également assurer la
            production d'eau chaude sanitaire via un ballon intégré, simplifiant l'installation.
          </p>

          <h2>Comment bénéficier des aides pour un CESI ?</h2>
          <p>
            La démarche pour obtenir MaPrimeRénov' suit un ordre précis à respecter impérativement :
          </p>
          <ol>
            <li><strong>Déposez votre demande d'aide sur maprimerenov.gouv.fr avant de signer un devis</strong> — le dossier doit être validé avant le démarrage des travaux.</li>
            <li>Choisissez un artisan <strong>certifié RGE</strong> (Reconnu Garant de l'Environnement), condition indispensable à l'éligibilité.</li>
            <li>Signez le devis, réalisez les travaux, puis téléversez la facture sur le portail ANAH pour obtenir le versement de la prime.</li>
          </ol>
          <p>
            Un <strong>Accompagnateur Rénov' agréé</strong> comme RenoHab peut constituer et suivre votre dossier
            de A à Z, sélectionner des artisans RGE partenaires et cumuler toutes les aides disponibles.
            Utilisez notre <a href="/simulateur">simulateur en ligne</a> pour estimer en quelques minutes le
            montant de vos aides selon vos revenus.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Montez votre dossier CESI avant septembre</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, constitue votre dossier MaPrimeRénov' et sélectionne
            des artisans RGE pour votre projet de chauffe-eau solaire.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
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
