import React from 'react';
import { FiscalParameters } from '../../types/fiscal';
import { runAllScenarios } from '../../engine/scenarioEngine';
import { calculateMonthlyMortgagePayment } from '../../engine/taxEngine';
import { computeFullCostOfLivingBreakdown } from '../../engine/budgetEngine';
import { ControlsPanel } from '../simulator/ControlsPanel';
import { ScenarioCard } from '../simulator/ScenarioCard';
import { Landmark, Home, ArrowRight, Receipt } from 'lucide-react';

interface SimulatorTabProps {
  params: FiscalParameters;
  onChangeParams: (updated: Partial<FiscalParameters>) => void;
  onResetParams: () => void;
}

export const SimulatorTab: React.FC<SimulatorTabProps> = ({
  params,
  onChangeParams,
  onResetParams,
}) => {
  const scenarios = runAllScenarios(params);
  const duration = params.loanDurationYears || 25;

  const monthlyLoan = Math.round(
    calculateMonthlyMortgagePayment(params.loanAmount || 260000, params.mortgageInterestRate || 3.85, duration)
  );
  const monthlyAt37 = Math.round(calculateMonthlyMortgagePayment(params.loanAmount || 260000, 3.7, duration));
  const monthlyAt40 = Math.round(calculateMonthlyMortgagePayment(params.loanAmount || 260000, 4.0, duration));

  const costItems = computeFullCostOfLivingBreakdown();
  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* 1. Bandeau Synthèse Opération Immobilière sur 25 ans & Revenus 2025 */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100">
          <span className="text-[10px] font-bold uppercase text-indigo-600 block">Revenus Réels 2025</span>
          <div className="text-sm font-black text-slate-900 mt-0.5">
            {params.totalRevenue.toLocaleString('fr-FR')} € / an
          </div>
          <div className="text-[11px] text-slate-600">
            {Math.max(0, params.totalRevenue - params.dividendsGross).toLocaleString('fr-FR')} € salaire + {params.dividendsGross.toLocaleString('fr-FR')} € dividendes
          </div>
        </div>

        <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
          <span className="text-[10px] font-bold uppercase text-amber-800 flex items-center gap-1">
            <Landmark className="w-3 h-3" />
            Prêt 260 000 € sur 25 ans ({params.mortgageInterestRate.toFixed(2)} %)
          </span>
          <div className="text-sm font-black text-slate-900 mt-0.5">
            {monthlyLoan.toLocaleString('fr-FR')} € / mois (25 ans)
          </div>
          <div className="text-[11px] text-amber-900">
            Oscille de 3,7% (<strong>{monthlyAt37} €/m</strong>) à 4,0% (<strong>{monthlyAt40} €/m</strong>)
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-[10px] font-bold uppercase text-slate-500 block">Coût Acquisition Pélissanne</span>
          <div className="text-sm font-black text-slate-900 mt-0.5">
            328 500 € (Tout inclus)
          </div>
          <div className="text-[11px] text-slate-600">
            Maison 305 000 € + <strong>23 500 € frais de notaire</strong>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
          <span className="text-[10px] font-bold uppercase text-emerald-800 flex items-center gap-1">
            <Home className="w-3 h-3" />
            Loyer Pro Facturé à Nell'Immo
          </span>
          <div className="text-sm font-black text-emerald-900 mt-0.5 flex items-center gap-1">
            <span>400 €/m</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            <span>{params.homeOfficeRentMonthly} €/m + 100 € ch.</span>
          </div>
          <div className="text-[11px] text-emerald-800">
            Maison louée actuelle → Nouvelle maison 305k€
          </div>
        </div>
      </div>

      {/* 2. Simulateur Interactif : Curseurs à gauche (4 col) + 4 Scénarios à droite (8 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-4">
          <ControlsPanel
            params={params}
            onChange={onChangeParams}
            onReset={onResetParams}
          />
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ScenarioCard
            title="1. Continuité / Statu Quo"
            badge="Bloc 1 • Centre"
            subtitle="PFU 31,4%, barème IR 5 tranches, retraite 64 ans"
            passive={scenarios.continuite.passive}
            optimized={scenarios.continuite.optimized}
            themeColor="sky"
            aidsNote="Tarif plein partout à Pélissanne (0 € aide, 0 € CAF)"
          />

          <ScenarioCard
            title="2. Nouveau Front Populaire / LFI"
            badge="Bloc 2 • Gauche"
            subtitle="Fin PFU, IR 14 tranches, gratuités & retraite 60 ans"
            passive={scenarios.lfi.passive}
            optimized={scenarios.lfi.optimized}
            themeColor="emerald"
            aidsNote="+3 987 €/an (gratuités cantine/100% Sécu + 600 € CAF) + Études 1 063€/m"
          />

          <ScenarioCard
            title="3. Rassemblement National"
            badge="Bloc 3 • Droite Nat."
            subtitle="Maintien PFU, TVA 5,5% énergie, part 2e enfant (1,75 pt)"
            passive={scenarios.rn.passive}
            optimized={scenarios.rn.optimized}
            themeColor="amber"
            aidsNote="+1 730 €/an (+650 € TVA 5,5% énergie/carburant + 1 080 € CAF universelle)"
          />

          <ScenarioCard
            title="4. Droite Républicaine"
            badge="Bloc 4 • Pro-Entreprise"
            subtitle="Plafond QF relevé à 2 500 €, baisse charges TPE, donations 200k€"
            passive={scenarios.droite.passive}
            optimized={scenarios.droite.optimized}
            themeColor="indigo"
            aidsNote="+350 €/an + Plafond QF relevé + Climat investisseurs"
          />
        </div>
      </div>

      {/* 3. Tableau Synthétique Direct des 8 Postes du Coût de la Vie à Pélissanne (sans sous-onglets cachés) */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Receipt className="w-5 h-5 text-indigo-600" />
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                Détail des 8 Postes du Coût de la Vie à Pélissanne (incluant Prêt 260 000 € sur 25 ans)
              </h3>
              <p className="text-xs text-slate-500">
                Comparatif annuel complet pour Nelly et ses 2 filles (5 & 11 ans) en garde alternée 50/50.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
            Sur 25 ans : -204 €/mois (-2 450 €/an) vs 20 ans
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs min-w-[720px]">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 uppercase text-[10px] bg-slate-50">
                <th className="py-2.5 px-3">Poste de Dépense Réelle (Pélissanne)</th>
                <th className="py-2.5 px-3 text-right text-sky-700">Continuité</th>
                <th className="py-2.5 px-3 text-right text-emerald-700">LFI / NFP</th>
                <th className="py-2.5 px-3 text-right text-amber-700">RN</th>
                <th className="py-2.5 px-3 text-right text-indigo-700">Droite</th>
                <th className="py-2.5 px-3">Explication & Effet Croisé Nell'Immo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {costItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70">
                  <td className="py-2.5 px-3">
                    <div className="font-bold text-slate-900">{item.category}</div>
                    <div className="text-[11px] text-slate-500">{item.label}</div>
                  </td>
                  <td className="py-2.5 px-3 text-right font-semibold text-slate-700">{formatEuro(item.continuiteCost)}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-emerald-700 bg-emerald-50/30">{formatEuro(item.lfiCost)}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-amber-800 bg-amber-50/30">{formatEuro(item.rnCost)}</td>
                  <td className="py-2.5 px-3 text-right font-semibold text-indigo-700">{formatEuro(item.droiteCost)}</td>
                  <td className="py-2.5 px-3 text-[11px] text-slate-600 max-w-xs leading-snug">
                    {item.id === 'housing_mortgage'
                      ? `Mensualité sur 25 ans : ${monthlyLoan} €/m (de ${monthlyAt37} € à 3,7% à ${monthlyAt40} € à 4,0%). Le bail pro (650€ + 100€) rembourse 9 000 €/an à 0 € d'impôt.`
                      : item.lfiCost < item.continuiteCost
                      ? `LFI : ${item.lfiWhy}`
                      : item.rnWhy}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-slate-900 text-white font-bold text-xs">
                <td className="py-3 px-3 rounded-bl-xl">TOTAL COÛT DE LA VIE COMPLET / AN</td>
                <td className="py-3 px-3 text-right text-sky-300">
                  {formatEuro(scenarios.continuite.optimized.fullHouseholdCostOfLiving)}
                </td>
                <td className="py-3 px-3 text-right text-emerald-400">
                  {formatEuro(scenarios.lfi.optimized.fullHouseholdCostOfLiving)}
                </td>
                <td className="py-3 px-3 text-right text-amber-300">
                  {formatEuro(scenarios.rn.optimized.fullHouseholdCostOfLiving)}
                </td>
                <td className="py-3 px-3 text-right text-indigo-300">
                  {formatEuro(scenarios.droite.optimized.fullHouseholdCostOfLiving)}
                </td>
                <td className="py-3 px-3 rounded-br-xl text-[11px] text-slate-300 font-normal">
                  Épargne libre (Optimisé) : <strong className="text-emerald-300">{formatEuro(scenarios.lfi.optimized.disposableSavingsCapacity)} (LFI)</strong> • <strong className="text-amber-300">{formatEuro(scenarios.rn.optimized.disposableSavingsCapacity)} (RN)</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
