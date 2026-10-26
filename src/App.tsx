import React, { useState } from 'react';
import { TabId } from './types';
import { FiscalParameters } from './types/fiscal';
import { initialFiscalParameters } from './data/nelliProfile';
import { runAllScenarios } from './engine/scenarioEngine';
import { Header } from './components/common/Header';
import { Navigation } from './components/common/Navigation';
import { LawProvider } from './context/LawContext';
import { SimulatorTab } from './components/tabs/SimulatorTab';
import { OptimizationTab } from './components/tabs/OptimizationTab';
import { DaughtersTab } from './components/tabs/DaughtersTab';
import { VotingGuide2027Tab } from './components/tabs/VotingGuide2027Tab';
import { ExportReportTab } from './components/tabs/ExportReportTab';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('simulator');
  const [params, setParams] = useState<FiscalParameters>(initialFiscalParameters);

  const scenarios = runAllScenarios(params);

  const handleChangeParams = (updated: Partial<FiscalParameters>) => {
    setParams((prev) => ({ ...prev, ...updated }));
  };

  const handleResetParams = () => {
    setParams(initialFiscalParameters);
  };

  return (
    <LawProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
        {/* En-tête Global Exécutif (masqué à l'impression) */}
        <Header
          gainContinuité={scenarios.continuite.optimized.netGainVsReferencePassive}
          gainLFI={scenarios.lfi.optimized.netGainVsReferencePassive}
          gainRN={scenarios.rn.optimized.netGainVsReferencePassive}
          viewMode={params.viewMode}
          onToggleViewMode={(mode) => handleChangeParams({ viewMode: mode })}
        />

        {/* Barre de navigation sticky épurée (masquée à l'impression) */}
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Contenu principal à l'écran */}
        <main className="no-print flex-1 max-w-7xl w-full mx-auto px-3 sm:px-8 py-6">
          {activeTab === 'simulator' && (
            <SimulatorTab
              params={params}
              onChangeParams={handleChangeParams}
              onResetParams={handleResetParams}
            />
          )}

          {activeTab === 'optimization' && <OptimizationTab />}

          {activeTab === 'daughters' && <DaughtersTab />}

          {activeTab === 'voting' && <VotingGuide2027Tab params={params} />}
        </main>

        {/* Version dédiée à l'impression PDF (déclenchée par le bouton PDF de l'en-tête) */}
        <div className="hidden print:block max-w-7xl w-full mx-auto p-4">
          <ExportReportTab params={params} />
        </div>

        {/* Pied de page avec sources vérifiées (masqué à l'impression) */}
        <footer className="no-print bg-white border-t border-slate-200 py-5 px-4 sm:px-8 mt-10 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>
                <strong>Sources vérifiées :</strong> CGI (Art. 28, 31, 145, 194-II, 199 sexdecies, 200 A, 244 quater F, 669, 779), Code du travail, BOSS URSSAF 2026, Ville de Pélissanne, Banque de France.
              </span>
            </div>
            <span className="shrink-0 font-medium">
              Dossier Nell'Immo • Nelly Fernandez • Pélissanne (13330)
            </span>
          </div>
        </footer>
      </div>
    </LawProvider>
  );
};

export default App;
