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

const PUBLISHED = '2026-09-15';
const PATH = '/blog/plancher-chauffant-pac-basse-temperature-2026';

export default function ArticlePlancherChauffantPac2026() {
  useSeo({
    title: "Plancher chauffant basse température et pompe à chaleur : le duo gagnant en 2026 | RenoHab",
    description:
      "Associer un plancher chauffant basse température à une pompe à chaleur air/eau maximise le confort et le COP. Découvrez le fonctionnement, les coûts et les aides disponibles en 2026.",
    path: PATH,
    image: '/blog/plancher-chauffant-pac-basse-temperature-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Plancher chauffant basse température et pompe à chaleur : le duo gagnant en 2026",
      description:
        "Associer un plancher chauffant basse température à une pompe à chaleur air/eau maximise le confort et le COP. Découvrez le fonctionnement, les coûts et les aides disponibles en 2026.",
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
      about: ['Plancher chauffant', 'Pompe à chaleur', 'Rénovation énergétique', 'Aides 2026'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 15 septembre 2026 · Chauffage & confort
          </p>

          <h1>Plancher chauffant basse température et pompe à chaleur : le duo gagnant en 2026</h1>

          <img
            src="/blog/plancher-chauffant-pac-basse-temperature-2026.jpg"
            alt="Plancher chauffant basse température dans une maison rénovée avec pompe à chaleur"
            className="w-full rounded-xl mb-8 object-cover"
            style={{ maxHeight: '420px' }}
            loading="lazy"
          />

          <p className="lead">
            Associer une <strong>pompe à chaleur air/eau</strong> à un <strong>plancher chauffant
            basse température</strong> (PCB) est l'une des combinaisons les plus efficaces pour
            chauffer un logement en 2026. Ce binôme tire le meilleur des deux technologies :
            la production de chaleur sobre de la PAC et la diffusion douce et homogène du plancher.
            Tour d'horizon du fonctionnement, des coûts et des aides auxquelles vous pouvez
            prétendre.
          </p>

          <h2>Pourquoi plancher chauffant et PAC sont faits pour aller ensemble</h2>
          <p>
            Une pompe à chaleur produit de l'énergie de chauffage avec un rendement (COP) qui
            dépend directement de la <strong>température de départ du circuit</strong> : plus celle-ci
            est basse, meilleure est l'efficacité. Or le plancher chauffant basse température
            fonctionne justement entre <strong>30 et 40 °C</strong> (fluide à 50 °C maximum), là où
            un radiateur classique exige 60 à 80 °C. Résultat : une PAC couplée à un PCB atteint un
            COP saisonnier (SCOP) bien supérieur à celui d'une PAC alimentant des radiateurs haute
            température, ce qui se traduit directement sur la facture d'électricité.
          </p>
          <p>
            Côté confort, le plancher chauffant diffuse une chaleur rayonnante sur toute la surface
            du sol, sans courant d'air ni point froid. La température ressentie est homogène de
            pièce en pièce, et l'inertie du plancher limite les variations brutales de température.
          </p>

          <h2>Comment fonctionne un plancher chauffant hydraulique ?</h2>
          <p>
            Le plancher chauffant hydraulique (ou « plancher chauffant eau ») est constitué d'un
            réseau de tubes en polyéthylène réticulé (PER) noyés dans une chape de béton ou de
            mortier. L'eau chauffée par la PAC y circule en boucles, cédant sa chaleur lentement
            à la dalle.
          </p>
          <ul>
            <li>
              <strong>Température de départ :</strong> 30–35 °C en régime courant, ajustée selon
              la température extérieure par une loi d'eau programmée dans la PAC.
            </li>
            <li>
              <strong>Régulation zone par zone :</strong> des vannes thermostatiques permettent de
              chauffer séparément le séjour, les chambres et la salle de bains.
            </li>
            <li>
              <strong>Inertie thermique :</strong> la dalle stocke de la chaleur et la restitue
              progressivement — idéal pour piloter la PAC sur les heures creuses.
            </li>
          </ul>
          <p>
            Il existe aussi le plancher chauffant électrique (câbles ou films chauffants), mais
            son association avec une PAC est moins pertinente car les deux circuits restent
            indépendants. Le <strong>plancher hydraulique est le choix optimal</strong> quand on
            installe ou remplace une PAC air/eau.
          </p>

          <h2>Peut-on installer un plancher chauffant dans une maison ancienne ?</h2>
          <p>
            Oui, sous conditions. Dans une rénovation, deux solutions existent :
          </p>
          <ul>
            <li>
              <strong>La chape humide traditionnelle (8–10 cm)</strong> : plus économique mais
              implique de renoncer au revêtement de sol existant et d'accepter une légère surélévation.
            </li>
            <li>
              <strong>La chape sèche ou le plancher chauffant « mince »</strong> : épaisseur de
              3 à 5 cm, compatible avec des contraintes de hauteur sous plafond limitées. Plus
              rapide à poser mais légèrement moins performant thermiquement.
            </li>
          </ul>
          <p>
            Dans les deux cas, une <strong>isolation sous la dalle</strong> (polystyrène expansé
            ou laine minérale) est indispensable pour éviter les pertes thermiques vers le sol.
            Ce poste d'isolation du plancher bas est par ailleurs éligible aux aides — retrouvez
            le détail dans notre guide sur l'
            <a href="/blog/isolation-plancher-bas-vide-sanitaire-2026">isolation du plancher bas</a>.
          </p>

          <h2>Les aides disponibles en 2026 pour financer l'installation</h2>
          <p>
            La PAC air/eau associée à un plancher chauffant hydraulique ouvre droit à un
            <strong> cumul d'aides</strong> significatif :
          </p>

          <h3>MaPrimeRénov' par geste</h3>
          <p>
            La pompe à chaleur air/eau reste éligible à <strong>MaPrimeRénov' par geste</strong> en
            2026. Le montant varie selon vos revenus :
          </p>
          <ul>
            <li>Ménages aux revenus <em>très modestes</em> : jusqu'à <strong>5 000 €</strong></li>
            <li>Ménages aux revenus <em>modestes</em> : jusqu'à <strong>4 000 €</strong></li>
            <li>Ménages aux revenus <em>intermédiaires</em> : jusqu'à <strong>3 000 €</strong></li>
            <li>Ménages aux revenus <em>supérieurs</em> : jusqu'à <strong>1 000 €</strong></li>
          </ul>
          <p>
            La demande s'effectue en ligne sur <strong>France Rénov'</strong> avant le début des
            travaux. Votre logement doit avoir plus de 15 ans et être votre résidence principale.
            Un artisan <a href="/blog/choisir-artisan-rge-2026">RGE (Reconnu Garant de l'Environnement)</a>
            est obligatoire.
          </p>

          <h3>Prime CEE (Certificats d'Économies d'Énergie)</h3>
          <p>
            Depuis le <strong>1er septembre 2026</strong>, les primes CEE pour les équipements de
            chauffage sont accessibles uniquement aux logements classés <strong>E, F ou G</strong>
            avant travaux. Si votre logement entre dans cette catégorie, la prime CEE peut
            représenter plusieurs centaines à quelques milliers d'euros supplémentaires, cumulables
            avec MaPrimeRénov'. Utilisez notre{' '}
            <a href="/#simulator">simulateur d'aides</a> pour estimer votre prime en quelques
            secondes.
          </p>

          <h3>Éco-PTZ (prêt à taux zéro)</h3>
          <p>
            L'éco-PTZ permet de financer jusqu'à <strong>50 000 €</strong> de travaux sans intérêt,
            remboursable sur 20 ans. Il est cumulable avec MaPrimeRénov' et ne nécessite pas de
            justifier de ressources. Il couvre aussi bien la PAC que le plancher chauffant et
            l'isolation associée — un atout majeur pour les chantiers d'ampleur.
          </p>

          <h3>TVA à 5,5 %</h3>
          <p>
            Tous les travaux de rénovation énergétique dans un logement de plus de 2 ans bénéficient
            de la <strong>TVA réduite à 5,5 %</strong>, sans condition de revenus. Sur un chantier
            de 20 000 €, c'est environ 2 600 € d'économie par rapport au taux normal de 20 %.
          </p>

          <h2>Quel budget prévoir pour l'ensemble du système ?</h2>
          <p>
            Le coût total dépend de la surface à chauffer, du type de PAC retenu et des travaux
            de génie civil nécessaires. À titre indicatif :
          </p>
          <ul>
            <li>
              <strong>PAC air/eau seule :</strong> 8 000 à 15 000 € fournie et posée (hors aide)
              pour une maison de 100 m².
            </li>
            <li>
              <strong>Plancher chauffant hydraulique :</strong> 50 à 100 €/m² selon la solution
              choisie (chape humide ou sèche), soit 5 000 à 10 000 € pour 100 m².
            </li>
            <li>
              <strong>Reste à charge estimé après aides :</strong> pour un ménage aux revenus
              modestes avec un logement classé F, le reste à charge peut descendre à
              <strong> 40–50 % du montant total</strong> en cumulant MaPrimeRénov', CEE et
              TVA réduite.
            </li>
          </ul>

          <h2>Les conditions techniques à respecter (fiche BAR-TH-171)</h2>
          <p>
            Pour être éligible aux aides, l'installation doit respecter la fiche d'opération
            standardisée <strong>BAR-TH-171</strong> des CEE, qui impose notamment :
          </p>
          <ul>
            <li>
              Une efficacité énergétique saisonnière (ETAS) d'au moins <strong>126 %</strong>
              lorsque la PAC est couplée à un plancher chauffant ou à des ventilo-convecteurs.
            </li>
            <li>
              La pose par un professionnel <strong>RGE</strong> qualifié sur la catégorie
              « Pompes à chaleur ».
            </li>
            <li>
              Un bilan thermique préalable du logement, souvent réalisé par l'installateur
              pour dimensionner correctement la PAC.
            </li>
          </ul>
          <p>
            Depuis le 1er septembre 2026, les PAC doivent également figurer sur la <strong>liste
            des équipements agréés ADEME</strong> pour ouvrir droit à la prime CEE bonifiée. Vérifiez
            le modèle que vous envisagez avant de signer votre devis.
          </p>

          <h2>Par où commencer ?</h2>
          <p>
            La démarche idéale commence par un <strong>bilan thermique</strong> et un
            <a href="/dpe-gratuit"> diagnostic de performance énergétique</a> pour connaître la
            classe actuelle de votre logement et identifier les gains attendus. En tant qu'
            <strong>Accompagnateur Rénov' agréé</strong>, RenoHab peut vous aider à coordonner les
            artisans RGE, monter vos dossiers d'aides et suivre le chantier de A à Z.
          </p>
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Estimez vos aides pour une PAC + plancher chauffant</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            Simulez votre financement en 2 minutes et découvrez votre reste à charge réel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#simulator" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all">
              Simuler mes aides
            </a>
            <a href="/pompe-a-chaleur" className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all">
              Découvrir nos PAC
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
