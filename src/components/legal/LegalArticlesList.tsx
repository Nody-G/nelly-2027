import React, { useState } from 'react';
import { legalReferencesDatabase } from '../../data/legalArticles';
import { LawReference } from '../../types/fiscal';
import { BookOpen, ShieldCheck, Search, ExternalLink, CheckCircle } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';

export const LegalArticlesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = legalReferencesDatabase.filter(ref => 
    ref.article.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ref.practicalApplication.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Barre de recherche */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input 
          type="text"
          placeholder="Rechercher un article de loi (ex: Art. 31, CESU, Garde alternée, 669)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((ref, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                  {ref.code}
                </span>
                <LawBadge article={ref.article} code={ref.code} />
              </div>

              <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                {ref.title}
              </h4>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 font-mono italic leading-relaxed">
                "{ref.fullQuote}"
              </div>

              <div className="space-y-1 text-xs">
                <div className="font-bold text-slate-800">Application concrète pour Nelly Fernandez :</div>
                <p className="text-slate-600 leading-relaxed">{ref.practicalApplication}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
              <div className="space-y-1">
                <div className="font-bold text-rose-700 flex items-center gap-1 text-[11px] uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                  <span>Garde-fou URSSAF / Fisc :</span>
                </div>
                <p className="text-slate-700 text-[11px] leading-relaxed bg-rose-50/50 p-2 rounded-lg border border-rose-100">
                  {ref.urssafSafeguard}
                </p>
              </div>

              {ref.officialSourceUrl && (
                <div className="pt-1 flex items-center justify-between border-t border-slate-100">
                  <a
                    href={ref.officialSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer"
                  >
                    <span>Consulter le texte consolidé sur {ref.code.includes('Traité') ? 'Eur-Lex' : ref.code.includes('Conseil') ? 'Conseil-Constitutionnel.fr' : ref.code.includes('Cour') ? 'CComptes.fr' : 'Légifrance.gouv.fr'}</span>
                    <ExternalLink className="w-3 h-3 text-indigo-500" />
                  </a>
                  <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                    Source Certifiée
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
