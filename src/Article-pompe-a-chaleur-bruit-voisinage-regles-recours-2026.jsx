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

const PUBLISHED = '2026-11-16';
const PATH = '/blog/pompe-a-chaleur-bruit-voisinage-regles-recours-2026';

export default function ArticlePacBruitVoisinage2026() {
  useSeo({
    title: "Pompe à chaleur et bruit de voisinage : règles, distances et recours en 2026 | RenoHab",
    description:
      "Votre pompe à chaleur gêne vos voisins, ou c'est l'inverse ? Découvrez les seuils légaux d'émergence sonore, les distances recommandées et les recours disponibles en 2026.",
    path: PATH,
    image: '/blog/pompe-a-chaleur-bruit-voisinage-regles-recours-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Pompe à chaleur et bruit de voisinage : règles, distances et recours en 2026",
      description:
        "Votre pompe à chaleur gêne vos voisins, ou c'est l'inverse ? Découvrez les seuils légaux d'émergence sonore, les distances recommandées et les recours disponibles en 2026.",
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
      about: ['Pompe à chaleur', 'Nuisances sonores', 'Réglementation', 'Recours voisinage'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 16 novembre 2026 · Pompe à chaleur
          </p>

          <h1>Pompe à chaleur et bruit de voisinage : règles, distances et recours en 2026</h1>

          <img
            src="/blog/pompe-a-chaleur-bruit-voisinage-regles-recours-2026.jpg"
            alt="Unité extérieure de pompe à chaleur installée dans un jardin, proche de la clôture"
            className="rounded-xl w-full object-cover max-h-72 mb-6"
            loading="lazy"
          />

          <p className="lead">
            Avec l'essor de la <a href="/pompe-a-chaleur">pompe à chaleur</a> comme système de
            chauffage de référence en 2026, les litiges de voisinage liés au bruit de l'unité
            extérieure se multiplient. Quelle est la réglementation applicable ? Y a-t-il une
            distance minimale à respecter ? Et que faire si un voisin conteste le fonctionnement
            de votre installation ? Ce guide complet fait le point.
          </p>

          <h2>Quel niveau sonore émet une pompe à chaleur ?</h2>
          <p>
            Une pompe à chaleur air/eau ou air/air émet un son en fonctionnement : le ventilateur
            de l'unité extérieure basse son niveau entre <strong>45 et 65 dB(A)</strong> à un mètre,
            selon les modèles et la puissance. À titre de comparaison, une conversation normale
            avoisine 60 dB(A) et un réfrigérateur environ 40 dB(A). Les appareils récents,
            notamment les modèles basse consommation éligibles à MaPrimeRénov', sont conçus pour
            rester en dessous de <strong>55 dB(A)</strong> à un mètre, ce qui les rend
            raisonnablement discrets dans la plupart des environnements.
          </p>
          <p>
            Ce niveau varie selon la température extérieure (la PAC tourne plus fort par grand
            froid), le réglage de la courbe de chauffe et l'état d'entretien de l'appareil. Un
            filtre encrassé ou un ventilateur hors équilibre peut accentuer significativement les
            nuisances.
          </p>

          <h2>Le cadre légal : émergence, pas niveau absolu</h2>
          <p>
            Le droit français ne fixe <strong>pas un plafond de décibels en valeur absolue</strong>
            pour les équipements domestiques. C'est le concept d'<em>émergence</em> qui s'applique,
            défini aux articles R.1336-6 et R.1336-7 du Code de la santé publique. L'émergence est
            la différence entre le niveau sonore ambiant mesuré avec l'appareil en marche et le
            niveau ambiant lorsqu'il est à l'arrêt.
          </p>
          <ul>
            <li>
              <strong>En journée (7 h – 22 h) :</strong> l'émergence ne doit pas dépasser
              <strong> +5 dB(A)</strong>.
            </li>
            <li>
              <strong>La nuit (22 h – 7 h) :</strong> le seuil tombe à <strong>+3 dB(A)</strong>.
            </li>
          </ul>
          <p>
            Concrètement, si votre jardin est naturellement très silencieux (30 dB(A) la nuit),
            toute émergence supérieure à 3 dB est susceptible d'être sanctionnée. Dans un
            environnement urbain déjà bruyant, la marge est plus large. C'est pourquoi deux
            pompes à chaleur identiques peuvent générer des situations très différentes selon
            leur implantation.
          </p>

          <h2>Existe-t-il une distance minimale légale ?</h2>
          <p>
            Non. <strong>Aucune loi nationale ne fixe de distance minimale</strong> entre une unité
            extérieure de PAC et la limite de propriété. Cependant, plusieurs règles s'ajoutent :
          </p>
          <ul>
            <li>
              <strong>Le Plan Local d'Urbanisme (PLU)</strong> de votre commune peut imposer un
              recul par rapport à la limite séparative. Vérifiez le règlement de zone avant
              l'installation.
            </li>
            <li>
              <strong>En copropriété</strong>, le règlement de copropriété ou une décision
              d'assemblée générale peut également imposer des contraintes d'implantation.
            </li>
            <li>
              À titre pratique, les installateurs recommandent généralement un recul d'au moins
              <strong> 1 mètre de la clôture</strong> pour limiter la propagation du son vers
              le voisin — et orienter le flux d'air soufflé vers l'intérieur de la parcelle.
            </li>
          </ul>

          <h2>Comment réduire le bruit à la source ?</h2>
          <p>
            Si votre installation génère déjà des nuisances ou si vous souhaitez prévenir tout
            litige, plusieurs solutions techniques sont disponibles :
          </p>
          <ul>
            <li>
              <strong>Plots anti-vibratoires :</strong> placés sous l'unité extérieure, ils
              absorbent les vibrations transmises au sol et aux murs, source principale du bruit
              ressenti à l'intérieur.
            </li>
            <li>
              <strong>Écran acoustique végétal ou minéral :</strong> une haie dense, un mur
              bahut ou un panneau absorbant interposé entre l'unité et le voisin peut réduire
              la propagation de 5 à 10 dB(A) selon les matériaux.
            </li>
            <li>
              <strong>Réorientation de l'unité :</strong> l'ouverture de soufflage doit être
              dirigée vers votre propre espace, jamais vers la fenêtre d'un voisin.
            </li>
            <li>
              <strong>Mise à jour du firmware :</strong> sur de nombreux modèles récents, le
              mode « nuit » réduit la vitesse du ventilateur automatiquement entre 22 h et 7 h.
              Activez-le si ce n'est pas encore fait.
            </li>
          </ul>

          <h2>Que faire si un voisin se plaint ?</h2>
          <h3>Étape 1 : la démarche amiable</h3>
          <p>
            En cas de plainte, la première démarche est le dialogue. Proposez à votre voisin une
            discussion directe ou passez par le conciliateur de justice de votre commune (service
            gratuit). Un accord amiable — déplacement de l'unité, pose de protections phoniques —
            évite des procédures longues et coûteuses.
          </p>

          <h3>Étape 2 : signalement en mairie</h3>
          <p>
            Si le litige persiste, le voisin peut saisir la mairie ou les services de la police
            municipale. Un agent habilité peut effectuer une <strong>mesure sonométrique</strong>
            sur place. Si l'émergence dépasse les seuils légaux, une mise en demeure est adressée
            au propriétaire, et en cas d'infraction persistante, une amende pouvant atteindre
            <strong> 450 €</strong> peut être prononcée (article R.1336-5 du Code de la santé
            publique).
          </p>

          <h3>Étape 3 : le recours civil pour trouble anormal de voisinage</h3>
          <p>
            Indépendamment des seuils réglementaires, le droit civil reconnaît la notion de
            <strong> trouble anormal de voisinage</strong> : même sans infraction pénale, un juge
            peut ordonner des travaux modificatifs ou accorder une indemnisation si les nuisances
            dépassent les inconvénients normaux que les voisins sont tenus de se supporter
            mutuellement. La cour d'appel de Douai a rendu en avril 2026 une décision de
            référence (RG 24/04682) rappelant que l'appréciation du caractère « anormal » tient
            compte de l'environnement local et des horaires de fonctionnement.
          </p>
          <p>
            Pour constituer un dossier solide, conservez un <strong>journal des nuisances</strong>
            (dates, heures, durées), faites réaliser une mesure phonique par un acousticien
            indépendant, et consultez un avocat spécialisé en droit immobilier si les montants
            en jeu le justifient.
          </p>

          <h2>Voisin, propriétaire ou locataire : qui est responsable ?</h2>
          <p>
            En droit de la responsabilité, c'est le <strong>propriétaire de l'installation</strong>
            qui est tenu responsable des nuisances, même s'il n'est pas fautif. Si vous êtes
            locataire et que c'est votre propriétaire qui a installé la PAC, il appartient au
            bailleur d'y remédier. Si vous êtes propriétaire et que la PAC a été installée par
            un artisan sans respecter les règles d'implantation, la garantie décennale peut
            couvrir les travaux correctifs.
          </p>

          <h2>L'entretien : un facteur souvent oublié</h2>
          <p>
            Une PAC mal entretenue vibre davantage et fait plus de bruit. Un entretien annuel par
            un professionnel RGE comprend la vérification des fixations, le nettoyage des
            ailettes et le contrôle du circuit frigorifique. Ces opérations préventives limitent
            les risques de litige et prolongent la durée de vie de l'appareil. Consultez notre
            guide sur l'<a href="/blog/entretien-pompe-a-chaleur-pac-2026">entretien de la pompe
            à chaleur</a> pour connaître les bons réflexes.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre projet pompe à chaleur, bien installé dès le départ</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Choix du modèle, implantation acoustique, aides MaPrimeRénov' et CEE : RenoHab vous
            accompagne de A à Z pour une installation conforme et sans litige de voisinage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Étudier ma pompe à chaleur
            </a>
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Simuler mon DPE gratuit
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
