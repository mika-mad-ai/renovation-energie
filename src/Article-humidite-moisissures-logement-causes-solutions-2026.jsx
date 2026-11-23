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

const PUBLISHED = '2026-11-23';
const PATH = '/blog/humidite-moisissures-logement-causes-solutions-2026';

export default function ArticleHumiditeMoisissures2026() {
  useSeo({
    title: "Humidité et moisissures dans son logement : causes, risques et solutions durables en 2026 | RenoHab",
    description:
      "Condensation sur les vitres, taches noires au plafond, odeur de renfermé : comprendre les causes de l'humidité excessive, les risques pour la santé et comment y remédier durablement grâce à la rénovation énergétique.",
    path: PATH,
    image: '/blog/humidite-moisissures-logement-causes-solutions-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Humidité et moisissures dans son logement : causes, risques et solutions durables en 2026",
      description:
        "Condensation sur les vitres, taches noires au plafond, odeur de renfermé : comprendre les causes de l'humidité excessive, les risques pour la santé et comment y remédier durablement grâce à la rénovation énergétique.",
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
      about: ['Humidité logement', 'Moisissures maison', 'VMC', 'Isolation thermique', 'Rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 23 nov. 2026 · Confort & santé
          </p>

          <h1>Humidité et moisissures dans son logement : causes, risques et solutions durables en 2026</h1>

          <img
            src="/blog/humidite-moisissures-logement-causes-solutions-2026.jpg"
            alt="Condensation sur une fenêtre et traces de moisissures dans un logement mal isolé"
            className="w-full rounded-xl my-6"
            loading="lazy"
          />

          <p className="lead">
            Chaque hiver, des millions de foyers français se battent contre la condensation sur les
            vitres, les auréoles d'humidité sur les murs ou les taches noires derrière les meubles.
            Ce que l'on prend parfois pour un problème de « mauvaise habitude » (ne pas aérer assez)
            est souvent le symptôme d'un logement mal isolé et mal ventilé. Comprendre les causes
            permet de choisir la bonne solution — y compris parmi les travaux subventionnés.
          </p>

          <h2>Pourquoi l'humidité s'accumule dans un logement</h2>
          <p>
            L'air intérieur d'un logement contient naturellement de la vapeur d'eau produite par
            les occupants (respiration, cuisine, douches, linge séché en intérieur). Un foyer de
            quatre personnes génère en moyenne <strong>10 à 15 litres d'eau par jour</strong> sous
            forme de vapeur.
          </p>
          <p>
            Le problème survient lorsque cette vapeur rencontre une surface froide. Elle se
            condense alors en eau liquide : c'est le phénomène de <strong>point de rosée</strong>.
            Dans un logement bien isolé, les surfaces restent proches de la température ambiante
            et la condensation reste limitée. Dans une passoire thermique, les vitres single vitrage,
            les murs extérieurs peu isolés ou les angles de pièces (ponts thermiques) descendent
            bien en dessous de 10 °C en hiver — suffisant pour provoquer une condensation massive.
          </p>

          <h3>Les quatre grandes sources d'humidité</h3>
          <ul>
            <li><strong>La vapeur d'eau des occupants</strong> : cuisine, salle de bain, respiration, plantes.</li>
            <li><strong>Les infiltrations par la toiture ou les façades</strong> : étanchéité défaillante, gouttières bouchées, fissures.</li>
            <li><strong>Les remontées capillaires</strong> : eau du sol qui monte dans les murs par capillarité, fréquente dans les vieilles maisons sans barrière d'étanchéité.</li>
            <li><strong>L'absence de ventilation</strong> : sans renouvellement d'air, l'humidité s'accumule et ne peut pas s'évacuer.</li>
          </ul>

          <h2>Moisissures : un risque sanitaire réel</h2>
          <p>
            Les moisissures (Aspergillus, Penicillium, Cladosporium…) se développent dès que
            l'humidité relative dépasse <strong>70 % pendant plusieurs jours</strong> sur une
            surface poreuse. Elles libèrent des spores dans l'air qui peuvent provoquer :
          </p>
          <ul>
            <li>des irritations des voies respiratoires (toux, rhinite, bronchite chronique),</li>
            <li>des réactions allergiques (rhinite allergique, asthme),</li>
            <li>dans les cas graves, des infections pulmonaires chez les personnes immunodéprimées.</li>
          </ul>
          <p>
            L'Organisation mondiale de la santé (OMS) estime que <strong>10 à 50 % des logements
            européens</strong> présentent des conditions d'humidité propices aux moisissures. Les
            enfants, les personnes âgées et les asthmatiques sont les plus exposés. Un logement
            humide n'est donc pas seulement inconfortable : c'est un problème de santé publique.
          </p>

          <h2>Les solutions provisoires (et leurs limites)</h2>
          <p>
            Avant d'engager des travaux, quelques gestes d'hygiène peuvent limiter les dégâts :
          </p>
          <ul>
            <li>
              <strong>Aérer quotidiennement</strong> : ouvrir les fenêtres 5 à 10 minutes le matin
              (y compris en hiver) pour renouveler l'air et évacuer la vapeur d'eau. L'air froid
              extérieur contient en réalité moins d'humidité absolue que l'air intérieur chaud et saturé.
            </li>
            <li>
              <strong>Ne pas sécher le linge en intérieur</strong> sans ventilation supplémentaire :
              une lessive libère jusqu'à 2 litres de vapeur dans la pièce.
            </li>
            <li>
              <strong>Maintenir une température constante</strong> : les grandes variations de
              température entre la nuit et le jour favorisent la condensation.
            </li>
            <li>
              <strong>Traiter les moisissures visibles</strong> à la javel diluée ou au bicarbonate,
              puis nettoyer et sécher — mais sans corriger les causes, elles reviennent.
            </li>
          </ul>
          <p>
            Ces gestes réduisent les symptômes, mais ne règlent pas le problème structurel. Un
            déshumidificateur électrique consomme 300 à 700 W en continu pour extraire l'eau
            qui n'aurait pas dû entrer : c'est coûteux et inefficace sur le long terme.
          </p>

          <h2>La VMC : première ligne de défense durable</h2>
          <p>
            La <strong>ventilation mécanique contrôlée (VMC)</strong> renouvelle en permanence
            l'air intérieur, en évacuant la vapeur d'eau avant qu'elle n'atteigne le point de
            condensation. C'est la solution la plus efficace pour maintenir une humidité relative
            saine (40 à 60 %) sans perdre de chaleur.
          </p>
          <ul>
            <li>
              <strong>VMC simple flux hygroréglable (type A ou B)</strong> : module le débit
              d'extraction selon le taux d'humidité de chaque pièce. Coût posé : 1 000 à 2 500 €.
              Prime CEE (fiche BAR-TH-127) jusqu'à 300 € selon les revenus.
            </li>
            <li>
              <strong>VMC double flux</strong> : récupère la chaleur de l'air extrait pour
              préchauffer l'air entrant (rendement 70 à 90 %). Idéale pour les logements très
              bien isolés. Coût posé : 3 000 à 6 000 €. Prime CEE et, depuis janvier 2026,
              éligible à MaPrimeRénov' si couplée à un geste d'isolation.
            </li>
          </ul>
          <p>
            Pour en savoir plus sur les aides disponibles et choisir le bon système, consultez
            notre guide complet sur la{' '}
            <a href="/blog/vmc-double-flux-aides-2026">VMC double flux en 2026</a>.
          </p>

          <h2>L'isolation : éliminer la condensation à la source</h2>
          <p>
            Tant que les surfaces froides existent, la condensation continuera. Isoler les murs,
            la toiture et les planchers fait remonter la température de paroi et élimine les
            conditions propices à la condensation — et aux moisissures.
          </p>
          <p>
            En pratique, une maison classée <strong>F ou G au DPE</strong> présente souvent des
            températures de paroi inférieures à 10 °C en hiver. Après une rénovation atteignant
            la classe B ou C, ces températures remontent à 17-18 °C, et la condensation disparaît
            naturellement.
          </p>
          <p>
            Les travaux les plus efficaces contre l'humidité structurelle :
          </p>
          <ul>
            <li>
              <strong>Isolation des murs</strong> par l'extérieur (ITE) ou par l'intérieur (ITI) :
              supprime les ponts thermiques au niveau des murs, source majeure de condensation.
            </li>
            <li>
              <strong>Isolation des combles perdus ou aménagés</strong> : plafond froid = risque
              de moisissures en angles de plafond.
            </li>
            <li>
              <strong>Remplacement des fenêtres</strong> : un double vitrage moderne (Ug ≤ 1,1
              W/m²K) maintient la vitre au-dessus du point de rosée dans la quasi-totalité des cas.
            </li>
          </ul>

          <h2>Quelles aides pour financer ces travaux en 2026 ?</h2>
          <p>
            Depuis le 1er septembre 2026, MaPrimeRénov' par geste ne finance plus l'isolation
            seule. Mais plusieurs dispositifs restent accessibles :
          </p>
          <ul>
            <li>
              <strong>Prime CEE</strong> : sans conditions de revenus, pour la VMC hygroréglable,
              l'isolation des combles, des murs et du plancher bas.
            </li>
            <li>
              <strong>Éco-PTZ</strong> : jusqu'à 50 000 € sans intérêts pour financer un bouquet
              de travaux incluant isolation et ventilation.
            </li>
            <li>
              <strong>TVA à 5,5 %</strong> : applicable à tous les travaux de rénovation
              énergétique, sans condition de revenus ni plafond.
            </li>
            <li>
              <strong>MaPrimeRénov' rénovation d'ampleur</strong> : si votre logement gagne au
              moins 2 classes DPE, les taux d'aide atteignent 80 % du montant des travaux pour
              les ménages très modestes (plafond 70 000 € HT).
            </li>
          </ul>
          <p>
            Pour connaître vos droits précis, le{' '}
            <a href="/dpe-gratuit">simulateur DPE gratuit de RenoHab</a> vous donne une première
            estimation de votre classe actuelle et du gain possible après travaux.
          </p>

          <h2>Infiltrations et remontées capillaires : cas particuliers</h2>
          <p>
            Si l'humidité vient de l'extérieur (toiture qui fuit, fissures de façade, cave
            humide), les travaux d'isolation ne suffiront pas seuls. Il faut d'abord :
          </p>
          <ul>
            <li>réparer l'étanchéité de la toiture et des gouttières,</li>
            <li>traiter les fissures en façade (ragréage, hydrofuge),</li>
            <li>pour les remontées capillaires : injection de résine hydrofuge dans les murs
            (procédé éprouvé, coût 3 000 à 10 000 € selon la longueur des murs).</li>
          </ul>
          <p>
            Ces travaux ponctuels ne sont pas couverts par MaPrimeRénov', mais la TVA à 5,5 %
            s'applique dès lors qu'ils concernent des locaux d'habitation de plus de 2 ans.
          </p>

          <h2>Comment savoir si mon logement est concerné ?</h2>
          <p>
            Les premiers signes à surveiller en hiver :
          </p>
          <ul>
            <li>condensation systématique sur les vitrages le matin,</li>
            <li>taches grises ou noires dans les coins des pièces, derrière les meubles ou sur les plinthes,</li>
            <li>peinture qui cloque ou papier peint qui se décolle,</li>
            <li>odeur de renfermé persistante malgré le ménage,</li>
            <li>parquet ou plancher en bois qui gondole.</li>
          </ul>
          <p>
            Si plusieurs de ces signes sont présents, un diagnostic par{' '}
            <a href="/blog">un professionnel certifié RGE</a> s'impose avant tout traitement.
            Un audit énergétique (obligatoire pour vendre un logement F ou G) identifiera
            précisément les zones de déperdition et les surfaces à risque.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre logement souffre d'humidité ?</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab, Accompagnateur Rénov' agréé, évalue votre situation et monte votre dossier
            d'aides pour financer VMC et isolation en une seule démarche.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/dpe-gratuit" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Estimer mon DPE gratuitement
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir nos solutions chauffage
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
