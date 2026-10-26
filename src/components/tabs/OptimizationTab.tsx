import React from 'react';
import { FoncierReelModeler } from '../optimization/FoncierReelModeler';
import { UrssafSafeguardsChecklist } from '../legal/UrssafSafeguardsChecklist';
import { LawBadge } from '../common/LawBadge';
import { BadgeCheck, Home, Users, PiggyBank, TrendingUp, Layers, Building2 } from 'lucide-react';
import { agencyProfile } from '../../data/nelliProfile';

export const OptimizationTab: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* 1. Bandeau Synthétique : Fiche SASU & Opération Immobilière 25 ans */}
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
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Prêt sur 25 Ans</span>
          <div className="font-bold text-indigo-300 mt-0.5">260 000 € / 25 ans</div>
          <div className="text-slate-300 text-[11px]">Taux 3,7-4% (1 330 à 1 372 €/m)</div>
        </div>
      </div>

      {/* 2. Modélisateur Interactif du Bail Pro (400€ -> 650€) & Prêt 260 000 € sur 25 ans */}
      <FoncierReelModeler />

      {/* 3. Les 6 Leviers SASU & Maison 305k€ regroupés en une grille claire et directe */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Les 6 Leviers Légaux Activables (Remplacent 56 % à 100 % des 20 000 € de Dividendes)
            </h3>
            <p className="text-xs text-slate-500">
              Synthèse directe sans sous-menus : chaque levier est chiffré et adossé à son article de loi.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            11 211 €/an substitués aux dividendes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {/* Levier 1 */}
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-emerald-950 flex items-center gap-1.5">
                <Home className="w-4 h-4 text-emerald-600" />
                1. Bail Pro 400 € → 650 € + 100 €
              </span>
              <LawBadge article="Art. 28 & 31" code="CGI" />
            </div>
            <p className="text-slate-600 leading-relaxed">
              Passage de la sous-location actuelle (400 €/m en maison louée) au bail propriétaire de 35 m² dans la maison achetée à 305 000 € : <strong>9 000 €/an (+4 200 € vs aujourd'hui)</strong> à 0 € d'impôt grâce à la déduction de 28 % des intérêts du prêt de 260 000 € sur 25 ans (~2 773 €/an) et de la taxe foncière (532 €).
            </p>
          </div>

          {/* Levier 2 */}
          <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-indigo-950 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                2. PEE Achat & Notaire (23 500 €)
              </span>
              <LawBadge article="Art. R3324-22" code="C. trav." />
            </div>
            <p className="text-slate-600 leading-relaxed">
              L'achat de la résidence principale à 305 000 € autorise le déblocage anticipé du PEE abondé à 300 % par Nell'Immo à <strong>0 % d'IR et 0 % de charges sociales</strong> : dégage <strong>3 880 €/an en récurrent (et 12 500 € en Année 1)</strong> pour absorber plus de la moitié des 23 500 € de frais de notaire.
            </p>
          </div>

          {/* Levier 3 */}
          <div className="p-4 rounded-xl bg-pink-50/60 border border-pink-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-pink-950 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-pink-600" />
                3. CESU (2 591 €) & ANCV (540 €)
              </span>
              <LawBadge article="Art. L7233-4" code="C. trav." />
            </div>
            <p className="text-slate-600 leading-relaxed">
              <strong>3 131 €/an</strong> payés par Nell'Immo à 0 € d'IR et 0 € d'URSSAF pour financer les cours de piano à domicile de l'aînée (400 €), la garderie et le club d'escalade de la cadette (400 €), tout en offrant <strong>+648 €/an de crédit d'IS</strong> (Art. 244 quater F CGI).
            </p>
          </div>

          {/* Levier 4 */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-amber-950 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-amber-600" />
                4. Audit Pub 40k€ & Travaux Bureau
              </span>
              <LawBadge article="Art. 39-1" code="CGI" />
            </div>
            <p className="text-slate-600 leading-relaxed">
              Réserver les portails payants (40 000 €/an) aux mandats exclusifs (-12 %) dégage <strong>+4 080 € net/an après IS</strong>. De plus, Nell'Immo finance les <strong>4 500 € HT de travaux/clim des 35 m² pro</strong> et récupère 900 € de TVA.
            </p>
          </div>

          {/* Levier 5 */}
          <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-purple-950 flex items-center gap-1.5">
                <PiggyBank className="w-4 h-4 text-purple-600" />
                5. Nue-Propriété (0 € Succession)
              </span>
              <LawBadge article="Art. 669" code="CGI" />
            </div>
            <p className="text-slate-600 leading-relaxed">
              Avant 51 ans, la nue-propriété de la maison de 305 000 € ne vaut que <strong>40 % = 122 000 € (soit 61 000 € par fille)</strong>. Comme chaque fille dispose de 100 000 € d'abattement (Art. 779 CGI), la maison est transmise à <strong>0 € de droits</strong> tout en gardant 100 % de l'usufruit.
            </p>
          </div>

          {/* Levier 6 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-slate-700" />
                6. Atout SASU (40k€ + 20k€ div.)
              </span>
              <LawBadge article="Art. L311-3" code="CSS" />
            </div>
            <p className="text-slate-600 leading-relaxed">
              Avec 40 000 € de salaire, Nelly valide ses 4 trimestres de retraite cadre. Et contrairement à une SARL (taxée à 42 % TNS dès 200 € de dividendes), sa SASU exonère ses dividendes de cotisations TNS et permet de remonter la trésorerie vers une <strong>Holding à 1,25 % d'IS</strong> (Art. 145 CGI).
            </p>
          </div>
        </div>
      </div>

      {/* 4. Garde-Fous URSSAF & DGFiP en lecture directe */}
      <UrssafSafeguardsChecklist />
    </div>
  );
};
