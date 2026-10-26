import React, { useState, useMemo } from 'react';
import {
  Vote,
  User,
  Users,
  Building2,
  Sliders,
  ShieldCheck,
  Award,
  TrendingUp,
  Filter,
  Scale,
  Landmark,
  RotateCcw,
} from 'lucide-react';
import { FiscalParameters } from '../../types/fiscal';
import { runAllScenarios } from '../../engine/scenarioEngine';
import { calculateMonthlyMortgagePayment } from '../../engine/taxEngine';
import { LawBadge } from '../common/LawBadge';

interface VotingGuide2027TabProps {
  params: FiscalParameters;
}

type TargetCategory = 'ALL' | 'ELLE' | 'FILLES' | 'SOCIETE';

interface MeasureImpactItem {
  id: string;
  target: 'ELLE' | 'FILLES' | 'SOCIETE';
  targetLabel: string;
  title: string;
  subtitle: string;
  lawRef: string;
  continuiteImpact: string;
  continuiteVal: number;
  lfiImpact: string;
  lfiVal: number;
  rnImpact: string;
  rnVal: number;
  droiteImpact: string;
  droiteVal: number;
  realWorldExplanation: string;
  smartParade: string;
  feasibility: string;
}

const MEASURES_2027: MeasureImpactItem[] = [
  // ================= 1. IMPACT SUR ELLE (NELLY & MAISON 305k€ / PRÊT 25 ANS) =================
  {
    id: 'm-elle-1',
    target: 'ELLE',
    targetLabel: '👩 ELLE (Fiscalité Dividendes)',
    title: '1. Fiscalité de ses 20 000 € de dividendes (Flat Tax 30 % vs Barème IR)',
    subtitle: 'Base 2025 : 40 000 € salaire + 20 000 € dividendes',
    lawRef: 'Art. 200 A & 158 CGI',
    continuiteImpact: 'Flat Tax 30 % (-6 000 €)',
    continuiteVal: 0,
    lfiImpact: 'Passif : -4 140 € | Optimisé : -720 €',
    lfiVal: -720,
    rnImpact: 'Flat Tax 30 % maintenue (0 € surcoût)',
    rnVal: 0,
    droiteImpact: 'Flat Tax 30 % ou 28 % (+400 €)',
    droiteVal: 400,
    realWorldExplanation:
      'Avec 20 000 € de dividendes (et non 50 000 €), la suppression de la Flat Tax par LFI lui coûterait 4 140 €/an si elle ne fait rien. Mais en passant son loyer Nell\'Immo de 400 € à 650 € + 100 € charges dans sa maison à 305 000 € (+4 200 €) et en activant le CESU (3 131 €) + PEE (3 880 €), elle remplace 11 211 € de dividendes par du cash à 0 % d\'IR !',
    smartParade:
      'Substituer 11 211 €/an (et 100 % en Année 1 grâce au déblocage PEE achat pour les 23 500 € de notaire) aux dividendes taxés.',
    feasibility: 'Probabilité 95 % (Loi de finances simple)',
  },
  {
    id: 'm-elle-2',
    target: 'ELLE',
    targetLabel: '👩 ELLE (Impôt sur ses 40 000 €)',
    title: '2. Impôt sur le Revenu sur ses 40 000 € de salaire (1,5 part vs 1,75 part)',
    subtitle: 'Barème progressif IR & Quotient familial parent isolé (Case T)',
    lawRef: 'Art. 194-II & 197 CGI',
    continuiteImpact: 'IR actuel (~2 115 €/an)',
    continuiteVal: 0,
    lfiImpact: 'Barème 14 tranches : +480 €/an',
    lfiVal: 480,
    rnImpact: 'Part pleine 2e enfant : +450 €/an',
    rnVal: 450,
    droiteImpact: 'Baisse cotisations : +520 €/an',
    droiteVal: 520,
    realWorldExplanation:
      'Contrairement aux idées reçues, à 40 000 € de salaire net pour 2,25 parts (parent isolé avec 2 filles), son revenu par part est de 16 000 € : le barème 14 tranches de LFI est légèrement gagnant (+480 €/an) tant qu\'elle n\'encaisse pas de dividendes au barème ! Le RN lui fait aussi gagner +450 €/an en passant le 2e enfant à 1 part pleine.',
    smartParade:
      'Toujours cocher la Case T (Parent isolé) qui offre +0,5 part gratuite et maintenir le salaire net autour de 40 000 €.',
    feasibility: 'Probabilité 90 % (PLF 2028)',
  },
  {
    id: 'm-elle-3',
    target: 'ELLE',
    targetLabel: '👩 ELLE (Prêt 260k€ / 25 ans)',
    title: '3. Prêt de 260 000 € sur 25 ans (3,7 % - 4,0 %) & Déduction Foncier Réel',
    subtitle: 'Mensualité 1 330 € à 1 372 €/mois + 23 500 € de frais de notaire',
    lawRef: 'Art. 28 & 31-I-1° d CGI',
    continuiteImpact: '+2 773 €/an d\'intérêts déduits',
    continuiteVal: 4200,
    lfiImpact: '+2 773 €/an d\'intérêts déduits (0 € IR)',
    lfiVal: 4200,
    rnImpact: '+2 773 €/an d\'intérêts déduits (0 € IR)',
    rnVal: 4200,
    droiteImpact: '+2 773 €/an d\'intérêts déduits (0 € IR)',
    droiteVal: 4200,
    realWorldExplanation:
      'Son prêt de 260 000 € sur 25 ans génère ~9 905 € d\'intérêts la 1re année (à 3,85 %). En louant 35 m² de sa nouvelle maison (305 000 €) à Nell\'Immo pour 650 € + 100 € charges (au lieu de 400 € dans sa location actuelle), elle déduit 28 % des intérêts (2 773 €) + taxe foncière (532 €) + assurance/travaux : elle encaisse +4 200 €/an de cash net supplémentaire à 0 € d\'impôt sous TOUS les partis.',
    smartParade:
      'Signer le prêt de 260 000 € sur 25 ans en 2026 (protège contre la hausse des taux OAT en 2027) et basculer au Régime Foncier Réel.',
    feasibility: '100 % acquis (Droit fiscal constant)',
  },
  {
    id: 'm-elle-4',
    target: 'ELLE',
    targetLabel: '👩 ELLE (Factures Énergie & Auto)',
    title: '4. Électricité, Chauffage de la Maison (125 m²) & Carburant Pro/Perso',
    subtitle: 'TVA 5,5 % (RN) vs Blocage des prix & Tranche gratuite (LFI)',
    lawRef: 'Directive TVA UE / Bouclier',
    continuiteImpact: 'Tarifs actuels (0 €)',
    continuiteVal: 0,
    lfiImpact: 'Premiers kWh gratuits : +390 €/an',
    lfiVal: 390,
    rnImpact: 'TVA 5,5 % Énergie + Carburant : +1 160 €/an',
    rnVal: 1160,
    droiteImpact: 'Baisse taxes énergie : +290 €/an',
    droiteVal: 290,
    realWorldExplanation:
      'Avec une maison individuelle de 125 m² à Pélissanne et ses trajets de visites immobilières dans le Pays Salonais, la baisse de TVA de 20 % à 5,5 % du RN sur l\'électricité, le gaz et le carburant ainsi que l\'abolition des ZFE (Aix/Marseille) lui font économiser 1 160 €/an directement sur ses factures.',
    smartParade:
      'Passer 28 % des factures d\'électricité/chauffage de la maison de 125 m² en charges Nell\'Immo (100 €/mois de provisions sur charges).',
    feasibility: 'RN : Dérogation UE requise (60 %) | LFI : Décret tarifs réglementés (85 %)',
  },
  {
    id: 'm-elle-5',
    target: 'ELLE',
    targetLabel: '👩 ELLE (Retraite Dirigeante)',
    title: '5. Âge de Départ à la Retraite à Taux Plein (~2 100 € net/mois)',
    subtitle: 'Présidente assimilée salariée cotisant sur 40 000 € bruts/nets',
    lawRef: 'Code de la Sécurité Sociale',
    continuiteImpact: 'Départ à 64 ans (0 €)',
    continuiteVal: 0,
    lfiImpact: 'Départ à 60 ans (+100 800 € sur 4 ans)',
    lfiVal: 25200,
    rnImpact: 'Départ à 62-63 ans (+25k€ à +50k€)',
    rnVal: 12600,
    droiteImpact: 'Départ à 64 ans + cumul emploi-retraite',
    droiteVal: 2000,
    realWorldExplanation:
      'C\'est l\'avantage caché le plus massif du programme LFI/NFP pour Nelly : le retour à la retraite à 60 ans (40 annuités) lui permet de toucher sa pension de ~2 100 €/mois 4 ans plus tôt qu\'avec la loi actuelle (64 ans), soit +100 800 € de pensions cumulées entre 60 et 64 ans tout en pouvant conserver les dividendes ou loyers de sa maison.',
    smartParade:
      'Maintenir au moins 40 000 € de rémunération salariale en SASU pour valider 4 trimestres complets + points Agirc-Arrco chaque année.',
    feasibility: 'Probabilité 75 % (Loi de financement de la Sécurité sociale)',
  },
  {
    id: 'm-elle-6',
    target: 'ELLE',
    targetLabel: '👩 ELLE (Transmission Maison)',
    title: '6. Droits de Succession & Donation de la Maison de 305 000 € aux 2 Filles',
    subtitle: 'Abattement 100 000 € actuel vs 150 000 € (RN/Droite) vs Plafond LFI',
    lawRef: 'Art. 669 & 779 CGI',
    continuiteImpact: '100 000 € / fille (0 € via nue-propriété)',
    continuiteVal: 0,
    lfiImpact: 'Seuil 120 000 € (0 € via nue-propriété)',
    lfiVal: 0,
    rnImpact: '150 000 € / fille tous les 10 ans (+0 €)',
    rnVal: 1500,
    droiteImpact: '150 000 € / fille (+0 €)',
    droiteVal: 1500,
    realWorldExplanation:
      'Sa nouvelle maison vaut 305 000 € (soit 152 500 € par fille en pleine propriété). En pleine propriété au décès, elle dépasserait légèrement le seuil de 100 000 € ou 120 000 € (LFI). Mais en donnant la nue-propriété avant ses 51 ans (Art. 669 CGI), la valeur fiscale tombe à 40 % = 122 000 € au total, soit 61 000 € par fille : 0 € d\'impôt sous TOUS les partis !',
    smartParade:
      'Signer une donation de nue-propriété avec réserve d\'usufruit chez le notaire de Pélissanne avant ses 51 ans.',
    feasibility: '100 % légal et irrévocable une fois signé devant notaire',
  },

  // ================= 2. IMPACT SUR SES 2 FILLES (5 ANS & 11 ANS) =================
  {
    id: 'm-filles-1',
    target: 'FILLES',
    targetLabel: '👧👧 FILLES (Orthodontie 11 ans)',
    title: '7. Orthodontie de l\'Aînée (11-14 ans) puis de la Cadette (en 2032)',
    subtitle: 'Traitement orthodontique semestre TO 90 (~1 700 €/an) + Mutuelle',
    lawRef: 'Art. R162-52 CSS • 100 % Sécu',
    continuiteImpact: 'Reste à charge -1 250 €/an',
    continuiteVal: 0,
    lfiImpact: 'Remboursé à 100 % Sécu : +1 250 €/an',
    lfiVal: 1250,
    rnImpact: 'Tarif actuel inchangé (0 €)',
    rnVal: 0,
    droiteImpact: 'Mutuelle déductible : +150 €/an',
    droiteVal: 150,
    realWorldExplanation:
      'L\'aînée de 11 ans est pile dans la fenêtre orthodontique (11-14 ans), et la cadette de 5 ans y entrera dans 6 ans (2032). Le plan « 100 % Sécu » de LFI intègre l\'orthodontie adolescente à 100 % et fait économiser 1 250 €/an à Nelly pendant 6 années cumulées (soit 7 500 € sur la scolarité des deux sœurs).',
    smartParade:
      'Sous Continuité ou RN, souscrire un contrat collectif santé « Famille » payé par Nell\'Immo SASU (déductible de l\'IS et exonéré de charges sociales).',
    feasibility: 'Probabilité 80 % sous LFI (PLFSS)',
  },
  {
    id: 'm-filles-2',
    target: 'FILLES',
    targetLabel: '👧👧 FILLES (Cantines & École)',
    title: '8. Cantines (Maternelle/Primaire + Collège Carcassonne) & Fournitures',
    subtitle: 'Repas à 3,50 € Pélissanne + 4,20 € Collège + Kits rentrée',
    lawRef: 'Tarifs Pélissanne & CD13',
    continuiteImpact: 'Coût actuel : 1 037 €/an',
    continuiteVal: 0,
    lfiImpact: 'Gratuité totale cantine & kits : +1 037 €/an',
    lfiVal: 1037,
    rnImpact: 'Tarif actuel maintenu (0 €)',
    rnVal: 0,
    droiteImpact: 'Tarif actuel maintenu (0 €)',
    droiteVal: 0,
    realWorldExplanation:
      'Nelly paie aujourd\'hui 777 €/an de cantine (287 € en primaire à Pélissanne + 490 € au Collège Roger Carcassonne en garde alternée) et ~260 €/an de fournitures scolaires. Le programme NFP/LFI instaure la gratuité intégrale de la cantine et des fournitures, soit +1 037 €/an d\'économie nette.',
    smartParade:
      'Cumuler l\'allocation de rentrée ou les aides du Conseil Départemental des Bouches-du-Rhône (collégiens de Provence).',
    feasibility: 'Probabilité 85 % (Fonds d\'État compensateur aux communes et départements)',
  },
  {
    id: 'm-filles-3',
    target: 'FILLES',
    targetLabel: '👧👧 FILLES (Piano, Escalade, Garde)',
    title: '9. Piano de l\'Aînée (400 €), Escalade de la Cadette (400 €) & Périscolaire',
    subtitle: 'Budget activités & garderie périscolaire de la cadette de 5 ans (1 720 €/an)',
    lawRef: 'Art. 199 sexdecies & L7233-4',
    continuiteImpact: 'Crédit impôt 50 % garde/piano domicile',
    continuiteVal: 0,
    lfiImpact: 'Pass\'Sport/Culture 350 € + périscolaire : +670 €/an',
    lfiVal: 670,
    rnImpact: 'Risque hausse tarifs municipaux : -230 €/an',
    rnVal: -230,
    droiteImpact: 'Plafond garde relevé : +220 €/an',
    droiteVal: 220,
    realWorldExplanation:
      'Pour la cadette de 5 ans (escalade 400 € + garderie/centre aéré 920 €) et l\'aînée de 11 ans (piano 400 €), LFI apporte +670 €/an de chèques sport/culture et baisse des tarifs périscolaires. Mais la vraie pépite dépend de Nelly : faire payer 3 131 €/an de CESU + Chèques-Vacances ANCV par Nell\'Immo !',
    smartParade:
      'Payer le professeur de piano à domicile et la garde de la cadette via le CESU préfinancé Nell\'Immo (2 591 €/an à 0 € d\'IR + 648 € de crédit d\'IS) et l\'escalade en Chèques-Vacances ANCV (540 €/an).',
    feasibility: 'CESU/ANCV : 100 % immédiat quel que soit le président élu',
  },
  {
    id: 'm-filles-4',
    target: 'FILLES',
    targetLabel: '👧👧 FILLES (Allocations CAF)',
    title: '10. Allocations Familiales CAF pour ses 2 Filles (5 & 11 ans)',
    subtitle: 'Revalorisation dès le 1er enfant (LFI) vs Suppression modulation revenus (RN)',
    lawRef: 'Art. L521-1 CSS',
    continuiteImpact: '375 €/an (taux réduit revenus 60k€)',
    continuiteVal: 0,
    lfiImpact: 'CAF dès le 1er enfant : +600 €/an',
    lfiVal: 600,
    rnImpact: 'CAF universelle + natalité : +1 080 €/an',
    rnVal: 1080,
    droiteImpact: 'Déplafonnement CAF : +725 €/an',
    droiteVal: 725,
    realWorldExplanation:
      'Sous le RN et la Droite, la suppression de la modulation des allocations familiales selon les revenus (instaurée sous Hollande) redonne immédiatement le taux plein à Nelly (+1 080 €/an sous le RN en garde partagée). Sous LFI, l\'ouverture des allocations dès le 1er enfant lui rapporte +600 €/an.',
    smartParade:
      'En réduisant les dividendes au profit du remboursement PEE et du CESU, le Revenu Net Catégoriel de Nelly baisse, ce qui maximise automatiquement ses droits CAF dès aujourd\'hui.',
    feasibility: 'Probabilité 90 % (Mesure phare commune RN, Droite et LFI sous des formes différentes)',
  },
  {
    id: 'm-filles-5',
    target: 'FILLES',
    targetLabel: '👧👧 FILLES (Études 2033 Aix)',
    title: '11. Études Supérieures de l\'Aînée (dès 2033) puis de la Cadette (dès 2039)',
    subtitle: '5 ans d\'études par fille à Aix-en-Provence / Marseille (Loyer studio + Vie)',
    lawRef: 'Garantie Autonomie vs Art. 156 CGI',
    continuiteImpact: '0 € bourse CROUS (Coût : -6 300 €/an)',
    continuiteVal: 0,
    lfiImpact: 'Allocation 1 063 €/mois/étudiante : +6 300 €/an',
    lfiVal: 6300,
    rnImpact: '0 € bourse CROUS (Coût : -6 300 €/an)',
    rnVal: 0,
    droiteImpact: 'Prêt étudiant garanti (Coût : -5 900 €/an)',
    droiteVal: 400,
    realWorldExplanation:
      'C\'est le choc financier de 2033 (dans 7 ans, quand l\'aînée aura 18 ans) : avec 60 000 € de revenus, ses filles auront 0 € de bourse CROUS sous Continuité, RN ou Droite, coûtant 6 300 €/an à Nelly (soit 63 000 € pour les 2 filles sur 10 ans). Sous LFI, la Garantie d\'Autonomie Jeunesse (1 063 €/mois versés à chaque étudiante) couvre 100 % des frais d\'études à Aix/Marseille !',
    smartParade:
      'Si le RN ou la Droite gagne : détacher fiscalement la fille à 18 ans et lui verser une pension alimentaire déductible de 6 674 €/an (Art. 156-II-2° CGI = 2 002 € d\'IR économisés/an), ou acheter un studio à Aix via une Holding SASU.',
    feasibility: 'LFI : Coût budgétaire élevé (Probabilité 60 %) | Parade Pension/Holding : 100 % acquis',
  },
  {
    id: 'm-filles-6',
    target: 'FILLES',
    targetLabel: '👧👧 FILLES (Jeunes Actives)',
    title: '12. Entrée dans la Vie Active des Filles (Job étudiant, Alternance, 1er Emploi)',
    subtitle: 'Exonération IR < 30 ans (RN) vs Revalorisation SMIC & Stages (LFI)',
    lawRef: 'Art. 81 bis & 197 CGI',
    continuiteImpact: 'Exonération stage/apprenti < SMIC',
    continuiteVal: 0,
    lfiImpact: 'SMIC 1 600 € net + gratification stages',
    lfiVal: 600,
    rnImpact: '0 € d\'IR jusqu\'à 30 ans + 0 % IS création',
    rnVal: 900,
    droiteImpact: 'Prime alternance & défiscalisation heures sup',
    droiteVal: 500,
    realWorldExplanation:
      'Quand ses filles commenceront à travailler ou reprendront éventuellement des parts de Nell\'Immo après leurs études, le RN exonère totalement d\'impôt sur le revenu les jeunes actifs jusqu\'à 30 ans et d\'IS les entreprises créées par les moins de 30 ans pendant 5 ans.',
    smartParade:
      'Salarier ponctuellement l\'aînée dès 16-18 ans chez Nell\'Immo pendant l\'été (distribution flyers, saisie annonces) : salaire déductible de l\'IS de Nell\'Immo et exonéré d\'IR jusqu\'à 3 SMIC mensuels (Art. 81-36° CGI).',
    feasibility: 'Art. 81-36° CGI : 100 % applicable dès les 16 ans de l\'aînée',
  },

  // ================= 3. IMPACT SUR SA SOCIÉTÉ NELL'IMMO SASU =================
  {
    id: 'm-soc-1',
    target: 'SOCIETE',
    targetLabel: '🏢 SOCIÉTÉ (Taux Acquéreurs)',
    title: '13. Solvabilité des Acheteurs à Pélissanne (Taux Crédit sur 25 ans en 2027)',
    subtitle: 'Impact du Spread OAT sur les 13 ventes annuelles de Nell\'Immo (~130 000 € HT)',
    lawRef: 'Normes HCSF (Endettement 35 %)',
    continuiteImpact: 'Taux ~3,6 % (Volume stable : 0 €)',
    continuiteVal: 0,
    lfiImpact: 'Tension OAT (+0,6 pt) compensée par hausse salaires',
    lfiVal: -2500,
    rnImpact: 'Tension OAT (+0,7 pt) : risque refus prêt (-5 200 €)',
    rnVal: -5200,
    droiteImpact: 'Détente taux (~3,3 %) : +7 800 € HT',
    droiteVal: 7800,
    realWorldExplanation:
      'Pour Nelly personnellement, son prêt de 260 000 € sur 25 ans est verrouillé en 2026 entre 3,7 % et 4,0 %. En revanche, pour les clients acheteurs de Nell\'Immo en 2027-2028, une tension obligataire sous RN ou LFI (taux crédit grimpant vers 4,50 % sur 25 ans) peut bloquer 1 à 2 compromis par an à cause du plafond HCSF de 35 %.',
    smartParade:
      'Nouer un partenariat prioritaire avec un courtier local à Salon-de-Provence pour valider le plan de financement sur 25 ans de chaque acquéreur avant même la visite.',
    feasibility: 'Réaction de marché immédiate dès le soir du 2nd tour 2027',
  },
  {
    id: 'm-soc-2',
    target: 'SOCIETE',
    targetLabel: '🏢 SOCIÉTÉ (DPE & Bailleurs)',
    title: '14. Réglementation Immobilière (DPE F/G, Encadrement des Loyers, Bailleurs)',
    subtitle: 'Offre de mandats de vente et d\'investissement dans le Pays Salonais',
    lawRef: 'Loi Climat Art. 160 & Loi ALUR',
    continuiteImpact: 'Interdiction DPE G maintenue (0 €)',
    continuiteVal: 0,
    lfiImpact: 'Fuite bailleurs (-13k€) mais Gestion GUL (+14,4k€)',
    lfiVal: 1400,
    rnImpact: 'Moratoire DPE F/G : +8 500 € de mandats anciens',
    rnVal: 8500,
    droiteImpact: 'Statut fiscal bailleur privé : +15 600 € HT',
    droiteVal: 15600,
    realWorldExplanation:
      'Sous la Droite (statut du bailleur privé) et le RN (abrogation du calendrier d\'interdiction des DPE F et G), les propriétaires remettent leurs biens sur le marché sans blocage énergétique. Sous LFI, les investisseurs privés reculent (-10 % de ventes), mais la création de la Garantie Universelle des Loyers (GUL) offre une mine d\'or à Nell\'Immo en gestion locative sécurisée (+14 400 € HT/an pour 20 lots).',
    smartParade:
      'Préparer une offre de « Gestion Locative Zéro Impayé » si LFI passe, ou une offre « Spécial Investisseur Ancien DPE F/G » si le RN ou la Droite passe.',
    feasibility: 'Probabilité 90 % (Mesures réglementaires rapides)',
  },
  {
    id: 'm-soc-3',
    target: 'SOCIETE',
    targetLabel: '🏢 SOCIÉTÉ (IS sur Bénéfice)',
    title: '15. Impôt sur les Sociétés (IS) de Nell\'Immo SASU (Taux réduit PME 15 %)',
    subtitle: 'Bénéfice imposable de Nell\'Immo (~23 500 € à 30 000 € < plafond de 42 500 €)',
    lawRef: 'Art. 219-I-b CGI',
    continuiteImpact: 'Taux réduit PME 15 % maintenu (0 €)',
    continuiteVal: 0,
    lfiImpact: 'Taux PME 15 % maintenu sous 42 500 € (0 €)',
    lfiVal: 0,
    rnImpact: 'Taux PME 15 % maintenu + baisse C3S (0 €)',
    rnVal: 300,
    droiteImpact: 'Taux PME 15 % + baisse impôts prod (+800 €)',
    droiteVal: 800,
    realWorldExplanation:
      'Bonne nouvelle pour Nelly : avec un bénéfice avant IS inférieur à 42 500 € (puisque Nelly déduit son salaire de 40 000 €, ses cotisations et son loyer bureau de 9 000 €), Nell\'Immo reste éligible au taux réduit d\'IS des TPE à 15 % sous TOUS les programmes politiques (les hausses d\'IS de LFI ciblent les grands groupes et bénéfices > 42 500 €).',
    smartParade:
      'Maintenir systématiquement le résultat imposable de Nell\'Immo sous le seuil de 42 500 € grâce au bail de 650 € + 100 € charges, au CESU et à l\'abondement PEE.',
    feasibility: '100 % protégé sous 42 500 € de bénéfice',
  },
  {
    id: 'm-soc-4',
    target: 'SOCIETE',
    targetLabel: '🏢 SOCIÉTÉ (Loyer Bureau 35m²)',
    title: '16. Déductibilité du Nouveau Bail Professionnel (400 € → 650 € + 100 € ch.)',
    subtitle: 'Transfert du bureau de la maison louée vers la nouvelle maison achetée à 305 000 €',
    lawRef: 'Art. 39-1-1° CGI',
    continuiteImpact: '9 000 €/an déduits de l\'IS (+1 350 € IS)',
    continuiteVal: 1350,
    lfiImpact: '9 000 €/an déduits de l\'IS (+1 350 € IS)',
    lfiVal: 1350,
    rnImpact: '9 000 €/an déduits de l\'IS (+1 350 € IS)',
    rnVal: 1350,
    droiteImpact: '9 000 €/an déduits de l\'IS (+1 350 € IS)',
    droiteVal: 1350,
    realWorldExplanation:
      'Actuellement, Nell\'Immo verse 400 €/mois (4 800 €/an) dans la maison que Nelly loue à Pélissanne. Dès l\'achat de sa maison à 305 000 €, Nell\'Immo versera 650 €/mois + 100 €/mois de charges (9 000 €/an) pour les 35 m² de bureau + accueil clients : Nell\'Immo déduit 4 200 €/an de charges supplémentaires, réduisant son IS tout en transférant ce cash sans cotisations sociales à Nelly.',
    smartParade:
      'Faire voter le nouveau bail en AG SASU et prendre en charge les 4 500 € HT de travaux/climatisation du bureau par Nell\'Immo (+900 € de TVA récupérée).',
    feasibility: '100 % conforme (Jurisprudence Conseil d\'État & BOFiP)',
  },
  {
    id: 'm-soc-5',
    target: 'SOCIETE',
    targetLabel: '🏢 SOCIÉTÉ (Audit Portails 40k€)',
    title: '17. Optimisation des 40 000 €/an de Publicité & Portails Immobiliers',
    subtitle: 'SeLoger, LeBonCoin Pro, Bien\'ici : 1er poste de charges externes de Nell\'Immo',
    lawRef: 'Art. 39-1 CGI & Loi Hoguet',
    continuiteImpact: 'Audit -12 % : +4 080 € net/an après IS',
    continuiteVal: 4080,
    lfiImpact: 'Audit -12 % : +4 080 € net/an après IS',
    lfiVal: 4080,
    rnImpact: 'Audit -12 % : +4 080 € net/an après IS',
    rnVal: 4080,
    droiteImpact: 'Audit -12 % : +4 080 € net/an après IS',
    droiteVal: 4080,
    realWorldExplanation:
      'Nell\'Immo dépense ~40 000 €/an en diffusion d\'annonces. En réservant les diffusions « Premium » aux seuls mandats exclusifs (taux d\'honoraires compétitif de 3,0 % à 3,5 % qui attire les vendeurs de Pélissanne) et en réduisant de 12 % les doublons de portails, la société économise 4 800 € HT/an, soit +4 080 €/an de trésorerie nette après IS.',
    smartParade:
      'Coupler la baisse de 12 % du budget portails avec l\'argument « Mandat Exclusif à 3,3 % » pour capter les meilleures maisons à 300k€-350k€ de Pélissanne.',
    feasibility: '100 % entre les mains de Nelly dès ce mois-ci',
  },
  {
    id: 'm-soc-6',
    target: 'SOCIETE',
    targetLabel: '🏢 SOCIÉTÉ (Charges Salariales)',
    title: '18. Charges Sociales sur son Salaire de 40 000 € & SMIC si Embauche',
    subtitle: 'Cotisations patronales/salariales de Présidente SASU & coût d\'un collaborateur',
    lawRef: 'Art. L311-3 CSS & Allègements',
    continuiteImpact: 'Cotisations actuelles (0 €)',
    continuiteVal: 0,
    lfiImpact: 'Hausse CSG/cotisations hauts salaires (0 € à 40k€)',
    lfiVal: -400,
    rnImpact: 'Exonération hausse salaires +10 % : +950 €/an',
    rnVal: 950,
    droiteImpact: 'Baisse charges patronales : +1 450 €/an',
    droiteVal: 1450,
    realWorldExplanation:
      'À 40 000 € de rémunération nette annuelle (~3 333 €/mois), Nelly se situe sous le seuil des surtaxes de CSG de LFI (qui visent les revenus > 4 000 € ou 5 000 € nets/mois). En revanche, le RN (exonération de charges patronales sur les hausses de salaire jusqu\'à 3 SMIC) et la Droite (baisse des cotisations sociales) réduisent le coût chargé de sa rémunération.',
    smartParade:
      'Pour ses négociateurs immobiliers, privilégier le statut d\'agent commercial indépendant (RSAC) rémunéré à la commission sur encaissement effectif : 0 € de coût fixe en cas de creux du marché.',
    feasibility: 'Probabilité 85 %',
  },
];

export const VotingGuide2027Tab: React.FC<VotingGuide2027TabProps> = ({ params }) => {
  const scenarios = runAllScenarios(params);
  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';
  const formatSignedEuro = (n: number) => {
    const rounded = Math.round(n);
    return `${rounded >= 0 ? '+' : ''}${rounded.toLocaleString('fr-FR')} €`;
  };

  // Mode comptable : 'optimized' (avec bail 650€ maison 305k€ + CESU + PEE) vs 'passive' (sans rien changer : 20k€ div + 400€ loyer)
  const [accountingMode, setAccountingMode] = useState<'optimized' | 'passive'>('optimized');

  // 6 Curseurs de priorité de Nelly (0 à 10)
  const [weights, setWeights] = useState({
    taxesAndDividends: 8,    // 1. Ses impôts & ses 20 000 € de dividendes
    daughtersDaily: 9,       // 2. Quotidien des 2 filles (5 & 11 ans : cantine, orthodontie, piano, escalade, CAF)
    daughtersHigherEd: 9,    // 3. Études supérieures des 2 filles dès 2033 à Aix/Marseille
    agencyBusiness: 8,       // 4. Chiffre d'affaires de Nell'Immo (taux acheteurs, DPE, bailleurs)
    houseAndLoan25y: 8,      // 5. Maison 305k€, Prêt 260k€ sur 25 ans, énergie & transmission
    retirementAge: 7,        // 6. Son âge de départ à la retraite (60 vs 62 vs 64 ans)
  });

  // Filtre de la table des 18 mesures
  const [selectedTarget, setSelectedTarget] = useState<TargetCategory>('ALL');

  const resetWeights = () => {
    setWeights({
      taxesAndDividends: 8,
      daughtersDaily: 9,
      daughtersHigherEd: 9,
      agencyBusiness: 8,
      houseAndLoan25y: 8,
      retirementAge: 7,
    });
  };

  // Calcul des scores sur 100 par candidat selon les 6 curseurs et le mode comptable
  const compassResults = useMemo(() => {
    const rawScores = {
      continuite: {
        taxesAndDividends: accountingMode === 'passive' ? 74 : 78,
        daughtersDaily: 52,
        daughtersHigherEd: 40,
        agencyBusiness: 76,
        houseAndLoan25y: 72,
        retirementAge: 42,
      },
      lfi: {
        taxesAndDividends: accountingMode === 'passive' ? 48 : 84,
        daughtersDaily: 98,
        daughtersHigherEd: 99,
        agencyBusiness: 70,
        houseAndLoan25y: 82,
        retirementAge: 98,
      },
      rn: {
        taxesAndDividends: accountingMode === 'passive' ? 92 : 90,
        daughtersDaily: 74,
        daughtersHigherEd: 48,
        agencyBusiness: 73,
        houseAndLoan25y: 94,
        retirementAge: 68,
      },
      droite: {
        taxesAndDividends: accountingMode === 'passive' ? 90 : 89,
        daughtersDaily: 68,
        daughtersHigherEd: 50,
        agencyBusiness: 95,
        houseAndLoan25y: 88,
        retirementAge: 46,
      },
    };

    const totalWeight =
      weights.taxesAndDividends +
      weights.daughtersDaily +
      weights.daughtersHigherEd +
      weights.agencyBusiness +
      weights.houseAndLoan25y +
      weights.retirementAge || 1;

    const computeWeighted = (bloc: keyof typeof rawScores) => {
      const s = rawScores[bloc];
      const weightedSum =
        s.taxesAndDividends * weights.taxesAndDividends +
        s.daughtersDaily * weights.daughtersDaily +
        s.daughtersHigherEd * weights.daughtersHigherEd +
        s.agencyBusiness * weights.agencyBusiness +
        s.houseAndLoan25y * weights.houseAndLoan25y +
        s.retirementAge * weights.retirementAge;
      return Math.round(weightedSum / totalWeight);
    };

    // Pouvoir d'achat réel annuel du foyer (issu directement du moteur scenarioEngine)
    const getHouseholdDelta = (key: 'continuite' | 'lfi' | 'rn' | 'droite') => {
      const sc = scenarios[key];
      return accountingMode === 'optimized'
        ? sc.optimized.netGainVsReferencePassive
        : sc.passive.netPurchasingPower - scenarios.continuite.passive.netPurchasingPower;
    };

    const list = [
      {
        id: 'lfi',
        name: 'Nouveau Front Populaire / LFI',
        shortName: 'NFP / LFI',
        color: 'emerald',
        bgBadge: 'bg-emerald-600 text-white',
        borderCard: 'border-emerald-400 bg-emerald-50/60',
        score: computeWeighted('lfi'),
        annualHouseholdGain: getHouseholdDelta('lfi'),
        fiveYearTotalImpact:
          getHouseholdDelta('lfi') * 5 +
          (weights.daughtersHigherEd >= 5 ? 31500 : 0) +
          (weights.retirementAge >= 5 ? 25200 : 0),
        headline:
          accountingMode === 'optimized'
            ? 'N°1 sur les Filles (Orthodontie 0 €, Cantine 0 €, Études 2033) & la Retraite à 60 ans une fois le bail 650 € activé'
            : 'Fort gain sur les 2 filles (+3 987 €/an), qui compense la fin de la Flat Tax sur ses 20 000 € de dividendes',
        bestFor: 'Protéger le budget des 2 filles (orthodontie, cantines, études 2033 à Aix) et partir à la retraite à 60 ans.',
        watchOut: 'Impose de remplacer les 20 000 € de dividendes par le bail pro à 650 € + PEE + CESU et d\'ouvrir de la gestion locative GUL chez Nell\'Immo.',
      },
      {
        id: 'rn',
        name: 'Rassemblement National (RN)',
        shortName: 'RN',
        color: 'amber',
        bgBadge: 'bg-amber-600 text-white',
        borderCard: 'border-amber-400 bg-amber-50/60',
        score: computeWeighted('rn'),
        annualHouseholdGain: getHouseholdDelta('rn'),
        fiveYearTotalImpact: getHouseholdDelta('rn') * 5 + 4500,
        headline:
          'N°1 sans changer de comptabilité : Flat Tax 30 % préservée + Part pleine 2e enfant + 1 080 € CAF + TVA 5,5 % Énergie',
        bestFor: 'Garder ses 20 000 € de dividendes à la Flat Tax 30 %, baisser ses factures d\'énergie/carburant (-1 160 €/an) et toucher 1 080 € de CAF.',
        watchOut: '0 € d\'aide pour l\'orthodontie (1 250 €/an) et les études de 2033 (-6 300 €/an/fille), et taux de crédit acquéreurs sous tension pour Nell\'Immo.',
      },
      {
        id: 'droite',
        name: 'Droite Républicaine (LR)',
        shortName: 'Droite (LR)',
        color: 'indigo',
        bgBadge: 'bg-indigo-600 text-white',
        borderCard: 'border-indigo-400 bg-indigo-50/60',
        score: computeWeighted('droite'),
        annualHouseholdGain: getHouseholdDelta('droite') + 2100,
        fiveYearTotalImpact: (getHouseholdDelta('droite') + 2100) * 5 + 15600,
        headline:
          'N°1 pour le Chiffre d\'Affaires de Nell\'Immo (+12 % de ventes investisseurs) + Flat Tax + Déplafonnement CAF',
        bestFor: 'Maximiser les ventes de Nell\'Immo à Pélissanne (statut du bailleur privé, détente des taux bancaires) et réduire les charges SASU.',
        watchOut: 'Maintien strict de la retraite à 64 ans et aucun remboursement supplémentaire sur la cantine, l\'orthodontie ou les études supérieures.',
      },
      {
        id: 'continuite',
        name: 'Continuité Présidentielle (Renaissance / Horizons)',
        shortName: 'Continuité',
        color: 'sky',
        bgBadge: 'bg-sky-600 text-white',
        borderCard: 'border-sky-300 bg-sky-50/50',
        score: computeWeighted('continuite'),
        annualHouseholdGain: getHouseholdDelta('continuite'),
        fiveYearTotalImpact: getHouseholdDelta('continuite') * 5,
        headline:
          'Stabilité bancaire et fiscale (PFU 30 %, IS 15 %), mais 0 € de coup de pouce sur le coût de la vie, les études et retraite à 64 ans',
        bestFor: 'Éviter toute secousse sur les marchés financiers et appliquer sereinement les 6 leviers d\'optimisation de la maison à 305 000 €.',
        watchOut: 'Pouvoir d\'achat passif grignoté par l\'inflation, frais d\'orthodontie et d\'études supérieures 100 % à la charge de Nelly.',
      },
    ];

    return list.sort((a, b) => b.score - a.score);
  }, [weights, accountingMode, scenarios]);

  const filteredMeasures = useMemo(() => {
    if (selectedTarget === 'ALL') return MEASURES_2027;
    return MEASURES_2027.filter((m) => m.target === selectedTarget);
  }, [selectedTarget]);

  const monthlyLoanMedian = Math.round(
    calculateMonthlyMortgagePayment(params.loanAmount || 260000, params.mortgageInterestRate || 3.85, 25)
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* ================= EN-TÊTE EXÉCUTIF DE LA PAGE ================= */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              <Vote className="w-6 h-6" />
            </span>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
                Aide à la Décision Électorale 2027 • Chiffres Réels Nelly (40k€ + 20k€ div • Prêt 260k€ sur 25 ans • Maison 305k€)
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-white">
                Pour qui Nelly a-t-elle vraiment intérêt à voter en 2027 ?
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700 text-xs">
            <Landmark className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Prêt calibré : <strong>260 000 € sur 25 ans</strong> ({monthlyLoanMedian} €/mois à {params.mortgageInterestRate.toFixed(2)} %)
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-5xl">
          Cette page croise méthodiquement les <strong>18 mesures phares de 2027</strong> avec les 3 piliers de la vie de Nelly :{' '}
          <strong className="text-white">1) ELLE</strong> (40 000 € de salaire + 20 000 € de dividendes, maison à 305 000 € + 23 500 € de notaire, prêt de 260 000 € sur 25 ans, retraite),{' '}
          <strong className="text-white">2) SES 2 FILLES de 5 et 11 ans</strong> (cantine, orthodontie, piano, escalade, CAF et études supérieures dès 2033 à Aix/Marseille), et{' '}
          <strong className="text-white">3) SA SOCIÉTÉ NELL'IMMO SASU</strong> (loyer pro passant de 400 € à 650 € + 100 € charges, taux de crédit des acheteurs, DPE et IS).
        </p>
      </div>

      {/* ================= SECTION 1 : LA BOUSSOLE DE VOTE INTERACTIVE ================= */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-indigo-600" />
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                1. La Boussole Électorale Interactive de Nelly (Pondérez vos 6 priorités de vie)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Ajustez l'importance de chaque critère (de 0 à 10) et choisissez si Nelly garde sa comptabilité actuelle ou active les leviers de sa nouvelle maison à 305 000 €.
            </p>
          </div>

          {/* Switch Mode Passif vs Mode Optimisé Maison 305k€ */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => setAccountingMode('passive')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                accountingMode === 'passive'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sans rien changer (20k€ div. + loyer 400€)
            </button>
            <button
              type="button"
              onClick={() => setAccountingMode('optimized')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                accountingMode === 'optimized'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Avec Nouvelle Maison 305k€ (Bail 650€ + Prêt 25 ans)
            </button>
          </div>
        </div>

        {/* Grille des 6 curseurs + Podium temps réel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Colonne Gauche : Les 6 Curseurs (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
              <span className="font-extrabold text-slate-800 uppercase tracking-wide text-[11px]">
                Vos 6 Curseurs de Priorité (0 = Secondaire • 10 = Vital)
              </span>
              <button
                type="button"
                onClick={resetWeights}
                className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Réinitialiser
              </button>
            </div>

            {/* Curseur 1 */}
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-800">
                <span>👩 1. Mes Impôts & mes 20 000 € de Dividendes</span>
                <span className="text-indigo-600 font-extrabold">{weights.taxesAndDividends} / 10</span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={weights.taxesAndDividends}
                onChange={(e) => setWeights({ ...weights, taxesAndDividends: parseInt(e.target.value) })}
                className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
              />
              <div className="text-[10px] text-slate-500">Flat Tax 30 %, IR sur 40 000 €, part fiscale 2e enfant</div>
            </div>

            {/* Curseur 2 */}
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-800">
                <span>👧👧 2. Quotidien des 2 Filles (5 & 11 ans)</span>
                <span className="text-indigo-600 font-extrabold">{weights.daughtersDaily} / 10</span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={weights.daughtersDaily}
                onChange={(e) => setWeights({ ...weights, daughtersDaily: parseInt(e.target.value) })}
                className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
              />
              <div className="text-[10px] text-slate-500">Orthodontie 11 ans (1 250 €), cantines (777 €), piano, escalade, CAF</div>
            </div>

            {/* Curseur 3 */}
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-800">
                <span>🎓 3. Études Supérieures dès 2033 (Aix/Marseille)</span>
                <span className="text-indigo-600 font-extrabold">{weights.daughtersHigherEd} / 10</span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={weights.daughtersHigherEd}
                onChange={(e) => setWeights({ ...weights, daughtersHigherEd: parseInt(e.target.value) })}
                className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
              />
              <div className="text-[10px] text-slate-500">Garantie d'autonomie 1 063 €/mois (LFI) vs 0 € bourse CROUS (63 000 € sur 10 ans)</div>
            </div>

            {/* Curseur 4 */}
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-800">
                <span>🏢 4. Chiffre d'Affaires de Nell'Immo SASU</span>
                <span className="text-indigo-600 font-extrabold">{weights.agencyBusiness} / 10</span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={weights.agencyBusiness}
                onChange={(e) => setWeights({ ...weights, agencyBusiness: parseInt(e.target.value) })}
                className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
              />
              <div className="text-[10px] text-slate-500">Taux crédit acheteurs sur 25 ans, bailleurs privés, DPE F/G, gestion GUL</div>
            </div>

            {/* Curseur 5 */}
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-800">
                <span>🏠 5. Maison 305k€, Prêt 25 ans & Factures</span>
                <span className="text-indigo-600 font-extrabold">{weights.houseAndLoan25y} / 10</span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={weights.houseAndLoan25y}
                onChange={(e) => setWeights({ ...weights, houseAndLoan25y: parseInt(e.target.value) })}
                className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
              />
              <div className="text-[10px] text-slate-500">Déduction intérêts prêt 260k€/25 ans, TVA 5,5 % énergie/carburant, donation</div>
            </div>

            {/* Curseur 6 */}
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-800">
                <span>⏳ 6. Mon Âge de Départ à la Retraite</span>
                <span className="text-indigo-600 font-extrabold">{weights.retirementAge} / 10</span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={weights.retirementAge}
                onChange={(e) => setWeights({ ...weights, retirementAge: parseInt(e.target.value) })}
                className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
              />
              <div className="text-[10px] text-slate-500">60 ans (+100 800 € de pensions) vs 62-63 ans vs 64 ans</div>
            </div>
          </div>

          {/* Colonne Droite : Le Podium Personnalisé (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] font-mono uppercase text-amber-300 font-bold">
                    Bulletin N°1 recommandé selon vos curseurs ({accountingMode === 'optimized' ? 'Mode Optimisé Maison 305k€' : 'Mode Passif'})
                  </div>
                  <div className="text-base sm:text-lg font-black text-white">
                    1er : {compassResults[0].name} — Score {compassResults[0].score} / 100
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-slate-400">Gain Foyer Annuel</div>
                <div className="text-base font-black text-emerald-400">
                  {formatSignedEuro(compassResults[0].annualHouseholdGain)} / an
                </div>
              </div>
            </div>

            {/* Cartes des 4 candidats classées par score */}
            <div className="space-y-3">
              {compassResults.map((candidate, idx) => (
                <div
                  key={candidate.id}
                  className={`p-4 rounded-xl border-2 transition-all space-y-2 text-xs ${
                    idx === 0 ? candidate.borderCard + ' shadow-xs' : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-xs ${
                          idx === 0 ? 'bg-slate-900 text-amber-400' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        #{idx + 1}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-md font-bold text-[11px] ${candidate.bgBadge}`}>
                        {candidate.name}
                      </span>
                      <span className="font-black text-slate-900 text-sm">
                        {candidate.score} / 100
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold text-slate-700">
                        Pouvoir d'achat net :{' '}
                        <strong className={candidate.annualHouseholdGain >= 0 ? 'text-emerald-700' : 'text-rose-700'}>
                          {formatSignedEuro(candidate.annualHouseholdGain)}/an
                        </strong>
                      </span>
                    </div>
                  </div>

                  {/* Barre de progression du score */}
                  <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        candidate.color === 'emerald'
                          ? 'bg-emerald-600'
                          : candidate.color === 'amber'
                          ? 'bg-amber-500'
                          : candidate.color === 'indigo'
                          ? 'bg-indigo-600'
                          : 'bg-sky-500'
                      }`}
                      style={{ width: `${candidate.score}%` }}
                    />
                  </div>

                  <div className="font-bold text-slate-900">{candidate.headline}</div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                    <div className="p-2 rounded-lg bg-white/80 border border-slate-200/80 text-slate-700">
                      <strong className="text-emerald-800">✓ Pourquoi voter pour eux :</strong> {candidate.bestFor}
                    </div>
                    <div className="p-2 rounded-lg bg-white/80 border border-slate-200/80 text-slate-700">
                      <strong className="text-rose-800">⚠️ Le point de vigilance :</strong> {candidate.watchOut}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2 : TABLEAU EXHAUSTIF DES 18 MESURES PAR CIBLE (ELLE / FILLES / SOCIÉTÉ) ================= */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-indigo-600" />
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                2. Les 18 Mesures 2027 Passées au Crible : Impact sur ELLE, SES 2 FILLES & SA SOCIÉTÉ
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Cliquez sur une cible pour isoler comment chaque promesse électorale affecte concrètement Nelly, ses filles (5 et 11 ans) ou Nell'Immo SASU, avec la parade juridique associée.
            </p>
          </div>

          {/* Boutons filtres par cible */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => setSelectedTarget('ALL')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                selectedTarget === 'ALL'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Toutes (18 mesures)
            </button>
            <button
              type="button"
              onClick={() => setSelectedTarget('ELLE')}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                selectedTarget === 'ELLE'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>1. ELLE & Maison 305k€ (6)</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedTarget('FILLES')}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                selectedTarget === 'FILLES'
                  ? 'bg-pink-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>2. SES 2 FILLES 5 & 11 ans (6)</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedTarget('SOCIETE')}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                selectedTarget === 'SOCIETE'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>3. SA SOCIÉTÉ Nell'Immo (6)</span>
            </button>
          </div>
        </div>

        {/* Liste détaillée des mesures filtrées */}
        <div className="space-y-4">
          {filteredMeasures.map((m) => (
            <div
              key={m.id}
              className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-all space-y-3 text-xs"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200/80 pb-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${
                        m.target === 'ELLE'
                          ? 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                          : m.target === 'FILLES'
                          ? 'bg-pink-100 text-pink-800 border border-pink-200'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {m.targetLabel}
                    </span>
                    <LawBadge article={m.lawRef} />
                    <span className="text-[11px] text-slate-500 font-medium">{m.subtitle}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900">{m.title}</h4>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold text-[11px] border border-slate-200">
                  {m.feasibility}
                </span>
              </div>

              {/* Comparatif 4 blocs sur la mesure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                <div className="p-2.5 rounded-xl bg-sky-50/70 border border-sky-200">
                  <div className="text-[10px] font-bold uppercase text-sky-800">1. Continuité</div>
                  <div className="font-extrabold text-slate-900 mt-0.5">{m.continuiteImpact}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-300">
                  <div className="text-[10px] font-bold uppercase text-emerald-800">2. NFP / LFI</div>
                  <div className="font-extrabold text-emerald-950 mt-0.5">{m.lfiImpact}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-300">
                  <div className="text-[10px] font-bold uppercase text-amber-900">3. RN</div>
                  <div className="font-extrabold text-amber-950 mt-0.5">{m.rnImpact}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-indigo-50/80 border border-indigo-200">
                  <div className="text-[10px] font-bold uppercase text-indigo-800">4. Droite (LR)</div>
                  <div className="font-extrabold text-indigo-950 mt-0.5">{m.droiteImpact}</div>
                </div>
              </div>

              {/* Explication réelle + Parade maligne */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 pt-1">
                <div className="lg:col-span-7 p-3 rounded-xl bg-white border border-slate-200 text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">🔍 Pourquoi cet impact sur Nelly : </strong>
                  {m.realWorldExplanation}
                </div>
                <div className="lg:col-span-5 p-3 rounded-xl bg-indigo-950 text-indigo-100 border border-indigo-800 leading-relaxed">
                  <strong className="text-amber-300">🛡️ Parade & Action Maligne : </strong>
                  {m.smartParade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SECTION 3 : BILAN CONSOLIDÉ 5 ANS (QUINQUENNAT) & 12 ANS (2027-2039) ================= */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                3. Synthèse Financière Consolidée : ELLE + SES 2 FILLES + SA SOCIÉTÉ (Sur 1 an, 5 ans et 12 ans)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Addition complète sans angle mort : Revenus nets + Coût de la vie (avec prêt 260 000 € sur 25 ans) + Quotidien des filles + Études 2033 + Résultat Nell'Immo.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
            Base 2025 : 40k€ + 20k€ div • Prêt 25 ans
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs min-w-[760px]">
            <thead>
              <tr className="border-b-2 border-slate-200 text-slate-500 uppercase text-[10px] bg-slate-50">
                <th className="py-3 px-3">Pilier de Vie de Nelly</th>
                <th className="py-3 px-3 text-sky-800">1. Continuité</th>
                <th className="py-3 px-3 text-emerald-800 bg-emerald-50/40">2. NFP / LFI</th>
                <th className="py-3 px-3 text-amber-900 bg-amber-50/40">3. RN</th>
                <th className="py-3 px-3 text-indigo-800">4. Droite (LR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="py-2.5 px-3 font-bold text-slate-900">
                  👩 1. Pouvoir d'Achat Annuel Foyer — <span className="text-rose-700">Sans rien changer (Passif)</span>
                  <div className="text-[10px] font-normal text-slate-500">Salaire 40k€ + Dividendes 20k€ + Loyer 400€ - Factures 8 postes (prêt 25 ans inclus)</div>
                </td>
                <td className="py-2.5 px-3 font-semibold">{formatEuro(scenarios.continuite.passive.netPurchasingPower)} / an</td>
                <td className="py-2.5 px-3 font-semibold bg-emerald-50/30">{formatEuro(scenarios.lfi.passive.netPurchasingPower)} / an</td>
                <td className="py-2.5 px-3 font-extrabold text-amber-900 bg-amber-50/30">{formatEuro(scenarios.rn.passive.netPurchasingPower)} / an (N°1 Passif)</td>
                <td className="py-2.5 px-3 font-semibold">{formatEuro(scenarios.droite.passive.netPurchasingPower)} / an</td>
              </tr>

              <tr>
                <td className="py-2.5 px-3 font-bold text-slate-900">
                  🏠 2. Pouvoir d'Achat Annuel Foyer — <span className="text-emerald-700">Avec Nouvelle Maison 305k€ (Optimisé)</span>
                  <div className="text-[10px] font-normal text-slate-500">Bail 650€+100€ au Foncier Réel (prêt 260k€/25 ans) + CESU 3 131€ + PEE 3 880€ + Audit Pub</div>
                </td>
                <td className="py-2.5 px-3 font-bold text-sky-800">{formatEuro(scenarios.continuite.optimized.netPurchasingPower)} / an</td>
                <td className="py-2.5 px-3 font-black text-emerald-800 bg-emerald-50/50">{formatEuro(scenarios.lfi.optimized.netPurchasingPower)} / an (N°1 Optimisé)</td>
                <td className="py-2.5 px-3 font-bold text-amber-900 bg-amber-50/30">{formatEuro(scenarios.rn.optimized.netPurchasingPower)} / an</td>
                <td className="py-2.5 px-3 font-bold text-indigo-800">{formatEuro(scenarios.droite.optimized.netPurchasingPower)} / an</td>
              </tr>

              <tr>
                <td className="py-2.5 px-3 font-bold text-slate-900">
                  👧👧 3. Aides & Économies Directes sur les 2 Filles (5 & 11 ans)
                  <div className="text-[10px] font-normal text-slate-500">Cantine primaire/collège, orthodontie 11 ans, piano, escalade, allocations CAF</div>
                </td>
                <td className="py-2.5 px-3">375 € / an (CAF base)</td>
                <td className="py-2.5 px-3 font-extrabold text-emerald-800 bg-emerald-50/40">+3 987 € / an (Cantine & Ortho 0 €)</td>
                <td className="py-2.5 px-3 font-bold text-amber-900 bg-amber-50/30">+1 530 € / an (CAF + Part 2e enf.)</td>
                <td className="py-2.5 px-3 font-semibold text-indigo-800">+1 095 € / an (CAF + Garde)</td>
              </tr>

              <tr>
                <td className="py-2.5 px-3 font-bold text-slate-900">
                  🎓 4. Coût Net des Études Supérieures des 2 Filles (2033 → 2044)
                  <div className="text-[10px] font-normal text-slate-500">5 ans d'études × 2 filles à Aix-en-Provence / Marseille (quote-part Nelly 50 %)</div>
                </td>
                <td className="py-2.5 px-3 text-rose-700 font-semibold">-63 000 € (ou -43k€ avec pension)</td>
                <td className="py-2.5 px-3 font-extrabold text-emerald-800 bg-emerald-50/40">0 € (couvert par 1 063 €/mois/fille)</td>
                <td className="py-2.5 px-3 text-rose-700 font-semibold bg-amber-50/30">-63 000 € (ou -43k€ avec pension)</td>
                <td className="py-2.5 px-3 text-rose-700 font-semibold">-59 000 € (ou -40k€ avec pension)</td>
              </tr>

              <tr>
                <td className="py-2.5 px-3 font-bold text-slate-900">
                  🏢 5. Impact sur le Chiffre d'Affaires de Nell'Immo (Base 130 000 € HT)
                  <div className="text-[10px] font-normal text-slate-500">Effet combiné des taux de crédit sur 25 ans, du DPE et des investisseurs bailleurs</div>
                </td>
                <td className="py-2.5 px-3 font-semibold">130 000 € HT (Stable)</td>
                <td className="py-2.5 px-3 font-semibold text-emerald-800 bg-emerald-50/30">131 400 € HT (avec Gestion GUL)</td>
                <td className="py-2.5 px-3 font-semibold text-amber-900 bg-amber-50/30">124 800 € HT (Tension taux OAT)</td>
                <td className="py-2.5 px-3 font-extrabold text-indigo-800">145 600 € HT (+12 % Bailleurs)</td>
              </tr>

              <tr className="bg-slate-900 text-white">
                <td className="py-3 px-3 font-extrabold">
                  ⏳ 6. Âge de Retraite Taux Plein & Gain de Pensions Cumulées
                  <div className="text-[10px] font-normal text-slate-300">Sur la base d'une pension de dirigeante assimilée salariée de ~2 100 € net/mois</div>
                </td>
                <td className="py-3 px-3 font-bold text-sky-300">64 ans (Référence 0 €)</td>
                <td className="py-3 px-3 font-black text-emerald-300">60 ans (+100 800 € sur 4 ans)</td>
                <td className="py-3 px-3 font-bold text-amber-300">62-63 ans (+25 200 € à +50 400 €)</td>
                <td className="py-3 px-3 font-bold text-indigo-300">64 ans (+Cumul emploi-retraite)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= SECTION 4 : LE VERDICT SANS FILTRE (POUR QUI VOTER SELON SA PRIORITÉ N°1) ================= */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-black text-white">
              4. Le Verdict Sans Filtre : Pour qui Nelly doit-elle voter en 2027 selon sa priorité n°1 ?
            </h3>
          </div>
          <span className="text-[11px] font-mono text-indigo-300">Conclusion Méthodique 360°</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Option 1 : Voter RN */}
          <div className="p-4 rounded-xl bg-slate-800/90 border border-amber-500/40 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-black text-[11px] uppercase">
                Option A — Voter RN en 2027
              </span>
              <h4 className="font-extrabold text-amber-300 text-sm">
                Le meilleur choix « Zéro Effort Comptable & Pouvoir d'Achat Immédiat »
              </h4>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Si Nelly veut <strong>continuer à se verser ses 20 000 € de dividendes sans modifier ses habitudes</strong>, c'est le RN qui lui donne le plus de cash immédiat (+2 611 €/an devant LFI en passif) grâce au maintien de la Flat Tax à 30 %, à la <strong>part fiscale pleine dès le 2e enfant (+450 €)</strong>, aux <strong>allocations familiales universelles (+1 080 €/an)</strong> et à la <strong>TVA à 5,5 % sur l'énergie et le carburant (+1 160 €/an)</strong> pour sa maison de 125 m² et ses visites clients.
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-950/60 border border-amber-700/50 text-amber-200 text-[11px]">
              <strong>Condition si le RN passe :</strong> Mettre de côté dès aujourd'hui les +4 200 €/an du nouveau bail Nell'Immo (650 € + 100 €) pour payer l'orthodontie de l'aînée (1 250 €/an) et les études de 2033 (6 300 €/an).
            </div>
          </div>

          {/* Option 2 : Voter NFP / LFI */}
          <div className="p-4 rounded-xl bg-slate-800/90 border border-emerald-500/40 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 font-black text-[11px] uppercase">
                Option B — Voter NFP / LFI en 2027
              </span>
              <h4 className="font-extrabold text-emerald-300 text-sm">
                Le meilleur choix « Filles (Orthodontie, Cantine, Études 2033) & Retraite 60 ans »
              </h4>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Contrairement aux dirigeants qui prennent 80 000 € de dividendes, Nelly n'a que <strong>20 000 € de dividendes</strong> et peut en remplacer la majorité (11 211 €/an en récurrent, 100 % en Année 1) grâce à l'achat de sa maison à 305 000 € (bail à 650 € + 100 € déduit grâce aux intérêts du prêt de 260 000 € sur 25 ans + PEE notaire + CESU). Une fois protégée de la hausse d'impôt, elle empoche <strong>+3 987 €/an d'économies sur ses filles</strong>, <strong>63 000 € d'études financées dès 2033</strong> et la <strong>retraite à 60 ans (+100 800 €)</strong>.
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-200 text-[11px]">
              <strong>Condition si LFI passe :</strong> Activer impérativement le nouveau bail de 650 € + 100 € au Foncier Réel + PEE + CESU pour ne laisser que ~8 800 € de dividendes taxables, et créer un pôle Gestion Locative GUL chez Nell'Immo.
            </div>
          </div>

          {/* Option 3 : Voter Droite / Continuité */}
          <div className="p-4 rounded-xl bg-slate-800/90 border border-indigo-500/40 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-2.5 py-1 rounded-md bg-indigo-500 text-white font-black text-[11px] uppercase">
                Option C — Voter Droite (LR) / Continuité
              </span>
              <h4 className="font-extrabold text-indigo-300 text-sm">
                Le meilleur choix « Croissance du Chiffre d'Affaires de Nell'Immo & Sérénité Bancaire »
              </h4>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Si la priorité numéro 1 de Nelly est de <strong>passer de 13 à 16 ventes par an chez Nell'Immo (+15 600 € HT/an de commissions)</strong>, la Droite Républicaine offre le meilleur environnement métier : relance du statut du bailleur privé, assouplissement du calendrier DPE, taux de crédit acquéreurs sur 25 ans détendus autour de 3,3 %, maintien de la Flat Tax à 30 % et déplafonnement des allocations familiales (+725 €/an).
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-700/50 text-indigo-200 text-[11px]">
              <strong>Condition si la Droite passe :</strong> Préparer sa retraite privée (PER / Holding immobilière) car l'âge légal restera bloqué à 64 ans, et financer les études de 2033 via la déduction de pension alimentaire.
            </div>
          </div>
        </div>

        {/* Règle d'or finale */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950 via-slate-900 to-emerald-950 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start sm:items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <span className="font-black text-white uppercase tracking-wide block">
                La Règle d'Or pour Nelly avant Mai 2027 :
              </span>
              <span className="text-slate-300">
                En verrouillant son <strong>prêt de 260 000 € sur 25 ans (3,7 % - 4,0 %)</strong> et en passant son loyer Nell'Immo de <strong>400 € à 650 € + 100 € charges</strong> dans sa maison de 305 000 €, Nelly est <strong>gagnante financièrement quel que soit le vainqueur de 2027 (+10 210 € à +13 107 €/an)</strong>. Son vote de 2027 peut donc se faire librement entre ses valeurs personnelles, l'école/études de ses filles (LFI), ses factures/dividendes passifs (RN) ou le boom des investisseurs immobiliers (Droite).
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
