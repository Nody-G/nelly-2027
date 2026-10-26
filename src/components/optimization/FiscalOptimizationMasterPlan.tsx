import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Home,
  Users,
  PiggyBank,
  TrendingUp,
  Layers,
  BadgeCheck,
  Euro,
} from 'lucide-react';
import { Tooltip } from '../common/Tooltip';

export const FiscalOptimizationMasterPlan: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('MAISON');

  const domains = [
    { id: 'MAISON', label: '1. Maison 305k€, Prêt 260k€ & Bail 650€', icon: Home },
    { id: 'DIRIGEANTE', label: '2. Revenus 2025 (40k€ + 20k€ div)', icon: Building2 },
    { id: 'FILLES', label: '3. Filles (5 & 11 ans), CESU & ANCV', icon: Users },
    { id: 'TRANSMISSION', label: '4. Donation Nue-Propriété (0€)', icon: PiggyBank },
    { id: 'TRESORERIE', label: '5. Holding, PEE & Compte Courant', icon: Layers },
    { id: 'AGENCE', label: '6. CA 130k€ & Audit Pub 40k€', icon: TrendingUp },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* En-tête Global du Master Plan épuré */}
      <div className="bg-slate-900 text-white p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                Plan Directeur en 6 Domaines (Chiffres Réels 2025 : 40k€ + 20k€ div • Prêt 260k€ à 3,7-4%)
              </h3>
              <p className="text-xs text-slate-300">
                Cliquez sur chacun des 6 domaines pour afficher le montage légal exact et ses garde-fous URSSAF.
              </p>
            </div>
          </div>
        </div>

        {/* Barre de navigation entre domaines */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1 text-xs custom-scroll">
          {domains.map((d) => {
            const Icon = d.icon;
            const isSelected = selectedDomain === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDomain(d.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{d.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTENU DOMAINE 1 : MAISON 305K€, PRÊT 260K€, NOTAIRE 23,5K€ & LOYER 400€ -> 650€ */}
      {selectedDomain === 'MAISON' && (
        <div className="p-5 space-y-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-emerald-600">Domaine n°1 • Transition Locataire → Propriétaire</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                Nouvelle Maison à 305 000 € (+23 500 € notaire) & Prêt 260 000 € (3,7 % - 4,0 %) : Loyer 400 € → 650 € + 100 €
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
              9 000 € / an reçus à 0 € d'IR (+4 200 € vs loyer actuel)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Home className="w-4 h-4 text-indigo-600" />
                <span>1. De la maison louée (400 €/m) à la maison achetée (305 000 €) :</span>
              </div>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>
                  • <strong>Situation actuelle :</strong> Nelly facture <strong>400 €/mois (4 800 €/an)</strong> à Nell'Immo dans la maison qu'elle loue actuellement sur Pélissanne, sans pouvoir déduire d'intérêts d'emprunt.
                </li>
                <li>
                  • <strong>Nouvelle acquisition :</strong> Achat à <strong>305 000 € + 23 500 € de frais de notaire</strong> (328 500 € au total), financé par un <strong>prêt de 260 000 €</strong> (taux attendu entre <strong>3,7 % et 4,0 %</strong>, soit 1 535 € à 1 576 €/mois sur 20 ans) et 68 500 € d'apport.
                </li>
                <li>
                  • <strong>Nouveau bail propriétaire au Régime Foncier Réel (Formulaire 2044) :</strong> Nell'Immo loue 35 m² (bureau réception + archivage Loi Hoguet 10 ans + stockage panneaux) pour <strong>650 €/mois + 100 €/mois de charges</strong> = <strong>9 000 €/an</strong> (+4 200 €/an vs aujourd'hui).
                </li>
                <li>
                  • <strong>Effacement de l'impôt (<Tooltip term="Art. 28 & 31 CGI" explanation="Permet de déduire des loyers encaissés la quote-part professionnelle (28%) des intérêts du prêt de 260 000 € et de la taxe foncière." lawRef="Art. 28 & 31 CGI" />) :</strong> Nelly déduit 28 % des intérêts de son prêt de 260 000 € (~2 761 €/an à 3,85 %) + 28 % de sa taxe foncière (~532 €/an) + travaux et charges : le revenu foncier imposable tombe à <strong>0 €</strong> !
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200 space-y-2">
              <div className="font-bold text-indigo-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>2. Travaux des 35 m² Pro & Garde-Fou URSSAF :</span>
              </div>
              <ul className="space-y-1.5 text-indigo-950 leading-relaxed">
                <li>
                  • <strong>Travaux d'aménagement du bureau (4 500 € HT) :</strong> Peinture, cloisons, éclairage et climatisation réversible de la zone pro pris en charge par Nell'Immo (<Tooltip term="Art. 39-1 CGI" explanation="Déduction des frais généraux et d'aménagement des locaux professionnels." lawRef="Art. 39-1 CGI" />) avec <strong>900 € de TVA récupérée</strong>.
                </li>
                <li>
                  • <strong>Impact sur les 20 000 € de dividendes 2025 :</strong> Le surplus de loyer/charges (+4 200 €) + les CESU/ANCV (3 131 €) + le PEE (3 880 €) remplacent <strong>11 211 € sur ses 20 000 € de dividendes</strong> chaque année (et 100 % des 20 000 € la 1re année) !
                </li>
              </ul>
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-950 text-[11px]">
                <strong>Garde-Fou URSSAF :</strong> Rédiger un nouveau bail professionnel écrit à l'entrée dans la maison à 305 000 € avec plan métré des 35 m² (loyer ~18,50 €/m² conforme au marché de Pélissanne).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTENU DOMAINE 2 : REVENUS 2025 (40 000 € + 20 000 € DIVIDENDES) & STATUT SASU */}
      {selectedDomain === 'DIRIGEANTE' && (
        <div className="p-5 space-y-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-indigo-600">Domaine n°2 • Rémunération 2025</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                Équilibre 2025 : 40 000 € de Revenu (Salaire) + 20 000 € de Dividendes en SASU
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-indigo-800 bg-indigo-50 border border-indigo-200">
              4 Trimestres Retraite Validés • 0 % Cotisations TNS sur Dividendes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-indigo-600" />
                <span>1. Pourquoi 40 000 € de salaire + 20 000 € de dividendes est optimal :</span>
              </div>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>
                  • <strong>40 000 € de revenu salarial :</strong> Valide les 4 trimestres de retraite de base, cotise à la retraite cadre Agirc-Arrco et a permis de présenter un dossier bancaire solide pour décrocher le <strong>prêt de 260 000 €</strong>.
                </li>
                <li>
                  • <strong>20 000 € de dividendes en SASU :</strong> Contrairement à une SARL (taxée à ~42 % TNS au-delà de 200 € de dividendes), la SASU bénéficie de la Flat Tax (30 % / 31,4 %).
                </li>
                <li>
                  • <strong>Agilité totale face à 2027 :</strong> Parce que Nelly n'a que <strong>20 000 € de dividendes</strong> à protéger, les leviers de la nouvelle maison (loyer +4 200 €, CESU 3 131 €, PEE 3 880 €) suffisent à en remplacer <strong>plus de la moitié (56 %) chaque année et 100 % l'année de l'achat</strong> !
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-emerald-600" />
                <span>2. Charges déjà déduites & Mutuelle Cadre :</span>
              </div>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>
                  • <strong>Frais déjà passés dans Nell'Immo :</strong> Leasing véhicule, téléphone/fibre et frais de réception clients sont déjà intégralement déduits du compte de résultat.
                </li>
                <li>
                  • <strong>Contrat Frais de Santé Cadre (Art. L311-3 23° CSS) :</strong> Souscrire une mutuelle familiale cadre payée par Nell'Immo avec renfort orthodontie 300 % BRSS pour couvrir les semestres de bagues de l'aînée (11 ans).
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* CONTENU DOMAINE 3 : FILLES, CESU & ANCV */}
      {selectedDomain === 'FILLES' && (
        <div className="p-5 space-y-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-pink-600">Domaine n°3 • Ses 2 Filles (5 & 11 ans)</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                CESU Dirigeante (2 591 €) + Chèques-Vacances ANCV (540 €) + Case T Parent Isolé
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-pink-800 bg-pink-50 border border-pink-200">
              3 131 € / an à 0 € d'IR + 648 € de Crédit d'IS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-pink-50/70 border border-pink-200 space-y-1.5">
              <div className="font-bold text-pink-950">1. CESU Préfinancés (2 591 €/an)</div>
              <p className="text-slate-600 leading-relaxed">
                Nell'Immo finance 2 591 €/an de CESU (<Tooltip term="Art. L7233-4 C. trav." explanation="Aide financière de l'entreprise aux services à la personne pour le dirigeant." lawRef="Art. L7233-4 C. trav." />) : 0 € d'IR, 0 € d'URSSAF, et l'agence récupère <strong>25 % de crédit d'IS (648 €)</strong> via l'Art. 244 quater F CGI.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-1.5">
              <div className="font-bold text-purple-950">2. Piano Aînée (11 ans • 400 €/an)</div>
              <p className="text-slate-600 leading-relaxed">
                En faisant venir le professeur de piano à domicile dans la nouvelle maison de Pélissanne, Nelly paie les 400 € avec ses CESU Nell'Immo + 50 % de crédit d'impôt (<Tooltip term="Art. 199 sexdecies CGI" explanation="Crédit d'impôt de 50% pour cours à domicile." lawRef="Art. 199 sexdecies CGI" />).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-pink-50/70 border border-pink-200 space-y-1.5">
              <div className="font-bold text-pink-950">3. Escalade Cadette (5 ans • 400 €/an)</div>
              <p className="text-slate-600 leading-relaxed">
                540 €/an de Chèques-Vacances ANCV exonérés financent le club d'escalade et les stages. + Crédit d'impôt garde 50 % (Art. 200 quater B CGI) jusqu'aux 6 ans de la cadette.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CONTENU DOMAINE 4 : TRANSMISSION NUE-PROPRIÉTÉ */}
      {selectedDomain === 'TRANSMISSION' && (
        <div className="p-5 space-y-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-purple-600">Domaine n°4 • Patrimoine des 2 Filles</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                Donation de la Nue-Propriété de la Maison de 305 000 € avant 51 ans : 0 € de Droits
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-purple-800 bg-purple-50 border border-purple-200">
              61 000 € / fille (&lt; 100 000 € d'abattement)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-slate-900">1. Barème Art. 669 CGI avant 51 ans (40 %)</div>
              <p className="text-slate-600 leading-relaxed">
                Avant les 51 ans de Nelly, l'usufruit vaut 60 % et la nue-propriété ne vaut que <strong>40 % de 305 000 € = 122 000 €</strong>, soit <strong>61 000 € par fille</strong>. C'est inférieur à l'abattement légal de 100 000 € par enfant (Art. 779 CGI) : <strong>0 € de droits de donation</strong> !
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 space-y-1.5">
              <div className="font-bold text-purple-950">2. Conservation à 100 % de l'Usufruit et du Bail Pro</div>
              <p className="text-purple-950 leading-relaxed">
                En conservant l'usufruit à vie, Nelly garde le droit d'habiter la maison et le droit exclusif d'encaisser les <strong>9 000 €/an de loyers et charges facturés à Nell'Immo</strong>. Au décès, les filles deviennent pleines propriétaires à 0 € de droits supplémentaires.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CONTENU DOMAINE 5 : TRÉSORERIE, HOLDING & PEE */}
      {selectedDomain === 'TRESORERIE' && (
        <div className="p-5 space-y-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-emerald-600">Domaine n°5 • Trésorerie & Apport</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                Déblocage PEE Achat Maison (Art. R3324-22 C. trav.) & Holding Mère-Fille (IS 1,25 %)
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
              Remboursement des 23 500 € de Frais de Notaire
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-slate-900">1. Déblocage PEE Achat (12 500 €)</div>
              <p className="text-slate-600 leading-relaxed">
                L'achat de la résidence principale à 305 000 € est un cas légal de déblocage anticipé du PEE à <strong>0 % d'IR et 0 % de charges sociales</strong> (hors CSG 9,7 %), permettant de reconstituer plus de la moitié des <strong>23 500 € de frais de notaire</strong> !
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-slate-900">2. Holding SASU (Art. 145 CGI)</div>
              <p className="text-slate-600 leading-relaxed">
                Remontée des bénéfices excédentaires avec 95 % d'exonération d'IS (soit <strong>1,25 % d'impôt effectif</strong>) pour constituer l'apport d'un studio étudiant à Aix/Marseille pour 2033.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-slate-900">3. Compte Courant d'Associé</div>
              <p className="text-slate-600 leading-relaxed">
                Rémunération des sommes laissées en compte courant au taux légal déductible (~4,65 %), 100 % déductible de l'IS de Nell'Immo et sans charges URSSAF.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CONTENU DOMAINE 6 : AGENCE & PUB 40K€ */}
      {selectedDomain === 'AGENCE' && (
        <div className="p-5 space-y-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-emerald-600">Domaine n°6 • Exploitation Nell'Immo</span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                Audit du Budget Publicitaire de 40 000 € & Commission Agile à 3 %
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-lg font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
              +4 080 € net / an après IS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
              <div className="font-bold text-emerald-950">1. Rationalisation des 40 000 € de Portails Annonces</div>
              <p className="text-slate-600 leading-relaxed">
                En réservant les boosts SeLoger / LeBonCoin / Belles Demeures aux seuls <strong>mandats exclusifs</strong>, une réduction de 12 % sur les 40 000 € dégage <strong>+4 800 € HT de marge (+4 080 € net après IS PME à 15 %)</strong>, soit presque l'équivalent de 3 mois de prêt immobilier !
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-slate-900">2. Honoraires Agiles à 3,0 % sur Mandats Exclusifs</div>
              <p className="text-slate-600 leading-relaxed">
                Proposer 3,0 % (9 150 € HT sur un bien à 305 000 €) en contrepartie d'une exclusivité de 3 mois accélère la rotation des ventes même si les taux acheteurs oscillent autour de 3,7 % - 4,0 %.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
