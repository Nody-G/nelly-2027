import React, { useState } from 'react';
import { AgencyMarketSimulator } from '../business/AgencyMarketSimulator';
import { DuelComparisonMatrix } from '../duel/DuelComparisonMatrix';
import { BudgetFeasibilityCard } from '../duel/BudgetFeasibilityCard';
import { TaxFlightStudiesCard } from '../duel/TaxFlightStudiesCard';
import { FeasibilityAnalysisCard } from '../duel/FeasibilityAnalysisCard';
import { UnvarnishedTruthCard } from '../duel/UnvarnishedTruthCard';
import { CityCard } from '../cities/CityCard';
import { AgencyWarningsGrid } from '../cities/AgencyWarningsGrid';
import { realCitiesEvidenceList } from '../../data/realCitiesEvidence';
import { Scale, Building2, CheckCircle2, Gavel } from 'lucide-react';

type DuelSectionId = 'MATRIX' | 'MARKET_MACRO' | 'CITIES_EVIDENCE' | 'LEGAL_TRUTH';

export const DuelTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<DuelSectionId>('MATRIX');
  const lfiCities = realCitiesEvidenceList.filter((c) => c.category === 'NFP_LFI');
  const rnCities = realCitiesEvidenceList.filter((c) => c.category === 'RN');

  const navItems: { id: DuelSectionId; label: string; icon: React.ElementType }[] = [
    { id: 'MATRIX', label: '1. Croisements Systémiques & Mesures', icon: Scale },
    { id: 'MARKET_MACRO', label: "2. Marché Nell'Immo & Taux Crédit OAT", icon: Building2 },
    { id: 'CITIES_EVIDENCE', label: '3. Bilans Mairies Réelles & Exil Fiscal', icon: CheckCircle2 },
    { id: 'LEGAL_TRUTH', label: '4. Filtre Constitutionnel & Verdict', icon: Gavel },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* En-tête Global du Duel avec navigation en 4 volets exclusifs */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
                <Scale className="w-5 h-5 text-indigo-700" />
              </span>
              <span className="text-xs font-bold uppercase text-indigo-700 tracking-wider">
                Comparatif Impartial & Sourcé • Horizon 2027
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Duel Stratégique LFI vs RN : Croisements Profonds, Agence Nell'Immo & Preuves en Mairies
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
            Navigation par Volet Thématique
          </span>
        </div>

        {/* Barre de sélection de volet exclusif (fini le défilement infini) */}
        <div className="flex flex-wrap gap-2 text-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all ${
                  activeSection === item.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* VOLET 1 : LES 6 CROISEMENTS SYSTÉMIQUES & COMPARATIF MESURE PAR MESURE */}
      {activeSection === 'MATRIX' && (
        <section className="space-y-4">
          <DuelComparisonMatrix />
        </section>
      )}

      {/* VOLET 2 : SIMULATEUR MARCHÉ NELL'IMMO & DETTE OAT */}
      {activeSection === 'MARKET_MACRO' && (
        <section className="space-y-6">
          <AgencyMarketSimulator />
          <BudgetFeasibilityCard />
        </section>
      )}

      {/* VOLET 3 : PREUVES EN MAIRIES RÉELLES & EXIL FISCAL */}
      {activeSection === 'CITIES_EVIDENCE' && (
        <section className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase text-indigo-600">Vérification Empirique 2020 - 2026</span>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                Ce que LFI/Gauche et le RN ont réellement appliqué dans les mairies qu'ils dirigent
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Données issues des comptes administratifs, délibérations municipales et rapports des Chambres Régionales des Comptes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-xs text-emerald-800 uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  <span>Villes Gauche / NFP (Saint-Denis, Montpellier, Vénissieux)</span>
                </div>
                {lfiCities.map((c, i) => (
                  <CityCard key={i} item={c} />
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-xs text-amber-800 uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                  <span>Mairies RN (Fréjus, Perpignan, Hayange, Beaucaire)</span>
                </div>
                {rnCities.map((c, i) => (
                  <CityCard key={i} item={c} />
                ))}
              </div>
            </div>
          </div>

          <AgencyWarningsGrid />
          <TaxFlightStudiesCard />
        </section>
      )}

      {/* VOLET 4 : FILTRE CONSTITUTIONNEL & VERDICT SANS FILTRE */}
      {activeSection === 'LEGAL_TRUTH' && (
        <section className="space-y-6">
          <FeasibilityAnalysisCard />
          <UnvarnishedTruthCard />
        </section>
      )}
    </div>
  );
};
