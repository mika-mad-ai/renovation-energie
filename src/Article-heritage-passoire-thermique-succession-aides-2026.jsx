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

const PUBLISHED = '2026-11-28';
const PATH = '/blog/heritage-passoire-thermique-succession-aides-2026';

export default function ArticleHeritagePassoireThermique2026() {
  useSeo({
    title: "Hériter d'une passoire thermique : obligations, options et aides disponibles en 2026 | RenoHab",
    description:
      "Vous héritez d'un logement classé F ou G ? Découvrez vos obligations réelles, les délais à respecter, et comment bénéficier de MaPrimeRénov', des CEE et de l'éco-PTZ en tant qu'héritier en 2026.",
    path: PATH,
    image: '/blog/heritage-passoire-thermique-succession-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Hériter d'une passoire thermique : obligations, options et aides disponibles en 2026",
      description:
        "Vous héritez d'un logement classé F ou G ? Découvrez vos obligations réelles, les délais à respecter, et comment bénéficier de MaPrimeRénov', des CEE et de l'éco-PTZ en tant qu'héritier en 2026.",
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
      about: ['Succession immobilière', 'Passoire thermique', 'DPE F G', 'MaPrimeRénov', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 28 nov. 2026 · Succession & aides
          </p>

          <h1>Hériter d'une passoire thermique : obligations, options et aides disponibles en 2026</h1>

          <img
            src="/blog/heritage-passoire-thermique-succession-aides-2026.jpg"
            alt="Maison héritée en succession avec un mauvais DPE — passoire thermique à rénover"
            className="rounded-xl w-full object-cover max-h-80 mb-8"
            loading="lazy"
          />

          <p className="lead">
            Vous venez d'hériter d'une maison classée <strong>F ou G</strong> au DPE ? C'est une
            situation fréquente : des millions de logements français ont été construits avant les
            premières réglementations thermiques, et leurs propriétaires n'ont pas toujours eu les
            moyens ou l'occasion de les rénover. Bonne nouvelle : en tant qu'héritier, vous avez
            davantage d'options qu'il n'y paraît — et les aides publiques vous sont pleinement
            accessibles.
          </p>

          <h2>Avez-vous l'obligation de rénover après une succession ?</h2>
          <p>
            La réponse est claire : <strong>non, aucune loi ne vous oblige à rénover un logement
            hérité</strong>. Contrairement à une idée répandue, le simple fait d'être propriétaire
            d'une passoire thermique ne déclenche pas d'obligation de travaux. Les contraintes
            s'appliquent uniquement dans deux cas précis :
          </p>
          <ul>
            <li>
              <strong>Si vous souhaitez le louer</strong> : les logements classés <strong>G</strong>{' '}
              sont interdits à la location depuis le 1er janvier 2025. Les logements classés{' '}
              <strong>F</strong> le seront à partir de <strong>2028</strong>, et les{' '}
              <strong>E en 2034</strong>. Si le bien était déjà loué au moment de la succession, le
              contrat de bail en cours peut se poursuivre, mais vous ne pourrez pas augmenter le
              loyer ni relouer après le départ du locataire sans rénover.
            </li>
            <li>
              <strong>Si vous souhaitez le vendre</strong> : depuis le 1er avril 2023, un{' '}
              <strong>audit énergétique</strong> est obligatoire avant la vente d'une maison
              individuelle classée F ou G. Cet audit est différent du simple DPE : il présente un
              plan de travaux chiffré. Il est à la charge du vendeur.
            </li>
          </ul>
          <p>
            En dehors de ces situations, vous pouvez conserver le bien sans travaux aussi longtemps
            que vous le souhaitez.
          </p>

          <h2>Vérifiez d'abord si le bien est encore vraiment une passoire</h2>
          <p>
            Depuis le <strong>1er janvier 2026</strong>, le mode de calcul du DPE a évolué : le
            coefficient d'énergie primaire de l'électricité a été abaissé de 2,3 à 1,9. Résultat :
            de nombreux logements chauffés à l'électricité ont automatiquement gagné une ou deux
            classes. Un bien classé <strong>F ou G avant 2026 peut donc être reclassé D ou E</strong>{' '}
            sur un DPE recalculé.
          </p>
          <p>
            Si le DPE du logement hérité date d'avant 2026, il peut être utile d'en commander un
            nouveau avant toute décision. Un{' '}
            <a href="/dpe-gratuit">pré-DPE gratuit en ligne</a> vous donne une première
            estimation en quelques minutes.
          </p>

          <h2>Vos trois options après succession</h2>

          <h3>1. Vendre le bien en l'état</h3>
          <p>
            C'est la solution la plus rapide. Elle impose toutefois de réaliser l'audit énergétique
            obligatoire (pour les F/G) et d'accepter une éventuelle décote sur le prix. Les
            acheteurs savent que des travaux seront à prévoir et l'intègrent dans leur offre.{' '}
            <a href="/blog/passoire-thermique-vendre-ou-renover-2026">
              Notre guide complet sur vendre ou rénover une passoire
            </a>{' '}
            détaille les calculs à faire avant de décider.
          </p>

          <h3>2. Rénover avant de vendre ou de louer</h3>
          <p>
            Rénover augmente la valeur de vente et débloque la possibilité de louer. C'est aussi la
            solution qui vous donne accès aux aides publiques les plus généreuses (voir ci-dessous).
            Une rénovation bien menée peut faire gagner deux classes DPE et augmenter le prix de
            vente de 10 à 20 % selon le marché local.
          </p>

          <h3>3. Conserver et habiter le bien</h3>
          <p>
            Si vous comptez occuper le logement, rénover devient un investissement personnel direct :
            vous réduisez vos factures d'énergie et améliorez votre confort. Dans ce cas, prendre le
            temps de monter un dossier d'aides complet est particulièrement rentable.
          </p>

          <h2>Comment accéder aux aides en tant qu'héritier ?</h2>
          <p>
            En tant que nouveau propriétaire, <strong>vous êtes éligible à toutes les aides
            nationales</strong> : MaPrimeRénov', primes CEE, éco-PTZ, TVA réduite à 5,5 %... à
            condition de remplir les critères habituels.
          </p>
          <p>
            Le point clé administratif : vous devez pouvoir justifier de votre propriété du bien
            avant de déposer tout dossier. L'<strong>attestation notariale</strong> (ou acte de
            notoriété) délivrée lors du règlement de la succession fait foi. Inutile d'attendre la
            publication définitive de l'acte de partage si vous êtes le seul héritier : l'attestation
            suffit pour MaPrimeRénov' et les CEE.
          </p>

          <h3>MaPrimeRénov' par geste</h3>
          <p>
            Elle finance des travaux ciblés — isolation, pompe à chaleur, VMC double flux, etc. —
            avec un taux d'aide calculé sur vos revenus. Pour les passoires F et G, elle reste
            accessible en 2026. Attention : le gouvernement a annoncé des changements pour 2027
            dans le cadre du budget en cours de vote. Engager les travaux avant le 31 décembre 2026
            peut sécuriser les conditions actuelles.{' '}
            <a href="/blog/maprimerenov-par-geste-apres-septembre-2026">
              Voir les règles MaPrimeRénov' par geste en vigueur
            </a>.
          </p>

          <h3>Primes CEE</h3>
          <p>
            Les{' '}
            <a href="/blog/cee-2026-prime-energie-comment-en-profiter">
              Certificats d'Économies d'Énergie
            </a>{' '}
            sont versés directement par les fournisseurs d'énergie, sans condition de revenus. Ils
            se cumulent avec MaPrimeRénov' et permettent de financer une part significative des
            travaux d'isolation, de chauffage ou de ventilation.
          </p>

          <h3>Éco-PTZ</h3>
          <p>
            Ce prêt à taux zéro finance jusqu'à 50 000 € de travaux sur 20 ans, sans condition de
            revenus. Il peut se cumuler avec MaPrimeRénov' et les CEE, et ne nécessite aucun
            remboursement d'intérêts. Il est accessible dès que vous êtes propriétaire du bien,
            résidence principale ou non.
          </p>

          <h2>Et si le bien est en indivision avec d'autres héritiers ?</h2>
          <p>
            Si vous héritez à plusieurs (fratrie, etc.), le bien est en <strong>indivision</strong>.
            Les travaux nécessitent en principe l'accord des co-indivisaires à la majorité des
            deux tiers pour les travaux d'amélioration (ou à l'unanimité pour certains cas). Les
            aides sont accessibles mais le dossier est un peu plus complexe à monter. Notre article
            dédié{' '}
            <a href="/blog/renovation-energetique-indivision-aides-2026">
              rénovation en indivision
            </a>{' '}
            détaille les démarches étape par étape.
          </p>

          <h2>Par où commencer concrètement ?</h2>
          <ol>
            <li>Obtenez l'attestation notariale ou l'acte de notoriété.</li>
            <li>Faites réaliser un nouveau DPE si l'ancien date d'avant 2026.</li>
            <li>
              Prenez rendez-vous chez un conseiller France Rénov' (gratuit) pour un premier état
              des lieux des aides auxquelles vous avez droit.
            </li>
            <li>
              Faites appel à un{' '}
              <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">
                Accompagnateur Rénov' agréé
              </a>{' '}
              pour monter le dossier complet si vous visez une rénovation d'ampleur.
            </li>
            <li>
              Lancez un{' '}
              <a href="/">simulateur en ligne</a> pour estimer votre prime avant de contacter
              des artisans RGE.
            </li>
          </ol>
          <p>
            Hériter d'une passoire thermique est souvent perçu comme une contrainte. C'est surtout
            une opportunité : avec les aides disponibles, le coût net d'une rénovation complète
            est aujourd'hui bien inférieur à la valeur qu'elle apporte — et les délais réglementaires
            donnent encore le temps d'agir sereinement.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre bien hérité, votre projet de rénovation</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, évalue votre logement, chiffre vos aides et
            coordonne les artisans RGE — de l'audit à la réception des travaux.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir la pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
