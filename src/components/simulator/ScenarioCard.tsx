import React from 'react';
import { AlertTriangle, CheckCircle2, TrendingUp, Sparkles, PiggyBank } from 'lucide-react';
import { ScenarioResult } from '../../types/simulation';
import { Tooltip } from '../common/Tooltip';

interface ScenarioCardProps {
  title: string;
  badge: string;
  subtitle: string;
  passive: ScenarioResult;
  optimized: ScenarioResult;
  themeColor: 'sky' | 'emerald' | 'amber' | 'indigo';
  aidsNote?: string;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({
  title,
  badge,
  subtitle,
  passive,
  optimized,
  themeColor,
  aidsNote,
}) => {
  const formatEuro = (val: number, sign = false) => {
    const s = Math.round(val).toLocaleString('fr-FR') + ' €';
    if (sign && val > 0) return '+' + s;
    return s;
  };

  const borderThemes = {
    sky: 'border-sky-400 hover:border-sky-500',
    emerald: 'border-emerald-500 hover:border-emerald-600',
    amber: 'border-amber-400 hover:border-amber-500',
    indigo: 'border-indigo-400 hover:border-indigo-500',
  };

  const headerThemes = {
    sky: 'bg-sky-600 text-white',
    emerald: 'bg-emerald-700 text-white',
    amber: 'bg-slate-800 text-white',
    indigo: 'bg-indigo-800 text-white',
  };

  const optiBoxThemes = {
    sky: 'bg-sky-50 border-sky-300 text-sky-950',
    emerald: 'bg-emerald-50 border-emerald-300 text-emerald-950',
    amber: 'bg-amber-50/70 border-amber-300 text-amber-950',
    indigo: 'bg-indigo-50 border-indigo-300 text-indigo-950',
  };

  const badgeOptiThemes = {
    sky: 'bg-sky-600 text-white',
    emerald: 'bg-emerald-600 text-white',
    amber: 'bg-amber-600 text-white',
    indigo: 'bg-indigo-600 text-white',
  };

  const diffMonthly = Math.round(optimized.netGainVsReferencePassive / 12);

  return (
    <div className={`bg-white rounded-2xl border-2 ${borderThemes[themeColor]} shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between`}>
      {/* En-tête de la carte */}
      <div className={`px-4 py-3 ${headerThemes[themeColor]}`}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase bg-black/25 px-2 py-0.5 rounded tracking-wide">
            {badge}
          </span>
          <span className="text-xs opacity-80">{passive.blocId.toUpperCase()}</span>
        </div>
        <h3 className="font-extrabold text-sm sm:text-base mt-1">{title}</h3>
        <p className="text-[11px] opacity-90 leading-tight mt-0.5">{subtitle}</p>
      </div>

      <div className="p-4 space-y-3.5 flex-1 flex flex-col justify-between">
        {/* Volet A : Sans rien changer */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
            <span>A. Sans rien changer (Dividendes passifs)</span>
            <AlertTriangle className="w-3 h-3 text-slate-400" />
          </div>
          
          <div className="flex justify-between text-slate-600">
            <span>Impôts IR + Prélèvements :</span>
            <span className="font-bold text-rose-600">-{formatEuro(passive.totalTaxBurden)}</span>
          </div>

          <div className="flex justify-between text-slate-600">
            <span>Frais ciblés (Filles & Énergie) :</span>
            <span className="font-semibold text-slate-700">-{formatEuro(passive.dailyLifeLivingExpenses)} / an</span>
          </div>

          {(passive.dailyLifeAidsAndSavings > 0 || passive.familyAllowancesCash > 0) && (
            <div className="flex justify-between text-emerald-700 font-medium">
              <span>Économies + Allocations CAF :</span>
              <span className="font-bold">+{formatEuro(passive.dailyLifeAidsAndSavings + passive.familyAllowancesCash)} / an</span>
            </div>
          )}

          <div className="flex justify-between pt-1 border-t border-slate-200 font-bold text-slate-900">
            <span>Pouvoir d'achat net :</span>
            <span className="text-sm font-black">{formatEuro(passive.netPurchasingPower)}</span>
          </div>
        </div>

        {/* Volet B : Avec Optimisations Maison 305k€ */}
        <div className={`p-3.5 rounded-xl border ${optiBoxThemes[themeColor]} space-y-1.5 text-xs`}>
          <div className="text-[10px] font-bold uppercase tracking-wider flex items-center justify-between">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>B. Avec Leviers Maison 305k€</span>
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/80 shadow-xs border border-current">
              Activé
            </span>
          </div>

          <div className="flex justify-between">
            <span>Impôts après restructuration :</span>
            <span className="font-bold text-slate-900">-{formatEuro(optimized.totalTaxBurden)}</span>
          </div>

          <div className="flex justify-between text-emerald-700">
            <span>Gain Pub + TVA + Crédit Famille :</span>
            <span className="font-bold">+{formatEuro(optimized.extraCashFromBusinessLevers)}</span>
          </div>

          {optimized.dailyLifeAidsAndSavings > 0 && (
            <div className="flex justify-between text-emerald-700 font-semibold">
              <span>Économies (École, 100% Sécu, TVA) :</span>
              <span className="font-bold">+{formatEuro(optimized.dailyLifeAidsAndSavings)}</span>
            </div>
          )}

          {optimized.familyAllowancesCash > 0 && (
            <div className="flex justify-between text-emerald-700 font-semibold">
              <span>Allocations familiales CAF (50/50) :</span>
              <span className="font-bold">+{formatEuro(optimized.familyAllowancesCash)}</span>
            </div>
          )}

          <div className="pt-2 border-t border-current/20 flex items-baseline justify-between">
            <Tooltip
              term="Pouvoir d'achat net :"
              explanation="Formule exacte : Revenu net après IR/PFU + Gains des leviers d'entreprise (Loyer Bureau, Pub, TVA, CESU) + Allocations familiales CAF - Frais quotidiens ciblés des 2 filles et d'énergie."
            />
            <span className="text-base sm:text-lg font-black">{formatEuro(optimized.netPurchasingPower)}</span>
          </div>

          {/* Capacité d'épargne réelle après coût de la vie intégral (8 postes Pélissanne) */}
          <div className="p-2 rounded-lg bg-white/75 border border-current/15 flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <PiggyBank className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <Tooltip
                term="Épargne libre (vie complète) :"
                explanation={`Reste à vivre une fois payés les 8 postes du Coût de la Vie Complet à Pélissanne (${formatEuro(optimized.fullHouseholdCostOfLiving)}/an : Crédit maison 305k€ + Taxe foncière, Alimentation, Mobilité, Énergie/Eau, Scolarité, Santé, Sport/Piano, Assurances/Loisirs).`}
              />
            </span>
            <span className="font-extrabold text-indigo-950">
              {formatEuro(optimized.disposableSavingsCapacity)} / an
            </span>
          </div>

          {/* Badge gain différentiel */}
          <div className={`text-center py-2 rounded-lg font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 ${badgeOptiThemes[themeColor]}`}>
            <TrendingUp className="w-3.5 h-3.5" />
            <span>
              {formatEuro(optimized.netGainVsReferencePassive, true)} / an ({formatEuro(diffMonthly, true)} / mois)
            </span>
          </div>

          {optimized.oneOffPurchaseBoost > 0 && (
            <div className="p-1.5 rounded-lg bg-amber-100/80 border border-amber-300 text-amber-950 text-[10px] font-bold text-center flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>Dont +{formatEuro(optimized.oneOffPurchaseBoost)} de liquidités exceptionnelles débloquées pour l'achat</span>
            </div>
          )}

          {aidsNote && (
            <div className="text-[10px] opacity-80 text-center pt-0.5 italic">
              {aidsNote}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
