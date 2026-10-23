import React from 'react';
import { LegalArticlesList } from '../legal/LegalArticlesList';
import { UrssafSafeguardsChecklist } from '../legal/UrssafSafeguardsChecklist';
import { Gavel, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export const LegalSafeguardsTab: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* En-tête de section */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
                <Gavel className="w-4 h-4 text-indigo-700" />
              </span>
              <span className="text-xs font-bold uppercase text-indigo-700 tracking-wider">
                Référentiel Juridique Strictement Vérifié • Zéro Fake
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Textes de Loi Officiels (CGI, Code du Travail, BOSS URSSAF) & Règles Anti-Redressement
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Légifrance & BOSS à jour
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Chaque montant, chaque pourcentage et chaque exonération proposés dans ce dossier reposent sur un article de loi en vigueur ou une règle administrative opposable à l'administration fiscale et à l'URSSAF. 
          Consultez ci-dessous les textes intégraux, leurs applications chiffrées pour Nelly et la checklist pour votre expert-comptable.
        </p>
      </div>

      {/* Checklist Anti-Redressement */}
      <UrssafSafeguardsChecklist />

      {/* Liste des Articles et Jurisprudences */}
      <LegalArticlesList />

    </div>
  );
};

