import React, { useState } from 'react';
import { FiscalParameters } from '../../types/fiscal';
import { runAllScenarios } from '../../engine/scenarioEngine';
import { calculateMonthlyMortgagePayment } from '../../engine/taxEngine';
import { ControlsPanel } from '../simulator/ControlsPanel';
import { ScenarioCard } from '../simulator/ScenarioCard';
import { DailyExpensesTable } from '../simulator/DailyExpensesTable';
import { SensitivityChart } from '../simulator/SensitivityChart';
import { LayoutGrid, Receipt, Landmark, Home, ArrowRight } from 'lucide-react';

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
  const [rightView, setRightView] = useState<'CARDS' | 'COST_OF_LIVING'>('CARDS');
  const scenarios = runAllScenarios(params);

  const monthlyLoan = Math.round(
    calculateMonthlyMortgagePayment(params.loanAmount || 260000, params.mortgageInterestRate || 3.85, 20)
  );
  const monthlyAt37 = Math.round(calculateMonthlyMortgagePayment(params.loanAmount || 260000, 3.7, 20));
  const monthlyAt40 = Math.round(calculateMonthlyMortgagePayment(params.loanAmount || 260000, 4.0, 20));

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* Bandeau Synthèse Opération Immobilière & Revenus 2025 (ultra-clair) */}
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
            Prêt 260 000 € ({params.mortgageInterestRate.toFixed(2)} %)
          </span>
          <div className="text-sm font-black text-slate-900 mt-0.5">
            {monthlyLoan.toLocaleString('fr-FR')} € / mois (20 ans)
          </div>
          <div className="text-[11px] text-amber-900">
            Fourchette 3,7% ({monthlyAt37} €) à 4,0% ({monthlyAt40} €)
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* COLONNE GAUCHE : CURSEURS (4 colonnes) */}
        <div className="lg:col-span-4">
          <ControlsPanel
            params={params}
            onChange={onChangeParams}
            onReset={onResetParams}
          />
        </div>

        {/* COLONNE DROITE : NAVIGATION ÉPURÉE EN 2 VUES SANS DÉFILEMENT INFINI (8 colonnes) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Sélecteur de vue à droite */}
          <div className="bg-white p-2 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-2 shadow-xs">
            <div className="flex flex-wrap gap-1.5 text-xs">
              <button
                type="button"
                onClick={() => setRightView('CARDS')}
                className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  rightView === 'CARDS'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>1. Comparatif des 4 Blocs Politiques</span>
              </button>

              <button
                type="button"
                onClick={() => setRightView('COST_OF_LIVING')}
                className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  rightView === 'COST_OF_LIVING'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Receipt className="w-4 h-4" />
                <span>2. Coût de la Vie (8 Postes) & Graphique</span>
              </button>
            </div>

            <span className="text-[11px] font-semibold text-slate-500 px-2 hidden sm:inline">
              Garde alternée 50/50 • 1,50 part QF (1,75 sous RN)
            </span>
          </div>

          {rightView === 'CARDS' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Bloc 1 : Continuité */}
              <ScenarioCard
                title="1. Continuité / Statu Quo"
                badge="Bloc 1 • Centre"
                subtitle="PFU 31,4%, barème IR 5 tranches, retraite 64 ans"
                passive={scenarios.continuite.passive}
                optimized={scenarios.continuite.optimized}
                themeColor="sky"
                aidsNote="Tarif plein partout à Pélissanne (0 € aide, 0 € CAF)"
              />

              {/* Bloc 2 : LFI / NFP */}
              <ScenarioCard
                title="2. Nouveau Front Populaire / LFI"
                badge="Bloc 2 • Gauche"
                subtitle="Fin PFU, IR 14 tranches, gratuités & retraite 60 ans"
                passive={scenarios.lfi.passive}
                optimized={scenarios.lfi.optimized}
                themeColor="emerald"
                aidsNote="+3 987 €/an (gratuités cantine/100% Sécu + 600 € CAF) + Études 1 063€/m"
              />

              {/* Bloc 3 : RN */}
              <ScenarioCard
                title="3. Rassemblement National"
                badge="Bloc 3 • Droite Nat."
                subtitle="Maintien PFU, TVA 5,5% énergie, part 2e enfant (1,75 pt)"
                passive={scenarios.rn.passive}
                optimized={scenarios.rn.optimized}
                themeColor="amber"
                aidsNote="+1 730 €/an (+650 € TVA 5,5% énergie/carburant + 1 080 € CAF universelle)"
              />

              {/* Bloc 4 : Droite Républicaine */}
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
          ) : (
            <div className="space-y-6">
              <DailyExpensesTable />
              <SensitivityChart scenarios={scenarios} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
