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

const PUBLISHED = '2026-08-14';
const PATH = '/blog/panneaux-solaires-photovoltaiques-aides-2026';

export default function ArticlePanneauxSolaires2026() {
  useSeo({
    title: "Panneaux solaires 2026 : quelles aides après la fin de la prime à l'autoconsommation ? | RenoHab",
    description:
      "La prime à l'autoconsommation photovoltaïque a été supprimée le 5 juin 2026. Découvrez les aides qui restent (TVA 5,5 %, CEE, éco-PTZ) et comment rentabiliser votre installation solaire.",
    path: PATH,
    image: 'https://renohab.fr/blog/panneaux-solaires-photovoltaiques-aides-2026.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        "Panneaux solaires photovoltaïques 2026 : quelles aides après la suppression de la prime à l'autoconsommation ?",
      description:
        "La prime à l'autoconsommation photovoltaïque a été supprimée le 5 juin 2026. Découvrez les aides qui restent (TVA 5,5 %, CEE, éco-PTZ) et comment rentabiliser votre installation solaire.",
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
      about: ['Panneaux solaires', 'Photovoltaïque', 'Autoconsommation', 'Aides rénovation énergétique'],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ArticleHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-800">
          <p className="text-sm text-gray-500 !mb-2">
            Publié le 14 août 2026 · Énergie solaire
          </p>

          <h1>Panneaux solaires photovoltaïques 2026 : quelles aides après la suppression de la prime à l'autoconsommation ?</h1>

          <img
            src="/blog/panneaux-solaires-photovoltaiques-aides-2026.jpg"
            alt="Maison moderne avec panneaux solaires photovoltaïques sur le toit — autoconsommation 2026"
            className="w-full rounded-xl shadow-md mb-8"
            loading="eager"
          />

          <p className="lead">
            Coup de tonnerre dans le secteur solaire : l'arrêté tarifaire S21, signé le 4 juin 2026,
            a supprimé la prime à l'autoconsommation photovoltaïque pour toute demande complète de
            raccordement déposée à partir du <strong>5 juin 2026</strong>. Cette aide, qui pouvait
            atteindre 720 € pour une installation de 9 kWc, disparaît du paysage. Bonne nouvelle :
            d'autres mécanismes de soutien subsistent, et l'autoconsommation reste un choix
            rentable si votre installation est bien dimensionnée.
          </p>

          <h2>La prime à l'autoconsommation : ce qui a changé et pourquoi</h2>
          <p>
            Depuis 2017, l'État versait une prime à l'autoconsommation aux propriétaires installant
            des panneaux photovoltaïques couplés à un contrat d'injection du surplus sur le réseau.
            Son montant variait selon la puissance installée et était versé sur cinq ans. Pour les
            installations ≤ 9 kWc, elle s'élevait à <strong>80 €/kWc</strong>, soit
            <strong> 720 € maximum</strong> pour 9 kWc.
          </p>
          <p>
            L'arrêté S21 du 4 juin 2026 met fin à ce dispositif pour les nouvelles demandes de
            raccordement complètes déposées à partir du 5 juin. Les dossiers antérieurs à cette date
            conservent leurs droits acquis et percevront la prime sur toute la durée prévue. Ce
            changement s'inscrit dans la maturité croissante du marché solaire : les coûts d'installation
            ont baissé de plus de 60 % en dix ans, et le gouvernement considère que le secteur n'a
            plus besoin de cette béquille tarifaire spécifique.
          </p>

          <h2>Les aides qui restent disponibles en 2026</h2>

          <h3>La TVA à 5,5 % : une économie immédiate et non négligeable</h3>
          <p>
            C'est l'aide la plus automatique et la plus sûre. Toute installation photovoltaïque
            d'une puissance <strong>inférieure ou égale à 9 kWc</strong>, réalisée par un artisan
            certifié <strong>RGE QualiPV</strong>, bénéficie du taux réduit de TVA à 5,5 % (au lieu
            de 20 %). Sur un devis de 15 000 €, cela représente une économie d'environ
            <strong> 675 €</strong>. Sans condition de ressources, sans dossier à constituer : la
            réduction s'applique directement sur la facture de l'installateur.
          </p>

          <h3>Les certificats d'économies d'énergie (CEE)</h3>
          <p>
            La 6<sup>e</sup> période des CEE (P6), qui court de 2026 à 2030, a relevé les objectifs
            d'économies d'énergie des fournisseurs obligés d'environ +35 % par rapport à la période
            précédente. Cette pression accrue se traduit par des primes CEE plus généreuses pour les
            particuliers. Pour les installations photovoltaïques, les opérations standardisées
            concernent surtout les systèmes hybrides et les équipements couplés à la gestion de
            l'énergie. Renseignez-vous auprès de votre installateur RGE ou d'un courtier CEE pour
            savoir si votre projet est éligible.
          </p>

          <h3>L'éco-PTZ : financer sans intérêts</h3>
          <p>
            L'<a href="/blog/eco-ptz-2026-pret-taux-zero-renovation">éco-prêt à taux zéro (éco-PTZ)</a> peut
            financer jusqu'à <strong>50 000 €</strong> de travaux de rénovation globale incluant une
            installation photovoltaïque, sans intérêts. Ce prêt est cumulable avec d'autres aides et
            accessible sans condition de ressources, sous réserve que les travaux soient réalisés par
            un artisan RGE. Il s'adresse aux propriétaires occupants comme aux bailleurs.
          </p>

          <h3>MaPrimeRénov' : attention à la confusion</h3>
          <p>
            Un point de vigilance important : <strong>MaPrimeRénov' ne finance pas les panneaux
            photovoltaïques</strong>. Cette aide est réservée aux travaux d'isolation, de chauffage
            (dont les{' '}
            <a href="/pompe-a-chaleur">pompes à chaleur</a>) et aux équipements solaires
            thermiques (chauffe-eau solaire, système solaire combiné). Seuls les panneaux
            <em> hybrides</em> (thermiques et électriques simultanément) peuvent, sous conditions,
            ouvrir droit à une aide MaPrimeRénov'. Ne vous laissez pas piéger par des vendeurs qui
            associeraient PV et MaPrimeRénov' sans précautions.
          </p>

          <h2>Autoconsommation : la vraie rentabilité en 2026</h2>
          <p>
            La suppression de la prime à l'autoconsommation déplace l'équation économique mais ne la
            remet pas en cause. Le vrai moteur de rentabilité d'une installation solaire, c'est
            <strong> l'autoconsommation elle-même</strong> : chaque kilowattheure produit et consommé
            directement chez soi évite d'en acheter un sur le réseau à environ <strong>25 ct/kWh</strong>
            (tarif réglementé 2026, hors abonnement). Sur une production annuelle de 4 000 kWh pour
            une installation de 3 kWc bien orientée, avec un taux d'autoconsommation de 70 %, cela
            représente une économie d'environ <strong>700 € par an</strong>.
          </p>
          <p>
            Le tarif de rachat du surplus sur le réseau (dispositif EDF Obligation d'Achat) a été
            fortement réduit par les nouvelles règles tarifaires. La stratégie gagnante est donc de
            maximiser l'autoconsommation plutôt que la revente : décalez vos usages énergivores
            (lave-linge, lave-vaisselle, recharge de véhicule électrique) vers les heures
            d'ensoleillement, et envisagez le couplage avec un <strong>ballon thermodynamique</strong>{' '}
            ou une batterie de stockage pour absorber les pics de production.
          </p>

          <h3>Combien de temps pour rentabiliser son installation ?</h3>
          <ul>
            <li>
              <strong>Installation 3 kWc</strong> (~7 000-9 000 € TTC après TVA 5,5 %) : retour sur
              investissement estimé entre <strong>8 et 11 ans</strong> selon la région et le taux
              d'autoconsommation.
            </li>
            <li>
              <strong>Installation 6 kWc</strong> (~12 000-16 000 € TTC) : rentabilité similaire si
              la consommation du foyer absorbe bien la production.
            </li>
            <li>
              <strong>Installation 9 kWc</strong> (plafond TVA réduite) : plus pertinente pour des
              foyers électriques, une piscine ou la recharge d'un ou deux véhicules électriques.
            </li>
          </ul>
          <p>
            Ces estimations sont sensibles à l'orientation du toit (sud idéal, sud-est/sud-ouest
            acceptables), à l'inclinaison (30° à 35° optimal), à l'ombrage et aux tarifs
            d'électricité futurs.
          </p>

          <h2>Bien choisir son installateur et son matériel</h2>
          <p>
            Pour accéder à la TVA à 5,5 % et aux CEE, votre installateur doit impérativement être
            certifié <strong>RGE QualiPV</strong>. Vérifiez cette qualification sur le site
            france-renov.gouv.fr avant de signer tout devis. Demandez au minimum trois devis comparatifs
            et méfiez-vous des offres « zéro euro », souvent fondées sur des calculs de rentabilité
            surestimés.
          </p>
          <p>
            Pour le matériel, privilégiez des panneaux de Tier 1 (garantie produit 12 ans minimum,
            garantie performance linéaire 25 ans), un onduleur adapté à votre installation et, si
            vous choisissez des microonduleurs, vérifiez leur compatibilité avec les normes
            françaises de raccordement Enedis.
          </p>

          <h2>En résumé : faut-il se lancer en 2026 ?</h2>
          <p>
            Oui, sous conditions. La suppression de la prime à l'autoconsommation réduit légèrement
            l'attractivité financière des petites installations, mais la TVA à 5,5 %, la baisse des
            coûts du matériel et la hausse des prix de l'électricité maintiennent un bilan
            économique favorable. La clé est un <strong>dimensionnement rigoureux</strong> fondé sur
            votre consommation réelle et non sur la capacité de revente du surplus.
          </p>
          <p>
            Avant d'installer des panneaux, pensez aussi à réduire vos besoins : une meilleure
            isolation ou le remplacement d'une chaudière ancienne par une{' '}
            <a href="/pompe-a-chaleur">pompe à chaleur</a> abaissent la consommation, ce qui
            améliore votre taux d'autoconsommation et la durée de rentabilité de votre installation
            solaire. Commencez par faire évaluer votre logement avec un{' '}
            <a href="/dpe-gratuit">diagnostic de performance énergétique</a>.
          </p>
        </article>

        {/* CTA RenoHab */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold font-display mb-2">Votre projet solaire, bien cadré</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
            En tant qu'Accompagnateur Rénov' agréé, RenoHab évalue votre potentiel solaire,
            vous oriente vers les artisans RGE qualifiés et optimise l'ensemble de vos aides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dpe-gratuit"
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Évaluer mon logement
            </a>
            <a
              href="/#simulator"
              className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Simuler mes aides
            </a>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
