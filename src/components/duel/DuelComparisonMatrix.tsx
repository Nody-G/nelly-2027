import React, { useState } from 'react';
import { detailedPolicyComparisons, PolicyComparisonPoint } from '../../data/politicalDeepDive';
import { Scale, CheckCircle2, AlertTriangle, BookOpen, ShieldCheck, Filter, FileText, ExternalLink } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';
import { useLawModal } from '../../context/LawContext';

export const DuelComparisonMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');

  const categories = [
    'Toutes',
    'Fiscalité & Capital',
    'Vie Quotidienne & Enfants',
    'Bien Commun & Cadre de Vie',
    "Immobilier & Agence Nell'Immo",
    'Transmission & Retraite'
  ];

  const filteredPoints = selectedCategory === 'Toutes'
    ? detailedPolicyComparisons
    : detailedPolicyComparisons.filter(p => p.category === selectedCategory);

  const getFeasibilityBadge = (prob: string) => {
    if (prob.startsWith('Haute')) {
      return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    }
    if (prob.startsWith('Moyenne')) {
      return 'bg-amber-100 text-amber-800 border-amber-300';
    }
    return 'bg-rose-100 text-rose-800 border-rose-300';
  };

  return (
    <div className="space-y-4">
      {/* Filtres de catégorie */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        <span className="font-bold text-slate-500 uppercase text-[10px] flex items-center gap-1 shrink-0 mr-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Filtrer par thème :</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille comparative point par point */}
      <div className="space-y-4">
        {filteredPoints.map((point, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Titre du point */}
            <div className="bg-slate-900 text-white px-5 py-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/30 text-indigo-300 px-2 py-0.5 rounded border border-indigo-400/30">
                  {point.category}
                </span>
                <h3 className="font-extrabold text-sm sm:text-base text-white">
                  {point.title}
                </h3>
              </div>
              <span className="text-[11px] text-slate-400">Comparaison Impartiale & Sourcée</span>
            </div>

            {/* Deux colonnes : LFI vs RN */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-xs">
              
              {/* COLONNE LFI / NFP */}
              <div className="p-5 bg-emerald-50/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full font-bold text-xs bg-emerald-700 text-white">
                      Projet LFI / Nouveau Front Populaire
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getFeasibilityBadge(point.lfiProposal.feasibilityProbability)}`}>
                      Faisabilité : {point.lfiProposal.feasibilityProbability}
                    </span>
                  </div>

                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm">
                    {point.lfiProposal.measure}
                  </div>

                  {/* Pourquoi du comment */}
                  <div className="p-2.5 rounded-xl bg-white border border-emerald-100 space-y-1">
                    <div className="font-bold text-emerald-950 text-[11px] uppercase flex items-center gap-1">
                      <Scale className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Le pourquoi du comment (Mécanisme) :</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      {point.lfiProposal.whyAndHow}
                    </p>
                  </div>

                  {/* Impact chiffré pour Nelly */}
                  <div className="p-2.5 rounded-xl bg-emerald-100/70 border border-emerald-300 space-y-1">
                    <div className="font-bold text-emerald-950 text-[11px] uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Impact chiffré pour Nelly Fernandez & ses filles :</span>
                    </div>
                    <p className="text-emerald-950 font-medium leading-relaxed text-[11px]">
                      {point.lfiProposal.concreteEuroImpactNelly}
                    </p>
                  </div>

                  {/* Risque ou angle mort */}
                  <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-950 text-[11px] leading-snug">
                    <strong>Point de vigilance / Risque :</strong> {point.lfiProposal.riskOrDrawback}
                  </div>
                </div>

                {/* Source officielle & Vecteur juridique cliquables */}
                <div className="pt-2 border-t border-slate-200/80 text-[10px] text-slate-500 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div className="flex items-center gap-1 font-mono text-slate-700">
                      <FileText className="w-3 h-3 text-emerald-600 shrink-0" />
                      <strong>Source officielle :</strong>
                      <span className="text-slate-600 truncate max-w-[200px]">{point.lfiProposal.programSource}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <strong>Vecteur juridique :</strong>
                    <LawBadge article={point.lfiProposal.legalInstrument} />
                  </div>
                  <div className="text-slate-400 italic leading-snug">{point.lfiProposal.feasibilityExplanation}</div>
                </div>
              </div>

              {/* COLONNE RN */}
              <div className="p-5 bg-amber-50/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full font-bold text-xs bg-slate-900 text-amber-300">
                      Projet Rassemblement National
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getFeasibilityBadge(point.rnProposal.feasibilityProbability)}`}>
                      Faisabilité : {point.rnProposal.feasibilityProbability}
                    </span>
                  </div>

                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm">
                    {point.rnProposal.measure}
                  </div>

                  {/* Pourquoi du comment */}
                  <div className="p-2.5 rounded-xl bg-white border border-amber-100 space-y-1">
                    <div className="font-bold text-amber-950 text-[11px] uppercase flex items-center gap-1">
                      <Scale className="w-3.5 h-3.5 text-amber-700" />
                      <span>Le pourquoi du comment (Mécanisme) :</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      {point.rnProposal.whyAndHow}
                    </p>
                  </div>

                  {/* Impact chiffré pour Nelly */}
                  <div className="p-2.5 rounded-xl bg-amber-100/70 border border-amber-300 space-y-1">
                    <div className="font-bold text-amber-950 text-[11px] uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                      <span>Impact chiffré pour Nelly Fernandez & ses filles :</span>
                    </div>
                    <p className="text-amber-950 font-medium leading-relaxed text-[11px]">
                      {point.rnProposal.concreteEuroImpactNelly}
                    </p>
                  </div>

                  {/* Risque ou angle mort */}
                  <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-950 text-[11px] leading-snug">
                    <strong>Point de vigilance / Risque :</strong> {point.rnProposal.riskOrDrawback}
                  </div>
                </div>

                {/* Source officielle & Vecteur juridique cliquables */}
                <div className="pt-2 border-t border-slate-200/80 text-[10px] text-slate-500 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div className="flex items-center gap-1 font-mono text-slate-700">
                      <FileText className="w-3 h-3 text-amber-700 shrink-0" />
                      <strong>Source officielle :</strong>
                      <span className="text-slate-600 truncate max-w-[200px]">{point.rnProposal.programSource}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <strong>Vecteur juridique :</strong>
                    <LawBadge article={point.rnProposal.legalInstrument} />
                  </div>
                  <div className="text-slate-400 italic leading-snug">{point.rnProposal.feasibilityExplanation}</div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

