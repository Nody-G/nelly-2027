import { CompanyForm } from './index';

export type CalculationViewMode = 'recurring' | 'firstYear';

export interface FiscalParameters {
  totalRevenue: number; // 60 000 € sur 2025 (40 000 € salaire + 20 000 € dividendes)
  dividendsGross: number; // 20 000 € sur 2025
  homeOfficeRentMonthly: number; // 650 €/mois visé dans la nouvelle maison (contre 400 €/mois actuellement en location)
  currentTenantRentMonthly: number; // 400 €/mois facturés actuellement à Nell'Immo dans la maison louée à Pélissanne
  companyForm: CompanyForm; // 'SASU' (réel) vs 'SARL' (simulation)
  isSingleParentCaseT: boolean; // Case T parent isolé
  adBudgetAnnual: number; // 40 000 €
  adSavingTargetPercent: number; // 12%
  housePurchasePrice: number; // 305 000 € (nouvelle maison achetée à Pélissanne)
  notaryFees: number; // 23 500 € de frais de notaire
  loanAmount: number; // 260 000 € de prêt immobilier
  mortgageInterestRate: number; // 3,85 % par défaut (attendu entre 3,7 % et 4,0 %)
  enableOptimizationLevers: boolean;
  viewMode: CalculationViewMode; // 'recurring' (pérenne annuel) vs 'firstYear' (année 1 achat maison)
}

export interface TaxBracket {
  limitMin: number;
  limitMax: number | null;
  rate: number;
  label?: string;
}

export interface LawReference {
  code: string;
  article: string;
  title: string;
  summary: string;
  fullQuote?: string;
  officialSourceUrl?: string;
  practicalApplication: string;
  urssafSafeguard: string;
}
