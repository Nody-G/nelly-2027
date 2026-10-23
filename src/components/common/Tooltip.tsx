import React, { useState, useRef, useEffect, useCallback } from 'react';
import { HelpCircle, X, ChevronRight, BookOpen, ExternalLink, Pin } from 'lucide-react';
import { useLawModal } from '../../context/LawContext';
import { findLegalReference } from '../../data/legalArticles';

interface TooltipProps {
  term: string;
  explanation: string;
  lawRef?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ term, explanation, lawRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [coords, setCoords] = useState<{ top?: number; bottom?: number; left: number; width: number } | null>(null);
  const { openLaw } = useLawModal();

  // Recherche de la référence juridique enrichie
  const legalRef = lawRef ? findLegalReference(lawRef) : findLegalReference(term);
  const officialUrl = legalRef?.officialSourceUrl || (lawRef && lawRef.startsWith('http') ? lawRef : `https://www.legifrance.gouv.fr/recherche/all?tab_selection=all&search=${encodeURIComponent(lawRef || term)}`);

  const clearTimer = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const tooltipWidth = Math.min(380, window.innerWidth - 32);

    // Positionnement horizontal avec marge de sécurité de 16px
    let left = rect.left + rect.width / 2 - tooltipWidth / 2;
    if (left < 16) left = 16;
    if (left + tooltipWidth > window.innerWidth - 16) {
      left = window.innerWidth - tooltipWidth - 16;
    }

    // Positionnement vertical : au-dessus si espace suffisant (>220px), sinon en-dessous
    const spaceAbove = rect.top;
    if (spaceAbove > 220) {
      setCoords({
        bottom: window.innerHeight - rect.top + 8,
        left,
        width: tooltipWidth
      });
    } else {
      setCoords({
        top: rect.bottom + 8,
        left,
        width: tooltipWidth
      });
    }
  }, []);

  const handleOpen = () => {
    clearTimer();
    updatePosition();
    setIsOpen(true);
  };

  const scheduleClose = () => {
    if (isPinned) return; // Ne pas fermer si l'utilisateur a cliqué pour épingler
    clearTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 350); // Marge de 350ms permettant au curseur de franchir l'intervalle sans refermer
  };

  const handleManualClose = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    clearTimer();
    setIsOpen(false);
    setIsPinned(false);
  };

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    clearTimer();

    if (isOpen && isPinned) {
      setIsOpen(false);
      setIsPinned(false);
    } else {
      updatePosition();
      setIsOpen(true);
      setIsPinned(true);
    }
  };

  const handleLawModalOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    clearTimer();
    if (legalRef) {
      openLaw(legalRef);
    } else if (lawRef) {
      openLaw(lawRef);
    } else {
      openLaw(term);
    }
    setIsOpen(false);
    setIsPinned(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        triggerRef.current && !triggerRef.current.contains(target) &&
        tooltipRef.current && !tooltipRef.current.contains(target)
      ) {
        clearTimer();
        setIsOpen(false);
        setIsPinned(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
    }

    return () => {
      clearTimer();
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen, clearTimer, updatePosition]);

  return (
    <span 
      ref={triggerRef}
      className={`inline-flex items-center gap-0.5 cursor-pointer border-b border-dashed font-medium transition-colors align-baseline ${
        isPinned 
          ? 'border-indigo-600 text-indigo-950 bg-indigo-50/80 px-1 rounded' 
          : 'border-indigo-400 text-indigo-700 hover:text-indigo-900 hover:border-indigo-600'
      }`}
      onMouseEnter={handleOpen}
      onMouseLeave={scheduleClose}
      onClick={handleTriggerClick}
      title="Survoler pour lire, cliquer pour épingler l'infobulle"
    >
      <span className="select-text">{term}</span>
      <HelpCircle className={`w-3.5 h-3.5 shrink-0 inline ml-0.5 transition-colors ${isPinned ? 'text-indigo-700' : 'text-indigo-500'}`} />
      
      {isOpen && coords && (
        <div 
          ref={tooltipRef}
          style={{
            position: 'fixed',
            left: `${coords.left}px`,
            top: coords.top !== undefined ? `${coords.top}px` : undefined,
            bottom: coords.bottom !== undefined ? `${coords.bottom}px` : undefined,
            width: `${coords.width}px`,
            zIndex: 99999
          }}
          className="p-4 bg-slate-900 text-slate-100 text-xs rounded-2xl shadow-2xl border border-slate-700 block animate-in fade-in zoom-in-95 duration-150 whitespace-normal break-words leading-relaxed text-left cursor-default select-text pointer-events-auto"
          onMouseEnter={handleOpen}
          onMouseLeave={scheduleClose}
          onClick={(e) => e.stopPropagation()}
        >
          {/* En-tête avec titre, indicateur d'épinglage et bouton de fermeture */}
          <div className="font-bold text-indigo-300 flex items-center justify-between pb-2 border-b border-slate-800 mb-2 gap-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="truncate font-semibold">{term}</span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {isPinned && (
                <span className="text-[10px] bg-indigo-950/80 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-700/50 flex items-center gap-1 font-mono">
                  <Pin className="w-2.5 h-2.5 text-indigo-400" />
                  <span>Épinglé</span>
                </span>
              )}

              {/* Bouton de fermeture direct et permanent */}
              <button 
                type="button"
                onClick={handleManualClose}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Fermer l'infobulle"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Explication pédagogique */}
          <p className="text-slate-300 leading-relaxed text-[11px] whitespace-normal break-words">
            {explanation}
          </p>
          
          {/* Actions interactives cliquables */}
          {(lawRef || legalRef) ? (
            <div className="mt-3 pt-2.5 border-t border-slate-800 space-y-2">
              {/* Bouton 1 : Ouvrir la fiche d'analyse dans la modale */}
              <button
                type="button"
                onClick={handleLawModalOpen}
                className="w-full py-2 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-[11px] flex items-center justify-between transition-colors shadow-sm cursor-pointer group"
              >
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-200 group-hover:text-white transition-colors" />
                  <span>Consulter le texte officiel complet</span>
                </span>
                <span className="flex items-center gap-0.5 text-indigo-200 group-hover:text-white font-medium text-[10px]">
                  <span>Fiche</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>

              {/* Bouton 2 : Lien externe direct vers Légifrance ou source officielle */}
              <a
                href={officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-indigo-300 hover:text-white rounded-xl font-medium text-[10px] flex items-center justify-between transition-colors border border-slate-700 cursor-pointer"
              >
                <span className="flex items-center gap-1.5 truncate mr-2">
                  <ExternalLink className="w-3 h-3 text-indigo-400 shrink-0" />
                  <span className="truncate">Ouvrir la source ({legalRef ? legalRef.code : 'Légifrance.gouv.fr'})</span>
                </span>
                <span className="text-slate-400 text-[10px] shrink-0 font-mono">Nouvel onglet ↗</span>
              </a>
            </div>
          ) : (
            <div className="mt-2.5 pt-2 border-t border-slate-800 flex justify-end">
              <a
                href={officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-indigo-300 transition-colors cursor-pointer"
              >
                <span>Rechercher sur Légifrance</span>
                <ExternalLink className="w-2.5 h-2.5 text-indigo-400" />
              </a>
            </div>
          )}
        </div>
      )}
    </span>
  );
};
