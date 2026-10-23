import React from 'react';
import { LawBadge } from '../common/LawBadge';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface LeverCardProps {
  number: number;
  title: string;
  lawArticle: string;
  badgeCode: string;
  summary: string;
  explanation: string;
  netAnnualGain: string;
  badgeColor?: 'indigo' | 'emerald' | 'amber' | 'purple';
}

export const LeverCard: React.FC<LeverCardProps> = ({
  number,
  title,
  lawArticle,
  badgeCode,
  summary,
  explanation,
  netAnnualGain,
  badgeColor = 'indigo'
}) => {
  const headerColors = {
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
  };

  return (
    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className={`px-2.5 py-0.5 rounded text-xs font-bold border ${headerColors[badgeColor]}`}>
            Levier {number}. {title}
          </span>
          <LawBadge article={lawArticle} code={badgeCode} />
        </div>

        <h3 className="font-extrabold text-slate-900 text-sm">{summary}</h3>
        
        <p className="text-xs text-slate-600 leading-relaxed">
          {explanation}
        </p>
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-medium text-slate-500">Gain net extrait :</span>
        <span className="text-xs font-black text-emerald-700 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>{netAnnualGain}</span>
        </span>
      </div>
    </div>
  );
};
