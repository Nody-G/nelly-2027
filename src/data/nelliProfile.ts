import { FiscalParameters } from '../types/fiscal';

export const initialFiscalParameters: FiscalParameters = {
  totalRevenue: 70000,
  dividendsGross: 30000,
  companyForm: 'SASU',
  hasEmployee: true,
  isSingleParent: true, // Case T parent isolé (garde alternée 2 enfants = 1.75 parts)
  homeOfficeRentMonthly: 600, // 300 € actuel -> 600 € dans la maison à 305 000 €
  adSavingsPct: 12, // 12% d'économie sur 40 000 € = +4 800 € HT
  housePurchasePrice: 305000,
  mortgageInterestRate: 3.5,
  cadetteAge: 5,
  aineeAge: 11,
  viewMode: 'recurring', // Par défaut : vue pérenne récurrente tous les ans
};

export const agencyProfile = {
  founderName: 'Nelly Fernandez',
  corporateName: 'NELL\'IMMO',
  brandName: 'Nell\'Immo',
  legalForm: 'SASU (Société par Actions Simplifiée Unipersonnelle)',
  executiveStatus: 'Présidente de SASU (Assimilée salariée au sens de l\'Art. L. 311-3 23° du Code de la Sécurité Sociale)',
  siren: '853 807 006',
  siret: '853 807 006 00012',
  rcs: 'Salon-de-Provence',
  creationDate: '01/10/2019 (7 ans d\'activité continue)',
  shareCapital: 2000, // 2 000 €
  codeAPE: '68.31Z (Agences immobilières)',
  professionalCard: 'CPI 1310 2019 000 042 974 (CCI Marseille Provence)',
  registeredAddress: '26 Avenue des Enjouvènes, 13330 Pélissanne',
  city: 'Pélissanne (13330)',
  department: 'Bouches-du-Rhône (13)',
  activity: 'Transaction immobilière, estimations & mandats exclusifs (Pays Salonais)',
  annualRevenue: 130000, // ~130 000 € HT de Chiffre d'Affaires annuel
  annualAdBudget: 40000,
  portalsUsed: ['SeLoger / Logic-Immo', 'LeBonCoin', 'Bien\'ici', 'Affiches & Panneaux locaux', 'Vidéos & Web'],
  softwareUsed: ['CRM Transaction (Hektor / Apimo)', 'Signature Électronique', 'Pige immobilière'],
  houseAcquisition: {
    price: 305000,
    location: 'Pélissanne',
    totalSurface: 125, // m2
    professionalProportion: 0.28, // 28% de la surface et charges (35 m2 bureau + archives + garage stockage)
    monthlyRentFairMarket: 600,
    monthlyChargesRefactured: 100,
  },
  existingDeductions: [
    'Véhicule de fonction en leasing (déjà déduit)',
    'Frais de repas & réceptions clients (déjà déduits)',
    'Abonnements internet & téléphonie pro (déjà déduits)',
    'Sous-location locataire actuelle (300 € / mois déjà déduits)',
  ],
  sasuStrategicAdvantage: {
    dividendsUrssafExemption: 'En SASU, les dividendes ne sont PAS soumis aux cotisations sociales TNS (contrairement à une SARL où ils seraient taxés à 42% au-delà de 200 € car le capital est de 2 000 €). Les dividendes ne supportent que les prélèvements sociaux (17,2%) et l\'IR (Flat tax 12,8% = 30% PFU sous Macron/RN).',
    salaryOptimization: 'Le salaire net de Présidente de SASU doit être calibré (1 500 € net/mois) pour valider 4 trimestres de retraite sans payer les 75% de cotisations sociales salariales et patronales sur l\'intégralité des 70k€.',
    realEstateLease: 'Le bail professionnel consenti par Nelly Fernandez (personne physique) à Nell\'Immo SASU (Art. 28 & 31 CGI) permet de sortir 8 400 € / an nets d\'impôts et de charges.'
  }
};
