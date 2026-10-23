import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'sky' | 'emerald' | 'amber' | 'indigo' | 'slate';
}

export const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  value, 
  subtext, 
  color = 'indigo' 
}) => {
  const colorStyles = {
    sky: 'border-sky-200 bg-sky-50/50 text-sky-950',
    emerald: 'border-emerald-200 bg-emerald-50/50 text-emerald-950',
    amber: 'border-amber-200 bg-amber-50/50 text-amber-950',
    indigo: 'border-indigo-200 bg-indigo-50/50 text-indigo-950',
    slate: 'border-slate-200 bg-slate-50 text-slate-900',
  };

  const valColors = {
    sky: 'text-sky-600',
    emerald: 'text-emerald-600',
    amber: 'text-amber-600',
    indigo: 'text-indigo-600',
    slate: 'text-slate-900',
  };

  return (
    <div className={`p-4 rounded-2xl border ${colorStyles[color]} shadow-sm transition-all hover:shadow-md`}>
      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">{label}</div>
      <div className={`text-xl sm:text-2xl font-black ${valColors[color]}`}>{value}</div>
      {subtext && <div className="text-xs text-slate-600 mt-1 leading-snug">{subtext}</div>}
    </div>
  );
};
