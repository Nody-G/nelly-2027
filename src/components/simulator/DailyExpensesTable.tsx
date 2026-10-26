import React, { useState } from 'react';
import {
  getDetailedExpenseLines,
  DaughterExpenseBreakdown,
  computeFullCostOfLivingBreakdown,
  FullCostOfLivingItem,
  computeLifeHorizonProjections,
  LifeHorizonProjection,
} from '../../engine/budgetEngine';
import { Info, BookOpen, Home, CalendarClock, ChevronDown, ChevronUp, Scale } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';

type CostViewMode = 'targeted' | 'full_household' | 'life_horizons';

export const DailyExpensesTable: React.FC = () => {
  const [viewMode, setViewMode] = useState<CostViewMode>('targeted');
  const [expandedRow, setExpandedRow] = useState<string | null>('housing_mortgage');

  const linesContinuite = getDetailedExpenseLines('continuite');
  const linesLFI = getDetailedExpenseLines('nfp_lfi');
  const linesRN = getDetailedExpenseLines('rn');
  const linesDroite = getDetailedExpenseLines('droite');

  const fullCategories = computeFullCostOfLivingBreakdown();
  const lifeHorizons = computeLifeHorizonProjections();

  const formatEuro = (n: number, sign = false) => {
    const s = Math.round(n).toLocaleString('fr-FR') + ' €';
    if (sign && n > 0) return '+' + s;
    return s;
  };

  const totalCont = linesContinuite.reduce((acc: number, l: DaughterExpenseBreakdown) => acc + l.totalAnnual, 0);
  const totalLFI = linesLFI.reduce((acc: number, l: DaughterExpenseBreakdown) => acc + l.totalAnnual, 0);
  const totalRN = linesRN.reduce((acc: number, l: DaughterExpenseBreakdown) => acc + l.totalAnnual, 0);
  const totalDroite = linesDroite.reduce((acc: number, l: DaughterExpenseBreakdown) => acc + l.totalAnnual, 0);

  const fullTotalCont = fullCategories.reduce((acc, c) => acc + c.continuiteCost, 0);
  const fullTotalLFI = fullCategories.reduce((acc, c) => acc + c.lfiCost, 0);
  const fullTotalRN = fullCategories.reduce((acc, c) => acc + c.rnCost, 0);
  const fullTotalDroite = fullCategories.reduce((acc, c) => acc + c.droiteCost, 0);

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      {/* En-tête et sélecteur de vue */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase text-indigo-600 flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5" />
            Observatoire Documenté du Coût de la Vie & du Pouvoir d'Achat • Pélissanne (13330)
          </span>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
            Estimations Budgétaires, Croisements Macro-Politiques & Justification de chaque Chiffre
          </h3>
        </div>

        {/* Sélecteur 3 Vues */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setViewMode('targeted')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'targeted'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Frais Ciblés Filles & CAF (5 687 €)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('full_household')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'full_household'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>2. Coût de la Vie Complet (8 Postes • 36 677 €)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('life_horizons')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'life_horizons'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <CalendarClock className="w-3.5 h-3.5" />
            <span>3. Horizons de Vie (2026 → 2039)</span>
          </button>
        </div>
      </div>

      {/* VUE 1 : FRAIS CIBLÉS DES 2 FILLES + ÉNERGIE + CAF */}
      {viewMode === 'targeted' && (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs min-w-[780px]">
              <thead>
                <tr className="border-b-2 border-slate-200 text-slate-500 uppercase text-[10px] bg-slate-50">
                  <th className="py-2.5 px-3">Poste de dépense & Source</th>
                  <th className="py-2.5 px-3 text-sky-900 bg-sky-50/50">1. Continuité (Actuel)</th>
                  <th className="py-2.5 px-3 text-emerald-900 bg-emerald-50/50">2. Programme NFP / LFI</th>
                  <th className="py-2.5 px-3 text-amber-900 bg-amber-50/50">3. Programme RN</th>
                  <th className="py-2.5 px-3 text-indigo-900 bg-indigo-50/50">4. Droite Républicaine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {linesContinuite.map((line: DaughterExpenseBreakdown, idx: number) => {
                  const lfi = linesLFI[idx];
                  const rn = linesRN[idx];
                  const droite = linesDroite[idx];
                  const rowKey = `targeted_${idx}`;
                  const isOpen = expandedRow === rowKey;

                  return (
                    <React.Fragment key={idx}>
                      <tr
                        onClick={() => setExpandedRow(isOpen ? null : rowKey)}
                        className="hover:bg-slate-50/90 transition-colors cursor-pointer"
                      >
                        <td className="py-2.5 px-3 font-semibold text-slate-900">
                          <div className="flex items-center justify-between gap-1">
                            <span>{line.label}</span>
                            {isOpen ? (
                              <ChevronUp className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            )}
                          </div>
                          <div className="text-[10px] text-slate-400 font-normal mt-0.5">{line.sourceRef}</div>
                          {line.lawRef && (
                            <div className="mt-1">
                              <LawBadge article={line.lawRef} />
                            </div>
                          )}
                        </td>

                        {/* Continuité */}
                        <td className="py-2.5 px-3 bg-sky-50/20">
                          <span className="font-bold text-slate-900">{formatEuro(line.totalAnnual)} / an</span>
                          <div className="text-[11px] text-slate-500 mt-0.5">{line.description}</div>
                        </td>

                        {/* LFI */}
                        <td className="py-2.5 px-3 bg-emerald-50/20">
                          <span className="font-bold text-emerald-800">{formatEuro(lfi.totalAnnual)} / an</span>
                          {line.totalAnnual - lfi.totalAnnual > 0 && (
                            <span className="ml-1 text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1 rounded">
                              Éco : +{formatEuro(line.totalAnnual - lfi.totalAnnual)}
                            </span>
                          )}
                          <div className="text-[11px] text-emerald-900 mt-0.5">{lfi.description}</div>
                        </td>

                        {/* RN */}
                        <td className="py-2.5 px-3 bg-amber-50/20">
                          <span className="font-bold text-amber-900">{formatEuro(rn.totalAnnual)} / an</span>
                          {line.totalAnnual - rn.totalAnnual > 0 && (
                            <span className="ml-1 text-[10px] font-bold text-amber-600 bg-amber-100 px-1 rounded">
                              Éco : +{formatEuro(line.totalAnnual - rn.totalAnnual)}
                            </span>
                          )}
                          <div className="text-[11px] text-slate-600 mt-0.5">{rn.description}</div>
                        </td>

                        {/* Droite */}
                        <td className="py-2.5 px-3 bg-indigo-50/20">
                          <span className="font-bold text-indigo-900">{formatEuro(droite.totalAnnual)} / an</span>
                          {line.totalAnnual - droite.totalAnnual > 0 && (
                            <span className="ml-1 text-[10px] font-bold text-indigo-600 bg-indigo-100 px-1 rounded">
                              Éco : +{formatEuro(line.totalAnnual - droite.totalAnnual)}
                            </span>
                          )}
                          <div className="text-[11px] text-slate-500 mt-0.5">{droite.description}</div>
                        </td>
                      </tr>

                      {/* Ligne documentée déroulante */}
                      {isOpen && (
                        <tr className="bg-indigo-50/40 border-l-4 border-indigo-500">
                          <td colSpan={5} className="p-3 text-[11px] text-slate-700 space-y-1.5">
                            <div>
                              <strong className="text-indigo-950">Pourquoi cette estimation (Méthodologie & Sources) :</strong>{' '}
                              {line.methodologyAndWhy}
                            </div>
                            <div className="text-indigo-900">
                              <strong>Croisement budgétaire & Effet de second tour :</strong> {line.crossImpactNote}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}

                {/* Ligne Allocations Familiales CAF */}
                <tr className="bg-emerald-50/40 font-semibold text-slate-800">
                  <td className="py-2.5 px-3">
                    <div className="font-bold text-slate-900">Allocations Familiales CAF (Part Nelly 50/50)</div>
                    <div className="text-[10px] text-slate-500 font-normal">Art. L521-1 CSS • Plafonds ressources 2026</div>
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="font-bold text-slate-600">0 € / an</span>
                    <div className="text-[10px] text-slate-500">Tranche 3 (70k€) divisée par 2 et neutralisée</div>
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="font-bold text-emerald-700">+600 € / an</span>
                    <div className="text-[10px] text-emerald-800">Ouverture dès le 1er enfant (part 50/50 modulée)</div>
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="font-bold text-amber-800">+1 080 € / an</span>
                    <div className="text-[10px] text-amber-900">Suppression modulation revenus (180 €/m × 50%)</div>
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="font-bold text-slate-600">0 € / an</span>
                    <div className="text-[10px] text-slate-500">Priorité donnée au relèvement du plafond QF (2 500 €)</div>
                  </td>
                </tr>

                {/* Total */}
                <tr className="bg-slate-100/90 font-black text-slate-900 text-xs border-t-2 border-slate-300">
                  <td className="py-3 px-3 uppercase tracking-wider">
                    TOTAL FRAIS CIBLÉS (NET D'ALLOCATIONS CAF)
                  </td>
                  <td className="py-3 px-3 text-sky-900 font-black">{formatEuro(totalCont)} / an</td>
                  <td className="py-3 px-3 text-emerald-700 font-black">
                    {formatEuro(totalLFI)} / an (-600 € CAF)
                    <span className="block text-[10px] font-bold text-emerald-600">
                      Gain pouvoir d'achat : +{formatEuro(totalCont - totalLFI + 600)} / an
                    </span>
                  </td>
                  <td className="py-3 px-3 text-amber-800 font-black">
                    {formatEuro(totalRN)} / an (-1 080 € CAF)
                    <span className="block text-[10px] font-bold text-amber-600">
                      Gain pouvoir d'achat : +{formatEuro(totalCont - totalRN + 1080)} / an
                    </span>
                  </td>
                  <td className="py-3 px-3 text-indigo-900 font-black">
                    {formatEuro(totalDroite)} / an
                    <span className="block text-[10px] font-bold text-indigo-600">
                      Gain pouvoir d'achat : +{formatEuro(totalCont - totalDroite)} / an
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-[11px] text-indigo-900 flex items-start gap-2">
            <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <span>
              <strong>Astuce interactive :</strong> Cliquez sur n'importe quelle ligne du tableau ci-dessus pour afficher sa <strong>documentation méthodologique complète</strong> (formule de calcul exacte, sources officielles Pélissanne/Ameli/CAF et croisement macro-budgétaire).
            </span>
          </div>
        </div>
      )}

      {/* VUE 2 : COÛT DE LA VIE COMPLET DU FOYER (8 POSTES À PÉLISSANNE) */}
      {viewMode === 'full_household' && (
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Pourquoi modéliser les 8 postes complets du coût de la vie ({formatEuro(fullTotalCont)}/an de base) ?</strong>{' '}
            Les 6 postes ciblés (5 687 €) ne représentent que 15,5 % des dépenses réelles de Nelly à Pélissanne. Or, les programmes politiques agissent aussi fortement sur les <strong>taux d'intérêt immobiliers (spread OAT 10 ans sur le crédit de la maison à 305 000 €)</strong>, la <strong>Taxe Foncière communale</strong>, l'<strong>alimentation (blocage des marges vs baisse TVA)</strong> et la <strong>mobilité périurbaine</strong>. Cliquez sur chaque poste pour lire la démonstration complète.
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs min-w-[780px]">
              <thead>
                <tr className="border-b-2 border-slate-200 text-slate-500 uppercase text-[10px] bg-slate-50">
                  <th className="py-2.5 px-3">Poste du Budget Foyer Pélissanne</th>
                  <th className="py-2.5 px-3 text-sky-900 bg-sky-50/50">1. Continuité</th>
                  <th className="py-2.5 px-3 text-emerald-900 bg-emerald-50/50">2. NFP / LFI</th>
                  <th className="py-2.5 px-3 text-amber-900 bg-amber-50/50">3. Programme RN</th>
                  <th className="py-2.5 px-3 text-indigo-900 bg-indigo-50/50">4. Droite Répub.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {fullCategories.map((cat: FullCostOfLivingItem) => {
                  const isOpen = expandedRow === cat.id;
                  return (
                    <React.Fragment key={cat.id}>
                      <tr
                        onClick={() => setExpandedRow(isOpen ? null : cat.id)}
                        className="hover:bg-slate-50/90 transition-colors cursor-pointer"
                      >
                        <td className="py-2.5 px-3 font-semibold text-slate-900">
                          <div className="flex items-center justify-between gap-1">
                            <div>
                              <span className="text-[10px] uppercase font-bold text-indigo-600 block">{cat.category}</span>
                              <span>{cat.label}</span>
                            </div>
                            {isOpen ? (
                              <ChevronUp className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            )}
                          </div>
                          <div className="text-[10px] text-slate-400 font-normal mt-0.5">{cat.sourceRef}</div>
                        </td>
                        <td className="py-2.5 px-3 bg-sky-50/20 font-bold text-slate-900">
                          {formatEuro(cat.continuiteCost)} / an
                          <span className="block text-[10px] font-normal text-slate-500">
                            ({formatEuro(cat.continuiteCost / 12)} / mois)
                          </span>
                        </td>
                        <td className="py-2.5 px-3 bg-emerald-50/20 font-bold text-emerald-900">
                          {formatEuro(cat.lfiCost)} / an
                          <span className="block text-[10px] font-semibold text-emerald-700">
                            {cat.lfiCost - cat.continuiteCost <= 0
                              ? `Éco : ${formatEuro(cat.continuiteCost - cat.lfiCost, true)}`
                              : `Surcoût : +${formatEuro(cat.lfiCost - cat.continuiteCost)}`}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 bg-amber-50/20 font-bold text-amber-900">
                          {formatEuro(cat.rnCost)} / an
                          <span className="block text-[10px] font-semibold text-amber-700">
                            {cat.rnCost - cat.continuiteCost <= 0
                              ? `Éco : ${formatEuro(cat.continuiteCost - cat.rnCost, true)}`
                              : `Surcoût : +${formatEuro(cat.rnCost - cat.continuiteCost)}`}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 bg-indigo-50/20 font-bold text-indigo-900">
                          {formatEuro(cat.droiteCost)} / an
                          <span className="block text-[10px] font-semibold text-indigo-700">
                            {cat.droiteCost - cat.continuiteCost <= 0
                              ? `Éco : ${formatEuro(cat.continuiteCost - cat.droiteCost, true)}`
                              : `Surcoût : +${formatEuro(cat.droiteCost - cat.continuiteCost)}`}
                          </span>
                        </td>
                      </tr>

                      {isOpen && (
                        <tr className="bg-indigo-50/40 border-l-4 border-indigo-600">
                          <td colSpan={5} className="p-3.5 text-[11px] text-slate-700 space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="font-extrabold text-indigo-950 uppercase tracking-wide text-[10px]">
                                Justification & Croisement Documenté — {cat.category}
                              </span>
                              {cat.lawRef && <LawBadge article={cat.lawRef} />}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              <div className="p-2 rounded bg-white border border-slate-200">
                                <strong className="text-sky-900">1. Continuité :</strong> {cat.continuiteWhy}
                              </div>
                              <div className="p-2 rounded bg-white border border-emerald-200">
                                <strong className="text-emerald-900">2. NFP / LFI :</strong> {cat.lfiWhy}
                              </div>
                              <div className="p-2 rounded bg-white border border-amber-200">
                                <strong className="text-amber-900">3. RN :</strong> {cat.rnWhy}
                              </div>
                              <div className="p-2 rounded bg-white border border-indigo-200">
                                <strong className="text-indigo-900">4. Droite Républicaine :</strong> {cat.droiteWhy}
                              </div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-indigo-950 text-indigo-50 text-[11px] leading-relaxed">
                              <strong className="text-amber-300">Croisement de Second Tour (Pourquoi cette réflexion) :</strong>{' '}
                              {cat.deepCrossReasoning}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}

                {/* Total Coût de la Vie Complet */}
                <tr className="bg-slate-100 font-black text-slate-900 text-xs border-t-2 border-slate-300">
                  <td className="py-3 px-3 uppercase">COÛT DE LA VIE COMPLET (8 POSTES CUMULÉS)</td>
                  <td className="py-3 px-3 text-sky-900">
                    {formatEuro(fullTotalCont)} / an
                    <span className="block text-[10px] font-normal text-slate-500">
                      ({formatEuro(fullTotalCont / 12)} / mois)
                    </span>
                  </td>
                  <td className="py-3 px-3 text-emerald-800">
                    {formatEuro(fullTotalLFI)} / an
                    <span className="block text-[10px] font-bold text-emerald-600">
                      Économie nette : +{formatEuro(fullTotalCont - fullTotalLFI)} / an
                    </span>
                  </td>
                  <td className="py-3 px-3 text-amber-800">
                    {formatEuro(fullTotalRN)} / an
                    <span className="block text-[10px] font-bold text-amber-600">
                      Économie nette : +{formatEuro(fullTotalCont - fullTotalRN)} / an
                    </span>
                  </td>
                  <td className="py-3 px-3 text-indigo-900">
                    {formatEuro(fullTotalDroite)} / an
                    <span className="block text-[10px] font-bold text-indigo-600">
                      Économie nette : +{formatEuro(fullTotalCont - fullTotalDroite)} / an
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VUE 3 : PROJECTIONS SUR 3 HORIZONS DE VIE (2026-2039) */}
      {viewMode === 'life_horizons' && (
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs text-indigo-950 leading-relaxed">
            <strong>Pourquoi projeter le pouvoir d'achat sur 3 horizons biologiques et scolaires (2026 → 2039) ?</strong>{' '}
            Un programme politique qui paraît défavorable à court terme (ou inversement) peut s'inverser radicalement lorsque l'aînée entre dans l'enseignement supérieur (2033) ou lorsque Nelly liquide sa retraite (60 ans vs 64 ans). Voici la trajectoire complète documentée.
          </div>

          <div className="grid grid-cols-1 gap-4">
            {lifeHorizons.map((h: LifeHorizonProjection) => (
              <div
                key={h.horizonId}
                className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                  <div>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-indigo-600 text-white">
                      {h.period}
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900 mt-1">{h.title}</h4>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    {h.daughtersAges}
                  </span>
                </div>

                {/* Pouvoir d'achat net annuel comparé (Passif vs Optimisé) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-white border border-sky-200 space-y-1">
                    <div className="text-[10px] font-bold uppercase text-sky-700">1. Continuité</div>
                    <div className="text-sm font-black text-slate-900">
                      Optimisé : {formatEuro(h.annualPurchasingPowerByBloc.continuite.optimized)}/an
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Passif : {formatEuro(h.annualPurchasingPowerByBloc.continuite.passive)}/an
                    </div>
                    <div className="text-[10px] text-sky-800 italic">
                      {h.annualPurchasingPowerByBloc.continuite.note}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-emerald-200 space-y-1">
                    <div className="text-[10px] font-bold uppercase text-emerald-700">2. NFP / LFI</div>
                    <div className="text-sm font-black text-emerald-900">
                      Optimisé : {formatEuro(h.annualPurchasingPowerByBloc.nfp_lfi.optimized)}/an
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Passif : {formatEuro(h.annualPurchasingPowerByBloc.nfp_lfi.passive)}/an
                    </div>
                    <div className="text-[10px] text-emerald-800 italic">
                      {h.annualPurchasingPowerByBloc.nfp_lfi.note}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200 space-y-1">
                    <div className="text-[10px] font-bold uppercase text-amber-700">3. Programme RN</div>
                    <div className="text-sm font-black text-amber-900">
                      Optimisé : {formatEuro(h.annualPurchasingPowerByBloc.rn.optimized)}/an
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Passif : {formatEuro(h.annualPurchasingPowerByBloc.rn.passive)}/an
                    </div>
                    <div className="text-[10px] text-amber-800 italic">
                      {h.annualPurchasingPowerByBloc.rn.note}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-indigo-200 space-y-1">
                    <div className="text-[10px] font-bold uppercase text-indigo-700">4. Droite Répub.</div>
                    <div className="text-sm font-black text-indigo-900">
                      Optimisé : {formatEuro(h.annualPurchasingPowerByBloc.droite.optimized)}/an
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Passif : {formatEuro(h.annualPurchasingPowerByBloc.droite.passive)}/an
                    </div>
                    <div className="text-[10px] text-indigo-800 italic">
                      {h.annualPurchasingPowerByBloc.droite.note}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-700 space-y-1.5 leading-relaxed">
                  <div>
                    <strong className="text-slate-900">Événements clés du cycle de vie :</strong> {h.keyLifeEvents}
                  </div>
                  <div>
                    <strong className="text-indigo-900">Pourquoi cette projection (Justification & Calcul) :</strong>{' '}
                    {h.documentedReasoning}
                  </div>
                  <div className="text-[10px] text-slate-400">Sources : {h.sourceRef}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
