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

const PUBLISHED = '2026-09-03';
const PATH = '/blog/maprimerenov-proprietaire-bailleur-2026';

export default function ArticleMaPrimeRenovProprietaireBailleur2026() {
  useSeo({
    title: "MaPrimeRénov' propriétaire bailleur 2026 : aides, conditions et démarches | RenoHab",
    description:
      "Propriétaire bailleur : tout savoir sur MaPrimeRénov', les CEE et l'Éco-PTZ pour rénover votre logement locatif en 2026. Évitez l'interdiction de location des passoires thermiques.",
    path: PATH,
    image: '/blog/maprimerenov-proprietaire-bailleur-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "MaPrimeRénov' propriétaire bailleur en 2026 : toutes les aides pour rénover un logement locatif",
      description:
        "Propriétaire bailleur : tout savoir sur MaPrimeRénov', les CEE et l'Éco-PTZ pour rénover votre logement locatif en 2026. Évitez l'interdiction de location des passoires thermiques.",
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
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 3 septembre 2026 · Aides &amp; financement
          </p>

          <h1>MaPrimeRénov' propriétaire bailleur en 2026 : toutes les aides pour rénover un logement locatif</h1>

          <img
            src="/blog/maprimerenov-proprietaire-bailleur-2026.jpg"
            alt="Propriétaire bailleur rénovation énergétique 2026"
            className="w-full rounded-2xl object-cover my-6"
            loading="eager"
          />

          <p className="lead">
            Vous louez un appartement ou une maison classé F ou G ? Depuis le 1er janvier 2025, les
            logements G ne peuvent plus faire l'objet d'un nouveau bail en France métropolitaine — et
            les F seront à leur tour concernés en 2028. La bonne nouvelle : les propriétaires bailleurs
            peuvent accéder à <strong>MaPrimeRénov'</strong>, aux <strong>CEE</strong> et à l'
            <strong>Éco-PTZ</strong> pour financer leurs travaux. Voici l'essentiel à savoir en 2026.
          </p>

          <h2>Pourquoi les bailleurs ne peuvent plus attendre</h2>
          <p>
            La loi Climat et Résilience a instauré un calendrier strict d'interdiction de location
            pour les passoires thermiques :
          </p>
          <ul>
            <li><strong>Depuis le 1er janvier 2025</strong> : interdiction de louer (nouveau bail, renouvellement ou tacite reconduction) les logements classés <strong>G</strong> en France métropolitaine.</li>
            <li><strong>À partir du 1er janvier 2028</strong> : même interdiction pour les logements classés <strong>F</strong>.</li>
            <li><strong>À partir du 1er janvier 2034</strong> : interdiction étendue aux logements classés <strong>E</strong>.</li>
          </ul>
          <p>
            La France comptait, au 1er janvier 2025, environ <strong>3,9 millions de logements F ou G</strong>,
            soit 12,7 % des résidences principales. Autrement dit, un bailleur sur huit est concerné.
          </p>
          <p>
            À noter : le nouveau mode de calcul du DPE entré en vigueur au <strong>1er janvier 2026</strong>
            — qui abaisse le coefficient de conversion de l'électricité de 2,3 à 1,9 — a fait reclasser
            à la hausse environ 850 000 logements chauffés à l'électricité. Si votre bien est équipé d'un
            chauffage électrique, il vaut la peine de <a href="/dpe-gratuit">faire recalculer votre DPE</a>
            pour vérifier si vous bénéficiez de ce reclassement.
          </p>

          <h2>MaPrimeRénov' : les bailleurs y ont-ils droit ?</h2>
          <p>
            Oui. Les propriétaires bailleurs sont éligibles à <strong>MaPrimeRénov'</strong>, au même
            titre que les propriétaires occupants, sous réserve de respecter certaines conditions
            spécifiques.
          </p>

          <h3>Conditions générales</h3>
          <ul>
            <li>Le logement doit être situé en France métropolitaine ou dans les DOM.</li>
            <li>Il doit avoir été achevé depuis au moins <strong>15 ans</strong>.</li>
            <li>L'éligibilité est déterminée par les ressources du <strong>propriétaire bailleur</strong>
            (et non du locataire), selon les plafonds de l'ANAH (très modestes, modestes, intermédiaires, supérieurs).</li>
          </ul>

          <h3>L'engagement de location</h3>
          <p>
            En contrepartie des aides, le bailleur s'engage à louer le bien rénové à un locataire
            dont les ressources ne dépassent pas les plafonds de l'ANAH, pendant au moins{' '}
            <strong>6 ans</strong> après la fin des travaux. Le loyer doit également rester dans les
            limites fixées par convention avec l'ANAH. Cet engagement est formalisé par une{' '}
            <em>convention d'occupation</em>.
          </p>

          <h2>Depuis septembre 2026 : la fin du monogeste pour la plupart des travaux</h2>
          <p>
            Depuis le <strong>1er septembre 2026</strong>, le <em>parcours par geste</em> (monogeste)
            de MaPrimeRénov' a été profondément restreint. Il ne finance plus désormais que quatre
            opérations :
          </p>
          <ul>
            <li>Pompe à chaleur air/eau</li>
            <li>Pompe à chaleur géothermique ou solarothermique</li>
            <li>Raccordement à un réseau de chaleur ou de froid</li>
            <li>Dépose d'une cuve à fioul</li>
          </ul>
          <p>
            Tous les autres travaux — isolation des combles, remplacement des fenêtres, VMC,
            chauffe-eau thermodynamique — <strong>ne sont plus finançables en monogeste</strong>.
            Pour en bénéficier, le bailleur doit désormais passer par le{' '}
            <strong>parcours accompagné</strong> (rénovation d'ampleur).
          </p>

          <h2>La rénovation d'ampleur : la voie royale pour les bailleurs en 2026</h2>
          <p>
            Le <em>parcours accompagné</em>, ou rénovation d'ampleur, est la solution la plus complète
            et la plus aidée. Il est accessible à tous les profils de bailleurs et permet de combiner
            plusieurs gestes en un seul projet cohérent.
          </p>

          <h3>Conditions d'accès</h3>
          <ul>
            <li>Le projet doit permettre un <strong>gain d'au moins deux classes DPE</strong>
            (ex. : passer de G à E, ou de F à D).</li>
            <li>Les travaux ne doivent pas maintenir un chauffage au gaz ou au fioul comme mode
            principal de chauffage après rénovation.</li>
            <li>Le dossier doit être monté avec un <strong>Accompagnateur Rénov' agréé</strong>,
            obligatoire depuis janvier 2023 pour accéder à ce parcours.</li>
          </ul>

          <h3>Pourquoi c'est avantageux</h3>
          <p>
            La rénovation d'ampleur ouvre droit aux aides les plus élevées de MaPrimeRénov', dont
            le montant dépend du profil de revenus du bailleur. Elle permet également de cumuler :
          </p>
          <ul>
            <li>MaPrimeRénov' parcours accompagné</li>
            <li>Certificats d'économies d'énergie (CEE)</li>
            <li>Éco-PTZ jusqu'à <strong>50 000 €</strong> sur 20 ans</li>
            <li>TVA à <strong>5,5 %</strong> sur les travaux</li>
          </ul>
          <p>
            Pour un bailleur dont le logement passe de G à C, l'ensemble de ces dispositifs peut
            couvrir une large partie du coût total des travaux tout en valorisant durablement le bien.
            Utilisez le <a href="/#simulator">simulateur RenoHab</a> pour une première estimation
            personnalisée.
          </p>

          <h2>CEE et Éco-PTZ : deux leviers complémentaires</h2>

          <h3>Les Certificats d'économies d'énergie (CEE)</h3>
          <p>
            Les CEE sont des primes versées par les fournisseurs d'énergie (EDF, Engie,
            TotalEnergies…) en contrepartie d'économies d'énergie générées par des travaux réalisés
            par un artisan <strong>RGE</strong>. Ils sont cumulables avec MaPrimeRénov' et sans
            condition de revenus pour le bailleur. Le montant varie selon les travaux et la zone
            climatique.
          </p>

          <h3>L'Éco-PTZ</h3>
          <p>
            L'Éco-PTZ (prêt à taux zéro) est accessible aux propriétaires bailleurs sans conditions
            de ressources. Il permet d'emprunter jusqu'à <strong>50 000 €</strong> sur 20 ans à taux
            zéro pour financer une rénovation d'ampleur. Point de vigilance depuis le décret du
            26 décembre 2025 : la demande de prêt doit être déposée auprès de la banque{' '}
            <strong>avant le début des travaux</strong>. Un devis signé ou un acompte versé avant
            l'obtention du prêt peut entraîner un refus automatique — il faut donc anticiper.
          </p>

          <h2>Étapes concrètes pour un bailleur en 2026</h2>
          <ol>
            <li>
              <strong>Vérifiez la classe DPE actuelle</strong> de votre logement, en réclamant un
              nouveau DPE calculé avec le coefficient 2026 si votre bien est chauffé à l'électricité.
              Consultez notre outil <a href="/dpe-gratuit">estimation DPE gratuite</a>.
            </li>
            <li>
              <strong>Identifiez les travaux prioritaires</strong> : un audit énergétique réglementaire
              (obligatoire à la vente des biens classés E, F ou G depuis 2025) ou une visite-conseil
              France Rénov' vous donnent une feuille de route fiable.
            </li>
            <li>
              <strong>Constituez un dossier de rénovation d'ampleur</strong> avec un Accompagnateur
              Rénov' agréé, seule porte d'entrée pour accéder à MaPrimeRénov' parcours accompagné
              et bénéficier des aides maximales.
            </li>
            <li>
              <strong>Déposez votre demande d'Éco-PTZ avant tout début de chantier</strong> pour ne
              pas perdre le bénéfice du prêt à taux zéro.
            </li>
            <li>
              <strong>Faites réaliser les travaux par des artisans RGE</strong> pour être éligible
              à l'ensemble des aides. <a href="/blog/choisir-artisan-rge-2026">Comment choisir un artisan RGE</a> : notre guide.
            </li>
          </ol>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Propriétaire bailleur ? Faites chiffrer vos aides</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            En tant qu'Accompagnateur Rénov' agréé, RenoHab monte votre dossier MaPrimeRénov',
            CEE et Éco-PTZ, et coordonne les artisans RGE pour votre logement locatif.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
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
