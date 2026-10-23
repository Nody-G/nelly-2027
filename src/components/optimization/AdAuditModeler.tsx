import React, { useState } from 'react';
import { Target, CheckCircle2, TrendingUp, Sparkles, Layers } from 'lucide-react';

export const AdAuditModeler: React.FC = () => {
  const [totalAdBudget, setTotalAdBudget] = useState(40000);
  const [exclusiveMandateFocusPct, setExclusiveMandateFocusPct] = useState(70); // % des annonces basculées en exclu
  const [duplicateSoftwareTrimPct, setDuplicateSoftwareTrimPct] = useState(15); // % d'outils doublons coupés

  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  // Calcul du gain
  // Une agence consacrant ses portails payants aux exclusivités économise typiquement 12% à 20%
  const estimatedSavingsPct = ((exclusiveMandateFocusPct / 100) * 12) + ((duplicateSoftwareTrimPct / 100) * 5);
  const annualSavingsHT = totalAdBudget * (estimatedSavingsPct / 100);
  const monthlySavingsHT = annualSavingsHT / 12;

  return (
    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Audit & Restructuration des 40 000 € de Diffusion Publicitaire & Logiciels
            </h3>
          </div>
          <p className="text-xs text-slate-600 mt-0.5">
            Stratégie mandats exclusifs à Pélissanne : booster les honoraires tout en coupant la surtaxe des portails.
          </p>
        </div>
        <span className="text-xs font-bold bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-lg">
          Marge d'Exploitation Nell'Immo
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* Curseur 1 */}
        <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
          <div className="font-bold text-slate-700 flex justify-between">
            <span>Budget annuel pub & SaaS</span>
            <span className="text-indigo-600 font-extrabold">{formatEuro(totalAdBudget)}</span>
          </div>
          <input 
            type="range"
            min={25000}
            max={60000}
            step={2500}
            value={totalAdBudget}
            onChange={(e) => setTotalAdBudget(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
          />
          <div className="text-[10px] text-slate-400">SeLoger, LeBonCoin, Bien'ici, CRM, Signature</div>
        </div>

        {/* Curseur 2 */}
        <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
          <div className="font-bold text-slate-700 flex justify-between">
            <span>Focus Mandats Exclusifs</span>
            <span className="text-emerald-600 font-extrabold">{exclusiveMandateFocusPct} %</span>
          </div>
          <input 
            type="range"
            min={30}
            max={90}
            step={5}
            value={exclusiveMandateFocusPct}
            onChange={(e) => setExclusiveMandateFocusPct(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-emerald-600"
          />
          <div className="text-[10px] text-slate-400">Réserver la multidiffusion premium aux exclusivités</div>
        </div>

        {/* Curseur 3 */}
        <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
          <div className="font-bold text-slate-700 flex justify-between">
            <span>Élimination doublons SaaS</span>
            <span className="text-purple-600 font-extrabold">{duplicateSoftwareTrimPct} %</span>
          </div>
          <input 
            type="range"
            min={0}
            max={30}
            step={5}
            value={duplicateSoftwareTrimPct}
            onChange={(e) => setDuplicateSoftwareTrimPct(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-purple-600"
          />
          <div className="text-[10px] text-slate-400">Résilier les abonnements secondaires doublons</div>
        </div>
      </div>

      {/* Synthèse du gain dégagé */}
      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-extrabold text-emerald-950 uppercase flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>Marge Nette Créée Sans Perdre de Ventes</span>
          </div>
          <p className="text-xs text-emerald-900 leading-relaxed">
            En réservant les portails payants aux exclusivités, Nelly convertit davantage de propriétaires vendeurs à Pélissanne (l'exclusivité devient un privilège) tout en éliminant les frais inutiles sur les mandats simples partagés avec 5 autres agences.
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl border border-emerald-300 text-center shrink-0 min-w-[200px] shadow-xs">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Trésorerie Récupérée</div>
          <div className="text-xl font-black text-emerald-600">+{formatEuro(annualSavingsHT)} HT / an</div>
          <div className="text-xs font-semibold text-emerald-700">+{formatEuro(monthlySavingsHT)} HT / mois</div>
        </div>
      </div>
    </div>
  );
};
