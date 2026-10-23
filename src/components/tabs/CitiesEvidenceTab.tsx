import React from 'react';
import { realCitiesEvidenceList } from '../../data/realCitiesEvidence';
import { CityCard } from '../cities/CityCard';
import { AgencyWarningsGrid } from '../cities/AgencyWarningsGrid';
import { Building2, SearchCheck, ShieldCheck } from 'lucide-react';

export const CitiesEvidenceTab: React.FC = () => {
  const lfiCities = realCitiesEvidenceList.filter(c => c.category === 'NFP_LFI');
  const rnCities = realCitiesEvidenceList.filter(c => c.category === 'RN');

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* En-tête */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
                <SearchCheck className="w-4 h-4 text-indigo-700" />
              </span>
              <span className="text-xs font-bold uppercase text-indigo-700 tracking-wider">
                Vérification Factuelle sur le Terrain (2024 - Octobre 2026)
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Ce que LFI/NFP et le RN ont réellement voté et appliqué dans leurs municipalités
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
            Source : Chambres Régionales des Comptes & Délibérations
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Au-delà des promesses électorales pour 2027, voici ce que donnent concrètement ces politiques dans les municipalités gérées par la gauche/LFI et par le Rassemblement National, ainsi que les avertissements et opportunités objectifs pour l'agence Nell'Immo et ses deux filles à Pélissanne :
        </p>
      </div>

      {/* Cartes des Villes Témoins */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Colonne Gauche : Villes LFI / NFP */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <span>Exemples vérifiés en Villes LFI / NFP (Saint-Denis, Montpellier, Vénissieux)</span>
          </div>
          {lfiCities.map((c, i) => (
            <CityCard key={i} item={c} />
          ))}
        </div>

        {/* Colonne Droite : Villes RN */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-sm text-amber-800">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
            <span>Exemples vérifiés en Villes RN (Fréjus, Perpignan, Hayange, Beaucaire)</span>
          </div>
          {rnCities.map((c, i) => (
            <CityCard key={i} item={c} />
          ))}
        </div>

      </div>

      {/* Grille des Mises en Garde pour Nell'Immo */}
      <AgencyWarningsGrid />

    </div>
  );
};

