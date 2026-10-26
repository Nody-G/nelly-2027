import React, { useState } from 'react';
import { Home, CheckCircle2, Landmark } from 'lucide-react';
import { calculateFoncierReelAnnual } from '../../engine/taxEngine';
import { Tooltip } from '../common/Tooltip';

export const FoncierReelModeler: React.FC = () => {
  const [monthlyRent, setMonthlyRent] = useState(650);
  const [monthlyCharges, setMonthlyCharges] = useState(100);
  const [proSurfaceRatio, setProSurfaceRatio] = useState(28); // 35 m² / 125 m² = 28%
  const [interestRate, setInterestRate] = useState(3.85); // Taux attendu entre 3,7% et 4,0%

  const currentRentedHouseAnnual = 400 * 12; // 4 800 €/an facturés actuellement dans la maison louée à Pélissanne
  const result = calculateFoncierReelAnnual(
    260000, // Prêt de 260 000 €
    interestRate,
    proSurfaceRatio / 100,
    monthlyRent,
    monthlyCharges,
    25 // Sur 25 ans (300 mois)
  );

  const netAdditionalCashVsCurrent = result.totalCashReceived - currentRentedHouseAnnual;
  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold uppercase text-emerald-600 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            Calculateur Bail Professionnel • Art. 28 & 31 du CGI (Formulaire 2044)
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
            Passage du Loyer Actuel (400 €/m en location) au Bail Propriétaire (Maison 305k€ • Prêt 260k€ sur 25 ans)
          </h3>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 self-start sm:self-center">
          0 € d'IR • 0 € d'URSSAF
        </span>
      </div>

      {/* Bandeau comparatif Avant (Maison louée actuelle) vs Après (Nouvelle maison achetée 305 000 €) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-[10px] font-bold uppercase text-slate-500 block">Situation Actuelle (Maison Louée)</span>
          <div className="text-sm font-black text-slate-800 mt-0.5">400 € / mois (4 800 € / an)</div>
          <p className="text-[11px] text-slate-600 mt-0.5">
            Sous-location à Nell'Immo dans sa maison louée à Pélissanne : aucun intérêt d'emprunt ni taxe foncière déductibles.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
          <span className="text-[10px] font-bold uppercase text-amber-900 flex items-center gap-1">
            <Landmark className="w-3 h-3" />
            Prêt 260 000 € sur 25 ans (+23,5k€ Notaire)
          </span>
          <div className="text-sm font-black text-amber-950 mt-0.5">
            {formatEuro(result.monthlyLoanPayment)} / mois (à {interestRate.toFixed(2)} %)
          </div>
          <p className="text-[11px] text-amber-900 mt-0.5">
            Durée : <strong>25 ans (300 mois)</strong> • Intérêts An 1 : <strong>{formatEuro(result.annualMortgageInterests)}</strong>.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-300">
          <span className="text-[10px] font-bold uppercase text-emerald-800 block">Nouveau Bail Propriétaire (Réel)</span>
          <div className="text-sm font-black text-emerald-950 mt-0.5 flex items-center gap-1">
            <span>{monthlyRent + monthlyCharges} € / mois ({formatEuro(result.totalCashReceived)} / an)</span>
          </div>
          <p className="text-[11px] text-emerald-800 mt-0.5">
            Soit <strong>+{formatEuro(netAdditionalCashVsCurrent)}/an</strong> de cash en plus, et <strong>0 € d'impôt</strong> sur la totalité !
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Contrôles */}
        <div className="lg:col-span-5 space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span>Nouveau loyer bureau (35 m²) :</span>
              <span className="text-indigo-700 font-bold">{monthlyRent} € / mois</span>
            </div>
            <input
              type="range"
              min={400}
              max={750}
              step={50}
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <div className="text-[10px] text-slate-500">Actuel en location : 400 €/mois → Cible propriétaire : 650 €/mois</div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span>Remboursement charges (eau/élec/clim) :</span>
              <span className="text-indigo-700 font-bold">{monthlyCharges} € / mois</span>
            </div>
            <input
              type="range"
              min={50}
              max={200}
              step={25}
              value={monthlyCharges}
              onChange={(e) => setMonthlyCharges(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <Tooltip
                term="Quote-part surface pro (35 m² / 125 m²) :"
                explanation="Bureau de réception, pièce d'archivage des mandats Loi Hoguet (10 ans) et stockage des panneaux Nell'Immo."
                lawRef="Art. 28 & 31 CGI"
              />
              <span className="text-indigo-700 font-bold">{proSurfaceRatio} %</span>
            </div>
            <input
              type="range"
              min={15}
              max={35}
              step={1}
              value={proSurfaceRatio}
              onChange={(e) => setProSurfaceRatio(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span>Taux du prêt 260 000 € sur 25 ans (3,7% - 4,0%) :</span>
              <span className="text-amber-800 font-bold">{interestRate.toFixed(2)} %</span>
            </div>
            <input
              type="range"
              min={3.5}
              max={4.3}
              step={0.05}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <button type="button" onClick={() => setInterestRate(3.7)} className="underline cursor-pointer">3,70 % (1 330 €/m)</button>
              <button type="button" onClick={() => setInterestRate(3.85)} className="underline cursor-pointer">3,85 % (1 351 €/m)</button>
              <button type="button" onClick={() => setInterestRate(4.0)} className="underline cursor-pointer">4,00 % (1 372 €/m)</button>
            </div>
          </div>
        </div>

        {/* Tableau de résultat comptable */}
        <div className="lg:col-span-7 space-y-3">
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2.5 text-xs">
            <div className="font-bold text-emerald-950 uppercase tracking-wider text-[11px]">
              Compte de Résultat Foncier Réel (Formulaire 2044) — Prêt 260 000 € sur 25 ans :
            </div>

            <div className="flex justify-between text-slate-700">
              <span>Recettes encaissées par Nelly (Loyer {monthlyRent}€ + Charges {monthlyCharges}€ × 12) :</span>
              <span className="font-extrabold text-emerald-700">+{formatEuro(result.totalCashReceived)} / an</span>
            </div>

            <div className="border-t border-emerald-200/60 pt-2 space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>• Quote-part intérêts du prêt 260 000 € / 25 ans à {interestRate.toFixed(2)}% ({proSurfaceRatio}%) :</span>
                <span className="font-semibold text-rose-700">-{formatEuro(result.deductibleInterests)}</span>
              </div>
              <div className="flex justify-between">
                <span>• Quote-part Taxe Foncière Pélissanne & Assurance PNO ({proSurfaceRatio}%) :</span>
                <span className="font-semibold text-rose-700">-{formatEuro(result.deductiblePropertyTax + 126)}</span>
              </div>
              <div className="flex justify-between">
                <span>• Quote-part factures énergie/eau & travaux bureau déductibles :</span>
                <span className="font-semibold text-rose-700">
                  -{formatEuro(result.annualChargesReimbursed + result.deductibleWorksRefurbishment)}
                </span>
              </div>
            </div>

            <div className="border-t border-emerald-300 pt-2.5 flex items-center justify-between font-bold text-sm text-emerald-950">
              <span>Bénéfice foncier imposable à l'IR et CSG/CRDS :</span>
              <span className="px-2.5 py-0.5 rounded bg-emerald-600 text-white font-black">
                {formatEuro(result.netTaxableFoncier)} (Impôt = 0 €)
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs flex items-center justify-between text-indigo-950">
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>
                <strong>Effet fiscal du prêt sur 25 ans :</strong> La mensualité s'établit à {formatEuro(result.monthlyLoanPayment)}/mois et les intérêts déductibles ({formatEuro(result.deductibleInterests)}/an) effacent l'impôt sur le loyer professionnel !
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
