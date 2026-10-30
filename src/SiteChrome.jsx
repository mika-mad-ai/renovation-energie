import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { ARTICLES, articlePath } from './blog/articles';

// En-tête et pied de page communs (accueil, blog, pages légales).
// Sur l'accueil (`onHome`), les liens sont des ancres de la page ; ailleurs ils
// pointent vers les sections de l'accueil (/#…), servies pré-rendues.

const NAV_ITEMS = [
  { label: 'Simulateur', id: 'simulator' },
  { label: 'Réglementation 2026', id: 'reglementation-2026' },
  { label: 'Aides', id: 'financial-aids' },
  { label: 'Travaux', id: 'renovation-types' },
  { label: 'Méthode', id: 'project-steps' },
  { label: 'Blog', href: '/blog' },
];

const EASE_OUT = [0.23, 1, 0.32, 1];

const itemHref = (item, onHome) => item.href || (onHome ? `#${item.id}` : `/#${item.id}`);

/**
 * variant="overlay" : fixe, transparent sur le hero photo puis opaque au défilement.
 * variant="solid"   : collant, fond blanc dès le départ (pages de contenu).
 */
export function SiteHeader({ variant = 'solid', onHome = false, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const overlay = variant === 'overlay';
  const transparent = overlay && !scrolled && !menuOpen;

  useEffect(() => {
    if (!overlay) return undefined;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlay]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const handleNav = (e, item) => {
    setMenuOpen(false);
    if (onNavigate && item.id) onNavigate(e, item.id);
  };

  const ctaHref = onHome ? '#audit-request' : '/#audit-request';

  return (
    <>
      <header
        className={`${overlay ? 'fixed' : 'sticky'} inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-300 ease-out ${
          transparent
            ? 'bg-transparent text-white'
            : menuOpen
            ? 'bg-white text-gray-800'
            : 'bg-white/95 text-gray-800 shadow-[0_1px_0_rgba(16,24,40,0.06),0_8px_24px_-12px_rgba(16,24,40,0.12)] backdrop-blur supports-[backdrop-filter]:bg-white/85'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20 lg:px-8">
          <a href={onHome ? '#hero' : '/'} aria-label="RenoHab, retour à l'accueil" className="shrink-0">
            <img
              src="/renohab-logo-wordmark.webp"
              alt="RenoHab"
              width="530"
              height="96"
              className={`h-7 w-auto lg:h-8 ${transparent ? 'drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]' : ''}`}
            />
          </a>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-1 text-[15px] font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={`whitespace-nowrap rounded-full px-3 py-2 transition-colors duration-200 ${
                        transparent ? 'hover:bg-white/10' : 'hover:bg-gray-100 hover:text-gray-950'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={itemHref(item, onHome)}
                      onClick={(e) => handleNav(e, item)}
                      className={`whitespace-nowrap rounded-full px-3 py-2 transition-colors duration-200 ${
                        transparent ? 'hover:bg-white/10' : 'hover:bg-gray-100 hover:text-gray-950'
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/pompe-a-chaleur"
              className={`hidden whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 sm:inline-flex ${
                transparent
                  ? 'border-white/40 text-white hover:bg-white/10'
                  : 'border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              Devis PAC
            </Link>
            <a
              href={ctaHref}
              onClick={(e) => onNavigate && onNavigate(e, 'audit-request')}
              className="hidden whitespace-nowrap rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-emerald-700 md:inline-flex"
            >
              Être accompagné
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className={`-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
                transparent ? 'hover:bg-white/10' : 'hover:bg-gray-100'
              }`}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            key="menu-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE_OUT } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
            className="fixed inset-x-0 bottom-0 top-16 z-30 overflow-y-auto bg-white px-4 pb-10 pt-4 sm:px-6 lg:hidden"
          >
            <nav aria-label="Navigation mobile">
              <ul className="divide-y divide-gray-100">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link
                        to={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between py-4 font-display text-xl font-semibold text-gray-900"
                      >
                        {item.label}
                        <FiArrowRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Link>
                    ) : (
                      <a
                        href={itemHref(item, onHome)}
                        onClick={(e) => handleNav(e, item)}
                        className="flex items-center justify-between py-4 font-display text-xl font-semibold text-gray-900"
                      >
                        {item.label}
                        <FiArrowRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 grid gap-3">
              <a
                href={ctaHref}
                onClick={(e) => handleNav(e, { id: 'audit-request' })}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white"
              >
                Être accompagné
              </a>
              <Link
                to="/pompe-a-chaleur"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3.5 text-base font-semibold text-gray-800"
              >
                Demander un devis PAC
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const FOOTER_SERVICES = [
  { label: 'Simuler mes aides', href: '/#simulator' },
  { label: 'Être accompagné', href: '/#audit-request' },
  { label: 'Estimer mon DPE', href: '/dpe-gratuit' },
  { label: 'Devis pompe à chaleur', href: '/pompe-a-chaleur' },
];

const FOOTER_INFOS = [
  { label: 'Tous nos articles', href: '/blog' },
  { label: 'Valoriser son bien', href: '/blog/valorisation-immobiliere-renovation-energetique' },
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/confidentialite' },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="transition-colors duration-200 hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const latest = ARTICLES.slice(0, 4).map((a) => ({ label: a.title, href: articlePath(a) }));
  const copyright = `© ${new Date().getFullYear()} RenoHab. Tous droits réservés.`;

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <img
              src="/renohab-logo-wordmark-white.webp"
              alt="RenoHab"
              width="530"
              height="96"
              loading="lazy"
              className="h-7 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Accompagnateur Rénov' agréé : audit, plan de travaux, montage des aides et coordination
              d'artisans RGE, partout en France.
            </p>
          </div>
          <div className="md:col-span-2">
            <FooterColumn title="Services" links={FOOTER_SERVICES} />
          </div>
          <div className="md:col-span-4">
            <FooterColumn title="Derniers guides" links={latest} />
          </div>
          <div className="md:col-span-2">
            <FooterColumn title="Informations" links={FOOTER_INFOS} />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright}</p>
          <p>Informations indicatives, à jour de la réglementation de septembre 2026.</p>
        </div>
      </div>
    </footer>
  );
}
