import React from 'react';
import { Calendar, Award, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';

export const RetirementComparison: React.FC = () => {
  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  const monthlyPensionEstimated = 2100; // Estimation pension dirigeante TNS/Salariée avec carrière complète

  return (
    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Impact Comparé de l'Âge de Retraite de Nelly Fernandez (60 ans vs 62 ans vs 64 ans)
            </h3>
          </div>
          <p className="text-xs text-slate-600 mt-0.5">
            Présidente assimilée salariée (Régime Général & Agirc-Arrco) : l'âge de départ est un arbitrage financier colossal.
          </p>
        </div>
        <span className="text-xs font-bold bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-lg">
          Pension estimée : ~2 100 € net / mois
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        
        {/* Continuité */}
        <div className="p-4 rounded-xl bg-white border border-sky-200 space-y-2 flex flex-col justify-between">
          <div className="space-y-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-sky-800">
              Continuité (Loi 2023)
            </span>
            <div className="text-xl font-black text-slate-900">64 ans</div>
            <div className="text-slate-500 font-medium">43 annuités (172 trimestres)</div>
            <p className="text-slate-600 leading-relaxed">
              Maintien strict de la réforme d'avril 2023. Nelly doit cotiser jusqu'à ses 64 ans révolus pour toucher sa pension sans décote.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-100 font-bold text-slate-700">
            Référence de départ (0 an d'avance)
          </div>
        </div>

        {/* LFI / NFP */}
        <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-300 space-y-2 flex flex-col justify-between">
          <div className="space-y-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white">
              Nouveau Front Populaire / LFI
            </span>
            <div className="text-xl font-black text-emerald-700">60 ans</div>
            <div className="text-emerald-900 font-medium">40 annuités de cotisation</div>
            <p className="text-emerald-950 leading-relaxed">
              Abrogation immédiate de la loi 2023 et retour de la retraite à 60 ans à taux plein. Nelly part <strong>4 années plus tôt</strong> tout en percevant sa pension.
            </p>
          </div>
          <div className="pt-2 border-t border-emerald-200 font-extrabold text-emerald-800 bg-white p-2 rounded-lg border border-emerald-300">
            Gain net de pension : +{formatEuro(monthlyPensionEstimated * 12 * 4)} (4 ans de pension)
          </div>
        </div>

        {/* RN */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-300 space-y-2 flex flex-col justify-between">
          <div className="space-y-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white">
              Rassemblement National
            </span>
            <div className="text-xl font-black text-amber-900">60 à 62 ans</div>
            <div className="text-amber-900 font-medium">Progressif selon début de carrière</div>
            <p className="text-amber-950 leading-relaxed">
              Départ à 60 ans réservé aux personnes ayant commencé à travailler avant 20 ans avec 40 annuités. Sinon, départ échelonné entre 62 et 64 ans.
            </p>
          </div>
          <div className="pt-2 border-t border-amber-200 font-extrabold text-amber-900 bg-white p-2 rounded-lg border border-amber-300">
            Gain potentiel : 0 à 2 ans de pension ({formatEuro(monthlyPensionEstimated * 12 * 2)})
          </div>
        </div>

      </div>
    </div>
  );
};
