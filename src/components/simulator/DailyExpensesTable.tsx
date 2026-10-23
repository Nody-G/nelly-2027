import React from 'react';
import { getDetailedExpenseLines, DaughterExpenseBreakdown } from '../../engine/budgetEngine';
import { Info } from 'lucide-react';

export const DailyExpensesTable: React.FC = () => {
  const linesContinuite = getDetailedExpenseLines('continuite');
  const linesLFI = getDetailedExpenseLines('nfp_lfi');
  const linesRN = getDetailedExpenseLines('rn');
  const linesDroite = getDetailedExpenseLines('droite');

  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  const totalCont = linesContinuite.reduce((acc: number, l: DaughterExpenseBreakdown) => acc + l.totalAnnual, 0);
  const totalLFI = linesLFI.reduce((acc: number, l: DaughterExpenseBreakdown) => acc + l.totalAnnual, 0);
  const totalRN = linesRN.reduce((acc: number, l: DaughterExpenseBreakdown) => acc + l.totalAnnual, 0);
  const totalDroite = linesDroite.reduce((acc: number, l: DaughterExpenseBreakdown) => acc + l.totalAnnual, 0);

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase text-indigo-600">
            Comparatif Budgétaire Croisé • Vie Quotidienne Réelle à Pélissanne
          </span>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
            Détail Euro par Euro des Frais Quotidiens de Nelly et ses 2 Filles (Garde Alternée)
          </h3>
        </div>
        <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium">
          Base : Maison 305k€ + Cadette 5 ans (Escalade) + Aînée 11 ans (Piano & Collège)
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs min-w-[760px]">
          <thead>
            <tr className="border-b-2 border-slate-200 text-slate-500 uppercase text-[10px] bg-slate-50">
              <th className="py-2.5 px-3">Poste de dépense quotidien</th>
              <th className="py-2.5 px-3 text-sky-900 bg-sky-50/50">1. Continuité (Actuel)</th>
              <th className="py-2.5 px-3 text-emerald-900 bg-emerald-50/50">2. Programme NFP / LFI</th>
              <th className="py-2.5 px-3 text-amber-900 bg-amber-50/50">3. Programme RN</th>
              <th className="py-2.5 px-3 text-indigo-900 bg-indigo-50/50">4. Droite Républicaine</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {linesContinuite.map((line: DaughterExpenseBreakdown, idx: number) => {
              const lfi = linesLFI[idx];
              const rn = linesRN[idx];
              const droite = linesDroite[idx];

              return (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-slate-900">
                    <div>{line.label}</div>
                    <div className="text-[10px] text-slate-400 font-normal">{line.sourceRef}</div>
                  </td>
                  
                  {/* Continuité */}
                  <td className="py-2.5 px-3 bg-sky-50/20">
                    <span className="font-bold text-slate-900">{formatEuro(line.totalAnnual)} / an</span>
                    <div className="text-[11px] text-slate-500 mt-0.5">{line.description}</div>
                  </td>

                  {/* LFI */}
                  <td className="py-2.5 px-3 bg-emerald-50/20">
                    <span className="font-bold text-emerald-800">
                      {formatEuro(lfi.totalAnnual)} / an
                    </span>
                    {line.totalAnnual - lfi.totalAnnual > 0 && (
                      <span className="ml-1 text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1 rounded">
                        Éco : +{formatEuro(line.totalAnnual - lfi.totalAnnual)}
                      </span>
                    )}
                    <div className="text-[11px] text-emerald-900 mt-0.5">{lfi.description}</div>
                  </td>

                  {/* RN */}
                  <td className="py-2.5 px-3 bg-amber-50/20">
                    <span className="font-bold text-amber-900">
                      {formatEuro(rn.totalAnnual)} / an
                    </span>
                    {line.totalAnnual - rn.totalAnnual > 0 && (
                      <span className="ml-1 text-[10px] font-bold text-amber-600 bg-amber-100 px-1 rounded">
                        Éco : +{formatEuro(line.totalAnnual - rn.totalAnnual)}
                      </span>
                    )}
                    <div className="text-[11px] text-slate-600 mt-0.5">{rn.description}</div>
                  </td>

                  {/* Droite */}
                  <td className="py-2.5 px-3 bg-indigo-50/20">
                    <span className="font-bold text-indigo-900">
                      {formatEuro(droite.totalAnnual)} / an
                    </span>
                    <div className="text-[11px] text-slate-500 mt-0.5">{droite.description}</div>
                  </td>
                </tr>
              );
            })}

            {/* Total */}
            <tr className="bg-slate-100/90 font-black text-slate-900 text-xs border-t-2 border-slate-300">
              <td className="py-3 px-3 uppercase tracking-wider">TOTAL FRAIS QUOTIDIENS INCOMPRESSIBLES</td>
              <td className="py-3 px-3 text-sky-900 font-black">{formatEuro(totalCont)} / an</td>
              <td className="py-3 px-3 text-emerald-700 font-black">
                {formatEuro(totalLFI)} / an 
                <span className="block text-[10px] font-bold text-emerald-600">Gain : +{formatEuro(totalCont - totalLFI)} / an</span>
              </td>
              <td className="py-3 px-3 text-amber-800 font-black">
                {formatEuro(totalRN)} / an
                <span className="block text-[10px] font-bold text-amber-600">Gain : +{formatEuro(totalCont - totalRN)} / an</span>
              </td>
              <td className="py-3 px-3 text-indigo-900 font-black">
                {formatEuro(totalDroite)} / an
                <span className="block text-[10px] font-bold text-indigo-600">Gain : +{formatEuro(totalCont - totalDroite)} / an</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-[11px] text-indigo-900 flex items-start gap-2">
        <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
        <span>
          <strong>Méthodologie de calcul :</strong> Les coûts scolaires, périscolaires et sportifs sont calculés sur la quote-part effective assumée par Nelly en résidence alternée (50% du temps scolaire et des mercredis). Les économies sous LFI intègrent la gratuité municipale totale (cantine, kits rentrée) et le « 100% Sécu » sur l'orthodontie. Sous le RN, l'économie provient de la baisse de la TVA de 20% à 5,5% sur les énergies et carburants.
        </span>
      </div>
    </div>
  );
};
