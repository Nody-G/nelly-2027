import React, { useState } from 'react';
import { FoncierReelModeler } from '../optimization/FoncierReelModeler';
import { AdAuditModeler } from '../optimization/AdAuditModeler';
import { TransmissionModeler } from '../optimization/TransmissionModeler';
import { FiscalOptimizationMasterPlan } from '../optimization/FiscalOptimizationMasterPlan';
import { UrssafSafeguardsChecklist } from '../legal/UrssafSafeguardsChecklist';
import { LegalArticlesList } from '../legal/LegalArticlesList';
import { Sparkles, BadgeCheck, Layers, Sliders, Gavel, Home, TrendingUp, PiggyBank } from 'lucide-react';
import { agencyProfile } from '../../data/nelliProfile';

type OptimizationSubView = 'MASTER_PLAN' | 'MODELERS' | 'LEGAL_URSSAF';
type ModelerSubId = 'FONCIER' | 'PUB' | 'TRANSMISSION';
type LegalSubId = 'CHECKLIST' | 'ARTICLES';

export const OptimizationTab: React.FC = () => {
  const [subView, setSubView] = useState<OptimizationSubView>('MASTER_PLAN');
  const [activeModeler, setActiveModeler] = useState<ModelerSubId>('FONCIER');
  const [activeLegal, setActiveLegal] = useState<LegalSubId>('CHECKLIST');

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* En-tête & Sous-navigation en 3 volets épurés */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-bold uppercase text-emerald-600 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Ingénierie Fiscale & Juridique • NELL'IMMO SASU (SIREN 853 807 006)
            </span>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
              Maison 305k€ (+23,5k€ Notaire), Prêt 260k€ (3,7-4%) & Passage Loyer 400€ → 650€
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            Revenus 2025 : 40k€ + 20k€ div.
          </span>
        </div>

        {/* Sélecteur principal */}
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => setSubView('MASTER_PLAN')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              subView === 'MASTER_PLAN'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>1. Plan Directeur (6 Domaines)</span>
          </button>

          <button
            type="button"
            onClick={() => setSubView('MODELERS')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              subView === 'MODELERS'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>2. Calculateurs Interactifs (Bail, Pub, Donation)</span>
          </button>

          <button
            type="button"
            onClick={() => setSubView('LEGAL_URSSAF')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              subView === 'LEGAL_URSSAF'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Gavel className="w-4 h-4" />
            <span>3. Garde-Fous URSSAF & Textes CGI</span>
          </button>
        </div>
      </div>

      {/* VOLET 1 : PLAN DIRECTEUR 6 DOMAINES & FICHE SYNTHÉTIQUE SASU */}
      {subView === 'MASTER_PLAN' && (
        <div className="space-y-5">
          <FiscalOptimizationMasterPlan />

          {/* Bandeau synthétique Fiche SASU & Opération Immobilière */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                <BadgeCheck className="w-3.5 h-3.5 text-indigo-400" />
                Société & Statut
              </span>
              <div className="font-bold text-white mt-0.5">{agencyProfile.corporateName} (SASU)</div>
              <div className="text-slate-400 text-[11px]">SIREN {agencyProfile.siren}</div>
            </div>

            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Revenus 2025</span>
              <div className="font-bold text-emerald-400 mt-0.5">60 000 € / an</div>
              <div className="text-slate-300 text-[11px]">40 000 € salaire + 20 000 € div.</div>
            </div>

            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Loyer Pro Nell'Immo</span>
              <div className="font-bold text-amber-300 mt-0.5">400 €/m → 650 €/m</div>
              <div className="text-slate-300 text-[11px]">Maison louée → Maison 305k€</div>
            </div>

            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Achat & Frais Notaire</span>
              <div className="font-bold text-white mt-0.5">305 000 € + 23 500 €</div>
              <div className="text-slate-300 text-[11px]">Coût total : 328 500 €</div>
            </div>

            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Prêt Immobilier</span>
              <div className="font-bold text-indigo-300 mt-0.5">260 000 € empruntés</div>
              <div className="text-slate-300 text-[11px]">Taux attendu : 3,7 % à 4,0 %</div>
            </div>
          </div>
        </div>
      )}

      {/* VOLET 2 : LES 3 CALCULATEURS COMPTABLES (1 SEUL AFFICHÉ À LA FOIS POUR ZÉRO SURCHARGE) */}
      {subView === 'MODELERS' && (
        <div className="space-y-4">
          <div className="bg-white p-2 rounded-xl border border-slate-200 flex flex-wrap gap-2 text-xs">
            <button
              type="button"
              onClick={() => setActiveModeler('FONCIER')}
              className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                activeModeler === 'FONCIER'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>A. Bail 400€ → 650€ & Prêt 260k€ (3,7-4%)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveModeler('PUB')}
              className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                activeModeler === 'PUB'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>B. Audit Budget Pub 40 000 €</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveModeler('TRANSMISSION')}
              className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                activeModeler === 'TRANSMISSION'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <PiggyBank className="w-4 h-4" />
              <span>C. Donation Nue-Propriété 305 000 €</span>
            </button>
          </div>

          {activeModeler === 'FONCIER' && <FoncierReelModeler />}
          {activeModeler === 'PUB' && <AdAuditModeler />}
          {activeModeler === 'TRANSMISSION' && <TransmissionModeler />}
        </div>
      )}

      {/* VOLET 3 : GARDE-FOUS URSSAF & TEXTES DE LOI OFFICIELS (SÉLECTEUR ÉPURÉ) */}
      {subView === 'LEGAL_URSSAF' && (
        <div className="space-y-4">
          <div className="bg-white p-2 rounded-xl border border-slate-200 flex flex-wrap gap-2 text-xs">
            <button
              type="button"
              onClick={() => setActiveLegal('CHECKLIST')}
              className={`px-3.5 py-2 rounded-lg font-bold cursor-pointer transition-all ${
                activeLegal === 'CHECKLIST'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              A. Checklist de Conformité URSSAF & DGFiP
            </button>
            <button
              type="button"
              onClick={() => setActiveLegal('ARTICLES')}
              className={`px-3.5 py-2 rounded-lg font-bold cursor-pointer transition-all ${
                activeLegal === 'ARTICLES'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              B. Référentiel des Articles du CGI, CSS & Code du Travail
            </button>
          </div>

          {activeLegal === 'CHECKLIST' ? <UrssafSafeguardsChecklist /> : <LegalArticlesList />}
        </div>
      )}
    </div>
  );
};
