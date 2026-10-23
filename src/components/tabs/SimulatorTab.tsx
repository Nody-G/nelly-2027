import React from 'react';
import { FiscalParameters } from '../../types/fiscal';
import { runAllScenarios } from '../../engine/scenarioEngine';
import { ControlsPanel } from '../simulator/ControlsPanel';
import { ScenarioCard } from '../simulator/ScenarioCard';
import { DailyExpensesTable } from '../simulator/DailyExpensesTable';
import { SensitivityChart } from '../simulator/SensitivityChart';
import { Sparkles } from 'lucide-react';

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

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Bandeau guide des infobulles */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-indigo-950 shadow-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>
            <strong>Simulation dynamique :</strong> Modifiez les curseurs à gauche pour recalculer en temps réel les 4 options politiques (Continuité, NFP/LFI, RN, Droite).
            Toutes les règles fiscales (CGI, BOSS, barèmes 2026-2027) sont strictement appliquées.
          </span>
        </div>
        <span className="text-[11px] font-bold text-indigo-700 bg-white px-2 py-0.5 rounded-full border border-indigo-200">
          Garde alternée 2 filles (5 & 11 ans)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* COLONNE GAUCHE : CURSEURS (4 colonnes) */}
        <div className="lg:col-span-4">
          <ControlsPanel 
            params={params}
            onChange={onChangeParams}
            onReset={onResetParams}
          />
        </div>

        {/* COLONNE DROITE : LES SCÉNARIOS COMPARÉS EN DIRECT (8 colonnes) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Bloc 1 : Continuité */}
            <ScenarioCard 
              title="1. Continuité / Statu Quo"
              badge="Bloc 1 • Centre"
              subtitle="PFU 31,4%, barème IR 5 tranches, retraite 64 ans"
              passive={scenarios.continuite.passive}
              optimized={scenarios.continuite.optimized}
              themeColor="sky"
              aidsNote="Tarif plein partout à Pélissanne (0 € aide)"
            />

            {/* Bloc 2 : LFI / NFP */}
            <ScenarioCard 
              title="2. Nouveau Front Populaire / LFI"
              badge="Bloc 2 • Gauche"
              subtitle="Fin PFU, IR 14 tranches, gratuités & retraite 60 ans"
              passive={scenarios.lfi.passive}
              optimized={scenarios.lfi.optimized}
              themeColor="emerald"
              aidsNote="+3 590 € aides/an (Cantine, 100% Sécu) + Études 1 063€/m"
            />

            {/* Bloc 3 : RN */}
            <ScenarioCard 
              title="3. Rassemblement National"
              badge="Bloc 3 • Droite Nat."
              subtitle="Maintien PFU, TVA 5,5% énergie, part 2e enfant"
              passive={scenarios.rn.passive}
              optimized={scenarios.rn.optimized}
              themeColor="amber"
              aidsNote="+640 € TVA 5,5% énergie/carburants"
            />

            {/* Bloc 4 : Droite Républicaine */}
            <ScenarioCard 
              title="4. Droite Républicaine"
              badge="Bloc 4 • Pro-Entreprise"
              subtitle="Baisse charges TPE, exonération donations 200k€"
              passive={scenarios.droite.passive}
              optimized={scenarios.droite.optimized}
              themeColor="indigo"
              aidsNote="Climat pro-investisseurs locatifs"
            />

          </div>

          {/* Graphique de sensibilité */}
          <SensitivityChart scenarios={scenarios} />

          {/* Tableau croisé des frais quotidiens */}
          <DailyExpensesTable />

        </div>

      </div>

    </div>
  );
};
