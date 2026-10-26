import React, { useState } from 'react';
import { CadetteCard } from '../daughters/CadetteCard';
import { AineeCard } from '../daughters/AineeCard';
import { CustodySplitCalculator } from '../daughters/CustodySplitCalculator';
import { HigherEducationSimulator } from '../daughters/HigherEducationSimulator';
import { LifeForecastRoadmapCard } from '../daughters/LifeForecastRoadmapCard';
import { TimelineRoadmap } from '../timeline/TimelineRoadmap';
import { RetirementComparison } from '../timeline/RetirementComparison';
import { Heart, MapPin, Compass, Users, GraduationCap, Calendar } from 'lucide-react';

type DaughtersViewSection = 'FORECAST' | 'TIMELINE' | 'GIRLS_CUSTODY' | 'STUDIES_RETIREMENT';

export const DaughtersTab: React.FC = () => {
  const [section, setSection] = useState<DaughtersViewSection>('FORECAST');

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* En-tête et sous-navigation claire en 4 volets (1 seul bloc affiché à la fois) */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-pink-100 text-pink-700">
                <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
              </span>
              <span className="text-xs font-bold uppercase text-pink-700 tracking-wider">
                Trajectoire de Vie 2027 → 2039 • Ses 2 Filles (5 & 11 ans) & Retraite de Nelly
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
              Prévision de Vie à 12 Ans : École, Garde Alternée, Études Supérieures (2033) & Retraite
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-indigo-500" />
            Pélissanne (13330) • Garde Alternée 50/50
          </span>
        </div>

        {/* Sélecteur de volet exclusif épuré */}
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => setSection('FORECAST')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              section === 'FORECAST'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>1. Prévision de Vie 2027-2039 (LFI vs RN)</span>
          </button>

          <button
            type="button"
            onClick={() => setSection('GIRLS_CUSTODY')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              section === 'GIRLS_CUSTODY'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>2. Fiches Filles (5 & 11 ans) & Garde 50/50</span>
          </button>

          <button
            type="button"
            onClick={() => setSection('STUDIES_RETIREMENT')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              section === 'STUDIES_RETIREMENT'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>3. Études (2033) & Retraite (60 vs 64 ans)</span>
          </button>

          <button
            type="button"
            onClick={() => setSection('TIMELINE')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              section === 'TIMELINE'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>4. Calendrier Légal 2026-2039</span>
          </button>
        </div>
      </div>

      {/* VOLET 1 : PRÉVISION DE VIE 2027-2039 */}
      {section === 'FORECAST' && <LifeForecastRoadmapCard />}

      {/* VOLET 2 : FICHES INDIVIDUELLES DES 2 FILLES & SIMULATEUR GARDE ALTERNÉE */}
      {section === 'GIRLS_CUSTODY' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <CadetteCard />
            <AineeCard />
          </div>
          <CustodySplitCalculator />
        </div>
      )}

      {/* VOLET 3 : ÉTUDES SUPÉRIEURES (2033 & 2039) & RETRAITE DE NELLY */}
      {section === 'STUDIES_RETIREMENT' && (
        <div className="space-y-5">
          <HigherEducationSimulator />
          <RetirementComparison />
        </div>
      )}

      {/* VOLET 4 : CALENDRIER CONSTITUTIONNEL */}
      {section === 'TIMELINE' && <TimelineRoadmap />}
    </div>
  );
};
