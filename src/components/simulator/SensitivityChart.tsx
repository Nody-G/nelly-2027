import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';
import { ScenarioResult } from '../../types/simulation';

interface SensitivityChartProps {
  scenarios: {
    continuite: { passive: ScenarioResult; optimized: ScenarioResult };
    lfi: { passive: ScenarioResult; optimized: ScenarioResult };
    rn: { passive: ScenarioResult; optimized: ScenarioResult };
    droite: { passive: ScenarioResult; optimized: ScenarioResult };
  };
}

export const SensitivityChart: React.FC<SensitivityChartProps> = ({ scenarios }) => {
  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  const data = [
    {
      name: '1. Continuité',
      passive: scenarios.continuite.passive.netPurchasingPower,
      optimized: scenarios.continuite.optimized.netPurchasingPower,
      color: 'bg-sky-500',
      colorLight: 'bg-sky-200',
    },
    {
      name: '2. NFP / LFI',
      passive: scenarios.lfi.passive.netPurchasingPower,
      optimized: scenarios.lfi.optimized.netPurchasingPower,
      color: 'bg-emerald-500',
      colorLight: 'bg-emerald-200',
    },
    {
      name: '3. Rassemblement National',
      passive: scenarios.rn.passive.netPurchasingPower,
      optimized: scenarios.rn.optimized.netPurchasingPower,
      color: 'bg-amber-500',
      colorLight: 'bg-amber-200',
    },
    {
      name: '4. Droite Républicaine',
      passive: scenarios.droite.passive.netPurchasingPower,
      optimized: scenarios.droite.optimized.netPurchasingPower,
      color: 'bg-indigo-500',
      colorLight: 'bg-indigo-200',
    },
  ];

  const maxVal = Math.max(...data.flatMap(d => [d.passive, d.optimized]), 70000);

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase text-indigo-600">Visualisation Graphique</span>
          <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-indigo-600" />
            <span>Pouvoir d'Achat Net Réel Restant (Revenu - Impôts - Frais Filles + Aides)</span>
          </h3>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-slate-300"></span>
            <span className="text-slate-600">Passif (Sans changer)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-indigo-600"></span>
            <span className="text-indigo-900">Optimisé (Maison 305k€)</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-2">
        {data.map((item, idx) => {
          const pctPassive = Math.max(15, (item.passive / maxVal) * 100);
          const pctOptimized = Math.max(15, (item.optimized / maxVal) * 100);
          const gain = item.optimized - item.passive;

          return (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-800">
                <span>{item.name}</span>
                <span className="text-emerald-700">Gain stratégie : +{formatEuro(gain)} / an</span>
              </div>

              {/* Barre Passif */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-16 text-[10px] text-slate-500 font-medium shrink-0">Passif :</span>
                  <div className="flex-1 bg-slate-100 rounded-lg h-5 overflow-hidden flex items-center">
                    <div 
                      className="bg-slate-400 h-full rounded-lg transition-all duration-500 flex items-center justify-end pr-2 text-[10px] font-bold text-white"
                      style={{ width: `${pctPassive}%` }}
                    >
                      {formatEuro(item.passive)}
                    </div>
                  </div>
                </div>

                {/* Barre Optimisé */}
                <div className="flex items-center gap-2">
                  <span className="w-16 text-[10px] text-indigo-600 font-bold shrink-0">Optimisé :</span>
                  <div className="flex-1 bg-indigo-50 rounded-lg h-6 overflow-hidden flex items-center">
                    <div 
                      className={`${item.color} h-full rounded-lg transition-all duration-500 flex items-center justify-end pr-2 text-[11px] font-black text-white shadow-sm`}
                      style={{ width: `${pctOptimized}%` }}
                    >
                      {formatEuro(item.optimized)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
