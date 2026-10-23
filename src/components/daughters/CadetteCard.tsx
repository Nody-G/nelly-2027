import React from 'react';
import { Sparkles, Trophy, School, CheckCircle2, AlertTriangle, Heart, Clock, Scale } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';
import { Tooltip } from '../common/Tooltip';
import { pelissanneLocalData } from '../../data/pelissanneRates';

export const CadetteCard: React.FC = () => {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-pink-50/70 border border-pink-200 space-y-4 shadow-xs">
      
      {/* En-tête Cadette */}
      <div className="flex flex-wrap items-center justify-between border-b border-pink-200 pb-3 gap-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white flex flex-col items-center justify-center font-black shadow-sm">
            <span className="text-base leading-none">5 ans</span>
            <span className="text-[9px] font-semibold opacity-90 uppercase mt-0.5">Cadette</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Sa Fille Cadette : École Élémentaire & Escalade (400 € / an)
              </h3>
            </div>
            <p className="text-xs text-pink-900 font-medium">
              Grande Section / Rentrée en CP • Écoles Roux de Brignoles & Victor Hugo à Pélissanne
            </p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-pink-100 text-pink-900 border border-pink-300">
          Escalade & ALSH
        </span>
      </div>

      <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed">
        
        {/* Poste 1 : Écoles, Cantine & Périscolaire Pélissanne */}
        <div className="p-3.5 rounded-xl bg-white border border-pink-100 space-y-2 shadow-2xs">
          <div className="font-bold text-slate-900 flex items-center justify-between gap-1">
            <div className="flex items-center gap-1.5">
              <School className="w-4 h-4 text-pink-600 shrink-0" />
              <span>1. Rythme Scolaire & Tarifs Municipaux à Pélissanne :</span>
            </div>
            <span className="text-[10px] text-pink-700 font-semibold bg-pink-50 px-2 py-0.5 rounded border border-pink-200">
              Tranche 5 Haute
            </span>
          </div>
          <p className="text-slate-600">
            À Pélissanne, en raison des revenus de Nelly (70 000 € net), la cantine scolaire est facturée au tarif plafond de <strong>4,10 € par repas</strong>. 
            Sur sa moitié de garde alternée (~70 repas/an), cela représente <strong>287 € / an</strong>.
            Le périscolaire du soir (3,80 €/h jusqu'à 18h30 pour permettre les visites d'agences) et le centre de loisirs ALSH Jean-Paul Houlié le mercredi (12,50 € la demi-journée) portent le budget municipal à <strong>~650 € / an</strong>.
          </p>
        </div>

        {/* Poste 2 : Son Activité Escalade 400 € / an */}
        <div className="p-3.5 rounded-xl bg-white border border-pink-100 space-y-2 shadow-2xs">
          <div className="font-bold text-slate-900 flex items-center justify-between gap-1">
            <div className="flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-pink-600 shrink-0" />
              <span>2. Passion & Pratique Sportive : Escalade (400 € / an) :</span>
            </div>
            <LawBadge article="Art. L411-1 Code tourisme" code="ANCV" />
          </div>
          <p className="text-slate-600">
            Nelly finance environ <strong>400 € / an</strong> pour la pratique sportive de sa fille cadette (adhésion club Sensabloc / FFME, baudrier, chaussons évolutifs et stages vacances d'escalade en falaise provençale).
          </p>
          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 text-[11px] font-medium">
            💡 <strong>L'Optimisation Immédiate Nell'Immo :</strong> Inéligible au Pass'Sport d'État (revenus &gt; plafond), Nelly se fait attribuer des <strong>Chèques-Vacances ANCV</strong> par sa société Nell'Immo. Exonérés d'IR et de cotisations sociales, ils sont acceptés à 100% par le club d'escalade pour payer la cotisation et les stages !
          </div>
        </div>

        {/* ANALYSE COMPARÉE APPROFONDIE DU PASSAGE DE CHAQUE PARTI SUR LA CADETTE */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-3">
          <div className="flex items-center justify-between border-b border-indigo-800 pb-2">
            <div className="font-extrabold text-xs uppercase tracking-wider text-pink-300 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-pink-400" />
              <span>Ce que changera concrètement 2027 pour sa fille de 5 ans :</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">CP & Primaire Pélissanne</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
            {/* Colonne LFI */}
            <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-500/40 space-y-1.5">
              <div className="font-bold text-emerald-300 flex items-center justify-between">
                <span>Sous LFI / NFP :</span>
                <span className="text-[9px] bg-emerald-800 text-emerald-100 px-1.5 py-0.2 rounded font-bold">Gains Max</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                <li>• <strong>Cantine 100% gratuite :</strong> 0 € à payer en mairie (+287 €/an d'économie directe).</li>
                <li>• <strong>Fournitures CP gratuites :</strong> Cartable et pack complet de rentrée distribués gratuitement en mairie (+120 €).</li>
                <li>• <strong>Pass'Sport universel 150 € :</strong> Déduit directement des 400 € d'escalade sans condition de ressources (-150 €).</li>
                <li>• <strong>Classes limitées à 20 élèves :</strong> Meilleur apprentissage de la lecture en CP.</li>
                <li className="text-amber-300 font-medium">• ⚠️ Risque : files d'attente accrues à la cantine scolaire.</li>
              </ul>
            </div>

            {/* Colonne RN */}
            <div className="p-3 rounded-lg bg-amber-950/70 border border-amber-500/40 space-y-1.5">
              <div className="font-bold text-amber-300 flex items-center justify-between">
                <span>Sous le RN :</span>
                <span className="text-[9px] bg-amber-800 text-amber-100 px-1.5 py-0.2 rounded font-bold">Allocations</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                <li>• <strong>Allocations familiales rétablies :</strong> Nelly touche ~50 € à 70 € / mois au titre de la cadette (+600 € à +840 €/an nets directs).</li>
                <li>• <strong>Port de l'uniforme / blouse :</strong> Mesure obligatoire à l'école élémentaire pour l'égalité des tenues.</li>
                <li>• <strong>Baisse TVA 5,5% :</strong> Réduction sur les chaussons d'escalade et équipement sportif (-20 €).</li>
                <li>• <strong>Cantine plein tarif :</strong> Nelly continue de payer les 287 €/an de cantine et le périscolaire plein pot.</li>
                <li className="text-rose-300 font-medium">• ⚠️ Risque : sanctions financières si retards répétés.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
