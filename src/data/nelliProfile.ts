import { FiscalParameters } from '../types/fiscal';

export const initialFiscalParameters: FiscalParameters = {
  totalRevenue: 60000, // 40 000 € revenu (salaire net) + 20 000 € dividendes sur 2025
  dividendsGross: 20000, // 20 000 € de dividendes sur 2025
  homeOfficeRentMonthly: 650, // Nouveau bail propriétaire dans la maison à 305 000 € (contre 400 €/mois actuellement)
  currentTenantRentMonthly: 400, // 400 €/mois actuellement facturés à Nell'Immo dans sa maison louée à Pélissanne
  companyForm: 'SASU', // Forme juridique réelle certifiée : SASU (Présidente assimilée salariée)
  isSingleParentCaseT: true,
  adBudgetAnnual: 40000,
  adSavingTargetPercent: 12,
  housePurchasePrice: 305000, // Nouvelle maison en cours d'achat à Pélissanne
  notaryFees: 23500, // 23 500 € de frais de notaire
  loanAmount: 260000, // Prêt immobilier de 260 000 €
  loanDurationYears: 25, // Prêt sur 25 ans (300 mois)
  mortgageInterestRate: 3.85, // Taux attendu oscillant entre 3,7 % et 4,0 % (médiane 3,85 %)
  enableOptimizationLevers: true,
  viewMode: 'recurring', // Par défaut : affiche le gain récurrent annuel honnête
};

// Profil authentifié de l'agence immobilière de Nelly Fernandez (Registre du Commerce / INSEE / Carte T)
export const agencyProfile = {
  corporateName: "NELL'IMMO",
  founderName: 'Nelly Fernandez',
  siren: '853 807 006',
  siret: '853 807 006 00018',
  rcs: '853 807 006 R.C.S. Salon-de-Provence',
  legalForm: 'SASU (Société par Actions Simplifiée Unipersonnelle)',
  presidentStatus: 'Présidente assimilée salariée (Régime Général - Art. L. 311-3 23° CSS)',
  shareCapital: 2000, // 2 000,00 €
  creationDate: '12/09/2019',
  registeredAddress: '26 Avenue des Enjouvènes, 13330 Pélissanne',
  cpiCardNumber: 'CPI 1310 2019 000 042 974',
  cpiIssuer: 'CCI Marseille-Provence',
  financialGuarantee: 'GALIAN (89 rue la Boétie, 75008 Paris)',
  apeCode: '6831Z - Agences immobilières',
  // Modèle économique & revenus réels 2025
  annualTurnoverHT: 130000, // ~130 000 € HT de chiffre d'affaires annuel
  salaryNet2025: 40000, // 40 000 € de revenu (salaire net) sur 2025
  dividendsGross2025: 20000, // 20 000 € de dividendes sur 2025
  totalRevenue2025: 60000, // 60 000 € au total sur 2025
  currentRentedHouseOfficeLeaseMonthly: 400, // 400 €/mois facturés actuellement à Nell'Immo dans la maison louée à Pélissanne
  // Acquisition immobilière en cours à Pélissanne
  newHousePurchasePrice: 305000, // 305 000 € prix d'achat nouvelle maison
  notaryFees: 23500, // 23 500 € de frais de notaire
  totalProjectCost: 328500, // 328 500 € coût total (305 000 € + 23 500 €)
  loanAmount: 260000, // 260 000 € empruntés
  loanDurationYears: 25, // 25 ans
  personalDownPayment: 68500, // 68 500 € d'apport personnel (23 500 € notaire + 45 000 € sur le bien)
  expectedRateRange: [3.7, 4.0] as const, // Taux attendu entre 3,7 % et 4,0 %
  standardCommissionRatePct: 3.3,
  competitiveCommissionRatePct: 3.0,
  estimatedAnnualDeals: 13,
  alreadyDeductedExpensesNote: 'Véhicule en leasing, téléphone/internet et frais de réception/repas clients sont déjà passés en charges dans la comptabilité de la SASU.',
};

export const nelliPersonalSituation = {
  profession: "Présidente fondatrice de NELL'IMMO (SASU)",
  location: 'Pélissanne (13330 - Bouches-du-Rhône)',
  maritalStatus: 'Divorcée, parent isolé (Case T cochée)',
  children: [
    {
      id: 'cadette',
      title: 'Fille Cadette',
      age: 5,
      schoolLevel: 'Grande Section Maternelle → Entrée au CP en sept. 2026',
      custody: 'Garde alternée (50/50)',
      custodyTaxParts: 0.25,
      sportActivity: 'Escalade (Club / Licence FFME & équipement)',
      annualActivityCostForNelly: 400, // 400 €/an à la charge de Nelly
    },
    {
      id: 'ainee',
      title: 'Fille Aînée',
      age: 11,
      schoolLevel: 'Entrée en 6ème (Collège Roger Carcassonne Pélissanne)',
      custody: 'Garde alternée (50/50)',
      custodyTaxParts: 0.25,
      musicActivity: 'Cours de Piano (École Municipale de Musique / domicile)',
      annualActivityCostForNelly: 400, // 400 €/an à la charge de Nelly
      medicalSpecific: 'Orthodontie adolescente (semestres multi-bagues)',
    },
  ],
  realEstateProject: {
    price: 305000,
    notaryFees: 23500,
    totalOperationCost: 328500,
    loanAmount: 260000,
    loanDurationYears: 25,
    personalDownPayment: 68500,
    expectedInterestRateMin: 3.7,
    expectedInterestRateMax: 4.0,
    expectedInterestRateMid: 3.85,
    currentRentedHouseLeaseMonthly: 400, // Loyer actuel dans la maison louée à Pélissanne
    targetNewHouseLeaseMonthly: 650, // Loyer cible dans la nouvelle maison achetée à 305 000 €
    targetNewHouseChargesMonthly: 100, // Quote-part charges (eau/élec/clim)
    location: 'Pélissanne (13330)',
    totalSurfaceSqm: 125,
    proDedicatedSurfaceSqm: 35, // Bureau réception + archivage Loi Hoguet + stockage panneaux
    proProportionPercent: 28,
  },
};
