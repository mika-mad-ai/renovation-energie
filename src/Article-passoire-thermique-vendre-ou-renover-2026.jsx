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

const PUBLISHED = '2026-09-05';
const PATH = '/blog/passoire-thermique-vendre-ou-renover-2026';

export default function ArticlePassoireThermique() {
  useSeo({
    title: "Passoire thermique : faut-il vendre ou rénover en 2026 ? | RenoHab",
    description:
      "Propriétaire d'un logement classé F ou G ? On compare les deux options — vendre avec décote ou rénover avec les aides 2026 — pour vous aider à décider.",
    path: PATH,
    image: '/blog/passoire-thermique-vendre-ou-renover-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: "Passoire thermique : faut-il vendre ou rénover en 2026 ?",
      description:
        "Propriétaire d'un logement classé F ou G ? On compare les deux options — vendre avec décote ou rénover avec les aides 2026 — pour vous aider à décider.",
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
      about: ['Passoire thermique', 'DPE', 'Rénovation énergétique', 'MaPrimeRénov', 'Vente immobilière'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 5 septembre 2026 · Stratégie patrimoniale
          </p>

          <h1>Passoire thermique : faut-il vendre ou rénover en 2026 ?</h1>

          <img
            src="/blog/passoire-thermique-vendre-ou-renover-2026.jpg"
            alt="Maison classée passoire thermique F ou G : vendre ou rénover en 2026 ?"
            className="w-full rounded-xl object-cover mb-8"
            style={{ maxHeight: '420px' }}
          />

          <p className="lead">
            Votre logement est classé F ou G au DPE. Vous êtes bailleur et vous ne pouvez plus le louer,
            ou vous le revendez bientôt et vous redoutez la décote. La question s'impose : mieux vaut-il
            vendre maintenant, ou investir dans une rénovation énergétique pour récupérer de la valeur ?
            Voici les éléments de réponse concrets pour trancher en 2026.
          </p>

          <h2>Ce que signifie concrètement posséder une passoire thermique en 2026</h2>
          <p>
            Depuis le <strong>1er janvier 2025</strong>, les logements classés <strong>G</strong> sont
            interdits à la mise en location pour les nouveaux baux. Les logements <strong>F</strong>
            suivront en <strong>2028</strong>, les <strong>E</strong> en <strong>2034</strong>. Pour
            un propriétaire bailleur, l'inaction n'est donc plus une option : un bien G loué aujourd'hui
            expose à des poursuites, et un bien F devra être rénové dans moins de deux ans pour rester
            sur le marché locatif.
          </p>
          <p>
            Pour un propriétaire occupant, l'enjeu est différent mais réel : les études de notaires
            montrent une <strong>décote moyenne de 15 à 25 %</strong> sur la valeur de vente d'une
            passoire thermique par rapport à un bien équivalent bien classé. Un appartement
            estimé à 200 000 € en classe C pourrait ainsi se négocier à 155 000–170 000 € s'il
            est classé F, soit entre 30 000 et 45 000 € perdus.
          </p>
          <p>
            Bonne nouvelle pour certains : le nouveau mode de calcul du DPE entré en vigueur
            le <strong>1er janvier 2026</strong> a reclassé plusieurs centaines de milliers de
            logements chauffés à l'électricité (le coefficient de conversion de l'électricité est
            passé de 2,3 à 1,9). Si votre DPE date d'avant cette réforme, il vaut la peine de
            le <a href="/dpe-gratuit">vérifier gratuitement</a> : vous êtes peut-être
            déjà sorti de la catégorie passoire sans le savoir.
          </p>

          <h2>Option 1 : vendre en l'état — avantages et risques</h2>
          <p>
            Vendre rapidement présente un avantage évident : vous vous débarrassez des contraintes
            réglementaires et évitez l'avance de trésorerie que nécessite une rénovation. C'est
            une option pertinente si :
          </p>
          <ul>
            <li>Vous n'avez pas la capacité financière d'avancer le coût des travaux, même partiellement.</li>
            <li>Votre horizon de détention est court et la revalorisation post-travaux ne sera pas encaissée.</li>
            <li>Le bien présente d'autres défauts structurels qui rendraient la rénovation peu rentable.</li>
          </ul>
          <p>
            Les inconvénients sont néanmoins sérieux. Un acheteur averti — et ils le sont de plus en plus —
            négociera agressivement en s'appuyant sur le DPE. Sur un marché tendu, la décote peut
            être limitée, mais dans des zones moins attractives, elle peut dépasser 25 %. De plus,
            vendre une passoire impose une obligation d'information renforcée (audit énergétique
            obligatoire pour les classes F et G depuis avril 2023) et peut allonger les délais de vente.
          </p>

          <h2>Option 2 : rénover avant de vendre ou louer — un calcul qui s'améliore avec les aides 2026</h2>
          <p>
            La rénovation est rarement aussi coûteuse qu'on le croit une fois les aides déduites.
            En 2026, un propriétaire qui engage une <strong>rénovation d'ampleur</strong> (saut
            d'au moins deux classes DPE) peut bénéficier de :
          </p>
          <ul>
            <li>
              <strong>MaPrimeRénov' rénovation d'ampleur :</strong> jusqu'à 40 000 € de subvention
              pour un saut de trois classes ou plus, avec des taux variant selon les revenus du ménage.
            </li>
            <li>
              <strong>Certificats d'économies d'énergie (CEE) :</strong> prime complémentaire versée
              par les fournisseurs d'énergie, cumulable avec MaPrimeRénov'.
            </li>
            <li>
              <strong>Éco-PTZ :</strong> <a href="/simulateur">prêt à taux zéro</a> jusqu'à 50 000 €
              pour financer la partie non couverte par les subventions.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> sur les travaux de rénovation énergétique (contre 20 % en
              neuf), qui réduit mécaniquement le coût total.
            </li>
          </ul>
          <p>
            Attention : depuis le <strong>1er septembre 2026</strong>, certains travaux isolés
            (isolation des combles, VMC, chauffe-eau thermodynamique seuls) ne sont plus éligibles
            au parcours par geste de MaPrimeRénov'. Seul le <strong>parcours rénovation d'ampleur</strong>
            reste pleinement subventionné pour ces postes lorsqu'ils font partie d'un bouquet global.
            Bien monter son dossier est donc plus crucial que jamais.
          </p>

          <h2>Exemple chiffré : un pavillon classé G dans une ville moyenne</h2>
          <p>
            Prenons un cas concret : une maison individuelle de 100 m² classée G, estimée à
            180 000 € en l'état (contre 230 000 € en classe C selon les notaires locaux).
          </p>
          <ul>
            <li>Coût d'un bouquet de travaux complet (isolation combles + PAC air/eau + VMC) : environ 35 000 €</li>
            <li>Subvention MaPrimeRénov' pour un ménage intermédiaire (saut G→C) : environ 20 000 €</li>
            <li>Prime CEE estimée : 3 000 à 5 000 €</li>
            <li>Reste à charge : environ 10 000–12 000 €, finançable via Éco-PTZ</li>
            <li>Plus-value potentielle après travaux : +40 000 à +50 000 € sur la valeur de revente</li>
          </ul>
          <p>
            Dans ce scénario, pour un reste à charge de 10 000 à 12 000 €, le propriétaire
            peut récupérer 40 000 € ou plus à la vente — soit un retour sur investissement de
            3 à 4 fois le reste à charge. Sans compter les économies de charges si le bien
            est occupé entre-temps, ou la possibilité de le louer légalement.
          </p>
          <p>
            <em>Ces chiffres sont indicatifs et varient selon la zone géographique, les revenus du
            foyer et le type de travaux. Un audit personnalisé est indispensable pour établir
            un plan précis.</em>
          </p>

          <h2>La question du bon timing : faut-il attendre ?</h2>
          <p>
            Attendre présente des risques croissants. Pour les bailleurs avec un bien G, chaque
            mois sans locataire représente une perte de revenus sèche. Pour les propriétaires
            occupants, les coûts de chauffage d'une passoire sont significativement plus élevés :
            une maison G consomme souvent 2 à 3 fois plus d'énergie qu'un logement B ou C.
          </p>
          <p>
            Du côté des aides, le calendrier n'est pas favorable à l'attentisme : les règles
            changent régulièrement, et les fermetures de guichets ou les resserrements des
            conditions d'éligibilité ont été fréquents ces dernières années. Les conditions
            actuelles restent favorables — profiter de la fenêtre 2026 est cohérent.
          </p>

          <h2>Comment décider ? La démarche recommandée</h2>
          <ol>
            <li>
              <strong>Vérifiez d'abord votre DPE actuel.</strong> S'il date d'avant janvier 2026,
              la reclassification peut changer le diagnostic — et le niveau d'urgence.{' '}
              <a href="/dpe-gratuit">Obtenez une estimation gratuite en ligne.</a>
            </li>
            <li>
              <strong>Faites réaliser un audit énergétique.</strong> Obligatoire à la vente pour
              les F et G, il est aussi la base du plan de travaux pour accéder à MaPrimeRénov'
              rénovation d'ampleur.
            </li>
            <li>
              <strong>Simulez les aides auxquelles vous avez droit.</strong> Le niveau de subvention
              dépend de vos revenus — un ménage très modeste peut voir la quasi-totalité des travaux
              financée.{' '}
              <a href="/#simulator">Utilisez notre simulateur d'aides.</a>
            </li>
            <li>
              <strong>Comparez le reste à charge à la décote de vente.</strong> Si la décote dépasse
              le reste à charge, rénover est presque toujours la décision la plus rationnelle.
            </li>
          </ol>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab vous accompagne à chaque étape : audit,
            montage du dossier de financement, coordination des artisans RGE et suivi du chantier.
            Nous prenons en charge la complexité administrative pour que vous puissiez vous concentrer
            sur la décision stratégique — pas sur les formulaires.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Passoire thermique : parlons de votre situation</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Audit, plan de travaux, aides 2026 : RenoHab vous aide à choisir la meilleure option pour votre bien.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir les aides chauffage
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
