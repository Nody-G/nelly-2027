import React, { useState } from 'react';
import { calculateFoncierReelAnnual } from '../../engine/taxEngine';
import { Home, ArrowRight, ShieldCheck, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';
import { Tooltip } from '../common/Tooltip';

export const FoncierReelModeler: React.FC = () => {
  const [rent, setRent] = useState(600);
  const [interestRate, setInterestRate] = useState(3.5);
  const [surfaceProPct, setSurfaceProPct] = useState(28);

  const foncier = calculateFoncierReelAnnual(305000, interestRate, surfaceProPct / 100, rent, 100);

  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  return (
    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Modélisateur Déduction Foncier Réel (Maison 305 000 € & Bail Nell'Immo)
            </h3>
          </div>
          <p className="text-xs text-slate-600 mt-0.5">
            Simulation exacte de la{' '}
            <Tooltip 
              term="déclaration n° 2044" 
              explanation="Déclaration de revenus fonciers sous le régime réel. Permet de déduire les intérêts du prêt bancaire, l'assurance emprunteur, les travaux et la taxe foncière, réduisant l'impôt foncier à 0 €." 
              lawRef="Art. 31 CGI"
            /> pour déduire les intérêts du crédit bancaire, travaux d'aménagement et taxe foncière.
          </p>
        </div>
        <LawBadge article="Art. 28 & 31 CGI" code="CGI" />
      </div>

      {/* Paramètres interactifs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3 bg-white rounded-xl border border-slate-200">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Loyer mensuel du bail</div>
          <div className="text-base font-black text-indigo-600">{rent} € / mois</div>
          <input 
            type="range"
            min={300}
            max={900}
            step={50}
            value={rent}
            onChange={(e) => setRent(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600 mt-1"
          />
        </div>

        <div className="p-3 bg-white rounded-xl border border-slate-200">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Taux du crédit (305 000 €)</div>
          <div className="text-base font-black text-slate-800">{interestRate} %</div>
          <input 
            type="range"
            min={2.0}
            max={5.0}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-slate-800 mt-1"
          />
        </div>

        <div className="p-3 bg-white rounded-xl border border-slate-200">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Quote-part pro maison</div>
          <div className="text-base font-black text-emerald-600">{surfaceProPct} % (35 m² pro)</div>
          <input 
            type="range"
            min={15}
            max={35}
            step={1}
            value={surfaceProPct}
            onChange={(e) => setSurfaceProPct(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-emerald-600 mt-1"
          />
        </div>
      </div>

      {/* Résultat croisé */}
      <div className="p-4 rounded-xl bg-white border border-indigo-100 grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
        <div>
          <div className="text-[10px] text-slate-500 uppercase font-semibold">Trésorerie versée par Nell'Immo</div>
          <div className="text-lg font-black text-slate-900">{formatEuro(foncier.totalCashReceived)} / an</div>
          <div className="text-[10px] text-slate-400">Loyer + 1 200 € charges</div>
        </div>

        <div>
          <div className="text-[10px] text-slate-500 uppercase font-semibold">Charges réelles déduites</div>
          <div className="text-lg font-black text-rose-600">-{formatEuro(foncier.totalDeductibleExpenses)} / an</div>
          <div className="text-[10px] text-slate-400">Intérêts + Taxe foncière + Travaux</div>
        </div>

        <div>
          <div className="text-[10px] text-slate-500 uppercase font-semibold">Bénéfice Foncier Imposable</div>
          <div className="text-lg font-black text-emerald-700">{formatEuro(foncier.netTaxableFoncier)}</div>
          <div className="text-[10px] text-emerald-600 font-bold flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>0 € d'Impôt Foncier</span>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-xl p-2 border border-emerald-200">
          <div className="text-[10px] text-emerald-900 uppercase font-bold">Impôt & Cotisations Économisés</div>
          <div className="text-lg font-black text-emerald-700">+{formatEuro(foncier.taxSavedIRAndUrssaf)} / an</div>
          <div className="text-[10px] text-emerald-800">Par rapport aux dividendes taxés</div>
        </div>
      </div>
    </div>
  );
};
