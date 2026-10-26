import React from 'react';
import { Scale, MapPin, Home, Landmark } from 'lucide-react';
import { CalculationViewMode } from '../../types/fiscal';

interface HeaderProps {
  gainContinuité: number;
  gainLFI: number;
  gainRN: number;
  viewMode: CalculationViewMode;
  onToggleViewMode?: (mode: CalculationViewMode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  gainContinuité,
  gainLFI,
  gainRN,
  viewMode,
  onToggleViewMode,
}) => {
  const formatEuro = (val: number) => {
    const sign = val >= 0 ? '+' : '';
    return `${sign}${Math.round(val).toLocaleString('fr-FR')} €`;
  };

  return (
    <header className="no-print bg-slate-950 text-white py-4 px-4 sm:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        
        {/* Bloc Identité & Données Réelles 2025/2026 épuré */}
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0">
            <Scale className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white">
                Nell'Immo SASU • Nelly Fernandez
              </h1>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-indigo-400" />
                Pélissanne (13330) • 2 Filles (5 & 11 ans)
              </span>
            </div>

            {/* Piliers chiffrés 2025/2026 ultra-lisibles */}
            <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-indigo-950/90 text-indigo-200 border border-indigo-800/80 font-medium">
                <strong>2025 :</strong> 40 000 € revenu + 20 000 € dividendes (60k€)
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/90 text-emerald-200 border border-emerald-800/80 font-medium flex items-center gap-1">
                <Home className="w-3 h-3 text-emerald-400" />
                <strong>Loyer Nell'Immo :</strong> 400 €/m (locataire actuel) → 650 €/m (nouvelle maison)
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-950/90 text-amber-200 border border-amber-800/80 font-medium flex items-center gap-1">
                <Landmark className="w-3 h-3 text-amber-400" />
                <strong>Achat :</strong> 305 000 € + 23 500 € notaire • <strong>Prêt 260 000 €</strong> (3,7 % - 4,0 %)
              </span>
            </div>
          </div>
        </div>

        {/* Sélecteur rapide de vue + 3 KPIs directs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          {onToggleViewMode && (
            <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 flex items-center text-[11px] font-bold">
              <button
                type="button"
                onClick={() => onToggleViewMode('recurring')}
                className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'recurring'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Gain Récurrent / an
              </button>
              <button
                type="button"
                onClick={() => onToggleViewMode('firstYear')}
                className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'firstYear'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Année 1 (Achat)
              </button>
            </div>
          )}

          <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-sky-400 font-bold">Continuité</div>
              <div className="text-sm sm:text-base font-black text-sky-400">{formatEuro(gainContinuité)}</div>
            </div>
            <div className="border-x border-slate-800 px-3">
              <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">LFI 2027</div>
              <div className="text-sm sm:text-base font-black text-emerald-400">{formatEuro(gainLFI)}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">RN 2027</div>
              <div className="text-sm sm:text-base font-black text-amber-400">{formatEuro(gainRN)}</div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};
