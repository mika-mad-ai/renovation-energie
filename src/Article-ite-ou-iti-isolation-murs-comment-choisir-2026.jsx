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

const PUBLISHED = '2026-10-15';
const PATH = '/blog/ite-ou-iti-isolation-murs-comment-choisir-2026';

export default function ArticleIteOuIti2026() {
  useSeo({
    title: "ITE ou ITI : comment choisir l'isolation de vos murs en 2026 ? | RenoHab",
    description:
      "Extérieure (ITE) ou intérieure (ITI) ? Comparatif complet des deux techniques d'isolation des murs, des coûts, des aides disponibles (CEE, éco-PTZ, TVA 5,5 %) et des critères pour décider.",
    path: PATH,
    image: '/blog/ite-ou-iti-isolation-murs-comment-choisir-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "ITE ou ITI : comment choisir l'isolation de vos murs en 2026 ?",
      description:
        "Comparatif ITE vs ITI : avantages, inconvénients, coûts 2026 et aides disponibles (CEE, MaPrimeRénov' parcours accompagné, éco-PTZ, TVA 5,5 %) pour bien choisir la méthode d'isolation des murs.",
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
      about: ['Isolation thermique extérieure ITE', 'Isolation thermique intérieure ITI', 'Rénovation énergétique', 'CEE 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 15 octobre 2026 · Isolation &amp; travaux
          </p>

          <h1>ITE ou ITI : comment choisir l'isolation de vos murs en 2026 ?</h1>

          <img
            src="/blog/ite-ou-iti-isolation-murs-comment-choisir-2026.jpg"
            alt="Chantier d'isolation de façade — ITE ou ITI, comment choisir en 2026"
            className="rounded-xl w-full object-cover max-h-72 mb-6"
            loading="eager"
          />

          <p className="lead">
            Isoler ses murs, c'est réduire jusqu'à 25 % de ses déperditions de chaleur — et gagner
            une ou deux classes DPE. Mais face à deux grandes techniques — l'isolation par
            l'extérieur (ITE) et l'isolation par l'intérieur (ITI) — le choix n'est pas toujours
            évident. En 2026, les règles d'aides ont également changé : MaPrimeRénov' ne finance
            plus l'isolation des murs hors rénovation d'ampleur. Voici comment trancher.
          </p>

          <div className="not-prose my-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-relaxed text-emerald-900">
            <strong>🔑 À retenir pour 2026</strong>
            <p className="mt-2 mb-0">Depuis le 1er septembre 2026 (décret n° 2026-822), l'isolation des murs n'est plus finançable par MaPrimeRénov' « par geste ». Elle reste éligible dans le cadre d'une <strong>rénovation d'ampleur</strong> (MaPrimeRénov' parcours accompagné), ainsi qu'aux <strong>primes CEE</strong>, à l'<strong>éco-PTZ</strong> et à la <strong>TVA à 5,5 %</strong> — quelle que soit la méthode choisie, ITE ou ITI.</p>
          </div>

          <h2>L'isolation par l'extérieur (ITE) : le choix de la performance globale</h2>

          <p>
            L'ITE consiste à poser un isolant (laine minérale, polystyrène expansé ou fibre de bois)
            directement sur la façade, puis à la recouvrir d'un enduit ou d'un bardage. La maison
            est ainsi enveloppée dans un « manteau » thermique continu.
          </p>

          <h3>Les avantages de l'ITE</h3>
          <ul>
            <li>
              <strong>Traitement des ponts thermiques</strong> : en recouvrant en continu les murs et
              les planchers intermédiaires, l'ITE supprime les ponts thermiques — une source majeure
              de déperditions que l'ITI ne peut pas corriger.
            </li>
            <li>
              <strong>Aucune perte de surface habitable</strong> : l'isolant est posé à l'extérieur ;
              la surface intérieure reste intacte.
            </li>
            <li>
              <strong>Rénovation de façade combinée</strong> : le chantier est aussi l'occasion de
              refaire l'enduit ou le bardage, ce qui améliore l'aspect du bâtiment.
            </li>
            <li>
              <strong>Meilleure inertie thermique</strong> : la masse thermique des murs est conservée
              côté intérieur, ce qui stabilise la température en hiver comme en été.
            </li>
          </ul>

          <h3>Les contraintes de l'ITE</h3>
          <ul>
            <li>
              <strong>Coût plus élevé</strong> : comptez en moyenne <strong>100 à 250 € TTC/m²</strong> de
              façade isolée, pose incluse, selon l'isolant et le type de finition (enduit ou bardage).
            </li>
            <li>
              <strong>Autorisations administratives</strong> : une déclaration préalable de travaux est
              souvent requise. En secteur sauvegardé (Bâtiments de France), l'ITE peut être refusée
              pour des raisons architecturales.
            </li>
            <li>
              <strong>Accord de copropriété nécessaire</strong> : en appartement, modifier la façade
              (partie commune) exige un vote en assemblée générale.
            </li>
          </ul>

          <h2>L'isolation par l'intérieur (ITI) : l'option accessible et flexible</h2>

          <p>
            L'ITI consiste à fixer un isolant (laine de verre, laine de roche, ouate de cellulose…)
            contre la face intérieure des murs, généralement derrière un doublage en plaque de plâtre.
            C'est la technique la plus courante en rénovation.
          </p>

          <h3>Les avantages de l'ITI</h3>
          <ul>
            <li>
              <strong>Coût accessible</strong> : entre <strong>20 et 80 € TTC/m²</strong> selon le
              type d'isolant et l'épaisseur, avec des prix en forte baisse pour les matériaux en vrac
              soufflés.
            </li>
            <li>
              <strong>Réalisable en copropriété sans vote</strong> : comme les travaux se déroulent
              dans les parties privatives, aucun accord de l'assemblée générale n'est requis.
            </li>
            <li>
              <strong>Aucun impact sur l'aspect extérieur</strong> : idéale pour les façades classées
              ou les immeubles haussmanniens dont on ne peut pas modifier l'apparence.
            </li>
            <li>
              <strong>Réalisable pièce par pièce</strong> : on peut isoler progressivement, lors d'une
              rénovation intérieure ou en vidant les pièces les unes après les autres.
            </li>
          </ul>

          <h3>Les limites à connaître</h3>
          <ul>
            <li>
              <strong>Perte de surface habitable</strong> : un doublage de 10 cm retire environ
              0,8 m² par mètre linéaire de mur. Dans un appartement de 40 m², cela peut représenter
              plusieurs mètres carrés.
            </li>
            <li>
              <strong>Ponts thermiques non traités</strong> : les liaisons entre les planchers et les
              murs restent des points faibles — à compenser par un soin particulier aux jonctions.
            </li>
            <li>
              <strong>Risque de condensation</strong> : un pare-vapeur mal posé peut provoquer de
              l'humidité dans le mur. Le choix de l'isolant et la mise en œuvre par un artisan RGE
              sont déterminants.
            </li>
          </ul>

          <h2>ITE ou ITI : les critères décisifs pour faire le bon choix</h2>

          <p>
            Dans la pratique, plusieurs facteurs orientent la décision :
          </p>

          <ul>
            <li>
              <strong>Maison individuelle + façade à rénover</strong> → l'ITE est presque toujours
              plus rentable sur le long terme. Elle supprime les ponts thermiques et améliore davantage
              le DPE.
            </li>
            <li>
              <strong>Appartement en copropriété sans vote d'assemblée</strong> → l'ITI est la seule
              option praticable rapidement sur les murs donnant vers l'extérieur.
            </li>
            <li>
              <strong>Budget limité ou travaux par phases</strong> → l'ITI permet d'avancer pièce par
              pièce avec un investissement initial moindre.
            </li>
            <li>
              <strong>Logement classé F ou G, rénovation d'ampleur prévue</strong> → l'ITE s'intègre
              naturellement dans un parcours accompagné pour décrocher MaPrimeRénov'.
            </li>
            <li>
              <strong>Façade classée ou secteur protégé</strong> → l'ITI est souvent la seule
              solution autorisée.
            </li>
          </ul>

          <h2>Les aides disponibles en 2026 pour l'isolation des murs</h2>

          <h3>Prime CEE : l'aide accessible à tous, sans condition de revenus</h3>
          <p>
            Les Certificats d'Économies d'Énergie (CEE) restent la principale aide mobilisable
            pour l'isolation des murs en 2026, qu'il s'agisse d'ITE ou d'ITI. Aucune condition de
            ressources n'est exigée — seul l'artisan RGE est obligatoire. Les montants varient selon
            les fournisseurs d'énergie délégataires : comptez en moyenne <strong>7 à 12 € /m²</strong>,
            avec des pics à <strong>40 €/m²</strong> chez certains acteurs proposant un CEE Coup de
            pouce. Obtenez plusieurs devis pour comparer les primes proposées.
          </p>

          <h3>MaPrimeRénov' : uniquement dans le parcours accompagné</h3>
          <p>
            Depuis septembre 2026, l'isolation des murs ne donne plus droit à une prime MaPrimeRénov'
            isolée. Pour en bénéficier, les travaux doivent s'inscrire dans une{' '}
            <strong>rénovation d'ampleur</strong> : logement classé E, F ou G, gain d'au moins deux
            classes DPE, audit énergétique préalable, et accompagnement par un{' '}
            <a href="/pompe-a-chaleur">Accompagnateur Rénov' agréé</a> comme RenoHab. Dans ce cadre,
            la prime peut couvrir jusqu'à <strong>70 % du coût total des travaux</strong> (80 % pour
            les ménages très modestes), sur un plafond de dépenses de 70 000 € HT.
          </p>

          <h3>Éco-PTZ et TVA à 5,5 %</h3>
          <p>
            L'<a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">éco-Prêt à Taux Zéro</a> permet
            de financer jusqu'à 50 000 € de travaux sans intérêts, remboursables sur 20 ans. Il est
            cumulable avec les CEE et avec MaPrimeRénov'. Par ailleurs, la TVA est réduite à{' '}
            <strong>5,5 %</strong> sur la fourniture et la pose des isolants pour tout logement de
            plus de deux ans — ce qui représente une économie directe de 14,5 points par rapport au
            taux normal.
          </p>

          <h2>Règle d'or : isoler et ventiler de pair</h2>
          <p>
            Quelle que soit la technique retenue, une meilleure isolation rend le logement plus
            hermétique. Si la ventilation n'est pas adaptée, l'air vicie et l'humidité s'accumule
            dans les murs. Avant ou en même temps que les travaux d'isolation, vérifiez l'état de
            votre <a href="/blog">ventilation</a> et envisagez l'installation d'une{' '}
            <strong>VMC double flux ou hygroréglable</strong> pour maintenir une qualité d'air
            optimale.
          </p>

          <h2>Récapitulatif rapide : ITE vs ITI</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-soft">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-4 py-3 text-left">Critère</th>
                  <th className="px-4 py-3 text-left">ITE</th>
                  <th className="px-4 py-3 text-left">ITI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Coût indicatif (TTC/m²)</td>
                  <td className="px-4 py-3">100 – 250 €</td>
                  <td className="px-4 py-3">20 – 80 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Perte de surface intérieure</td>
                  <td className="px-4 py-3">Aucune</td>
                  <td className="px-4 py-3">~10 cm par mur</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Traitement des ponts thermiques</td>
                  <td className="px-4 py-3">Complet</td>
                  <td className="px-4 py-3">Partiel</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Façade classée ou copropriété</td>
                  <td className="px-4 py-3">Souvent impossible</td>
                  <td className="px-4 py-3">Toujours possible</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Aide CEE</td>
                  <td className="px-4 py-3">Oui</td>
                  <td className="px-4 py-3">Oui</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">MaPrimeRénov' (2026)</td>
                  <td className="px-4 py-3">Parcours accompagné uniquement</td>
                  <td className="px-4 py-3">Parcours accompagné uniquement</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Besoin d'aide pour décider ? Un <a href="/dpe-gratuit">diagnostic DPE</a> vous permettra
            de mesurer le gain réel attendu et d'orienter votre choix vers la solution la plus
            rentable selon votre logement. En tant qu'Accompagnateur Rénov' agréé, RenoHab monte
            également votre dossier MaPrimeRénov' et coordonne les artisans RGE pour un chantier
            maîtrisé de bout en bout.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Trouvez la meilleure isolation pour votre logement</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit énergétique, plan de travaux, montage des aides CEE et MaPrimeRénov' : RenoHab vous accompagne de A à Z.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE
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
