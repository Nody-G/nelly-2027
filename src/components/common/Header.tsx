import React from 'react';
import { Scale, Sparkles, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
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
  onToggleViewMode 
}) => {
  const formatEuro = (val: number) => {
    const sign = val >= 0 ? '+' : '';
    return `${sign}${Math.round(val).toLocaleString('fr-FR')} €`;
  };

  const isFirstYear = viewMode === 'firstYear';

  return (
    <header className="no-print bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-6 px-4 sm:px-8 border-b border-indigo-900/50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        
        {/* Titre & Contexte de Nelly */}
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 text-2xl shrink-0 shadow-inner">
            <Scale className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-indigo-400" />
                AUDIT SOURCÉ • NELLY FERNANDEZ (NELL'IMMO SASU) • PÉLISSANNE (13330)
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                Priorité Finances & Filles en Garde Alternée
              </span>
              {isFirstYear ? (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/30 text-amber-200 border border-amber-400/40">
                  Vue Année 1 (Achat Maison 305k€)
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-500/30 text-sky-200 border border-sky-400/40">
                  Vue Récurrente Pérenne (Tous les ans)
                </span>
              )}
            </div>
            
            <h1 className="text-lg sm:text-2xl font-black tracking-tight mt-1.5 flex flex-wrap items-center gap-2">
              <span>Nell'Immo (CA ~130k€) • Nelly Fernandez (70k€) : Maison 305k€, 40k€ Pub & Avenir des 2 Filles (5 & 11 ans)</span>
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Présidente de SASU (Assimilée salariée) • Chiffre d'affaires agence ~130 000 € HT • Loyer 300 € → 600 € au Foncier Réel • 2 filles en garde alternée (5 ans Escalade & 11 ans Piano) • 
              Simulation croisée vérifiée sans fake : Continuité vs NFP/LFI vs RN vs Droite Républicaine.
            </p>
          </div>
        </div>

        {/* Synthèse temps réel des 3 blocs politiques optimisés */}
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3 sm:px-5 grid grid-cols-3 gap-3 sm:gap-6 shrink-0 text-center shadow-xl">
          <div className="space-y-0.5">
            <div className="text-[10px] uppercase tracking-wider text-sky-400 font-bold flex items-center justify-center gap-1">
              <span>Continuité</span>
            </div>
            <div className="text-base sm:text-xl font-black text-sky-400">
              {formatEuro(gainContinuité)} / an
            </div>
            <div className="text-[10px] text-slate-400 font-medium">
              {isFirstYear ? 'Avec apport PEE' : 'Dès oct. 2026 pérenne'}
            </div>
          </div>

          <div className="border-x border-slate-700/80 px-2 sm:px-4 space-y-0.5">
            <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold flex items-center justify-center gap-1">
              <span>LFI 2027</span>
            </div>
            <div className="text-base sm:text-xl font-black text-emerald-400">
              {formatEuro(gainLFI)} / an
            </div>
            <div className="text-[10px] text-slate-400 font-medium">+ Retraite 60a & Études</div>
          </div>

          <div className="space-y-0.5">
            <div className="text-[10px] uppercase tracking-wider text-amber-400 font-bold flex items-center justify-center gap-1">
              <span>RN 2027</span>
            </div>
            <div className="text-base sm:text-xl font-black text-amber-400">
              {formatEuro(gainRN)} / an
            </div>
            <div className="text-[10px] text-slate-400 font-medium">+ TVA 5,5% & 2e enfant</div>
          </div>
        </div>

      </div>
    </header>
  );
};
