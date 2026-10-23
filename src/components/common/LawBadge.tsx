import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useLawModal } from '../../context/LawContext';
import { findLegalReference } from '../../data/legalArticles';

interface LawBadgeProps {
  article: string;
  code?: string;
  showExternalLink?: boolean;
  onClick?: () => void;
}

export const LawBadge: React.FC<LawBadgeProps> = ({ 
  article, 
  code, 
  showExternalLink = true, 
  onClick 
}) => {
  const { openLaw } = useLawModal();

  const ref = findLegalReference(article) || (code ? findLegalReference(`${code} ${article}`) : undefined);
  const officialUrl = ref?.officialSourceUrl || (article.startsWith('http') ? article : `https://www.legifrance.gouv.fr/recherche/all?tab_selection=all&search=${encodeURIComponent(article)}`);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    } else {
      openLaw(ref || article);
    }
  };

  return (
    <span className="inline-flex items-center gap-0.5 rounded-lg border border-slate-300 bg-slate-100 hover:bg-indigo-50 hover:border-indigo-300 transition-colors shadow-2xs group align-baseline">
      {/* Bouton d'ouverture de la modale explicative complète */}
      <button 
        type="button"
        onClick={handleOpenModal}
        className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold text-slate-700 hover:text-indigo-900 cursor-pointer active:scale-95 transition-all"
        title={code ? `${code} • ${article} (Cliquer pour voir l'analyse complète et le texte officiel)` : `Cliquer pour voir le texte intégral de ${article}`}
      >
        <BookOpen className="w-3 h-3 text-indigo-500 group-hover:text-indigo-600 shrink-0" />
        <span className="truncate max-w-[140px] sm:max-w-none">{article}</span>
      </button>

      {/* Bouton d'ouverture directe de la source officielle (Légifrance) */}
      {showExternalLink && (
        <a
          href={officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-indigo-100/60 rounded-r-md transition-colors border-l border-slate-200 cursor-pointer"
          title={`Ouvrir directement sur Légifrance / Source officielle (${ref ? ref.code : 'Légifrance.gouv.fr'})`}
        >
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      )}
    </span>
  );
};
