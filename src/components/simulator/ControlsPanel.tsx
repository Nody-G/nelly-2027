import React from 'react';
import { Sliders, RotateCcw, CheckCircle2, Calendar, Sparkles, Landmark, Home } from 'lucide-react';
import { FiscalParameters } from '../../types/fiscal';
import { Tooltip } from '../common/Tooltip';
import { calculateMonthlyMortgagePayment } from '../../engine/taxEngine';

interface ControlsPanelProps {
  params: FiscalParameters;
  onChange: (updated: Partial<FiscalParameters>) => void;
  onReset: () => void;
}

export const ControlsPanel: React.FC<ControlsPanelProps> = ({ params, onChange, onReset }) => {
  const netSalary = Math.max(0, params.totalRevenue - params.dividendsGross);
  const currentRent = params.currentTenantRentMonthly ?? 400;
  const extraRentAnnual = Math.max(0, (params.homeOfficeRentMonthly - currentRent) * 12) + 1200; // +100€/m charges
  const adNetGain = Math.round(params.adBudgetAnnual * (params.adSavingTargetPercent / 100) * 0.85);

  const duration = params.loanDurationYears || 25;
  const monthlyLoan = Math.round(calculateMonthlyMortgagePayment(params.loanAmount || 260000, params.mortgageInterestRate || 3.85, duration));
  const monthlyAt37 = Math.round(calculateMonthlyMortgagePayment(params.loanAmount || 260000, 3.7, duration));
  const monthlyAt40 = Math.round(calculateMonthlyMortgagePayment(params.loanAmount || 260000, 4.0, duration));
  const year1Interest = Math.round((params.loanAmount || 260000) * ((params.mortgageInterestRate || 3.85) / 100) * 0.99);
  const deductibleInterest28Pct = Math.round(year1Interest * 0.28);

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-indigo-600" />
          <h2 className="font-bold text-slate-800 text-sm">Paramètres Réels 2025 & Prêt 25 ans</h2>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1 cursor-pointer"
          title="Réinitialiser aux chiffres réels 2025 de Nelly"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Réinitialiser
        </button>
      </div>

      {/* 1. REVENUS 2025 : 40 000 € + 20 000 € DIVIDENDES */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
        <div className="text-[11px] font-extrabold uppercase text-indigo-900 tracking-wide">
          1. Revenus 2025 (40k€ revenu + 20k€ dividendes)
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-600">Revenu Total 2025 :</span>
            <span className="text-indigo-700 font-bold text-sm">
              {params.totalRevenue.toLocaleString('fr-FR')} € / an
            </span>
          </div>
          <input
            type="range"
            min={45000}
            max={100000}
            step={1000}
            value={params.totalRevenue}
            onChange={(e) => {
              const newTotal = Number(e.target.value);
              onChange({
                totalRevenue: newTotal,
                dividendsGross: Math.min(params.dividendsGross, newTotal - 20000),
              });
            }}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs font-semibold">
            <Tooltip
              term="Part Dividendes 2025 :"
              explanation="Sur 2025, Nelly perçoit 40 000 € de rémunération et 20 000 € de dividendes. Avec seulement 20 000 € de dividendes, les leviers de la nouvelle maison remplacent 56% à 100% de ses dividendes !"
              lawRef="Art. 200 A CGI"
            />
            <span className="text-indigo-700 font-bold">
              {params.dividendsGross.toLocaleString('fr-FR')} €
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={Math.max(0, params.totalRevenue - 20000)}
            step={1000}
            value={params.dividendsGross}
            onChange={(e) => onChange({ dividendsGross: Number(e.target.value) })}
            className="w-full accent-indigo-600 cursor-pointer"
          />
          <div className="text-[11px] text-slate-600 flex justify-between pt-0.5">
            <span>Salaire net : <strong>{netSalary.toLocaleString('fr-FR')} €</strong></span>
            <span>Dividendes : <strong>{params.dividendsGross.toLocaleString('fr-FR')} €</strong></span>
          </div>
        </div>
      </div>

      {/* 2. PRÊT 260 000 € SUR 25 ANS (TAUX 3,7% - 4,0%) & NOTAIRE 23 500 € */}
      <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase text-amber-950 flex items-center gap-1">
            <Landmark className="w-3.5 h-3.5 text-amber-700" />
            2. Prêt 260 000 € sur 25 ans & Notaire 23,5k€
          </span>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200/80 text-amber-950">
            25 ans (300 m.)
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-700">Taux attendu (3,70 % à 4,00 %) :</span>
            <span className="text-amber-900 font-black text-sm">
              {params.mortgageInterestRate.toFixed(2)} %
            </span>
          </div>
          <input
            type="range"
            min={3.4}
            max={4.5}
            step={0.05}
            value={params.mortgageInterestRate}
            onChange={(e) => onChange({ mortgageInterestRate: Number(e.target.value) })}
            className="w-full accent-amber-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-medium">
            <button
              type="button"
              onClick={() => onChange({ mortgageInterestRate: 3.7 })}
              className="hover:text-amber-800 underline cursor-pointer"
            >
              Bas : 3,70% ({monthlyAt37} €/m)
            </button>
            <button
              type="button"
              onClick={() => onChange({ mortgageInterestRate: 3.85 })}
              className="hover:text-amber-800 underline cursor-pointer"
            >
              Médian : 3,85%
            </button>
            <button
              type="button"
              onClick={() => onChange({ mortgageInterestRate: 4.0 })}
              className="hover:text-amber-800 underline cursor-pointer"
            >
              Haut : 4,00% ({monthlyAt40} €/m)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
          <div className="p-2 rounded-lg bg-white border border-amber-200/80">
            <span className="text-slate-500 block text-[10px]">Mensualité (sur 25 ans)</span>
            <strong className="text-slate-900 text-xs">{monthlyLoan.toLocaleString('fr-FR')} € / mois</strong>
          </div>
          <div className="p-2 rounded-lg bg-white border border-amber-200/80">
            <span className="text-slate-500 block text-[10px]">Intérêts déductibles (28%)</span>
            <strong className="text-emerald-700 text-xs">{deductibleInterest28Pct.toLocaleString('fr-FR')} € / an</strong>
          </div>
        </div>
        <div className="text-[10px] text-amber-950 leading-tight">
          <strong>Opération :</strong> 305 000 € + 23 500 € notaire = <strong>328 500 €</strong> (260 000 € prêt 25 ans + 68 500 € apport).
        </div>
      </div>

      {/* 3. LOYER NELL'IMMO : 400 € (MAISON LOUÉE) -> NOUVELLE MAISON 305K€ */}
      <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase text-emerald-950 flex items-center gap-1">
            <Home className="w-3.5 h-3.5 text-emerald-700" />
            3. Bail Pro Nell'Immo (Actuel : 400 €/m)
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs font-semibold">
            <Tooltip
              term="Nouveau Loyer (Maison 305k€) :"
              explanation="Actuellement, Nelly facture 400 €/mois à Nell'Immo dans la maison qu'elle loue à Pélissanne. Dans sa nouvelle maison achetée 305 000 €, elle passe propriétaire au Régime Foncier Réel (Art. 28 & 31 CGI) et peut facturer 650 €/mois + 100 € de charges à 0 € d'impôt grâce aux intérêts du prêt de 260 000 € sur 25 ans."
              lawRef="Art. 28 & 31 CGI"
            />
            <span className="text-emerald-700 font-bold">
              {params.homeOfficeRentMonthly} € + 100 € ch.
            </span>
          </div>
          <input
            type="range"
            min={400}
            max={750}
            step={50}
            value={params.homeOfficeRentMonthly}
            onChange={(e) => onChange({ homeOfficeRentMonthly: Number(e.target.value) })}
            className="w-full accent-emerald-600 cursor-pointer"
          />
          <div className="text-[11px] text-emerald-900 flex justify-between">
            <span>Actuel (locataire) : <strong>400 €/m</strong></span>
            <span>Gain net : <strong>+{extraRentAnnual.toLocaleString('fr-FR')} €/an</strong></span>
          </div>
        </div>

        <div className="space-y-1 pt-2 border-t border-emerald-200/60">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-700">Économie sur les 40 000 € de Pub :</span>
            <span className="text-emerald-700 font-bold">
              -{params.adSavingTargetPercent}% (+{adNetGain.toLocaleString('fr-FR')} € net)
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={25}
            step={1}
            value={params.adSavingTargetPercent}
            onChange={(e) => onChange({ adSavingTargetPercent: Number(e.target.value) })}
            className="w-full accent-emerald-600 cursor-pointer"
          />
        </div>
      </div>

      {/* 4. OPTIONS RAPIDES (STATUT & MODE DE CALCUL) */}
      <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
        <button
          type="button"
          onClick={() => onChange({ viewMode: params.viewMode === 'recurring' ? 'firstYear' : 'recurring' })}
          className={`p-2.5 rounded-xl border font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
            params.viewMode === 'firstYear'
              ? 'bg-amber-600 text-white border-amber-600'
              : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
          }`}
        >
          {params.viewMode === 'firstYear' ? <Sparkles className="w-3.5 h-3.5" /> : <Calendar className="w-3.5 h-3.5" />}
          <span>{params.viewMode === 'firstYear' ? 'Vue Année 1 (Achat)' : 'Vue Récurrente'}</span>
        </button>

        <button
          type="button"
          onClick={() => onChange({ companyForm: params.companyForm === 'SASU' ? 'SARL' : 'SASU' })}
          className={`p-2.5 rounded-xl border font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
            params.companyForm === 'SASU'
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-rose-50 text-rose-800 border-rose-200'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Statut : {params.companyForm}</span>
        </button>
      </div>
    </div>
  );
};
