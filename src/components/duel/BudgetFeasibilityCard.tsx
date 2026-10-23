import React, { useState } from 'react';
import { budgetFeasibilityData } from '../../data/budgetFeasibilityData';
import { Tooltip } from '../common/Tooltip';
import { 
  TrendingUp, 
  AlertTriangle, 
  Landmark, 
  Scale, 
  Euro, 
  ShieldAlert, 
  Layers, 
  HelpCircle,
  Percent,
  Calculator,
  ArrowRight
} from 'lucide-react';

export const BudgetFeasibilityCard: React.FC = () => {
  const [selectedSpreadBps, setSelectedSpreadBps] = useState<number>(50); // de 0 à 150 bps
  const [activeParty, setActiveParty] = useState<'ALL' | 'LFI_NFP' | 'RN'>('ALL');

  // Calcul dynamique de l'impact crédit immobilier pour un emprunt de 270 000 € sur 20 ans
  // Formule mensualité : M = C * [i / (1 - (1+i)^-n)]
  const baseRate = 3.5; // taux moyen 2024-2026 à spread normal (50 bps)
  const currentSpreadDelta = (selectedSpreadBps - 50) / 100; // impact sur le taux en %
  const effectiveMortgageRate = Math.max(2.5, baseRate + currentSpreadDelta * 1.1); // transmission banques ~110%
  
  const calculateMonthlyPayment = (loanAmount: number, annualRatePercent: number, years: number) => {
    const monthlyRate = annualRatePercent / 100 / 12;
    const months = years * 12;
    if (monthlyRate === 0) return loanAmount / months;
    return (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  };

  const baseMonthlyPayment = calculateMonthlyPayment(270000, 3.5, 20);
  const simMonthlyPayment = calculateMonthlyPayment(270000, effectiveMortgageRate, 20);
  const monthlyCostDelta = Math.round(simMonthlyPayment - baseMonthlyPayment);
  const totalCostDelta20y = monthlyCostDelta * 240;
  
  // Perte de capacité d'emprunt pour une mensualité fixe de 1 568 €
  const baseCapacity = 270000;
  const simCapacity = Math.round(1568 * (1 - Math.pow(1 + (effectiveMortgageRate / 100 / 12), -240)) / (effectiveMortgageRate / 100 / 12));
  const capacityLossEuro = baseCapacity - simCapacity;
  const capacityLossPercent = Math.round((capacityLossEuro / baseCapacity) * 100);

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
      
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
              <Landmark className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Audit Macroéconomique & Réalité des Chiffres
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
            Faisabilité Budgétaire LFI vs RN : Chiffrages Officiels vs Audits Indépendants
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Confrontation des promesses avec les évaluations de l'
            <strong className="text-slate-700">Institut Montaigne</strong>, de l'
            <strong className="text-slate-700">OFCE</strong> et de la 
            <strong className="text-slate-700"> Cour des Comptes</strong>.
          </p>
        </div>

        {/* Sélecteur de filtre rapide */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveParty('ALL')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeParty === 'ALL' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Vue Croisée
          </button>
          <button
            onClick={() => setActiveParty('LFI_NFP')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeParty === 'LFI_NFP' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            LFI / NFP
          </button>
          <button
            onClick={() => setActiveParty('RN')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeParty === 'RN' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            RN
          </button>
        </div>
      </div>

      {/* Grille comparative des deux budgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LFI / NFP */}
        {(activeParty === 'ALL' || activeParty === 'LFI_NFP') && (
          <div className="bg-slate-50/70 rounded-2xl p-5 border border-emerald-200/80 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
                <span className="font-extrabold text-sm text-emerald-950 uppercase">Nouveau Front Populaire (LFI)</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                Relance par la demande
              </span>
            </div>

            {/* Chiffres Annoncés vs Chiffrage Montaigne */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Revendiqué par LFI</span>
                <div className="text-sm font-black text-slate-900">152 Mds€ / an</div>
                <div className="text-[11px] text-emerald-700 font-semibold">100% financé (0 € déficit)</div>
                <p className="text-[10px] text-slate-500 leading-tight mt-1">
                  Revenus tirés de l'ISF climatique, de l'IR à 14 tranches et de la suppression de la{' '}
                  <Tooltip 
                    term="Flat Tax à 30%" 
                    explanation="Le Prélèvement Forfaitaire Unique (PFU) de 30% instauré par l'Art. 200 A du CGI. LFI propose de réintégrer dividendes et plus-values au barème de l'IR + cotisations sociales (~35%)." 
                    lawRef="Art. 200 A CGI" 
                  />.
                </p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-rose-200 shadow-2xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-rose-500 block">Audit Institut Montaigne / OFCE</span>
                <div className="text-sm font-black text-rose-700">Dépenses : 233 Mds€</div>
                <div className="text-[11px] text-rose-600 font-bold">Déficit net : +179 Mds€/an</div>
                <p className="text-[10px] text-slate-500 leading-tight mt-1">
                  Recettes réelles évaluées à seulement 54 Mds€ en raison de l'
                  <Tooltip 
                    term="élasticité de l'assiette" 
                    explanation="Phénomène économique où une surtaxe entraîne des comportements d'optimisation, de ralentissement des cessions ou d'exil, réduisant les recettes perçues par rapport au calcul statique théorique." 
                  />.
                </p>
              </div>
            </div>

            {/* Constats Clés de l'Audit */}
            <div className="space-y-1.5 text-xs text-slate-700">
              <span className="font-bold text-slate-900 text-[11px] uppercase tracking-wide block">
                Points critiques soulevés par les économistes :
              </span>
              <ul className="space-y-1 text-[11px] text-slate-600 list-disc list-inside">
                <li>Le SMIC à 1 600 € net et le 100% Sécu pèsent très lourdement sur les comptes publics et le coût du travail des TPE.</li>
                <li>Le déficit public grimperait entre 6,5% et 9% du PIB la première année (contre 5,5% en 2024).</li>
                <li>
                  Activation immédiate de sanctions au titre de la{' '}
                  <Tooltip 
                    term="Procédure de Déficit Excessif" 
                    explanation="Procédure déclenchée par la Commission européenne (Art. 126 TFUE) quand le déficit public dépasse 3% du PIB. Elle impose une trajectoire de rigueur budgétaire sous peine d'amendes financières." 
                    lawRef="Art. 126 TFUE" 
                  />.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* RN */}
        {(activeParty === 'ALL' || activeParty === 'RN') && (
          <div className="bg-slate-50/70 rounded-2xl p-5 border border-amber-200/80 space-y-4">
            <div className="flex items-center justify-between border-b border-amber-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-600"></span>
                <span className="font-extrabold text-sm text-amber-950 uppercase">Rassemblement National</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                Baisses ciblées de TVA
              </span>
            </div>

            {/* Chiffres Annoncés vs Chiffrage Montaigne */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Revendiqué par le RN</span>
                <div className="text-sm font-black text-slate-900">35 Mds€ / an</div>
                <div className="text-[11px] text-amber-700 font-semibold">Équilibré par économies</div>
                <p className="text-[10px] text-slate-500 leading-tight mt-1">
                  Financé par 15 à 20 Mds€ d'économies annoncées sur l'immigration et la suppression de l'
                  <Tooltip 
                    term="Aide Médicale d'État (AME)" 
                    explanation="Dispositif assurant l'accès aux soins d'urgence des étrangers en situation irrégulière. Son budget réel 2024 s'élève à 1,2 milliard d'euros (Cour des Comptes), rendant impossible les 15 Mds€ d'économies annoncées." 
                    lawRef="Cour des Comptes 2024" 
                  />.
                </p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-rose-200 shadow-2xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-rose-500 block">Audit Institut Montaigne / Cour des Comptes</span>
                <div className="text-sm font-black text-rose-700">Dépenses : 85 Mds€</div>
                <div className="text-[11px] text-rose-600 font-bold">Déficit net : +71 Mds€/an</div>
                <p className="text-[10px] text-slate-500 leading-tight mt-1">
                  Économies réelles évaluées à seulement 14 Mds€ : l'AME ne pèse qu'1,2 Md€ et la préférence nationale sur les prestations est inconstitutionnelle.
                </p>
              </div>
            </div>

            {/* Constats Clés de l'Audit */}
            <div className="space-y-1.5 text-xs text-slate-700">
              <span className="font-bold text-slate-900 text-[11px] uppercase tracking-wide block">
                Points critiques soulevés par les économistes :
              </span>
              <ul className="space-y-1 text-[11px] text-slate-600 list-disc list-inside">
                <li>La baisse de la TVA à 5,5% sur le carburant et l'électricité crée un trou immédiat de 12 Mds€/an dans le budget.</li>
                <li>L'exonération d'IR pour les moins de 30 ans coûte 4 à 5 Mds€ et risque la censure constitutionnelle pour rupture d'égalité devant l'impôt.</li>
                <li>La baisse unilatérale de contribution à l'UE (2 Mds€) provoquerait des sanctions immédiates sur les subventions PAC des agriculteurs provençaux.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* 2. Le Vrai Danger pour Nelly : Le Spread OAT et les Taux de Crédit Immobiliers */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-indigo-500/20 text-indigo-400">
              <TrendingUp className="w-4 h-4" />
            </span>
            <h4 className="font-extrabold text-sm text-white">
              Le Danger Invisible : Comment le Déficit de l'État Impacte Directement l'Agence Nell'Immo
            </h4>
          </div>
          <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-700/60">
            Mécanisme de Transmission OAT
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Pourquoi ces budgets font-ils peur ? Parce que les investisseurs internationaux détiennent plus de 53% de la dette souveraine de la France. 
          Si un budget paraît non finançable, les marchés exigent une surprime d'intérêt : c'est le{' '}
          <Tooltip 
            term="Spread OAT-Bund" 
            explanation="Écart de taux d'intérêt entre l'obligation souveraine française à 10 ans (OAT) et la dette allemande (Bund, référence sans risque). En temps normal, il est d'environ 45-50 points de base (bps). Plus il grimpe, plus la France paie cher sa dette, et plus les banques répercutent ce surcoût sur les crédits immobiliers des particuliers." 
          />. 
          Les banques françaises répercutent <strong>100% de cette hausse sur les taux de crédit immobilier</strong> de l'agence Nell'Immo à Pélissanne.
        </p>

        {/* Simulateur Interactif de Spread OAT */}
        <div className="bg-slate-800/90 rounded-xl p-4 border border-slate-700 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 block">
                Simuler un choc de confiance sur la dette française (Spread OAT-Bund) :
              </span>
              <span className="text-xs text-slate-400">
                Déplacez le curseur pour voir l'impact en cascade sur les acheteurs d'une maison de 305 000 € à Pélissanne :
              </span>
            </div>
            <div className="text-right">
              <span className="text-xl font-black text-indigo-400">{selectedSpreadBps} bps</span>
              <span className="text-[10px] text-slate-400 block">
                {selectedSpreadBps <= 55 ? '(Situation normale)' : selectedSpreadBps <= 85 ? '(Tension type dissolution 2024)' : '(Crise de confiance majeure)'}
              </span>
            </div>
          </div>

          <input 
            type="range"
            min={30}
            max={150}
            step={5}
            value={selectedSpreadBps}
            onChange={(e) => setSelectedSpreadBps(Number(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
          />

          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>30 bps (Rigueur)</span>
            <span>50 bps (Normalité)</span>
            <span>85 bps (Choc Dissolution 2024)</span>
            <span>120 bps (Tension UE)</span>
            <span>150 bps (Crise de la dette)</span>
          </div>

          {/* Résultats du Calculateur de Prêt */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Taux Crédit Immobilier 20 ans</span>
              <div className="text-lg font-black text-amber-400">{effectiveMortgageRate.toFixed(2)} %</div>
              <span className="text-[10px] text-slate-500">Taux de base : 3,50%</span>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Mensualité Prêt 270 000 € (Maison 305k€)</span>
              <div className="text-lg font-black text-white">{Math.round(simMonthlyPayment).toLocaleString('fr-FR')} € / mois</div>
              <span className={`text-[10px] font-bold ${monthlyCostDelta > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {monthlyCostDelta > 0 ? `+${monthlyCostDelta} € / mois (+${totalCostDelta20y.toLocaleString('fr-FR')} € sur 20 ans)` : 'Coût stable'}
              </span>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Perte Pouvoir d'Achat Acheteurs Nell'Immo</span>
              <div className={`text-lg font-black ${capacityLossEuro > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {capacityLossEuro > 0 ? `-${capacityLossEuro.toLocaleString('fr-FR')} €` : '0 €'}
              </div>
              <span className="text-[10px] text-slate-400">
                {capacityLossPercent > 0 ? `Soit -${capacityLossPercent}% de budget pour les familles à Pélissanne` : 'Capacité préservée'}
              </span>
            </div>
          </div>
        </div>

        {/* Note de synthèse */}
        <div className="flex items-start gap-2 text-[11px] text-slate-400 bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Enseignement pour Nelly Fernandez :</strong> Les promesses électorales qui creusent le déficit de 70 à 180 Mds€ ne sont pas seulement un débat théorique à Paris. Si les taux souverains se tendent de +80 bps, les acquéreurs de Nell'Immo perdent 20 000 € à 35 000 € de capacité d'achat, ce qui oblige à baisser les prix de vente des maisons de 5% à 8% à Pélissanne pour trouver preneur.
          </span>
        </div>
      </div>

    </div>
  );
};
