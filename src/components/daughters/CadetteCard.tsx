import React from 'react';
import { Trophy, School, Scale } from 'lucide-react';
import { LawBadge } from '../common/LawBadge';

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
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Sa Fille Cadette : École Élémentaire & Escalade (400 € / an)
            </h3>
            <p className="text-xs text-pink-900 font-medium">
              Grande Section / Rentrée en CP • Écoles de Pélissanne • Garde alternée 50/50
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
            Avec <strong>60 000 € de revenus sur 2025</strong> (40 000 € revenu + 20 000 € dividendes), Nelly est facturée au tarif plafond de <strong>4,10 € par repas</strong> à Pélissanne, soit <strong>287 € / an</strong> en garde alternée (~70 repas/an), auxquels s'ajoutent ~450 €/an de garderie périscolaire et centre de loisirs ALSH.
          </p>
        </div>

        {/* Poste 2 : Son Activité Escalade 400 € / an */}
        <div className="p-3.5 rounded-xl bg-white border border-pink-100 space-y-2 shadow-2xs">
          <div className="font-bold text-slate-900 flex items-center justify-between gap-1">
            <div className="flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-pink-600 shrink-0" />
              <span>2. Pratique Sportive : Escalade (400 € / an) :</span>
            </div>
            <LawBadge article="Art. L411-1 Code tourisme" code="ANCV" />
          </div>
          <p className="text-slate-600">
            Nelly finance <strong>400 € / an</strong> pour l'escalade de sa cadette (club Sensabloc / FFME, baudrier, chaussons et stages).
          </p>
          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 text-[11px] font-medium">
            <strong>Optimisation Nell'Immo :</strong> Les <strong>540 €/an de Chèques-Vacances ANCV</strong> attribués par Nell'Immo (0 € d'IR, 0 € de charges) règlent directement le club d'escalade et les stages !
          </div>
        </div>

        {/* ANALYSE COMPARÉE 2027 */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-3">
          <div className="flex items-center justify-between border-b border-indigo-800 pb-2">
            <div className="font-extrabold text-xs uppercase tracking-wider text-pink-300 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-pink-400" />
              <span>Impact concret de 2027 pour sa fille de 5 ans :</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
            <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-500/40 space-y-1.5">
              <div className="font-bold text-emerald-300 flex items-center justify-between">
                <span>Sous LFI / NFP :</span>
                <span className="text-[9px] bg-emerald-800 text-emerald-100 px-1.5 py-0.2 rounded font-bold">+557 €/an</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                <li>• <strong>Cantine 100% gratuite :</strong> +287 €/an d'économie directe.</li>
                <li>• <strong>Fournitures CP gratuites :</strong> +120 €/an.</li>
                <li>• <strong>Pass'Sport universel 150 € :</strong> -150 € sur l'escalade.</li>
              </ul>
            </div>

            <div className="p-3 rounded-lg bg-amber-950/70 border border-amber-500/40 space-y-1.5">
              <div className="font-bold text-amber-300 flex items-center justify-between">
                <span>Sous le RN :</span>
                <span className="text-[9px] bg-amber-800 text-amber-100 px-1.5 py-0.2 rounded font-bold">Allocations & QF</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                <li>• <strong>Allocations familiales sans plafond :</strong> +540 €/an (quote-part 1 enfant).</li>
                <li>• <strong>TVA 5,5% équipement sportif :</strong> -20 €/an sur chaussons/baudrier.</li>
                <li>• <strong>Cantine plein tarif :</strong> maintien des 287 €/an à payer.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
