import React from 'react';
import { CadetteCard } from '../daughters/CadetteCard';
import { AineeCard } from '../daughters/AineeCard';
import { HigherEducationSimulator } from '../daughters/HigherEducationSimulator';
import { LifeForecastRoadmapCard } from '../daughters/LifeForecastRoadmapCard';
import { RetirementComparison } from '../timeline/RetirementComparison';
import { AgencyMarketSimulator } from '../business/AgencyMarketSimulator';

export const DaughtersTab: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* 1. Prévision de Vie 2027-2039 (LFI vs RN), Verdict Chiffré & 5 Actions Gagnantes */}
      <LifeForecastRoadmapCard />

      {/* 2. Fiches Individuelles des 2 Filles (Cadette 5 ans Escalade & Aînée 11 ans Piano/Orthodontie) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CadetteCard />
        <AineeCard />
      </div>

      {/* 3. Études Supérieures (2033 & 2039 à Aix/Marseille) & Retraite de Nelly (60 vs 64 ans) */}
      <HigherEducationSimulator />
      <RetirementComparison />

      {/* 4. Impact LFI vs RN sur le Chiffre d'Affaires de Nell'Immo (130k€ HT) & Taux Crédit */}
      <AgencyMarketSimulator />
    </div>
  );
};
