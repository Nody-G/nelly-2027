import React from 'react';
import { Scale, MapPin, Home, Landmark, Printer } from 'lucide-react';
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
    <header className="no-print bg-slate-950 text-white py-3.5 px-4 sm:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        
        {/* Identité & Données Réelles 2025/2026 */}
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-sm sm:text-base font-black tracking-tight text-white">
                Nell'Immo SASU • Nelly Fernandez
              </h1>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-indigo-400" />
                Pélissanne • 2 Filles (5 & 11 ans)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-200 border border-indigo-800 font-medium">
                <strong>2025 :</strong> 40k€ revenu + 20k€ div.
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-200 border border-emerald-800 font-medium flex items-center gap-1">
                <Home className="w-3 h-3 text-emerald-400" />
                <strong>Loyer :</strong> 400 €/m (locataire) → 650 €/m (propriétaire)
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-200 border border-amber-800 font-medium flex items-center gap-1">
                <Landmark className="w-3 h-3 text-amber-400" />
                <strong>Maison 305k€</strong> (+23,5k€ notaire) • <strong>Prêt 260k€ / 25 ans</strong> (3,7% - 4,0%)
              </span>
            </div>
          </div>
        </div>

        {/* Sélecteur Récurrent/An 1 + 3 KPIs + Bouton PDF direct */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          {onToggleViewMode && (
            <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 flex items-center text-[11px] font-bold">
              <button
                type="button"
                onClick={() => onToggleViewMode('recurring')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'recurring'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Récurrent / an
              </button>
              <button
                type="button"
                onClick={() => onToggleViewMode('firstYear')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'firstYear'
                    ? 'bg-amber-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Année 1 (Achat)
              </button>
            </div>
          )}

          <div className="bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-1.5 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-[9px] uppercase tracking-wider text-sky-400 font-bold">Continuité</div>
              <div className="text-xs sm:text-sm font-black text-sky-400">{formatEuro(gainContinuité)}</div>
            </div>
            <div className="border-x border-slate-800 px-2.5">
              <div className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold">LFI 2027</div>
              <div className="text-xs sm:text-sm font-black text-emerald-400">{formatEuro(gainLFI)}</div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-wider text-amber-400 font-bold">RN 2027</div>
              <div className="text-xs sm:text-sm font-black text-amber-400">{formatEuro(gainRN)}</div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
            title="Imprimer ou enregistrer en PDF"
          >
            <Printer className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">PDF</span>
          </button>
        </div>

      </div>
    </header>
  );
};
