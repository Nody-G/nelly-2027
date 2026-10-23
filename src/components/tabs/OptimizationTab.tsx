import React from 'react';
import { LeverCard } from '../optimization/LeverCard';
import { FoncierReelModeler } from '../optimization/FoncierReelModeler';
import { AdAuditModeler } from '../optimization/AdAuditModeler';
import { TransmissionModeler } from '../optimization/TransmissionModeler';
import { LeversPoliticalComparisonCard } from '../optimization/LeversPoliticalComparisonCard';
import { FiscalOptimizationMasterPlan } from '../optimization/FiscalOptimizationMasterPlan';
import { ShieldCheck, Sparkles, Building, ArrowDownCircle, CheckCircle2, ShieldAlert, BadgeCheck } from 'lucide-react';
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
            6 Domaines Clés d'Optimisation
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Puisque les frais classiques de fonctionnement (véhicule de fonction en leasing, réceptions clients, forfaits internet/téléphone et sous-location locataire à 300 €) sont déjà passés en charge dans Nell'Immo (CA ~130 000 € HT), 
          voici le <strong>plan d'optimisation exhaustif dans tous les domaines</strong> débloqué par l'acquisition de sa maison de 305 000 € à Pélissanne, le statut SASU, les CESU dirigeante et l'audit publicitaire :
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
            <span>Pourquoi le statut SASU de Nelly est un atout décisif :</span>
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
            ⚠️ <strong>En contrepartie :</strong> Le salaire de Présidente de SASU subissant ~75% de cotisations sociales, Nelly doit limiter son salaire au montant nécessaire pour valider 4 trimestres de retraite et faire transiter le reste via le <strong>bail professionnel (Art. 28 & 31 CGI)</strong> et les <strong>CESU dirigeante</strong>.
          </div>
        </div>
      </div>

      {/* Grille des 6 Leviers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Levier 1 */}
        <LeverCard 
          number={1}
          title="Loyer 300 € → 600 € (Foncier Réel)"
          lawArticle="Art. 28 & 31"
          badgeCode="CGI"
          summary="Passer de locataire (300€) à propriétaire au Régime Réel (600€ + 100€ charges)"
          explanation="Dans sa maison achetée 305 000 €, Nelly signe un bail professionnel pour 35 m² (bureau de réception, pièce d'archivage obligatoire Loi Hoguet, stockage garage panneaux et parking pro) à 600 €/mois + 100 € charges. En régime réel (formulaire 2044), elle déduit 28% des intérêts d'emprunt et 28% de sa taxe foncière : son bénéfice foncier imposable tombe à 0 €."
          netAnnualGain="+4 800 € net / an sans IR ni URSSAF"
          badgeColor="indigo"
        />

        {/* Levier 2 */}
        <LeverCard 
          number={2}
          title="Déblocage PEE / PER Maison"
          lawArticle="Art. R3324-22"
          badgeCode="C. trav."
          summary="Utiliser l'acte d'achat à 305 000 € pour sortir jusqu'à 12 500 € à 0% d'IR"
          explanation="L'achat de la résidence principale est un motif légal de déblocage anticipé de l'épargne salariale (dans les 6 mois de l'acte authentique). Avec au moins 1 salarié à temps partiel ou alternant, Nell'Immo abonde à 300% son versement : l'argent sort de la société avec 0% d'IS, 0% de cotisations sociales et 0% d'IR (seule la CSG de 9,7% est prélevée)."
          netAnnualGain="7 500 € à 12 500 € nets d'IR"
          badgeColor="emerald"
        />

        {/* Levier 3 */}
        <LeverCard 
          number={3}
          title="CESU & Enfance (2 591 €)"
          lawArticle="Art. L129-13"
          badgeCode="C. trav."
          summary="Payer la garde, sport et piano des filles en franchise d'IR avec 25% de crédit d'impôt"
          explanation="En tant que Présidente de SASU, Nelly peut s'octroyer jusqu'à 2 591 € / an de CESU préfinancés par Nell'Immo. Ces sommes sont totalement exonérées d'impôt sur le revenu et de cotisations sociales. De plus, Nell'Immo bénéficie d'un Crédit d'Impôt Famille de 25% (Art. 244 quater F CGI), soit une économie directe d'IS de 648 €."
          netAnnualGain="+2 591 € nets d'impôt + 648 € crédit d'IS"
          badgeColor="purple"
        />

        {/* Levier 4 */}
        <LeverCard 
          number={4}
          title="Aménagement Bureau Pro & Borne"
          lawArticle="Art. 39-1"
          badgeCode="CGI"
          summary="Climatisation réversible, bureau, fibre et borne de recharge 100% payés par la société"
          explanation="Plutôt que de sortir 5 400 € TTC de sa poche personnelle (avec des dividendes taxés) pour climatiser, peindre et meubler le bureau/archives de sa nouvelle maison, Nell'Immo paie directement les factures professionnelles (4 500 € HT) et récupère 900 € de TVA. De plus, la borne électrique installée à domicile est 100% payée par la société avec 0 € d'avantage en nature."
          netAnnualGain="4 500 € HT passés en charge + 900 € TVA récupérée"
          badgeColor="amber"
        />

        {/* Levier 5 */}
        <LeverCard 
          number={5}
          title="Audit 40 000 € Pub / Logiciels"
          lawArticle="Marge Brute"
          badgeCode="EBITDA"
          summary="Récupérer 12% à 15% sur SeLoger, LeBonCoin et les outils SaaS en doublon"
          explanation="Payer plus de 40 000 €/an (3 333 €/mois) de diffusion est le premier poste de fuite de cash de Nell'Immo. En réservant la multidiffusion payante premium aux seuls mandats exclusifs (ce qui incite les vendeurs de Pélissanne à signer en exclu) et en coupant les logiciels doublons, 12% d'économie crée immédiatement +4 800 € HT de bénéfice net."
          netAnnualGain="+4 800 € à +6 000 € HT de marge par an"
          badgeColor="emerald"
        />

        {/* Levier 6 */}
        <LeverCard 
          number={6}
          title="Holding / CCA & Transmission"
          lawArticle="Art. 145 & 669"
          badgeCode="CGI"
          summary="Capitaliser le surplus à 95% d'exonération pour les futures études des filles"
          explanation="Si après tous ces leviers il reste 5 000 € à 10 000 € de bénéfices dans Nell'Immo, inutile de les distribuer en dividendes taxés en nom propre : soit Nelly se verse des intérêts de Compte Courant d'Associé (~4,65% déductibles à l'IS), soit elle fait remonter le surplus dans une holding patrimoniale (régime Mère-Fille à 95% d'exonération) pour acheter un studio étudiant pour ses filles."
          netAnnualGain="0 € d'IR personnel sur ce surplus capitalisé"
          badgeColor="purple"
        />

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
