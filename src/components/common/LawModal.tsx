import React from 'react';
import { LawReference } from '../../types/fiscal';
import { X, BookOpen, ShieldAlert, CheckCircle2, ExternalLink } from 'lucide-react';

interface LawModalProps {
  law: LawReference | null;
  onClose: () => void;
}

export const LawModal: React.FC<LawModalProps> = ({ law, onClose }) => {
  if (!law) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête */}
        <div className="bg-slate-900 text-white p-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-300">
                {law.code} • {law.article}
              </span>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                {law.title}
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corps */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs text-slate-700 leading-relaxed custom-scroll">
          {/* Citation du texte officiel */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Texte Officiel de Référence (Légifrance / Code Officiel) :
            </div>
            <p className="font-mono text-[11px] text-slate-800 italic leading-relaxed">
              « {law.fullQuote} »
            </p>
          </div>

          {/* Application concrète pour Nelly */}
          <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-1.5">
            <div className="font-bold text-indigo-950 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>Application Chiffrée pour Nelly (Nell'Immo Pélissanne) :</span>
            </div>
            <p className="text-indigo-900 leading-relaxed">
              {law.practicalApplication}
            </p>
          </div>

          {/* Garde-fou URSSAF & Fisc */}
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 space-y-1.5">
            <div className="font-bold text-rose-900 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Garde-Fou URSSAF & Anti-Redressement :</span>
            </div>
            <p className="text-rose-950 leading-relaxed">
              {law.urssafSafeguard}
            </p>
          </div>

          {law.officialSourceUrl && (
            <div className="pt-2 flex justify-end">
              <a 
                href={law.officialSourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                <span>Consulter le texte consolidé sur Légifrance</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Pied */}
        <div className="bg-slate-50 p-3 sm:px-6 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
