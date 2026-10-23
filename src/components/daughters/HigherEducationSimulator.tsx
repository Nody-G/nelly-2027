import React, { useState } from 'react';
import { GraduationCap, Landmark, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';

export const HigherEducationSimulator: React.FC = () => {
  const [monthlyStudentBudget, setMonthlyStudentBudget] = useState(1050); // Loyer studio Aix/Marseille + vie étudiante
  const [yearsOfStudy, setYearsOfStudy] = useState(5); // Licence + Master

  const annualStudentCost = monthlyStudentBudget * 12; // ~12 600 € / an
  const totalCostPerDaughter = annualStudentCost * yearsOfStudy; // ~63 000 €

  // Sous LFI : Allocation d'Autonomie Jeunesse (1 063 € / mois)
  const lfiAnnualGrant = 1063 * 12; // 12 756 € / an
  const lfiTotalGrant = lfiAnnualGrant * yearsOfStudy; // ~63 780 €

  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Projection Études Supérieures des 2 Filles (Horizon 2033 & 2039)
            </h3>
          </div>
          <p className="text-xs text-slate-600 mt-0.5">
            L'aînée aura 18 ans en septembre 2033 (Bac), et la cadette en 2039. Comparatif financier des 4 modèles.
          </p>
        </div>
        <span className="text-xs font-bold bg-purple-100 text-purple-900 px-2.5 py-1 rounded-lg">
          Campus Aix-Marseille (25-45 min)
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Curseur budget */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <div className="flex justify-between font-bold text-slate-800">
            <span>Budget mensuel estimé par fille (Studio + Vie) :</span>
            <span className="text-indigo-600 font-extrabold">{formatEuro(monthlyStudentBudget)} / mois</span>
          </div>
          <input 
            type="range"
            min={700}
            max={1400}
            step={50}
            value={monthlyStudentBudget}
            onChange={(e) => setMonthlyStudentBudget(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>700 € (Coloc)</span>
            <span>1 050 € (Studio moyen Aix)</span>
            <span>1 400 €</span>
          </div>

          <div className="flex justify-between font-bold text-slate-800 pt-2 border-t border-slate-200">
            <span>Durée des études supérieures :</span>
            <span className="text-purple-700 font-extrabold">{yearsOfStudy} ans (Bac+5 Master)</span>
          </div>
          <input 
            type="range"
            min={3}
            max={7}
            step={1}
            value={yearsOfStudy}
            onChange={(e) => setYearsOfStudy(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-purple-700"
          />
        </div>

        {/* Chiffrage comparatif */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <div className="font-bold text-slate-900 uppercase text-[11px]">
            Coût cumulé sur 5 ans par fille (Aix-Marseille)
          </div>

          <div className="flex justify-between text-slate-700">
            <span>Sous Continuité / RN / Droite :</span>
            <span className="font-bold text-rose-600">-{formatEuro(totalCostPerDaughter)} (100% à charge)</span>
          </div>
          <div className="text-[10px] text-slate-500">
            Avec 70 000 € de revenus, Nelly Fernandez aura droit à 0 € de bourse CROUS.
          </div>

          <div className="flex justify-between text-slate-700 pt-1 border-t border-slate-200">
            <span>Sous Nouveau Front Populaire / LFI :</span>
            <span className="font-bold text-emerald-700">+{formatEuro(lfiTotalGrant)} perçus</span>
          </div>
          <div className="text-[10px] text-emerald-800 font-medium">
            Allocation d'autonomie universelle de 1 063 €/mois versée directement à chaque fille.
          </div>
        </div>
      </div>

      {/* Stratégie Alternative sous Continuité / RN : La Holding / SCI */}
      <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="space-y-1">
          <div className="font-bold text-indigo-950 flex items-center justify-between gap-1.5">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-indigo-600" />
              <span>La parade patrimoniale pour Nelly : Le Studio Étudiant en Holding / SCI</span>
            </span>
            <div className="flex items-center gap-1">
              <LawBadge article="Art. 145 & 216" code="CGI" />
              <LawBadge article="Art. 669" code="CGI" />
            </div>
          </div>
          <p className="text-indigo-900 leading-relaxed">
            Si le gouvernement reste en Continuité ou bascule au RN (sans allocation d'autonomie étudiante), Nelly utilise la trésorerie capitalisée dans Nell'Immo pour acquérir un studio à Aix-en-Provence ou Marseille via une <strong>Holding patrimoniale (Régime Mère-Fille exonéré à 95%, <LawBadge article="Art. 145 & 216 CGI" />)</strong> avec démembrement temporaire d'usufruit (<LawBadge article="Art. 669 CGI" />). Les frais d'hébergement de ses filles sont ainsi transformés en constitution de patrimoine immobilier familial à 0% d'IR et 0% d'IFI !
          </p>
        </div>
      </div>
    </div>
  );
};
