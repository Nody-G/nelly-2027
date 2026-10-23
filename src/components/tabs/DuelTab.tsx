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
import { 
  Scale, 
  Building2, 
  TrendingUp, 
  AlertTriangle, 
  ShieldCheck, 
  CheckCircle2, 
  Landmark, 
  BookOpen, 
  Layers, 
  Gavel 
} from 'lucide-react';

export const DuelTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('ALL');
  const lfiCities = realCitiesEvidenceList.filter(c => c.category === 'NFP_LFI');
  const rnCities = realCitiesEvidenceList.filter(c => c.category === 'RN');

  const navItems = [
    { id: 'ALL', label: 'Tout Afficher', icon: Layers },
    { id: 'MARKET', label: "1. Marché Nell'Immo", icon: Building2 },
    { id: 'MATRIX', label: '2. Duel Mesures', icon: Scale },
    { id: 'BUDGET', label: '3. Faisabilité Budgets & OAT', icon: Landmark },
    { id: 'TAX_FLIGHT', label: '4. Enquête Exil Fiscal', icon: BookOpen },
    { id: 'LEGAL', label: '5. Filtre Institutionnel', icon: Gavel },
    { id: 'CITIES', label: '6. Faits en Mairies', icon: CheckCircle2 },
    { id: 'TRUTH', label: '7. Vérités, Peurs & Verdict', icon: AlertTriangle }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* En-tête Global du Duel */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
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
              Duel Stratégique LFI vs RN : Agence Nell'Immo, Pouvoir d'Achat & Avenir des Filles
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
            Programmes Officiels & Réalités du Terrain
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Pour aider Nelly à arbitrer en toute sérénité, ce chapitre croise <strong>les programmes authentiques de La France Insoumise (NFP) et du Rassemblement National</strong> avec 
          les audits budgétaires indépendants (Institut Montaigne, OFCE, Cour des Comptes), les études académiques sur l'exil fiscal et les bilans municipaux réels depuis 2020. 
          Chaque chiffre, chaque probabilité institutionnelle et chaque impact concret sur l'agence Nell'Immo et ses deux filles sont disséqués sans filtre partisan.
        </p>

        {/* Barre de navigation rapide interne au Duel */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 pb-1 border-t border-slate-100 text-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeSection === item.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. Simulateur d'Impact Marché pour Nell'Immo */}
      {(activeSection === 'ALL' || activeSection === 'MARKET') && (
        <section id="section-market" className="space-y-3">
          <AgencyMarketSimulator />
        </section>
      )}

      {/* 2. Matrice Comparative Approfondie (Toutes les mesures LFI vs RN) */}
      {(activeSection === 'ALL' || activeSection === 'MATRIX') && (
        <section id="section-matrix" className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wide">
                Comparatif Mesure par Mesure : Le Pourquoi du Comment, Sources & Probabilités
              </h3>
              <p className="text-xs text-slate-500">
                Filtrez par thématique : Fiscalité & Capital, Vie des Filles, Immobilier, Retraite.
              </p>
            </div>
          </div>
          <DuelComparisonMatrix />
        </section>
      )}

      {/* 3. Faisabilité Budgétaire & Risque OAT */}
      {(activeSection === 'ALL' || activeSection === 'BUDGET') && (
        <section id="section-budget" className="space-y-3">
          <BudgetFeasibilityCard />
        </section>
      )}

      {/* 4. Enquête Scientifique sur la Taxation des Ultra-Riches & Exil Fiscal */}
      {(activeSection === 'ALL' || activeSection === 'TAX_FLIGHT') && (
        <section id="section-tax-flight" className="space-y-3">
          <TaxFlightStudiesCard />
        </section>
      )}

      {/* 5. Analyse Institutionnelle : Faisabilité Juridique & Constitutionnelle */}
      {(activeSection === 'ALL' || activeSection === 'LEGAL') && (
        <section id="section-legal" className="space-y-3">
          <FeasibilityAnalysisCard />
        </section>
      )}

      {/* 6. Preuves Factuelles en Villes Réelles */}
      {(activeSection === 'ALL' || activeSection === 'CITIES') && (
        <section id="section-cities" className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase text-indigo-600">Vérification Empirique 2020 - 2026</span>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                Ce que LFI/Gauche et le RN ont réellement appliqué dans les mairies qu'ils dirigent
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Données certifiées issues des comptes administratifs, des délibérations municipales et des rapports des Chambres Régionales des Comptes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Villes Gauche / NFP */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-xs text-emerald-800 uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  <span>Expérimentations réelles Gauche / NFP (Saint-Denis, Montpellier, Vénissieux)</span>
                </div>
                {lfiCities.map((c, i) => (
                  <CityCard key={i} item={c} />
                ))}
              </div>

              {/* Villes RN */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-xs text-amber-800 uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                  <span>Constats réels en mairies RN (Fréjus, Perpignan, Hayange, Beaucaire)</span>
                </div>
                {rnCities.map((c, i) => (
                  <CityCard key={i} item={c} />
                ))}
              </div>
            </div>
          </div>

          {/* 7. Mises en Garde & Opportunités pour Nell'Immo */}
          <AgencyWarningsGrid />
        </section>
      )}

      {/* 7. VÉRITÉS SANS FILTRE, PEURS & CONTRADICTIONS */}
      {(activeSection === 'ALL' || activeSection === 'TRUTH') && (
        <section className="space-y-4">
          <UnvarnishedTruthCard />
        </section>
      )}

    </div>
  );
};

