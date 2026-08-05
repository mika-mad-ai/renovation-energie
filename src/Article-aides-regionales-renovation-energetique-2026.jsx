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

const PUBLISHED = '2026-08-05';
const PATH = '/blog/aides-regionales-renovation-energetique-2026';

export default function ArticleAidesRegionalesRenovation2026() {
  useSeo({
    title: "Aides régionales rénovation énergétique 2026 : les primes méconnues à cumuler avec MaPrimeRénov' | RenoHab",
    description:
      "En plus de MaPrimeRénov', vos travaux peuvent bénéficier de subventions régionales, départementales et communales. Guide complet 2026 des aides locales et comment les cumuler pour financer jusqu'à 100 % de votre rénovation.",
    path: PATH,
    image: '/blog/aides-regionales-renovation-energetique-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Aides régionales pour la rénovation énergétique en 2026 : le guide complet du cumul",
      description:
        "En plus de MaPrimeRénov', vos travaux peuvent bénéficier de subventions régionales, départementales et communales. Guide complet 2026 des aides locales et comment les cumuler.",
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
      about: ['Rénovation énergétique', 'Aides régionales', 'MaPrimeRénov', 'Financement travaux'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 5 août 2026 · Aides &amp; financement
          </p>

          <h1>Aides régionales pour la rénovation énergétique en 2026 : le guide complet du cumul</h1>

          <img
            src="/blog/aides-regionales-renovation-energetique-2026.jpg"
            alt="Façade d'une maison rénovée avec isolation par l'extérieur"
            className="w-full rounded-xl my-6 object-cover max-h-80"
            loading="eager"
          />

          <p className="lead">
            MaPrimeRénov', Éco-PTZ, CEE, TVA à 5,5 %… les aides nationales sont bien connues.
            Mais saviez-vous que votre région, votre département, voire votre commune peuvent
            abonder vos travaux avec des subventions supplémentaires souvent méconnues ? En 2026,
            bien cumuler ces aides locales peut faire basculer un projet hors de portée en un
            chantier totalement finançable.
          </p>

          <h2>Pourquoi les aides régionales restent-elles dans l'ombre ?</h2>
          <p>
            Les dispositifs nationaux bénéficient d'importants budgets de communication. À l'inverse,
            les aides régionales sont gérées par des dizaines d'acteurs différents (conseils régionaux,
            départements, EPCI, communes) et varient fortement d'un territoire à l'autre. Résultat :
            beaucoup de propriétaires passent à côté de centaines, voire de milliers d'euros de
            financement.
          </p>
          <p>
            Pourtant, ces aides sont cumulables avec les dispositifs nationaux, dans la limite d'un
            plafond global : <strong>90 % du montant TTC des travaux</strong> pour les ménages très
            modestes, et <strong>75 %</strong> pour les autres catégories de revenus. Au-delà de ces
            seuils, toute aide supplémentaire est déduite des montants perçus, mais le reste à charge
            net peut ainsi s'approcher de zéro pour les foyers éligibles.
          </p>

          <h2>Panorama des aides régionales phares en 2026</h2>

          <h3>Hauts-de-France : jusqu'à 2 000 € via le Chèque Éco Logis</h3>
          <p>
            La région Hauts-de-France a déployé le <strong>Chèque Éco Logis</strong>, ciblant en
            priorité l'isolation thermique par l'extérieur (ITE). Dans les départements de l'Aisne
            et de l'Oise, un <strong>éco-chèque logement durable pouvant atteindre 2 000 €</strong>{' '}
            est accessible aux propriétaires réalisant des travaux d'isolation, de remplacement de
            chauffage ou d'installation d'énergies renouvelables. Ces montants s'ajoutent directement
            à MaPrimeRénov' et aux primes CEE.
          </p>

          <h3>Nouvelle-Aquitaine : une prime de 800 à 1 200 € pour les rénovations globales</h3>
          <p>
            La Nouvelle-Aquitaine propose une aide régionale spécifique aux projets de rénovation
            d'ampleur, comprenant notamment une <strong>prime de 800 à 1 200 €</strong> couplée à
            la prise en charge partielle de l'audit énergétique préalable. Ce dispositif récompense
            les chantiers qui combinent plusieurs gestes en une seule campagne de travaux — exactement
            la logique du{' '}
            <a href="/blog/renovation-ampleur-2026-accompagnateur-renov">
              parcours « Rénovation d'ampleur » national
            </a>
            .
          </p>

          <h3>Grand Est : le programme Climaxion pour les énergies renouvelables</h3>
          <p>
            Le Grand Est a développé <strong>Climaxion</strong>, un programme transversal couvrant
            la rénovation énergétique des bâtiments, la biomasse, la géothermie et les réseaux de
            chaleur. Les ménages qui installent une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a> ou un chauffe-eau thermodynamique peuvent
            bénéficier d'une enveloppe régionale complémentaire, dont le montant est conditionné
            aux ressources du foyer et à l'ampleur du gain énergétique obtenu.
          </p>

          <h3>PACA : le Chèque énergie durable pour les propriétaires occupants</h3>
          <p>
            En Provence-Alpes-Côte d'Azur, le <strong>Chèque énergie durable</strong> est ouvert à
            tous les propriétaires occupants et usufruitiers résidant dans la région. Il finance des
            travaux sur l'enveloppe du bâtiment (isolation, menuiseries) ou l'installation
            d'équipements à énergies renouvelables. La région a également orienté des moyens
            spécifiques vers les copropriétés, dont certaines cumulent des problématiques de
            vétusté et de performance acoustique.
          </p>

          <h3>Bretagne : un écosystème d'aides local bien structuré</h3>
          <p>
            En Bretagne, le maillage entre aides nationales et locales est particulièrement bien
            articulé. Les conseillers France Rénov' bretons ont développé une expertise dans
            l'identification des dispositifs communaux et intercommunaux qui viennent compléter
            MaPrimeRénov', les primes CEE et l'Éco-PTZ. Les propriétaires de maisons anciennes —
            nombreuses dans la région — y trouvent souvent des leviers spécifiques liés à la
            préservation du patrimoine bâti.
          </p>

          <h3>Île-de-France : pas d'aide régionale centrale, mais des départements très actifs</h3>
          <p>
            La région Île-de-France ne propose pas de subvention régionale directe pour la
            rénovation énergétique. En revanche, plusieurs de ses départements ont pris le relais :
            l'Essonne, les Hauts-de-Seine, le Val-de-Marne et la Ville de Paris proposent chacun
            leurs propres dispositifs d'aide. À Paris, des aides spécifiques aux copropriétés et
            aux façades existent, s'ajoutant aux dispositifs nationaux.
          </p>

          <h2>Comment cumuler efficacement les aides ?</h2>
          <p>
            La mécanique de cumul suit quelques règles simples :
          </p>
          <ul>
            <li>
              <strong>Commencez par MaPrimeRénov'</strong> : déposez votre demande avant le début
              des travaux sur le portail{' '}
              <a href="https://www.maprimerenov.gouv.fr" target="_blank" rel="noopener noreferrer">
                maprimerenov.gouv.fr
              </a>
              .
            </li>
            <li>
              <strong>Identifiez les aides locales</strong> : votre conseiller France Rénov' local
              (ADIL, Espace Conseil) dresse gratuitement la liste des dispositifs disponibles dans
              votre territoire.
            </li>
            <li>
              <strong>Vérifiez le plafond global</strong> : toutes aides confondues (MaPrimeRénov',
              CEE, aides régionales, départementales…), le financement ne peut excéder 90 % du coût
              TTC pour les ménages très modestes, ni 75 % pour les ménages modestes.
            </li>
            <li>
              <strong>Faites appel à un artisan RGE</strong> : condition indispensable pour débloquer
              l'ensemble de ces aides.{' '}
              <a href="/dpe-gratuit">Obtenez une estimation de votre DPE</a> pour cibler les travaux
              les plus rentables.
            </li>
          </ul>

          <h2>Les aides des collectivités locales : un gisement à explorer</h2>
          <p>
            Au-delà des régions et des départements, certaines communes et intercommunalités
            proposent leurs propres subventions : exonération de taxe foncière pour les travaux
            d'économie d'énergie, aide au remplacement de chaudières au fioul, ou encore prise en
            charge des honoraires d'Accompagnateur Rénov'. Ces dispositifs sont très variables et
            souvent limités dans le temps — d'où l'importance de se renseigner avant de signer
            les devis.
          </p>
          <p>
            Vous pouvez également{' '}
            <a href="/#simulateur">utiliser notre simulateur d'aides</a> pour obtenir une première
            estimation des dispositifs disponibles selon votre situation et votre localisation.
          </p>

          <h2>Le bon réflexe : un conseiller France Rénov' pour faire le tour complet</h2>
          <p>
            Aucune liste exhaustive ne peut remplacer l'analyse personnalisée d'un conseiller.
            Le réseau France Rénov' (joignable au <strong>0 808 800 700</strong>, appel gratuit)
            centralise la connaissance des aides locales et peut vous orienter vers les ADIL
            (Agences Départementales d'Information sur le Logement) ou les Espaces Conseil
            proches de chez vous.
          </p>
          <p>
            En tant qu'Accompagnateur Rénov' agréé, RenoHab effectue également ce travail de
            cartographie des aides pour chaque projet qu'il accompagne — et monte les dossiers de
            financement de A à Z. N'hésitez pas à{' '}
            <a href="/dpe-gratuit">demander une estimation gratuite</a> : c'est la première étape
            pour savoir ce à quoi vous avez vraiment droit.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Toutes les aides pour votre projet</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            RenoHab identifie les aides nationales et régionales disponibles dans votre territoire,
            monte les dossiers et coordonne les artisans RGE — pour que vous n'ayez qu'à valider.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Estimer mon DPE gratuitement
            </a>
            <a
              href="/pompe-a-chaleur"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Étudier une pompe à chaleur
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
