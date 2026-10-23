import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Building2, 
  Home, 
  Users, 
  PiggyBank, 
  TrendingUp, 
  Layers, 
  BadgeCheck, 
  Euro, 
  BookOpen, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Tooltip } from '../common/Tooltip';
import { LawBadge } from '../common/LawBadge';
import { agencyProfile } from '../../data/nelliProfile';

export const FiscalOptimizationMasterPlan: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('MAISON');

  const domains = [
    { id: 'MAISON', label: '1. Maison 305k€ & Foncier Réel', icon: Home, badge: 'Levier Pivot' },
    { id: 'DIRIGEANTE', label: '2. Rémunération & Statut SASU', icon: Building2, badge: 'Protection Retraite' },
    { id: 'FILLES', label: '3. Filles, CESU, Piano & Sport', icon: Users, badge: 'Famille 0€ Impôt' },
    { id: 'TRANSMISSION', label: '4. Transmission Nue-Propriété', icon: PiggyBank, badge: '0€ Succession' },
    { id: 'TRESORERIE', label: '5. Holding, PEE & Compte Courant', icon: Layers, badge: 'Sortie Cash' },
    { id: 'AGENCE', label: '6. CA 130k€, Pub 40k€ & Com 3%', icon: TrendingUp, badge: 'Marge Brute' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-0">
      
      {/* En-tête Global du Master Plan */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                Plan d'Ingénierie Fiscale 360° • Dossier Officiel
              </span>
              <h3 className="font-black text-base sm:text-xl text-white">
                Master Plan d'Optimisation Fiscale de Nelly Fernandez dans Tous les Domaines
              </h3>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-700">
            6 Domaines Clés Activables
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          Nelly gagne environ <strong>70 000 € net annuel</strong> avec son agence Nell'Immo (CA ~130 000 € HT). 
          Alors que les frais d'exploitation classiques (leasing auto, forfaits téléphonie/fibre, réceptions clients) sont déjà déduits, 
          voici le <strong>plan d'optimisation intégrale couvrant les 6 domaines stratégiques</strong> pour neutraliser l'impôt, protéger ses deux filles et sécuriser sa trésorerie contre tout redressement fiscal ou URSSAF.
        </p>

        {/* Barre de navigation entre domaines */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 text-xs">
          {domains.map((d) => {
            const Icon = d.icon;
            const isSelected = selectedDomain === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDomain(d.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{d.label}</span>
                {d.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono uppercase ${
                    isSelected ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {d.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTENU DOMAINE 1 : MAISON 305K€ & FONCIER RÉEL */}
      {selectedDomain === 'MAISON' && (
        <div className="p-5 sm:p-6 space-y-5 text-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-emerald-600">Levier Pivot n°1</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                La Maison Achetée 305 000 € à Pélissanne : Remplacement des Dividendes par du Foncier Réel
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
              Gain Net : +4 800 € / an à 0 € d'IR et 0 € d'URSSAF
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Colonne Mécanisme */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                <Home className="w-4 h-4 text-indigo-600" />
                <span>1. Mécanisme Juridique & Chiffrage Précis :</span>
              </div>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>
                  • <strong>Signature d'un bail professionnel dérogatoire :</strong> Nell'Immo sous-loue <strong>35 m²</strong> dans la maison (bureau de réception de mandats, pièce fermée d'archivage des dossiers pendant 10 ans imposée par la 
                  <Tooltip 
                    term="Loi Hoguet" 
                    explanation="La Loi Hoguet impose à tout agent immobilier titulaire de la carte CPI de conserver les registres des mandats et compromis pendant 10 ans dans des locaux sécurisés." 
                    lawRef="Loi Hoguet" 
                  />, stockage garage et place de stationnement pro).
                </li>
                <li>
                  • <strong>Loyer et charges justifiés :</strong> <strong>600 € / mois</strong> de loyer + <strong>100 € / mois</strong> de charges (quote-part eau, électricité clim réversible, taxe ordure ménagère), soit <strong>8 400 € / an</strong> déduits du résultat fiscal de Nell'Immo.
                </li>
                <li>
                  • <strong>Déclaration au Régime Réel Foncier (Formulaire 2044) :</strong> En vertu des 
                  <Tooltip 
                    term="Art. 28 & 31 CGI" 
                    explanation="Permet de déduire en revenus fonciers réels les intérêts du prêt bancaire ayant servi à l'acquisition du bien et la quote-part de taxe foncière." 
                    lawRef="Art. 28 & 31 CGI" 
                  />, Nelly déduit 28% des intérêts de son prêt de 305 000 € (~3 000 €/an) et 28% de sa taxe foncière (~532 €/an).
                </li>
                <li>
                  • <strong>Résultat fiscal :</strong> Le revenu net foncier imposable tombe à <strong>0 €</strong> ! Les 8 400 € de liquidités entrent directement dans la poche de Nelly sans subir 1 € d'IR ni 1 € de CSG/CRDS.
                </li>
              </ul>
            </div>

            {/* Colonne Travaux & Borne Électrique */}
            <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200 space-y-2.5">
              <div className="font-bold text-indigo-950 flex items-center gap-1.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>2. Travaux d'Aménagement & Borne de Recharge :</span>
              </div>
              <ul className="space-y-1.5 text-indigo-950 leading-relaxed">
                <li>
                  • <strong>Travaux d'aménagement des 35 m² pro :</strong> Peinture, isolation phonique, cloisons, climatisation réversible (4 500 € HT). 
                  En vertu de l'
                  <Tooltip 
                    term="Art. 39-1 CGI" 
                    explanation="Déduction des frais généraux et charges d'entretien des locaux affectés à l'exploitation professionnelle." 
                    lawRef="Art. 39-1 CGI" 
                  />, les factures sont 100% payées par Nell'Immo avec récupération de <strong>900 € de TVA à 20%</strong>.
                </li>
                <li>
                  • <strong>Borne de recharge véhicule électrique à domicile :</strong> Installée au domicile de Pélissanne et payée à 100% par Nell'Immo (borne + raccordement + électricité pro). 
                  Bénéficie d'un abattement légal de 70% sur l'avantage en nature (Arrêté du 25 février 2025).
                </li>
              </ul>

              {/* Garde-Fou URSSAF */}
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-950 text-[11px] space-y-1 mt-2">
                <span className="font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                  Garde-Fou URSSAF Impératif :
                </span>
                <span>
                  Bail écrit impératif avec plan métré certifié des 35 m² pro. Loyer fixé à 17-20 €/m² charges comprises (conforme aux valeurs locatives réelles de Pélissanne). Interdiction de surévaluer le loyer sous peine de requalification en revenu distribué (Art. 109 CGI).
                </span>
              </div>
            </div>
          </div>

          {/* Comparatif Politique pour ce Domaine */}
          <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-1.5">
            <span className="font-bold text-amber-300 uppercase text-[10px]">Impact Politique Croisé (Maison 305k€) :</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-300">
              <div><strong>Sous Continuité :</strong> Déductibilité intégrale maintenue. Gain net de +4 800 €/an.</div>
              <div><strong>Sous LFI :</strong> Bouclier vital : échappe à la surtaxe des dividendes (~35% cotisations). Le bail pro commercial échappe à l'encadrement des loyers d'habitation.</div>
              <div><strong>Sous RN :</strong> Remplacement de l'IFI par l'IFF : maison de 305 000 € totalement exonérée d'impôt sur la fortune.</div>
            </div>
          </div>

        </div>
      )}

      {/* CONTENU DOMAINE 2 : RÉMUNÉRATION & STATUT SASU */}
      {selectedDomain === 'DIRIGEANTE' && (
        <div className="p-5 sm:p-6 space-y-5 text-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-indigo-600">Domaine Stratégique n°2</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                Statut de Présidente de SASU : Arbitrage Rémunération vs Dividendes & Retraite
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-indigo-800 bg-indigo-50 border border-indigo-200">
              Validation des 4 Trimestres & Zéro Cotisation Dividendes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                <Building2 className="w-4 h-4 text-indigo-600" />
                <span>1. Le Mix Salaire / Dividendes Idéal pour Nelly :</span>
              </div>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>
                  • <strong>Salaire net de 40 000 € / an :</strong> En tant que Présidente assimilée salariée (
                  <Tooltip 
                    term="Art. L311-3 23° CSS" 
                    explanation="Affiliation obligatoire au régime général de la sécurité sociale des cadres pour les présidents de SASU." 
                    lawRef="Art. L311-3 CSS" 
                  />), ce niveau de rémunération valide automatiquement les <strong>4 trimestres de retraite</strong> par an et assure une excellente couverture prévoyance/maladie et des points de retraite complémentaire Agirc-Arrco.
                </li>
                <li>
                  • <strong>Le piège à éviter :</strong> Le salaire en SASU subissant ~75% de cotisations patronales et salariales, tout euro supplémentaire au-delà de 40 000 € est surtaxé. Il faut impérativement extraire le surplus via le <strong>loyer foncier réel (8 400 €)</strong>, les <strong>CESU (2 591 €)</strong> et les <strong>frais professionnels réels</strong>.
                </li>
                <li>
                  • <strong>L'atout décisif de la SASU face à la SARL :</strong> En SASU, les dividendes échappent à 100% aux cotisations sociales d'indépendants TNS de 42% (
                  <Tooltip 
                    term="Art. L. 131-6 CSS" 
                    explanation="Assujettissement des dividendes de SARL aux cotisations sociales au-delà de 10% du capital. Ne s'applique pas en SASU !" 
                    lawRef="Art. L131-6 CSS" 
                  />).
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>2. Déduction des Frais Professionnels Réels :</span>
              </div>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>
                  • <strong>Véhicule de fonction en leasing :</strong> Déduction des loyers de location, assurance tous risques, entretien et carburant au prorata de l'usage professionnel sur l'agence.
                </li>
                <li>
                  • <strong>Frais de réception et repas clients :</strong> Déductibles dès lors qu'ils sont engagés dans l'intérêt direct de l'agence (signatures de mandats exclusifs, négociations avec les notaires) avec conservation des factures détaillées.
                </li>
                <li>
                  • <strong>Mutuelle & Prévoyance d'entreprise :</strong> Contrat collectif cadre souscrit par Nell'Immo couvrant Nelly et ses 2 filles, 100% déductible du résultat de l'agence.
                </li>
              </ul>

              <div className="p-2.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-950 text-[11px] space-y-1 mt-2">
                <span className="font-bold flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5 text-indigo-600" />
                  Règle d'Or URSSAF :
                </span>
                <span>
                  Établir un bulletin de paie mensuel formel mentionnant les heures, les cotisations Urssaf et Agirc-Arrco. Ne jamais effectuer de retraits personnels sur le compte bancaire de la société sans justificatif.
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-1.5">
            <span className="font-bold text-amber-300 uppercase text-[10px]">Impact Politique Croisé (Statut SASU) :</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-300">
              <div><strong>Sous Continuité :</strong> Maintien Flat Tax 30% sur dividendes et 5 tranches IR.</div>
              <div><strong>Sous LFI :</strong> Menace de soumission des dividendes aux cotisations sociales (~35%). Le pivot vers le bail professionnel et les CESU devient indispensable pour maintenir son revenu disponible.</div>
              <div><strong>Sous RN :</strong> Maintien Flat Tax 30% et exonération de cotisations sur les hausses de salaires.</div>
            </div>
          </div>

        </div>
      )}

      {/* CONTENU DOMAINE 3 : FILLES, FAMILLE, CESU, PIANO & SPORT */}
      {selectedDomain === 'FILLES' && (
        <div className="p-5 sm:p-6 space-y-5 text-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-pink-600">Domaine n°3 (Priorité n°1)</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                Ses 2 Filles (5 & 11 ans) : Financement du Sport, Piano & Garde Alternée à 0 € d'Impôt
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-pink-800 bg-pink-50 border border-pink-200">
              2 591 € / an défiscalisés + 50% de crédit d'impôt
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Levier CESU Dirigeante */}
            <div className="p-4 rounded-xl bg-pink-50/70 border border-pink-200 space-y-2">
              <div className="font-bold text-pink-950 flex items-center gap-1.5 text-xs">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span>1. CESU Dirigeant 2026 (2 591 €) :</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                En vertu des 
                <Tooltip 
                  term="Art. L. 7233-4 C. trav." 
                  explanation="Encadre l'aide financière de l'entreprise accordée aux dirigeants pour financer les services à la personne." 
                  lawRef="Art. L7233-4 C. trav." 
                /> et 
                <Tooltip 
                  term="Art. 244 quater F CGI" 
                  explanation="Accorde un crédit d'impôt de 25% à l'entreprise sur les sommes engagées pour les CESU de son dirigeant." 
                  lawRef="Art. 244 quater F CGI" 
                />, Nell'Immo attribue <strong>2 591 € / an</strong> de CESU à Nelly.
              </p>
              <div className="text-[11px] font-semibold text-pink-900 bg-white p-2 rounded-lg border border-pink-100">
                • 0 € d'IR pour Nelly<br />
                • 0 € de charges URSSAF<br />
                • 648 € de crédit d'impôt déduit de l'IS de l'agence !
              </div>
            </div>

            {/* Levier Piano Aînée */}
            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
              <div className="font-bold text-purple-950 flex items-center gap-1.5 text-xs">
                <Users className="w-4 h-4 text-purple-600" />
                <span>2. Piano de l'Aînée (11 ans - 400 €) :</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Pour ses cours de piano (400 € / an), en faisant intervenir le professeur à domicile dans la maison de Pélissanne, Nelly règle les cours via les <strong>CESU de l'agence</strong> et active l'
                <Tooltip 
                  term="Art. 199 sexdecies CGI" 
                  explanation="Crédit d'impôt personnel de 50% sur l'emploi à domicile pour les cours particuliers et l'aide aux devoirs." 
                  lawRef="Art. 199 sexdecies CGI" 
                /> pour récupérer <strong>50% de crédit d'impôt personnel</strong> sur tout reliquat éventuel.
              </p>
              <div className="text-[11px] font-semibold text-purple-900 bg-white p-2 rounded-lg border border-purple-100">
                Coût effectif net pour Nelly : quasi 0 € !
              </div>
            </div>

            {/* Levier Escalade Cadette */}
            <div className="p-4 rounded-xl bg-pink-50/70 border border-pink-200 space-y-2">
              <div className="font-bold text-pink-950 flex items-center gap-1.5 text-xs">
                <Users className="w-4 h-4 text-pink-600" />
                <span>3. Escalade Cadette (5 ans - 400 €) :</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Nelly assume 400 € / an pour l'escalade (club local, licence FFME, stages vacances).
                Nell'Immo lui octroie des <strong>Chèques-Vacances ANCV</strong> (exonérés de charges sociales et d'IR), acceptés par le club pour régler les licences et sorties sans fiscalité personnelle.
              </p>
              <div className="text-[11px] font-semibold text-pink-900 bg-white p-2 rounded-lg border border-pink-100">
                Jusqu'à ses 6 ans : crédit d'impôt garde d'enfant 50% (Art. 200 quater B CGI).
              </div>
            </div>

          </div>

          {/* Quotient familial et case T */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed space-y-1">
            <strong className="text-slate-900 block">• Optimisation du Quotient Familial en Garde Alternée (Art. 194-II & 195 CGI) :</strong>
            <span>
              En cochant la <strong>Case T (Parent isolé vivant seul au 1er janvier)</strong>, Nelly bénéficie de <strong>1,75 parts fiscales</strong> au lieu de 1,5 part. 
              Cet avantage fiscal légal lui fait économiser environ <strong>1 850 € d'IR par an</strong> par rapport au barème de célibataire sans enfant.
            </span>
          </div>

        </div>
      )}

      {/* CONTENU DOMAINE 4 : TRANSMISSION PATRIMONIALE AUX FILLES */}
      {selectedDomain === 'TRANSMISSION' && (
        <div className="p-5 sm:p-6 space-y-5 text-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-purple-600">Domaine Stratégique n°4</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                Transmission de la Maison de 305 000 € aux 2 Filles : 0 € de Droits de Succession
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-purple-800 bg-purple-50 border border-purple-200">
              Démembrement Notarié avant 51 ans (Art. 669 CGI)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                <PiggyBank className="w-4 h-4 text-purple-600" />
                <span>1. Le Démembrement de Propriété (Art. 669 CGI) :</span>
              </div>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>
                  • <strong>Donation de la nue-propriété avant 51 ans :</strong> Selon le barème officiel de l'
                  <Tooltip 
                    term="Art. 669 CGI" 
                    explanation="Fixe la valeur fiscale de la nue-propriété à 40% de la valeur totale lorsque le donateur a moins de 51 ans." 
                    lawRef="Art. 669 CGI" 
                  />, la nue-propriété de la maison de 305 000 € ne vaut fiscalement que <strong>40%</strong>, soit <strong>122 000 € au total</strong> (61 000 € par fille).
                </li>
                <li>
                  • <strong>Abattement légal de 100 000 € (Art. 779 CGI) :</strong> Chaque fille disposant d'un abattement légal de 
                  <Tooltip 
                    term="100 000 € d'abattement par enfant" 
                    explanation="Abattement fiscal renouvelable tous les 15 ans pour toute donation en ligne directe aux enfants." 
                    lawRef="Art. 779 CGI" 
                  />, les 61 000 € donnés sont <strong>100% exonérés d'impôt de donation</strong> (0 € de droits à payer) !
                </li>
                <li>
                  • <strong>Réserve d'abattement résiduelle :</strong> Il reste à chaque fille <strong>39 000 € d'abattement vierge</strong>, réutilisable pour transmettre d'autres actifs ou de l'assurance-vie.
                </li>
                <li>
                  • <strong>Au décès de Nelly (le plus tard possible) :</strong> Les 2 filles récupèrent la pleine propriété de la maison de 305k€ à <strong>0 € de droits de succession supplémentaires</strong> !
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2.5">
              <div className="font-bold text-purple-950 flex items-center gap-1.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                <span>2. Assurance-Vie & Anticipation Logement Étudiant :</span>
              </div>
              <ul className="space-y-1.5 text-purple-950 leading-relaxed">
                <li>
                  • <strong>Assurance-vie multi-supports (Art. 990 I CGI) :</strong> Placer les excédents financiers avec clause bénéficiaire démembrée au profit des 2 filles (abattement de <strong>152 500 € par bénéficiaire</strong> sur les primes versées avant 70 ans).
                </li>
                <li>
                  • <strong>Donation temporaire d'usufruit (Horizon 2033 & 2039) :</strong> Lorsque les filles entameront leurs études supérieures à Aix ou Marseille, Nelly peut leur donner l'usufruit temporaire d'un studio locatif pendant leurs études : les loyers sont perçus par les filles à 0% d'IR, et le bien sort de l'IFI de Nelly !
                </li>
              </ul>

              <div className="p-2.5 rounded-lg bg-slate-900 text-white text-[11px] space-y-1 mt-2">
                <span className="font-bold text-amber-300 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Garde-Fou Notarié :
                </span>
                <span>
                  L'acte de donation avec réserve d'usufruit doit être passé par acte notarié officiel et publié au Service de Publicité Foncière (SPFE) pour purger le délai de rappel fiscal (15 ans actuellement, ou 10 ans sous le RN).
                </span>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* CONTENU DOMAINE 5 : TRÉSORERIE, HOLDING, PEE & COMPTE COURANT */}
      {selectedDomain === 'TRESORERIE' && (
        <div className="p-5 sm:p-6 space-y-5 text-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-emerald-600">Domaine Stratégique n°5</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                Gestion de Trésorerie d'Entreprise : Holding SASU, Déblocage PEE & Compte Courant
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
              Capitalisation à 95% d'Exonération d'IS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Holding SASU */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>1. Holding Patrimoniale (Régime Mère-Fille) :</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                En vertu des 
                <Tooltip 
                  term="Art. 145 & 216 CGI" 
                  explanation="Exonère à 95% les dividendes versés par une filiale à sa société mère holding, seule une quote-part de 5% de frais et charges étant taxée à l'IS." 
                  lawRef="Art. 145 & 216 CGI" 
                />, les bénéfices excédentaires de Nell'Immo (ex: 10 000 €/an) peuvent remonter dans une holding avec seulement <strong>1,25% d'IS effectif</strong> (5% x 25%), sans subir l'IR personnel de Nelly, pour être réinvestis dans l'immobilier locatif pour les filles.
              </p>
            </div>

            {/* Déblocage PEE */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                <PiggyBank className="w-4 h-4 text-indigo-600" />
                <span>2. Déblocage Anticipé PEE Maison (12 500 €) :</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                En vertu de l'
                <Tooltip 
                  term="Art. R3324-22 C. trav." 
                  explanation="Autorise le déblocage anticipé des avoirs de PEE à 0% d'IR en cas d'achat de la résidence principale." 
                  lawRef="Art. R3324-22 C. trav." 
                />, l'achat de la maison à 305k€ permet de débloquer les avoirs d'un PEE abondé à 300% par Nell'Immo avec <strong>0 € d'IR</strong> et <strong>0 € de cotisations sociales</strong> (seule la CSG de 9,7% s'applique).
              </p>
              <div className="text-[10px] text-slate-500 font-medium">Condition : Nécessite au moins 1 salarié (alternant ou mi-temps de +3 mois).</div>
            </div>

            {/* Compte Courant d'Associé */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                <Euro className="w-4 h-4 text-amber-600" />
                <span>3. Rémunération Compte Courant (CCA) :</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Si Nelly a injecté des fonds personnels dans Nell'Immo, la société peut lui verser des <strong>intérêts de Compte Courant d'Associé</strong> au taux légal maximal fiscalement déductible (~4,65% en 2025/2026). 
                Ces intérêts sont 100% déductibles du résultat fiscal de Nell'Immo et soumis à la Flat Tax sans charges sociales URSSAF.
              </p>
            </div>

          </div>

        </div>
      )}

      {/* CONTENU DOMAINE 6 : MODÈLE NELL'IMMO, PUB 40K€ & COMMISSION 3% */}
      {selectedDomain === 'AGENCE' && (
        <div className="p-5 sm:p-6 space-y-5 text-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-emerald-600">Domaine Stratégique n°6</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                Performance Agence Nell'Immo : Chiffre d'Affaires (~130 000 € HT), Audit Pub 40k€ & Commission 3%
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
              Économie Pub : +4 800 € à +6 000 € HT / an
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Poste 1 : Modèle CA 130k€ */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                <Building2 className="w-4 h-4 text-indigo-600" />
                <span>1. Chiffre d'Affaires Baseline (130 000 € HT) :</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Le chiffre d'affaires annuel de Nell'Immo est calibré à <strong>~130 000 € HT</strong> (environ 13 transactions par an avec des honoraires moyens de ~3,3% sur le prix médian de 305 000 € à Pélissanne).
              </p>
              <div className="text-[11px] font-semibold text-slate-800 bg-white p-2 rounded-lg border border-slate-200">
                130k€ CA - 40k€ pub - 20k€ charges = ~70k€ de trésorerie nette disponible pour Nelly.
              </div>
            </div>

            {/* Poste 2 : Audit Pub 40k€ */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
              <div className="font-bold text-emerald-950 flex items-center gap-1.5 text-xs">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>2. Audit du Budget Pub 40 000 € :</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Payer plus de 40 000 € / an (3 333 € / mois) de portails payants (SeLoger, LeBonCoin, Belles Demeures) est le premier centre de coût de l'agence.
                En réservant la multidiffusion payante premium aux seuls <strong>mandats exclusifs</strong> et en éliminant les logiciels en doublon, Nelly génère <strong>12% à 15% d'économie directe (+4 800 € à +6 000 € HT de résultat net)</strong>.
              </p>
            </div>

            {/* Poste 3 : Honoraires à 3% */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                <Euro className="w-4 h-4 text-emerald-600" />
                <span>3. Flexibilité d'Honoraires à 3% :</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Sur des biens de prestige ou mandats exclusifs stratégiques à Pélissanne (ex: villa à 305 000 €), facturer <strong>3,0% d'honoraires</strong> (9 150 € HT) au lieu des 3,5% traditionnels (10 675 € HT) permet de remporter des mandats exclusifs face aux réseaux de mandataires et d'augmenter le volume annuel de 2 à 3 ventes (+18 300 € HT de CA supplémentaire).
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
