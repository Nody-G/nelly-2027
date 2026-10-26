import React, { useState } from 'react';
import {
  detailedPolicyComparisons,
  systemicCrossInteractions,
  SystemicCrossInteraction,
} from '../../data/politicalDeepDive';
import { Scale, CheckCircle2, Filter, FileText, GitCommitHorizontal, ShieldCheck } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';

export const DuelComparisonMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');
  const [showSystemicCross, setShowSystemicCross] = useState<boolean>(true);

  const categories = [
    'Toutes',
    'Fiscalité & Capital',
    'Vie Quotidienne & Enfants',
    'Bien Commun & Cadre de Vie',
    "Immobilier & Agence Nell'Immo",
    'Transmission & Retraite',
  ];

  const filteredPoints =
    selectedCategory === 'Toutes'
      ? detailedPolicyComparisons
      : detailedPolicyComparisons.filter((p) => p.category === selectedCategory);

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
    <div className="space-y-6">
      {/* SECTION 1 : LES 6 CROISEMENTS SYSTÉMIQUES MULTI-FACTEURS (EFFETS DE SECOND TOUR DOCUMENTÉS) */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded border border-amber-400/30">
              Analyse Systémique de Second Tour • Pourquoi ces estimations ?
            </span>
            <h3 className="text-sm sm:text-base font-extrabold text-white mt-1">
              Les 6 Croisements Profonds entre Mesures Partisanes, Macroéconomie (OAT), Mairie & Nell'Immo
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setShowSystemicCross(!showSystemicCross)}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all"
          >
            {showSystemicCross ? 'Masquer les 6 croisements' : 'Afficher les 6 croisements systémiques'}
          </button>
        </div>

        {showSystemicCross && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
            {systemicCrossInteractions.map((cross: SystemicCrossInteraction) => (
              <div
                key={cross.id}
                className="rounded-xl bg-slate-800/90 border border-slate-700 p-4 space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase text-indigo-300 flex items-center gap-1">
                    <GitCommitHorizontal className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{cross.axesCroises}</span>
                  </div>
                  <h4 className="font-extrabold text-white text-xs sm:text-sm leading-snug">
                    {cross.title}
                  </h4>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    <strong className="text-amber-300">Mécanisme & Justification :</strong> {cross.mechanismChain}
                  </p>

                  {/* Grille des 4 blocs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-[11px]">
                    <div className="p-2 rounded bg-slate-900/80 border border-sky-500/30">
                      <strong className="text-sky-300">1. Continuité :</strong>{' '}
                      <span className="text-slate-200">{cross.impactContinuite}</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/80 border border-emerald-500/30">
                      <strong className="text-emerald-300">2. NFP / LFI :</strong>{' '}
                      <span className="text-slate-200">{cross.impactLFI}</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/80 border border-amber-500/30">
                      <strong className="text-amber-300">3. RN :</strong>{' '}
                      <span className="text-slate-200">{cross.impactRN}</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/80 border border-indigo-500/30">
                      <strong className="text-indigo-300">4. Droite Répub. :</strong>{' '}
                      <span className="text-slate-200">{cross.impactDroite}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-700/80 space-y-1.5">
                  <div className="p-2 rounded-lg bg-emerald-950/70 border border-emerald-600/40 text-emerald-100 text-[11px]">
                    <strong className="text-emerald-300 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Parade patrimoniale pour Nelly :</span>
                    </strong>
                    <span>{cross.strategicParadeForNelly}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 italic">{cross.documentedProofAndSources}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

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

      {/* Grille comparative point par point (4 Blocs + Croisement) */}
      <div className="space-y-4">
        {filteredPoints.map((point, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Titre du point */}
            <div className="bg-slate-900 text-white px-5 py-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/30 text-indigo-300 px-2 py-0.5 rounded border border-indigo-400/30">
                  {point.category}
                </span>
                <h3 className="font-extrabold text-sm sm:text-base text-white">{point.title}</h3>
              </div>
              <span className="text-[11px] text-slate-400">Comparaison 4 Blocs & Croisement Documenté</span>
            </div>

            {/* Bandeau Référence Bloc 1 (Continuité) & Bloc 4 (Droite Républicaine) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-5 py-3 bg-slate-50 border-b border-slate-200 text-[11px]">
              <div className="p-2.5 rounded-xl bg-sky-50/70 border border-sky-200 text-slate-700">
                <strong className="text-sky-900 uppercase text-[10px] block mb-0.5">
                  1. Référence Continuité / Statu Quo (2026) :
                </strong>
                {point.continuiteSummary}
              </div>
              <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-200 text-slate-700">
                <strong className="text-indigo-900 uppercase text-[10px] block mb-0.5">
                  4. Alternative Droite Républicaine :
                </strong>
                {point.droiteSummary}
              </div>
            </div>

            {/* Deux colonnes : LFI vs RN */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-xs">
              {/* COLONNE LFI / NFP */}
              <div className="p-5 bg-emerald-50/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full font-bold text-xs bg-emerald-700 text-white">
                      2. Projet LFI / Nouveau Front Populaire
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getFeasibilityBadge(
                        point.lfiProposal.feasibilityProbability
                      )}`}
                    >
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
                    <p className="text-slate-600 leading-relaxed text-[11px]">{point.lfiProposal.whyAndHow}</p>
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
                      <span className="text-slate-600">{point.lfiProposal.programSource}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <strong>Vecteur juridique :</strong>
                    <LawBadge article={point.lfiProposal.legalInstrument} />
                  </div>
                  <div className="text-slate-400 italic leading-snug">
                    {point.lfiProposal.feasibilityExplanation}
                  </div>
                </div>
              </div>

              {/* COLONNE RN */}
              <div className="p-5 bg-amber-50/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full font-bold text-xs bg-slate-900 text-amber-300">
                      3. Projet Rassemblement National
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getFeasibilityBadge(
                        point.rnProposal.feasibilityProbability
                      )}`}
                    >
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
                    <p className="text-slate-600 leading-relaxed text-[11px]">{point.rnProposal.whyAndHow}</p>
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
                      <span className="text-slate-600">{point.rnProposal.programSource}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <strong>Vecteur juridique :</strong>
                    <LawBadge article={point.rnProposal.legalInstrument} />
                  </div>
                  <div className="text-slate-400 italic leading-snug">
                    {point.rnProposal.feasibilityExplanation}
                  </div>
                </div>
              </div>
            </div>

            {/* Pied de carte : Croisement Systémique Documenté */}
            <div className="px-5 py-3 bg-indigo-950 text-indigo-50 text-[11px] leading-relaxed border-t border-indigo-900">
              <strong className="text-amber-300 uppercase tracking-wide text-[10px] mr-1.5">
                Croisement Multi-Facteurs & Justification :
              </strong>
              {point.deepCrossMechanism}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
