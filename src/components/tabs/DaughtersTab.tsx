import React from 'react';
import { CadetteCard } from '../daughters/CadetteCard';
import { AineeCard } from '../daughters/AineeCard';
import { CustodySplitCalculator } from '../daughters/CustodySplitCalculator';
import { HigherEducationSimulator } from '../daughters/HigherEducationSimulator';
import { DaughtersAndCommonGoodBenchmark } from '../daughters/DaughtersAndCommonGoodBenchmark';
import { Users, Heart, Sparkles, MapPin, Scale } from 'lucide-react';

export const DaughtersTab: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* En-tête Priorité 1 Filles */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-pink-100 text-pink-700">
                <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
              </span>
              <span className="text-xs font-bold uppercase text-pink-700 tracking-wider">
                Priorité Absolue • Vie Quotidienne, Épanouissement & Avenir des Enfants
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Ses 2 Filles à Pélissanne : Cadette (5 ans Escalade) & Aînée (11 ans Piano & Collège)
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-indigo-500" />
            Pélissanne (13330) • Garde Alternée 50/50
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Avec un revenu net annuel de 70 000 € issu de Nell'Immo (CA ~130 000 € HT), Nelly se situe au-dessus des plafonds d'aides sociales actuelles (0 € de CAF, 0 € de bourses, tranche 5 haute à Pélissanne). 
          Voici l'audit approfondi, poste par poste, des coûts réels, des leviers d'optimisation légaux (CESU 2 591 €, Chèques-Vacances, crédit d'impôt 50%) et le <strong>comparatif des programmes politiques 2027</strong> pour le bien-être de ses filles et le bien commun.
        </p>
      </div>

      {/* Cartes Individuelles Cadette 5 ans & Aînée 11 ans */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CadetteCard />
        <AineeCard />
      </div>

      {/* BENCHMARK COMPARATIF POLITIQUE DES 2 FILLES & BIEN COMMUN À PÉLISSANNE */}
      <DaughtersAndCommonGoodBenchmark />

      {/* Gestion Fiscale de la Garde Alternée & Case T Parent Isolé */}
      <CustodySplitCalculator />

      {/* Projection Études Supérieures Horizon 2033 & 2039 */}
      <HigherEducationSimulator />

    </div>
  );
};
