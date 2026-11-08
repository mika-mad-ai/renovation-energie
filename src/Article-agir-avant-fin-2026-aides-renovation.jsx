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

const PUBLISHED = '2026-11-08';
const PATH = '/blog/agir-avant-fin-2026-aides-renovation';

export default function ArticleAgirAvantFin2026() {
  useSeo({
    title: "Agir avant fin 2026 : les aides à la rénovation qui changent ou disparaissent en 2027 | RenoHab",
    description:
      "PAC monogeste, passoires thermiques par geste, budget ANAH réduit… Plusieurs dispositifs d'aide à la rénovation énergétique se referment en 2026-2027. Guide d'action pour en profiter avant la date limite.",
    path: PATH,
    image: '/blog/agir-avant-fin-2026-aides-renovation.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Agir avant fin 2026 : les aides à la rénovation énergétique qui changent en 2027",
      description:
        "PAC monogeste, passoires thermiques par geste, budget ANAH réduit… Plusieurs dispositifs d'aide à la rénovation énergétique se referment en 2026-2027. Guide d'action pour en profiter avant la date limite.",
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
      about: ['MaPrimeRénov', 'Aides rénovation énergétique', 'Pompe à chaleur', 'CEE', 'ANAH'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 8 novembre 2026 · Aides
          </p>

          <h1>Agir avant fin 2026 : les aides à la rénovation énergétique qui changent ou disparaissent en 2027</h1>

          <img
            src="/blog/agir-avant-fin-2026-aides-renovation.jpg"
            alt="Propriétaire planifiant ses travaux de rénovation énergétique avant fin 2026 pour profiter des aides"
            className="rounded-2xl w-full object-cover max-h-96 mb-8"
            loading="lazy"
          />

          <p className="lead">
            Novembre 2026 : il reste moins de deux mois pour signer certains devis et déposer
            certains dossiers. Pompe à chaleur financée par MaPrimeRénov', parcours par geste
            pour les passoires F et G, budget de l'Anah en baisse… Plusieurs dispositifs se
            réduisent ou se ferment dès janvier 2027. Voici ce qu'il faut savoir — et faire —
            avant que le calendrier ne tourne.
          </p>

          <h2>1. La pompe à chaleur monogeste : profitez de MaPrimeRénov' avant janvier 2027</h2>
          <p>
            C'est le changement le plus impactant pour les ménages. Selon le Projet de loi de
            finances 2027 déposé à l'Assemblée nationale le 1er octobre 2026, le financement des
            <strong> pompes à chaleur via MaPrimeRénov' (parcours monogeste)</strong> serait
            transféré aux seuls Certificats d'Économies d'Énergie (CEE) dès 2027. L'objectif est
            de réduire la dotation de l'Anah d'environ 200 millions d'euros tout en maintenant
            une aide pour les ménages — mais à des conditions différentes.
          </p>
          <p>
            En pratique, cela signifie que si vous souhaitez installer une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur air/eau</a> avec le soutien de
            MaPrimeRénov', le devis doit être signé et le dossier déposé dans les semaines qui
            viennent. Les délais de traitement par l'Anah étant de plusieurs semaines, ne
            repoussez pas à décembre.
          </p>
          <ul>
            <li>
              <strong>Montant en jeu :</strong> jusqu'à 5 000 € pour un ménage aux revenus
              modestes dans le parcours PAC monogeste actuel, cumulable avec la prime CEE.
            </li>
            <li>
              <strong>Conditions :</strong> logement de plus de 15 ans, artisan RGE, devis
              signé après l'accord de l'Anah.
            </li>
            <li>
              <strong>À noter :</strong> le PLF 2027 est encore en cours d'examen parlementaire ;
              le dispositif actuel reste officiellement ouvert jusqu'à une décision définitive.
            </li>
          </ul>

          <h2>2. Les passoires thermiques F et G : dernier semestre pour le parcours par geste</h2>
          <p>
            Depuis la réforme de septembre 2026, MaPrimeRénov' distingue deux parcours :
            la <em>rénovation par geste</em> (un seul équipement) et la <em>rénovation
            d'ampleur</em> (saut de deux classes DPE minimum). Pour la plupart des logements,
            le parcours par geste a été restreint — mais une exception importante a été maintenue
            jusqu'au 31 décembre 2026 : les logements classés <strong>F ou G</strong> restent
            éligibles au parcours par geste pour certains travaux.
          </p>
          <p>
            À partir du 1er janvier 2027, ces passoires thermiques basculeront obligatoirement
            vers le parcours d'ampleur pour accéder aux aides MaPrimeRénov'. Ce parcours exige
            un gain de deux classes DPE minimum, un audit énergétique préalable et
            l'accompagnement d'un Accompagnateur Rénov'.
          </p>
          <p>
            Si votre logement est classé F ou G et que vous envisagez un geste unique
            (isolation des combles, par exemple), c'est maintenant ou jamais pour en bénéficier
            dans le cadre simplifié.
          </p>

          <h2>3. Un budget ANAH en baisse de 200 M€ : pourquoi agir tôt en 2027 sera crucial</h2>
          <p>
            Au-delà des règles d'éligibilité, c'est l'enveloppe globale qui se réduit. Le PLF 2027
            prévoit de passer les crédits de paiement du programme dédié à l'habitat de
            1 450 millions à 1 233 millions d'euros, soit une baisse d'environ 15 %. Avec un
            budget plus serré, les files d'attente pour l'instruction des dossiers risquent de
            s'allonger dès le premier trimestre 2027. Déposer son dossier avant la fin 2026 — ou
            au tout début de 2027 — reste la meilleure façon d'éviter les délais.
          </p>

          <h2>4. Les gestes supprimés depuis septembre 2026 : ce qui ne reviendra pas</h2>
          <p>
            Pour rappel, depuis le 1er septembre 2026, plusieurs gestes ont été retirés du
            parcours par geste de MaPrimeRénov' : le chauffe-eau solaire individuel (CESI),
            le poêle et la cuisinière à granulés de bois, et les menuiseries isolantes pour la
            quasi-totalité des logements hors passoires. Ces suppressions sont définitives : il
            n'y a pas de retour en arrière prévu.
          </p>
          <p>
            En parallèle, la fiche CEE <strong>BAR-TH-168</strong> relative au solaire thermique
            a été supprimée le 4 novembre 2026 — ce qui ferme la dernière voie d'aide pour le
            CESI. Si vous hésitiez encore à passer au{' '}
            <a href="/blog/chauffe-eau-thermodynamique-vs-solaire-2026">
              chauffe-eau thermodynamique plutôt qu'au solaire thermique
            </a>
            , la décision est désormais facilitée.
          </p>

          <h2>5. Le reclassement DPE de 2027 : anticiper pour revendre ou relouer</h2>
          <p>
            Une nouvelle modification du coefficient de conversion de l'électricité est attendue
            en 2027. Selon les projections disponibles, elle pourrait entraîner un
            reclassement de plusieurs centaines de milliers de logements chauffés à l'électricité.
            Pour les propriétaires bailleurs dont le logement est en classe E (interdiction de
            louer en 2034), ce reclassement pourrait soit aggraver la situation, soit au
            contraire repousser l'échéance — selon la configuration du bien.
          </p>
          <p>
            Dans tous les cas, faire réaliser un{' '}
            <a href="/dpe-gratuit">DPE actualisé</a> avant la publication officielle du nouveau
            coefficient permet d'anticiper et de planifier les travaux dans les meilleures
            conditions d'aide.
          </p>

          <h2>Checklist : ce qu'il faut faire avant le 31 décembre 2026</h2>
          <ul>
            <li>
              ✅ <strong>Projet PAC :</strong> contacter un Accompagnateur Rénov' et demander
              des devis d'artisans RGE pour déposer le dossier MaPrimeRénov' avant la réforme 2027.
            </li>
            <li>
              ✅ <strong>Passoire F ou G :</strong> identifier le ou les gestes prioritaires
              (isolation des combles, VMC…) et déposer le dossier avant le 31 décembre.
            </li>
            <li>
              ✅ <strong>DPE actualisé :</strong> faire valider l'étiquette actuelle et anticiper
              le reclassement 2027, notamment pour les biens à louer.
            </li>
            <li>
              ✅ <strong>Dossier complet :</strong> vérifier que le logement a plus de 15 ans,
              que l'artisan est bien RGE et que le devis est signé après l'accord de l'Anah.
            </li>
            <li>
              ✅ <strong>Cumul des aides :</strong> ne pas oublier de combiner MaPrimeRénov',
              CEE, éco-PTZ et TVA à 5,5 % — des dispositifs qui restent en vigueur en 2027.
            </li>
          </ul>

          <h2>Conclusion : novembre-décembre 2026, une fenêtre à ne pas rater</h2>
          <p>
            Les réformes successives des aides à la rénovation énergétique suivent une logique
            claire : concentrer les financements publics sur les rénovations les plus ambitieuses
            et les ménages les plus modestes, en réduisant les aides aux gestes isolés. Cette
            orientation va s'accentuer en 2027. Pour les propriétaires qui hésitaient encore,
            les prochaines semaines représentent une réelle opportunité de sécuriser un dossier
            dans des conditions favorables, avant que les règles ne se resserrent davantage.
          </p>
          <p>
            Chez RenoHab, en tant qu'Accompagnateur Rénov' agréé, nous pouvons instruire votre
            dossier dès maintenant pour respecter les délais. Faites le point sur votre
            situation via le simulateur de notre page d'accueil.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">
            Montez votre dossier avant la fin 2026
          </h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, vérifie votre éligibilité, prépare votre
            dossier et coordonne les artisans RGE — pour profiter des meilleures aides avant
            qu'elles ne changent.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mes aides
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Étudier une pompe à chaleur
            </a>
            <a href="/blog" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Tous nos guides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
