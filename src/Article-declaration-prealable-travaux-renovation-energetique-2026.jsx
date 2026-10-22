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

const PUBLISHED = '2026-10-22';
const PATH = '/blog/declaration-prealable-travaux-renovation-energetique-2026';

export default function ArticleDeclarationPrealableRenovation2026() {
  useSeo({
    title: "Déclaration préalable et permis de construire pour la rénovation énergétique en 2026 | RenoHab",
    description:
      "PAC, ITE, fenêtres, solaire : quel type d'autorisation faut-il en mairie avant vos travaux de rénovation énergétique en 2026 ? Le guide complet, avec le nouveau décret PAC de mars 2026.",
    path: PATH,
    image: '/blog/declaration-prealable-travaux-renovation-energetique-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Déclaration préalable et permis de construire pour la rénovation énergétique : ce qui change en 2026",
      description:
        "PAC, ITE, fenêtres, solaire : quel type d'autorisation faut-il en mairie avant vos travaux de rénovation énergétique en 2026 ? Le guide complet, avec le nouveau décret PAC de mars 2026.",
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
      about: ['Rénovation énergétique', 'Déclaration préalable', 'Permis de construire', 'Urbanisme'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 22 oct. 2026 · Démarches & réglementation
          </p>

          <h1>Déclaration préalable et permis de construire pour la rénovation énergétique : ce qui change en 2026</h1>

          <img
            src="/blog/declaration-prealable-travaux-renovation-energetique-2026.jpg"
            alt="Maison individuelle en cours de rénovation énergétique — démarches administratives en mairie"
            className="rounded-xl w-full object-cover mb-8"
            loading="lazy"
          />

          <p className="lead">
            Avant de signer votre devis de rénovation énergétique, une question revient souvent :
            faut-il passer par la mairie ? La réponse dépend du type de travaux — et elle a évolué
            en 2026, notamment grâce à un décret qui simplifie radicalement l'installation des
            pompes à chaleur. Tour d'horizon des autorisations requises, travaux par travaux.
          </p>

          <h2>Déclaration préalable ou permis de construire : quelle différence ?</h2>
          <p>
            En France, les travaux qui modifient l'aspect extérieur d'un bâtiment existant sont
            soumis à l'une de ces deux procédures :
          </p>
          <ul>
            <li>
              <strong>La déclaration préalable de travaux (DP)</strong> : formulaire Cerfa à déposer
              en mairie, délai d'instruction de 1 mois (2 mois en zone protégée). Elle s'applique
              aux modifications légères de l'aspect extérieur.
            </li>
            <li>
              <strong>Le permis de construire (PC)</strong> : procédure plus lourde (délai de 3 mois
              minimum), réservée aux constructions nouvelles, aux extensions et aux travaux
              importants en zones protégées.
            </li>
          </ul>
          <p>
            La bonne nouvelle : la grande majorité des travaux de rénovation énergétique relève de
            la déclaration préalable, voire d'aucune autorisation. Le permis de construire est
            l'exception.
          </p>

          <h2>Pompe à chaleur : plus de déclaration préalable depuis mars 2026</h2>
          <p>
            C'est la simplification majeure de 2026 pour les particuliers. Le{' '}
            <strong>décret n° 2026-117 du 20 février 2026</strong>, entré en vigueur le{' '}
            <strong>1er mars 2026</strong>, supprime l'obligation de déposer une déclaration
            préalable pour installer une <a href="/pompe-a-chaleur">pompe à chaleur</a> air/eau,
            géothermique ou air/air, sous une condition clé : l'unité extérieure ne doit pas être
            visible depuis l'espace public, une voie ouverte à la circulation ou un bâtiment tiers.
          </p>
          <p>
            Concrètement, une unité extérieure placée en cour intérieure ou en façade arrière d'une
            maison individuelle n'a plus besoin de déclaration. Cette dispense réduit les délais
            avant chantier de plusieurs semaines.
          </p>
          <p>
            <strong>Attention, deux exceptions subsistent :</strong>
          </p>
          <ul>
            <li>
              Les <strong>secteurs protégés</strong> (sites patrimoniaux remarquables, abords de
              monuments historiques, réserves naturelles, immeubles classés ou inscrits) : la DP
              reste obligatoire, et l'avis de l'Architecte des Bâtiments de France (ABF) peut être
              requis.
            </li>
            <li>
              L'absence de formalité ne dispense pas du respect des règles d'urbanisme locales
              (PLU, règlement de copropriété). Il est toujours conseillé de vérifier avec votre
              mairie avant d'engager les travaux.
            </li>
          </ul>

          <h2>Isolation par l'extérieur (ITE) : la déclaration préalable est la règle générale</h2>
          <p>
            L'isolation thermique par l'extérieur modifie l'aspect de la façade et, souvent, avance
            légèrement le nu du mur sur la voie publique. À ce titre, une{' '}
            <strong>déclaration préalable est généralement requise</strong>.
          </p>
          <p>
            Le permis de construire n'est nécessaire que dans deux cas :
          </p>
          <ul>
            <li>Si les travaux s'accompagnent d'une <strong>extension de la surface de plancher</strong>.</li>
            <li>
              Si le logement est situé dans un <strong>secteur sauvegardé ou aux abords d'un
              monument historique</strong>, où les règles sont plus strictes.
            </li>
          </ul>
          <p>
            Déposez votre DP au moins <strong>un mois avant le démarrage du chantier</strong>.
            L'absence de réponse de la mairie dans ce délai vaut accord tacite, sauf en zone ABF
            (2 mois).
          </p>

          <h2>Remplacement des fenêtres et menuiseries</h2>
          <p>
            La situation dépend de ce que vous remplacez :
          </p>
          <ul>
            <li>
              <strong>Remplacement à l'identique</strong> (même forme, mêmes dimensions, matériaux
              similaires) : <strong>aucune autorisation</strong> n'est nécessaire dans la majorité
              des cas.
            </li>
            <li>
              <strong>Changement de style ou de dimensions</strong> (passage de bois à aluminium
              visible depuis la rue, modification de la taille des baies) : une{' '}
              <strong>déclaration préalable</strong> peut être exigée, notamment en secteur
              sauvegardé ou lorsque le PLU impose des prescriptions esthétiques.
            </li>
          </ul>
          <p>
            En cas de doute, un coup de téléphone au service urbanisme de votre mairie suffit
            généralement à trancher. C'est gratuit et sans engagement.
          </p>

          <h2>Panneaux solaires et VMC</h2>
          <h3>Panneaux photovoltaïques ou thermiques</h3>
          <p>
            En toiture, les panneaux solaires sont soumis à une{' '}
            <strong>déclaration préalable</strong> dès lors qu'ils modifient l'aspect extérieur du
            bâtiment et sont visibles depuis la voie publique. En revanche, les panneaux intégrés
            à la toiture (en remplacement de tuiles) peuvent bénéficier d'un régime simplifié selon
            le PLU local. Dans les zones ABF, une étude d'insertion paysagère est souvent demandée.
          </p>
          <h3>Ventilation mécanique contrôlée (VMC)</h3>
          <p>
            La VMC est un équipement intérieur : aucune autorisation n'est en principe requise.
            Seule la sortie en toiture (chapeau de ventilation) peut nécessiter une DP si elle
            modifie visiblement le toit dans un secteur protégé.
          </p>

          <h2>Zones protégées : les règles spéciales de l'ABF</h2>
          <p>
            Si votre logement se trouve dans le périmètre d'un monument historique (rayon de 500 m),
            dans un site patrimonial remarquable (SPR) ou dans un site classé, les règles sont
            différentes :
          </p>
          <ul>
            <li>Toute modification extérieure (ITE, fenêtres, PAC, solaire) requiert un{' '}
              <strong>avis de l'Architecte des Bâtiments de France</strong>.</li>
            <li>Le délai d'instruction d'une DP passe à <strong>2 mois</strong> (voire plus si l'ABF
              rend un avis défavorable suivi d'un recours).</li>
            <li>Certains matériaux ou couleurs peuvent être imposés par le règlement du SPR.</li>
          </ul>
          <p>
            Pour savoir si vous êtes concerné, rendez-vous sur{' '}
            <strong>atlas.patrimoine.culture.gouv.fr</strong> ou contactez directement la direction
            régionale des affaires culturelles (DRAC).
          </p>

          <h2>Récapitulatif : quelle autorisation pour quel geste ?</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-emerald-50 text-emerald-900 font-semibold">
                <tr>
                  <th className="px-4 py-3">Type de travaux</th>
                  <th className="px-4 py-3">Hors zone protégée</th>
                  <th className="px-4 py-3">Zone ABF / protégée</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">PAC (unité non visible rue)</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">Aucune (depuis mars 2026)</td>
                  <td className="px-4 py-3 text-amber-700">Déclaration préalable + ABF</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Isolation extérieure (ITE)</td>
                  <td className="px-4 py-3 text-amber-700">Déclaration préalable</td>
                  <td className="px-4 py-3 text-amber-700">Déclaration préalable + ABF</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Fenêtres à l'identique</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">Aucune</td>
                  <td className="px-4 py-3 text-amber-700">Déclaration préalable + ABF</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Fenêtres (changement de style)</td>
                  <td className="px-4 py-3 text-amber-700">Déclaration préalable</td>
                  <td className="px-4 py-3 text-amber-700">Déclaration préalable + ABF</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Panneaux solaires (toiture)</td>
                  <td className="px-4 py-3 text-amber-700">Déclaration préalable</td>
                  <td className="px-4 py-3 text-amber-700">Déclaration préalable + ABF</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">VMC (intérieure)</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">Aucune</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">Aucune (sauf sortie toiture)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Comment déposer une déclaration préalable en 5 étapes</h2>
          <ol>
            <li>
              <strong>Téléchargez le formulaire Cerfa n° 13703</strong> sur service-public.fr ou
              récupérez-le en mairie.
            </li>
            <li>
              <strong>Préparez les pièces jointes</strong> : plan de situation du terrain,
              photos de la façade actuelle, représentation du projet (plan de masse, croquis ou
              simulation).
            </li>
            <li>
              <strong>Déposez le dossier en mairie</strong> (en personne ou par courrier
              recommandé avec AR). Certaines communes acceptent le dépôt en ligne via le portail
              « démarches simplifiées ».
            </li>
            <li>
              <strong>Attendez la décision</strong> : 1 mois en zone ordinaire, 2 mois en zone ABF.
              L'absence de réponse au-delà du délai vaut accord tacite.
            </li>
            <li>
              <strong>Affichez le panneau de chantier</strong> dès l'obtention de l'accord (obligatoire
              pendant toute la durée des travaux).
            </li>
          </ol>
          <p>
            La déclaration préalable est valable <strong>3 ans</strong> à compter de sa délivrance.
            Si vous n'avez pas commencé les travaux dans ce délai, il faudra en déposer une nouvelle.
          </p>

          <h2>Commencer par évaluer votre logement</h2>
          <p>
            Avant toute démarche administrative, la priorité est d'identifier les travaux réellement
            prioritaires pour votre logement — et les aides auxquelles vous avez droit. Un{' '}
            <a href="/dpe-gratuit">DPE gratuit en ligne</a> vous donne une première estimation de
            votre classe énergétique. Pour aller plus loin, notre{' '}
            <a href="/simulateur">simulateur d'aides</a> calcule en quelques minutes MaPrimeRénov',
            CEE et Éco-PTZ selon votre situation.
          </p>
          <p>
            En tant qu'<strong>Accompagnateur Rénov' agréé</strong>, RenoHab prend en charge la
            constitution des dossiers d'aides et coordonne les artisans RGE — vous n'avez pas à
            gérer la complexité administrative seul. Retrouvez tous nos conseils sur le{' '}
            <a href="/blog">blog rénovation énergétique</a>.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Faites-vous accompagner par un expert</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Démarches administratives, dossiers d'aides, coordination des artisans RGE : RenoHab
            gère tout en tant qu'Accompagnateur Rénov' agréé.
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
