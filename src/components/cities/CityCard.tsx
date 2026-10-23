import React from 'react';
import { CityEvidenceItem } from '../../data/realCitiesEvidence';
import { Building2, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

interface CityCardProps {
  item: CityEvidenceItem;
}

export const CityCard: React.FC<CityCardProps> = ({ item }) => {
  const isLFI = item.category === 'NFP_LFI';

  return (
    <div className={`p-5 rounded-2xl border ${
      isLFI ? 'bg-emerald-50/40 border-emerald-200' : 'bg-amber-50/40 border-amber-200'
    } shadow-xs space-y-3.5 flex flex-col justify-between`}>
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
            isLFI ? 'bg-emerald-700 text-white' : 'bg-slate-900 text-amber-300'
          }`}>
            {item.category === 'NFP_LFI' ? 'Exécutif Gauche / NFP' : 'Exécutif Rassemblement National'}
          </span>
          <span className="text-[10px] text-slate-500 font-medium">{item.period}</span>
        </div>

        <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
          <Building2 className={`w-4 h-4 ${isLFI ? 'text-emerald-700' : 'text-amber-700'}`} />
          <span>{item.city}</span>
          <span className="text-xs font-normal text-slate-500">({item.mayorOrMajority})</span>
        </h3>

        <div className="space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Mesures votées & appliquées :</div>
          <ul className="space-y-1 text-xs text-slate-700">
            {item.measuresEnacted.map((m, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isLFI ? 'text-emerald-600' : 'text-amber-600'}`} />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
        <div className="p-2.5 rounded-xl bg-white border border-slate-200/60 space-y-1">
          <div className="font-bold text-slate-800">Impact pour les enfants & familles :</div>
          <p className="text-slate-600 leading-relaxed">{item.impactOnChildrenAndFamilies}</p>
        </div>

        <div className="p-2.5 rounded-xl bg-white border border-slate-200/60 space-y-1">
          <div className="font-bold text-slate-800">Impact pour l'immobilier & l'agence :</div>
          <p className="text-slate-600 leading-relaxed">{item.impactOnRealEstateAndAgency}</p>
        </div>

        <div className="text-[10px] text-slate-400 italic flex items-center gap-1">
          <FileText className="w-3 h-3 text-slate-400" />
          <span>Source : {item.sourceReference}</span>
        </div>
      </div>
    </div>
  );
};
