import React from 'react';
import { TimelineRoadmap } from '../timeline/TimelineRoadmap';
import { RetirementComparison } from '../timeline/RetirementComparison';
import { CalendarClock, ShieldCheck, Scale, History } from 'lucide-react';

export const TimelineRetirementTab: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* En-tête */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
                <CalendarClock className="w-4 h-4 text-indigo-700" />
              </span>
              <span className="text-xs font-bold uppercase text-indigo-700 tracking-wider">
                Calendrier Constitutionnel & Trajectoire de Vie (2026 → 2039)
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Quand exactement chaque mesure entrerait-elle en vigueur et quel impact sur la retraite ?
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            Art. 34 de la Constitution & Non-Rétroactivité
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          En vertu du principe constitutionnel de non-rétroactivité fiscale, un président élu en mai 2027 ne peut pas modifier rétroactivement les impôts payés sur les revenus de 2026 ou du début 2027.
          Toute grande réforme d'envergure (comme la fin du PFU ou le barème à 14 tranches de LFI) ne s'appliquera qu'à compter du <strong>1er janvier 2028</strong>.
          Voici la feuille de route chronologique étape par étape :
        </p>
      </div>

      {/* Feuille de route chronologique en 4 étapes */}
      <TimelineRoadmap />

      {/* Comparatif de la Retraite */}
      <RetirementComparison />

    </div>
  );
};
