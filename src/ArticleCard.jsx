import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { articlePath, articleThumb } from './blog/articles';

/**
 * Carte d'article partagée entre l'accueil (section Ressources) et la page /blog.
 * L'image utilise la vignette WebP générée au build ; si elle manque (dev sans
 * hook, image ajoutée à la main), on retombe sur l'image d'origine.
 */
export default function ArticleCard({ article, eager = false }) {
  const { title, excerpt, tag, date, image, alt } = article;

  return (
    <Link
      to={articlePath(article)}
      className="group flex flex-col bg-white rounded-2xl shadow-soft border border-gray-200/60 overflow-hidden transform-gpu hover:-translate-y-1 hover:shadow-card active:scale-[0.99] transition duration-200 ease-out"
    >
      <div className="overflow-hidden bg-gray-100">
        <img
          src={articleThumb(article)}
          alt={alt}
          width="640"
          height="420"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={(e) => {
            if (e.currentTarget.dataset.fallback) return;
            e.currentTarget.dataset.fallback = '1';
            e.currentTarget.src = image;
          }}
          className="w-full h-52 object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="inline-flex items-center self-start rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 mb-3">
          {tag} · {date}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 font-display mb-3 leading-snug">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">{excerpt}</p>
        <span className="mt-4 inline-flex items-center text-emerald-700 font-semibold text-sm">
          Lire l'article
          <FiArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
