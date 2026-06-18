import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi';
import { useSheetProducts } from './hooks/useSheetProducts';
import useSeo from './useSeo';

const fallbackProducts = [
  {
    title: 'Atlantic Alfea Extensa A.I.',
    description: 'Idéale pour les surfaces de 100 à 130 m² en remplacement de chaudière.',
    photo: 'https://placehold.co/800x600/e2e8f0/334155?text=PAC+Atlantic',
    basePrice: '13 900 €',
    financedPrice: '1 €*',
    reference: 'ATL-EXT-100',
  },
  {
    title: 'Saunier Duval GeniaSet',
    description: 'Performante et silencieuse, parfaite pour les grandes surfaces.',
    photo: 'https://placehold.co/800x600/e2e8f0/334155?text=PAC+Saunier+Duval',
    basePrice: '14 200 €',
    financedPrice: '1 €*',
    reference: 'SD-GENIA-130',
  },
  {
    title: 'Daikin Altherma 3 R',
    description: 'Solution compacte adaptée aux espaces réduits, rendement élevé.',
    photo: 'https://placehold.co/800x600/e2e8f0/334155?text=PAC+Daikin',
    basePrice: '15 000 €',
    financedPrice: '1 €*',
    reference: 'DAI-AL3R-90',
  },
];

const normalizeBrandKey = (value = '') => value?.toString().toLowerCase().replace(/[^a-z0-9]/g, '') || '';

const normalizeSlug = (str = '') =>
  str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'produit';

const buildProductSlug = (p = {}) => normalizeSlug(p.reference || p.title || '');

function parseEuroPrice(value = '') {
  if (!value) return null;
  const cleaned = value.toString().replace(/[^0-9.,]/g, '').replace(',', '.');
  const numeric = Number.parseFloat(cleaned);
  return Number.isNaN(numeric) ? null : numeric;
}

function extractBrandFromReference(p) {
  if (p.brand) return p.brand;
  if (p.reference) return p.reference.split('-')[0];
  if (p.title) return p.title.split(' ')[0];
  return '';
}

function detectBrandFromLogo(url = '') {
  if (!url) return '';
  const lower = url.toLowerCase();
  if (lower.includes('lg')) return 'LG';
  if (lower.includes('ariston')) return 'Ariston';
  if (lower.includes('atlantic')) return 'Atlantic';
  if (lower.includes('mitsubishi')) return 'Mitsubishi';
  if (lower.includes('ferroli')) return 'Ferroli';
  return '';
}

function normalizePhotoUrl(url = '') {
  if (!url) return '';
  const driveFileMatch = url.match(/https?:\/\/drive\.google\.com\/file\/d\/([^/]+)/);
  if (driveFileMatch) {
    return `https://drive.google.com/uc?export=download&id=${driveFileMatch[1]}`;
  }
  const driveOpenMatch = url.match(/https?:\/\/drive\.google\.com\/open\?id=([^&]+)/);
  if (driveOpenMatch) {
    return `https://drive.google.com/uc?export=download&id=${driveOpenMatch[1]}`;
  }
  const driveUcMatch = url.match(/https?:\/\/drive\.google\.com\/uc\?id=([^&]+)/);
  if (driveUcMatch) {
    const base = 'https://drive.google.com/uc';
    const params = new URLSearchParams({ export: 'download', id: driveUcMatch[1] });
    return `${base}?${params.toString()}`;
  }
  return url;
}

function enhanceProduct(p = {}) {
  const numericPrice = parseEuroPrice(p.basePrice);
  const brand = detectBrandFromLogo(p.logo) || (p.brand || extractBrandFromReference(p) || '').trim();
  return { ...p, numericPrice, brand, slug: buildProductSlug(p) };
}

export default function ProductPage() {
  const { slug } = useParams();
  const sheetUrl = process.env.REACT_APP_PAC_PRODUCTS_SHEET_URL || '';
  const { products, loading } = useSheetProducts(sheetUrl);

  const enrichedProducts = useMemo(() => {
    // CORRECTION : On évite de charger les fallbackProducts ici pour ne pas fausser la recherche par slug
    const source = products.length ? products : [];
    return source.map((p) => enhanceProduct(p));
  }, [products]);

  const carouselRef = useRef(null);

  const product = useMemo(() => {
    if (!slug) return null;
    // CORRECTION CRITIQUE : Normalisation du slug venant de l'URL pour gérer la casse (HM... vs hm...)
    const targetSlug = normalizeSlug(slug);
    return enrichedProducts.find((p) => p.slug === targetSlug);
  }, [enrichedProducts, slug]);

  const sameBrandProducts = useMemo(() => {
    if (!product?.brand) return [];
    return enrichedProducts
      .filter((p) => p.slug !== product.slug && normalizeBrandKey(p.brand) === normalizeBrandKey(product.brand))
      .slice(0, 6);
  }, [enrichedProducts, product]);

  const heroPhoto = normalizePhotoUrl(product?.photo);
  const productRef = product?.reference || '';
  const longDescription = product?.longDescription || '';
  const formattedLongDescription = useMemo(() => {
    if (!longDescription) return '';
    const withBullets = longDescription.replace(/\s*•\s*/g, '\n• ').replace(/\n{3,}/g, '\n\n');
    return withBullets.trim();
  }, [longDescription]);

  const productJsonLd = useMemo(() => {
    if (!product) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.title || product.reference,
      "image": heroPhoto || undefined,
      "description": product.description || product.longDescription || undefined,
      "sku": product.reference || undefined,
      "category": "Pompe à chaleur air/eau",
      "brand": product.brand ? { "@type": "Brand", "name": product.brand } : undefined,
    };
  }, [product, heroPhoto]);

  useSeo({
    title: `${product?.title || product?.reference || 'Pompe à chaleur air/eau'} | Pompe à chaleur | RenoHab`,
    description: (product?.description || product?.longDescription ||
      "Pompe à chaleur air/eau posée par un artisan RGE QualiPAC, avec aides MaPrimeRénov' et CEE et TVA réduite à 5,5 %.").slice(0, 160),
    path: `/pompe-a-chaleur/${product?.slug || slug || ''}`,
    image: heroPhoto || undefined,
    noindex: !product,
    jsonLd: productJsonLd,
  });

  const scrollCarousel = (direction) => {
    const el = carouselRef.current;
    if (!el) return;
    const offset = 320;
    el.scrollBy({ left: direction === 'left' ? -offset : offset, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!product) return;
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'product_view',
        product_ref: product.reference || '',
        product_title: product.title || '',
        brand: product.brand || '',
      });
    } catch {}
    try {
      if (window.fbq) {
        window.fbq('track', 'ViewContent', {
          content_type: 'product',
          content_name: product.title || '',
          content_ids: product.reference ? [product.reference] : undefined,
          brand: product.brand || undefined,
        });
      }
    } catch {}
  }, [product]);

  // CORRECTION : Affichage du loader tant que les produits chargent et qu'on n'a pas encore trouvé le produit
  if (loading && !product) {
    return (
      <div className="min-h-screen bg-gray-50 text-slate-800 flex items-center justify-center">
        <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mb-4"></div>
            <p className="text-sm text-slate-500">Chargement de la référence…</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 text-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-4">
          <Link to="/pompe-a-chaleur" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
            <FiArrowLeft className="mr-2" /> Retour aux pompes à chaleur
          </Link>
          <h1 className="text-3xl font-bold">Produit introuvable</h1>
          <p className="text-slate-600">La référence demandée n’existe pas ou n’est plus disponible.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50 text-slate-800">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2" aria-label="Accueil RenoHab">
            <img src="/RenoHabLogo.webp" alt="RenoHab" className="h-28 w-auto" />
          </a>
          <div className="flex items-center gap-4 text-sm">
            <a href="/pompe-a-chaleur" className="text-emerald-700 font-semibold hover:text-emerald-800">
              Pompes à chaleur
            </a>
            <a
              href="/pompe-a-chaleur?modal=devis"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-4 py-2 font-semibold shadow hover:bg-emerald-700"
            >
              Obtenir un devis
            </a>
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
        <div className="mb-6 flex items-center gap-3 text-sm text-emerald-700 font-semibold">
          <Link to="/pompe-a-chaleur" className="inline-flex items-center hover:text-emerald-800">
            <FiArrowLeft className="mr-2" /> Pompes à chaleur
          </Link>
          {product.brand && (
            <>
              <span className="text-slate-400">/</span>
              <span>{product.brand}</span>
            </>
          )}
          {productRef && (
            <>
              <span className="text-slate-400">/</span>
              <span>{productRef}</span>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-3xl shadow-soft border border-emerald-100 overflow-hidden h-80 md:h-[24rem]">
            {heroPhoto ? (
              <img src={heroPhoto} alt={product.title} className="w-full h-full object-cover" loading="lazy" />
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400">Image indisponible</div>
            )}
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold">
              <FiCheck /> Pompe à chaleur certifiée
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-500 font-semibold">{product.brand || 'Pompe à chaleur'}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">{product.title}</h1>
              {productRef && <p className="text-sm text-slate-500 mt-1">Référence : {productRef}</p>}
            </div>
            <p className="text-base text-slate-700 whitespace-pre-line">{product.description || 'Performance, économies et confort toute l’année.'}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              {product.basePrice && (
                <div className="rounded-2xl border border-sky-200 bg-sky-50/80 p-4 shadow-sm">
                  <p className="text-xs uppercase text-sky-600">Prix public indicatif</p>
                  <p className="text-xl font-bold text-slate-900">{product.basePrice}</p>
                </div>
              )}
              {product.financedPrice && (
                <div className="rounded-2xl border border-sky-300 bg-sky-100/80 p-4 flex flex-col gap-3 shadow-sm">
                  <div>
                    <p className="text-xs uppercase text-sky-700">Si éligible aux aides</p>
                    <p className="text-xl font-bold text-sky-800">{product.financedPrice}</p>
                  </div>
                  <a
                    href={`/pompe-a-chaleur?modal=form&productRef=${encodeURIComponent(productRef)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300 bg-white text-sky-700 px-5 py-2 font-semibold shadow-sm hover:border-sky-400 hover:text-sky-800"
                  >
                    Vérifier mon éligibilité
                  </a>
                </div>
              )}
            </div>

            <a
              href={`/pompe-a-chaleur?modal=devis&productRef=${encodeURIComponent(productRef)}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 text-white px-6 py-3 font-semibold shadow-lg hover:bg-emerald-700"
            >
              Obtenir un devis <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {product.cooling && (
            <SpecCard label="Capacité de refroidissement" value={product.cooling} />
          )}
          {product.heating && (
            <SpecCard label="Capacité de chauffage" value={product.heating} />
          )}
          {product.energyClass && (
            <SpecCard label="Classe énergétique" value={product.energyClass} highlight />
          )}
          {product.fluid && (
            <SpecCard label="Fluide" value={product.fluid} />
          )}
        </div>

        {formattedLongDescription && (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Descriptif détaillé</h2>
            <div className="prose prose-emerald max-w-none text-slate-700">
              <pre className="whitespace-pre-wrap break-words font-sans text-base leading-relaxed">
{formattedLongDescription}
              </pre>
            </div>
          </div>
        )}

        {!!sameBrandProducts.length && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Autres modèles {product.brand}</h2>
              <Link to="/pompe-a-chaleur" className="text-sm text-emerald-600 font-semibold hover:text-emerald-700">
                Voir toutes les PAC
              </Link>
            </div>
            <div className="relative">
              <div ref={carouselRef} className="overflow-x-auto pb-2 scroll-smooth">
                <div className="flex gap-4 min-w-full snap-x snap-mandatory">
                  {sameBrandProducts.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/pompe-a-chaleur/${p.slug}`}
                      className="group snap-start w-[260px] md:w-[280px] flex-shrink-0 rounded-3xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition"
                    >
                      <div className="h-56 md:h-64 overflow-hidden rounded-3xl rounded-b-none bg-slate-100">
                        {p.photo ? (
                          <img
                            src={normalizePhotoUrl(p.photo)}
                            alt={p.title}
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center text-slate-400 text-sm">Image indisponible</div>
                        )}
                      </div>
                      <div className="p-4 space-y-2">
                        <p className="text-xs font-semibold uppercase text-emerald-500">{p.reference || 'Réf. N/A'}</p>
                        <h3 className="text-lg font-semibold text-slate-900 leading-tight line-clamp-2">{p.title}</h3>
                        <p className="text-sm text-slate-600 line-clamp-3">{p.description || ''}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollCarousel('left');
                }}
                className="absolute inset-y-0 left-0 flex items-center pl-1 sm:pl-2"
                aria-label="Défiler vers la gauche"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow border border-slate-200 text-slate-500 hover:text-emerald-700">
                  <FiArrowLeft />
                </span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollCarousel('right');
                }}
                className="absolute inset-y-0 right-0 flex items-center pr-1 sm:pr-2"
                aria-label="Défiler vers la droite"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow border border-slate-200 text-slate-500 hover:text-emerald-700">
                  <FiArrowRight />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SpecCard({ label, value, highlight }) {
  return (
    <div className={`rounded-2xl p-4 shadow-sm border ${highlight ? 'border-emerald-200 bg-emerald-50/80 text-emerald-800' : 'border-slate-200 bg-white/80 text-slate-800'}`}>
      <p className="text-xs uppercase font-semibold tracking-wide">{label}</p>
      <p className="text-lg font-bold mt-1">{value}</p>
    </div>
  );
}