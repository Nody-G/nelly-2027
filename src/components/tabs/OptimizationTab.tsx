import React from 'react';
import { FoncierReelModeler } from '../optimization/FoncierReelModeler';
import { AdAuditModeler } from '../optimization/AdAuditModeler';
import { TransmissionModeler } from '../optimization/TransmissionModeler';
import { LeversPoliticalComparisonCard } from '../optimization/LeversPoliticalComparisonCard';
import { FiscalOptimizationMasterPlan } from '../optimization/FiscalOptimizationMasterPlan';
import { Sparkles, CheckCircle2, BadgeCheck } from 'lucide-react';
import { Tooltip } from '../common/Tooltip';
import { agencyProfile } from '../../data/nelliProfile';

export const OptimizationTab: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* En-tête explicatif */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-bold uppercase text-emerald-600 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Ingénierie Fiscale Avancée • Sans Risque de Redressement URSSAF
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Plan d'Optimisation Fiscale 360° : Maison 305k€, Pub 40k€, Dividendes & Protection des Filles
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            6 Domaines Clés Documentés
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Puisque les frais classiques de fonctionnement (véhicule de fonction en leasing, réceptions clients, forfaits internet/téléphone et sous-location locataire à 300 €) sont déjà passés en charge dans Nell'Immo (CA ~130 000 € HT), 
          voici le <strong>plan d'optimisation exhaustif et interactif</strong> débloqué par l'acquisition de sa maison de 305 000 € à Pélissanne, le statut SASU, les CESU dirigeante (2 540 € base / 2 591 € plafond revalorisé 2026) et l'audit publicitaire :
        </p>
      </div>

      {/* MASTER PLAN D'OPTIMISATION FISCALE DANS TOUS LES DOMAINES */}
      <FiscalOptimizationMasterPlan />

      {/* CARTE D'IDENTITÉ JURIDIQUE OFFICIELLE & AVANTAGE STATUTAIRE SASU */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-2xl p-5 sm:p-6 border border-slate-700 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-400/30">
              <BadgeCheck className="w-5 h-5 text-indigo-400" />
            </span>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                Fiche d'Identité Juridique Réelle : NELL'IMMO & Nelly Fernandez
              </h3>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Données certifiées INSEE & Registre du Commerce et des Sociétés (RCS Salon-de-Provence)
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-700">
            SASU au Capital de 2 000 €
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Dénomination & Dirigeante</span>
            <div className="font-bold text-white mt-0.5">{agencyProfile.corporateName}</div>
            <div className="text-indigo-300 text-[11px] font-semibold">{agencyProfile.founderName}</div>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Chiffre d'Affaires & Modèle</span>
            <div className="font-bold text-emerald-400 mt-0.5">~130 000 € HT / an</div>
            <div className="text-slate-400 text-[11px]">~13 ventes à 3,3% (Pélissanne)</div>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Immatriculation & RCS</span>
            <div className="font-mono text-white font-bold mt-0.5">SIREN : {agencyProfile.siren}</div>
            <div className="text-slate-400 text-[11px]">RCS {agencyProfile.rcs}</div>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Siège & Carte Professionnelle</span>
            <div className="text-white font-semibold mt-0.5">{agencyProfile.registeredAddress}</div>
            <div className="text-emerald-400 text-[10px] font-mono">Carte CPI 1310 2019 000 042 974</div>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Régime Social de Nelly</span>
            <div className="text-amber-400 font-bold mt-0.5">Présidente assimilée salariée</div>
            <div className="text-slate-400 text-[10px]">Art. L. 311-3 23° CSS</div>
          </div>
        </div>

        {/* Le piège évité et l'arbitrage parfait pour Nelly Fernandez */}
        <div className="p-3.5 bg-slate-800/50 rounded-xl border border-indigo-500/30 text-xs space-y-1.5">
          <div className="font-bold text-indigo-300 flex items-center gap-1.5 text-[11px] uppercase">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Pourquoi le statut SASU de Nelly est un atout décisif (Justification Juridique) :</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Contrairement à une SARL où tous les dividendes dépassant 10% du capital social (soit plus de 200 € pour son capital de 2 000 € !) 
            sont requalifiés en rémunération et taxés à ~42% de cotisations sociales TNS (
            <Tooltip 
              term="Art. L. 131-6 CSS" 
              explanation="Article assujettissant les dividendes de gérant majoritaire de SARL aux cotisations sociales au-delà de 10% du capital social. Ce piège ne s'applique PAS à la SASU." 
              lawRef="Art. L131-6 CSS"
            />), 
            <strong> en SASU, les dividendes de Nelly Fernandez échappent à 100% aux cotisations sociales professionnelles</strong>.
          </p>
          <div className="text-[11px] text-amber-300 font-medium">
            ⚠️ <strong>En contrepartie :</strong> Le salaire de Présidente de SASU subissant ~75% de cotisations sociales sur le net, Nelly doit limiter son salaire au montant validant ses 4 trimestres de retraite et faire transiter le surplus via le <strong>bail professionnel (Art. 28 & 31 CGI)</strong> et les <strong>CESU dirigeante</strong>.
          </div>
        </div>
      </div>

      {/* COMPARAISON CROISÉE DES 6 LEVIERS SELON LES PARTIS POLITIQUES */}
      <LeversPoliticalComparisonCard />

      {/* Modélisateur Déduction Foncier Réel */}
      <FoncierReelModeler />

      {/* Modélisateur Audit Pub */}
      <AdAuditModeler />

      {/* Modélisateur Transmission Nue-Propriété Maison 305k€ */}
      <TransmissionModeler />

    </div>
  );
};
